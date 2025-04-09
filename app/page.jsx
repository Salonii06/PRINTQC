import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Package, Printer, Gift, Phone, CheckCircle, Factory, Truck, Award } from "lucide-react"
import DryFruitPackaging from "@/public/DRYFRUITBOX.jpeg"
import PinkCorrugatedGiftBox from "@/public/pinkbox.jpeg"
import CorporateGiftBox from "@/public/cardboardbox.jpeg"
import MMNSHPrintedRigid from "@/public/mmnsh.jpeg"
import PQCMACHINE from "@/public/pqcmachine.jpeg"
import PQCMACHINE2 from "@/public/pqcmachine2.jpg"
import FACILITY1 from "@/public/facility1.jpeg"

import FACILITY2 from "@/public/facility2.jpeg"

import FACILITY3 from "@/public/facility3.jpeg"
import QA  from "@/public/QA.jpeg"





export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        {/* Background Video */}
        <video className="absolute inset-0 w-full h-full object-cover opacity-50" autoPlay loop muted playsInline>
          <source src="/QC.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content */}
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif text-[#1F2937] mb-6">Where creativity meets quality in every box we print.</h1>
            <p className="text-xl md:text-2xl text-[#1F2937] mb-8">
              Leading manufacturer of printed boxes, packaging boxes, and gift boxes in Maharashtra
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="bg-[#3D52A0] hover:bg-[#7091E6] text-[#FFFFFF] px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-colors"
              >
                Explore Products <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="bg-[#8697C4] hover:bg-[#ADBBDA] text-[#3D52A0] px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-colors"
              >
                Contact Us <Phone size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#ADBBDA]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D52A0] text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FFFFFF] p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-[#7091E6] p-4 rounded-full mb-6">
                <Package size={32} className="text-[#FFFFFF]" />
              </div>
              <h3 className="text-xl font-bold text-[#3D52A0] mb-4">Packaging Solutions</h3>
              <p className="text-[#3D52A0]">
                Custom packaging solutions designed to protect your products and enhance your brand identity.
              </p>
            </div>
            <div className="bg-[#FFFFFF] p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-[#7091E6] p-4 rounded-full mb-6">
                <Printer size={32} className="text-[#FFFFFF]" />
              </div>
              <h3 className="text-xl font-bold text-[#3D52A0] mb-4">Custom Printing</h3>
              <p className="text-[#3D52A0]">
                High-quality printing services with attention to detail for vibrant and durable results.
              </p>
            </div>
            <div className="bg-[#FFFFFF] p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-[#7091E6] p-4 rounded-full mb-6">
                <Gift size={32} className="text-[#FFFFFF]" />
              </div>
              <h3 className="text-xl font-bold text-[#3D52A0] mb-4">Gift Packaging</h3>
              <p className="text-[#3D52A0]">
                Elegant and attractive gift boxes that make your presents stand out and create memorable experiences.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="bg-[#3D52A0] hover:bg-[#7091E6] text-[#FFFFFF] px-6 py-3 rounded-md font-medium inline-flex items-center gap-2 transition-colors"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-[#8697C4]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-[#FFFFFF] rounded-lg overflow-hidden shadow-md">
                <div className="h-64 relative">
                  <Image src={product.image || "/placeholder.svg"} 
                  alt={product.name}
                   fill
                    className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#3D52A0] mb-2">{product.name}</h3>
                  <p className="text-[#3D52A0] text-sm mb-4">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/products"
              className="bg-[#3D52A0] hover:bg-[#7091E6] text-[#FFFFFF] px-6 py-3 rounded-md font-medium inline-flex items-center gap-2 transition-colors"
            >
              View All Products
            </a>
          </div>
        </div>
      </section>

      {/* Manufacturing Process Section - NEW SECTION */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D52A0] text-center mb-12">Our Manufacturing Process</h2>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="order-2 md:order-1">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#7091E6] p-3 rounded-full flex-shrink-0 mt-1">
                    <CheckCircle size={24} className="text-[#FFFFFF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#3D52A0] mb-2">Design & Prototyping</h3>
                    <p className="text-[#3D52A0]">
                      Our design team works closely with clients to create custom packaging solutions that meet their
                      specific requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#7091E6] p-3 rounded-full flex-shrink-0 mt-1">
                    <Factory size={24} className="text-[#FFFFFF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#3D52A0] mb-2">Production</h3>
                    <p className="text-[#3D52A0]">
                      Using state-of-the-art machinery and premium materials, we manufacture packaging that combines
                      durability with aesthetic appeal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#7091E6] p-3 rounded-full flex-shrink-0 mt-1">
                    <Printer size={24} className="text-[#FFFFFF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#3D52A0] mb-2">Printing & Finishing</h3>
                    <p className="text-[#3D52A0]">
                      Our advanced printing technology ensures vibrant colors and precise details, while our finishing
                      processes add that perfect final touch.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#7091E6] p-3 rounded-full flex-shrink-0 mt-1">
                    <Truck size={24} className="text-[#FFFFFF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#3D52A0] mb-2">Delivery</h3>
                    <p className="text-[#3D52A0]">
                      We ensure timely delivery of your packaging solutions, maintaining quality and integrity
                      throughout the shipping process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={PQCMACHINE2}
                alt="Manufacturing Process"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Facility Gallery */}
          <h3 className="text-2xl md:text-3xl font-bold text-[#3D52A0] text-center mb-8">Our Facility</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src={FACILITY1}
                alt="Printing Machinery"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src={FACILITY2}
                alt="Packaging Production Line"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src={FACILITY3}
                alt="Quality Control"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

         {/* Quality Assurance & Commitment */}
<div className="mt-16 bg-[#ADBBDA] p-8 rounded-lg shadow-lg">
  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
    <div className="md:w-2/3">
      <h3 className="text-2xl font-bold text-[#3D52A0] mb-4">Our Quality Promise</h3>
      <p className="text-[#3D52A0] mb-4">
        At Print QC, we take quality seriously. Our in-house quality control team ensures every product meets 
        the highest industry standards before reaching our customers.
      </p>
      <ul className="list-disc pl-5 text-[#3D52A0]">
        <li>Strict multi-stage quality checks</li>
        <li>Use of premium eco-friendly materials</li>
        <li>Customer satisfaction guarantee</li>
      </ul>
    </div>
    <div className="relative w-full md:w-1/3 h-48 rounded-lg overflow-hidden shadow-md">
      <Image
        src={QA}// Replace with an actual relevant image
        alt="Quality Check Process"
        fill
        className="object-cover"
      />
    </div>
  </div>
</div>

        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3D52A0] mb-6">About Print QC</h2>
              <p className="text-[#3D52A0] mb-4">
                Established in 2015, Print QC has grown to become a leading manufacturer of printed boxes, packaging
                boxes, and gift boxes in Maharashtra.
              </p>
              <p className="text-[#3D52A0] mb-6">
                We combine quality materials, innovative designs, and precision printing to deliver packaging solutions
                that exceed our customers' expectations.
              </p>
              <Link
                href="/about"
                className="bg-[#3D52A0] hover:bg-[#7091E6] text-[#FFFFFF] px-6 py-3 rounded-md font-medium inline-flex items-center gap-2 transition-colors"
              >
                Learn More About Us <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src={PQCMACHINE || "/placeholder.svg"} alt="Print QC Facility" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#3D52A0]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-6">Ready to Elevate Your Packaging?</h2>
          <p className="text-[#FFFFFF] max-w-2xl mx-auto mb-8">
            Contact us today to discuss your custom packaging needs. Our team of experts is ready to help you create the
            perfect packaging solution for your products.
          </p>
          <Link
            href="/contact"
            className="bg-[#7091E6] hover:bg-[#8697C4] text-[#FFFFFF] px-8 py-4 rounded-md font-medium inline-flex items-center gap-2 transition-colors text-lg"
          >
            Get in Touch <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  )
}

const featuredProducts = [
  {
    name: "Dry Fruit Packaging Magnetic Box",
    description: "Premium magnetic closure box perfect for dry fruits and gourmet products.",
    slug: "dry-fruit-packaging-magnetic-box",
    image: DryFruitPackaging, // Imported Image
  },
  {
    name: "Pink Corrugated Gift Box",
    description: "Durable corrugated gift box with elegant pink finish for special occasions.",
    slug: "pink-corrugated-gift-box",
    image: PinkCorrugatedGiftBox, // Imported Image
  },
  {
    name: "Cardboard Corporate Gift Box",
    description: "Professional cardboard gift boxes ideal for corporate gifting and events.",
    slug: "cardboard-corporate-gift-box",
    image: CorporateGiftBox, // Imported Image
  },
  {
    name: "MMNSH Printed Rigid Packaging Box",
    description: "High-quality rigid packaging box with custom printing for luxury products.",
    slug: "mmnsh-printed-rigid-packaging-box",
    image: MMNSHPrintedRigid, // Imported Image
  },
]

