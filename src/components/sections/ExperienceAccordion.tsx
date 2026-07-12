import { Badge } from "../ui/badge"
import { ExperienceCard } from "./ExperienceCard"

type ExperienceAccordionProps = {
  defaultOpen?: boolean
}

export function ExperienceAccordion({ defaultOpen = false }: ExperienceAccordionProps) {
  return (
    <div className="py-4">
      <ExperienceCard
        defaultOpen={defaultOpen}
        role="Web Developer"
        company="Marketing Investment Group / JD Sports MIG CEE"
        period="August 2022 – Present"
      >
        <p className="pt-4 text-sm text-muted-foreground">
          Working within cross-functional teams to improve internal e-commerce processes through
          custom development, automation, and system integrations.
        </p>
        <h4 className="mt-4 font-medium">Key Responsibilities:</h4>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
          <li>
            Develop custom WordPress solutions, including blog templates and reusable Gutenberg
            blocks.
          </li>
          <li>
            Build integrations between WordPress and the Synerise platform, enabling personalized
            content and customer experiences.
          </li>
          <li>Create server-side services and API integrations using object-oriented PHP.</li>
          <li>
            Collaborate closely with Marketing Automation, CRM, UX, Analytics, and Business teams to
            deliver personalized onsite experiences, email campaigns, and marketing solutions.
          </li>
          <li>
            Design and implement automation tools that streamline everyday workflows across multiple
            departments.
          </li>
          <li>
            Participate in A/B testing, translating analytics and UX insights into measurable
            improvements.
          </li>
          <li>
            Lead technical workshops and knowledge-sharing sessions to improve collaboration between
            development and non-technical teams.
          </li>
        </ul>
        <h4 className="mt-4 font-medium">Technologies:</h4>
        <div className="mt-2 flex flex-row flex-wrap gap-1">
          <Badge className="text-muted-foreground" variant="outline">
            PHP
          </Badge>
          <Badge className="text-muted-foreground" variant="outline">
            WordPress
          </Badge>
          <Badge className="text-muted-foreground" variant="outline">
            JavaScript
          </Badge>
          <Badge className="text-muted-foreground" variant="outline">
            REST APIs
          </Badge>
          <Badge className="text-muted-foreground" variant="outline">
            Synerise
          </Badge>
          <Badge className="text-muted-foreground" variant="outline">
            Marketing Automation
          </Badge>
          <Badge className="text-muted-foreground" variant="outline">
            CRM
          </Badge>
          <Badge className="text-muted-foreground" variant="outline">
            MySQL
          </Badge>
          <Badge className="text-muted-foreground" variant="outline">
            HTML
          </Badge>
          <Badge className="text-muted-foreground" variant="outline">
            CSS
          </Badge>
          <Badge className="text-muted-foreground" variant="outline">
            Git
          </Badge>
        </div>
      </ExperienceCard>

      <ExperienceCard
        defaultOpen={defaultOpen}
        role="WordPress Developer"
        company="Millenium Studio"
        period="April 2021 – July 2022"
      >
        <p className="pt-4 text-sm text-muted-foreground">
          Started as a junior developer and quickly progressed to independently delivering complete
          WordPress projects for clients.
        </p>
        <h4 className="mt-4 font-medium">Key Responsibilities:</h4>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
          <li>Built custom WordPress themes from scratch based on client designs.</li>
          <li>Maintained and expanded existing websites with new functionality and improvements.</li>
          <li>Optimized websites for performance, SEO, responsiveness, and accessibility.</li>
          <li>
            Worked with Webpack, JavaScript modules, and Sass to create scalable front-end
            architectures.
          </li>
          <li>
            Developed interactive user interfaces and complex frontend animations while maintaining
            high code quality.
          </li>
        </ul>
        <h4 className="mt-4 font-medium">Technologies:</h4>
        <div className="mt-2 flex flex-row flex-wrap gap-1">
          <Badge className="text-muted-foreground" variant="outline">
            WordPress
          </Badge>
          <Badge className="text-muted-foreground" variant="outline">
            PHP
          </Badge>
          <Badge className="text-muted-foreground" variant="outline">
            JavaScript
          </Badge>
          <Badge className="text-muted-foreground" variant="outline">
            Sass
          </Badge>
          <Badge className="text-muted-foreground" variant="outline">
            Webpack
          </Badge>
          <Badge className="text-muted-foreground" variant="outline">
            HTML
          </Badge>
          <Badge className="text-muted-foreground" variant="outline">
            CSS
          </Badge>
        </div>
      </ExperienceCard>
    </div>
  )
}
