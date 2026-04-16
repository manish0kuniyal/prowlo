import { Globe, Code2, BarChart3 } from "lucide-react";

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
    <section className="relative bg-black text-white  px-6 overflow-hidden">


      <div className="absolute bottom-[10%] right-[30%] w-[300px] h-[300px] bg-[#d4316a]/0 blur-[160px] rounded-full" />


      <div className="max-w-6xl mx-auto text-center relative z-10">

        <h2 className="font-['Sora'] text-4xl md:text-6xl font-semibold tracking-tight">
  How it works
</h2>

        <p className="mt-5 text-gray-400 text-lg">
          Get started in minutes. No complex setup.
        </p>

        <div className="mt-24 grid md:grid-cols-3 gap-10">

          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <div
                key={i}
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
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}