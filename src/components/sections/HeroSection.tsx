import { useState } from "react"
import { motion } from "motion/react"
import { Link } from "react-router-dom"
import { Mail } from "lucide-react"
import { SwContainer } from "../layout/SwContainer"
import { Button } from "../ui/button"
import { LogoMarquee, LogoMarqueeSkeleton } from "./LogoMarquee"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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

const MotionButton = motion.create(Button)

export function HeroSection() {
  const [marqueeReady, setMarqueeReady] = useState(false)
  const [marqueePlaying, setMarqueePlaying] = useState(false)

  const handleMarqueeReveal = () => {
    setMarqueeReady(true)
    setMarqueePlaying(true)
  }

  return (
    <motion.section
      className="flex min-h-[80svh] w-full min-w-0 flex-col overflow-x-clip py-16"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <SwContainer className="flex flex-1 flex-col justify-center gap-4">
        <div>
          <motion.div variants={item}>
            <p className="text-sm font-medium text-muted-foreground">Hello there!</p>
          </motion.div>
          <motion.div variants={item}>
            <h1 className="text-4xl font-bold">I&apos;m Szymon Wereszczyński</h1>
          </motion.div>
          <motion.div variants={item}>
            <p className="text-xl text-muted-foreground">Web Developer</p>
          </motion.div>
        </div>

        <motion.div variants={item}>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            I build web products for e-commerce teams — from WordPress themes and API integrations
            to React tools that make everyday work smoother. Currently exploring modern frontend
            and preparing a move to Germany in October 2026.
          </p>
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap gap-3">
          <MotionButton
            className="hover:cursor-pointer"
            nativeButton={false}
            render={<Link to="/projects" />}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View projects
          </MotionButton>
          <MotionButton
            className="hover:cursor-pointer"
            variant="secondary"
            nativeButton={false}
            render={<Link to="/contact" />}
            whileHover={{ scale: 1.03 }}
          >
            <Mail className="size-4" />
            Get in touch
          </MotionButton>
        </motion.div>
      </SwContainer>

      <SwContainer className="min-w-0 overflow-hidden pb-12">
        <motion.div variants={item} className="w-full min-w-0" onAnimationComplete={handleMarqueeReveal}>
          {!marqueeReady ? (
            <LogoMarqueeSkeleton />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <LogoMarquee playing={marqueePlaying} />
            </motion.div>
          )}
        </motion.div>
      </SwContainer>
    </motion.section>
  )
}
