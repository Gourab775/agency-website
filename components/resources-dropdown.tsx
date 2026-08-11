"use client"

import { ChevronDown } from "lucide-react"

export function ResourcesDropdown() {
  return (
    <button className="px-4 py-2 text-white hover:text-zinc-300 transition-colors flex items-center gap-2">
      Resources
      <ChevronDown className="w-4 h-4" />
    </button>
  )
}
