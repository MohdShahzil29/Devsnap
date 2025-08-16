"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, EyeOff, User, Lock, Mail, Heart } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const RegisterForm = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    setIsVisible(true);
    const mobileCheck = window.innerWidth < 768;
    setIsMobile(mobileCheck);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!mobileCheck) {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const calculateParallax = (speed = 0.02) => {
    if (!containerRef.current || isMobile) return { x: 0, y: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    return {
      x: (mousePos.x - centerX) * speed,
      y: (mousePos.y - centerY) * speed,
    };
  };

  const parallax = calculateParallax();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Registration submitted:", formData);
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-x-hidden flex items-center justify-center bg-gradient-to-br from-[#0a0a1a] via-[#1a093a] to-[#2c0b3d] min-h-screen py-4 px-4 sm:py-8 md:py-12"
    >
      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(isMobile ? 10 : 20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated gradient layer */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background: isMobile
            ? `radial-gradient(
                600px circle at center,
                rgba(139, 92, 246, 0.3),
                rgba(219, 39, 119, 0.2),
                transparent 70%
              )`
            : `radial-gradient(
                circle at ${mousePos.x}px ${mousePos.y}px,
                rgba(139, 92, 246, 0.4),
                rgba(219, 39, 119, 0.3),
                transparent 80%
              )`,
          transition: "background 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* Registration Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[95%] sm:max-w-md backdrop-blur-xl bg-gradient-to-br from-[#ffffff10] to-[#ffffff05] border border-white/10 rounded-2xl shadow-2xl shadow-purple-900/30 overflow-hidden"
        style={{
          transform: `translate(${parallax.x}px, ${parallax.y}px)`,
        }}
      >
        {/* Card Header */}
        <div className="bg-gradient-to-r from-purple-700/50 to-pink-600/50 p-4 sm:p-6 text-center">
          <div className="inline-flex items-center gap-2 bg-black/30 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full mb-3 sm:mb-4 backdrop-blur-sm">
            <User
              className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-300"
              fill="currentColor"
            />
            <span className="font-medium text-white/90 text-xs sm:text-sm tracking-wide">
              CREATE ACCOUNT
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            Join Our Community
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-1 sm:mt-2">
            Create your account to get started
          </p>
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-6 md:p-8">
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-3 sm:mb-4">
              <label
                htmlFor="name"
                className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2"
              >
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full text-sm sm:text-base pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="mb-3 sm:mb-4">
              <label
                htmlFor="email"
                className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full text-sm sm:text-base pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="mb-3 sm:mb-4">
              <label
                htmlFor="password"
                className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full text-sm sm:text-base pl-9 sm:pl-10 pr-10 py-2.5 sm:py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-300 transition-colors" />
                  ) : (
                    <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-300 transition-colors" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="mb-4 sm:mb-5">
              <label
                htmlFor="confirmPassword"
                className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2"
              >
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full text-sm sm:text-base pl-9 sm:pl-10 pr-10 py-2.5 sm:py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-300 transition-colors" />
                  ) : (
                    <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-300 transition-colors" />
                  )}
                </button>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start mb-4 sm:mb-5">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-600 rounded bg-black/20"
                  required
                />
              </div>
              <div className="ml-2 text-xs sm:text-sm">
                <label htmlFor="terms" className="text-gray-300">
                  I agree to the{" "}
                  <a href="#" className="text-purple-400 hover:text-purple-300">
                    Terms
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-purple-400 hover:text-purple-300">
                    Privacy Policy
                  </a>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="group w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white text-sm sm:text-base px-4 py-3.5 sm:px-6 sm:py-4 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40"
            >
              <span className="mr-1 sm:mr-2">Create Account</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </div>

        {/* Card Footer */}
        <div className="bg-black/20 border-t border-white/10 p-4 sm:p-6 text-center">
          <p className="text-gray-400 text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>

      {/* Floating spheres - Desktop only */}
      {!isMobile && (
        <>
          <motion.div
            className="hidden md:block absolute top-1/4 left-[10%] w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-cyan-600/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 shadow-xl"
            animate={{
              y: [0, -40, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="hidden md:block absolute bottom-1/3 right-[10%] w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 shadow-xl"
            animate={{
              y: [0, 50, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: 0.5,
              ease: "easeInOut",
            }}
          />
        </>
      )}
    </div>
  );
};

export default RegisterForm;
