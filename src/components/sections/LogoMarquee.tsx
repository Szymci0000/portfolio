import Marquee from "../marquee"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"
import { Skeleton } from "../ui/skeleton"
import { cn } from "@/lib/utils"
import { assetUrl } from "@/lib/asset-url"

type Logo = {
  path: string
  name: string
}

const logos: Logo[] = [
  { path: "logos/figma.png", name: "figma" },
  { path: "logos/github.png", name: "github" },
  { path: "logos/gitlab.png", name: "gitlab" },
  { path: "logos/html5.png", name: "html5" },
  { path: "logos/js.png", name: "js" },
  { path: "logos/npm2.png", name: "npm" },
  { path: "logos/php.png", name: "php" },
  { path: "logos/pixijs.png", name: "pixijs" },
  { path: "logos/react.png", name: "react" },
  { path: "logos/sass.png", name: "sass" },
  { path: "logos/shadcnui.png", name: "shadcnui" },
  { path: "logos/tailwindcss.png", name: "tailwindcss" },
  { path: "logos/typescript.png", name: "typescript" },
  { path: "logos/vitejs.png", name: "vitejs" },
  { path: "logos/wordpress.png", name: "wordpress" },
]

type LogoMarqueeProps = {
  playing?: boolean
}

export function LogoMarqueeSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-14 w-full items-center gap-8 overflow-hidden px-2 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]",
        className,
      )}
      aria-hidden
    >
      {Array.from({ length: 10 }).map((_, i) => (
        <Skeleton key={i} className="size-10 shrink-0 rounded-md" />
      ))}
    </div>
  )
}

export function LogoMarquee({ playing = true }: LogoMarqueeProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <Marquee playing={playing && !prefersReducedMotion}>
      {logos.map((logo) => (
        <div key={logo.name} className="h-10">
          <img className="h-10" src={assetUrl(logo.path)} alt="" loading="lazy" decoding="async" />
        </div>
      ))}
    </Marquee>
  )
}
