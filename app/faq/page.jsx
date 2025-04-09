"use client"; // <== required for useState to work

import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#ADBBDA] last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left font-medium text-[#3D52A0] hover:text-[#7091E6] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUp className="flex-shrink-0 text-[#7091E6]" />
        ) : (
          <ChevronDown className="flex-shrink-0 text-[#7091E6]" />
        )}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-4" : "max-h-0"}`}>
        <p className="text-[#3D52A0]">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const faqs = [
    {
      question: "What types of packaging do you offer?",
      answer: "We offer custom boxes, labels and more tailored to your brand."
    },
    {
      question: "What is the minimum order quantity?",
      answer: "Our MOQ varies depending on product type, but generally starts at 30 units."
    },
    {
      question: "How long does it take to produce custom packaging?",
      answer: "Production time typically ranges from 7-15 business days after design approval."
    },
    {
      question: "Do you provide design services?",
      answer: "Yes! Our in-house designers can help bring your packaging vision to life."
    },
    {
      question: "What file formats do you accept for printing?",
      answer: "We accept PDF, AI, PSD, and high-res PNG/JPEG files."
    },
    {
      question: "Do you ship internationally?",
      answer: "Absolutely. We serve clients across the globe with reliable shipping options."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit/debit cards, bank transfers and UPI."
    }
  ];

  return (
    <main className="min-h-screen bg-[#EDE8F5] py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-[#3D52A0] mb-8">Frequently Asked Questions</h1>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}

          <div className="mt-8">
            <h2 className="text-xl font-bold text-[#3D52A0] mb-4">Still have questions?</h2>
            <p className="text-[#3D52A0] mb-4">
              If you couldn't find the answer to your question, please feel free to contact us directly.
            </p>
            <Link
              href="/contact"
              className="bg-[#3D52A0] hover:bg-[#7091E6] text-[#EDE8F5] px-6 py-3 rounded-md font-medium inline-flex items-center gap-2 transition-colors"
            >
              Contact Us
            </Link>
          </div>
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
  );
}
