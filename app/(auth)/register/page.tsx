import AuthCard from "@/components/auth/AuthCard"
import AuthForm from "@/components/auth/AuthForm"

export default function RegisterPage() {
  return (
    <AuthCard
      title="Бүртгүүлэх"
      subtitle="Шинэ хэрэглэгч бүртгүүлэх"
    >
      <AuthForm type="register" />
    </AuthCard>
  )
}