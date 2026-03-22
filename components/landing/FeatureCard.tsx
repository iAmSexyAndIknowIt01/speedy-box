import { LucideIcon } from "lucide-react"
import AnimatedSection from "./AnimatedSection"

type Props = {
  icon: LucideIcon
  title: string
  desc: string
}

export default function FeatureCard({ icon: Icon, title, desc }: Props) {
  return (
    <AnimatedSection>
      <div className="group relative h-full rounded-2xl p-[1px] bg-gradient-to-b from-blue-200/50 to-transparent">
        
        {/* Glow on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-blue-200 blur-xl" />

        {/* Card */}
        <div className="relative h-full flex flex-col justify-between bg-white/80 backdrop-blur rounded-2xl p-6 transition group-hover:bg-white group-hover:shadow-xl">
          
          {/* Icon */}
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:scale-110 group-hover:rotate-3 transition">
            <Icon className="w-6 h-6" />
          </div>

          {/* Content */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              {desc}
            </p>
          </div>

        </div>
      </div>
    </AnimatedSection>
  )
}