import { ChevronDownIcon } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"

export type ExperienceCardProps = {
  role: string
  company: string
  period: string
  children: React.ReactNode
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function ExperienceCard({
  role,
  company,
  period,
  children,
  defaultOpen = false,
  open: openProp,
  onOpenChange,
}: ExperienceCardProps) {
  const [openUncontrolled, setOpenUncontrolled] = useState(defaultOpen)
  const open = openProp ?? openUncontrolled
  const setOpen = onOpenChange ?? setOpenUncontrolled

  return (
    <Card className="mb-2 gap-0">
      <CardHeader
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            setOpen(!open)
          }
        }}
        className="cursor-pointer"
      >
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
          <CardTitle>
            <h3>{role}</h3>
          </CardTitle>
          <span className="text-sm text-muted-foreground">{period}</span>
        </div>
        <CardDescription>{company}</CardDescription>
        <CardAction>
          <ChevronDownIcon
            className={cn(
              "size-4 transition-transform duration-300 ease-out",
              open && "rotate-180",
            )}
          />
        </CardAction>
      </CardHeader>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <CardContent
            className={cn(
              "transition-opacity duration-300 ease-out",
              open ? "opacity-100" : "opacity-0",
            )}
          >
            {children}
          </CardContent>
        </div>
      </div>
    </Card>
  )
}
