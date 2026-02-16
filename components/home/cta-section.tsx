"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function CTASection() {
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
              Visit Our Atelier
            </span>
            <h2 className="mt-4 font-serif text-4xl text-primary-foreground dark:text-foreground md:text-5xl">
              <span className="text-balance">Begin Your Bespoke Journey</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-primary-foreground/80 dark:text-muted-foreground">
              Step into our Klein Windhoek atelier and discover the art of bespoke jewelry
              making. From the initial consultation to the final reveal, every moment is
              crafted with care.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-sm bg-accent px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-accent-foreground transition-all duration-300 hover:shadow-lg hover:brightness-110"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="rounded-sm border border-primary-foreground/30 px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:border-accent hover:text-accent dark:border-foreground/30 dark:text-foreground dark:hover:border-accent dark:hover:text-accent"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
