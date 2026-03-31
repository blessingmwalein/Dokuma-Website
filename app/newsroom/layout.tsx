import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Newsroom & Press | Latest from Dokuma",
  description: "Stay updated with Dokuma's latest news, press releases, successful deployments, and media features. Explore how our digital transformation solutions are shaping Africa's future.",
  keywords: ["Dokuma news", "press releases", "tech updates Africa", "success stories", "media features", "digital transformation news"],
}

export default function NewsroomLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
