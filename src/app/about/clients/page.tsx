"use client";

import Image from "next/image";
import clientsData from "@/data/clients.json";

export default function ClientsPage() {
  const clientImages = Array.from({ length: 22 }, (_, i) => i + 1);

  return (
    <div className="w-full">
      <section data-aos="fade-up" data-aos-duration="1000" className="w-full py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h4 className="text-brand-sky font-bold uppercase tracking-wider mb-2">Our Network</h4>
            <h2 className="text-4xl font-heading font-black text-brand-navy">Trusted Clients</h2>
            <div className="w-24 h-1 bg-brand-sky mx-auto mt-4 mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are proud to collaborate with respected clients and development partners. Their trust reflects our commitment to quality, transparency, and long-term relationships.
            </p>
          </div>

          {/* Marquee rows */}
          <div className="relative w-full overflow-hidden max-w-full group py-4">
            {/* Row 1 — slides left */}
            <div className="flex w-max animate-marquee-left group-hover:[animation-play-state:paused] mb-6 gap-6 pl-6">
              {[...clientImages, ...clientImages, ...clientImages].map((imgNum, idx) => (
                <div key={`r1-${imgNum}-${idx}`} className="bg-white border border-gray-200 p-6 flex flex-col items-center justify-center h-36 w-60 hover:shadow-lg transition-all duration-300 flex-shrink-0">
                  <div className="relative w-full h-20 mb-2">
                    <Image src={`/images/${imgNum}.jpg`} alt={`Client ${imgNum}`} fill sizes="240px" className="object-contain transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 — slides right */}
            <div className="flex w-max animate-marquee-right group-hover:[animation-play-state:paused] gap-6 pl-6">
              {[...clientImages, ...clientImages, ...clientImages].map((imgNum, idx) => (
                <div key={`r2-${imgNum}-${idx}`} className="bg-white border border-gray-200 p-6 flex flex-col items-center justify-center h-36 w-60 hover:shadow-lg transition-all duration-300 flex-shrink-0">
                  <div className="relative w-full h-20 mb-2">
                    <Image src={`/images/${imgNum}.jpg`} alt={`Client ${imgNum}`} fill sizes="240px" className="object-contain transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Client name grid */}
          <div className="mt-16">
            <h3 className="text-center text-xl font-heading font-bold text-brand-navy mb-8 uppercase tracking-wider">
              Our Client Partners
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {clientsData.map((client) => (
                <div key={client.id} className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-center hover:border-brand-sky hover:bg-brand-sky/5 hover:shadow-sm transition-all duration-200">
                  <p className="text-xs font-semibold text-gray-700 leading-tight">{client.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
