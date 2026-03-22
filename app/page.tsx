import Navbar from "@/components/layout/Navbar"
import HeroSection from "@/components/landing/HeroSection"
import FeaturesSection from "@/components/landing/FeaturesSection"
import TestimonialsSection from "@/components/landing/TestimonialsSection"
import PricingSection from "@/components/landing/PricingSection"
import CTASection from "@/components/landing/CTASection"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
    </main>
  )
}