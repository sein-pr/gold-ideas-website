"use client"

import { useState } from "react"
import Image from "next/image"
import { SiteLayout } from "@/components/site-layout"
import { AnimatedSection } from "@/components/animated-section"
import { motion } from "framer-motion"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Instagram,
  Facebook,
} from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Us",
    details: ["324 Sam Nujoma Drive", "Klein Windhoek, Namibia"],
  },
  {
    icon: Phone,
    label: "Call Us",
    details: ["+264 61 23 5189"],
  },
  {
    icon: Mail,
    label: "Email Us",
    details: ["info@gold-ideas.com"],
  },
  {
    icon: Clock,
    label: "Opening Hours",
    details: ["Mon - Fri: 09:00 - 17:00", "Sat: 09:00 - 13:00", "Sun: Closed"],
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <SiteLayout>
      {/* Page Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-card" />
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(circle_at_50%_30%,hsl(var(--accent))_0%,transparent_50%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              Get in Touch
            </span>
            <h1 className="mt-4 font-serif text-5xl text-foreground md:text-6xl lg:text-7xl">
              <span className="text-balance">Contact Us</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Begin your bespoke journey. Whether you have a clear vision or need guidance,
              we would love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, i) => (
              <AnimatedSection key={info.label} delay={i * 0.1}>
                <div className="group flex flex-col items-center rounded-sm border border-border bg-card p-8 text-center transition-all duration-500 hover:border-accent/30 hover:shadow-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition-all duration-500 group-hover:bg-accent">
                    <info.icon className="h-6 w-6 text-accent transition-colors duration-500 group-hover:text-accent-foreground" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg text-foreground">{info.label}</h3>
                  <div className="mt-2 flex flex-col gap-0.5">
                    {info.details.map((detail) => (
                      <p key={detail} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map */}
      <section className="bg-card py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Form */}
            <AnimatedSection direction="left">
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
                Send a Message
              </span>
              <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
                Book a Consultation
              </h2>
              <p className="mt-4 text-muted-foreground">
                Fill in the form below and we will get back to you within 24 hours to
                arrange your personal consultation.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mt-8 flex flex-col items-center rounded-sm border border-accent/30 bg-background p-12 text-center"
                >
                  <CheckCircle className="h-12 w-12 text-accent" />
                  <h3 className="mt-4 font-serif text-2xl text-foreground">Thank You</h3>
                  <p className="mt-2 text-muted-foreground">
                    Your message has been received. We will be in touch shortly to arrange
                    your consultation.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
                    }}
                    className="mt-6 text-sm font-medium text-accent transition-colors hover:text-foreground"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs font-medium uppercase tracking-wider text-foreground"
                      >
                        Full Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors duration-300 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-medium uppercase tracking-wider text-foreground"
                      >
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors duration-300 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-xs font-medium uppercase tracking-wider text-foreground"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors duration-300 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                        placeholder="+264 ..."
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="mb-2 block text-xs font-medium uppercase tracking-wider text-foreground"
                      >
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors duration-300 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      >
                        <option value="">Select a service</option>
                        <option value="bespoke">Bespoke Design</option>
                        <option value="engagement">Wedding & Engagement</option>
                        <option value="repair">Jewelry Repair</option>
                        <option value="restoration">Restoration & Redesign</option>
                        <option value="consultation">General Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-medium uppercase tracking-wider text-foreground"
                    >
                      Your Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full resize-none rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors duration-300 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="Tell us about your vision, the occasion, or any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex items-center justify-center gap-2 rounded-sm bg-primary px-8 py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
                  >
                    Send Message
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </AnimatedSection>

            {/* Map & Social */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm lg:aspect-auto lg:h-[480px]">
                <Image
                  src="/images/storefront.jpg"
                  alt="Gold Ideas storefront on Sam Nujoma Drive"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-sm bg-background/90 backdrop-blur-sm p-4 border border-border">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <div>
                        <p className="font-serif text-sm text-foreground">Gold Ideas Atelier</p>
                        <p className="text-xs text-muted-foreground">
                          324 Sam Nujoma Drive, Klein Windhoek
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-sm border border-border bg-background p-8">
                <h3 className="font-serif text-lg text-foreground">Connect With Us</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Follow our journey and see our latest creations on social media.
                </p>
                <div className="mt-6 flex gap-4">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-sm border border-border px-5 py-3 transition-all duration-300 hover:border-accent"
                  >
                    <Instagram className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
                    <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                      Instagram
                    </span>
                  </a>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-sm border border-border px-5 py-3 transition-all duration-300 hover:border-accent"
                  >
                    <Facebook className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
                    <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                      Facebook
                    </span>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Namibia Image Banner */}
      <section className="relative h-80 overflow-hidden lg:h-96">
        <Image
          src="/images/namibia-landscape.jpg"
          alt="Namibian desert landscape"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/40" />
        <div className="relative flex h-full items-center justify-center">
          <AnimatedSection className="text-center">
            <p className="font-serif text-3xl text-foreground md:text-4xl">
              <span className="text-balance italic">{"\"Emotion in Gold\""}</span>
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Gold Ideas, Windhoek
            </p>
          </AnimatedSection>
        </div>
      </section>
    </SiteLayout>
  )
}
