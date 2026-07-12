import { NavLink, useLocation } from "react-router-dom"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import swAvatar from "@/assets/swavatar.webp"

export function SidebarProfile() {
  const location = useLocation()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          render={<NavLink to="/" end />}
          isActive={location.pathname === "/"}
          size="lg"
          tooltip="Szymon Wereszczyński"
          className="!h-14"
        >
          <Avatar className="size-12 shrink-0 rounded-lg group-data-[collapsible=icon]:size-8">
            <AvatarImage src={swAvatar} alt="Szymon Wereszczyński" />
            <AvatarFallback className="rounded-lg">SW</AvatarFallback>
          </Avatar>
          <div className="grid min-w-0 flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
            <span className="truncate font-semibold">Szymon Wereszczyński</span>
            <span className="truncate text-xs text-muted-foreground">Developer</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
