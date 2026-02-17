"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

export type Language = "en" | "de" | "af"

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
}

const STORAGE_KEY = "gold-ideas-language"

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const htmlLang: Record<Language, string> = {
  en: "en",
  de: "de",
  af: "af",
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === "en" || stored === "de" || stored === "af") {
      setLanguage(stored)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = htmlLang[language]
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used inside a LanguageProvider")
  }
  return context
}
