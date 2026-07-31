import Navbar from "@/components/Navbar";
import Link from "next/link";

const projects = [
  {
    title: "畢業專題 🌱",
    desc: "使用 YOLO Pose 與 Mediapipe 建立人體姿勢分析平台，提供動作評估與改善建議。",
    tech: "YOLO8 / HTML / CSS / JavaScript / PHP / MySQL",
  },
];

export default function Projects() {
  return (
    <main
      className="
      min-h-screen
      bg-[#FFF9F3]
      px-8
      py-20
      "
    >
      <Navbar />

      <h1
        className="
        text-4xl
        font-bold
        text-center
        "
      >
        Projects 🌿
      </h1>

      <div
        className="
        max-w-5xl
        mx-auto
        grid
        md:grid-cols-2
        gap-8
        mt-12
        "
      >
        {projects.map((project) => (
          <Link
            href="/projects/motion-analysis"
            key={project.title}
          >
            <div
              className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
              hover:shadow-xl
              hover:-translate-y-2
              transition
              cursor-pointer
              h-full
              "
            >
              <h2
                className="
                text-xl
                font-bold
                "
              >
                {project.title}
              </h2>

              <p
                className="
                mt-4
                text-gray-600
                "
              >
                {project.desc}
              </p>

              <p
                className="
                mt-5
                text-sm
                text-[#C47B75]
                "
              >
                {project.tech}
              </p>

              <div
                className="
                mt-6
                text-[#D99A9A]
                font-semibold
                "
              >
                查看專案 →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}