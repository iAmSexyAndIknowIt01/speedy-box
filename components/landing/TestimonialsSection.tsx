"use client"

import Container from "@/components/layout/Container"
import AnimatedSection from "./AnimatedSection"

const testimonials = [
  {
    name: "Бат-Эрдэнэ",
    text: "Миний дэлгүүрийн бараа бүртгэл маш амар болсон!",
  },
  {
    name: "Сараа",
    text: "Өмнө Excel ашигладаг байсан, одоо бүх зүйл илүү хурдан болсон",
  },
  {
    name: "Тэмүүжин",
    text: "Speedy Box бол яг хэрэгтэй систем байна",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">
          Хэрэглэгчдийн сэтгэгдэл
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i}>
              <div className="bg-white p-6 rounded-2xl shadow">
                <p className="text-gray-600">"{t.text}"</p>
                <p className="mt-4 font-semibold">{t.name}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  )
}