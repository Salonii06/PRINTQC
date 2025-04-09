import Link from "next/link"

export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-[#EDE8F5] py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-[#3D52A0] mb-8">Refund Policy</h1>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <p className="text-[#3D52A0] mb-4">Last Updated: March 25, 2025</p>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#3D52A0] mb-4">1. Returns</h2>
            <p className="text-[#3D52A0] mb-4">
              At Print QC, we take pride in the quality of our products. However, we understand that sometimes a return
              may be necessary. Our return policy is as follows:
            </p>
            <ul className="list-disc pl-6 text-[#3D52A0] mb-4">
              <li className="mb-2">All returns must be initiated within 7 days of receiving the product.</li>
              <li className="mb-2">
                Products must be in their original condition, unused, and in the original packaging.
              </li>
              <li className="mb-2">Custom-made products are non-returnable unless there is a manufacturing defect.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#3D52A0] mb-4">2. Refunds</h2>
            <p className="text-[#3D52A0] mb-4">
              Once we receive and inspect the returned item, we will notify you of the approval or rejection of your
              refund.
            </p>
            <ul className="list-disc pl-6 text-[#3D52A0] mb-4">
              <li className="mb-2">
                If approved, your refund will be processed, and a credit will automatically be applied to your original
                method of payment within 10-15 business days.
              </li>
              <li className="mb-2">
                If the product is damaged or defective, we will replace it or provide a full refund.
              </li>
              <li className="mb-2">Shipping costs are non-refundable unless the return is due to our error.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#3D52A0] mb-4">3. Cancellations</h2>
            <p className="text-[#3D52A0] mb-4">
              Orders can be cancelled before they enter the production phase. Once production has begun, cancellation
              may not be possible, especially for custom orders.
            </p>
            <p className="text-[#3D52A0] mb-4">
              To cancel an order, please contact our customer service team immediately at info@printqc.com or call +91
              88791 41513.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#3D52A0] mb-4">4. Contact Us</h2>
            <p className="text-[#3D52A0] mb-4">
              If you have any questions about our refund policy, please contact us at:
            </p>
            <p className="text-[#3D52A0] mb-4">
              Email: info@printqc.com
              <br />
              Phone: +91 88791 41513
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
