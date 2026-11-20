"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ChevronDown, ChevronRight, Menu, Phone, Calendar, ArrowRight, Waves, Search } from "lucide-react";
import { NAV_LINKS } from "@/data/navigation";
import { BUSINESS_INFO } from "@/data/business";

const MobileMenu = dynamic(
  () => import("./MobileMenu").then((mod) => mod.MobileMenu),
  { ssr: false }
);

const ServiceSearchBar = dynamic(
  () => import("@/components/navigation/ServiceSearchBar").then((mod) => mod.ServiceSearchBar),
  { ssr: true }
);

interface NavbarProps {
  logoUrl?: string;
  logoAlt?: string;
  phone?: string;
  phoneRaw?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  logoUrl = "/images/new-logo.webp",
  logoAlt = "Mulan Laundries",
  phone = BUSINESS_INFO.phone,
  phoneRaw = BUSINESS_INFO.phoneRaw,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [commercialSubMenuOpen, setCommercialSubMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-white h-[68px] sm:h-[72px] flex items-center border-b border-slate-100 transition-shadow duration-200 ${
          scrolled ? "shadow-md" : "shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
            >
              <div className="relative h-11 w-44 sm:h-12 sm:w-48">
                <Image
                  src={logoUrl}
                  alt={logoAlt}
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links (Clean & Spacious) */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              <Link
                href="/"
                className="text-sm font-semibold text-[#005BD3] hover:text-blue-700 transition-colors"
              >
                Home
              </Link>

              {/* Services Dropdown (Clean 2-Column: Residential & Commercial without Extra Text) */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
                onFocus={() => setServicesDropdownOpen(true)}
                onBlur={(e) => {
                  // Close only when focus leaves the entire dropdown container
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setServicesDropdownOpen(false);
                  }
                }}
              >
                <button
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-[#005BD3] transition-colors py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  aria-expanded={servicesDropdownOpen}
                  aria-haspopup="true"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setServicesDropdownOpen((v) => !v);
                    }
                    if (e.key === "Escape") setServicesDropdownOpen(false);
                  }}
                >
                  <Link href="/services" className="hover:text-[#005BD3]">
                    Services
                  </Link>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 transition-transform" />
                </button>

                {servicesDropdownOpen && (
                  <div className="absolute top-full -left-12 w-[540px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 mt-1 animate-in fade-in duration-150 z-50">
                    <div className="grid grid-cols-2 gap-6">
                      {/* Column 1: Residential Services */}
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#005BD3] pb-2 mb-2 border-b border-slate-100">
                          Residential Services
                        </div>
                        <div className="space-y-0.5">
                          <Link
                            href="/wash-fold"
                            onClick={() => setServicesDropdownOpen(false)}
                            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#005BD3] hover:bg-blue-50/70 rounded-lg transition-colors"
                          >
                            Wash & Fold
                          </Link>
                          <Link
                            href="/pickup-request"
                            onClick={() => setServicesDropdownOpen(false)}
                            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#005BD3] hover:bg-blue-50/70 rounded-lg transition-colors"
                          >
                            Pickup & Delivery Laundry
                          </Link>
                          <Link
                            href="/wash-fold#pricing"
                            onClick={() => setServicesDropdownOpen(false)}
                            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#005BD3] hover:bg-blue-50/70 rounded-lg transition-colors"
                          >
                            Bedding, Linens & Comforters
                          </Link>
                        </div>
                      </div>

                      {/* Column 2: Commercial Services */}
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#005BD3] pb-2 mb-2 border-b border-slate-100">
                          Commercial Services
                        </div>
                        <div className="space-y-0.5 max-h-[340px] overflow-y-auto pr-1">
                          {[
                            { name: "Commercial Laundry Overview", href: "/commercial-laundry" },
                            { name: "Hospital Laundry Services", href: "/services/hospital-laundry" },
                            { name: "Short-Term Rentals & Airbnb", href: "/services/short-term-rentals" },
                            { name: "Hotels & Hospitality Laundry", href: "/services/hotel-laundry" },
                            { name: "Gyms & Fitness Centers", href: "/services/gyms" },
                            { name: "Health Clubs & Wellness", href: "/services/health-clubs" },
                            { name: "Salons & Spas Laundry", href: "/services/salons-spas" },
                            { name: "Schools & Dorms Laundry", href: "/services/schools-dorms" },
                            { name: "Shelter Homes & Facilities", href: "/services/shelter-homes" },
                            { name: "Bed & Breakfast Laundry", href: "/services/bed-and-breakfast" },
                          ].map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setServicesDropdownOpen(false)}
                              className="block px-3 py-1.5 text-sm font-medium text-slate-700 hover:text-[#005BD3] hover:bg-blue-50/70 rounded-lg transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/how-it-works"
                className="text-sm font-semibold text-slate-700 hover:text-[#005BD3] transition-colors"
              >
                How It Works
              </Link>

              <Link
                href="/about"
                className="text-sm font-semibold text-slate-700 hover:text-[#005BD3] transition-colors"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="text-sm font-semibold text-slate-700 hover:text-[#005BD3] transition-colors"
              >
                Contact Us
              </Link>
            </nav>

            {/* Search Bar + Primary CTA in Navbar */}
            <div className="hidden lg:flex items-center gap-3">
              <ServiceSearchBar variant="navbar" />

              <Link
                href="/pickup-request"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-[#005BD3] hover:bg-[#004BB5] text-white font-bold text-sm rounded-full shadow-sm hover:shadow transition-all shrink-0"
              >
                Book a Pickup
              </Link>
            </div>

            {/* Mobile Actions: Search Trigger, Call, Menu */}
            <div className="flex items-center gap-1.5 lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-slate-700 hover:text-[#005BD3] hover:bg-blue-50 rounded-lg transition-colors"
                aria-label="Search services"
              >
                <Search className="w-5 h-5" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="p-2 text-[#005BD3] hover:bg-blue-50 rounded-lg transition-colors"
                aria-label="Call Mulan Laundries"
              >
                <Phone className="w-5 h-5" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
