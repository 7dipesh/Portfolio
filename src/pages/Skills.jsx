import { FaCss3Alt, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import FadeInSection from "../components/FadeInSection";

const skills = [
  { name: "HTML", level: 92, icon: FaHtml5, color: "text-orange-400" },
  { name: "CSS", level: 88, icon: FaCss3Alt, color: "text-blue-400" },
  { name: "JavaScript", level: 84, icon: FaJs, color: "text-yellow-300" },
  { name: "React", level: 86, icon: FaReact, color: "text-cyan-300" },
  { name: "Tailwind CSS", level: 90, icon: SiTailwindcss, color: "text-teal-300" },
  { name: "Figma", level: 78, icon: FaFigma, color: "text-pink-300" },
];

function Skills() {
  return (
    <FadeInSection id="skills" className="py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
        Skills
      </p>
      <h3 className="mt-3 text-3xl font-bold text-white">Tech Stack</h3>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-violet-300/50"
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <skill.icon className={`text-2xl ${skill.color}`} />
                <span className="font-medium text-slate-100">{skill.name}</span>
              </div>
              <span className="text-sm text-slate-300">{skill.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-800">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </FadeInSection>
  );
}

export default Skills;