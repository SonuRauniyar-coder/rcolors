"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Main Header */}
      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="w-full px-4 md:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-6 lg:gap-10">
            <div className="relative w-[70px] h-[50px] -my-4 shrink-0">
              <Image src="/images/logo.jpg" alt="R Colors Group Logo" fill className="rounded-md object-cover" />
            </div>
            <div className="hidden sm:block whitespace-nowrap text-3xl lg:text-4xl text-brand-navy" style={{ fontFamily: '"Harlow Solid Italic", "Harlow Solid", cursive' }}>
              <span className="text-brand-red">R </span>
              <span className="text-brand-green">colors Group</span>
            </div>
          </Link>

          {/* Right Section Wrapper */}
          <div className="flex items-center">
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 font-semibold text-brand-navy text-sm lg:text-base whitespace-nowrap mr-2 lg:mr-4">
              <Link href="/about" className="hover:text-brand-sky transition-colors">About Us</Link>
              <Link href="/#why-us" className="hover:text-brand-sky transition-colors">Why Us</Link>

              {/* Mega Menu Trigger */}
              <div
                className="relative group cursor-pointer"
                onMouseEnter={() => setIsDivisionsOpen(true)}
                onMouseLeave={() => setIsDivisionsOpen(false)}
              >
                <div className="flex items-center space-x-1 hover:text-brand-sky transition-colors">
                  <span>Divisions</span>
                  <ChevronDown size={16} />
                </div>
                {/* Mega Menu Dropdown */}
                {isDivisionsOpen && (
                  <div className="absolute top-full right-0 w-64 bg-white shadow-lg rounded-b-lg border-t-2 border-brand-sky pt-2 pb-4 flex flex-col z-50">
                    <Link href="/divisions/construction" className="px-4 py-2 hover:bg-gray-100 hover:text-brand-sky transition-colors">Construction & Developers</Link>
                    <Link href="/divisions/r-colors" className="px-4 py-2 hover:bg-gray-100 hover:text-brand-sky transition-colors">R Colors (Finishing Works)</Link>
                    <Link href="/divisions/infratech" className="px-4 py-2 hover:bg-gray-100 hover:text-brand-sky transition-colors">Infratech</Link>
                  </div>
                )}
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
              <button className="md:hidden text-brand-navy" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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
          <Link href="/about" className="px-6 py-4 border-b text-brand-navy font-semibold hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link href="/#why-us" className="px-6 py-4 border-b text-brand-navy font-semibold hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Why Us</Link>
          <div className="px-6 py-4 border-b text-brand-navy font-semibold flex flex-col">
            <span className="mb-2 text-gray-500 text-sm uppercase tracking-wider">Divisions</span>
            <Link href="/divisions/construction" className="pl-4 py-2 hover:text-brand-sky" onClick={() => setIsMobileMenuOpen(false)}>Construction & Developers</Link>
            <Link href="/divisions/r-colors" className="pl-4 py-2 hover:text-brand-sky" onClick={() => setIsMobileMenuOpen(false)}>R Colors (Finishing Works)</Link>
            <Link href="/divisions/infratech" className="pl-4 py-2 hover:text-brand-sky" onClick={() => setIsMobileMenuOpen(false)}>Infratech</Link>
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
