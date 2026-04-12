export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center bg-black text-white overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-0" />

      <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[780px] h-[780px] bg-red-500 opacity-30 blur-[140px] rounded-full" />

      <div className="absolute bottom-[150px] left-[24%] w-[500px] h-[500px] bg-orange-800 opacity-20 blur-[120px] rounded-full" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,0,0.15),transparent_60%)]" />

      <div className="relative z-10 text-center max-w-5xl px-6">

        <p className="text-sm text-gray-400 mb-4">
          Track every visitor. No guesswork.
        </p>

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1]">
          Know exactly{" "}
          <span className="italic [font-family:'Playfair_Display'] text-gray-300">
            where
          </span>{" "}
          your traffic
          <br />
          comes from
        </h1>

        <p className="mt-6 text-gray-400 text-lg">
          Add one script to your site and instantly see where your users are
          coming from — channels, sources, and behavior — all in one clean dashboard.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 min-w-[160px] rounded-lg font-medium bg-orange-500 hover:bg-orange-600 transition">
            Get Started
          </button>
          <button className="px-6 py-3 min-w-[160px] rounded-lg font-medium border border-gray-600 hover:bg-white/5 transition">
            View Demo
          </button>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          No cookies. Privacy-friendly. Works instantly.
        </p>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black" />

    </section>
  );
}