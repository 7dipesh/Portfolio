import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import FadeInSection from "../components/FadeInSection";

const socials = [
  { label: "GitHub", href: "https://github.com/7dipesh", icon: FiGithub },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: FiLinkedin },
  { label: "Instagram", href: "https://www.instagram.com/paudel_dipe_sh/", icon: FiInstagram },
];

function Contact() {
  return (
    <FadeInSection id="contact" className="py-20">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
          Contact
        </p>
        <h3 className="mt-3 text-3xl font-bold text-white">Contact Me</h3>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <form
            action="https://formsubmit.co/paudeldipesh099@gmail.com"
            method="POST"
            className="space-y-4"
          >
            <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none ring-violet-400 transition focus:ring"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none ring-violet-400 transition focus:ring"
            />
            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              required
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none ring-violet-400 transition focus:ring"
            />
            <button
              type="submit"
              className="rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-400"
            >
              Send Message
            </button>
          </form>
          <div>
            <p className="text-slate-300">
              Open to frontend opportunities and freelance collaborations. Let us
              build something great together.
            </p>
            <a
              href="mailto:paudeldipesh099@gmail.com"
              className="mt-5 inline-flex items-center gap-2 text-violet-300 transition hover:text-violet-200"
            >
              <FiMail /> paudeldipesh099@gmail.com
            </a>
            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-slate-100 transition hover:border-violet-300 hover:text-violet-300"
                >
                  <social.icon />
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}

export default Contact;
