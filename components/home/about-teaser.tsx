"use client"

import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowRight } from "lucide-react"

export function AboutTeaser() {
  return (
    <section className="overflow-hidden bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src="/images/workshop-ewald.jpg"
                  alt="Ewald Gann at work in his workshop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 z-10 hidden rounded-sm border-4 border-card lg:block">
                <div className="relative h-48 w-36 overflow-hidden rounded-sm">
                  <Image
                    src="/images/workshop-artisan.jpg"
                    alt="Artisan crafting jewelry at Gold Ideas"
                    fill
                    className="object-cover"
                    sizes="144px"
                  />
                </div>
              </div>
              <div className="absolute -left-4 -top-4 h-24 w-24 border-l-2 border-t-2 border-accent/30" />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              The Master Craftsman
            </span>
            <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
              <span className="text-balance">A Legacy of Artistry Since Windhoek</span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              For over three decades, master goldsmith Ewald Gann has been transforming raw
              Namibian materials into three-dimensional works of art. His unique technique of
              surface-structure variation and inlay work has earned Gold Ideas its reputation
              as Windhoek{"'"}s premier bespoke jewelry destination.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Working with materials as diverse as Namibian tourmalines, diamonds, giraffe
              hair, and Omba shells, each piece tells a story of the extraordinary landscape
              that inspires it.
            </p>

            <div className="mt-8 flex flex-wrap gap-8">
              {[
                { label: "Master Goldsmith", detail: "Ewald Gann" },
                { label: "Location", detail: "Klein Windhoek" },
                { label: "Speciality", detail: "3D Surface Art" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs uppercase tracking-wider text-accent">{item.label}</p>
                  <p className="mt-1 font-serif text-lg text-foreground">{item.detail}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="group mt-10 inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
            >
              Discover Our Story
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
