"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { MobileMenu } from "./mobile-menu"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6 transition-all duration-500 ease-out ${
        scrolled
          ? "top-0 py-2"
          : "top-6 py-0"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl rounded-full px-6 md:px-8 py-3 flex items-center gap-6 transition-all duration-500 ease-out ${
          scrolled
            ? "bg-white/[0.06] backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-black/40 backdrop-blur-xl border border-white/[0.06] shadow-lg"
        }`}
      >
        <Link href="/" className="flex items-center shrink-0">
          <Image src="/webrenew-brandmark.png" alt="webrenew" width={150} height={32} className="h-7 w-auto" />
        </Link>

        <div className="hidden md:flex items-center justify-end gap-6 flex-1 pr-2">
          <Link href="/about" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300">About</Link>
          <Link href="/services" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300">Services</Link>
          <Link href="/work" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300">Work</Link>
          <Link
            href="/contact"
            className="px-5 py-2 rounded-full border border-[#5100fd] bg-[#5100fd]/40 text-white text-sm font-medium hover:bg-[#5100fd]/70 hover:scale-[1.03] transition-all duration-300"
          >
            Contact
          </Link>
        </div>

        <div className="flex md:hidden items-center justify-end flex-1 pr-2">
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}
