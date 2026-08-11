"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { Send, Mail, MapPin, Phone, ArrowRight } from "lucide-react"

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("revealed")
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

function ScrollReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useScrollReveal()
  return <div ref={ref} className={`scroll-reveal ${className}`}>{children}</div>
}

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", budget: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="relative min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 container mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="max-w-4xl">
            <span className="text-[#5100fd] text-sm font-medium tracking-widest uppercase mb-6 block">Contact</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-[1] text-balance">
              Let&apos;s build something together
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl">
              Have a project in mind? We&apos;d love to hear about it. Fill out the form below or reach out directly — we respond within 24 hours.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Form & Info */}
      <section className="pb-24 container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              {submitted ? (
                <div className="relative rounded-2xl border border-zinc-800 p-3">
                  <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                  <div className="relative bg-[#0a0a0a] rounded-xl p-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                      <Send className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-light mb-4">Message Sent!</h3>
                    <p className="text-zinc-400">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative rounded-2xl border border-zinc-800 p-3">
                  <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                  <div className="relative bg-[#0a0a0a] rounded-xl p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm text-zinc-400 mb-2">Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#5100fd] transition-colors duration-300"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-zinc-400 mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#5100fd] transition-colors duration-300"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm text-zinc-400 mb-2">Company</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#5100fd] transition-colors duration-300"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-zinc-400 mb-2">Budget Range</label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#5100fd] transition-colors duration-300"
                        >
                          <option value="">Select a range</option>
                          <option value="5k-15k">$5,000 - $15,000</option>
                          <option value="15k-50k">$15,000 - $50,000</option>
                          <option value="50k-100k">$50,000 - $100,000</option>
                          <option value="100k+">$100,000+</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm text-zinc-400 mb-2">Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#5100fd] transition-colors duration-300 resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <Button type="submit" className="bg-[#5100fd] hover:bg-[#6610ff] text-white px-8 py-4 rounded-full transition-all duration-[650ms] hover:scale-[1.02] group">
                      Send Message
                      <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </form>
              )}
            </ScrollReveal>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <div className="space-y-8">
                <div className="relative rounded-2xl border border-zinc-800 p-3 hover:border-[#5100fd]/50 transition-all duration-500 group">
                  <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                  <div className="relative bg-[#0a0a0a] rounded-xl p-8">
                    <Mail className="w-8 h-8 text-[#5100fd] mb-4" />
                    <h3 className="text-lg font-light mb-2 group-hover:text-[#5100fd] transition-colors duration-500">Email Us</h3>
                    <p className="text-zinc-400">hello@webrenew.dev</p>
                  </div>
                </div>

                <div className="relative rounded-2xl border border-zinc-800 p-3 hover:border-[#5100fd]/50 transition-all duration-500 group">
                  <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                  <div className="relative bg-[#0a0a0a] rounded-xl p-8">
                    <Phone className="w-8 h-8 text-[#5100fd] mb-4" />
                    <h3 className="text-lg font-light mb-2 group-hover:text-[#5100fd] transition-colors duration-500">Call Us</h3>
                    <p className="text-zinc-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="relative rounded-2xl border border-zinc-800 p-3 hover:border-[#5100fd]/50 transition-all duration-500 group">
                  <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                  <div className="relative bg-[#0a0a0a] rounded-xl p-8">
                    <MapPin className="w-8 h-8 text-[#5100fd] mb-4" />
                    <h3 className="text-lg font-light mb-2 group-hover:text-[#5100fd] transition-colors duration-500">Visit Us</h3>
                    <p className="text-zinc-400">123 Innovation Street<br />San Francisco, CA 94102</p>
                  </div>
                </div>

                {/* FAQ Quick Links */}
                <div className="pt-8 border-t border-zinc-800">
                  <h4 className="text-sm text-zinc-500 mb-4">Common Questions</h4>
                  <div className="space-y-3">
                    {["What's your typical project timeline?", "Do you work with startups?", "What's your pricing model?"].map((q, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-zinc-400 hover:text-[#5100fd] transition-colors duration-300 cursor-pointer group">
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                        {q}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
