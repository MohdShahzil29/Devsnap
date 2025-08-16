"use client";
import React from "react";
import {
  Clock,
  TrendingUp,
  Search,
  DollarSign,
  MessageCircle,
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Most sites live in 7–14 days",
    detail:
      "We work with proven processes and templates to deliver quality websites quickly without compromising on design or functionality.",
  },
  {
    icon: TrendingUp,
    title: "Conversion-First",
    description: "Copy, layout, & CTAs optimized",
    detail:
      "Every element is designed to turn visitors into customers. We focus on psychology-driven design and persuasive copywriting.",
  },
  {
    icon: Search,
    title: "SEO-Ready",
    description: "Clean structure, meta, sitemaps",
    detail:
      "Your website will be built with SEO best practices from day one, ensuring better visibility on search engines.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden costs",
    detail:
      "What you see is what you pay. All costs are discussed upfront with flexible payment options available.",
  },
  {
    icon: MessageCircle,
    title: "Support on WhatsApp",
    description: "Quick responses",
    detail:
      "Get instant support and updates via WhatsApp. No waiting for emails or support tickets.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Us
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            We combine speed, strategy, and support to give you an edge in the
            digital world.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-xl border border-gray-100 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute -top-6 left-6 w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon size={26} />
                </div>
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative background shapes */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 -left-20 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>
    </section>
  );
};

export default WhyChooseUs;
