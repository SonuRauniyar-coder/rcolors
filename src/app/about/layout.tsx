"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section data-aos="fade-up" data-aos-duration="1000" className="relative w-full h-[40vh] min-h-[300px] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-navy z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/R%20Colors%20Company%20Profile%20Final%20(2)_page-0003.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-20 max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white">
            ABOUT <span className="text-brand-sky">US</span>
          </h1>
          <div className="w-24 h-1 bg-brand-sky mx-auto"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg className="relative block w-full h-8 md:h-16" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 120 0 0 1200 120z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Content */}
      <main className="flex-grow w-full pb-24">
        {children}
      </main>
    </div>
  );
}
