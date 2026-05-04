"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Button, Card } from "@heroui/react";
import { FaStar, FaClock, FaUser, FaBook, FaCheckCircle } from "react-icons/fa";
import { toast } from "react-toastify";

export default function CourseDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [checkingAuth, setCheckingAuth] = useState(true);

  const curriculum = [
    "Introduction to the course",
    "Setting up your environment",
    "Core concepts explained",
    "Hands-on practice session",
    "Real-world project walkthrough",
    "Final assessment & next steps",
  ];

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await authClient.getSession();
        if (!data?.user) {
          const currentUrl = window.location.pathname;
          router.push(`/signin?redirect=${encodeURIComponent(currentUrl)}`);
          return;
        }
        setCheckingAuth(false);
      } catch (err) {
        console.error("Auth check failed:", err);
        router.push("/signin");
      }
    };
    checkAuth();
  }, [router]);

  useEffect(() => {
    if (checkingAuth) return;

    const fetchCourse = async () => {
      try {
        const res = await fetch("/courses.json");
        const data = await res.json();
        const foundCourse = data.find((c) => c.id === parseInt(id));
        if (!foundCourse) {
          toast.error("Course not found");
          router.push("/courses");
          return;
        }
        setCourse(foundCourse);
      } catch (err) {
        console.error("Error fetching course:", err);
        toast.error("Failed to load course details");
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id, checkingAuth, router]);

  if (checkingAuth || loading) {
    return (
      <div className="min-h-screen bg-[#1a2438] flex items-center justify-center">
        <div className="text-[#b79c8d] animate-pulse flex flex-col items-center gap-2">
          <div className="w-12 h-12 border-4 border-[#b79c8d] border-t-transparent rounded-full animate-spin"></div>
          <p>Loading course details...</p>
        </div>
      </div>
    );
  }

  if (!course) return null;

  return (
    <div className="min-h-screen bg-[#1a2438] py-12 px-4">
      <div className="max-w-5xl mx-auto">
 
        <Link
          href="/courses"
          className="inline-flex items-center text-[#b79c8d] hover:text-white mb-6 transition-colors"
        >
          ← Back to All Courses
        </Link>

        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden border border-[#4a3d34] mb-8">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a2438]/80 to-transparent flex items-end p-6">
            <div>
              <span className="inline-block bg-[#4a3d34] text-[#b79c8d] text-xs font-bold px-3 py-1 rounded-full mb-2">
                {course.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-[#b79c8d]">
                {course.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border border-[#4a3d34] bg-[#1a2438] p-6">
              <h2 className="text-2xl font-bold text-[#b79c8d] mb-4">
                About This Course
              </h2>
              <p className="text-[#8b756c] leading-relaxed mb-6">
                {course.description}
              </p>

              <h3 className="text-xl font-bold text-[#b79c8d] mb-4">
                Course Curriculum
              </h3>
              <ul className="space-y-3">
                {curriculum.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-[#8b756c] border-b border-[#4a3d34]/50 pb-2"
                  >
                    <FaCheckCircle className="text-[#b79c8d] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div>
            <Card className="border border-[#4a3d34] bg-[#1a2438] p-6 sticky top-6">
              <h3 className="text-xl font-bold text-[#b79c8d] mb-4">
                Course Details
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-[#4a3d34]/50 pb-2">
                  <span className="text-[#8b756c] flex items-center gap-2">
                    <FaUser /> Instructor
                  </span>
                  <span className="text-[#b79c8d] font-medium">
                    {course.instructor}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-[#4a3d34]/50 pb-2">
                  <span className="text-[#8b756c] flex items-center gap-2">
                    <FaClock /> Duration
                  </span>
                  <span className="text-[#b79c8d] font-medium">
                    {course.duration}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-[#4a3d34]/50 pb-2">
                  <span className="text-[#8b756c] flex items-center gap-2">
                    <FaStar className="text-yellow-400" /> Rating
                  </span>
                  <span className="text-[#b79c8d] font-medium">
                    {course.rating} / 5.0
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-[#4a3d34]/50 pb-2">
                  <span className="text-[#8b756c] flex items-center gap-2">
                    <FaBook /> Level
                  </span>
                  <span className="text-[#b79c8d] font-medium">
                    {course.level}
                  </span>
                </div>
              </div>

              <Button
                className="w-full mt-6 bg-[#b79c8d] text-[#1a2438] hover:bg-[#8b756c] hover:scale-105 transition-all duration-200 font-semibold"
                onClick={() => {
                  toast.success("🎉 You're enrolled in this course!");
                }}
              >
                Enroll Now
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}