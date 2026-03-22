import Container from "@/components/layout/Container"
import FeatureCard from "./FeatureCard"
import { Box, BarChart3, Zap } from "lucide-react"

const features = [
  {
    icon: Box,
    title: "Бараа бүртгэл",
    desc: "Бараагаа хялбар бүртгэж, үлдэгдлээ хянах боломжтой",
  },
  {
    icon: BarChart3,
    title: "Dashboard",
    desc: "Орлого, зарлага, үлдэгдлийг нэг дороос харна",
  },
  {
    icon: Zap,
    title: "Хурдан ажиллагаа",
    desc: "QR болон хурдан бүртгэлийн систем",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-blue-50 to-white" />

      {/* Glow effects */}
      <div className="absolute w-[500px] h-[500px] bg-blue-300 rounded-full blur-3xl opacity-20 top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-300 rounded-full blur-3xl opacity-20 bottom-[-100px] right-[-100px]" />

      <Container>
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          
          {/* Badge */}
          <div className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-blue-100 text-blue-600">
            ✨ Speedy Box боломжууд
          </div>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Бизнесээ{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              дараагийн түвшинд
            </span>{" "}
            хүргэ
          </h2>

          <p className="mt-5 text-gray-600 text-lg">
            Таны бизнесийг автоматжуулж, илүү хурдан, илүү хялбар болгоно
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {features.map((item, i) => (
            <FeatureCard key={i} {...item} />
          ))}
        </div>
      </Container>
    </section>
  )
}