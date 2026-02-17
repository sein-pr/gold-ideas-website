"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function HeroSection() {
  const { language } = useLanguage()
  const t = {
    en: {
      tagline: "Ewald Gann Goldsmith",
      titleA: "Where Namibian Spirit Meets",
      titleB: "Timeless Craft",
      body:
        "Three-dimensional masterpieces handcrafted from Namibian gemstones, gold, and the extraordinary. Every piece tells a story of heritage and artistry.",
      explore: "Explore Collections",
      story: "Our Story",
      stats: [
        { value: "30+", label: "Years of Mastery" },
        { value: "1000+", label: "Pieces Created" },
        { value: "100%", label: "Handcrafted" },
      ],
      scroll: "Scroll",
    },
    de: {
      tagline: "Ewald Gann Goldschmied",
      titleA: "Wo namibischer Geist auf",
      titleB: "zeitlose Handwerkskunst trifft",
      body:
        "Dreidimensionale Meisterwerke aus namibischen Edelsteinen, Gold und aussergewoehnlichen Materialien. Jedes Stueck erzaehlt eine Geschichte von Herkunft und Kunst.",
      explore: "Kollektionen entdecken",
      story: "Unsere Geschichte",
      stats: [
        { value: "30+", label: "Jahre Meisterschaft" },
        { value: "1000+", label: "Stuecke gefertigt" },
        { value: "100%", label: "Handgefertigt" },
      ],
      scroll: "Scrollen",
    },
    af: {
      tagline: "Ewald Gann Goudsmid",
      titleA: "Waar Namibiese Gees",
      titleB: "tydlose vakmanskap ontmoet",
      body:
        "Driedimensionele meesterstukke handgemaak uit Namibiese edelstene, goud en die buitengewone. Elke stuk vertel 'n storie van erfenis en kuns.",
      explore: "Verken Versamelings",
      story: "Ons Storie",
      stats: [
        { value: "30+", label: "Jare Meesterskap" },
        { value: "1000+", label: "Stukke Gemaak" },
        { value: "100%", label: "Handgemaak" },
      ],
      scroll: "Rol af",
    },
  }[language]

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-jewelry.jpg"
          alt="Gold Ideas handcrafted jewelry collection"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30 dark:from-background/98 dark:via-background/80 dark:to-background/50" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-8">
        <div className="max-w-2xl py-32 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <span className="inline-block border-b-2 border-accent pb-1 text-xs font-medium uppercase tracking-[0.3em] text-accent">
              {t.tagline}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            <span className="text-balance">{t.titleA}</span>{" "}
            <span className="italic text-accent">{t.titleB}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {t.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/collections"
              className="group flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:shadow-lg"
            >
              {t.explore}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="group flex items-center gap-2 rounded-sm border border-foreground/20 px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-foreground transition-all duration-300 hover:border-accent hover:text-accent"
            >
              {t.story}
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 flex flex-wrap gap-8 border-t border-border pt-8 lg:gap-12"
          >
            {t.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + i * 0.15 }}
              >
                <p className="font-serif text-3xl text-accent lg:text-4xl">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {t.scroll}
          </span>
          <div className="h-8 w-px bg-accent/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
