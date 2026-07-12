import { cn } from "@/lib/utils"
import { Children, useEffect, useRef, type ReactNode } from "react"

interface MarqueeProps {
  grayscale?: boolean
  direction?: "left" | "right"
  pauseOnHover?: boolean
  fade?: boolean
  playing?: boolean
  children?: ReactNode
  className?: string
}

export default function Marquee({
  grayscale = false,
  direction = "left",
  pauseOnHover = true,
  fade = true,
  playing = true,
  children,
  className,
}: MarqueeProps) {
  const content = Children.toArray(children)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const preventScroll = (e: Event) => {
      e.preventDefault()
      e.stopPropagation()
      container.scrollLeft = 0
    }
    container.addEventListener("scroll", preventScroll, { passive: false })
    container.addEventListener("wheel", preventScroll, { passive: false })
    container.addEventListener("touchmove", preventScroll, { passive: false })
    return () => {
      container.removeEventListener("scroll", preventScroll)
      container.removeEventListener("wheel", preventScroll)
      container.removeEventListener("touchmove", preventScroll)
    }
  }, [])

  const animationClass = direction === "left" ? "marquee-inner" : "marquee-inner-reverse"

  return (
    <div className="relative isolate w-full max-w-full min-w-0 overflow-x-clip">
      <style>{`
        .marquee-container::-webkit-scrollbar {
          display: none;
        }

        .marquee-inner {
          animation: marquee-anim 20s linear infinite;
        }

        .marquee-inner-reverse {
          animation: marquee-anim-reverse 20s linear infinite;
        }

        .marquee-container:hover .marquee-inner,
        .marquee-container:hover .marquee-inner-reverse {
          animation-play-state: paused !important;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-inner,
          .marquee-inner-reverse {
            animation: none !important;
            transform: translateX(0) !important;
          }
        }

        @keyframes marquee-anim {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-anim-reverse {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>

      <div
        ref={containerRef}
        className={cn(
          "w-full max-w-full min-w-0 overflow-x-clip p-2 [--gap:3rem] select-none cursor-default marquee-container",
          grayscale &&
            "grayscale brightness-0 dark:invert opacity-80 transition-opacity",
          className,
        )}
        style={{
          maskImage: fade
            ? "linear-gradient(90deg, transparent 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 92%, transparent 100%)"
            : "none",
          WebkitMaskImage: fade
            ? "linear-gradient(90deg, transparent 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 92%, transparent 100%)"
            : "none",
          userSelect: "none",
          WebkitUserSelect: "none",
          pointerEvents: pauseOnHover ? "auto" : "none",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div
          className={cn(
            "flex w-max shrink-0 items-center will-change-transform",
            animationClass,
          )}
          style={{ animationPlayState: playing ? "running" : "paused" }}
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-(--gap) pr-(--gap)">
              {content.map((item, index) => (
                <div key={index} className="flex shrink-0 items-center justify-center">
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
