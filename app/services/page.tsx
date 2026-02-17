"use client"

import Image from "next/image"
import Link from "next/link"
import { SiteLayout } from "@/components/site-layout"
import { AnimatedSection } from "@/components/animated-section"
import { motion } from "framer-motion"
import { ArrowRight, Gem, Hammer, Paintbrush, RefreshCw, Sparkles, Wrench, MessageSquare, Eye } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const serviceIcons = [Paintbrush, Gem, Wrench, RefreshCw, Sparkles, Hammer]
const processIcons = [MessageSquare, Paintbrush, Hammer, Eye]

export default function ServicesPage() {
  const { language } = useLanguage()
  const t = {
    en: {
      heroEyebrow: "What We Do",
      heroTitle: "Our Services",
      heroBody:
        "From bespoke commissions to expert repairs, Gold Ideas offers a complete range of goldsmithing services with the personal attention of a master craftsman.",
      services: [
        { title: "Bespoke Design", description: "Unique jewelry tailored to your vision from first sketch to final masterpiece.", highlights: ["Personal consultation", "Hand sketches and 3D concepts", "Material and gemstone selection", "Handcrafted to perfection"] },
        { title: "Stone Selection & Setting", description: "Exceptional Namibian gemstones with expert setting in gold, platinum, and silver.", highlights: ["Namibian tourmalines and diamonds", "Ethically sourced gemstones", "Expert grading", "Precision stone setting"] },
        { title: "Jewelry Repair", description: "We restore broken or worn jewelry to its original glory or better.", highlights: ["Ring resizing", "Chain and clasp repair", "Stone replacement", "Structural restoration"] },
        { title: "Restoration & Redesign", description: "Transform heirloom pieces into contemporary masterpieces while honoring their history.", highlights: ["Heirloom transformation", "Antique restoration", "Modern redesign", "Gold recycling and reuse"] },
        { title: "3D Surface Texturing", description: "Our signature technique creates tactile three-dimensional structures on metal.", highlights: ["Signature Gann technique", "Unique surface patterns", "Mixed metal textures", "Inlay with exotic materials"] },
        { title: "Wedding & Engagement", description: "Commission rings as unique as your love story with Namibian stones.", highlights: ["Custom engagement rings", "Matching wedding bands", "Namibian diamond selection", "Engraving and personalization"] },
      ],
      processEyebrow: "How It Works",
      processTitle: "The Bespoke Journey",
      processBody: "From inspiration to reveal, every step is crafted as an experience.",
      process: [
        { step: "01", title: "Consultation", description: "We discuss your vision and the story your piece should tell." },
        { step: "02", title: "Design", description: "Ideas become sketches and material selections with your input." },
        { step: "03", title: "Crafting", description: "Your piece is handcrafted using traditional methods and our 3D textures." },
        { step: "04", title: "Reveal", description: "We present the finished piece with care guidance for lifelong wear." },
      ],
      ctaEyebrow: "Get Started",
      ctaTitle: "Your Vision, Our Craft",
      ctaBody: "Whether you have a complete design or just inspiration, we guide you through the entire creative process.",
      ctaPrimary: "Book a Consultation",
      ctaSecondary: "View Collections",
    },
    de: {
      heroEyebrow: "Was wir tun",
      heroTitle: "Unsere Leistungen",
      heroBody: "Von individuellen Auftraegen bis zu professionellen Reparaturen bietet Gold Ideas das gesamte Spektrum der Goldschmiedekunst.",
      services: [
        { title: "Individuelles Design", description: "Einzigartiger Schmuck nach Ihrer Vision vom Entwurf bis zum Meisterstueck.", highlights: ["Persoenliche Beratung", "Skizzen und 3D-Konzepte", "Material- und Steinauswahl", "Handgefertigte Perfektion"] },
        { title: "Steinauswahl & Fassung", description: "Aussergewoehnliche namibische Edelsteine mit praeziser Fassung.", highlights: ["Namibische Turmaline und Diamanten", "Ethisch bezogene Steine", "Fachkundige Bewertung", "Praezise Fassung"] },
        { title: "Schmuckreparatur", description: "Wir reparieren und restaurieren Ihre wertvollen Stuecke fachgerecht.", highlights: ["Ringgroessenanpassung", "Ketten- und Verschlussreparatur", "Steinersatz", "Strukturelle Restaurierung"] },
        { title: "Restaurierung & Neudesign", description: "Wir verwandeln Erbstuecke in zeitgemaesse Meisterwerke.", highlights: ["Erbstueck-Transformation", "Antikrestaurierung", "Modernes Redesign", "Goldrecycling"] },
        { title: "3D-Oberflaechentextur", description: "Unsere Signaturtechnik schafft taktile dreidimensionale Oberflaechen.", highlights: ["Gann-Signaturtechnik", "Einzigartige Muster", "Mischmetall-Texturen", "Einlegearbeit mit besonderen Materialien"] },
        { title: "Hochzeit & Verlobung", description: "Ringe, so einzigartig wie Ihre Liebesgeschichte.", highlights: ["Individuelle Verlobungsringe", "Passende Eheringe", "Namibische Diamanten", "Gravur und Personalisierung"] },
      ],
      processEyebrow: "So funktioniert es",
      processTitle: "Die individuelle Reise",
      processBody: "Von der Idee bis zur Uebergabe wird jeder Schritt bewusst gestaltet.",
      process: [
        { step: "01", title: "Beratung", description: "Wir besprechen Ihre Vorstellung und Geschichte." },
        { step: "02", title: "Entwurf", description: "Ideen werden zu Skizzen und Materialwahl." },
        { step: "03", title: "Fertigung", description: "Ihr Stueck wird traditionell und praezise von Hand gefertigt." },
        { step: "04", title: "Uebergabe", description: "Sie erhalten Ihr fertiges Stueck inklusive Pflegehinweisen." },
      ],
      ctaEyebrow: "Jetzt starten",
      ctaTitle: "Ihre Vision, unser Handwerk",
      ctaBody: "Ob klare Vorstellung oder erste Idee, wir begleiten Sie durch den gesamten kreativen Prozess.",
      ctaPrimary: "Beratung buchen",
      ctaSecondary: "Kollektionen ansehen",
    },
    af: {
      heroEyebrow: "Wat Ons Doen",
      heroTitle: "Ons Dienste",
      heroBody: "Van pasgemaakte bestellings tot kundige herstelwerk bied Gold Ideas n volledige reeks goudsmedingsdienste.",
      services: [
        { title: "Pasgemaakte Ontwerp", description: "Unieke juweliersware volgens jou visie van eerste skets tot finale meesterstuk.", highlights: ["Persoonlike konsultasie", "Sketse en 3D-konsepte", "Materiaal- en steenkeuse", "Handgemaak tot perfeksie"] },
        { title: "Steenkeuse & Setting", description: "Uitsonderlike Namibiese edelstene met kundige setting in goud, platinum en silwer.", highlights: ["Namibiese toermalyne en diamante", "Eties verkryde stene", "Kundige gradering", "Presiese steensetting"] },
        { title: "Juweel Herstel", description: "Ons herstel gebreekte of verslete stukke na hul oorspronklike glans.", highlights: ["Ringvergroting en verkleining", "Ketting- en sluitingherstel", "Steenvervanging", "Strukturele herstel"] },
        { title: "Restourasie & Herontwerp", description: "Gee erfstukke nuwe lewe met moderne ontwerp.", highlights: ["Erfstuk transformasie", "Antieke restourasie", "Moderne herontwerp", "Goud herwinning"] },
        { title: "3D Oppervlak Tekstuur", description: "Ons kenmerkende tegniek skep driedimensionele teksture op metaal.", highlights: ["Gann kenmerktegniek", "Unieke patrone", "Gemengde metaalteksture", "Inlegwerk met unieke materiale"] },
        { title: "Troue & Verlowing", description: "Bestel ringe wat net so uniek soos julle liefdesverhaal is.", highlights: ["Pasgemaakte verlowingsringe", "Bypassende trouringe", "Namibiese diamantkeuse", "Gravering en personalisering"] },
      ],
      processEyebrow: "Hoe Dit Werk",
      processTitle: "Die Pasgemaakte Reis",
      processBody: "Van inspirasie tot onthulling word elke stap as n ervaring ontwerp.",
      process: [
        { step: "01", title: "Konsultasie", description: "Ons bespreek jou visie en storie." },
        { step: "02", title: "Ontwerp", description: "Idees word sketse en materiaalkeuses met jou insette." },
        { step: "03", title: "Vervaardiging", description: "Jou stuk word met tradisionele metodes met die hand gemaak." },
        { step: "04", title: "Onthulling", description: "Ons oorhandig die finale stuk met sorginstruksies vir lewenslange dra." },
      ],
      ctaEyebrow: "Begin Nou",
      ctaTitle: "Jou Visie, Ons Vakmanskap",
      ctaBody: "Of jy n volledige ontwerp het of net inspirasie, ons lei jou deur die hele proses.",
      ctaPrimary: "Boek n Konsultasie",
      ctaSecondary: "Sien Versamelings",
    },
  }[language]

  return (
    <SiteLayout>
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-card" />
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(circle_at_50%_80%,hsl(var(--accent))_0%,transparent_50%)]" />
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

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {t.services.map((service, i) => {
              const Icon = serviceIcons[i]
              return (
                <AnimatedSection key={service.title} delay={i * 0.1}>
                  <div className="group flex h-full flex-col rounded-sm border border-border bg-card p-8 transition-all duration-500 hover:border-accent/30 hover:shadow-lg">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-sm bg-secondary transition-all duration-500 group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon className="h-6 w-6 text-accent transition-colors duration-500 group-hover:text-accent-foreground" />
                    </div>
                    <h3 className="font-serif text-xl text-foreground">{service.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                    <ul className="mt-6 flex flex-col gap-2 border-t border-border pt-6">
                      {service.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="h-1 w-1 rounded-full bg-accent" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-card py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mb-16 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">{t.processEyebrow}</span>
            <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
              <span className="text-balance">{t.processTitle}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t.processBody}</p>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {t.process.map((step, i) => {
              const Icon = processIcons[i]
              return (
                <AnimatedSection key={step.step} delay={i * 0.15}>
                  <div className="relative">
                    {i < t.process.length - 1 && <div className="absolute right-0 top-8 hidden h-px w-full bg-border lg:block" style={{ left: "60%" }} />}
                    <div className="relative">
                      <span className="font-serif text-5xl font-bold text-accent/20">{step.step}</span>
                      <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                        <Icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <h3 className="mt-4 font-serif text-lg text-foreground">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <AnimatedSection direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image src="/images/interior.jpg" alt="Gold Ideas atelier interior" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">{t.ctaEyebrow}</span>
              <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
                <span className="text-balance">{t.ctaTitle}</span>
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">{t.ctaBody}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="group flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground">
                  {t.ctaPrimary}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link href="/collections" className="rounded-sm border border-border px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-foreground transition-all duration-300 hover:border-accent hover:text-accent">
                  {t.ctaSecondary}
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
