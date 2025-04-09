import { Open_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata = {
  title: "Print QC - Quality Printing Solutions",
  description: "Leading manufacturer of printed boxes, packaging boxes, and gift boxes in Maharashtra, India.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} font-sans bg-[#FFFFFF]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'