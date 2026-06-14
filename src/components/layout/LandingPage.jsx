import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import HowItWorks from './HowItWorks'
import FAQ from './Faq'
import Footer from './Footer'
import PaymentSection from './Pricing'
function LandingPage() {
  return (<>
  <Navbar/>
  <Hero/>
  <HowItWorks/>
  <PaymentSection/>
  <FAQ/>
  <Footer/>
  </>
  )
}

export default LandingPage