"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-white hover:text-zinc-300 transition-colors"
        aria-label="Menu"
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {open && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-8 right-8 p-2 text-white"
          >
            <X className="w-6 h-6" />
          </button>
          <Link href="/" onClick={() => setOpen(false)} className="text-3xl font-light text-white hover:text-[#5100fd] transition-colors">Home</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="text-3xl font-light text-white hover:text-[#5100fd] transition-colors">About</Link>
          <Link href="/services" onClick={() => setOpen(false)} className="text-3xl font-light text-white hover:text-[#5100fd] transition-colors">Services</Link>
          <Link href="/work" onClick={() => setOpen(false)} className="text-3xl font-light text-white hover:text-[#5100fd] transition-colors">Work</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="text-3xl font-light text-white hover:text-[#5100fd] transition-colors">Contact</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="mt-4 px-8 py-3 rounded-full border border-[#5100fd] bg-[#5100fd]/50 text-white font-medium">
            Get In Touch
          </Link>
        </div>
      )}
    </>
  )
}
