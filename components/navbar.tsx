"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { MobileMenu } from "./mobile-menu"

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 px-6 w-full max-w-7xl transition-all duration-700 ease-in-out ${
        isVisible ? "top-8 opacity-100" : "-top-24 opacity-0"
      }`}
    >
      <div className="bg-black/50 backdrop-blur-[120px] rounded-full px-8 py-3 flex items-center gap-8 shadow-lg border border-white/10 w-full">
        <Link href="/" className="flex items-center">
          <Image src="/webrenew-brandmark.png" alt="webrenew" width={150} height={32} className="h-8 w-auto" />
        </Link>

        <div className="hidden md:flex items-center justify-end gap-6 flex-1 pr-4">
          <Link href="/about" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300">About</Link>
          <Link href="/services" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300">Services</Link>
          <Link href="/work" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300">Work</Link>
          <Link
            href="/contact"
            className="px-[18px] py-[10px] rounded-full border border-[#5100fd] bg-[#5100fd]/50 text-white font-medium hover:scale-105 transition-transform duration-500"
          >
            Contact
          </Link>
        </div>

        <div className="flex md:hidden items-center justify-end flex-1 pr-4">
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}
