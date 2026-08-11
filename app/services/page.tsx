"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { useEffect, useRef } from "react"
import { ArrowRight, Code2, Bot, Workflow, Smartphone, Globe, Shield } from "lucide-react"
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

const services = [
  {
    icon: Code2,
    title: "Custom Web Development",
    desc: "From landing pages to complex SaaS platforms, we build fast, responsive, and scalable web applications using modern frameworks like Next.js, React, and Vue.",
    features: ["React / Next.js", "TypeScript", "Tailwind CSS", "API Integration"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.",
    features: ["React Native", "Flutter", "iOS & Android", "App Store Deployment"],
  },
  {
    icon: Bot,
    title: "AI & Machine Learning",
    desc: "Integrate intelligent automation and AI-powered features into your products. From chatbots to predictive analytics, we make AI work for you.",
    features: ["GPT Integration", "Custom Models", "NLP", "Computer Vision"],
  },
  {
    icon: Workflow,
    title: "Business Automation",
    desc: "Streamline your workflows with custom automation solutions. Reduce manual work, eliminate errors, and save countless hours.",
    features: ["Workflow Design", "API Automation", "Data Pipelines", "Custom Integrations"],
  },
  {
    icon: Globe,
    title: "Cloud & DevOps",
    desc: "Deploy, scale, and manage your applications with confidence. We handle the infrastructure so you can focus on your product.",
    features: ["AWS / GCP / Azure", "Docker / Kubernetes", "CI/CD Pipelines", "Monitoring"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    desc: "Protect your business with robust security practices. We ensure your applications meet industry standards and compliance requirements.",
    features: ["Security Audits", "GDPR Compliance", "Penetration Testing", "Data Encryption"],
  },
]

const process = [
  { step: "01", title: "Discovery", desc: "We dive deep into understanding your business, goals, and challenges to create a roadmap for success." },
  { step: "02", title: "Strategy", desc: "Our team designs a comprehensive technical strategy aligned with your business objectives and timeline." },
  { step: "03", title: "Development", desc: "Agile development with regular check-ins, demos, and iterations to ensure we're always on the right track." },
  { step: "04", title: "Launch & Support", desc: "Seamless deployment followed by ongoing support, monitoring, and optimization to keep everything running smoothly." },
]

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 container mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="max-w-4xl">
            <span className="text-[#5100fd] text-sm font-medium tracking-widest uppercase mb-6 block">Services</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-[1] text-balance">
              Solutions built for your success
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl">
              We offer end-to-end digital solutions, from concept to deployment. Every service is tailored to your unique needs and goals.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Services Grid */}
      <section className="py-24 border-t border-zinc-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={i}>
                <div className="relative rounded-2xl border border-zinc-800 p-3 hover:border-[#5100fd]/50 transition-all duration-500 group h-full">
                  <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                  <div className="relative bg-[#0a0a0a] rounded-xl p-8 h-full flex flex-col">
                    <service.icon className="w-10 h-10 text-[#5100fd] mb-6 group-hover:scale-110 transition-transform duration-500" />
                    <h3 className="text-xl font-light mb-4 group-hover:text-[#5100fd] transition-colors duration-500">{service.title}</h3>
                    <p className="text-zinc-400 leading-relaxed mb-6 flex-1">{service.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((f, j) => (
                        <span key={j} className="text-xs px-3 py-1 rounded-full border border-zinc-700 text-zinc-400">{f}</span>
                      ))}
                    </div>
                    <Link href="/contact" className="inline-flex items-center text-white hover:text-zinc-300 transition-colors duration-300 group/link">
                      <span className="underline">Get Started</span>
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 border-t border-zinc-800">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-light mb-16 text-center">Our Process</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <ScrollReveal key={i}>
                <div className="group cursor-default relative">
                  <div className="text-6xl font-light text-zinc-800 group-hover:text-[#5100fd]/30 transition-colors duration-500 mb-4">{p.step}</div>
                  <h3 className="text-xl font-light mb-3 group-hover:text-[#5100fd] transition-colors duration-500">{p.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{p.desc}</p>
                  {i < 3 && <div className="hidden lg:block absolute top-8 right-0 w-16 h-px bg-zinc-800" />}
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
            <h2 className="text-4xl md:text-6xl font-light mb-8">Ready to start your project?</h2>
            <p className="text-lg text-zinc-400 mb-12">Let&apos;s turn your ideas into reality.</p>
            <Link href="/contact" className="inline-flex items-center bg-[#5100fd] hover:bg-[#6610ff] text-white px-10 py-5 text-lg rounded-full transition-all duration-[650ms] hover:scale-[1.02] group">
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-[650ms] group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
