"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

// Client component for interactive FAQ items
export function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-[#ADBBDA] last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left font-medium text-[#3D52A0] hover:text-[#7091E6] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUp className="flex-shrink-0 text-[#7091E6]" />
        ) : (
          <ChevronDown className="flex-shrink-0 text-[#7091E6]" />
        )}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-4" : "max-h-0"}`}>
        <p className="text-[#3D52A0]">{answer}</p>
      </div>
    </div>
  )
}
