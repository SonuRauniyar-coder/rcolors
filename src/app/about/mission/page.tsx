"use client";

import { Handshake, Award, Lightbulb, ShieldCheck, MessageSquareCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function MissionVisionPage() {
  return (
    <div className="w-full">
      <PageHeader 
        titlePart1="MISSION &" 
        titlePart2="VISION" 
        subNavItems={[
          { name: 'About Company', href: '/about' },
          { name: 'Mission & Vision', href: '/about/mission' },
          { name: 'Clients', href: '/about/clients' },
        ]} 
      />

      <section data-aos="fade-up" data-aos-duration="1000" className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              letter: "M", title: "MISSION",
              text: "At R Colors Group of Companies, our mission is to deliver excellence across construction, contracting, and infrastructure development. We are committed to transforming ideas into strong, sustainable structures that reflect quality and precision. With a focus on integrity, professionalism, and timely execution, we ensure every project meets the highest standards of safety and craftsmanship. Our goal is to exceed client expectations while creating long-term value for communities and stakeholders.",
            },
            {
              letter: "V", title: "VISION",
              text: "Our vision is to become a trusted leader in the construction and infrastructure industry through innovation, reliability, and sustainable practices. We aim to expand our presence while delivering projects that symbolize strength and modern engineering. We envision building spaces that inspire growth and contribute to economic development. Through continuous improvement and advanced solutions, we strive to shape a better and stronger future.",
            },
            {
              letter: "P", title: "PURPOSE",
              text: "At R Colors Group of Companies, our purpose is to create spaces that improve everyday living and support business growth. We focus on delivering construction and development solutions that combine quality, strength, and long-term value for our clients and communities.",
            },
          ].map((card) => (
            <div key={card.letter} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-sky hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-heading font-black text-brand-navy mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center text-base font-black shrink-0">{card.letter}</span>
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section data-aos="fade-up" data-aos-duration="1000" className="w-full py-20 bg-gray-50 text-brand-navy px-4 relative">
        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-black text-brand-navy mb-4">OUR CORE VALUES</h2>
              <div className="w-24 h-1 bg-brand-sky mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Integrity", desc: "We uphold the highest ethical standards in all our business dealings, ensuring transparency, honesty, and accountability across all businesses.", icon: Handshake },
                { title: "Quality Excellence", desc: "We are committed to delivering superior quality in construction, contracting, and infrastructure projects through skilled workmanship and strict quality control.", icon: Award },
                { title: "Innovation", desc: "Through R Colors Estate, we adopt modern engineering practices, advanced technologies, and innovative solutions to meet evolving industry needs.", icon: Lightbulb },
                { title: "Safety", desc: "Safety is our top priority. We implement strict safety measures to ensure secure working environments for our employees, partners, and clients.", icon: ShieldCheck },
                { title: "Client Commitment", desc: "We focus on understanding client requirements and delivering projects on time with complete satisfaction.", icon: MessageSquareCheck },
              ].map((value, idx) => (
                <div key={idx} className="bg-brand-navy rounded-lg shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-brand-sky" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg md:text-xl mb-2">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
              <div className="bg-brand-sky rounded-lg shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col justify-center items-start text-white">
                <h3 className="font-heading font-bold text-lg md:text-xl mb-2">See it in action</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4">Explore the projects built on these values.</p>
                <Link href="/projects" className="inline-flex items-center gap-2 bg-white text-brand-navy font-semibold text-sm px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  View projects <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
