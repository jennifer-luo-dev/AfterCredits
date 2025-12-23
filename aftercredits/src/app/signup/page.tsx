"use client";
import { useRouter } from "next/navigation";
import { Auth } from "../components/login";

export default function SignupPage() {
  const router = useRouter();

  const handleAuthSuccess = async (accessToken: string) => {
    // Redirect to home page after successful authentication
    router.push("/");
  };

  return <Auth onAuthSuccess={handleAuthSuccess} />;
}
