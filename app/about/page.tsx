"use client"

import Image from "next/image"
import Link from "next/link"
import { SiteLayout } from "@/components/site-layout"
import { AnimatedSection } from "@/components/animated-section"
import { motion } from "framer-motion"
import { ArrowRight, Gem, Hammer, Heart, Sparkles } from "lucide-react"

const timeline = [
  {
    year: "Early Years",
    title: "A Goldsmith is Born",
    description:
      "Ewald Gann began his journey as an apprentice goldsmith in Germany, mastering the ancient techniques of European jewelry making under the tutelage of master craftsmen.",
  },
  {
    year: "Namibia",
    title: "Finding Home in Windhoek",
    description:
      "Drawn by the raw beauty of Namibia's landscape and its treasure trove of gemstones, Ewald established Gold Ideas in Klein Windhoek, merging European precision with African soul.",
  },
  {
    year: "Innovation",
    title: "Pioneering 3D Surface Art",
    description:
      "Ewald developed his signature three-dimensional surface-structure technique, creating jewelry with distinct tactile textures that set Gold Ideas apart from any other jeweler in Namibia.",
  },
  {
    year: "Today",
    title: "A Living Legacy",
    description:
      "Gold Ideas continues to push the boundaries of bespoke jewelry, working with Namibian tourmalines, diamonds, giraffe hair, and Omba shells to create wearable works of art.",
  },
]

const values = [
  {
    icon: Hammer,
    title: "Master Craftsmanship",
    description:
      "Every piece is handcrafted using time-honored goldsmithing techniques passed down through generations of European master artisans.",
  },
  {
    icon: Gem,
    title: "Namibian Materials",
    description:
      "We source the finest gemstones from Namibia's rich earth - tourmalines, garnets, diamonds, and unique materials found nowhere else.",
  },
  {
    icon: Heart,
    title: "Bespoke Design",
    description:
      "No two pieces are alike. Each creation is designed in intimate consultation with our clients, reflecting their personal story.",
  },
  {
    icon: Sparkles,
    title: "Three-Dimensional Art",
    description:
      "Our signature 3D surface-structure variation technique transforms flat metal into living, breathing sculptural jewelry.",
  },
]

export default function AboutPage() {
  return (
    <SiteLayout>
      {/* Page Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-card" />
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(circle_at_30%_50%,hsl(var(--accent))_0%,transparent_50%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              Our Story
            </span>
            <h1 className="mt-4 font-serif text-5xl text-foreground md:text-6xl lg:text-7xl">
              <span className="text-balance">The Art of Gold</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A journey of passion, precision, and the extraordinary beauty of Namibia, told
              through handcrafted jewelry that transcends time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Craftsman */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <Image
                    src="/images/workshop-ewald.jpg"
                    alt="Master goldsmith Ewald Gann at his workbench"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 h-full w-full rounded-sm border-2 border-accent/20 -z-10" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
                Master Goldsmith
              </span>
              <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
                <span className="text-balance">Ewald Gann</span>
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Ewald Gann is not merely a goldsmith; he is an artist who speaks through
                  metal and stone. Trained in the rigorous tradition of German goldsmithing,
                  he brought his exacting technical skills to Namibia, where the raw and
                  untamed beauty of the landscape became his greatest muse.
                </p>
                <p>
                  At his atelier on Sam Nujoma Drive in Klein Windhoek, Ewald creates pieces
                  that are as much about the experience of touching and wearing them as they
                  are about visual beauty. His pioneering three-dimensional surface-structure
                  technique produces textures that catch the light in unexpected ways,
                  creating jewelry that changes character with every movement.
                </p>
                <p>
                  Using Namibian tourmalines, locally sourced diamonds, and extraordinary
                  organic materials like giraffe hair and Omba shells, Ewald{"'"}s work
                  celebrates the unique spirit of this remarkable land.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* The Workshop */}
      <section className="bg-card py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <AnimatedSection direction="left" className="order-2 lg:order-1">
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
                The Atelier
              </span>
              <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
                <span className="text-balance">Where Ideas Take Form</span>
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Nestled in the heart of Klein Windhoek, the Gold Ideas atelier is a
                  sanctuary where creativity and craftsmanship converge. With its stone
                  walls, natural light pouring through skylights, and the quiet hum of
                  traditional tools, it is a space that inspires both the maker and the
                  visitor.
                </p>
                <p>
                  The workshop is a living testament to the craft - display cases filled with
                  African art, shelves lined with gemstone references, and workbenches worn
                  smooth by decades of patient artistry. Here, clients can witness their
                  bespoke piece come to life, from the first sketch to the final polish.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2} className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src="/images/interior.jpg"
                    alt="Gold Ideas atelier interior with display cases"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src="/images/workshop-artisan.jpg"
                    alt="Artisan at work crafting jewelry"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mb-16 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              Our Journey
            </span>
            <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
              <span className="text-balance">A Path of Passion</span>
            </h2>
          </AnimatedSection>

          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

            {timeline.map((item, i) => (
              <AnimatedSection
                key={item.year}
                delay={i * 0.15}
                direction={i % 2 === 0 ? "left" : "right"}
                className={`relative mb-12 pl-8 md:w-1/2 md:pl-0 ${
                  i % 2 === 0
                    ? "md:pr-12 md:text-right"
                    : "md:ml-auto md:pl-12"
                }`}
              >
                <div
                  className={`absolute top-1 h-3 w-3 rounded-full border-2 border-accent bg-background ${
                    i % 2 === 0
                      ? "left-[-6px] md:left-auto md:-right-[7px]"
                      : "left-[-6px] md:-left-[7px]"
                  }`}
                />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
                  {item.year}
                </span>
                <h3 className="mt-2 font-serif text-xl text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-card py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mb-16 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              Our Philosophy
            </span>
            <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
              <span className="text-balance">Guided by Principle</span>
            </h2>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.12}>
                <div className="group rounded-sm border border-border bg-background p-8 transition-all duration-500 hover:border-accent/30 hover:shadow-lg">
                  <value.icon className="h-8 w-8 text-accent transition-transform duration-500 group-hover:scale-110" />
                  <h3 className="mt-4 font-serif text-lg text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="font-serif text-4xl text-foreground md:text-5xl">
              <span className="text-balance">Ready to Create Something Extraordinary?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground leading-relaxed">
              Visit our atelier in Klein Windhoek and experience the art of bespoke
              goldsmithing firsthand.
            </p>
            <Link
              href="/contact"
              className="group mt-10 inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </SiteLayout>
  )
}
