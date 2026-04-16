export default function Footer() {
  return (
    <footer className="relative bg-black text-white px-6 py-16 overflow-hidden">


      <div className="max-w-6xl mx-auto relative z-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold">prowlo</h3>
            <p className="text-sm text-gray-400 mt-2">
              Track exactly where your traffic comes from.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">Product</a>
            <a href="#" className="hover:text-white transition">Pricing</a>
            <a href="#" className="hover:text-white transition">Docs</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>

        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} prowlo. All rights reserved.
        </div>

      </div>
    </footer>
  );
}