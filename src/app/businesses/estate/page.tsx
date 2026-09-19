import Link from "next/link";
import { CheckCircle, ArrowRight, Building2, Handshake, TrendingUp, Map } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export default function EstateBusinessPage() {
  const checklist = [
    "Residential Plot Sales",
    "Ready-to-Move Property Sales",
    "Commercial Property Deals",
    "Source Selling & Project Marketing",
    "Investment Consultancy",
    "Joint Development Partnerships",
    "Property Sourcing & Channel Sales"
  ];

  const services = [
    {
      title: "Residential & Commercial Sales",
      desc: "We deal in plots, houses, flats, shops, and commercial spaces with proper documentation and verified listings.",
      icon: Building2
    },
    {
      title: "Property Source Selling & Channel Partner Services",
      desc: "We work with developers and builders to market and sell residential and commercial projects, connecting genuine buyers for smooth and efficient deals.",
      icon: Handshake
    },
    {
      title: "Investment Guidance",
      desc: "We help clients identify high-potential properties for long-term growth and strong returns with strategic planning and expert insights.",
      icon: TrendingUp
    },
    {
      title: "Partnership & Land Development",
      desc: "We work with landowners and developers to create profitable development opportunities and joint ventures.",
      icon: Map
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center pb-24">
      <PageHeader 
        titlePart1="OUR" 
        titlePart2="BUSINESSES" 
        subNavItems={[
          { name: 'Construction & Developers', href: '/businesses/construction' },
          { name: 'R Colors (Finishing Works)', href: '/businesses/r-colors' },
          { name: 'Estate', href: '/businesses/estate' },
        ]} 
      />

      {/* Intro & Checklist */}
      <section data-aos="fade-up" data-aos-duration="1000" className="w-full py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-navy">Connecting You to the Right Property Solutions</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              R Colors Estate specializes in property sales, plot development, and real estate partnerships. We connect buyers, investors, and developers through transparent and reliable property solutions.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Whether you are looking for a residential plot, commercial space, or investment opportunity, our experienced team ensures a seamless and professional experience.
            </p>
          </div>

          <div className="bg-brand-navy p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-sky/20 rounded-full blur-2xl"></div>

            <h3 className="text-2xl font-heading font-bold text-white mb-6 border-b border-white/20 pb-4">Our Expertise</h3>
            <ul className="space-y-4">
              {checklist.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-white">
                  <CheckCircle className="text-brand-sky shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Expanded Services */}
      <section data-aos="fade-up" data-aos-duration="1000" className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-black text-brand-navy mb-4">Your Partner in Property Success</h2>
            <div className="w-24 h-1 bg-brand-sky mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
                  <div className="bg-brand-sky/10 px-8 py-6 flex items-center gap-4 border-b border-brand-sky/20">
                    <div className="w-12 h-12 rounded-full bg-brand-sky flex items-center justify-center text-white shrink-0 shadow-md">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-brand-navy">{service.title}</h3>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section data-aos="fade-up" data-aos-duration="1000" className="w-full py-20 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-2 bg-brand-navy p-8 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-sky/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              <h3 className="text-3xl font-heading font-black mb-4 relative z-10">Enquire About a Property</h3>
              <p className="text-gray-300 relative z-10 mb-8">
                Looking for a plot, ready-to-move home, or commercial space? Drop us a line and our real estate experts will get back to you shortly.
              </p>
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <CheckCircle className="text-brand-sky" size={18} />
                  </div>
                  <span className="text-sm font-semibold">Verified Listings</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <CheckCircle className="text-brand-sky" size={18} />
                  </div>
                  <span className="text-sm font-semibold">Transparent Deals</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 p-8 md:p-10">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input type="text" id="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-sky focus:border-brand-sky outline-none transition-colors" placeholder="e.g. Rahul Sharma" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-sky focus:border-brand-sky outline-none transition-colors" placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-sky focus:border-brand-sky outline-none transition-colors" placeholder="rahul@example.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">Interested In *</label>
                  <select id="interest" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-sky focus:border-brand-sky outline-none transition-colors bg-white">
                    <option value="">Select Property Type</option>
                    <option value="plot">Residential Plot</option>
                    <option value="ready">Ready-to-Move Home</option>
                    <option value="commercial">Commercial Space</option>
                    <option value="investment">Investment Opportunity</option>
                    <option value="partnership">Joint Development / Partnership</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea id="message" rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-sky focus:border-brand-sky outline-none transition-colors resize-none" placeholder="Any specific requirements or preferred location?"></textarea>
                </div>

                <button type="submit" className="w-full bg-brand-sky text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-brand-navy transition-colors">
                  <span>Submit Enquiry</span>
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
