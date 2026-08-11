"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { useEffect, useRef } from "react"
import Link from "next/link"

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

const team = [
  { name: "Alex Morgan", role: "Founder & CEO", image: "/placeholder-user.jpg" },
  { name: "Sarah Chen", role: "Lead Developer", image: "/placeholder-user.jpg" },
  { name: "James Wilson", role: "AI Specialist", image: "/placeholder-user.jpg" },
  { name: "Maya Patel", role: "Design Director", image: "/placeholder-user.jpg" },
]

const values = [
  { title: "Innovation First", desc: "We stay ahead of the curve, leveraging cutting-edge technologies to deliver solutions that give you a competitive edge." },
  { title: "Quality Driven", desc: "Every line of code, every design element, every workflow is crafted with meticulous attention to detail and quality." },
  { title: "Client Partnership", desc: "We don't just work for you — we work with you. Your success is our success, and we're invested in every project." },
  { title: "Rapid Delivery", desc: "Speed without compromise. We use agile methodologies to deliver fast iterations without sacrificing quality." },
]

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 container mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="max-w-4xl">
            <span className="text-[#5100fd] text-sm font-medium tracking-widest uppercase mb-6 block">About Us</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-[1] text-balance">
              We craft digital experiences that matter
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl">
              Founded in 2020, we&apos;ve been on a mission to help businesses harness the power of technology. From startups to enterprises, we build solutions that scale.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Story Section */}
      <section className="py-24 border-t border-zinc-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative rounded-2xl border border-zinc-800 p-3">
                <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative bg-[#0a0a0a] rounded-xl aspect-video flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl font-light text-[#5100fd] mb-4">5+</div>
                    <div className="text-zinc-400">Years of building digital solutions</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-light mb-6">Our Story</h2>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  What started as a small team of passionate developers has grown into a full-service digital agency. We&apos;ve partnered with companies across industries — from fintech to healthcare, e-commerce to SaaS — delivering custom solutions that drive real results.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  Our approach is simple: understand your business, identify the challenges, and build technology that solves them. No cookie-cutter solutions, no unnecessary complexity — just effective, elegant software.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 border-t border-zinc-800">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-light mb-16 text-center">Our Values</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={i}>
                <div className="relative rounded-2xl border border-zinc-800 p-3 hover:border-[#5100fd]/50 transition-all duration-500 group">
                  <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                  <div className="relative bg-[#0a0a0a] rounded-xl p-8">
                    <div className="text-[#5100fd] text-sm font-medium mb-3">0{i + 1}</div>
                    <h3 className="text-2xl font-light mb-4 group-hover:text-[#5100fd] transition-colors duration-500">{v.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 border-t border-zinc-800">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-light mb-16 text-center">Meet the Team</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <ScrollReveal key={i}>
                <div className="group cursor-default text-center">
                  <div className="relative rounded-2xl overflow-hidden mb-6 aspect-square bg-zinc-900 border border-zinc-800 group-hover:border-[#5100fd]/50 transition-all duration-500">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <h3 className="text-xl font-light group-hover:text-[#5100fd] transition-colors duration-500">{member.name}</h3>
                  <p className="text-sm text-zinc-500 mt-1">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-zinc-800">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-light mb-8">Want to work with us?</h2>
            <p className="text-lg text-zinc-400 mb-12">We&apos;re always looking for talented people and exciting projects.</p>
            <Link href="/contact" className="inline-flex items-center bg-[#5100fd] hover:bg-[#6610ff] text-white px-10 py-5 text-lg rounded-full transition-all duration-[650ms] hover:scale-[1.02]">
              Join Our Team
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
