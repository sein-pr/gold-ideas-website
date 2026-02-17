"use client"

import Image from "next/image"
import Link from "next/link"
import { SiteLayout } from "@/components/site-layout"
import { AnimatedSection } from "@/components/animated-section"
import { motion } from "framer-motion"
import { ArrowRight, Gem, Hammer, Heart, Sparkles } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const valueIcons = [Hammer, Gem, Heart, Sparkles]

export default function AboutPage() {
  const { language } = useLanguage()

  const t = {
    en: {
      heroEyebrow: "Our Story",
      heroTitle: "The Art of Gold",
      heroBody:
        "A journey of passion, precision, and the extraordinary beauty of Namibia, told through handcrafted jewelry that transcends time.",
      craftsmanEyebrow: "Master Goldsmith",
      craftsmanName: "Ewald Gann",
      craftsmanP1:
        "Ewald Gann is not merely a goldsmith; he is an artist who speaks through metal and stone. Trained in the rigorous tradition of German goldsmithing, he brought his exacting technical skills to Namibia.",
      craftsmanP2:
        "At his atelier on Sam Nujoma Drive in Klein Windhoek, Ewald creates pieces that are as much about touch and wear as visual beauty.",
      craftsmanP3:
        "Using Namibian tourmalines, locally sourced diamonds, and extraordinary organic materials like giraffe hair and Omba shells, Ewald's work celebrates the unique spirit of this land.",
      workshopEyebrow: "The Atelier",
      workshopTitle: "Where Ideas Take Form",
      workshopP1:
        "Nestled in the heart of Klein Windhoek, the Gold Ideas atelier is a sanctuary where creativity and craftsmanship converge.",
      workshopP2:
        "The workshop is a living testament to the craft. Clients can witness a bespoke piece come to life from first sketch to final polish.",
      journeyEyebrow: "Our Journey",
      journeyTitle: "A Path of Passion",
      timeline: [
        {
          year: "Early Years",
          title: "A Goldsmith is Born",
          description:
            "Ewald began as an apprentice goldsmith in Germany, mastering classic European techniques.",
        },
        {
          year: "Namibia",
          title: "Finding Home in Windhoek",
          description:
            "Drawn by Namibia's raw beauty, Ewald established Gold Ideas in Klein Windhoek.",
        },
        {
          year: "Innovation",
          title: "Pioneering 3D Surface Art",
          description:
            "He developed his signature three-dimensional surface-structure technique.",
        },
        {
          year: "Today",
          title: "A Living Legacy",
          description:
            "Gold Ideas continues to push bespoke jewelry forward with unique Namibian materials.",
        },
      ],
      philosophyEyebrow: "Our Philosophy",
      philosophyTitle: "Guided by Principle",
      values: [
        {
          title: "Master Craftsmanship",
          description:
            "Every piece is handcrafted using time-honored goldsmithing techniques.",
        },
        {
          title: "Namibian Materials",
          description:
            "We source exceptional gemstones and unique materials from Namibia.",
        },
        {
          title: "Bespoke Design",
          description:
            "No two pieces are alike; each creation reflects a personal story.",
        },
        {
          title: "Three-Dimensional Art",
          description:
            "Our 3D surface-structure variation transforms metal into sculptural jewelry.",
        },
      ],
      ctaTitle: "Ready to Create Something Extraordinary?",
      ctaBody:
        "Visit our atelier in Klein Windhoek and experience bespoke goldsmithing firsthand.",
      ctaButton: "Get in Touch",
    },
    de: {
      heroEyebrow: "Unsere Geschichte",
      heroTitle: "Die Kunst des Goldes",
      heroBody:
        "Eine Reise aus Leidenschaft, Praezision und der aussergewoehnlichen Schoenheit Namibias, erzaehlt durch handgefertigten Schmuck.",
      craftsmanEyebrow: "Goldschmiedemeister",
      craftsmanName: "Ewald Gann",
      craftsmanP1:
        "Ewald Gann ist nicht nur Goldschmied, sondern ein Kuenstler, der durch Metall und Stein spricht.",
      craftsmanP2:
        "In seinem Atelier in Klein Windhoek entstehen Stuecke, die sowohl haptisch als auch visuell beeindrucken.",
      craftsmanP3:
        "Mit namibischen Turmalinen, lokalen Diamanten und besonderen organischen Materialien feiert seine Arbeit den Geist dieses Landes.",
      workshopEyebrow: "Das Atelier",
      workshopTitle: "Wo Ideen Form annehmen",
      workshopP1:
        "Das Gold Ideas Atelier ist ein Ort, an dem Kreativitaet und Handwerk zusammenkommen.",
      workshopP2:
        "Hier koennen Kunden verfolgen, wie ein individuelles Schmuckstueck vom Entwurf bis zur Politur entsteht.",
      journeyEyebrow: "Unser Weg",
      journeyTitle: "Ein Weg der Leidenschaft",
      timeline: [
        {
          year: "Fruehe Jahre",
          title: "Ein Goldschmied entsteht",
          description:
            "Ewald begann als Lehrling in Deutschland und meisterte klassische europaeische Techniken.",
        },
        {
          year: "Namibia",
          title: "Ein Zuhause in Windhoek",
          description:
            "Von Namibias Landschaft inspiriert, gruendete Ewald Gold Ideas in Klein Windhoek.",
        },
        {
          year: "Innovation",
          title: "3D-Oberflaechenkunst",
          description:
            "Er entwickelte seine unverwechselbare dreidimensionale Oberflaechenstruktur-Technik.",
        },
        {
          year: "Heute",
          title: "Ein lebendiges Erbe",
          description:
            "Gold Ideas erweitert weiterhin die Grenzen des individuellen Schmucks.",
        },
      ],
      philosophyEyebrow: "Unsere Philosophie",
      philosophyTitle: "Von Prinzipien geleitet",
      values: [
        { title: "Meisterliches Handwerk", description: "Jedes Stueck wird in traditioneller Goldschmiedekunst handgefertigt." },
        { title: "Namibische Materialien", description: "Wir verwenden ausgesuchte Edelsteine und besondere Materialien aus Namibia." },
        { title: "Individuelles Design", description: "Jedes Schmuckstueck ist einzigartig und persoenlich." },
        { title: "Dreidimensionale Kunst", description: "Unsere 3D-Technik macht Metall zu skulpturalem Schmuck." },
      ],
      ctaTitle: "Bereit fuer etwas Aussergewoehnliches?",
      ctaBody:
        "Besuchen Sie unser Atelier in Klein Windhoek und erleben Sie Goldschmiedekunst aus erster Hand.",
      ctaButton: "Kontakt aufnehmen",
    },
    af: {
      heroEyebrow: "Ons Storie",
      heroTitle: "Die Kuns van Goud",
      heroBody:
        "n Reis van passie, presisie en die buitengewone skoonheid van Namibie, vertel deur handgemaakte juweliersware.",
      craftsmanEyebrow: "Meester Goudsmid",
      craftsmanName: "Ewald Gann",
      craftsmanP1:
        "Ewald Gann is nie net n goudsmid nie; hy is n kunstenaar wat deur metaal en steen praat.",
      craftsmanP2:
        "In sy ateljee in Klein Windhoek skep hy stukke wat beide aanraking en visuele skoonheid vier.",
      craftsmanP3:
        "Met Namibiese toermalyne, plaaslike diamante en unieke organiese materiale vier sy werk die gees van hierdie land.",
      workshopEyebrow: "Die Ateljee",
      workshopTitle: "Waar Idees Vorm Kry",
      workshopP1:
        "Die Gold Ideas-ateljee is n ruimte waar kreatiwiteit en vakmanskap ontmoet.",
      workshopP2:
        "Kliente kan sien hoe n pasgemaakte stuk van eerste skets tot finale poleer tot lewe kom.",
      journeyEyebrow: "Ons Reis",
      journeyTitle: "n Pad van Passie",
      timeline: [
        {
          year: "Vroee Jare",
          title: "n Goudsmid Word Gebore",
          description:
            "Ewald het as leerling in Duitsland begin en klassieke Europese tegnieke bemeester.",
        },
        {
          year: "Namibie",
          title: "n Tuiste in Windhoek",
          description:
            "Geinspireer deur Namibia se landskap het Ewald Gold Ideas in Klein Windhoek gevestig.",
        },
        {
          year: "Innovasie",
          title: "3D Oppervlak Kuns",
          description:
            "Hy het sy kenmerkende driedimensionele oppervlakstruktuur-tegniek ontwikkel.",
        },
        {
          year: "Vandag",
          title: "n Lewende Erfenis",
          description:
            "Gold Ideas stoot steeds die grense van pasgemaakte juweliersware.",
        },
      ],
      philosophyEyebrow: "Ons Filosofie",
      philosophyTitle: "Gelei deur Beginsels",
      values: [
        { title: "Meesterlike Vakmanskap", description: "Elke stuk word met tradisionele goudsmeding-tegnieke handgemaak." },
        { title: "Namibiese Materiale", description: "Ons gebruik uitsonderlike edelstene en unieke materiale uit Namibie." },
        { title: "Pasgemaakte Ontwerp", description: "Geen twee stukke is dieselfde nie; elkeen vertel n persoonlike storie." },
        { title: "Driedimensionele Kuns", description: "Ons 3D-oppervlak tegniek maak metaal in skulpturale juweliersware." },
      ],
      ctaTitle: "Reg om Iets Buitengewoons te Skep?",
      ctaBody:
        "Besoek ons ateljee in Klein Windhoek en beleef pasgemaakte goudsmeding eerstehands.",
      ctaButton: "Kom in Kontak",
    },
  }[language]

  return (
    <SiteLayout>
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
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">{t.heroEyebrow}</span>
            <h1 className="mt-4 font-serif text-5xl text-foreground md:text-6xl lg:text-7xl">
              <span className="text-balance">{t.heroTitle}</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{t.heroBody}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <Image src="/images/workshop-ewald.jpg" alt={t.craftsmanName} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
                <div className="absolute -bottom-4 -right-4 h-full w-full rounded-sm border-2 border-accent/20 -z-10" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">{t.craftsmanEyebrow}</span>
              <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
                <span className="text-balance">{t.craftsmanName}</span>
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                <p>{t.craftsmanP1}</p>
                <p>{t.craftsmanP2}</p>
                <p>{t.craftsmanP3}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-card py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <AnimatedSection direction="left" className="order-2 lg:order-1">
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">{t.workshopEyebrow}</span>
              <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
                <span className="text-balance">{t.workshopTitle}</span>
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                <p>{t.workshopP1}</p>
                <p>{t.workshopP2}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2} className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image src="/images/interior.jpg" alt="Gold Ideas atelier" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                </div>
                <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-sm">
                  <Image src="/images/workshop-artisan.jpg" alt="Goldsmith at work" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mb-16 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">{t.journeyEyebrow}</span>
            <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
              <span className="text-balance">{t.journeyTitle}</span>
            </h2>
          </AnimatedSection>

          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />
            {t.timeline.map((item, i) => (
              <AnimatedSection
                key={item.year}
                delay={i * 0.15}
                direction={i % 2 === 0 ? "left" : "right"}
                className={`relative mb-12 pl-8 md:w-1/2 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"}`}
              >
                <div
                  className={`absolute top-1 h-3 w-3 rounded-full border-2 border-accent bg-background ${i % 2 === 0 ? "left-[-6px] md:left-auto md:-right-[7px]" : "left-[-6px] md:-left-[7px]"}`}
                />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">{item.year}</span>
                <h3 className="mt-2 font-serif text-xl text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mb-16 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">{t.philosophyEyebrow}</span>
            <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
              <span className="text-balance">{t.philosophyTitle}</span>
            </h2>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {t.values.map((value, i) => {
              const Icon = valueIcons[i]
              return (
                <AnimatedSection key={value.title} delay={i * 0.12}>
                  <div className="group rounded-sm border border-border bg-background p-8 transition-all duration-500 hover:border-accent/30 hover:shadow-lg">
                    <Icon className="h-8 w-8 text-accent transition-transform duration-500 group-hover:scale-110" />
                    <h3 className="mt-4 font-serif text-lg text-foreground">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="font-serif text-4xl text-foreground md:text-5xl">
              <span className="text-balance">{t.ctaTitle}</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground leading-relaxed">{t.ctaBody}</p>
            <Link
              href="/contact"
              className="group mt-10 inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
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
