import FadeInSection from "../components/FadeInSection";

function About() {
  const profileImage = "/src/assets/profile.jpeg";
  const fallbackImage =
    "https://ui-avatars.com/api/?name=Dipesh+Paudel&background=4c1d95&color=ffffff&size=512";

  return (
    <FadeInSection id="about" className="py-20">
      <div className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:grid-cols-[1.2fr_1fr] md:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
            About Me
          </p>
          <h3 className="mt-3 text-3xl font-bold text-white">Dipesh Paudel</h3>
          <p className="mt-5 leading-relaxed text-slate-300">
            I am a frontend developer focused on crafting polished digital
            interfaces with React and Tailwind CSS. I enjoy turning ideas into
            accessible, elegant, and high-performance products.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["React", "Tailwind CSS", "JavaScript", "Responsive UI"].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-violet-400/40 bg-violet-500/10 px-4 py-1 text-sm text-violet-200"
                >
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={profileImage}
            alt="Dipesh Paudel profile"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = fallbackImage;
            }}
            className="h-64 w-64 rounded-3xl border border-white/10 object-cover shadow-2xl shadow-violet-900/40"
          />
        </div>
      </div>
    </FadeInSection>
  );
}

export default About;