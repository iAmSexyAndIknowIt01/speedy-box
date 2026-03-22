import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AuthCard({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode
  title: string
  subtitle: string
}) {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-400 -z-10" />
      <div className="absolute w-[400px] h-[400px] bg-white/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />

      {/* Back button */}
      <Link
        href="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-white/80 hover:text-white transition"
      >
        <ArrowLeft className="w-5 h-5" />
        Буцах
      </Link>

      {/* Card */}
      <div className="w-full max-w-md bg-white/90 backdrop-blur p-8 rounded-2xl shadow-xl">

        {/* Logo */}
        <Link href="/" className="block text-center mb-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Speedy Box
          </h1>
        </Link>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center">{title}</h2>
        <p className="text-center text-gray-500 mt-2">{subtitle}</p>

        {/* Form */}
        <div className="mt-6">{children}</div>
      </div>
    </div>
  )
}