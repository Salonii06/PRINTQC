import Link from "next/link"

export default function TermsConditions() {
  return (
    <main className="min-h-screen bg-[#EDE8F5] py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-[#3D52A0] mb-8">Terms & Conditions</h1>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <p className="text-[#3D52A0] mb-4">Last Updated: March 25, 2025</p>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#3D52A0] mb-4">1. Introduction</h2>
            <p className="text-[#3D52A0] mb-4">
              These terms and conditions govern your use of the Print QC website and the purchase of products from Print
              QC. By accessing our website and/or placing an order, you agree to be bound by these terms and conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#3D52A0] mb-4">2. Orders and Pricing</h2>
            <p className="text-[#3D52A0] mb-4">
              All orders placed through our website's contact are subject to acceptance and availability. We reserve the right to
              refuse any order without giving reason.
            </p>
            <p className="text-[#3D52A0] mb-4">
              Prices for products are as quoted on our website and are subject to change without notice. We take all
              reasonable care to ensure that prices are correct at the time of publishing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#3D52A0] mb-4">3. Product Information</h2>
            <p className="text-[#3D52A0] mb-4">
              While we make every effort to display the colors of our products accurately, we cannot guarantee that your
              computer's display of the colors accurately reflects the color of the actual products.
            </p>
            <p className="text-[#3D52A0] mb-4">
              All products are subject to availability. We will inform you as soon as possible if the product you have
              ordered is not available.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#3D52A0] mb-4">4. Delivery</h2>
            <p className="text-[#3D52A0] mb-4">
              Delivery times are estimates only and commence from the date of dispatch. We are not responsible for any
              delays caused by circumstances beyond our control.
            </p>
            <p className="text-[#3D52A0] mb-4">
              Risk of loss and title for items purchased pass to you upon delivery of the items to the carrier.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#3D52A0] mb-4">5. Intellectual Property</h2>
            <p className="text-[#3D52A0] mb-4">
              All content on our website, including text, graphics, logos, images, and software, is the property of
              Print QC and is protected by copyright and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#3D52A0] mb-4">6. Contact Us</h2>
            <p className="text-[#3D52A0] mb-4">
              If you have any questions about these terms and conditions, please contact us at:
            </p>
            <p className="text-[#3D52A0] mb-4">
              Email: info@printqc.com
              <br />
              Phone: +91 98765 43210
              <br />
              Address: Flat No-201, 2nd Floor, Building No-99, Samrudhhi Evergreen, Vangani, Badlapur, Thane-421503,
              Maharashtra, India
            </p>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="bg-[#3D52A0] hover:bg-[#7091E6] text-[#EDE8F5] px-6 py-3 rounded-md font-medium inline-flex items-center gap-2 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
