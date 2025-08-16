"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0a0a1a] via-[#1a093a] to-[#2c0b3d] text-white relative overflow-hidden">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
        {/* About */}
        <div>
          <h2 className="text-white text-2xl font-bold">DevSnap</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/90">
            We craft high-converting, SEO-friendly, and beautifully designed
            websites that help your business grow faster.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About Us", "Services", "Portfolio", "Contact"].map(
              (link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-yellow-200 transition duration-200"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-yellow-200" />
              Bareilly, India
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-yellow-200" />
              +91 9027800636
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-yellow-200" />
              mohdshahzil22@gmail.com
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Stay Updated
          </h3>
          <p className="text-sm mb-4 text-white/90">
            Subscribe to our newsletter and never miss updates, tips, and
            special offers.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-xl bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-yellow-300 text-black font-semibold hover:bg-yellow-200 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20 py-4 px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Dev snap. All rights reserved.
        </p>
        <div className="flex gap-4">
          {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-yellow-300 hover:text-black transition"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
