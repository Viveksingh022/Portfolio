import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SOCIALS } from "../../constants/socials";

const icons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  LeetCode: SiLeetcode,
  Email: FaEnvelope,
};

export default function SocialLinks() {
  return (
    <div className="border-t border-white/5 pt-6">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
        Connect
      </p>

      <div className="flex items-center gap-5">
        {SOCIALS.map((social) => {
          const Icon = icons[social.name as keyof typeof icons];

          return (
            <a
              key={social.name}
              href={social.url}
              target={social.name !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white"
            >
              <Icon size={19} />
            </a>
          );
        })}
      </div>
    </div>
  );
}