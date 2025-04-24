"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#3D52A0]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-6">Contact Us</h1>
          <p className="text-xl text-[#FFFFFF] max-w-3xl mx-auto">
            Get in touch with our team for inquiries, quotes, or to discuss your printing and packaging needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-[#ADBBDA]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-[#3D52A0] p-3 rounded-full inline-flex mb-4">
                <MapPin className="h-6 w-6 text-[#FFFFFF]" />
              </div>
              <h3 className="text-xl font-bold text-[#3D52A0] mb-3">Our Location</h3>
              <p className="text-[#3D52A0]">
              Ground Floor, Unit No. 34, A2 Shah And Nahar Industrial Estate, Sitaram Jadhav Marg Sunmill Compound, Delisle Road Sub Post Office, Lower Parel, Mumbai-400013
              </p>
            </div>
            <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-[#3D52A0] p-3 rounded-full inline-flex mb-4">
                <Phone className="h-6 w-6 text-[#FFFFFF]" />
              </div>
              <h3 className="text-xl font-bold text-[#3D52A0] mb-3">Phone Number</h3>
              <p className="text-[#3D52A0]">
                <a href="tel:+918047532643" className="hover:text-[#7091E6] transition-colors">
                +91  80475 32643
                </a>
              </p>
              <p className="text-[#3D52A0]">
                <a href="tel:+918879141513" className="hover:text-[#7091E6] transition-colors">
                  +91 88791 41513
                </a>
              </p>
            </div>
            <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-[#3D52A0] p-3 rounded-full inline-flex mb-4">
                <Mail className="h-6 w-6 text-[#FFFFFF]" />
              </div>
              <h3 className="text-xl font-bold text-[#3D52A0] mb-3">Email Address</h3>
              <p className="text-[#3D52A0]">
                <a href="mailto:info@printqc.com" className="hover:text-[#7091E6] transition-colors">
                  info@printqc.com
                </a>
              </p>
              <p className="text-[#3D52A0]">
                <a href="mailto:sales@printqc.com" className="hover:text-[#7091E6] transition-colors">
                  sales@printqc.com
                </a>
              </p>
            </div>
            <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-[#3D52A0] p-3 rounded-full inline-flex mb-4">
                <Clock className="h-6 w-6 text-[#FFFFFF]" />
              </div>
              <h3 className="text-xl font-bold text-[#3D52A0] mb-3">Business Hours</h3>
              <p className="text-[#3D52A0]">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-[#3D52A0]">Saturday: 9:00 AM - 2:00 PM</p>
              <p className="text-[#3D52A0]">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

    {/* Map */}
<section className="py-16 bg-[#7091E6]">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-[#FFFFFF] text-center mb-8">Find Us</h2>
    <div className="h-[400px] rounded-lg overflow-hidden shadow-xl">
      <iframe
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.1035433828894!2d72.82519997519374!3d18.993081955330735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce8b4c84a8eb%3A0xb69843a27dd2b3b7!2sA2%2C%20Shah%20And%20Nahar%20Industrial%20Estate!5e0!3m2!1sen!2sin!4v1713614000000!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>


    </main>
  )
}

