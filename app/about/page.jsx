import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Users, Award, Clock, Target } from "lucide-react"
import about4 from "@/public/about4.jpeg"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#3D52A0] text-[#EDE8F5] py-10 md:py-14">
  <div className="container-custom text-center px-6">
    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
      About Us
    </h1>
    <div className="w-16 h-1 mx-auto bg-[#EDE8F5] rounded-full mb-6" />
    <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed opacity-90">
      Learn more about Print QC — a trusted name in premium printed boxes, packaging solutions, and custom gift boxes for businesses of all sizes.
    </p>
  </div>
</section>

{/* Company Overview */}
<section className="py-16">
  <div className="container-custom">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="relative h-80 md:h-96 transform hover:scale-95 transition duration-500 ease-in-out">
        <Image
          src={about4}
          alt="Print QC Company"
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div>
        <h2 className="section-title">Our Story</h2>
        <p className="text-gray-600 mb-6">
          Established as a Proprietor firm in the year 2015, Print QC has emerged as a leading manufacturer of a
          wide range of printed boxes, packaging boxes, gift boxes, and more. Based in Badlapur, Thane,
          Maharashtra, we have built a reputation for delivering high-quality printing solutions to businesses
          across various industries.
        </p>
        <p className="text-gray-600 mb-6">
          What started as a small printing venture has now grown into a comprehensive packaging solutions
          provider, catering to the diverse needs of our clients. Our journey has been marked by a commitment to
          quality, innovation, and customer satisfaction, which continues to drive our growth and success.
        </p>
        <p className="text-gray-600">
          Today, Print QC stands as a trusted name in the printing and packaging industry, known for its premium
          products, timely delivery, and exceptional service. We take pride in our ability to understand our
          clients' requirements and deliver solutions that exceed their expectations.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Mission, Vision, Values */}
      <section className="py-16" style={{ backgroundColor: "#b0bcdc" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-[#b0bcdc] mr-3" />
                <h3 className="text-2xl font-semibold text-[#b0bcdc]">Our Mission</h3>
              </div>
              <p className="text-gray-600">
                To provide high-quality printing and packaging solutions that help businesses enhance their brand image
                and product presentation. We strive to deliver innovative, cost-effective, and sustainable packaging
                solutions that meet the evolving needs of our clients.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-[#b0bcdc] mr-3" />
                <h3 className="text-2xl font-semibold text-[#b0bcdc]">Our Vision</h3>
              </div>
              <p className="text-gray-600">
                To be the preferred partner for printing and packaging solutions in India, recognized for our quality,
                innovation, and customer-centric approach. We aim to set industry standards through continuous
                improvement and sustainable practices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-[#b0bcdc] mr-3" />
                <h3 className="text-2xl font-semibold text-[#b0bcdc]">Our Values</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#b0bcdc] mr-2 shrink-0 mt-0.5" />
                  <span>Quality Excellence</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#b0bcdc] mr-2 shrink-0 mt-0.5" />
                  <span>Customer Satisfaction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#b0bcdc] mr-2 shrink-0 mt-0.5" />
                  <span>Innovation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#b0bcdc] mr-2 shrink-0 mt-0.5" />
                  <span>Integrity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#b0bcdc] mr-2 shrink-0 mt-0.5" />
                  <span>Sustainability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      

      {/* ...rest of the code remains unchanged... */}
    </div>
  )
}