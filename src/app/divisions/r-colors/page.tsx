import Link from "next/link";
import { PaintRoller, Scissors, LayoutGrid, Droplet, Sofa, Zap, Wrench, Hammer, ArrowRight } from "lucide-react";

export default function RColorsFinishingPage() {
  const services = [
    {
      title: "Interior & Exterior Painting",
      desc: "We provide high-quality interior and exterior painting services for residential and commercial projects. Our finishes enhance both protection and visual appeal. Using premium materials and modern application techniques, we ensure smooth surfaces and long-lasting durability. Our team focuses on precision, surface preparation, and timely completion for flawless results.",
      icon: PaintRoller
    },
    {
      title: "POP & Gypsum Work",
      desc: "We deliver elegant POP and gypsum solutions for ceilings and decorative interiors. Our designs enhance structural appeal while adding a refined and modern finish to every space. From false ceilings to customized patterns, we ensure accurate installation and clean finishing. Our team focuses on detailed craftsmanship, proper alignment, and durable materials to maintain long-term strength and aesthetic consistency.",
      icon: Scissors
    },
    {
      title: "Tiles & Marble Installation",
      desc: "We specialize in precise tile and marble installation for floors and walls. Our work combines strength with refined finishing and elegant surface detailing. Our team ensures proper alignment, secure fitting, and smooth surface finishing. We focus on durability, neat execution, and long-lasting performance to achieve premium results. Every installation is carried out with careful planning and attention to detail.",
      icon: LayoutGrid
    },
    {
      title: "Waterproofing Solutions",
      desc: "We provide reliable waterproofing services to protect buildings from leakage and moisture damage. Our solutions increase structural lifespan. Using advanced materials and proven industry methods, we seal vulnerable areas effectively and precisely. Our approach ensures long-term protection and reduced future maintenance concerns.",
      icon: Droplet
    },
    {
      title: "Furniture & Interior Work",
      desc: "We offer customized furniture and interior finishing solutions tailored to client requirements. Our work balances functionality and design. From modular units to complete interior setups, we use premium quality materials and skilled workmanship. We ensure long-term durability, smart space optimization, and elegant overall presentation.",
      icon: Sofa
    },
    {
      title: "Electrical Services",
      desc: "We handle safe and efficient electrical installations for residential and commercial projects. Our systems ensure reliable performance. Our team follows proper wiring standards and safety protocols with strict quality supervision. We deliver structured planning and smooth execution for long-term operational safety and dependable functionality.",
      icon: Zap
    },
    {
      title: "Plumbing Services",
      desc: "We provide professional plumbing solutions for new construction and renovation projects. Our installations ensure efficient water flow and drainage. With careful planning and quality fittings, we prevent leakage and future maintenance issues effectively. Our work supports durability, safety standards, and seamless system functionality.",
      icon: Wrench
    },
    {
      title: "Renovation & Repair Services",
      desc: "We offer renovation and repair solutions to upgrade and restore existing spaces. Our services improve structural strength and overall appearance. From surface corrections to complete refurbishment, we manage projects with precision and care at every stage. Our goal is to deliver enhanced value, improved functionality, and renewed durability.",
      icon: Hammer
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center pb-24">
      {/* Header Banner */}
      <section className="w-full bg-brand-navy py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white">
            <span className="text-brand-red">R</span> COLORS
          </h1>
          <p className="text-brand-sky font-bold uppercase tracking-widest">Finishing Works & Interior Solutions</p>
          <div className="w-24 h-1 bg-brand-sky mx-auto mt-6"></div>
        </div>
      </section>

      {/* Intro Copy */}
      <section className="w-full py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 text-lg leading-relaxed md:text-xl">
            R Colors delivers high-quality finishing and interior solutions designed to enhance durability, functionality, and aesthetic appeal. We ensure precision, professional workmanship, and timely execution across all projects. With experienced teams and structured processes, we focus on delivering reliable results that meet client expectations. Our commitment to quality standards and attention to detail ensures every project reflects excellence and long-term value.
          </p>
        </div>
      </section>

      {/* Services Grid (Sherwin-Williams inspired, bright tiles) */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group hover:-translate-y-1">
                <div className="w-16 h-16 mb-6">
                  {/* Hexagon shape using clip-path */}
                  <div className="w-full h-full bg-brand-sky/10 flex items-center justify-center text-brand-sky group-hover:bg-brand-sky group-hover:text-white transition-colors" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    <Icon size={28} />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-navy mb-4">{service.title}</h3>
                <div className="text-gray-600 text-sm space-y-3 flex-grow">
                  {service.desc.split('. ').map((sentence, i, arr) => (
                    <p key={i}>{sentence}{i !== arr.length - 1 ? '.' : ''}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* View Projects CTA */}
      <section className="w-full pt-16 px-4 text-center">
        <div className="max-w-3xl mx-auto border-t-2 border-brand-sky pt-16">
          <h2 className="text-3xl font-heading font-black text-brand-navy mb-6">Explore Our Finishing Projects</h2>
          <p className="text-gray-600 mb-8 text-lg">
            See how we transform spaces with our premium finishing and interior solutions.
          </p>
          <Link href="/projects?division=r-colors" className="inline-flex items-center space-x-2 bg-brand-navy text-white px-8 py-4 rounded font-bold hover:bg-brand-sky transition-colors">
            <span>View Portfolio</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </main>
  );
}
