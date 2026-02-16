"use client"

import Image from "next/image"
import Link from "next/link"
import { SiteLayout } from "@/components/site-layout"
import { AnimatedSection } from "@/components/animated-section"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Gem,
  Hammer,
  Paintbrush,
  RefreshCw,
  Sparkles,
  Wrench,
  MessageSquare,
  Eye,
} from "lucide-react"

const services = [
  {
    icon: Paintbrush,
    title: "Bespoke Design",
    description:
      "From the first sketch to the final masterpiece, we create entirely unique jewelry tailored to your vision. Every bespoke piece begins with an intimate design consultation.",
    highlights: [
      "Personal design consultation",
      "Hand sketches and 3D concepts",
      "Material and gemstone selection",
      "Handcrafted to perfection",
    ],
  },
  {
    icon: Gem,
    title: "Stone Selection & Setting",
    description:
      "Access to exceptional Namibian gemstones including tourmalines, diamonds, garnets, and rare specimens. Expert setting in gold, platinum, and silver.",
    highlights: [
      "Namibian tourmalines & diamonds",
      "Ethically sourced gemstones",
      "Expert grading and selection",
      "Precision stone setting",
    ],
  },
  {
    icon: Wrench,
    title: "Jewelry Repair",
    description:
      "Whether it is a broken clasp, a loose stone, or structural damage, our master goldsmiths restore your precious pieces to their original glory, or better.",
    highlights: [
      "Ring resizing",
      "Chain and clasp repair",
      "Stone replacement",
      "Structural restoration",
    ],
  },
  {
    icon: RefreshCw,
    title: "Restoration & Redesign",
    description:
      "Breathe new life into heirloom pieces. We transform inherited or outdated jewelry into contemporary masterpieces while honoring their history.",
    highlights: [
      "Heirloom transformation",
      "Antique restoration",
      "Modern redesign",
      "Gold recycling and reuse",
    ],
  },
  {
    icon: Sparkles,
    title: "3D Surface Texturing",
    description:
      "Our signature technique creates three-dimensional surface structures on metal, producing jewelry with a tactile quality found nowhere else in Namibia.",
    highlights: [
      "Signature Gann technique",
      "Unique surface patterns",
      "Mixed metal textures",
      "Inlay work with exotic materials",
    ],
  },
  {
    icon: Hammer,
    title: "Wedding & Engagement",
    description:
      "Commission rings that are as unique as your love story. Using Namibian diamonds and gemstones, we create symbols of commitment that stand the test of time.",
    highlights: [
      "Custom engagement rings",
      "Matching wedding bands",
      "Namibian diamond selection",
      "Engraving and personalization",
    ],
  },
]

const process = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Consultation",
    description:
      "We begin with a personal conversation about your vision, preferences, and the story you want your piece to tell. This can take place at our atelier or by appointment.",
  },
  {
    step: "02",
    icon: Paintbrush,
    title: "Design",
    description:
      "Ewald translates your ideas into hand-drawn sketches and selects the perfect materials. You are involved at every step, refining the design until it is exactly right.",
  },
  {
    step: "03",
    icon: Hammer,
    title: "Crafting",
    description:
      "The magic happens at the workbench. Using time-honored goldsmithing techniques and our signature 3D texturing, your piece is brought to life by hand.",
  },
  {
    step: "04",
    icon: Eye,
    title: "Reveal",
    description:
      "The moment you have been waiting for. We present your finished piece with the story of its creation, the materials used, and care instructions for a lifetime of wear.",
  },
]

export default function ServicesPage() {
  return (
    <SiteLayout>
      {/* Page Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-card" />
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(circle_at_50%_80%,hsl(var(--accent))_0%,transparent_50%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              What We Do
            </span>
            <h1 className="mt-4 font-serif text-5xl text-foreground md:text-6xl lg:text-7xl">
              <span className="text-balance">Our Services</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              From bespoke commissions to expert repairs, Gold Ideas offers a complete range
              of goldsmithing services with the personal attention of a master craftsman.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <div className="group flex h-full flex-col rounded-sm border border-border bg-card p-8 transition-all duration-500 hover:border-accent/30 hover:shadow-lg">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-sm bg-secondary transition-all duration-500 group-hover:bg-accent group-hover:text-accent-foreground">
                    <service.icon className="h-6 w-6 text-accent transition-colors duration-500 group-hover:text-accent-foreground" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-6 flex flex-col gap-2 border-t border-border pt-6">
                    {service.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <div className="h-1 w-1 rounded-full bg-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-card py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mb-16 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              How It Works
            </span>
            <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
              <span className="text-balance">The Bespoke Journey</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              From initial inspiration to the final reveal, every step of the process is an
              experience in itself.
            </p>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.15}>
                <div className="relative">
                  {i < process.length - 1 && (
                    <div className="absolute right-0 top-8 hidden h-px w-full bg-border lg:block" style={{ left: "60%" }} />
                  )}
                  <div className="relative">
                    <span className="font-serif text-5xl font-bold text-accent/20">{step.step}</span>
                    <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                      <step.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="mt-4 font-serif text-lg text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Image + CTA */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <AnimatedSection direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src="/images/interior.jpg"
                  alt="Gold Ideas atelier interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
                Get Started
              </span>
              <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
                <span className="text-balance">Your Vision, Our Craft</span>
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Whether you have a detailed design in mind or just a spark of inspiration,
                we are here to guide you through the creative process. Every great piece
                begins with a conversation.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
                >
                  Book a Consultation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/collections"
                  className="rounded-sm border border-border px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-foreground transition-all duration-300 hover:border-accent hover:text-accent"
                >
                  View Collections
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
