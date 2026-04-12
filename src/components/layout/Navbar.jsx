export default function Navbar() {
  return (
    <nav className="fixed top-10 left-0 w-full z-50 flex justify-center px-4">

      <div className="w-full max-w-5xl flex items-center justify-between px-5 py-3 rounded-3xl 
        bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg">

        <div className="text-white font-bold tracking-tight text-xl">
          Prowlo
        </div>

        <div className="flex items-center gap-4 text-base text-gray-300 font-medium">
          <a href="#" className="hover:text-white transition">
            About
          </a>
          <a href="#" className="hover:text-white transition">
            FAQ
          </a>

          <button className="ml-2 px-5 py-2.5 rounded-full font-medium text-base
            bg-orange-500 hover:bg-orange-600 transition
            hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]">
            Sign up
          </button>
        </div>

      </div>

    </nav>
  );
}