"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, ExternalLink } from "lucide-react"
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

const projects = [
  {
    title: "FinFlow Dashboard",
    category: "Web Application",
    description: "A real-time financial analytics dashboard for a fintech startup. Built with Next.js, D3.js, and WebSocket integration.",
    tags: ["Next.js", "TypeScript", "D3.js", "WebSocket"],
    year: "2024",
  },
  {
    title: "MediConnect Platform",
    category: "Healthcare SaaS",
    description: "Telemedicine platform connecting patients with doctors. Features video consultations, appointment scheduling, and secure messaging.",
    tags: ["React", "Node.js", "WebRTC", "PostgreSQL"],
    year: "2024",
  },
  {
    title: "ShopVelocity",
    category: "E-Commerce",
    description: "High-performance e-commerce platform handling 10k+ concurrent users with AI-powered product recommendations.",
    tags: ["Next.js", "Stripe", "Redis", "AI/ML"],
    year: "2023",
  },
  {
    title: "AutoPilot AI",
    category: "AI Automation",
    description: "Intelligent workflow automation tool that reduced manual data entry by 85% for a logistics company.",
    tags: ["Python", "TensorFlow", "FastAPI", "React"],
    year: "2023",
  },
  {
    title: "EduSphere",
    category: "EdTech",
    description: "Interactive learning management system with live classes, progress tracking, and gamification features.",
    tags: ["Vue.js", "Firebase", "WebRTC", "Stripe"],
    year: "2023",
  },
  {
    title: "GreenEnergy Hub",
    category: "Sustainability Tech",
    description: "IoT-powered energy monitoring dashboard for smart buildings. Real-time data visualization and automated reporting.",
    tags: ["React", "IoT", "Go", "TimescaleDB"],
    year: "2022",
  },
]

const categories = ["All", "Web Application", "Healthcare SaaS", "E-Commerce", "AI Automation", "EdTech", "Sustainability Tech"]

export default function WorkPage() {
  const [filter, setFilter] = useState("All")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter)

  return (
    <main className="relative min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 container mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="max-w-4xl">
            <span className="text-[#5100fd] text-sm font-medium tracking-widest uppercase mb-6 block">Our Work</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-[1] text-balance">
              Projects that speak for themselves
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl">
              A showcase of our finest work. Each project represents a unique challenge solved with innovation and expertise.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Filters */}
      <section className="pb-12 container mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                  filter === cat
                    ? "bg-[#5100fd] text-white"
                    : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, i) => (
            <ScrollReveal key={project.title}>
              <div
                className="group relative rounded-2xl border border-zinc-800 p-3 hover:border-[#5100fd]/50 transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative bg-[#0a0a0a] rounded-xl overflow-hidden">
                  {/* Project Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-zinc-900 to-zinc-800 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl font-light text-zinc-700 group-hover:text-[#5100fd]/50 transition-colors duration-500">{project.title.charAt(0)}</div>
                    </div>
                    <div className={`absolute inset-0 bg-[#5100fd]/10 transition-opacity duration-500 ${hoveredIndex === i ? "opacity-100" : "opacity-0"}`} />
                    <div className={`absolute top-4 right-4 transition-all duration-500 ${hoveredIndex === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                      <div className="w-10 h-10 rounded-full bg-[#5100fd] flex items-center justify-center">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-[#5100fd] font-medium">{project.category}</span>
                      <span className="text-xs text-zinc-600">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-light mb-3 group-hover:text-[#5100fd] transition-colors duration-500">{project.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-3 py-1 rounded-full border border-zinc-700 text-zinc-400">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-zinc-800">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-light mb-8">Have a project in mind?</h2>
            <p className="text-lg text-zinc-400 mb-12">We&apos;d love to hear about it. Let&apos;s create something extraordinary together.</p>
            <Link href="/contact" className="inline-flex items-center bg-[#5100fd] hover:bg-[#6610ff] text-white px-10 py-5 text-lg rounded-full transition-all duration-[650ms] hover:scale-[1.02] group">
              Start a Conversation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-[650ms] group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
