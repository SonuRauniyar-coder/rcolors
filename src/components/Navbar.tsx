"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [forceClose, setForceClose] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleMenuClick = () => {
    setForceClose(true);
  };

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const headerBgClass = isHomePage && !isScrolled ? "bg-transparent" : "bg-white shadow-md";
  const headerPosClass = isHomePage ? "fixed top-0 left-0 right-0" : "sticky top-0";
  const textColorClass = isHomePage && !isScrolled ? "text-white" : "text-brand-navy";
  const logoRedClass = isHomePage && !isScrolled ? "text-white" : "text-brand-red";
  const logoGreenClass = isHomePage && !isScrolled ? "text-white" : "text-brand-green";

  return (
    <header className={`w-full z-50 transition-all duration-300 ${headerPosClass} ${headerBgClass}`}>
      {/* Main Header */}
      <div>
        <div className="w-full px-4 md:px-6 lg:px-8 py-1.5 md:py-2 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-6 lg:gap-10 ml-4 md:ml-8 lg:ml-16">
            <div className="relative w-[55px] h-[40px] -my-1.5 shrink-0">
              <Image src="/images/icon.jpg" alt="R Colors Group Logo" fill className="rounded-md object-cover" />
            </div>
            <div className="hidden sm:block whitespace-nowrap text-3xl lg:text-4xl font-heading font-bold tracking-tight">
              <span className={logoRedClass}>R </span>
              <span className={logoGreenClass}>Colors Group</span>
            </div>
          </Link>

          {/* Right Section Wrapper */}
          <div className="flex items-center mr-8 md:mr-12 lg:mr-24">
            {/* Desktop Nav */}
            <nav className={`hidden md:flex items-center space-x-6 lg:space-x-10 font-semibold text-sm lg:text-base whitespace-nowrap mr-6 lg:mr-10 ${textColorClass}`}>
              {/* About Us Mega Menu Trigger */}
              <div className="relative group cursor-pointer py-2" onMouseLeave={() => setForceClose(false)}>
                <div className="flex flex-col items-center group-hover:text-brand-sky transition-colors relative">
                  <Link href="/about">About Us</Link>
                  <div className="absolute -bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-current"></div>
                  </div>
                </div>
                {/* Mega Menu Dropdown */}
                <div className={`absolute top-[100%] left-0 w-64 bg-white shadow-2xl pt-4 pb-2 flex flex-col z-50 text-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ${forceClose ? '!opacity-0 !invisible' : ''}`}>
                  <Link href="/about" onClick={handleMenuClick} className="px-6 py-3 hover:text-brand-sky transition-colors text-[15px] font-medium">About Company</Link>
                  <Link href="/about/mission" onClick={handleMenuClick} className="px-6 py-3 hover:text-brand-sky transition-colors text-[15px] font-medium">Mission & Vision</Link>
                  <Link href="/about/clients" onClick={handleMenuClick} className="px-6 py-3 hover:text-brand-sky transition-colors text-[15px] font-medium">Clients</Link>
                </div>
              </div>
              <Link href="/why-us" className="hover:text-brand-sky transition-colors py-2">Why Us</Link>

              {/* Mega Menu Trigger */}
              <div className="relative group cursor-pointer py-2" onMouseLeave={() => setForceClose(false)}>
                <div className="flex flex-col items-center group-hover:text-brand-sky transition-colors relative">
                  <span>Our Businesses</span>
                  <div className="absolute -bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-current"></div>
                  </div>
                </div>
                {/* Mega Menu Dropdown */}
                <div className={`absolute top-[100%] left-0 w-[280px] bg-white shadow-2xl pt-4 pb-2 flex flex-col z-50 text-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ${forceClose ? '!opacity-0 !invisible' : ''}`}>
                  <Link href="/businesses/construction" onClick={handleMenuClick} className="px-6 py-3 hover:text-brand-sky transition-colors text-[15px] font-medium">Construction & Developers</Link>
                  <Link href="/businesses/r-colors" onClick={handleMenuClick} className="px-6 py-3 hover:text-brand-sky transition-colors text-[15px] font-medium">R Colors (Finishing Works)</Link>
                  <Link href="/businesses/estate" onClick={handleMenuClick} className="px-6 py-3 hover:text-brand-sky transition-colors text-[15px] font-medium">Estate</Link>
                </div>
              </div>

              <Link href="/projects" className="hover:text-brand-sky transition-colors">Projects</Link>
              {/* <Link href="/clients" className="hover:text-brand-sky transition-colors">Clients</Link> */}
              <Link href="/contact" className="hover:text-brand-sky transition-colors">Contact</Link>
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center space-x-4">
              <Link href="/contact" className="hidden md:inline-block bg-brand-sky text-white px-4 lg:px-6 py-2 rounded font-bold hover:bg-brand-navy transition-colors text-sm lg:text-base whitespace-nowrap">
                Get a Quote
              </Link>
              <button className={`md:hidden ${textColorClass}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t absolute w-full z-40 flex flex-col">
          <Link href="/" className="px-6 py-4 border-b text-brand-navy font-semibold hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <div className="px-6 py-4 border-b text-brand-navy font-semibold flex flex-col">
            <Link href="/about" className="hover:text-brand-sky mb-2" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link href="/about" className="pl-4 py-2 hover:text-brand-sky font-normal text-sm" onClick={() => setIsMobileMenuOpen(false)}>About Company</Link>
            <Link href="/about/mission" className="pl-4 py-2 hover:text-brand-sky font-normal text-sm" onClick={() => setIsMobileMenuOpen(false)}>Mission and Vision</Link>
            <Link href="/about/clients" className="pl-4 py-2 hover:text-brand-sky font-normal text-sm" onClick={() => setIsMobileMenuOpen(false)}>Clients</Link>
          </div>
          <Link href="/why-us" className="px-6 py-4 border-b text-brand-navy font-semibold hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Why Us</Link>
          <div className="px-6 py-4 border-b text-brand-navy font-semibold flex flex-col">
            <span className="mb-2 text-gray-500 text-sm uppercase tracking-wider">Businesses</span>
            <Link href="/businesses/construction" className="pl-4 py-2 hover:text-brand-sky" onClick={() => setIsMobileMenuOpen(false)}>Construction & Developers</Link>
            <Link href="/businesses/r-colors" className="pl-4 py-2 hover:text-brand-sky" onClick={() => setIsMobileMenuOpen(false)}>R Colors (Finishing Works)</Link>
            <Link href="/businesses/estate" className="pl-4 py-2 hover:text-brand-sky" onClick={() => setIsMobileMenuOpen(false)}>Estate</Link>
          </div>
          <Link href="/projects" className="px-6 py-4 border-b text-brand-navy font-semibold hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
          {/* <Link href="/clients" className="px-6 py-4 border-b text-brand-navy font-semibold hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Clients</Link> */}
          <Link href="/contact" className="px-6 py-4 border-b text-brand-navy font-semibold hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <div className="p-6 bg-gray-50">
            <Link href="/contact" className="block text-center bg-brand-sky text-white px-6 py-3 rounded font-bold hover:bg-brand-navy transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
