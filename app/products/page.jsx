"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"

import printedbox1 from "@/public/printedbox1.jpeg"
import giftbox from "@/public/gift box.jpeg"
import packagingbox from "@/public/packaging box.jpeg"
import ssd from "@/public/ssd.jpeg"
import giftware from "@/public/giftware.jpg"
import plainbox from "@/public/plainbox.jpg"
import cardboard1 from "@/public/cardboard1.jpeg"
// import mmnsh1 from "@/public/mmnsh1.jpeg";
import rigidbox from "@/public/rigidbox.jpeg"
import foodbox from "@/public/foodbox.jpeg"
import pinkbox2 from "@/public/pinkbox2.jpeg"
import dryfruit from "@/public/dryfruit.jpeg"
import box from "@/public/box.jpeg"
import blackbox from "@/public/blackbox.jpeg"
import rectangle from "@/public/rectangle.jpeg"
import gifta from "@/public/gifta.jpeg"
import giftb from "@/public/giftb.jpeg"
import giftc from "@/public/giftc.jpg"
import giftd from "@/public/giftd.jpeg"
import gifte from "@/public/gifte.jpeg"
import giftf from "@/public/giftf.jpeg"
import giftg from "@/public/giftg.jpeg"
import retail from "@/public/retail.jpeg"
import book from "@/public/book.jpeg"
import display from "@/public/display.jpeg"
import beauty from "@/public/beauty.jpeg"
import electronics from "@/public/electronics.jpeg"
import mailer from "@/public/mailer.jpg"
import custom from "@/public/custom.jpeg"
import food from "@/public/food.jpeg"
import pack1 from "@/public/pack1.jpeg"
import window from "@/public/window.jpeg"
import glow from "@/public/glow.jpeg"
import led from "@/public/led.jpeg"
import spring from "@/public/spring.jpeg"
import dark from "@/public/dark.jpeg"
import disc from "@/public/disc.jpeg"
import festive from "@/public/festive.jpeg"
import printed2 from "@/public/printed2.jpeg"
import wedding from "@/public/wedding.jpeg"
import coprate from "@/public/corporate.jpeg"
import birthday from "@/public/birthday.jpeg"
import luxary from "@/public/luxary.jpeg"
import fashion from "@/public/fashion.jpeg"
import chocolate from "@/public/chocolate.jpeg"
import keep from "@/public/keep.jpeg"
import matte from "@/public/matte.jpeg"
import custom1 from "@/public/custom1.jpeg"
import glossy from "@/public/glossy.jpeg"
import utility from "@/public/utility.jpeg"
import hamper from "@/public/hamper.jpg"
import folded from "@/public/folded.jpeg"
import unprinted from "@/public/unprinted.jpeg"
import plain1 from "@/public/plain1.jpeg"
const categories = [
  {
    name: "Printed Boxes",
    description: "Custom printed boxes to showcase your brand.",
    image: printedbox1,
    products: [
      { name: "Dry Fruit Packaging Magnetic Box", description: "Sturdy and used for shipping.", image: dryfruit },
      {
        name: "Cardboard Corporate Gift Box",
        description: " Premium, high-end packaging for luxury items.",
        image: cardboard1,
      },
      // { name: "MMNSH Printed Rigid Packaging Box", description: "Premium boxes with a magnetic flap.", image: mmnsh1 },
      { name: "Cosmetic Rigid Printed Box ", description: "Durable and stylish.", image: rigidbox },
      {
        name: "Food Packaging Printed Rigid Box",
        description: "Feature a transparent window for product visibility.",
        image: foodbox,
      },
      { name: "Pink Rigid Packaging Box", description: "Durable and stylish.", image: pinkbox2 },
      { name: "Customized Gift Packing Box", description: "Durable and stylish.", image: box },
      {
        name: "Black Color Rigid Box",
        description: "Feature a transparent window for product visibility.",
        image: blackbox,
      },
      { name: "Rectangle Printed Rigid Box", description: "Durable and stylish.", image: rectangle },
    ],
  },
  {
    name: "Gift Boxes",
    description: "Beautiful gift boxes for special occasions.",
    image: giftbox,
    products: [
      {
        name: "Rigid Gift Boxes",
        description: "Sturdy, high-end look, often used for luxury products",
        image: gifta,
      },
      {
        name: " Folding Carton Boxes",
        description: " Lightweight, foldable, often used for retail packaging.",
        image: giftb,
      },
      {
        name: " Corrugated Gift Boxes",
        description: "Durable, shock-resistant, good for shipping gifts",
        image: giftc,
      },
      {
        name: "Rigid Gift Boxes",
        description: "Sturdy, high-end look, often used for luxury products",
        image: giftd,
      },
      {
        name: " Folding Carton Boxes",
        description: " Lightweight, foldable, often used for retail packaging.",
        image: gifte,
      },
      {
        name: " Corrugated Gift Boxes",
        description: "Durable, shock-resistant, good for shipping gifts",
        image: giftf,
      },
      {
        name: " Corrugated Gift Boxes",
        description: "Durable, shock-resistant, good for shipping gifts",
        image: giftg,
      },
      { name: "Drawer (Slide) Gift Boxes", description: "Perfect for any occasion.", image: giftbox },
      // { name: " Pillow Boxes", description: "Curved pillow shape, compact and stylish", image: giftbox },
      // { name: "Tube Gift Boxes", description: "Perfect for any occasion.", image: giftbox },
    ],
  },
  {
    name: "Packaging Box",
    description: "Beautifully designed packaging that wraps your gifts in love and luxury",
    image: packagingbox,
    products: [
      { name: "Custom Printed Packaging Boxes", description: "Tailored designs with brand logos, colors, and product details for strong shelf appeal.", image: custom},
      { name: " Product Display Boxes", description: "Designed to showcase products effectively in retail environments with open-face or window panels.", image: display },
      { name: " Cosmetic & Beauty Packaging Boxes", description: "Elegant boxes crafted for skincare, makeup, and personal care items, with premium finishes.", image: beauty},
      { name: "Electronics Packaging Boxes", description: "Protective and sleek packaging for gadgets, accessories, and small tech products.", image: electronics },
      { name: " Subscription & Mailer Boxes", description: "Stylish, durable boxes for eCommerce and monthly product deliveries with custom inserts.", image: mailer },
      { name: "Food & Confectionery Boxes", description: "Safe, food-grade boxes designed for sweets, snacks, and bakery items—customizable with coatings and cutouts.", image: food },
      { name: " Retail Packaging Boxes", description: "Designed for stores and outlets to enhance shelf visibility and brand presence.", image: retail},
      { name: " Stationery & Book Packaging Boxes", description: "Custom-fit boxes for books, notebooks, and stationery with protective inserts and sleek finishes.", image: book},
    ],
  },
  {
    name: "Plastic Toy Disc Shooter",
    description: "Blast into fun with our high-flying Disc Shooter – where every shot sparks a smile!.",
    image: ssd,
    products: [
      { name: "Disc Shooter Gift Box ", description: " A plastic box with a built-in disc shooter mechanism for added fun.", image: disc },
      { name: "Spring-Loaded Surprise Box ", description: "Opens with a pop-up surprise, great for birthdays and events.", image: spring},
      { name: "LED Light Shooter Box", description: "A gift box with LED lights and a shooter feature.", image: led },
      { name: "Glow-in-the-Dark Shooter Box", description: " Perfect for nighttime fun, glows when lights are off.", image: dark },
      { name: "Cartoon-Themed Shooter Box ", description: "Designed with kids' favorite characters and themes.", image: glow },
      { name: "Window Cut-Out Boxes", description: "Cardboard boxes with a clear window—combining visibility with branding and safe enclosure.", image: window },
      { name: " Retail Display Packs", description: "Multi-unit packaging for store shelves, ideal for promotions or bundled toy shooters.", image: pack1 },
      { name: "Printed Toy Boxes", description: "Vibrant, engaging boxes with custom designs to attract attention and communicate safety and fun..", image: printed2 },
    ],
  },
  {
    name: "Giftware",
    description: "Where beauty meets purpose — giftware boxes designed to delight",
    image: giftware,
    products: [
      { name: "Corporate Gifting Boxes", description: "Sleek and professional packaging for corporate gifts, awards, and promotional items—perfect for impressing clients and partners.", image: coprate },
      { name: "Birthday Gift Boxes", description: "Colorful, joyful packaging perfect for birthdays—customizable with themes, messages, and fun finishes.", image: birthday },
      { name: " Luxury Gift Boxes", description: "Premium rigid boxes ideal for jewelry, perfumes, and high-end accessories—elevate your brand's elegance.", image: luxary },
      { name: "Wedding & Anniversary Boxes", description: "Romantic and elegant packaging designed for wedding favors, keepsakes, and anniversary gifts.", image: wedding},
      { name: " Festive & Seasonal Gift Boxes", description: "Celebrate holidays like Diwali, Christmas, Eid, or New Year with specially themed gift packaging that adds to the joy.", image: festive },
       { name: "Custom Keepsake Boxes", description: "Durable and attractive boxes for long-term storage of treasured items—ideal for branding and personal use.", image: keep },
      { name: " Chocolate & Gourmet Gift Boxes", description: "Food-safe, stylish boxes for chocolates, sweets, and gourmet snacks—ideal for festive gifting and hampers.", image:chocolate},
      { name: "Fashion & Accessory Boxes", description: "Chic packaging for scarves, belts, handbags, and other fashion accessories", image: fashion},
    ],
  },
  {
    name: "Plain Boxes",
    description: "Simplicity perfected — plain boxes that speak volumes with minimalism.",
    image: plainbox,
    products: [
      { name: "Matte Finish Boxes", description: "Smooth and subtle with a premium look—ideal for high-end gifting or minimalist branding.", image: matte},
      { name: " Glossy Finish Boxes", description: "Shiny and vibrant, these boxes give a polished appeal to simple packaging.", image: glossy },
      { name: "Unprinted Kraft Boxes", description: "Eco-friendly and rustic—perfect for natural or handmade product lines..", image: unprinted },
      { name: " Rigid Plain Boxes", description: "Durable and luxurious, ideal for electronics, jewelry, or delicate items that require protection.", image: plain1 },
      { name: "Flat-Pack Foldable Boxes", description: "Convenient for storage and shipping, these collapsible boxes are practical and stylish.", image: folded },
      { name: "Hamper-Style Boxes", description: "Spacious, sturdy plain boxes for curated gift hampers or premium bundles..", image: hamper },
      { name: "Utility & Retail Boxes", description: "Plain but functional, great for everyday retail packaging or subscription boxes.", image: utility },
      { name: "Custom Size Plain Boxes", description: "Tailored to your product dimensions—get the simplicity you want, in the exact size you need..", image: custom1 },
    ],
  },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const openGallery = (category) => {
    setSelectedCategory(category)
    // Prevent scrolling on the body when modal is open
    document.body.style.overflow = "hidden"
  }

  const closeGallery = (e) => {
    // Prevent the event from bubbling up to parent elements
    if (e) {
      e.stopPropagation()
    }
    setSelectedCategory(null)
    // Restore scrolling on the body
    document.body.style.overflow = "auto"
  }

  // Prevent closing when clicking inside the modal content
  const handleModalClick = (e) => {
    e.stopPropagation()
  }

  return (
    <main className="min-h-screen bg-[#FFFFFF]">
     <section className="relative py-10 md:py-14 bg-[#3D52A0] text-[#EDE8F5]">
  <div className="container mx-auto px-6 text-center">
    <h1 className="text-3xl md:text-4xl font-serif tracking-tight mb-4">
      Our Products
    </h1>
    <div className="w-16 h-1 mx-auto bg-[#EDE8F5] rounded-full mb-6" />
    <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed opacity-90">
      Discover our range of premium printed boxes, custom packaging, and luxury gift boxes designed to elevate your brand presence.
    </p>
  </div>
</section>



      <section className="py-16 bg-[#ADBBDA]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#3D52A0] text-center mb-12">Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group">
                <div className="bg-[#FFFFFF] rounded-lg overflow-hidden shadow-md transition-transform group-hover:scale-105">
                  <div className="h-64 relative">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-[#3D52A0] mb-2">{category.name}</h3>
                    <p className="text-[#3D52A0] mb-4">{category.description}</p>
                    <button
                      onClick={() => openGallery(category)}
                      className="bg-[#3D52A0] hover:bg-[#8697C4] text-white px-4 py-2 rounded-md transition-colors"
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedCategory && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeGallery}
        >
          <div className="bg-white w-full h-full flex flex-col" onClick={handleModalClick}>
            <div className="p-6 flex-shrink-0 bg-[#3D52A0] text-white">
              <button onClick={closeGallery} className="absolute top-4 right-4 text-white hover:text-gray-200 z-10">
                <X size={32} />
              </button>
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">{selectedCategory.name}</h2>
                <p className="text-lg opacity-90">{selectedCategory.description}</p>
              </div>
            </div>

            <div className="overflow-y-auto flex-grow p-6 pt-8 bg-[#F5F5F7]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {selectedCategory.products.map((product, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-md text-center shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-64 mb-4">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="rounded-md object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#3D52A0] mt-4">{product.name}</h3>
                    <p className="text-gray-600 mt-2 text-base">{product.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="py-16 bg-[#7091E6]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#FFFFFF] mb-6">Need Custom Packaging Solutions?</h2>
          <p className="text-[#FFFFFF] max-w-2xl mx-auto mb-8">
            We specialize in creating custom packaging solutions tailored to your specific requirements. Contact us to
            discuss your project.
          </p>
          <Link href="/contact" className="bg-[#3D52A0] hover:bg-[#8697C4] text-[#FFFFFF] px-6 py-3 rounded-md">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}

