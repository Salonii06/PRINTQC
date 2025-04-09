import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#EDE8F5] py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-[#3D52A0] mb-8">Privacy Policy</h1>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <p className="text-[#3D52A0] mb-4">Last Updated: March 25, 2025</p>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#3D52A0] mb-4">1. Introduction</h2>
            <p className="text-[#3D52A0] mb-4">
              At Print QC, we respect your privacy and are committed to protecting your personal data. This privacy
              policy will inform you about how we look after your personal data when you visit our website and tell you
              about your privacy rights and how the law protects you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#3D52A0] mb-4">2. The Data We Collect About You</h2>
            <p className="text-[#3D52A0] mb-4">
              Personal data, or personal information, means any information about an individual from which that person
              can be identified. We may collect, use, store and transfer different kinds of personal data about you
              which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 text-[#3D52A0] mb-4">
              <li className="mb-2">Identity Data includes first name, last name, username or similar identifier.</li>
              <li className="mb-2">
                Contact Data includes billing address, delivery address, email address and telephone numbers.
              </li>
              <li className="mb-2">
                Technical Data includes internet protocol (IP) address, browser type and version, time zone setting and
                location, browser plug-in types and versions, operating system and platform, and other technology on the
                devices you use to access this website.
              </li>
              <li className="mb-2">
                Usage Data includes information about how you use our website, products and services.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#3D52A0] mb-4">3. How We Use Your Personal Data</h2>
            <p className="text-[#3D52A0] mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal
              data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-[#3D52A0] mb-4">
              <li className="mb-2">
                Where we need to perform the contract we are about to enter into or have entered into with you.
              </li>
              <li className="mb-2">
                Where it is necessary for our legitimate interests (or those of a third party) and your interests and
                fundamental rights do not override those interests.
              </li>
              <li className="mb-2">Where we need to comply with a legal obligation.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#3D52A0] mb-4">4. Contact Us</h2>
            <p className="text-[#3D52A0] mb-4">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
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
