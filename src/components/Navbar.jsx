"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1a2438] border-b border-[#4a3d34] px-4 shadow-lg relative">
      <div className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        
        <div className="flex gap-5 items-center">
          <Image
            src={"/logo.png"}
            alt="SkillSphere Logo"
            loading="eager"
            width={40}
            height={40}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#b79c8d] to-[#4a3d34]">
            SkillSphere
          </h3>
        </div>

        <ul className="hidden md:flex items-center gap-6 text-sm text-[#8b756c]">
          <li>
            <Link href={"/"} className="text-[#b79c8d] hover:text-white transition-colors">Home</Link>
          </li>
          <li>
            <Link href={"/courses"} className="text-[#b79c8d] hover:text-white transition-colors">Courses</Link>
          </li>
          <li>
            <Link href={"/profile"} className="text-[#b79c8d] hover:text-white transition-colors">My Profile</Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link href={"/signin"}>
            <button className="px-4 py-2 rounded text-sm font-medium border border-[#4a3d34] text-[#b79c8d] hover:bg-[#4a3d34] hover:text-white transition-colors">
              Login
            </button>
          </Link>
          <Link href={"/signup"}>
            <button className="px-4 py-2 rounded text-sm font-medium bg-[#4a3d34] text-[#b79c8d] hover:bg-[#8b756c] hover:text-white transition-colors shadow-md">
              Register
            </button>
          </Link>
        </div>

        {/* HAMBURGER ICON (Mobile) */}
        <button
          className="md:hidden text-[#b79c8d] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1a2438] border-t border-[#4a3d34] py-4 px-4 absolute top-full left-0 w-full z-50">
          <ul className="flex flex-col gap-4 text-sm text-[#8b756c]">
            <li>
              <Link
                href={"/"}
                className="text-[#b79c8d] hover:text-white transition-colors block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/courses"}
                className="text-[#b79c8d] hover:text-white transition-colors block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href={"/profile"}
                className="text-[#b79c8d] hover:text-white transition-colors block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                My Profile
              </Link>
            </li>
            <li className="flex flex-col gap-2 pt-2 border-t border-[#4a3d34]">
              <Link href={"/signin"} onClick={() => setIsMenuOpen(false)}>
                <button className="w-full px-4 py-2 rounded text-sm font-medium border border-[#4a3d34] text-[#b79c8d] hover:bg-[#4a3d34] hover:text-white transition-colors">
                  Login
                </button>
              </Link>
              <Link href={"/signup"} onClick={() => setIsMenuOpen(false)}>
                <button className="w-full px-4 py-2 rounded text-sm font-medium bg-[#4a3d34] text-[#b79c8d] hover:bg-[#8b756c] hover:text-white transition-colors shadow-md">
                  Register
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;