import Image from "next/image";
import Hero from "@/pages/Hero";
import Service from "@/pages/Service";
import WhyChooseUs from "@/pages/WhyChooseUs";
import Testimonials from "@/pages/Testimonial";
import Footer from "@/pages/Footer";

export default function Home() {
  return (
    <div className="h-screen">
      <main>
        <Hero />
        <Service />
        <WhyChooseUs />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}
