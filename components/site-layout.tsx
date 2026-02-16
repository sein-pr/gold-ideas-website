"use client"

import { Navigation } from "./navigation"
import { Footer } from "./footer"
import type { ReactNode } from "react"

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
