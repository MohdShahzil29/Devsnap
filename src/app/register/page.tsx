import React from "react";
import type { Metadata } from "next";
import RegisterForm from "@/pages/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Register | Dev Snap",
  description: "Start your jounry with Dev Snap account",
};

export default function LoginPage() {
  return <RegisterForm />;
}
