import { motion } from "framer-motion";
import TypingText from "../components/TypingText";

function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-72px)] items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.2),_transparent_50%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.18),_transparent_45%)]" />
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm uppercase tracking-[0.25em] text-violet-300"
        >
          Hello, I am
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-4xl font-bold text-white sm:text-6xl"
        >
          Dipesh Paudel
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mt-4 text-xl text-slate-200 sm:text-2xl"
        >
          Frontend Developer |{" "}
          <TypingText
            words={["React Developer", "UI Engineer", "Tailwind Enthusiast"]}
          />
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg"
        >
          I build fast, responsive, and user-friendly web experiences with clean
          UI, smooth interactions, and performance-focused frontend architecture.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-900/40 transition hover:-translate-y-1 hover:bg-violet-400"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-1 hover:border-violet-300 hover:text-violet-300"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;