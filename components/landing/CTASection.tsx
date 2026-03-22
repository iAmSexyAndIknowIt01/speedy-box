import Container from "@/components/layout/Container"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-20 text-center relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 -z-10" />

      <Container>
        <h2 className="text-3xl font-bold text-white">
          Одоо эхлээд бизнесээ удирд
        </h2>

        <p className="mt-4 text-blue-100">
          Үнэгүй бүртгүүлээд шууд ашиглаж эхлээрэй
        </p>

        <Link
          href="/register"
          className="inline-block mt-6 bg-white text-blue-600 px-6 py-3 rounded-xl font-medium shadow hover:scale-105 transition"
        >
          Үнэгүй эхлэх
        </Link>
      </Container>
    </section>
  )
}