"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
// finishing works, Sales & purchase , Beyond your imagination 
const slides = [
  { image: "/images/home1.jpg", text: "R Colors Group Of Companies" },
  { image: "/images/home2.jpg", text: "R Colors Construction and Developers" },
  { image: "/images/home3.jpg", text: "R Colors" },
  { image: "/images/home4.jpg", text: "R Colors Estate" },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds interval
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen min-h-[600px] overflow-hidden bg-brand-navy">
      {/* Background Images */}
      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out z-0 ${isActive ? "opacity-100" : "opacity-0"
              }`}
          >
            {/* Ken Burns effect: scale up slowly while active */}
            <div
              className={`relative w-full h-full transition-transform duration-[4000ms] ease-linear ${isActive ? "scale-105" : "scale-100"
                }`}
            >
              <Image
                src={slide.image}
                alt={slide.text}
                fill
                priority={index === 0}
                className="object-cover object-center"
              />
              {/* Dark overlay for contrast */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          </div>
        );
      })}

      {/* Gradient at the bottom for text readability */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none"></div>

      {/* Bottom Left Text */}
      <div className="absolute bottom-12 left-4 md:left-12 lg:left-24 z-20 w-[90%] md:max-w-4xl h-32 md:h-48 flex items-end">
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={index}
              className={`absolute bottom-0 left-0 w-full transition-all duration-1000 ease-in-out ${isActive
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-8 pointer-events-none"
                }`}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-light text-white tracking-wide drop-shadow-lg leading-tight md:leading-tight">
                {slide.text}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
