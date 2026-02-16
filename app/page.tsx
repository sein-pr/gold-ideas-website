"use client"

import { SiteLayout } from "@/components/site-layout"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturedPieces } from "@/components/home/featured-pieces"
import { AboutTeaser } from "@/components/home/about-teaser"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <SiteLayout>
      <HeroSection />
      <FeaturedPieces />
      <AboutTeaser />
      <TestimonialsSection />
      <CTASection />
    </SiteLayout>
  )
}
