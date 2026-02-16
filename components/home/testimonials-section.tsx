"use client"

import { useState, useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Ewald created the most extraordinary engagement ring I have ever seen. The way he incorporated Namibian tourmaline into a modern design was breathtaking. My fiance cried when she saw it.",
    author: "Stefan M.",
    location: "Windhoek",
    occasion: "Engagement Ring",
  },
  {
    quote:
      "I wanted something that told our story as a Namibian couple. Ewald listened, understood, and created wedding bands that are truly works of art. The giraffe hair inlay is a detail we will treasure forever.",
    author: "Anneke & Thomas",
    location: "Swakopmund",
    occasion: "Wedding Bands",
  },
  {
    quote:
      "Having visited jewelers across Europe and Africa, I can say with confidence that Gold Ideas is world-class. The craftsmanship, the attention to detail, and the personal service are unmatched.",
    author: "Dr. Helena V.",
    location: "Cape Town",
    occasion: "Custom Necklace",
  },
  {
    quote:
      "The pendant Ewald designed for my 25th anniversary captures the Namibian sunset in gemstone. It is not just jewelry, it is a piece of our homeland that I carry with me wherever I go.",
    author: "Margrit K.",
    location: "Klein Windhoek",
    occasion: "Anniversary Pendant",
  },
]

export function TestimonialsSection() {
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
    return () => {
      emblaApi.off("select", onSelect)
    }
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
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
            Testimonials
          </span>
          <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
            <span className="text-balance">Words from Our Clients</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, i) => (
                <div
                  key={i}
                  className="min-w-0 flex-shrink-0 flex-grow-0 basis-full px-4 md:basis-4/5 lg:basis-3/5"
                >
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
            <button
              onClick={scrollPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === selectedIndex
                      ? "w-8 bg-accent"
                      : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={scrollNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
