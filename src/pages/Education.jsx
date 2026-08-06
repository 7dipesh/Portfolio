import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import FadeInSection from "../components/FadeInSection";

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science and Information Technology (B.Sc. CSIT)",
    institution: "Asian School of Management And Technology",
    period: "2021 - 2025",
    description:
      "Focused on web development, software engineering, and modern frontend technologies.",
  },
  {
    degree: "Higher Secondary Education (+2)",
    institution: "Kathmandu Model College (KMC)",
    period: "2019 - 2021",
    description:
      "Built a strong foundation in computer science, mathematics, and communication skills.",
  },
  {
    degree: "School Level Education (SEE)",
    institution: "Ishaneshwar Secondary School",
    description:
      "Completed core schooling with focus on fundamentals, discipline, and academic growth.",
  },
];

function Education() {
  return (
    <FadeInSection id="education" className="py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
        Education
      </p>
      <h3 className="mt-3 text-3xl font-bold text-white">Academic Journey</h3>

      <div className="mt-8 space-y-4">
        {educationData.map((item, index) => (
          <motion.article
            key={`${item.degree}-${item.institution}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-violet-300/50"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <FiBookOpen className="text-violet-300" />
                <h4 className="text-lg font-semibold text-white">{item.degree}</h4>
              </div>
              <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-medium text-violet-200">
                {item.period}
              </span>
            </div>
            <p className="mt-2 text-sm font-medium text-slate-200">{item.institution}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {item.description}
            </p>
          </motion.article>
        ))}
      </div>
    </FadeInSection>
  );
}

export default Education;
