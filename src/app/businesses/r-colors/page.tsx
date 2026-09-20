import Link from "next/link";
import Image from "next/image";
import { PaintRoller, Scissors, LayoutGrid, Droplet, Sofa, Zap, Wrench, Hammer, ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export default function RColorsFinishingPage() {
  const services = [
    {
      title: "Interior & Exterior Painting",
      desc: "We provide high-quality interior and exterior painting services for residential and commercial projects. Our finishes enhance both protection and visual appeal. Using premium materials and modern application techniques, we ensure smooth surfaces and long-lasting durability. Our team focuses on precision, surface preparation, and timely completion for flawless results.",
      icon: PaintRoller,
      image: "/images/Rcolors-1.jpg"
    },
    {
      title: "POP & Gypsum Work",
      desc: "We deliver elegant POP and gypsum solutions for ceilings and decorative interiors. Our designs enhance structural appeal while adding a refined and modern finish to every space. From false ceilings to customized patterns, we ensure accurate installation and clean finishing. Our team focuses on detailed craftsmanship, proper alignment, and durable materials to maintain long-term strength and aesthetic consistency.",
      icon: Scissors,
      image: "/images/Rcolors-2.jpg"
    },
    {
      title: "Tiles & Marble Installation",
      desc: "We specialize in precise tile and marble installation for floors and walls. Our work combines strength with refined finishing and elegant surface detailing. Our team ensures proper alignment, secure fitting, and smooth surface finishing. We focus on durability, neat execution, and long-lasting performance to achieve premium results.",
      icon: LayoutGrid,
      image: "/images/Rcolors-3.jpg"
    },
    {
      title: "Waterproofing Solutions",
      desc: "We provide reliable waterproofing services to protect buildings from leakage and moisture damage. Our solutions increase structural lifespan. Using advanced materials and proven industry methods, we seal vulnerable areas effectively and precisely. Our approach ensures long-term protection and reduced future maintenance concerns.",
      icon: Droplet,
      image: "/images/Rcolors-4.jpg"
    },
    {
      title: "Furniture & Interior Work",
      desc: "We offer customized furniture and interior finishing solutions tailored to client requirements. Our work balances functionality and design. From modular units to complete interior setups, we use premium quality materials and skilled workmanship. We ensure long-term durability, smart space optimization, and elegant overall presentation.",
      icon: Sofa,
      image: "/images/Rcolors-5.jpg"
    },
    {
      title: "Electrical Services",
      desc: "We handle safe and efficient electrical installations for residential and commercial projects. Our systems ensure reliable performance. Our team follows proper wiring standards and safety protocols with strict quality supervision. We deliver structured planning and smooth execution for long-term operational safety and dependable functionality.",
      icon: Zap,
      image: "/images/Rcolors-6.jpg"
    },
    {
      title: "Plumbing Services",
      desc: "We provide professional plumbing solutions for new construction and renovation projects. Our installations ensure efficient water flow and drainage. With careful planning and quality fittings, we prevent leakage and future maintenance issues effectively. Our work supports durability, safety standards, and seamless system functionality.",
      icon: Wrench,
      image: "/images/Rcolors-7.jpg"
    },
    {
      title: "Renovation & Repair Services",
      desc: "We offer renovation and repair solutions to upgrade and restore existing spaces. Our services improve structural strength and overall appearance. From surface corrections to complete refurbishment, we manage projects with precision and care at every stage. Our goal is to deliver enhanced value, improved functionality, and renewed durability.",
      icon: Hammer,
      image: "/images/Rcolors-8.jpg"
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
            R Colors delivers high-quality finishing and interior solutions designed to enhance durability, functionality, and aesthetic appeal. We ensure precision, professional workmanship, and timely execution across all projects. With experienced teams and structured processes, we focus on delivering reliable results that meet client expectations. Our commitment to quality standards and attention to detail ensures every project reflects excellence and long-term value.
          </p>
        </div>
      </section>

      {/* Services Grid (Sherwin-Williams inspired, bright tiles) */}
      <section data-aos="fade-up" data-aos-duration="1000" className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group hover:-translate-y-1 overflow-hidden">
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-brand-sky shadow-sm z-10 group-hover:bg-brand-sky group-hover:text-white transition-colors duration-300">
                    <Icon size={24} />
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-heading font-bold text-xl text-brand-navy mb-4 group-hover:text-brand-sky transition-colors duration-300">{service.title}</h3>
                  <div className="text-gray-600 text-sm space-y-3 flex-grow">
                    {service.desc.split('. ').map((sentence, i, arr) => (
                      <p key={i}>{sentence}{i !== arr.length - 1 ? '.' : ''}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* View Projects CTA */}
      <section data-aos="fade-up" data-aos-duration="1000" className="w-full pt-16 px-4 text-center">
        <div className="max-w-3xl mx-auto border-t-2 border-brand-sky pt-16">
          <h2 className="text-3xl font-heading font-black text-brand-navy mb-6">Explore Our Finishing Projects</h2>
          <p className="text-gray-600 mb-8 text-lg">
            See how we transform spaces with our premium finishing and interior solutions.
          </p>
          <Link href="/projects?business=r-colors" className="inline-flex items-center space-x-2 bg-brand-navy text-white px-8 py-4 rounded font-bold hover:bg-brand-sky transition-colors">
            <span>View Portfolio</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </main>
  );
}
