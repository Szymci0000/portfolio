import { motion } from "motion/react"
import { Calendar, MapPin, Plane } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { cn } from "@/lib/utils"

type LocationCardProps = {
  country: string
  city: string
  flag: string
  status: "current" | "upcoming"
  statusLabel: string
  periodLabel: string
  periodValue: string
  description: string
  variants?: {
    hidden: { opacity: number; y: number }
    show: { opacity: number; y: number }
  }
}

const contentItem = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
}

function TimelineConnector() {
  return (
    <motion.div
      variants={contentItem}
      className="flex w-full shrink-0 justify-center py-2 md:w-auto md:py-0"
      aria-hidden
    >
      <Card className="flex size-10 items-center justify-center p-0 shadow-sm">
        <Plane className="size-4 text-primary" />
      </Card>
    </motion.div>
  )
}

function LocationCard({
  country,
  city,
  flag,
  status,
  statusLabel,
  periodLabel,
  periodValue,
  description,
  variants = contentItem,
}: LocationCardProps) {
  return (
    <motion.div variants={variants} className="flex-1">
      <Card
        className={cn(
          "h-full transition-shadow hover:shadow-md",
          status === "current" && "border",
          status === "upcoming" && "border",
        )}
      >
        <CardHeader className="gap-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-3">
              <span className="text-3xl leading-none" aria-hidden>
                {flag}
              </span>
              <div>
                <CardTitle>{country}</CardTitle>
                <CardDescription>{city}</CardDescription>
              </div>
            </div>
            <div className="text-muted-foreground"><span style={{filter: "blur(1px)"}} className={cn("size-2 rounded-full inline-block  shadow mr-2", status === "current"? "bg-green-600" : "bg-yellow-600") }></span>{statusLabel}</div>
            {/* <Badge variant={status === "current" ? "secondary" : "default"}>{statusLabel}</Badge> */}
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="size-4 shrink-0 text-muted-foreground" />
            <span className="text-muted-foreground">{periodLabel}:</span>
            <span className="font-medium">{periodValue}</span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

export function LocationTimeline() {
  return (
    <motion.div
      className="space-y-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div variants={contentItem} className="space-y-1">
        <div className="flex items-center gap-2">
          <MapPin className="size-5 text-muted-foreground" />
          <h2 className="text-2xl font-semibold tracking-tight">Where I&apos;ll be</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Relocating to Germany in October 2026 — open to roles before and after the move.
        </p>
      </motion.div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <LocationCard
          country="Poland (Kraków)"
          city="Current base"
          flag="🇵🇱"
          status="current"
          statusLabel="Current"
          periodLabel="Till"
          periodValue="October 2026"
          description="Available remotely and for interviews until relocation."
        />

        <TimelineConnector />

        <LocationCard
          country="Germany (NRW)"
          city="Next chapter"
          flag="🇩🇪"
          status="upcoming"
          statusLabel="Relocating"
          periodLabel="Since"
          periodValue="October 2026"
          description="Moving and ready to join teams on-site or in a hybrid setup."
        />
      </div>

      <motion.div variants={contentItem}>
        <Card className="bg-card/80 border">
          <CardContent className="">
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">For recruiters:</span> I&apos;m actively
              looking for opportunities in Germany and happy to discuss start dates around my
              relocation timeline.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
