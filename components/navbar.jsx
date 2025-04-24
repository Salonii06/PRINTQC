"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import LOGO from "@/public/QClogo.jpg"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-[#3d52a0] sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 md:px-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Company Name */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-12 mr-1">
              <Image src={LOGO} alt="Print QC Logo" fill className="object-contain" />
            </div>
            <span className="text-[#FFFFFF] text-2xl font-extrabold">PRINT QC</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-5">
            <Link href="/" className="text-[#FFFFFF] hover:text-[#ADBBDA] font-medium transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-[#FFFFFF] hover:text-[#ADBBDA] font-medium transition-colors">
              Products
            </Link>
            <Link href="/services" className="text-[#FFFFFF] hover:text-[#ADBBDA] font-medium transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-[#FFFFFF] hover:text-[#ADBBDA] font-medium transition-colors">
              About Us
            </Link>
          
            <Link
              href="/contact"
              className="bg-[#7091E6] hover:bg-[#FFFFFF] text-[#1e6879] px-3 py-1.5 rounded-md font-medium transition-colors"
            >
              Contact Us
            </Link>
            
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#1e6879]" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#3D52A0] pb-4">
          <nav className="flex flex-col space-y-3 px-4">
            <Link href="/" className="text-[#1e6879] hover:text-[#ADBBDA] font-medium transition-colors py-1" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/products" className="text-[#1e6879] hover:text-[#ADBBDA] font-medium transition-colors py-1" onClick={() => setIsMenuOpen(false)}>
              Products
            </Link>
            <Link href="/services" className="text-[#1e6879] hover:text-[#ADBBDA] font-medium transition-colors py-1" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="/about" className="text-[#1e6879] hover:text-[#ADBBDA] font-medium transition-colors py-1" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            
            <Link href="/contact" className="bg-[#7091E6] hover:bg-[#8697C4] text-[#1e6879] px-3 py-1.5 rounded-md font-medium transition-colors inline-block" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
