import Container from "@/components/layout/Container"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative py-32 text-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 opacity-90 -z-10" />

      {/* Blur circle */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-300 rounded-full blur-3xl opacity-30 top-[-100px] left-[-100px]" />

      <Container>
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          Бизнесээ ухаалаг удирд
        </h1>

        <p className="mt-6 text-blue-100 max-w-xl mx-auto text-lg">
          Speedy Box нь жижиг дунд бизнесүүдэд зориулсан
          бараа бүртгэл, борлуулалтын цогц систем юм.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/register"
            className="bg-white text-blue-600 px-8 py-3 rounded-xl text-lg font-medium shadow-lg hover:scale-105 transition"
          >
            Үнэгүй эхлэх
          </Link>

          <Link
            href="/login"
            className="border border-white text-white px-8 py-3 rounded-xl text-lg hover:bg-white/10 transition"
          >
            Нэвтрэх
          </Link>
        </div>
      </Container>
    </section>
  )
}