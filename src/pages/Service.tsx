"use client";
import React, { useState } from "react";
import {
  Globe,
  Smartphone,
  ShoppingCart,
  Tablet,
  Target,
  Headphones,
  Rocket,
  Zap,
  Shield,
  BarChart2,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Website",
    description: "5–10 pages, blazing speed, contact forms, WhatsApp chat.",
    features: [
      "Mobile-first design",
      "Contact forms",
      "WhatsApp integration",
      "Basic SEO",
    ],
    price: "Starting ₹14,999",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps (iOS & Android)",
    description: "Cross-platform apps with native performance and modern UI.",
    features: [
      "React Native/Flutter",
      "App Store deployment",
      "Push notifications",
      "Offline support",
    ],
    price: "Starting ₹49,999",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Setup",
    description: "Product catalog, payments, order tracking, COD-ready.",
    features: [
      "Product management",
      "Payment gateway",
      "Order tracking",
      "COD support",
    ],
    price: "Starting ₹34,999",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Tablet,
    title: "Web Apps & PWAs",
    description: "Progressive web apps that work like native mobile apps.",
    features: [
      "App-like experience",
      "Offline functionality",
      "Push notifications",
      "App store ready",
    ],
    price: "Starting ₹29,999",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Target,
    title: "Landing Pages for Ads",
    description: "High-converting pages for Meta/Google Ads.",
    features: [
      "Conversion optimized",
      "A/B test ready",
      "Fast loading",
      "Analytics setup",
    ],
    price: "Starting ₹9,999",
    gradient: "from-teal-500 to-blue-500",
  },
  {
    icon: Headphones,
    title: "Website Care & SEO",
    description: "Monthly updates, security, on-page SEO, blog setup.",
    features: [
      "Monthly updates",
      "Security monitoring",
      "SEO optimization",
      "Content support",
    ],
    price: "Starting ₹1,999/mo",
    gradient: "from-indigo-500 to-purple-500",
  },
];

const stats = [
  { value: "120+", label: "Projects Delivered", icon: Rocket },
  { value: "98%", label: "Client Satisfaction", icon: Zap },
  { value: "24/7", label: "Support", icon: Shield },
  { value: "45%", label: "Growth on Average", icon: BarChart2 },
];

const ServiceCard = ({ service, expanded, onToggle }) => {
  const Icon = service.icon;

  return (
    <div
      className={`relative rounded-2xl overflow-hidden border transition-all duration-500 ease-in-out ${
        expanded ? "h-auto border-blue-200" : "h-24 border-gray-200"
      } bg-white shadow-sm`}
    >
      <div
        className="p-4 flex items-center cursor-pointer hover:bg-gray-50"
        onClick={onToggle}
      >
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
            expanded
              ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white"
              : `bg-gradient-to-br ${service.gradient} text-white`
          }`}
        >
          <Icon size={24} />
        </div>
        <div className="ml-4 flex-1">
          <h3 className="font-bold text-gray-900">{service.title}</h3>
          {expanded && (
            <p className="text-gray-600 mt-1">{service.description}</p>
          )}
        </div>
        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100">
          {expanded ? (
            <ChevronUp className="text-gray-700" size={20} />
          ) : (
            <ChevronDown className="text-gray-700" size={20} />
          )}
        </div>
      </div>

      {expanded && (
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <Check size={18} className="text-green-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900">
              {service.price}
            </span>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-lg flex items-center hover:from-blue-700 hover:to-cyan-600">
              Get Started <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Service = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-1 rounded-full mb-6">
            <Rocket className="mr-2" size={18} />
            <span>Premium Digital Solutions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Premium Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional solutions tailored to elevate your digital presence and
            drive business growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              expanded={expandedCard === index}
              onToggle={() => toggleCard(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
