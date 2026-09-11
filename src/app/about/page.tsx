import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-24">
      {/* Header Banner */}
      <section className="relative w-full h-[40vh] min-h-[300px] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-navy/90 z-10"></div>
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

      {/* About Section */}
      <section className="w-full py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            R Colors Group of Companies is a growing organization engaged in construction, contracting, real estate development, and property solutions. With a strong commitment to quality and professionalism, we focus on delivering reliable services that meet modern industry standards and client expectations.
          </p>
          <p>
            We combine expertise, innovation, and skilled workmanship to transform ideas into reality. Every project reflects our dedication to excellence, integrity, and client satisfaction. Our focus is on timely execution, safety standards, and long-term value creation.
          </p>
          <blockquote className="border-l-4 border-brand-sky pl-6 py-4 my-10 bg-gray-50 rounded-r-lg shadow-sm">
            <p className="text-2xl italic font-heading text-brand-navy font-semibold">
              &quot;At R Colors Group of Companies, we believe in building more than structures — we build trust, long-term relationships, and spaces that reflect quality, strength, and modern development.&quot;
            </p>
          </blockquote>
        </div>
      </section>

      {/* Director's Message */}
      <section className="w-full py-16 bg-gray-50 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-brand-sky shrink-0 shadow-xl">
            {/* Founder's Photo */}
            <Image src="/images/owner.jpg" alt="Raj Mani Singh - Founder & Director" width={300} height={300} className="w-full h-full object-cover" />
          </div>
          <div className="space-y-4">
            <h4 className="text-brand-sky font-bold uppercase tracking-wider mb-2">Director&apos;s Message</h4>
            <h2 className="text-3xl font-heading font-black text-brand-navy">Raj Mani Singh</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Progress for me has never been just a dream; it has always been a vision that turns into reality through dedication and continuous effort. With this belief, I founded R Colors Construction & Developers in 2011, with the aim of contributing to the construction industry through quality work, integrity, and strong professional values.
              </p>
              <p>
                Over the years, the company has grown steadily and established its presence in construction and development services. Our journey has been driven by commitment, hard work, and the trust of our clients and partners who have supported us at every stage.
              </p>
              <p>
                At R Colors Group of Companies, we continue to move forward with the same determination to achieve higher milestones. Our focus remains on delivering quality projects, maintaining transparency, and creating developments that provide long-term value for our clients and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Purpose */}
      <section className="w-full py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-navy">
            <h3 className="text-2xl font-heading font-black text-brand-navy mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-sky text-white flex items-center justify-center text-sm">M</span>
              MISSION
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              At R Colors Group of Companies, our mission is to deliver excellence across construction, contracting, and infrastructure development. We are committed to transforming ideas into strong, sustainable structures that reflect quality and precision. With a focus on integrity, professionalism, and timely execution, we ensure every project meets the highest standards of safety and craftsmanship. Our goal is to exceed client expectations while creating long-term value for communities and stakeholders.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-sky">
            <h3 className="text-2xl font-heading font-black text-brand-navy mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center text-sm">V</span>
              VISION
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Our vision is to become a trusted leader in the construction and infrastructure industry through innovation, reliability, and sustainable practices. We aim to expand our presence while delivering projects that symbolize strength and modern engineering. We envision building spaces that inspire growth and contribute to economic development. Through continuous improvement and advanced solutions, we strive to shape a better and stronger future.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-red">
            <h3 className="text-2xl font-heading font-black text-brand-navy mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center text-sm">P</span>
              PURPOSE
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              At R Colors Group of Companies, our purpose is to create spaces that improve everyday living and support business growth. We focus on delivering construction and development solutions that combine quality, strength, and long-term value for our clients and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-20 bg-brand-navy text-white px-4 relative">
        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-black mb-4">OUR CORE VALUES</h2>
              <div className="w-24 h-1 bg-brand-sky mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Integrity", desc: "We uphold the highest ethical standards in all our business dealings, ensuring transparency, honesty, and accountability across all divisions." },
                { title: "Quality Excellence", desc: "We are committed to delivering superior quality in construction, contracting, and infrastructure projects through skilled workmanship and strict quality control." },
                { title: "Innovation", desc: "Through R Colors Infratech, we adopt modern engineering practices, advanced technologies, and innovative solutions to meet evolving industry needs." },
                { title: "Safety", desc: "Safety is our top priority. We implement strict safety measures to ensure secure working environments for our employees, partners, and clients." },
                { title: "Client Commitment", desc: "We focus on understanding client requirements and delivering projects on time with complete satisfaction." }
              ].map((value, idx) => (
                <div key={idx} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20 flex flex-col items-start gap-4 hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-brand-sky flex items-center justify-center font-bold text-xl">{idx + 1}</div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-2">{value.title}</h3>
                    <p className="text-gray-300 text-sm">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-black text-brand-navy mb-4">OUR JOURNEY</h2>
            <div className="w-24 h-1 bg-brand-sky mx-auto"></div>
          </div>

          <div className="relative border-l-4 md:border-l-0 border-brand-sky ml-6 md:ml-0 md:pl-0">
            {[
              { year: "2011", title: "R Colors Construction & Developers Founded", desc: "Started our journey with a commitment to quality in the construction industry." },
              { year: "Expansion", title: "R Colors Infratech Launched", desc: "Expanded into real estate and property solutions." },
              { year: "Growth", title: "R Colors Finishing Division Launched", desc: "Added specialized interior, exterior, and finishing services." },
              { year: "Today", title: "R Colors Group of Companies", desc: "Operating as a unified group with 3 specialized divisions delivering complete infrastructure solutions." }
            ].map((event, idx) => (
              <div key={idx} className={`mb-10 md:mb-16 relative md:w-1/2 ${idx % 2 === 0 ? "md:mr-auto md:pr-12 md:text-right" : "md:ml-auto md:pl-12"} pl-8 md:pl-0`}>
                <div className={`absolute top-0 w-6 h-6 rounded-full bg-brand-sky border-4 border-white shadow -left-[15px] md:-left-[15px] ${idx % 2 === 0 ? "md:-right-[15px] md:left-auto" : "md:-left-[15px]"}`}></div>
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-navy">
                  <span className="text-brand-sky font-bold uppercase tracking-wider text-sm">{event.year}</span>
                  <h3 className="font-heading font-bold text-xl text-brand-navy mt-1 mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm">{event.desc}</p>
                </div>
              </div>
            ))}
            {/* Center line for desktop */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -ml-0.5 w-1 bg-brand-sky"></div>
          </div>
        </div>
      </section>

    </main>
  );
}
