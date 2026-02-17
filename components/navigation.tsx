"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon, Languages, Check } from "lucide-react"
import { useLanguage, type Language } from "./language-provider"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navLabels = {
  en: {
    home: "Home",
    about: "About",
    collections: "Collections",
    services: "Services",
    contact: "Contact",
    bookConsultation: "Book Consultation",
    toggleDarkMode: "Toggle dark mode",
    toggleMenu: "Toggle menu",
    language: "Language",
  },
  de: {
    home: "Startseite",
    about: "Ueber uns",
    collections: "Kollektionen",
    services: "Leistungen",
    contact: "Kontakt",
    bookConsultation: "Beratung buchen",
    toggleDarkMode: "Dunklen Modus umschalten",
    toggleMenu: "Menue umschalten",
    language: "Sprache",
  },
  af: {
    home: "Tuis",
    about: "Oor Ons",
    collections: "Versamelings",
    services: "Dienste",
    contact: "Kontak",
    bookConsultation: "Boek Konsultasie",
    toggleDarkMode: "Wissel donker tema",
    toggleMenu: "Wissel kieslys",
    language: "Taal",
  },
} as const

const navLinksByLanguage = {
  en: [
    { href: "/", label: navLabels.en.home },
    { href: "/about", label: navLabels.en.about },
    { href: "/collections", label: navLabels.en.collections },
    { href: "/services", label: navLabels.en.services },
    { href: "/contact", label: navLabels.en.contact },
  ],
  de: [
    { href: "/", label: navLabels.de.home },
    { href: "/about", label: navLabels.de.about },
    { href: "/collections", label: navLabels.de.collections },
    { href: "/services", label: navLabels.de.services },
    { href: "/contact", label: navLabels.de.contact },
  ],
  af: [
    { href: "/", label: navLabels.af.home },
    { href: "/about", label: navLabels.af.about },
    { href: "/collections", label: navLabels.af.collections },
    { href: "/services", label: navLabels.af.services },
    { href: "/contact", label: navLabels.af.contact },
  ],
}

const languageOptions: Array<{ value: Language; label: string }> = [
  { value: "en", label: "English" },
  { value: "de", label: "Deutsch" },
  { value: "af", label: "Afrikaans" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const labels = navLabels[language]
  const navLinks = navLinksByLanguage[language]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.png"
              alt="Gold Ideas Logo"
              width={180}
              height={60}
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105 lg:h-12"
              priority
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-accent"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-all duration-300 hover:bg-secondary hover:scale-105"
                aria-label={labels.toggleDarkMode}
              >
                <AnimatePresence mode="wait">
                  {theme === "dark" ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="h-4 w-4 text-accent" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="h-4 w-4 text-primary" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            )}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-all duration-300 hover:bg-secondary hover:scale-105"
                  aria-label={labels.language}
                >
                  <Languages className="h-4 w-4 text-primary" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44">
                {languageOptions.map((option) => (
                  <DropdownMenuItem
                    key={option.value}
                    onClick={() => setLanguage(option.value)}
                    className="flex items-center justify-between"
                  >
                    {option.label}
                    {language === option.value ? <Check className="h-4 w-4 text-accent" /> : null}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/contact"
              className="hidden rounded-sm bg-primary px-5 py-2.5 text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:scale-105 lg:block"
            >
              {labels.bookConsultation}
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-all duration-300 hover:bg-secondary lg:hidden"
              aria-label={labels.toggleMenu}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg lg:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 text-center font-serif text-3xl transition-colors duration-300 ${
                      pathname === link.href
                        ? "text-accent"
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
                className="mt-6"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="rounded-sm bg-primary px-8 py-3 text-sm font-medium tracking-widest uppercase text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
                >
                  {labels.bookConsultation}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
