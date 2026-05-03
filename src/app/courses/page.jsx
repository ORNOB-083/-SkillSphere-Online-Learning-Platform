// src/app/courses/page.jsx
"use client";

import { useEffect, useState } from "react";
import CourseCard from "@/components/CourseCard";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading courses:", error);
        setLoading(false);
      });
  }, []);

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <section className="bg-[#27292c] py-12 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-4xl font-bold text-[#b79c8d] mb-4">
            All Courses
          </h1>

          <p className="text-[#8b756c] text-lg max-w-2xl mx-auto">
            Explore skill-based programs in development, design, business,
            marketing, and more.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-10">
          <input
            type="text"
            placeholder="Search courses by title..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full px-5 py-3 rounded-lg bg-[#1a2438] border border-[#4a3d34] text-[#b79c8d] focus:outline-none focus:border-[#b79c8d]"
          />
        </div>

        {loading ? (
          <div className="text-center py-20 text-[#b79c8d]">
            Loading courses...
          </div>
        ) : filteredCourses.length === 0 ? (
          <div className="text-center py-20 text-[#8b756c]">
            No courses found.
          </div>
        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}