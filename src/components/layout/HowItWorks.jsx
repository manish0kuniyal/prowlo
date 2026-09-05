import { Globe, Code2, BarChart3 } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    icon: Globe,
    title: "Enter your website",
    desc: "Add your site URL and we’ll generate your tracking script instantly.",
  },
  {
    icon: Code2,
    title: "Add the script",
    desc: "Paste a single script tag into your website — no coding required.",
  },
  {
    icon: BarChart3,
    title: "Track your traffic",
    desc: "See exactly where users come from with a clean, real-time dashboard.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-black text-white px-6 overflow-hidden">

      <div className="absolute bottom-[10%] right-[30%] w-[300px] h-[300px] bg-[#d4316a]/0 blur-[160px] rounded-full" />

      <div className="max-w-6xl mx-auto text-center relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="font-['Sora'] text-4xl md:text-6xl font-semibold tracking-tight"
        >
          How it works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-5 text-gray-400 text-lg"
        >
          Get started in minutes. No complex setup.
        </motion.p>

        <div className="mt-24 grid md:grid-cols-3 gap-10">

          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="p-10 md:p-12 rounded-2xl bg-white/[0.05] backdrop-blur-xl text-left min-h-[260px] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-10">
                  <Icon className="w-8 h-8 text-orange-400" />
                </div>

                <div>
                  <h3 className="text-xl font-medium">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}