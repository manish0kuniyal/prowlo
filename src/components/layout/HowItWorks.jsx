export default function HowItWorks() {
  return (
    <section className="relative bg-black text-white py-24 px-6">

      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
          How it works
        </h2>

        <p className="mt-4 text-gray-400">
          Get started in minutes. No complex setup.
        </p>

        {/* Steps */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">

          {/* Step 1 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="text-orange-400 text-lg font-semibold mb-2">
              01
            </div>
            <h3 className="text-xl font-medium">
              Enter your website
            </h3>
            <p className="mt-2 text-gray-400 text-sm">
              Add your site URL and we’ll generate your tracking script instantly.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="text-orange-400 text-lg font-semibold mb-2">
              02
            </div>
            <h3 className="text-xl font-medium">
              Add the script
            </h3>
            <p className="mt-2 text-gray-400 text-sm">
              Paste a single script tag into your website — no coding required.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="text-orange-400 text-lg font-semibold mb-2">
              03
            </div>
            <h3 className="text-xl font-medium">
              Track your traffic
            </h3>
            <p className="mt-2 text-gray-400 text-sm">
              See exactly where users come from with a clean, real-time dashboard.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}