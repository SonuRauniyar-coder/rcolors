import Link from "next/link";
import { ArrowRight, Building, Home, HardHat, FileSignature } from "lucide-react";

export default function ConstructionDivisionPage() {
  const services = [
    {
      title: "Residential Construction",
      desc: "We build modern homes and housing projects with quality craftsmanship, safety, and long-term durability. We understand that a home is more than a structure, it is a reflection of lifestyle and aspirations. Our residential projects are executed with quality materials, efficient planning, and attention to detail to ensure durability and comfort.",
      icon: Home
    },
    {
      title: "Commercial Construction",
      desc: "We develop strong and functional commercial spaces tailored to business growth and performance. We deliver commercial projects that combine functionality, strength, and modern design. From office buildings to retail spaces, our team ensures efficient planning and high standards to support business growth and performance.",
      icon: Building
    },
    {
      title: "Builder & Development",
      desc: "We develop residential and commercial projects from land planning to construction. Our focus is on quality development and successful property delivery. Our team focuses on quality development, strong structures, and successful project delivery with efficient planning and professional execution.",
      icon: HardHat
    },
    {
      title: "Project Management Consultancy (PMC)",
      desc: "We provide professional planning, supervision, and coordination for construction projects, ensuring quality work and timely completion. Our PMC services ensure proper planning, supervision, and coordination throughout the construction process. We focus on quality standards, efficient execution, and timely completion of projects.",
      icon: FileSignature
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center pb-24">
      {/* Header Banner */}
      <section className="relative w-full h-[40vh] min-h-[300px] flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 bg-[url('/images/R%20Colors%20Company%20Profile%20Final%20(2)_page-0004.jpg')] bg-cover bg-center mix-blend-overlay opacity-40"></div>
        <div className="relative z-20 max-w-4xl mx-auto space-y-4">
          {/* <p className="text-brand-sky font-bold uppercase tracking-wider">Our Core Services</p> */}
          <div className="text-3xl md:text-5xl font-heading font-black text-white leading-tight">
            <span className="text-brand-red">R</span> COLORS CONSTRUCTION <br className="hidden md:block" /> & DEVELOPMENT
          </div>
          <div className="w-24 h-1 bg-brand-sky mx-auto mt-6"></div>
        </div>
      </section>

      {/* Intro Copy */}
      <section className="w-full py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 text-lg leading-relaxed md:text-xl">
            R Colors Construction & Development specializes in delivering high-quality residential, commercial, and development projects with precision and reliability. We focus on structural strength, modern design, and timely execution to create lasting value for our clients. Our expertise covers end-to-end project execution, from planning and structural work to finishing and final handover.
          </p>
        </div>
      </section>

      {/* 4 Numbered Core Services */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-12">

          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative w-64 h-64 flex items-center justify-center">
                    {/* Big background number */}
                    <div className="absolute inset-0 flex items-center justify-center font-heading font-black text-[180px] text-gray-200/50 -z-10 select-none">
                      0{idx + 1}
                    </div>
                    {/* Icon wheel */}
                    <div className="w-40 h-40 rounded-full bg-white shadow-2xl border-8 border-brand-navy flex items-center justify-center relative z-10">
                      <div className="w-full h-full rounded-full border-4 border-dashed border-brand-sky flex items-center justify-center animate-[spin_60s_linear_infinite]"></div>
                      <Icon size={64} className="text-brand-sky absolute" />
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 space-y-4">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-4xl font-heading font-black text-brand-sky">0{idx + 1}.</span>
                    <h3 className="text-3xl font-heading font-black text-brand-navy">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* View Projects CTA */}
      <section className="w-full py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto bg-brand-navy text-white rounded-2xl p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-sky/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <h2 className="text-3xl font-heading font-black mb-6 relative z-10">See Our Work in Action</h2>
          <p className="text-gray-300 mb-8 text-lg relative z-10">
            Explore our portfolio of successfully delivered residential and commercial projects.
          </p>
          <Link href="/projects?division=construction" className="inline-flex items-center space-x-2 bg-brand-sky text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-brand-navy transition-colors relative z-10">
            <span>View Our Construction Projects</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </main>
  );
}
