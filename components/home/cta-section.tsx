"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function CTASection() {
  const { language } = useLanguage()
  const t = {
    en: {
      eyebrow: "Visit Our Atelier",
      heading: "Begin Your Bespoke Journey",
      body:
        "Step into our Klein Windhoek atelier and discover the art of bespoke jewelry making. From the initial consultation to the final reveal, every moment is crafted with care.",
      book: "Book a Consultation",
      services: "Our Services",
    },
    de: {
      eyebrow: "Besuchen Sie unser Atelier",
      heading: "Beginnen Sie Ihre individuelle Reise",
      body:
        "Betreten Sie unser Atelier in Klein Windhoek und entdecken Sie die Kunst des individuellen Schmuckdesigns. Von der ersten Beratung bis zur finalen Uebergabe wird jeder Moment mit Sorgfalt gestaltet.",
      book: "Beratung buchen",
      services: "Unsere Leistungen",
    },
    af: {
      eyebrow: "Besoek Ons Ateljee",
      heading: "Begin Jou Pasgemaakte Reis",
      body:
        "Stap in ons Klein Windhoek-ateljee en ontdek die kuns van pasgemaakte juweliersware. Van die eerste konsultasie tot die finale oorhandiging word elke oomblik met sorg geskep.",
      book: "Boek 'n Konsultasie",
      services: "Ons Dienste",
    },
  }[language]

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0">
        <Image
          src="/images/storefront.jpg"
          alt="Gold Ideas storefront in Klein Windhoek"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/85 dark:bg-background/90" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              {t.eyebrow}
            </span>
            <h2 className="mt-4 font-serif text-4xl text-primary-foreground dark:text-foreground md:text-5xl">
              <span className="text-balance">{t.heading}</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-primary-foreground/80 dark:text-muted-foreground">
              {t.body}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-sm bg-accent px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-accent-foreground transition-all duration-300 hover:shadow-lg hover:brightness-110"
              >
                {t.book}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="rounded-sm border border-primary-foreground/30 px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:border-accent hover:text-accent dark:border-foreground/30 dark:text-foreground dark:hover:border-accent dark:hover:text-accent"
              >
                {t.services}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
