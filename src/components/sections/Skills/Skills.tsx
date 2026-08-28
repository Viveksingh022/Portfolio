import { motion } from "framer-motion";
import {
  SiPython,
  SiFastapi,
  SiFlask,
  SiPostgresql,
  SiRedis,
  SiSqlalchemy,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiDocker,
  SiLinux,
  SiPostman,
  SiExpress,
  SiMongodb,
  SiApachekafka,
  SiSocketdotio,
  SiNodedotjs,
  SiSqlite,
  SiJsonwebtokens,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

import { TbBinaryTree2 } from "react-icons/tb";
import { LuBrainCircuit, LuNetwork } from "react-icons/lu";
import { MdApi } from "react-icons/md";
import { FaCubes, FaJava } from "react-icons/fa";

import { SKILLS } from "../../../constants/skills";
import Card from "../../common/Card";
import { H2 } from "../../common/Typography";
import Section from "../../layout/Section";

const iconMap: Record<string, React.ElementType> = {
  Python: SiPython,
  FastAPI: SiFastapi,
  Flask: SiFlask,
  PostgreSQL: SiPostgresql,
  SQLAlchemy: SiSqlalchemy,

  React: SiReact,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  HTML: SiHtml5,
  CSS: SiCss,

  Git: SiGit,
  GitHub: SiGithub,
  Docker: SiDocker,
  Linux: SiLinux,
  Postman: SiPostman,
  "VS Code": VscCode,
  JAVA: FaJava,
  "Jwt Authentication": SiJsonwebtokens,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  SQL: SiSqlite,
  Kafka: SiApachekafka,
  "Socket.io": SiSocketdotio,

  DSA: TbBinaryTree2,
  "REST APIs": MdApi,
  JWT: LuNetwork,
  "Distributed Systems": FaCubes,
  "System Design": LuBrainCircuit,
  OOP: FaCubes,
};

const accentClasses: Record<string, string> = {
  blue: "text-blue-400 border-blue-500/20 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-400",

  purple:
    "text-violet-400 border-violet-500/20 bg-violet-500/10 hover:bg-violet-500/20 hover:border-violet-400",

  emerald:
    "text-emerald-400 border-emerald-500/20 bg-emerald-500/10 hover:bg-emerald-500/20 hover:border-emerald-400",

  amber:
    "text-amber-400 border-amber-500/20 bg-amber-500/10 hover:bg-amber-500/20 hover:border-amber-400",
};

export default function Skills() {
  return (
    <Section
    id="skills"
    spacing="sm"
>
      <H2 className="mb-14">
        Skills
      </H2>

      <div className="grid gap-8 md:grid-cols-2">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={skill.category}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.12,
              duration: 0.5,
            }}
          >
            <Card className="group h-full p-8">

              <h3 className="text-[30px] font-bold tracking-tight text-white">
    {skill.category}
</h3>

<p className="mt-2 text-sm leading-6 text-slate-500">
    {skill.subtitle}
</p>

<div className="my-6 h-px bg-gradient-to-r from-white/10 via-blue-500/20 to-transparent" />

              <div className="flex flex-wrap gap-3">
                {skill.technologies.map((tech) => {
                  const Icon = iconMap[tech];

                  return (
                    <motion.div
                      whileHover={{
                        y: -5,
                        scale: 1.08,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                      }}
                      key={tech}
                      className={`flex cursor-pointer items-center gap-2 rounded-full border px-5 py-2.5 text-[15px] font-medium transition-all duration-300 ${accentClasses[skill.accent]}`}
                    >
                      {Icon && <Icon size={16} />}

                      <span>
                        {tech}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}