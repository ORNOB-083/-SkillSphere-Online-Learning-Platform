import Image from "next/image";
import Link from "next/link";
import { Card, Button, Chip } from "@heroui/react";
import { FaStar } from "react-icons/fa";

const CourseCard = ({ course }) => {
  return (
    <Card className="bg-[#4a3d34] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-[#8b756c]/30 hover:border-[#b79c8d] p-0">
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />
        <Chip className="absolute top-3 right-3 bg-[#1a2438]/80 text-[#b79c8d] backdrop-blur-sm">
          {course.category}
        </Chip>
      </div>

      <div className="p-5 space-y-3">
        <h2 className="text-lg font-bold text-[#b79c8d] line-clamp-2">
          {course.title}
        </h2>

        <p className="text-sm text-[#8b756c]">
          Instructor: {course.instructor}
        </p>

        <div className="flex justify-between items-center text-sm">
          <span className="text-[#8b756c]">{course.duration}</span>

          <div className="flex items-center gap-1 text-[#b79c8d]">
            <FaStar className="text-yellow-400" />
            <span>{course.rating}</span>
          </div>
        </div>

        <Link href={`/courses/${course.id}`}>
          <Button className="w-full bg-[#1a2438] text-[#b79c8d] hover:bg-[#b79c8d] hover:text-[#1a2438]">
            View Details
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default CourseCard;