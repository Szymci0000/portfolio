export const CONTACT_LINKS = {
  email: {
    href: "mailto:wereszczynskiszymon007@gmail.com",
    label: "Email",
    value: "wereszczynskiszymon007@gmail.com",
  },
  linkedin: {
    href: "https://www.linkedin.com/in/szymon-wereszczy%C5%84ski-23bab1239/",
    label: "LinkedIn",
    value: "linkedin.com/in/szymonwereszczynski",
  },
  github: {
    href: "https://github.com/Szymci0000",
    label: "GitHub",
    value: "github.com/szymonwereszczynski",
  },
} as const

export type ContactLinkId = keyof typeof CONTACT_LINKS

export const contactLinks = (Object.keys(CONTACT_LINKS) as ContactLinkId[]).map((id) => ({
  id,
  ...CONTACT_LINKS[id],
}))
