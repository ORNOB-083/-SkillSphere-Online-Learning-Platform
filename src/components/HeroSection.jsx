"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import "animate.css";

const HeroSection = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  
  const textLines = [
    "Learn from Industry Experts",
    "Master Web Development",
    "Design Like a Pro"
  ];

  useEffect(() => {
    // Show each line one after another with 2 second delay
    const interval = setInterval(() => {
      setVisibleIndex((prev) => {
        if (prev < textLines.length - 1) {
          return prev + 1;
        }
        return prev; // Stop at the last one
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [textLines.length]);

  return (
    <section className="relative bg-[#212327] text-white py-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center min-h-[500px] text-center">
        
        {/* Title */}
        <h1 className="text-3xl md:text-6xl font-black p-5 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#b79c8d] to-[#864414]">
          Upgrade Your Skills Today
        </h1>

        {/* Animated Lines */}
        <div className="min-h-[120px] md:min-h-[80px] flex flex-col items-center gap-2">
          {textLines.map((line, index) => (
            <div
              key={index}
              className={`text-xl md:text-3xl text-[#b79c8d] transition-all duration-700 ${
                index <= visibleIndex
                  ? "opacity-100 translate-y-0 animate__animated animate__fadeInUp"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {line}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8 animate__animated animate__fadeIn animate__delay-5s">
          <Link href={"/courses"}>
            <button className="px-8 py-4 rounded-lg text-lg font-bold bg-[#4a3d34] text-[#b79c8d] hover:bg-[#8b756c] hover:text-white transition-colors shadow-lg">
              Browse Courses
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;