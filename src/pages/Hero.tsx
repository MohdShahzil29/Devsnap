"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Heart } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  // Calculate parallax effect only on desktop
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

  return (
    <section
      ref={containerRef}
      className="relative overflow-x-hidden flex items-center bg-gradient-to-br from-[#0a0a1a] via-[#1a093a] to-[#2c0b3d] pt-14 md:pt-0 md:min-h-screen"
      style={{ minHeight: isMobile ? "calc(100vh - 3.5rem)" : "auto" }}
    >
      {/* Reduced particles for mobile performance */}
      <div className="absolute inset-0">
        {[...Array(isMobile ? 15 : 30)].map((_, i) => (
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

      {/* Animated gradient layer - simplified for mobile */}
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

      {/* Simplified floating spheres for mobile */}
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

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-24">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Column - Text Content (ALWAYS VISIBLE) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-700/50 to-pink-600/50 border border-purple-500/30 px-4 py-1.5 md:px-5 md:py-2 rounded-full mb-5 md:mb-8 backdrop-blur-md">
              <Zap className="w-3 h-3 md:w-4 md:h-4 text-yellow-300" />
              <span className="font-medium text-white/90 text-xs md:text-sm tracking-wide">
                AGENCY-LEVEL SOLUTIONS
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6 text-white">
              Transform Your Vision Into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Digital Masterpieces
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-10 max-w-xl">
              We craft premium websites and mobile applications that blend
              stunning design with cutting-edge technology. Our solutions are
              engineered for performance, optimized for growth, and built to
              deliver tangible business results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-16">
              <Link href="#contact" className="flex-1">
                <Button className="group w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-base md:text-lg px-6 py-5 md:px-8 md:py-6 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40">
                  <span className="mr-2">Start Your Project</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="#portfolio" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full text-base md:text-lg px-6 py-5 md:px-8 md:py-6 border-2 border-white/20 bg-transparent text-white hover:bg-white/10 rounded-xl backdrop-blur-sm transition-colors"
                >
                  View Case Studies
                </Button>
              </Link>
            </div>

            {/* Stats - Improved layout for mobile */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-xl">
              {[
                { num: "50+", text: "Projects" },
                { num: "24/7", text: "Support" },
                { num: "98%", text: "Satisfaction" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-b from-white/5 to-white/10 p-3 md:p-4 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white text-center">
                    {stat.num}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-300 text-center mt-1">
                    {stat.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual Elements (HIDDEN ON MOBILE) */}
          {!isMobile && (
            <motion.div
              className="relative w-full lg:w-auto"
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {/* Floating device mockups */}
              <div className="relative h-[500px]">
                {/* Laptop mockup */}
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[250px] bg-gray-900 rounded-xl border border-gray-700/50 shadow-2xl"
                  style={{ transformOrigin: "center" }}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, -1, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-800/30 rounded-xl overflow-hidden">
                    <div className="absolute inset-3 bg-gray-800 rounded-lg overflow-hidden border border-gray-700/50">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
                      <div className="grid grid-cols-3 gap-2 p-4">
                        {[...Array(9)].map((_, i) => (
                          <div
                            key={i}
                            className="aspect-square bg-gray-700/30 rounded"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gray-800 rounded-b-full"></div>
                </motion.div>

                {/* Floating phone mockups */}
                <motion.div
                  className="absolute bottom-10 left-10 w-[140px] h-[280px] bg-gray-900 rounded-[30px] border border-gray-700/50 shadow-xl"
                  animate={{
                    y: [0, 20, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    delay: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-cyan-800/30 rounded-[30px] overflow-hidden">
                    <div className="absolute inset-2 bg-gray-800 rounded-[24px] overflow-hidden border border-gray-700/50">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />
                      <div className="flex flex-col gap-2 p-3">
                        <div className="h-3 bg-gray-700/30 rounded"></div>
                        <div className="h-3 w-2/3 bg-gray-700/30 rounded"></div>
                        <div className="h-3 w-1/2 bg-gray-700/30 rounded mt-2"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-20 right-10 w-[140px] h-[280px] bg-gray-900 rounded-[30px] border border-gray-700/50 shadow-xl"
                  animate={{
                    y: [0, 30, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    delay: 1,
                    ease: "easeInOut",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-900/30 to-rose-800/30 rounded-[30px] overflow-hidden">
                    <div className="absolute inset-2 bg-gray-800 rounded-[24px] overflow-hidden border border-gray-700/50">
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-pink-500/10" />
                      <div className="p-4">
                        <div className="h-20 w-20 mx-auto rounded-full bg-gray-700/30 mb-3"></div>
                        <div className="h-3 bg-gray-700/30 rounded mb-2"></div>
                        <div className="h-3 w-3/4 mx-auto bg-gray-700/30 rounded"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating tags */}
              <div className="absolute top-0 right-0 flex flex-wrap justify-end gap-2">
                {[
                  "Next.js",
                  "React Native",
                  "Tailwind",
                  "TypeScript",
                  "Framer Motion",
                ].map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="bg-white/10 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-medium border border-white/10"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
