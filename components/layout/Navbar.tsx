import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-white/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          Speedy Box
        </h1>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-gray-600 hover:text-blue-600">
            Нэвтрэх
          </Link>

          <Link
            href="/register"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-2 rounded-xl shadow-md hover:scale-105 transition"
          >
            Эхлэх
          </Link>
        </div>
      </div>
    </nav>
  )
}