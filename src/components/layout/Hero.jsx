import { motion } from "motion/react";

export default function Hero({ onGetStarted }) {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center bg-black text-white overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-0" />

      <div className="absolute bottom-[20%] md:bottom-[-200px] left-1/2 -translate-x-1/2 
        w-[90vw] max-w-[780px] aspect-square 
        bg-red-600 opacity-30 blur-[80px] md:blur-[140px] rounded-full" />

      <div className="absolute bottom-[10%] md:bottom-[150px] left-[20%] 
        w-[70vw] max-w-[500px] aspect-square 
        bg-orange-600 opacity-20 blur-[60px] md:blur-[120px] rounded-full" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,0,0.15),transparent_60%)]" />

      <div className="relative z-10 text-center max-w-5xl px-6">

        <motion.p
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-sm text-gray-400 mb-4"
        >
          Track every visitor. No guesswork.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1]"
        >
          See where your{" "}
          <span className="italic font-[Inter] text-gray-200">
            visitors
          </span>{" "}
          came from without the 
          <br />
          analytics headache
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-gray-200 text-base sm:text-lg"
        >
          Add one script to your site and instantly see where your users are
          coming from — channels, sources, and behavior
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
        >
          <button
            onClick={onGetStarted}
            className="px-6 py-3 min-w-[160px] rounded-lg font-medium bg-orange-500 hover:bg-orange-600 hover:font-bold transition"
          >
            Get Started
          </button>

          <a
            href="https://calendly.com/manishkuniyal24/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 min-w-[160px] rounded-lg font-medium border border-gray-200 hover:bg-[var(--dashboard-bg)] hover:text-black hover:font-bold transition"
          >
            View Demo
          </a>
        </motion.div>

        <p className="mt-6 text-xs text-gray-500">
          No cookies. Privacy-friendly. Works instantly.
        </p>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black" />

    </section>
  );
}