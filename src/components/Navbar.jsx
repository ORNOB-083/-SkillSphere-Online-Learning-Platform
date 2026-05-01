"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#1a2438] border-b border-[#4a3d34] px-4 shadow-lg">
      <div className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        
        {/* LEFT: LOGO */}
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="SkillSphere Logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          {/* Gradient Logo (Directly in file - no global.css shortcuts) */}
          <h3 className="font-black text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#b79c8d] to-[#4a3d34]">
            SkillSphere
          </h3>
        </div>

        {/* MIDDLE: NAVIGATION LINKS */}
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

        {/* RIGHT: AUTH ACTIONS */}
        <div className="flex items-center gap-3">
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

      </div>
    </nav>
  );
};

export default Navbar;