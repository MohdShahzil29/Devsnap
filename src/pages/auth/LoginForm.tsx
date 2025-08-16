"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, EyeOff, Zap, User, Lock, Heart } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const LoginForm = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [particles, setParticles] = useState<Array<React.CSSProperties>>([]);

  useEffect(() => {
    setIsVisible(true);
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };

    // Generate particles only on client side
    const particleCount = isMobile ? 10 : 20;
    const newParticles = Array.from({ length: particleCount }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 3 + 1}px`,
      height: `${Math.random() * 3 + 1}px`,
      opacity: Math.random() * 0.7 + 0.3,
    }));
    setParticles(newParticles);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const calculateParallax = (speed = 0.03) => {
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
    console.log("Login submitted:", formData);
    // Add your login logic here
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-x-hidden flex items-center justify-center bg-gradient-to-br from-[#0a0a1a] via-[#1a093a] to-[#2c0b3d] min-h-screen py-12 px-4"
    >
      {/* Background particles - Only render on client */}
      <div className="absolute inset-0">
        {particles.map((style, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={style}
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

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md backdrop-blur-xl bg-gradient-to-br from-[#ffffff10] to-[#ffffff05] border border-white/10 rounded-2xl shadow-2xl shadow-purple-900/30 overflow-hidden"
        style={{
          transform: `translate(${parallax.x}px, ${parallax.y}px)`,
        }}
      >
        {/* Card Header */}
        <div className="bg-gradient-to-r from-purple-700/50 to-pink-600/50 p-6 text-center">
          <div className="inline-flex items-center gap-2 bg-black/30 px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-yellow-300" fill="currentColor" />
            <span className="font-medium text-white/90 text-sm tracking-wide">
              PREMIUM ACCESS
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Welcome Back
          </h2>
          <p className="text-gray-300 mt-2">Sign in to continue your journey</p>
        </div>

        {/* Card Body */}
        <div className="p-6 md:p-8">
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300"
                >
                  Password
                </label>
                <Link
                  href="#"
                  className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-300 transition-colors" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-300 transition-colors" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center mb-6">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-600 rounded bg-black/20"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-300"
              >
                Remember me
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="group w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-base md:text-lg px-6 py-5 md:px-8 md:py-6 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40"
            >
              <span className="mr-2">Sign In</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </div>

        {/* Card Footer */}
        <div className="bg-black/20 border-t border-white/10 p-6 text-center">
          <p className="text-gray-400">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
            >
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>

      {/* Floating spheres */}
      {!isMobile && (
        <>
          <motion.div
            className="hidden md:block absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 shadow-xl"
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
            className="hidden md:block absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/20 backdrop-blur-sm border border-blue-400/30 shadow-xl"
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

export default LoginForm;
