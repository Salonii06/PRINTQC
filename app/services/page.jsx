import Image from "next/image"
import Link from "next/link"
import {
  CheckCircle,
  Sparkles,
  Leaf,
  Zap,
  Palette,
  BarChart,
  Package,
  ShoppingBag,
  Gift,
  Droplet,
  Layers,
  Scissors,
} from "lucide-react"
import rigid1 from "@/public/rigid1.jpg"
// import eco from "@/public/eco.jpg";

export const metadata = {
  title: "Services - Print QC",
  description: "Explore our custom printing and packaging solutions.",
}

const printingServices = [
  "Custom Rigid Box Design",
  "Premium Material Selection",
  "Luxury Finishing Options",
  "Eco-Friendly Rigid Box Options",
  "Prototyping & Sampling",
  "Custom Inserts & Foam Protection ",
  "Bulk Manufacturing & Timely Delivery ",
]

const premiumFinishes = [
  {
    name: "Foil Stamping",
    description: "Add metallic accents in gold, silver, or custom colors for a luxurious look",
    icon: <Sparkles className="h-8 w-8 text-[#7091E6]" />,
  },
  {
    name: "Embossing & Debossing",
    description: "Create raised or recessed designs for tactile dimension and elegance",
    icon: <Layers className="h-8 w-8 text-[#7091E6]" />,
  },
  {
    name: "Spot UV Coating",
    description: "Apply glossy highlights to specific areas for contrast and sophistication",
    icon: <Droplet className="h-8 w-8 text-[#7091E6]" />,
  },
  {
    name: "Custom Die-Cutting",
    description: "Create unique shapes and windows for product visibility and brand differentiation",
    icon: <Scissors className="h-8 w-8 text-[#7091E6]" />,
  },
]

const industrySpecificSolutions = [
  {
    industry: "Cosmetics & Beauty",
    description: "Elegant rigid boxes with premium finishes that enhance the luxury feel of beauty products",
    icon: <Palette className="h-10 w-10 text-white" />,
    color: "bg-[#7091E6]",
  },
  {
    industry: "Electronics",
    description: "Protective packaging with custom foam inserts to ensure product safety during shipping",
    icon: <Zap className="h-10 w-10 text-white" />,
    color: "bg-[#3D52A0]",
  },
  {
    industry: "Retail & E-commerce",
    description: "Brand-focused packaging that creates memorable unboxing experiences for customers",
    icon: <ShoppingBag className="h-10 w-10 text-white" />,
    color: "bg-[#8697C4]",
  },
  {
    industry: "Corporate Gifting",
    description: "Premium gift boxes that make a lasting impression for special occasions and events",
    icon: <Gift className="h-10 w-10 text-white" />,
    color: "bg-[#ADBBDA]",
  },
]

const sustainableOptions = [
  "Recycled and recyclable materials",
  "Soy-based and vegetable inks",
  "Water-based coatings",
  "Biodegradable packaging options",
  "Reduced material usage designs",
  "FSC-certified paper sources",
  "Plastic-free packaging alternatives",
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#EDE8F5]">
      {/* Hero Section */}
      <section className="relative py-10 md:py-14 bg-[#3D52A0] text-[#EDE8F5]">
  <div className="container mx-auto px-6 text-center">
    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
      Our Services
    </h1>
    <div className="w-16 h-1 mx-auto bg-[#EDE8F5] rounded-full mb-6" />
    <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed opacity-90">
      From premium packaging to high-quality printing, we offer professional solutions tailored to elevate your brand presence.
    </p>
  </div>
</section>

      {/* Rigid Box Manufacturing */}
      <section className="py-16 bg-[#ADBBDA]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#3D52A0] mb-6">Rigid Box Manufacturing</h2>
              <p className="text-[#3D52A0] mb-6">
                At Print QC, we offer comprehensive printing services using state-of-the-art technology to deliver
                exceptional quality.
              </p>
              <ul className="space-y-3">
                {printingServices.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#3D52A0] mr-2 shrink-0 mt-0.5" />
                    <span className="text-[#3D52A0]">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src={rigid1 || "/placeholder.svg"} alt="Custom Printing Services" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Premium Finishing Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#3D52A0] mb-4 text-center">Premium Finishing Options</h2>
          <p className="text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Elevate your packaging with our luxury finishing techniques that add sophistication and brand value
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {premiumFinishes.map((finish, index) => (
              <div
                key={index}
                className="bg-[#EDE8F5] rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-4">{finish.icon}</div>
                <h3 className="text-xl font-bold text-[#3D52A0] mb-3">{finish.name}</h3>
                <p className="text-gray-700">{finish.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Solutions */}
      <section className="py-16 bg-[#EDE8F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#3D52A0] mb-4 text-center">Industry-Specific Solutions</h2>
          <p className="text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            We understand that different industries have unique packaging requirements. Our specialized solutions are
            designed to meet the specific needs of various sectors.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {industrySpecificSolutions.map((solution, index) => (
              <div key={index} className="flex bg-white rounded-lg shadow-lg overflow-hidden">
                <div className={`${solution.color} p-6 flex items-center justify-center`}>{solution.icon}</div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold text-[#3D52A0] mb-2">{solution.industry}</h3>
                  <p className="text-gray-700">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovative Packaging Technologies
      <section className="py-16 bg-[#8697C4]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Innovative Packaging Technologies</h2>
              <p className="text-white mb-8">
                We stay at the forefront of packaging innovation, incorporating the latest technologies to create
                packaging solutions that not only look premium but also enhance functionality and user experience.
              </p>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">Smart Packaging Solutions</h3>
                  <p className="text-white/90">
                    Integrate QR codes, NFC tags, or augmented reality features to create interactive experiences for
                    your customers.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">Custom Structural Engineering</h3>
                  <p className="text-white/90">
                    Our structural design experts create innovative packaging solutions that optimize material usage
                    while ensuring product protection.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">Advanced Printing Techniques</h3>
                  <p className="text-white/90">
                    Utilize cutting-edge printing technologies for photorealistic images, variable data printing, and
                    special effects.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Innovative Packaging Technologies"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Sustainable Packaging
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Sustainable Packaging Solutions"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center mb-6">
                <Leaf className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-[#3D52A0]">Sustainable Packaging</h2>
              </div>
              <p className="text-gray-700 mb-6">
                We are committed to environmental responsibility and offer a range of eco-friendly packaging solutions
                that reduce environmental impact without compromising on quality or aesthetics.
              </p>
              <ul className="space-y-3 mb-8">
                {sustainableOptions.map((option, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{option}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-[#EDE8F5] p-4 rounded-lg">
                <p className="text-[#3D52A0] font-medium">
                  Our sustainable packaging options help you meet your corporate social responsibility goals while
                  appealing to environmentally conscious consumers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Packaging Design Principles */}
      <section className="py-16 bg-[#ADBBDA]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#3D52A0] mb-4 text-center">Our Packaging Design Principles</h2>
          <p className="text-[#3D52A0] mb-12 text-center max-w-3xl mx-auto">
            Every packaging solution we create is guided by these core principles that ensure exceptional results
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#3D52A0] mb-6">
                <Package className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#3D52A0] mb-3">Functionality First</h3>
              <p className="text-gray-700">
               Since our founding in 2015, Print QC has prioritized packaging that performs. Whether it’s a printed box or a custom gift box, we design with purpose—ensuring structural integrity, easy handling, and product safety during transport and display. Our clients trust us for packaging that works as good as it looks.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#3D52A0] mb-6">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#3D52A0] mb-3">Brand Alignment</h3>
              <p className="text-gray-700">
              Your packaging is your brand’s first handshake with the customer. At Print QC, we work closely with clients to reflect their unique identity through tailored packaging designs. Our prints, materials, and finishes are selected to consistently reinforce your brand’s story across every box.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#3D52A0] mb-6">
                <BarChart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#3D52A0] mb-3">Market Differentiation</h3>
              <p className="text-gray-700">
              In a crowded marketplace, visual appeal can make all the difference. With our expertise in high-quality custom printing and packaging, we help your products pop on the shelves. Our goal is to turn every box into a sales tool—eye-catching, memorable, and uniquely yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-16 bg-[#3D52A0]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#EDE8F5] mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-[#EDE8F5] max-w-3xl mx-auto mb-8">
            Contact us today to discuss your printing and packaging requirements. Our team is ready to help bring your
            vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#EDE8F5] text-[#3D52A0] font-bold py-3 px-8 rounded-lg hover:bg-[#EDE8F5]/90 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}

