"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const footerLinks = {
  Services: [
    { label: "Web Development", href: "/services" },
    { label: "Mobile Apps", href: "/services" },
    { label: "AI & Automation", href: "/services" },
    { label: "Cloud & DevOps", href: "/services" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/work" },
    { label: "Careers", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "/work" },
    { label: "Documentation", href: "#" },
    { label: "Support", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="relative z-20 border-t border-zinc-800 bg-black">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Image src="/webrenew-brandmark.png" alt="webrenew" width={150} height={32} className="h-8 w-auto mb-6" />
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Building custom applications, automations, and AI-powered workflows for forward-thinking businesses.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white text-sm font-medium mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-zinc-500 text-sm hover:text-[#5100fd] transition-colors duration-300 flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-800">
          <p className="text-zinc-600 text-sm">&copy; {new Date().getFullYear()} WebRenew. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-zinc-600 text-sm hover:text-white transition-colors duration-300">Privacy</Link>
            <Link href="#" className="text-zinc-600 text-sm hover:text-white transition-colors duration-300">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
