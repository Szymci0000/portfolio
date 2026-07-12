import { SidebarFooter } from "../ui/sidebar"

export function SidebarSiteFooter() {
  return (
    <SidebarFooter className="p-4 group-data-[collapsible=icon]:hidden">
      <p className="text-[11px] text-muted-foreground">
        © {new Date().getFullYear()} Szymon Wereszczyński
      </p>
    </SidebarFooter>
  )
}
