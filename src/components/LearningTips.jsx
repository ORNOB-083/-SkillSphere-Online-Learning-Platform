"use client";
import "animate.css";

const LearningTips = () => {
  const tips = [
    {
      title: "🍅 Pomodoro Technique",
      desc: "Work for 25 minutes, then take a 5-minute break. Repeat 4 times for a productive study block."
    },
    {
      title: "📝 Active Recall",
      desc: "Instead of just rereading notes, test yourself. Close the book and write down what you remember."
    },
    {
      title: "⏰ Time Blocking",
      desc: "Dedicate specific time slots for different subjects. Avoid multitasking to stay focused."
    },
    {
      title: "🧠 Spaced Repetition",
      desc: "Review content at increasing intervals. It helps move information from short-term to long-term memory."
    },
    {
      title: "🎯 SMART Goals",
      desc: "Set Specific, Measurable, Achievable, Relevant, and Time-bound goals for each study session."
    },
    {
      title: "🌿 The 2-Minute Rule",
      desc: "If a task takes less than 2 minutes, do it immediately. It prevents small tasks from piling up."
    }
  ];

  return (
    <section className="bg-[#333c4d] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#b79c8d] mb-3 animate__animated animate__fadeInDown">
            📌 Learning Tips
          </h2>
          <p className="text-[#8b756c] text-lg max-w-2xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
            Master your study habits with these proven techniques and time management strategies.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className={`bg-[#4a3d34] p-6 rounded-xl shadow-lg border border-[#8b756c]/30 hover:border-[#b79c8d] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl animate__animated animate__fadeInUp animate__delay-${(index % 3) * 200}ms`}
              style={{
                animationDelay: `${index * 100}ms`, // Staggered entrance
                animationDuration: "0.8s"
              }}
            >
              <h3 className="text-lg font-bold text-[#b1a59f] mb-2">
                {tip.title}
              </h3>
              <p className="text-[#ccc0bb] text-sm leading-relaxed">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LearningTips;