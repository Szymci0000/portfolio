import { BriefcaseBusiness, CodeXml, Mail, MessageSquare } from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "../ui/sidebar"
import { SidebarProfile } from "./SidebarProfile"
import { SidebarSiteFooter } from "./SidebarSiteFooter"

const navItems = [
  { icon: MessageSquare, label: "About", path: "/about" },
  { icon: CodeXml, label: "Projects", path: "/projects" },
  { icon: BriefcaseBusiness, label: "Experience", path: "/experience" },
  { icon: Mail, label: "Contact", path: "/contact" },
] as const

export function SidebarNav() {
  const location = useLocation()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="gap-2 p-4 group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:p-2">
        <SidebarProfile />
        <SidebarSeparator className="group-data-[collapsible=icon]:hidden" />
      </SidebarHeader>
      <SidebarContent className="flex gap-4 px-4 group-data-[collapsible=icon]:p-2">
        <SidebarMenu className="gap-1">
          {navItems.map(({ icon: Icon, label, path }) => (
            <SidebarMenuItem key={label}>
              <SidebarMenuButton
                render={<NavLink to={path} />}
                isActive={location.pathname === path}
                tooltip={label}
              >
                <Icon />
                <span>{label}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarSiteFooter />
    </Sidebar>
  )
}
