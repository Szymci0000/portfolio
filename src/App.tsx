import { lazy, Suspense } from "react"
import { GridBackground } from "@/components/GridBackground"
import { SidebarNav } from "./components/layout/SidebarNav"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "./components/ui/sidebar"
import { HomePageContent } from "./components/pages/HomePageContent"
import { Route, Routes } from "react-router-dom"
import { Badge } from "./components/ui/badge"
import { buttonVariants } from "./components/ui/button"
import { cn } from "./lib/utils"
import { Mail } from "lucide-react"
import { RiLinkedinFill } from "@remixicon/react"

import { CONTACT_LINKS } from "@/data/contact"

const AboutMePage = lazy(() =>
  import("./components/pages/AboutMePage").then((m) => ({ default: m.AboutMePage })),
)
const ProjectsPage = lazy(() =>
  import("./components/pages/ProjectsPage").then((m) => ({ default: m.ProjectsPage })),
)
const ExperiencePage = lazy(() =>
  import("./components/pages/ExperiencePage").then((m) => ({ default: m.ExperiencePage })),
)
const ContactPage = lazy(() =>
  import("./components/pages/ContactPage").then((m) => ({ default: m.ContactPage })),
)

function PageFallback() {
  return <div className="min-h-[40svh] w-full" aria-hidden />
}

function App() {
  return (
    <SidebarProvider>
      <SidebarNav />

      <SidebarInset className="min-h-svh min-w-0 overflow-x-clip">
        <header className="row flex w-full items-center justify-between border-b p-3">
          <SidebarTrigger />
          <div className="flex items-center gap-1">
            <a
              href={CONTACT_LINKS.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
            >
              <RiLinkedinFill />
            </a>
            <a
              href={CONTACT_LINKS.email.href}
              aria-label="Send email"
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
            >
              <Mail />
            </a>
            <Badge>Open to work</Badge>
          </div>
        </header>
        <GridBackground className="relative flex w-full flex-1 flex-col items-start justify-start">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<HomePageContent />} />
              <Route path="/about" element={<AboutMePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </GridBackground>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App
