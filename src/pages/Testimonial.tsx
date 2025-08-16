// "use client";
// import React, { useRef, useEffect } from "react";
// import { Star } from "lucide-react";

// const testimonials = [
//   {
//     name: "Aarav Mehta",
//     role: "Founder, Growthify",
//     feedback:
//       "They built our site in just 10 days with stunning design and smooth UX. Our conversion rate jumped by 35% in the first month!",
//     rating: 5,
//   },
//   {
//     name: "Priya Sharma",
//     role: "CEO, BrandNest",
//     feedback:
//       "The team truly understands business goals. The SEO-ready structure gave us a huge boost in search rankings.",
//     rating: 5,
//   },
//   {
//     name: "Rohit Kapoor",
//     role: "Marketing Head, AdSphere",
//     feedback:
//       "Their transparent pricing and WhatsApp support made the whole process hassle-free. Highly recommend them!",
//     rating: 5,
//   },
// ];

// const TestimonialCard = ({ testimonial }) => {
//   return (
//     <div className="flex-shrink-0 w-80 sm:w-auto group relative bg-white/80 backdrop-blur-xl border border-gray-100 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
//       <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
//       <p className="text-sm text-gray-500">{testimonial.role}</p>

//       <p className="mt-4 text-gray-600 leading-relaxed">
//         {testimonial.feedback}
//       </p>

//       <div className="flex items-center gap-1 mt-4 text-yellow-400">
//         {[...Array(testimonial.rating)].map((_, i) => (
//           <Star key={i} size={18} fill="currentColor" />
//         ))}
//       </div>

//       <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition" />
//     </div>
//   );
// };

// const Testimonials = () => {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     if (!scrollContainer) return;

//     let scrollAmount = 0;
//     const cardWidth = 320; // approx width (w-80)
//     const gap = 24; // gap-6
//     const totalScroll = cardWidth + gap;

//     const autoScroll = setInterval(() => {
//       if (
//         scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
//         scrollContainer.scrollWidth
//       ) {
//         scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
//         scrollAmount = 0;
//       } else {
//         scrollAmount += totalScroll;
//         scrollContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
//       }
//     }, 3000); // every 3 seconds

//     return () => clearInterval(autoScroll);
//   }, []);

//   return (
//     <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
//         <div className="text-center mb-14">
//           <h2 className="text-4xl font-extrabold text-gray-900">
//             What Our{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
//               Clients Say
//             </span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
//             Real feedback from business owners who trusted us to build their
//             digital presence.
//           </p>
//         </div>

//         {/* Mobile: horizontal scroll with auto-scroll, Desktop: grid */}
//         <div
//           ref={scrollRef}
//           className="flex gap-6 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 sm:overflow-visible no-scrollbar"
//         >
//           {testimonials.map((testimonial, index) => (
//             <TestimonialCard key={index} testimonial={testimonial} />
//           ))}
//         </div>
//       </div>

//       <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
//       <div className="absolute bottom-0 -right-20 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>
//     </section>
//   );
// };

// export default Testimonials;

"use client";

import React, { useRef, useEffect } from "react";
import { Star } from "lucide-react";

// --- Types ---
type Testimonial = {
  name: string;
  role: string;
  feedback: string;
  rating: number;
};

type TestimonialCardProps = {
  testimonial: Testimonial;
};

// --- Data ---
const testimonials: Testimonial[] = [
  {
    name: "Aarav Mehta",
    role: "Founder, Growthify",
    feedback:
      "They built our site in just 10 days with stunning design and smooth UX. Our conversion rate jumped by 35% in the first month!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "CEO, BrandNest",
    feedback:
      "The team truly understands business goals. The SEO-ready structure gave us a huge boost in search rankings.",
    rating: 5,
  },
  {
    name: "Rohit Kapoor",
    role: "Marketing Head, AdSphere",
    feedback:
      "Their transparent pricing and WhatsApp support made the whole process hassle-free. Highly recommend them!",
    rating: 5,
  },
];

// --- Components ---
const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="flex-shrink-0 w-80 sm:w-auto group relative bg-white/80 backdrop-blur-xl border border-gray-100 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
      <p className="text-sm text-gray-500">{testimonial.role}</p>

      <p className="mt-4 text-gray-600 leading-relaxed">
        {testimonial.feedback}
      </p>

      <div className="flex items-center gap-1 mt-4 text-yellow-400">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={18} fill="currentColor" />
        ))}
      </div>

      <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition" />
    </div>
  );
};

// --- Main Component ---
const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const cardWidth = 320; // approximate width (w-80)
    const gap = 24; // gap-6
    const totalScroll = cardWidth + gap;

    const autoScroll = setInterval(() => {
      if (
        scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
        scrollContainer.scrollWidth
      ) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        scrollAmount = 0;
      } else {
        scrollAmount += totalScroll;
        scrollContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }
    }, 3000); // every 3 seconds

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Clients Say
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Real feedback from business owners who trusted us to build their
            digital presence.
          </p>
        </div>

        {/* Mobile: horizontal scroll with auto-scroll, Desktop: grid */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 sm:overflow-visible no-scrollbar"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>

      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 -right-20 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>
    </section>
  );
};

export default Testimonials;
