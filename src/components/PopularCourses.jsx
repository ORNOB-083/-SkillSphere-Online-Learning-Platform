import CourseCard from "./CourseCard";

const PopularCourses = async () => {
  const res = await fetch("http://localhost:3000/courses.json", {
    cache: "no-store",
  });

  const courses = await res.json();

  const topCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <section className="py-16 px-4 bg-[#27292c]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-4xl font-bold text-[#b79c8d] mb-3">
            Popular Courses
          </h2>

          <p className="text-[#8b756c] text-lg max-w-2xl mx-auto">
            Explore our highest-rated courses and start building future-ready
            skills today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;