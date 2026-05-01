"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaUsers, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import "animate.css";

const TopInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/instructors.json')
      .then(res => res.json())
      .then(data => {
        setInstructors(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading instructors:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-[#b79c8d]">Loading instructors...</div>;
  }

  return (
    <section className="bg-[#1a2438] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#b79c8d] mb-3 animate__animated animate__fadeInDown">
            🏆 Top Instructors
          </h2>
          <p className="text-[#8b756c] text-lg max-w-2xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
            Learn from the best in the industry. Our instructors are experts with years of real-world experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor, index) => (
            <div
              key={instructor.id}
              className="bg-[#4a3d34] p-6 rounded-xl shadow-lg border border-[#8b756c]/30 hover:border-[#b79c8d] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate__animated animate__fadeInUp"
              style={{
                animationDelay: `${index * 150}ms`,
                animationDuration: "0.8s"
              }}
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  width={96}
                  height={96}
                  className="rounded-full object-cover border-4 border-[#b79c8d]"
                />
              </div>

              <h3 className="text-lg font-bold text-[#b79c8d] text-center">
                {instructor.name}
              </h3>
              <p className="text-sm text-[#8b756c] text-center mb-3">
                {instructor.role}
              </p>

              <div className="flex justify-center gap-4 mb-4">
                <div className="flex items-center gap-1 text-[#b79c8d]">
                  <FaStar className="text-yellow-400" />
                  <span className="text-sm font-medium">{instructor.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-[#8b756c]">
                  <FaUsers />
                  <span className="text-sm">{(instructor.students / 1000).toFixed(1)}K</span>
                </div>
              </div>

              <div className="flex justify-center gap-3">
                <Link href={instructor.social.linkedin} target="_blank">
                  <div className="p-2 bg-[#1a2438] rounded-full hover:bg-[#b79c8d] transition-colors">
                    <FaLinkedin className="text-[#b79c8d] hover:text-[#1a2438] text-lg" />
                  </div>
                </Link>
                <Link href={instructor.social.twitter} target="_blank">
                  <div className="p-2 bg-[#1a2438] rounded-full hover:bg-[#b79c8d] transition-colors">
                    <FaTwitter className="text-[#b79c8d] hover:text-[#1a2438] text-lg" />
                  </div>
                </Link>
                <Link href={instructor.social.github} target="_blank">
                  <div className="p-2 bg-[#1a2438] rounded-full hover:bg-[#b79c8d] transition-colors">
                    <FaGithub className="text-[#b79c8d] hover:text-[#1a2438] text-lg" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;