"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { SiteLayout } from "@/components/site-layout"
import { AnimatedSection } from "@/components/animated-section"
import { motion, AnimatePresence } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const categories = ["All", "Rings", "Pendants", "Earrings", "Bracelets", "Necklaces", "Bridal"]

const collections = [
  {
    id: 1,
    title: "Amethyst Illusion Ring",
    category: "Rings",
    material: "925 Silver & 750 Gold",
    stone: "Namibian Amethyst Fancy Cut",
    image: "/images/jewelry-ring-1.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Tourmaline Essence Pendant",
    category: "Pendants",
    material: "750 Yellow Gold",
    stone: "Green Namibian Tourmaline",
    image: "/images/jewelry-pendant-1.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "Garnet Embrace Bracelet",
    category: "Bracelets",
    material: "Mixed Metals",
    stone: "Namibian Garnets",
    image: "/images/jewelry-bracelet-1.jpg",
    featured: true,
  },
  {
    id: 4,
    title: "Azure Drop Earrings",
    category: "Earrings",
    material: "750 Gold",
    stone: "Raw Blue Tourmaline",
    image: "/images/jewelry-earrings-1.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "Eternal Bond Rings",
    category: "Bridal",
    material: "Platinum & 750 Gold",
    stone: "Namibian Diamonds",
    image: "/images/jewelry-wedding-1.jpg",
    featured: true,
  },
  {
    id: 6,
    title: "Heritage Statement Necklace",
    category: "Necklaces",
    material: "750 Gold",
    stone: "Tourmaline & Garnet",
    image: "/images/jewelry-necklace-1.jpg",
    featured: false,
  },
  {
    id: 7,
    title: "Namibian Spirit Brooch",
    category: "Pendants",
    material: "Mixed Metals",
    stone: "Amethyst & Diamonds",
    image: "/images/jewelry-brooch-1.jpg",
    featured: false,
  },
  {
    id: 8,
    title: "Diamond Whisper Solitaire",
    category: "Rings",
    material: "750 Yellow Gold",
    stone: "Namibian Diamond",
    image: "/images/jewelry-engagement.jpg",
    featured: true,
  },
]

const featuredPieces = collections.filter((c) => c.featured)

function FeaturedCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  )
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden rounded-sm">
        <div className="flex">
          {featuredPieces.map((piece) => (
            <div key={piece.id} className="min-w-0 shrink-0 grow-0 basis-full px-2 md:basis-4/5 lg:basis-3/5">
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                <Image
                  src={piece.image}
                  alt={piece.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 70vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-accent">
                    {piece.category}
                  </span>
                  <h3 className="mt-1 font-serif text-2xl text-primary-foreground dark:text-foreground md:text-3xl">
                    {piece.title}
                  </h3>
                  <p className="mt-1 text-sm text-primary-foreground/70 dark:text-muted-foreground">
                    {piece.material} | {piece.stone}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-sm transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:border-accent md:left-4 md:h-12 md:w-12"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-sm transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:border-accent md:right-4 md:h-12 md:w-12"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="mt-6 flex items-center justify-center gap-2">
        {featuredPieces.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === selectedIndex ? "w-8 bg-accent" : "w-1.5 bg-border hover:bg-muted-foreground"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function CollectionsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredCollections =
    activeCategory === "All"
      ? collections
      : collections.filter((c) => c.category === activeCategory)

  return (
    <SiteLayout>
      {/* Page Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-card" />
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(circle_at_70%_50%,hsl(var(--accent))_0%,transparent_50%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              Our Work
            </span>
            <h1 className="mt-4 font-serif text-5xl text-foreground md:text-6xl lg:text-7xl">
              <span className="text-balance">Collections</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Each piece in our collection is a unique expression of Namibian beauty,
              handcrafted with intention and extraordinary materials.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mb-12 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              Highlights
            </span>
            <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
              Featured Pieces
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <FeaturedCarousel />
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-card py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mb-12 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              Browse
            </span>
            <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
              Full Collection
            </h2>
          </AnimatedSection>

          {/* Category Filter */}
          <AnimatedSection delay={0.1} className="mb-12">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-sm px-5 py-2.5 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-background text-muted-foreground hover:border-accent hover:text-accent"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Grid */}
          <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredCollections.map((piece) => (
                <motion.div
                  key={piece.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="group cursor-pointer">
                    <div className="relative aspect-square overflow-hidden rounded-sm bg-muted">
                      <Image
                        src={piece.image}
                        alt={piece.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        <span className="text-xs font-medium uppercase tracking-wider text-accent">
                          {piece.material}
                        </span>
                        <p className="mt-1 text-sm text-primary-foreground dark:text-foreground">{piece.stone}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <span className="text-[11px] font-medium uppercase tracking-wider text-accent">
                        {piece.category}
                      </span>
                      <h3 className="mt-1 font-serif text-lg text-foreground transition-colors duration-300 group-hover:text-accent">
                        {piece.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">
              <span className="text-balance">{"Don't See What You're Looking For?"}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Every Gold Ideas piece can be customized or created from scratch. Share your
              vision and let us bring it to life.
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
            >
              Commission a Piece
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </SiteLayout>
  )
}
