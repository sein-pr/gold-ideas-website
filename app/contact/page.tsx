"use client"

import { useState } from "react"
import Image from "next/image"
import { SiteLayout } from "@/components/site-layout"
import { AnimatedSection } from "@/components/animated-section"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Instagram, Facebook } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function ContactPage() {
  const { language } = useLanguage()
  const t = {
    en: {
      heroEyebrow: "Get in Touch",
      heroTitle: "Contact Us",
      heroBody: "Begin your bespoke journey. Whether you have a clear vision or need guidance, we would love to hear from you.",
      cards: [
        { label: "Visit Us", details: ["324 Sam Nujoma Drive", "Klein Windhoek, Namibia"] },
        { label: "Call Us", details: ["+264 (0)61 250448"] },
        { label: "Email Us", details: ["ewald@gold-ideas.com"] },
        { label: "Opening Hours", details: ["Mon - Fri: 09:00 - 17:00", "Sat: 09:00 - 13:00", "Sun: Closed"] },
      ],
      sendMessage: "Send a Message",
      bookConsultation: "Book a Consultation",
      formIntro: "Fill in the form below and we will get back to you within 24 hours.",
      thankYou: "Thank You",
      thankYouBody: "Your message has been received. We will be in touch shortly.",
      sendAnother: "Send Another Message",
      fullName: "Full Name",
      email: "Email",
      phone: "Phone",
      serviceInterest: "Service Interest",
      message: "Your Message",
      namePlaceholder: "Your full name",
      emailPlaceholder: "your@email.com",
      phonePlaceholder: "+264 ...",
      messagePlaceholder: "Tell us about your vision, occasion, or specific requirements...",
      selectService: "Select a service",
      serviceOptions: [
        { value: "bespoke", label: "Bespoke Design" },
        { value: "engagement", label: "Wedding & Engagement" },
        { value: "repair", label: "Jewelry Repair" },
        { value: "restoration", label: "Restoration & Redesign" },
        { value: "consultation", label: "General Consultation" },
      ],
      submit: "Send Message",
      storefrontAlt: "Gold Ideas storefront",
      atelierCard: "Gold Ideas Atelier",
      connectTitle: "Connect With Us",
      connectBody: "Follow our journey and see our latest creations on social media.",
      quote: "\"Emotion in Gold\"",
      quoteBy: "Gold Ideas, Windhoek",
    },
    de: {
      heroEyebrow: "Kontakt",
      heroTitle: "Kontaktieren Sie uns",
      heroBody: "Beginnen Sie Ihre individuelle Reise. Wir freuen uns auf Ihre Nachricht.",
      cards: [
        { label: "Besuchen Sie uns", details: ["324 Sam Nujoma Drive", "Klein Windhoek, Namibia"] },
        { label: "Rufen Sie uns an", details: ["+264 (0)61 250448"] },
        { label: "E-Mail", details: ["ewald@gold-ideas.com"] },
        { label: "Oeffnungszeiten", details: ["Mo - Fr: 09:00 - 17:00", "Sa: 09:00 - 13:00", "So: Geschlossen"] },
      ],
      sendMessage: "Nachricht senden",
      bookConsultation: "Beratung buchen",
      formIntro: "Fuellen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden.",
      thankYou: "Vielen Dank",
      thankYouBody: "Ihre Nachricht wurde empfangen. Wir melden uns in Kuerze.",
      sendAnother: "Weitere Nachricht senden",
      fullName: "Vollstaendiger Name",
      email: "E-Mail",
      phone: "Telefon",
      serviceInterest: "Interesse",
      message: "Ihre Nachricht",
      namePlaceholder: "Ihr Name",
      emailPlaceholder: "ihre@email.com",
      phonePlaceholder: "+264 ...",
      messagePlaceholder: "Erzaehlen Sie uns von Ihrer Vision oder Ihren Anforderungen...",
      selectService: "Leistung auswaehlen",
      serviceOptions: [
        { value: "bespoke", label: "Individuelles Design" },
        { value: "engagement", label: "Hochzeit & Verlobung" },
        { value: "repair", label: "Schmuckreparatur" },
        { value: "restoration", label: "Restaurierung & Redesign" },
        { value: "consultation", label: "Allgemeine Beratung" },
      ],
      submit: "Nachricht senden",
      storefrontAlt: "Gold Ideas Geschaeft",
      atelierCard: "Gold Ideas Atelier",
      connectTitle: "Verbinden Sie sich mit uns",
      connectBody: "Folgen Sie unserer Reise und sehen Sie aktuelle Kreationen in sozialen Medien.",
      quote: "\"Emotion in Gold\"",
      quoteBy: "Gold Ideas, Windhoek",
    },
    af: {
      heroEyebrow: "Kontak",
      heroTitle: "Kontak Ons",
      heroBody: "Begin jou pasgemaakte reis. Ons hoor graag van jou.",
      cards: [
        { label: "Besoek Ons", details: ["324 Sam Nujoma Drive", "Klein Windhoek, Namibia"] },
        { label: "Skakel Ons", details: ["+264 (0)61 250448"] },
        { label: "E-pos Ons", details: ["ewald@gold-ideas.com"] },
        { label: "Openingstye", details: ["Ma - Vr: 09:00 - 17:00", "Sa: 09:00 - 13:00", "So: Gesluit"] },
      ],
      sendMessage: "Stuur n Boodskap",
      bookConsultation: "Boek n Konsultasie",
      formIntro: "Vul die vorm hieronder in en ons antwoord binne 24 uur.",
      thankYou: "Dankie",
      thankYouBody: "Jou boodskap is ontvang. Ons kontak jou binnekort.",
      sendAnother: "Stuur Nog n Boodskap",
      fullName: "Volle Naam",
      email: "E-pos",
      phone: "Telefoon",
      serviceInterest: "Diensbelangstelling",
      message: "Jou Boodskap",
      namePlaceholder: "Jou volle naam",
      emailPlaceholder: "jou@email.com",
      phonePlaceholder: "+264 ...",
      messagePlaceholder: "Vertel ons van jou visie of spesifieke vereistes...",
      selectService: "Kies n diens",
      serviceOptions: [
        { value: "bespoke", label: "Pasgemaakte Ontwerp" },
        { value: "engagement", label: "Troue & Verlowing" },
        { value: "repair", label: "Juweel Herstel" },
        { value: "restoration", label: "Restourasie & Herontwerp" },
        { value: "consultation", label: "Algemene Konsultasie" },
      ],
      submit: "Stuur Boodskap",
      storefrontAlt: "Gold Ideas voorkant",
      atelierCard: "Gold Ideas Ateljee",
      connectTitle: "Skakel Met Ons",
      connectBody: "Volg ons reis en sien ons nuutste skeppings op sosiale media.",
      quote: "\"Emosie in Goud\"",
      quoteBy: "Gold Ideas, Windhoek",
    },
  }[language]

  const cardIcons = [MapPin, Phone, Mail, Clock]

  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <SiteLayout>
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-card" />
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(circle_at_50%_30%,hsl(var(--accent))_0%,transparent_50%)]" />
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.cards.map((info, i) => {
              const Icon = cardIcons[i]
              return (
                <AnimatedSection key={info.label} delay={i * 0.1}>
                  <div className="group flex flex-col items-center rounded-sm border border-border bg-card p-8 text-center transition-all duration-500 hover:border-accent/30 hover:shadow-lg">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition-all duration-500 group-hover:bg-accent">
                      <Icon className="h-6 w-6 text-accent transition-colors duration-500 group-hover:text-accent-foreground" />
                    </div>
                    <h3 className="mt-4 font-serif text-lg text-foreground">{info.label}</h3>
                    <div className="mt-2 flex flex-col gap-0.5">
                      {info.details.map((detail) => (
                        <p key={detail} className="text-sm text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-card py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <AnimatedSection direction="left">
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">{t.sendMessage}</span>
              <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">{t.bookConsultation}</h2>
              <p className="mt-4 text-muted-foreground">{t.formIntro}</p>

              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="mt-8 flex flex-col items-center rounded-sm border border-accent/30 bg-background p-12 text-center">
                  <CheckCircle className="h-12 w-12 text-accent" />
                  <h3 className="mt-4 font-serif text-2xl text-foreground">{t.thankYou}</h3>
                  <p className="mt-2 text-muted-foreground">{t.thankYouBody}</p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
                    }}
                    className="mt-6 text-sm font-medium text-accent transition-colors hover:text-foreground"
                  >
                    {t.sendAnother}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-wider text-foreground">{t.fullName} <span className="text-accent">*</span></label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors duration-300 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" placeholder={t.namePlaceholder} />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-wider text-foreground">{t.email} <span className="text-accent">*</span></label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors duration-300 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" placeholder={t.emailPlaceholder} />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-xs font-medium uppercase tracking-wider text-foreground">{t.phone}</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors duration-300 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" placeholder={t.phonePlaceholder} />
                    </div>
                    <div>
                      <label htmlFor="service" className="mb-2 block text-xs font-medium uppercase tracking-wider text-foreground">{t.serviceInterest}</label>
                      <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors duration-300 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent">
                        <option value="">{t.selectService}</option>
                        {t.serviceOptions.map((option) => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-foreground">{t.message} <span className="text-accent">*</span></label>
                    <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full resize-none rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors duration-300 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" placeholder={t.messagePlaceholder} />
                  </div>

                  <button type="submit" className="group flex items-center justify-center gap-2 rounded-sm bg-primary px-8 py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground">
                    {t.submit}
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm lg:aspect-auto lg:h-[480px]">
                <Image src="/images/storefront.jpg" alt={t.storefrontAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-sm bg-background/90 backdrop-blur-sm p-4 border border-border">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <div>
                        <p className="font-serif text-sm text-foreground">{t.atelierCard}</p>
                        <p className="text-xs text-muted-foreground">324 Sam Nujoma Drive, Klein Windhoek</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-sm border border-border bg-background p-8">
                <h3 className="font-serif text-lg text-foreground">{t.connectTitle}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.connectBody}</p>
                <div className="mt-6 flex gap-4">
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 rounded-sm border border-border px-5 py-3 transition-all duration-300 hover:border-accent">
                    <Instagram className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
                    <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">Instagram</span>
                  </a>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 rounded-sm border border-border px-5 py-3 transition-all duration-300 hover:border-accent">
                    <Facebook className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
                    <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">Facebook</span>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="relative h-80 overflow-hidden lg:h-96">
        <Image src="/images/namibia-landscape.jpg" alt="Namibian landscape" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-background/40" />
        <div className="relative flex h-full items-center justify-center">
          <AnimatedSection className="text-center">
            <p className="font-serif text-3xl text-foreground md:text-4xl">
              <span className="text-balance italic">{t.quote}</span>
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">{t.quoteBy}</p>
          </AnimatedSection>
        </div>
      </section>
    </SiteLayout>
  )
}
