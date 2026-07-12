import type { ReactNode } from "react"
import { motion } from "motion/react"
import { Mail } from "lucide-react"
import { RiGithubFill, RiLinkedinFill } from "@remixicon/react"
import { SwContainer } from "../layout/SwContainer"
import { LocationTimeline } from "../sections/LocationTimeline"
import { Badge } from "../ui/badge"
import { cn } from "@/lib/utils"
import { contactLinks, type ContactLinkId } from "@/data/contact"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
}

const contentItem = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
}

const contactLinkIcons: Record<ContactLinkId, ReactNode> = {
  email: <Mail className="size-4" />,
  linkedin: <RiLinkedinFill className="size-4" />,
  github: <RiGithubFill className="size-4" />,
}

export function ContactPage() {
  return (
    <div className="flex w-full min-w-0 flex-col">
      <motion.section
        className="flex w-full items-center py-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <SwContainer className="flex flex-col gap-6">
          <div className="space-y-4">
            <motion.div variants={item}>
              <Badge variant="outline" className="mb-3">
                Open to work
              </Badge>
              <h1 className="text-4xl font-bold">Let&apos;s connect</h1>
            </motion.div>
            <motion.div variants={item}>
              <p className="max-w-2xl text-xl text-muted-foreground">
                Reach out for collaborations, opportunities, or a friendly hello. Relocating to
                Germany in October 2026.
              </p>
            </motion.div>
          </div>

          <motion.div variants={item} className="grid gap-3 sm:grid-cols-3">
            {contactLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={cn(
                  "h-auto flex-col items-start gap-2 px-4 py-3 text-left whitespace-normal bg-card border rounded-md transition hover:bg-secondary",
                )}
              >
                <span className="flex items-center gap-2 text-sm font-medium">
                  {contactLinkIcons[link.id]}
                  {link.label}
                </span>
                <span className="text-xs text-muted-foreground">{link.value}</span>
              </a>
            ))}
          </motion.div>
        </SwContainer>
      </motion.section>

      <motion.section
        className="w-full pb-20"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <SwContainer>
          <motion.div variants={contentItem}>
            <LocationTimeline />
          </motion.div>
        </SwContainer>
      </motion.section>
    </div>
  )
}
