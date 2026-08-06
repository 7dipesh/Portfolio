import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import FadeInSection from "../components/FadeInSection";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern developer portfolio built with React, Tailwind CSS, and Framer Motion.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/",
    live: "#",
  },
  {
    title: "Task Management App",
    description:
      "A responsive productivity app with filtering, drag and drop ideas, and smooth UI interactions.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/",
    live: "#",
  },
  {
    title: "E-Commerce Frontend",
    description:
      "A fast storefront UI featuring reusable components, product pages, and a clean checkout flow.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/",
    live: "#",
  },
];

function Projects() {
  return (
    <FadeInSection id="projects" className="py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
        Projects
      </p>
      <h3 className="mt-3 text-3xl font-bold text-white">Featured Work</h3>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70"
          >
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <h4 className="text-lg font-semibold text-white">{project.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {project.description}
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-sm text-slate-100 transition hover:border-violet-300 hover:text-violet-300"
                >
                  <FiGithub /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-violet-500/20 px-3 py-1.5 text-sm text-violet-200 transition hover:bg-violet-500/35"
                >
                  <FiExternalLink /> Live
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </FadeInSection>
  );
}

export default Projects;