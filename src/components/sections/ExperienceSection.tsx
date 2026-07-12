import { motion } from "motion/react"
import { SwContainer } from "../layout/SwContainer"
import { ExperienceAccordion } from "./ExperienceAccordion"

type ExperienceSectionProps = {
  defaultOpen?: boolean
}

export function ExperienceSection({ defaultOpen = false }: ExperienceSectionProps) {
  return (
    <motion.section
      className="w-full pb-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
    >
      <SwContainer className="flex flex-col gap-8">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
          <p className="text-sm text-muted-foreground">
            A snapshot of my roles in e-commerce and WordPress — expand each for detail.
          </p>
        </div>
        <ExperienceAccordion defaultOpen={defaultOpen} />
      </SwContainer>
    </motion.section>
  )
}
