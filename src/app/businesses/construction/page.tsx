import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export default function ConstructionBusinessPage() {
  const services = [
    {
      title: "Residential Construction",
      desc: "We build modern homes and housing projects with quality craftsmanship, safety, and long-term durability. We understand that a home is more than a structure, it is a reflection of lifestyle and aspirations. Our residential projects are executed with quality materials, efficient planning, and attention to detail to ensure durability and comfort."
    },
    {
      title: "Commercial Construction",
      desc: "We develop strong and functional commercial spaces tailored to business growth and performance. We deliver commercial projects that combine functionality, strength, and modern design. From office buildings to retail spaces, our team ensures efficient planning and high standards to support business growth and performance."
    },
    {
      title: "Builder & Development",
      desc: "We develop residential and commercial projects from land planning to construction. Our focus is on quality development and successful property delivery. Our team focuses on quality development, strong structures, and successful project delivery with efficient planning and professional execution."
    },
    {
      title: "Project Management Consultancy (PMC)",
      desc: "We provide professional planning, supervision, and coordination for construction projects, ensuring quality work and timely completion. Our PMC services ensure proper planning, supervision, and coordination throughout the construction process. We focus on quality standards, efficient execution, and timely completion of projects."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center pb-24">
      <PageHeader
        titlePart1="OUR"
        titlePart2="BUSINESSES"
        subNavItems={[
          { name: 'Construction & Developers', href: '/businesses/construction' },
          { name: 'Finishing Works', href: '/businesses/r-colors' },
          { name: 'Estate', href: '/businesses/estate' },
        ]}
      />

      {/* Intro Copy */}
      <section data-aos="fade-up" data-aos-duration="1000" className="w-full py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 text-lg leading-relaxed md:text-xl">
            R Colors Construction & Development specializes in delivering high-quality residential, commercial, and development projects with precision and reliability. We focus on structural strength, modern design, and timely execution to create lasting value for our clients. Our expertise covers end-to-end project execution, from planning and structural work to finishing and final handover.
          </p>
        </div>
      </section>

      {/* 4 Numbered Core Services */}
      <section data-aos="fade-up" data-aos-duration="1000" className="w-full py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-32 md:space-y-40">

          {services.map((service, idx) => {
            return (
              <div key={idx} className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative w-full max-w-[300px] h-[250px] sm:max-w-[400px] sm:h-[320px] md:max-w-[500px] md:h-[450px] z-10 bg-white p-8 rounded-3xl shadow-xl">
                    <div className="relative w-full h-full">
                      <Image src="/images/logo.jpg" alt="Logo" fill className="object-contain" />
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
      <section data-aos="fade-up" data-aos-duration="1000" className="w-full py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto bg-brand-navy text-white rounded-2xl p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-sky/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <h2 className="text-3xl font-heading font-black mb-6 relative z-10">See Our Work in Action</h2>
          <p className="text-gray-300 mb-8 text-lg relative z-10">
            Explore our portfolio of successfully delivered residential and commercial projects.
          </p>
          <Link href="/projects?business=construction" className="inline-flex items-center space-x-2 bg-brand-sky text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-brand-navy transition-colors relative z-10">
            <span>View Our Construction Projects</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </main>
  );
}
