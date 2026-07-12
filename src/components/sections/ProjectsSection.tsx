import { motion } from "motion/react"
import { SwContainer } from "../layout/SwContainer"
import { ProjectCard } from "./ProjectCard"
import { assetUrl } from "@/lib/asset-url"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
}

const projects = [
  {
    name: "Hexmap",
    description:
      "Campaign manager for tabletop RPGs — hex maps, session notes, and world-building tools. Built with React and Pixi.js.",
    img: "hexmap.webp",
    url: "https://szymci0000.github.io/hexmap/",
  },
  {
    name: "Blog Sizeer",
    description:
      "Custom WordPress theme powering Sizeer blogs, with Gutenberg blocks and live Synerise product pricing integration.",
    img: "sizeer.webp",
    url: "https://blog.sizeer.com",
  },
  {
    name: "Błękitny klucz",
    description:
      "Community platform for a tabletop RPG group — Discord authentication, member statistics, custom plugins, and a modern public site.",
    img: "klucz.webp",
    url: "https://www.blekitnyklucz.pl/",
  },
] as const

export function ProjectsSection() {
  return (
    <motion.section
      className="w-full pb-20"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <SwContainer>
        <motion.div variants={item} className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <p className="text-sm text-muted-foreground">
            Production work and side projects — e-commerce, WordPress, and creative tools.
          </p>
        </motion.div>
        <div className="grid gap-4 py-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div key={project.name} variants={item} className="h-full">
              <ProjectCard
                name={project.name}
                description={project.description}
                img={assetUrl(project.img)}
                url={project.url}
              />
            </motion.div>
          ))}
        </div>
      </SwContainer>
    </motion.section>
  )
}
