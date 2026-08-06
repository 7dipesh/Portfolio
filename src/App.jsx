import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  const navItems = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "education", label: "Education" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Contact" },
    ],
    [],
  );
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { threshold: [0.3, 0.6, 0.8], rootMargin: "-20% 0px -20% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navItems]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar navItems={navItems} activeSection={activeSection} />
      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;