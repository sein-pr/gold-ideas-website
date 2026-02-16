"use client"

import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowRight } from "lucide-react"

const pieces = [
  {
    title: "Amethyst Illusion Ring",
    description: "925 Silver & 750 Gold with Namibian amethyst fancy cut",
    image: "/images/jewelry-ring-1.jpg",
    category: "Rings",
  },
  {
    title: "Tourmaline Essence Pendant",
    description: "Handcrafted gold pendant with green Namibian tourmaline",
    image: "/images/jewelry-pendant-1.jpg",
    category: "Pendants",
  },
  {
    title: "Garnet Embrace Bracelet",
    description: "Mixed metals with Namibian garnets and hammered texture",
    image: "/images/jewelry-bracelet-1.jpg",
    category: "Bracelets",
  },
  {
    title: "Azure Drop Earrings",
    description: "Sculptural gold earrings with raw blue tourmaline",
    image: "/images/jewelry-earrings-1.jpg",
    category: "Earrings",
  },
]

export function FeaturedPieces() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="mb-16 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
            Featured Collection
          </span>
          <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
            <span className="text-balance">Signature Masterpieces</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Each piece in our collection is a unique conversation between Namibian nature
            and master craftsmanship.
          </p>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pieces.map((piece, i) => (
            <AnimatedSection key={piece.title} delay={i * 0.12} direction="up">
              <Link href="/collections" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
                  <Image
                    src={piece.image}
                    alt={piece.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-primary-foreground">
                      View Piece <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-accent">
                    {piece.category}
                  </span>
                  <h3 className="mt-1 font-serif text-lg text-foreground transition-colors duration-300 group-hover:text-accent">
                    {piece.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{piece.description}</p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 text-center" delay={0.5}>
          <Link
            href="/collections"
            className="group inline-flex items-center gap-2 border-b border-accent pb-1 text-sm font-medium uppercase tracking-widest text-accent transition-all duration-300 hover:gap-3"
          >
            View Full Collection
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
