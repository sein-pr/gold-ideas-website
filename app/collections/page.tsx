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
import { useLanguage } from "@/components/language-provider"

type Piece = {
  id: number
  title: string
  category: string
  material: string
  stone: string
  image: string
  featured: boolean
}

function FeaturedCarousel({
  pieces,
  prevLabel,
  nextLabel,
  goToLabel,
}: {
  pieces: Piece[]
  prevLabel: string
  nextLabel: string
  goToLabel: string
}) {
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
    return () => emblaApi.off("select", onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden rounded-sm">
        <div className="flex">
          {pieces.map((piece) => (
            <div key={piece.id} className="min-w-0 shrink-0 grow-0 basis-full px-2 md:basis-4/5 lg:basis-3/5">
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                <Image src={piece.image} alt={piece.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 70vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-accent">{piece.category}</span>
                  <h3 className="mt-1 font-serif text-2xl text-primary-foreground dark:text-foreground md:text-3xl">{piece.title}</h3>
                  <p className="mt-1 text-sm text-primary-foreground/70 dark:text-muted-foreground">{piece.material} | {piece.stone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-sm transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:border-accent md:left-4 md:h-12 md:w-12"
        aria-label={prevLabel}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-sm transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:border-accent md:right-4 md:h-12 md:w-12"
        aria-label={nextLabel}
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="mt-6 flex items-center justify-center gap-2">
        {pieces.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === selectedIndex ? "w-8 bg-accent" : "w-1.5 bg-border hover:bg-muted-foreground"}`}
            aria-label={`${goToLabel} ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function CollectionsPage() {
  const { language } = useLanguage()
  const t = {
    en: {
      categories: [
        { key: "all", label: "All" },
        { key: "rings", label: "Rings" },
        { key: "pendants", label: "Pendants" },
        { key: "earrings", label: "Earrings" },
        { key: "bracelets", label: "Bracelets" },
        { key: "necklaces", label: "Necklaces" },
        { key: "bridal", label: "Bridal" },
      ],
      pieces: [
        { id: 1, key: "rings", title: "Amethyst Illusion Ring", material: "925 Silver & 750 Gold", stone: "Namibian Amethyst Fancy Cut", image: "/images/jewelry-ring-1.jpg", featured: true },
        { id: 2, key: "pendants", title: "Tourmaline Essence Pendant", material: "750 Yellow Gold", stone: "Green Namibian Tourmaline", image: "/images/jewelry-pendant-1.jpg", featured: true },
        { id: 3, key: "bracelets", title: "Garnet Embrace Bracelet", material: "Mixed Metals", stone: "Namibian Garnets", image: "/images/jewelry-bracelet-1.jpg", featured: true },
        { id: 4, key: "earrings", title: "Azure Drop Earrings", material: "750 Gold", stone: "Raw Blue Tourmaline", image: "/images/jewelry-earrings-1.jpg", featured: false },
        { id: 5, key: "bridal", title: "Eternal Bond Rings", material: "Platinum & 750 Gold", stone: "Namibian Diamonds", image: "/images/jewelry-wedding-1.jpg", featured: true },
        { id: 6, key: "necklaces", title: "Heritage Statement Necklace", material: "750 Gold", stone: "Tourmaline & Garnet", image: "/images/jewelry-necklace-1.jpg", featured: false },
        { id: 7, key: "pendants", title: "Namibian Spirit Brooch", material: "Mixed Metals", stone: "Amethyst & Diamonds", image: "/images/jewelry-brooch-1.jpg", featured: false },
        { id: 8, key: "rings", title: "Diamond Whisper Solitaire", material: "750 Yellow Gold", stone: "Namibian Diamond", image: "/images/jewelry-engagement.jpg", featured: true },
      ],
      heroEyebrow: "Our Work",
      heroTitle: "Collections",
      heroBody: "Each piece in our collection is a unique expression of Namibian beauty, handcrafted with intention and extraordinary materials.",
      highlightEyebrow: "Highlights",
      highlightTitle: "Featured Pieces",
      browseEyebrow: "Browse",
      browseTitle: "Full Collection",
      ctaTitle: "Don't See What You're Looking For?",
      ctaBody: "Every Gold Ideas piece can be customized or created from scratch. Share your vision and let us bring it to life.",
      ctaButton: "Commission a Piece",
      prevSlide: "Previous slide",
      nextSlide: "Next slide",
      goToSlide: "Go to slide",
    },
    de: {
      categories: [
        { key: "all", label: "Alle" }, { key: "rings", label: "Ringe" }, { key: "pendants", label: "Anhaenger" }, { key: "earrings", label: "Ohrringe" }, { key: "bracelets", label: "Armbaender" }, { key: "necklaces", label: "Halsketten" }, { key: "bridal", label: "Braut" },
      ],
      pieces: [
        { id: 1, key: "rings", title: "Amethyst Illusionsring", material: "925 Silber & 750 Gold", stone: "Namibischer Amethyst Fancy Cut", image: "/images/jewelry-ring-1.jpg", featured: true },
        { id: 2, key: "pendants", title: "Turmalin Essenz Anhaenger", material: "750 Gelbgold", stone: "Gruener namibischer Turmalin", image: "/images/jewelry-pendant-1.jpg", featured: true },
        { id: 3, key: "bracelets", title: "Granat Armreif", material: "Mischmetalle", stone: "Namibische Granate", image: "/images/jewelry-bracelet-1.jpg", featured: true },
        { id: 4, key: "earrings", title: "Azur Tropfenohrringe", material: "750 Gold", stone: "Roher blauer Turmalin", image: "/images/jewelry-earrings-1.jpg", featured: false },
        { id: 5, key: "bridal", title: "Ewige Verbindung Ringe", material: "Platin & 750 Gold", stone: "Namibische Diamanten", image: "/images/jewelry-wedding-1.jpg", featured: true },
        { id: 6, key: "necklaces", title: "Heritage Statement Kette", material: "750 Gold", stone: "Turmalin & Granat", image: "/images/jewelry-necklace-1.jpg", featured: false },
        { id: 7, key: "pendants", title: "Namibia Spirit Brosche", material: "Mischmetalle", stone: "Amethyst & Diamanten", image: "/images/jewelry-brooch-1.jpg", featured: false },
        { id: 8, key: "rings", title: "Diamond Whisper Solitaer", material: "750 Gelbgold", stone: "Namibischer Diamant", image: "/images/jewelry-engagement.jpg", featured: true },
      ],
      heroEyebrow: "Unsere Arbeiten",
      heroTitle: "Kollektionen",
      heroBody: "Jedes Stueck unserer Kollektion ist ein einzigartiger Ausdruck namibischer Schoenheit, handgefertigt mit aussergewoehnlichen Materialien.",
      highlightEyebrow: "Highlights",
      highlightTitle: "Ausgewaehlte Stuecke",
      browseEyebrow: "Stoebern",
      browseTitle: "Gesamte Kollektion",
      ctaTitle: "Nicht gefunden, was Sie suchen?",
      ctaBody: "Jedes Gold Ideas Stueck kann angepasst oder neu entworfen werden. Teilen Sie Ihre Vision mit uns.",
      ctaButton: "Stueck in Auftrag geben",
      prevSlide: "Vorherige Folie",
      nextSlide: "Naechste Folie",
      goToSlide: "Gehe zu Folie",
    },
    af: {
      categories: [
        { key: "all", label: "Alles" }, { key: "rings", label: "Ringe" }, { key: "pendants", label: "Hangers" }, { key: "earrings", label: "Oorbelle" }, { key: "bracelets", label: "Armbande" }, { key: "necklaces", label: "Halssnoere" }, { key: "bridal", label: "Bruid" },
      ],
      pieces: [
        { id: 1, key: "rings", title: "Amethyst Illusie Ring", material: "925 Silwer & 750 Goud", stone: "Namibiese Amethyst Fancy Cut", image: "/images/jewelry-ring-1.jpg", featured: true },
        { id: 2, key: "pendants", title: "Toermalyn Essensie Hanger", material: "750 Geelgoud", stone: "Groen Namibiese Toermalyn", image: "/images/jewelry-pendant-1.jpg", featured: true },
        { id: 3, key: "bracelets", title: "Granaat Omhelsing Armband", material: "Gemengde Metale", stone: "Namibiese Granate", image: "/images/jewelry-bracelet-1.jpg", featured: true },
        { id: 4, key: "earrings", title: "Azuur Druppel Oorbelle", material: "750 Goud", stone: "Rou Blou Toermalyn", image: "/images/jewelry-earrings-1.jpg", featured: false },
        { id: 5, key: "bridal", title: "Ewige Band Ringe", material: "Platinum & 750 Goud", stone: "Namibiese Diamante", image: "/images/jewelry-wedding-1.jpg", featured: true },
        { id: 6, key: "necklaces", title: "Erfenis Verklaring Halssnoer", material: "750 Goud", stone: "Toermalyn & Granaat", image: "/images/jewelry-necklace-1.jpg", featured: false },
        { id: 7, key: "pendants", title: "Namibiese Gees Brosj", material: "Gemengde Metale", stone: "Amethyst & Diamante", image: "/images/jewelry-brooch-1.jpg", featured: false },
        { id: 8, key: "rings", title: "Diamond Whisper Solitair", material: "750 Geelgoud", stone: "Namibiese Diamant", image: "/images/jewelry-engagement.jpg", featured: true },
      ],
      heroEyebrow: "Ons Werk",
      heroTitle: "Versamelings",
      heroBody: "Elke stuk in ons versameling is n unieke uitdrukking van Namibiese skoonheid, handgemaak met buitengewone materiale.",
      highlightEyebrow: "Hoogtepunte",
      highlightTitle: "Uitgeligte Stukke",
      browseEyebrow: "Blaai",
      browseTitle: "Volledige Versameling",
      ctaTitle: "Sien jy nie waarna jy soek nie?",
      ctaBody: "Elke Gold Ideas-stuk kan aangepas of van nuuts af gemaak word. Deel jou visie en ons bring dit tot lewe.",
      ctaButton: "Bestel n Stuk",
      prevSlide: "Vorige skyfie",
      nextSlide: "Volgende skyfie",
      goToSlide: "Gaan na skyfie",
    },
  }[language]

  const [activeCategory, setActiveCategory] = useState("all")

  const filteredPieces = activeCategory === "all" ? t.pieces : t.pieces.filter((p) => p.key === activeCategory)
  const featuredPieces: Piece[] = t.pieces
    .filter((p) => p.featured)
    .map((p) => ({
      id: p.id,
      title: p.title,
      category: t.categories.find((c) => c.key === p.key)?.label ?? p.key,
      material: p.material,
      stone: p.stone,
      image: p.image,
      featured: p.featured,
    }))

  return (
    <SiteLayout>
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-card" />
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(circle_at_70%_50%,hsl(var(--accent))_0%,transparent_50%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">{t.heroEyebrow}</span>
            <h1 className="mt-4 font-serif text-5xl text-foreground md:text-6xl lg:text-7xl">
              <span className="text-balance">{t.heroTitle}</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{t.heroBody}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mb-12 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">{t.highlightEyebrow}</span>
            <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">{t.highlightTitle}</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <FeaturedCarousel pieces={featuredPieces} prevLabel={t.prevSlide} nextLabel={t.nextSlide} goToLabel={t.goToSlide} />
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-card py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mb-12 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">{t.browseEyebrow}</span>
            <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">{t.browseTitle}</h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mb-12">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {t.categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`rounded-sm px-5 py-2.5 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${activeCategory === category.key ? "bg-primary text-primary-foreground" : "border border-border bg-background text-muted-foreground hover:border-accent hover:text-accent"}`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredPieces.map((piece) => (
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
                      <Image src={piece.image} alt={piece.title} fill className="object-cover transition-all duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        <span className="text-xs font-medium uppercase tracking-wider text-accent">{piece.material}</span>
                        <p className="mt-1 text-sm text-primary-foreground dark:text-foreground">{piece.stone}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <span className="text-[11px] font-medium uppercase tracking-wider text-accent">{t.categories.find((c) => c.key === piece.key)?.label}</span>
                      <h3 className="mt-1 font-serif text-lg text-foreground transition-colors duration-300 group-hover:text-accent">{piece.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">
              <span className="text-balance">{t.ctaTitle}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t.ctaBody}</p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
            >
              {t.ctaButton}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </SiteLayout>
  )
}
