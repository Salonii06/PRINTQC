import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react"
import PQCLOGO from "@/public/QClogo.jpg"

export default function Footer() {
  return (
    <footer className="bg-[#3D52A0] text-[#FFFFFF]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="relative h-12 w-16 r-3">
                <Image src={PQCLOGO} alt="Logo" fill className="object-contain" />
              </div>
              <h2 className="text-xl font-bold text-[#FFFFFF]">PRINT QC</h2>
            </div>
            <p className="mb-4">
              Quality Printing Solutions since 2015. Leading manufacturer of printed boxes, packaging boxes, and gift
              boxes.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/15awvuQ57E/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="text-[#FFFFFF] hover:text-[#7091E6] transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="text-[#FFFFFF] hover:text-[#7091E6] transition-colors" />
              </a>
              <a href="https://www.linkedin.com/company/107181153/admin/dashboard/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="text-[#FFFFFF] hover:text-[#7091E6] transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#7091E6] transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-[#7091E6] transition-colors">Products</Link></li>
              <li><Link href="/services" className="hover:text-[#7091E6] transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-[#7091E6] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#7091E6] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-lg font-bold mb-4">Policies</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/policy" className="hover:text-[#7091E6] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refundpolicy" className="hover:text-[#7091E6] transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/termandcondition" className="hover:text-[#7091E6] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#7091E6] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-[#7091E6]" />
                <span>
                Ground Floor, Unit No. 34, A2 Shah And Nahar Industrial Estate, Sitaram Jadhav Marg Sunmill Compound, Delisle Road Sub Post Office, Lower Parel, Mumbai-400013
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 shrink-0 text-[#7091E6]" />
                <a href="tel:+918879141513" className="hover:text-[#7091E6] transition-colors">
                  +91  88791 41513
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 shrink-0 text-[#7091E6]" />
                <a href="mailto:info@printqc.com" className="hover:text-[#7091E6] transition-colors">
                  info@printqc.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#7091E6] mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Print QC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
