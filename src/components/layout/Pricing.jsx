import { easeOut, motion } from "motion/react";

const PaymentSection = () => {
  const plans = [
    {
      name: "Standard",
      price: "Free",
      description: "Perfect for personal websites and small projects.",
      buttonText: "Get Started",
      featured: false,
      features: [
        "Up to 5,000 tracked visits/month",
        "Total visitor count",
        "Top traffic sources",
        "Daily traffic overview",
        "Date range filtering",
        "30 days of analytics history",
        "Basic referral tracking",
      ],
    },
    {
      name: "Pro",
      price: "₹599",
      usdPrice: "$6.73",
      description:
        "Advanced analytics for creators, startups and growing businesses.",
      buttonText: "Upgrade to Pro",
      featured: true,
      features: [
        "Unlimited tracked visits",
        "Everything in Standard",
        "Full traffic attribution",
        "Google, Reddit, X & LinkedIn source tracking",
        "Average session duration",
        "Visitor journey analytics",
        "Geographic insights",
        "Device & browser analytics",
        "UTM campaign tracking",
        "Priority support",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-32 px-6 bg-black relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(249,115,22,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-6">
            Simple pricing for
            <span
              className="italic ml-3"
              style={{ fontFamily: "'DM Sans', serif" }}
            >
              every website
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-zinc-400 text-lg">
            Start free and upgrade whenever you need deeper traffic
            insights, attribution data and visitor behavior analytics.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {plans.map((plan, i) => (
            <motion.div
  key={plan.name}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{
    opacity: {
      duration: 0.8,
      delay: i * 0.2,
      ease: "linear",
    },
  }}
  viewport={{ once: true, amount: 0.2 }}
  className={`relative overflow-hidden rounded-3xl p-8 transition-all duration-300 ${
    plan.featured
      ? "border-2 lg:scale-[1.03]"
      : "border"
  }`}
            >
              {plan.featured && (
                <>
                  <div
                    className="absolute inset-0 opacity-20 blur-3xl"
                    style={{
                      background:
                        "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
                    }}
                  />

                  <div
                    className="absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: "rgba(249,115,22,0.15)",
                      color: "var(--color-primary)",
                    }}
                  >
                    MOST POPULAR
                  </div>
                </>
              )}

              <div className="relative z-10">
                <h3 className="text-3xl font-semibold text-white mb-3">
                  {plan.name}
                </h3>

                <p className="text-zinc-400 mb-8">
                  {plan.description}
                </p>

                <div className="mb-10">
                  <div className="flex items-end gap-3">
                    <span className="text-6xl font-bold text-white">
                      {plan.price}
                    </span>

                    {plan.usdPrice && (
                      <span className="text-zinc-400 text-xl mb-2">
                        ({plan.usdPrice})
                      </span>
                    )}
                  </div>

                  <p className="text-zinc-500 mt-2">
                    per month
                  </p>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-zinc-300"
                    >
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                        style={{
                          background:
                            "rgba(249,115,22,0.15)",
                          color: "var(--color-primary)",
                        }}
                      >
                        ✓
                      </div>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className="w-full py-4 rounded-xl font-semibold transition-all duration-300 cursor-pointer hover:opacity-90"
                  style={{
                    background: plan.featured
                      ? "var(--color-primary)"
                      : "transparent",
                    border: plan.featured
                      ? "none"
                      : "1px solid var(--color-border)",
                    color: "white",
                  }}
                >
                  {plan.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-zinc-500 text-sm">
            No contracts. Cancel anytime. Upgrade or downgrade
            whenever you want.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;