"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { CircleArrowRight, ArrowRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Script from "next/script"
import Link from "next/link"

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed")
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

function ScrollRevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`scroll-reveal ${className}`}>
      {children}
    </div>
  )
}

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      const progress = Math.min(scrollY / viewportHeight, 1)
      setScrollProgress(progress)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouse)
    return () => window.removeEventListener("mousemove", handleMouse)
  }, [])

  const linesOpacity = 1 - scrollProgress
  const linesScale = 1 - scrollProgress * 0.3

  const scrollToCapabilities = () => {
    document.getElementById("capabilities")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="relative min-h-[200vh] bg-black text-white overflow-hidden">
      <Script
        src="https://unpkg.com/@splinetool/viewer@1.0.17/build/spline-viewer.js"
        type="module"
        strategy="afterInteractive"
      />

      <Navbar />

      {/* Cursor glow effect */}
      <div
        className="fixed w-[400px] h-[400px] rounded-full pointer-events-none z-50 transition-opacity duration-300"
        style={{
          left: mousePos.x - 200,
          top: mousePos.y - 200,
          background: "radial-gradient(circle, rgba(81,0,253,0.08) 0%, transparent 70%)",
          opacity: scrollProgress < 0.5 ? 1 : 0,
        }}
      />

      {/* Animated Lines Background */}
      <div
        className="fixed inset-0 z-0 w-screen h-screen pointer-events-none transition-all duration-100"
        style={{ opacity: linesOpacity, transform: `scale(${linesScale})` }}
      >
        <div className="bg-lines-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="2269" height="2108" viewBox="0 0 2269 2108" fill="none" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <path d="M510.086 0.543457L507.556 840.047C506.058 1337.18 318.091 1803.4 1.875 2094.29" stroke="#4C00EC" strokeWidth="2" strokeMiterlimit="10" strokeDasharray="100px 99999px" className="animate-line-race-1" />
            <path d="M929.828 0.543457L927.328 829.877C925.809 1334 737.028 1807.4 418.435 2106" stroke="#4C00EC" strokeWidth="2" strokeMiterlimit="10" strokeDasharray="100px 99999px" className="animate-line-race-2" />
            <path d="M1341.9 0.543457L1344.4 829.876C1345.92 1334 1534.7 1807.4 1853.29 2106" stroke="#4C00EC" strokeWidth="2" strokeMiterlimit="10" strokeDasharray="100px 99999px" className="animate-line-race-3" />
            <path d="M1758.96 0.543457L1761.49 840.047C1762.99 1337.18 1950.96 1803.4 2267.17 2094.29" stroke="#4C00EC" strokeWidth="2" strokeMiterlimit="10" strokeDasharray="100px 99999px" className="animate-line-race-4" />
            <path opacity="0.2" d="M929.828 0.543457L927.328 829.877C925.809 1334 737.028 1807.4 418.435 2106" stroke="white" strokeWidth="1" strokeMiterlimit="10" />
            <path opacity="0.2" d="M510.086 0.543457L507.556 840.047C506.058 1337.18 318.091 1803.4 1.875 2094.29" stroke="white" strokeWidth="1" strokeMiterlimit="10" />
            <path opacity="0.2" d="M1758.96 0.543457L1761.49 840.047C1762.99 1337.18 1950.96 1803.4 2267.17 2094.29" stroke="white" strokeWidth="1" strokeMiterlimit="10" />
            <path opacity="0.2" d="M1341.9 0.543457L1344.4 829.876C1345.92 1334 1534.7 1807.4 1853.29 2106" stroke="white" strokeWidth="1" strokeMiterlimit="10" />
          </svg>
        </div>
      </div>

      {/* 3D Spline Viewer */}
      <div
        className="fixed right-0 top-0 w-1/2 h-screen pointer-events-none z-10"
        style={{ opacity: linesOpacity, transform: `scale(${linesScale})` }}
      >
        <div className="track">
          <spline-viewer url="https://prod.spline.design/ZxKIijKh056svcM5/scene.splinecode" className="w-full h-full" style={{ position: "sticky", top: "0px", height: "100vh" }} />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-6 lg:px-12 pt-24 pb-32 min-h-screen flex flex-col justify-center">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-12 animate-fade-in">
            <div className="relative w-14 h-7 bg-gradient-to-r from-green-400 to-green-500 rounded-full">
              <div className="absolute right-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300" />
            </div>
            <span className="text-sm text-zinc-300">Currently open to take on new clients.</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8 leading-[1] animate-fade-in-up text-balance">
            Just another boring agency
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 mb-12 animate-fade-in-up animation-delay-200">
            We build custom applications, automations, and AI powered workflows.
          </p>

          <div className="animate-fade-in-up animation-delay-400">
            <Button size="lg" onClick={scrollToCapabilities} className="group bg-[#5100fd] hover:bg-[#6610ff] text-white px-8 py-6 text-base rounded-full transition-all duration-[650ms] hover:scale-[1.02]">
              Explore Capabilities
              <CircleArrowRight className="ml-2 h-5 w-5 transition-transform duration-[650ms] group-hover:rotate-90" />
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="relative z-20 py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollRevealSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "150+", label: "Projects Delivered" },
                { number: "50+", label: "Happy Clients" },
                { number: "5+", label: "Years Experience" },
                { number: "24/7", label: "Support Available" },
              ].map((stat, i) => (
                <div key={i} className="text-center group cursor-default">
                  <div className="text-4xl md:text-5xl font-light text-white mb-2 group-hover:text-[#5100fd] transition-colors duration-500">{stat.number}</div>
                  <div className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors duration-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollRevealSection>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="relative z-20 py-24">
        <div className="container p-8 md:p-12 rounded-2xl z-50 bg-[#09090b] border border-zinc-800 mx-auto px-6 lg:px-12">
          <ScrollRevealSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-balance">Capabilities</h2>
            <p className="text-lg md:text-xl text-zinc-400 mb-12">We&apos;re built to solve complex business challenges—fast.</p>
          </ScrollRevealSection>

          <Tabs defaultValue="development" className="w-full">
            <TabsList className="bg-zinc-950 border border-zinc-800 p-1 mb-8 rounded-full">
              <TabsTrigger value="development" className="text-zinc-500 data-[state=active]:bg-[#5100fd] data-[state=active]:text-white px-8 py-3 rounded-full transition-all">Development</TabsTrigger>
              <TabsTrigger value="automation" className="text-zinc-500 data-[state=active]:bg-[#5100fd] data-[state=active]:text-white px-8 py-3 rounded-full transition-all">Automation</TabsTrigger>
            </TabsList>

            <TabsContent value="development" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: "Custom Applications", desc: "We build scalable, performant web and mobile applications tailored to your specific business needs using modern frameworks and best practices." },
                  { title: "Full-Stack Solutions", desc: "From frontend interfaces to backend infrastructure, we deliver complete solutions that integrate seamlessly with your existing systems." },
                ].map((item, i) => (
                  <div key={i} className="relative rounded-2xl border border-zinc-800 p-3 hover:border-[#5100fd]/50 transition-all duration-500 group">
                    <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                    <div className="relative bg-[#0a0a0a] rounded-xl p-8">
                      <h3 className="text-2xl font-light mb-4 group-hover:text-[#5100fd] transition-colors duration-500">{item.title}</h3>
                      <p className="text-zinc-400 leading-relaxed mb-6">{item.desc}</p>
                      <Link href="/services" className="inline-flex items-center text-white hover:text-zinc-300 transition-colors duration-300 group/link">
                        <span className="underline">Learn More</span>
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="automation" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: "AI-Powered Workflows", desc: "Leverage cutting-edge AI technology to automate complex processes, reduce manual work, and unlock new capabilities for your business." },
                  { title: "Process Optimization", desc: "Streamline your operations with intelligent automation that learns and adapts to your business patterns, saving time and resources." },
                ].map((item, i) => (
                  <div key={i} className="relative rounded-2xl border border-zinc-800 p-3 hover:border-[#5100fd]/50 transition-all duration-500 group">
                    <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                    <div className="relative bg-[#0a0a0a] rounded-xl p-8">
                      <h3 className="text-2xl font-light mb-4 group-hover:text-[#5100fd] transition-colors duration-500">{item.title}</h3>
                      <p className="text-zinc-400 leading-relaxed mb-6">{item.desc}</p>
                      <Link href="/services" className="inline-flex items-center text-white hover:text-zinc-300 transition-colors duration-300 group/link">
                        <span className="underline">Learn More</span>
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="relative z-20 py-16 overflow-hidden border-t border-b border-zinc-800">
        <div className="marquee-container">
          <div className="marquee-content">
            {[...Array(2)].map((_, i) => (
              <span key={i} className="text-6xl md:text-8xl font-light text-zinc-800 whitespace-nowrap mx-8">
                Development &bull; Automation &bull; AI Workflows &bull; Full-Stack Solutions &bull; Custom Applications &bull;&nbsp;
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-20 py-32">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <ScrollRevealSection>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 text-balance">Ready to build something amazing?</h2>
            <p className="text-lg text-zinc-400 mb-12 max-w-2xl mx-auto">Let&apos;s discuss your project and see how we can help bring your vision to life.</p>
            <Link href="/contact">
              <Button size="lg" className="bg-[#5100fd] hover:bg-[#6610ff] text-white px-10 py-7 text-lg rounded-full transition-all duration-[650ms] hover:scale-[1.02] group">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-[650ms] group-hover:translate-x-1" />
              </Button>
            </Link>
          </ScrollRevealSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}
