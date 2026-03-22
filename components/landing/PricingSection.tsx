"use client"

import Container from "@/components/layout/Container"
import AnimatedSection from "./AnimatedSection"
import Link from "next/link"

const plans = [
  {
    name: "Free",
    price: "0₮",
    features: ["Бараа бүртгэл", "Basic dashboard"],
  },
  {
    name: "Pro",
    price: "29,000₮",
    features: ["Бүх функц", "Тайлан", "Олон хэрэглэгч"],
  },
]

export default function PricingSection() {
  return (
    <section className="py-20 bg-slate-50">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">
          Үнийн санал
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <AnimatedSection key={i}>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="text-3xl font-bold mt-4">{plan.price}</p>

                <ul className="mt-6 space-y-2 text-gray-600">
                  {plan.features.map((f, idx) => (
                    <li key={idx}>✓ {f}</li>
                  ))}
                </ul>

                <Link
                  href="/register"
                  className="block mt-6 bg-blue-600 text-white py-2 rounded-xl"
                >
                  Эхлэх
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  )
}