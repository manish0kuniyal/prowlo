import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "./Hero";
import Navbar from "./Navbar";
import HowItWorks from "./HowItWorks";
import FAQ from "./Faq";
import Footer from "./Footer";
import PaymentSection from "./Pricing";
import AuthModal from "./auth/Auth";
import { getCurrentUser } from "../../services/auth";

function LandingPage() {
  const navigate = useNavigate();
  const [showAuth, setShowAuth] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      const user = await getCurrentUser();

      if (user) {
        navigate("/dashboard", { replace: true });
        return;
      }

      setCheckingAuth(false);
    }

    checkAuth();
  }, [navigate]);

  if (checkingAuth) {
    return null;
  }

  return (
    <>
      <Navbar onJoin={() => setShowAuth(true)} />
      <Hero onGetStarted={() => setShowAuth(true)} />
      <HowItWorks />
      <PaymentSection />
      <FAQ />
      <Footer />

      {showAuth && (
        <AuthModal onClose={() => setShowAuth(false)} />
      )}
    </>
  );
}

export default LandingPage;