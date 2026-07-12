import { motion } from "motion/react"
import { SwContainer } from "../layout/SwContainer"
import { Badge } from "../ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import swAvatar from "@/assets/swavatar.webp"

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

const highlights = [
  "5+ years in web development",
  "E-commerce & WordPress",
  "React & modern frontend",
  "API integrations & automation",
  "Relocating to Germany (October 2026)",
] as const

const bioParagraphs = [
  "Hi, I'm Szymon — a web developer with 5+ years of experience building products, integrations, and tools that solve real business problems.",
  "Most of my professional experience comes from e-commerce, where I've worked with WordPress, PHP, JavaScript, REST APIs, CRM, and marketing automation systems while collaborating closely with designers, analysts, marketers, and business stakeholders.",
  "Outside of work, you'll probably find me around tabletop RPGs. I'm currently building an interactive RPG campaign manager in React and Pixi.js — a project that combines my hobby with my passion for learning modern frontend technologies and experimenting with graphics, performance, and user experience.",
  "I enjoy variety. One day I might be creating a polished user interface, the next building an API integration, automating a repetitive workflow, or figuring out how to make someone's daily work a little easier. I'm naturally curious, proactive, and I like contributing ideas instead of simply implementing tickets.",
  "I'm always excited by opportunities to build useful software, learn something new, and work with people who enjoy solving interesting problems together.",
] as const

export function AboutMePage() {
  return (
    <div className="flex w-full min-w-0 flex-col">
      <motion.section
        className="flex w-full items-center py-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <SwContainer className="flex flex-col gap-4">
          <motion.div variants={item}>
            <Badge variant="outline" className="mb-3">
              About me
            </Badge>
            <h1 className="text-4xl font-bold">Szymon Wereszczyński</h1>
          </motion.div>
          <motion.div variants={item}>
            <p className="max-w-2xl text-xl text-muted-foreground">
              Web developer focused on useful products, clean interfaces, and real-world impact.
            </p>
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
        <SwContainer className="flex flex-col gap-10">
          <motion.div variants={contentItem} className="flex flex-wrap gap-2">
            {highlights.map((label) => (
              <Badge key={label} variant="secondary">
                {label}
              </Badge>
            ))}
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[minmax(240px,280px)_1fr] lg:items-start">
            <motion.div variants={contentItem}>
              <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 400, damping: 28 }}>
                <Card className="overflow-hidden">
                  <CardContent className="flex flex-col items-center gap-4 py-6 text-center">
                    <Avatar className="size-32 rounded-xl">
                      <AvatarImage src={swAvatar} alt="Szymon Wereszczyński" />
                      <AvatarFallback className="rounded-xl text-lg">SW</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <p className="font-semibold">Szymon Wereszczyński</p>
                      <p className="text-sm text-muted-foreground">Web Developer</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div variants={contentItem}>
              <Card className="h-full">
                <CardHeader className="gap-1">
                  <CardTitle>Who I am</CardTitle>
                  <CardDescription>
                    A bit about my background, what I build, and what drives me.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {bioParagraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </SwContainer>
      </motion.section>
    </div>
  )
}
