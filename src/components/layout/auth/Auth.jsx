import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { X, Mail, Lock, User, ArrowRight } from "lucide-react";
import { signup,login } from "../../../services/auth";
export default function AuthModal({ onClose }) {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      if (isLogin) {
        await login(identifier, password);

        onClose();
        navigate("/dashboard");
      } else {
        await signup(username, email, password);

        setIsLogin(true);
        setIdentifier(email);
        setPassword("");
        setUsername("");
        setEmail("");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-md rounded-3xl bg-white/[0.07] backdrop-blur-2xl border border-white/15 shadow-2xl shadow-black/40 p-8"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex justify-center mb-5">
            <img
              src="/Prowlo.png"
              alt="Prowlo"
              className="h-14 w-auto"
            />
          </div>

          <div className="text-center mb-7">
            <h2 className="text-2xl font-semibold text-white">
              {isLogin ? "Welcome back" : "Create your account"}
            </h2>

            <p className="text-sm text-gray-400 mt-2">
              {isLogin
                ? "Sign in to continue to Prowlo"
                : "Start understanding your traffic today"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />

                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="w-full rounded-2xl bg-black/20 border border-white/10 px-12 py-3.5 text-white placeholder-gray-500 outline-none focus:border-orange-500/70 focus:bg-white/[0.08] transition"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />

                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-2xl bg-black/20 border border-white/10 px-12 py-3.5 text-white placeholder-gray-500 outline-none focus:border-orange-500/70 focus:bg-white/[0.08] transition"
                  />
                </div>
              </>
            )}

            {isLogin && (
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />

                <input
                  type="text"
                  placeholder="Username or email"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  required
                  className="w-full rounded-2xl bg-black/20 border border-white/10 px-12 py-3.5 text-white placeholder-gray-500 outline-none focus:border-orange-500/70 focus:bg-white/[0.08] transition"
                />
              </div>
            )}

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-2xl bg-black/20 border border-white/10 px-12 py-3.5 text-white placeholder-gray-500 outline-none focus:border-orange-500/70 focus:bg-white/[0.08] transition"
              />
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm text-orange-400 hover:text-orange-300 transition"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {error && (
              <p className="text-sm text-red-400 text-center">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 rounded-2xl bg-orange-500 hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed py-3.5 text-white font-semibold transition"
            >
              {loading
                ? "Please wait..."
                : isLogin
                  ? "Sign In"
                  : "Create Account"}

              {!loading && <ArrowRight className="w-5 h-5" />}
            </button>
          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-gray-500">OR</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <button
            type="button"
            className="w-full rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 py-3.5 text-sm font-medium text-white transition"
          >
            Continue with Google
          </button>

          <p className="text-center text-sm text-gray-400 mt-6">
            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}

            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");
              }}
              className="ml-2 text-orange-400 hover:text-orange-300 font-medium transition"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}