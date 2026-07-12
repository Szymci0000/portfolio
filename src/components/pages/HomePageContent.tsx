import { ExperienceSection } from "../sections/ExperienceSection"
import { HeroSection } from "../sections/HeroSection"
import { ProjectsSection } from "../sections/ProjectsSection"

export function HomePageContent() {
  return (
    <div className="flex w-full min-w-0 flex-col">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  )
}
