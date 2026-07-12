import { useState } from "react"
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { cn } from "@/lib/utils"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"

const MotionArrow = motion.create(ArrowRight)
const MotionLink = motion.a

type ProjectCardProps = {
  name: string
  description: string
  img: string
  url: string
}

export function ProjectCard({ name, description, img, url }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <motion.div
      className="h-full rounded-xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        y: hovered ? -6 : 0,
        boxShadow: hovered
          ? "0 16px 32px -12px color-mix(in oklch, var(--foreground) 18%, transparent)"
          : "0 0 0 0 transparent",
      }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
    >
      <Card className="flex h-full flex-col gap-0 overflow-hidden p-0">
        <div className="shrink-0 overflow-hidden">
          <motion.div
            className="aspect-video w-full overflow-hidden"
            animate={{
              scale: hovered && !prefersReducedMotion ? 1.06 : 1,
              filter: hovered ? "grayscale(0)" : "grayscale(1)",
            }}
            transition={{ duration: 0.3 }}
          >
            <picture>
              <source srcSet={img} type="image/webp" />
              <img
                src={img}
                alt={`Screenshot of ${name}`}
                loading="lazy"
                decoding="async"
                className="aspect-video w-full object-cover"
              />
            </picture>
          </motion.div>
        </div>
        <CardContent className="flex flex-1 flex-col py-4">
          <h3 className="font-heading text-base leading-snug font-medium">{name}</h3>
          <p className="flex-1 text-sm text-muted-foreground">{description}</p>
          <div className="mt-4 flex flex-row justify-end">
            <MotionLink
              href={url}
              target={url.startsWith("http") ? "_blank" : undefined}
              rel={url.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-disabled={url === "#"}
              className={cn(buttonVariants(), url === "#" && "pointer-events-none opacity-60")}
              whileHover={{ scale: 1.03, cursor: "pointer" }}
              whileTap={{ scale: 0.97 }}
            >
              See Project
              <MotionArrow
                initial={{ width: 0 }}
                animate={{
                  rotate: hovered ? 0 : "-360deg",
                  width: hovered ? "auto" : 0,
                  transition: {
                    ease: "easeOut",
                  },
                }}
              />
            </MotionLink>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
