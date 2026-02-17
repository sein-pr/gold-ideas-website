"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"

export function Footer() {
  const { language } = useLanguage()
  const t = {
    en: {
      description:
        "Master goldsmith Ewald Gann creates bespoke jewelry that captures the spirit of Namibia. Each piece is a unique work of art.",
      quickLinks: "Quick Links",
      ourStory: "Our Story",
      collections: "Collections",
      services: "Services",
      contactUs: "Contact Us",
      servicesTitle: "Services",
      serviceItems: ["Custom Design", "Jewelry Repair", "Stone Setting", "Restoration", "Consultations"],
      visitUs: "Visit Us",
      hours: ["Mon - Fri: 09:00 - 17:00", "Sat: 09:00 - 13:00", "Sun: Closed"],
      copyright: "© 2026 Gold Ideas. All rights reserved. Design & Craftsmanship by Ewald Gann.",
      privacyPolicy: "Privacy Policy",
      impressum: "Impressum",
    },
    de: {
      description:
        "Der Goldschmiedemeister Ewald Gann fertigt Schmuck nach Mass, der den Geist Namibias einfaengt. Jedes Stueck ist ein einzigartiges Kunstwerk.",
      quickLinks: "Schnellzugriffe",
      ourStory: "Unsere Geschichte",
      collections: "Kollektionen",
      services: "Leistungen",
      contactUs: "Kontakt",
      servicesTitle: "Leistungen",
      serviceItems: ["Individuelles Design", "Schmuckreparatur", "Steinfassen", "Restaurierung", "Beratung"],
      visitUs: "Besuchen Sie uns",
      hours: ["Mo - Fr: 09:00 - 17:00", "Sa: 09:00 - 13:00", "So: Geschlossen"],
      copyright: "© 2026 Gold Ideas. Alle Rechte vorbehalten. Design & Handwerk von Ewald Gann.",
      privacyPolicy: "Datenschutz",
      impressum: "Impressum",
    },
    af: {
      description:
        "Meester goudsmid Ewald Gann skep pasgemaakte juweliersware wat die gees van Namibie vasvang. Elke stuk is 'n unieke kunswerk.",
      quickLinks: "Vinnige Skakels",
      ourStory: "Ons Storie",
      collections: "Versamelings",
      services: "Dienste",
      contactUs: "Kontak Ons",
      servicesTitle: "Dienste",
      serviceItems: ["Pasgemaakte Ontwerp", "Juweel Herstel", "Steensetting", "Restourasie", "Konsultasies"],
      visitUs: "Besoek Ons",
      hours: ["Ma - Vr: 09:00 - 17:00", "Sa: 09:00 - 13:00", "So: Gesluit"],
      copyright: "© 2026 Gold Ideas. Alle regte voorbehou. Ontwerp en vakmanskap deur Ewald Gann.",
      privacyPolicy: "Privaatheidsbeleid",
      impressum: "Impressum",
    },
  }[language]

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Image
              src="/images/logo.png"
              alt="Gold Ideas Logo"
              width={160}
              height={53}
              className="mb-6 h-12 w-auto"
            />
            <p className="text-sm leading-relaxed text-muted-foreground">{t.description}</p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="mb-6 font-serif text-lg text-foreground">{t.quickLinks}</h3>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/about", label: t.ourStory },
                { href: "/collections", label: t.collections },
                { href: "/services", label: t.services },
                { href: "/contact", label: t.contactUs },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors duration-300 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-6 font-serif text-lg text-foreground">{t.servicesTitle}</h3>
            <ul className="flex flex-col gap-3">
              {t.serviceItems.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-muted-foreground transition-colors duration-300 hover:text-accent"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="mb-6 font-serif text-lg text-foreground">{t.visitUs}</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>324 Sam Nujoma Drive, Klein Windhoek, Namibia</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <span>+264 (0)61 250448</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <span>ewald@gold-ideas.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div>
                  {t.hours.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">{t.copyright}</p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted-foreground transition-colors hover:text-accent">
              {t.privacyPolicy}
            </Link>
            <Link href="#" className="text-xs text-muted-foreground transition-colors hover:text-accent">
              {t.impressum}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
