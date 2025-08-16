import React from "react";
import LoginForm from "@/pages/auth/LoginForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Dev Snap",
  description: "Login to your Dev Snap account",
};

export default function LoginPage() {
  return <LoginForm />;
}
