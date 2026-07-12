import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type GridBackgroundProps = {
  children: ReactNode
  className?: string
}

export function GridBackground({ children, className }: GridBackgroundProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-full w-full flex-1 flex-col bg-white dark:bg-black",
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 hidden md:block",
          "bg-size-[40px_40px]",
          "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 hidden bg-white mask-[radial-gradient(ellipse_at_center,transparent_50%,black)] md:block dark:bg-black" />
      <div className="relative z-20 flex w-full min-w-0 flex-1 flex-col overflow-x-clip">
        {children}
      </div>
    </div>
  )
}
