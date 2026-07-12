import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
type SwContainerProps = {
  children: ReactNode
  className?: string
}
export function SwContainer({ children, className }: SwContainerProps) {
  return (
    <div className={cn("relative z-20 mx-auto w-full min-w-0 max-w-6xl px-8", className)}>
      {children}
    </div>
  )
}