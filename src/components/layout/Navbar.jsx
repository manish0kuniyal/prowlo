import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-10 left-0 w-full z-50 flex justify-center px-4"
    >

      <div className="w-full max-w-5xl flex items-center justify-between px-5 py-3 rounded-3xl  
        bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg">

        <div className="text-white font-bold tracking-tight text-xl">
          Prowlo
        </div>

        <div className="flex items-center gap-4 text-base text-gray-300 font-medium">
          {/* <Link to="/dashboard" className="hover:text-white transition">
            About
          </Link>

          <Link href="#" className="hover:text-white transition">
            FAQ
          </Link> */}

          <button className="ml-2 px-8 py-2.5 rounded-3xl font-bold text-white 
  bg-orange-500 hover:bg-orange-600 transition flex items-center gap-2">
  Join
  <Sparkles className="w-5 h-5 " />
</button>
        </div>

      </div>

    </motion.nav>
  );
}