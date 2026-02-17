"use client"

import { useState, useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function TestimonialsSection() {
  const { language } = useLanguage()
  const t = {
    en: {
      headingTop: "Testimonials",
      heading: "Words from Our Clients",
      prev: "Previous testimonial",
      next: "Next testimonial",
      goTo: "Go to testimonial",
      testimonials: [
        {
          quote: "Ewald created the most extraordinary engagement ring I have ever seen. The design was breathtaking.",
          author: "Stefan M.",
          location: "Windhoek",
          occasion: "Engagement Ring",
        },
        {
          quote: "We wanted wedding bands that tell our Namibian story. The result is true art.",
          author: "Anneke & Thomas",
          location: "Swakopmund",
          occasion: "Wedding Bands",
        },
        {
          quote: "Gold Ideas is world-class. Craftsmanship and personal service are unmatched.",
          author: "Dr. Helena V.",
          location: "Cape Town",
          occasion: "Custom Necklace",
        },
        {
          quote: "My anniversary pendant captures the Namibian sunset in gemstone. Truly meaningful.",
          author: "Margrit K.",
          location: "Klein Windhoek",
          occasion: "Anniversary Pendant",
        },
      ],
    },
    de: {
      headingTop: "Kundenstimmen",
      heading: "Worte unserer Kunden",
      prev: "Vorheriges Testimonial",
      next: "Naechstes Testimonial",
      goTo: "Gehe zu Testimonial",
      testimonials: [
        {
          quote: "Ewald hat einen aussergewoehnlichen Verlobungsring geschaffen. Das Design war atemberaubend.",
          author: "Stefan M.",
          location: "Windhoek",
          occasion: "Verlobungsring",
        },
        {
          quote: "Wir wollten Trauringe mit unserer namibischen Geschichte. Das Ergebnis ist echte Kunst.",
          author: "Anneke & Thomas",
          location: "Swakopmund",
          occasion: "Eheringe",
        },
        {
          quote: "Gold Ideas ist Weltklasse. Handwerk und persoenlicher Service sind unuebertroffen.",
          author: "Dr. Helena V.",
          location: "Kapstadt",
          occasion: "Individuelle Kette",
        },
        {
          quote: "Mein Jubilaeumsanhaenger faengt den namibischen Sonnenuntergang ein. Sehr bedeutungsvoll.",
          author: "Margrit K.",
          location: "Klein Windhoek",
          occasion: "Jubilaeumsanhaenger",
        },
      ],
    },
    af: {
      headingTop: "Getuigskrifte",
      heading: "Woorde van Ons Kliente",
      prev: "Vorige getuigskrif",
      next: "Volgende getuigskrif",
      goTo: "Gaan na getuigskrif",
      testimonials: [
        {
          quote: "Ewald het n buitengewone verloofring geskep. Die ontwerp was asemrowend.",
          author: "Stefan M.",
          location: "Windhoek",
          occasion: "Verloofring",
        },
        {
          quote: "Ons wou trouringe he wat ons Namibiese storie vertel. Die resultaat is ware kuns.",
          author: "Anneke & Thomas",
          location: "Swakopmund",
          occasion: "Trouringe",
        },
        {
          quote: "Gold Ideas is wereldklas. Vakmanskap en persoonlike diens is uitstaande.",
          author: "Dr. Helena V.",
          location: "Kaapstad",
          occasion: "Pasgemaakte Halssnoer",
        },
        {
          quote: "My herdenkingshanger vang die Namibiese sonsondergang vas. Regtig betekenisvol.",
          author: "Margrit K.",
          location: "Klein Windhoek",
          occasion: "Herdenkingshanger",
        },
      ],
    },
  }[language]

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => emblaApi.off("select", onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">{t.headingTop}</span>
          <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
            <span className="text-balance">{t.heading}</span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {t.testimonials.map((testimonial, i) => (
                <div key={i} className="min-w-0 flex-shrink-0 flex-grow-0 basis-full px-4 md:basis-4/5 lg:basis-3/5">
                  <div className="mx-auto max-w-2xl rounded-sm border border-border bg-card p-8 text-center md:p-12">
                    <Quote className="mx-auto mb-6 h-8 w-8 text-accent/40" />
                    <p className="font-serif text-lg leading-relaxed text-foreground md:text-xl">
                      {"\u201C"}{testimonial.quote}{"\u201D"}
                    </p>
                    <div className="mt-8">
                      <p className="font-medium text-foreground">{testimonial.author}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {testimonial.occasion} &middot; {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button onClick={scrollPrev} className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground" aria-label={t.prev}>
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {t.testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === selectedIndex ? "w-8 bg-accent" : "w-2 bg-border hover:bg-muted-foreground"}`}
                  aria-label={`${t.goTo} ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={scrollNext} className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground" aria-label={t.next}>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
