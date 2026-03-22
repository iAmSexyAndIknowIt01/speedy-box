import AuthCard from "@/components/auth/AuthCard"
import AuthForm from "@/components/auth/AuthForm"

export default function LoginPage() {
  return (
    <AuthCard
      title="Нэвтрэх"
      subtitle="Өөрийн бүртгэл рүү нэвтэрнэ үү"
    >
      <AuthForm type="login" />
    </AuthCard>
  )
}