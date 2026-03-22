"use client"

import { useState } from "react"
import Link from "next/link"

type Props = {
  type: "login" | "register"
}

export default function AuthForm({ type }: Props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const isLogin = type === "login"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ email, password })
    // 👉 дараа Supabase auth холбоно
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Email */}
      <input
        type="email"
        placeholder="Имэйл"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      {/* Password */}
      <input
        type="password"
        placeholder="Нууц үг"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      {/* Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl font-medium hover:opacity-90 transition"
      >
        {isLogin ? "Нэвтрэх" : "Бүртгүүлэх"}
      </button>

      {/* Switch */}
      <p className="text-center text-sm text-gray-500">
        {isLogin ? "Шинэ хэрэглэгч үү?" : "Аль хэдийн бүртгэлтэй юу?"}{" "}
        <Link
          href={isLogin ? "/register" : "/login"}
          className="text-blue-600 hover:underline"
        >
          {isLogin ? "Бүртгүүлэх" : "Нэвтрэх"}
        </Link>
      </p>
    </form>
  )
}