import { motion } from "motion/react"
import { ProjectsSection } from "../sections/ProjectsSection"
import { SwContainer } from "../layout/SwContainer"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function ProjectsPage() {
  return (
    <div className="flex w-full min-w-0 flex-col">
      <motion.section
        className="flex min-h-[40svh] w-full items-center py-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <SwContainer className="flex flex-col justify-center gap-4">
          <motion.div variants={item}>
            <h1 className="text-4xl font-bold">Selected work</h1>
          </motion.div>
          <motion.div variants={item}>
            <p className="max-w-2xl text-xl text-muted-foreground">
              Side projects and production code — from RPG tools to e-commerce themes.
            </p>
          </motion.div>
        </SwContainer>
      </motion.section>

      <ProjectsSection />
    </div>
  )
}
