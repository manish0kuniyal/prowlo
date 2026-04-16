import { useState } from "react";

const faqs = [
  {
    question: "How does the tracking work?",
    answer:
      "We generate a simple script that you add to your website. Once installed, it automatically tracks where your visitors are coming from and displays it in your dashboard.",
  },
  {
    question: "Do I need coding knowledge to set this up?",
    answer:
      "Not at all. Just copy and paste a single script tag into your website. It works with any platform — no technical setup required.",
  },
  {
    question: "What kind of traffic sources can I see?",
    answer:
      "You can track sources like social media, direct visits, referrals, and more — all broken down clearly in your dashboard.",
  },
  {
    question: "Is this privacy-friendly?",
    answer:
      "Yes. We don’t use invasive tracking or cookies. Your data stays minimal, clean, and compliant with modern privacy standards.",
  },
  {
    question: "Will this slow down my website?",
    answer:
      "No. The script is lightweight and optimized to load without affecting your site’s performance.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-36 px-6">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-semibold text-center tracking-tight">
          Frequently asked questions
        </h2>

        <div className="mt-12 space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl bg-white/5 backdrop-blur-md"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="text-base md:text-lg font-medium">
                  {faq.question}
                </span>

                <span className="text-orange-400 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`px-5 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-400 text-sm">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}