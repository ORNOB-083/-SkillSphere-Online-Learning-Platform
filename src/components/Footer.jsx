import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative">
      <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-[#4a3d34] to-transparent" />

      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 bg-[#1a2438]" />

      {/* Subtle Gradient Glow */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-tr 
        from-[#b79c8d]/5 via-transparent to-[#4a3d34]/5 
        blur-3xl"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="SkillSphere logo"
                width={32}
                height={32}
                className="brightness-200"
              />
              <h2 className="text-xl font-semibold tracking-tight text-[#b79c8d]">
                SkillSphere
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-[#8b756c] max-w-xs">
              Master new skills at your own pace. Learn from industry experts 
              and unlock your full potential with interactive online courses.
            </p>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-sm font-semibold text-[#b79c8d] mb-4">
              Courses
            </h3>
            <ul className="space-y-3 text-sm text-[#8b756c]">
              <li>
                <Link
                  href="/courses"
                  className="hover:text-[#b79c8d] transition"
                >
                  All Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:text-[#b79c8d] transition"
                >
                  Trending Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="hover:text-[#b79c8d] transition"
                >
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-[#b79c8d] mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-[#8b756c]">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#b79c8d] transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-[#b79c8d] transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-[#b79c8d] transition"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA Block */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#b79c8d]">
              Start learning
            </h3>

            <p className="text-sm text-[#8b756c]">
              Join thousands of students learning new skills today.
            </p>

            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full 
              bg-[#4a3d34] text-[#b79c8d] hover:text-white
              text-sm font-medium transition-all duration-200 
              hover:scale-[1.02] hover:shadow-lg hover:shadow-[#4a3d34]/50"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-[#4a3d34] to-transparent" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#8b756c]">
          <p>© {new Date().getFullYear()} SkillSphere. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="hover:text-[#b79c8d] transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="hover:text-[#b79c8d] transition"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;