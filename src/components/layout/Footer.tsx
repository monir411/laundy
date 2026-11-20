import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

interface FooterProps {
  logoUrl?: string;
  logoAlt?: string;
  phone?: string;
  phoneRaw?: string;
  email?: string;
  address?: string;
}

export const Footer: React.FC<FooterProps> = ({
  logoUrl = "/images/new-logo-footer1.webp",
  logoAlt = "Mulan Laundries",
  phone = BUSINESS_INFO.phone,
  phoneRaw = BUSINESS_INFO.phoneRaw,
  email = BUSINESS_INFO.email,
  address = BUSINESS_INFO.fullAddress,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#00224D] text-slate-300 pt-16 pb-12 border-t border-blue-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-blue-900/40">
          {/* Column 1 & 2: Brand Profile & Social (Matching Inspiration) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block relative h-12 w-48">
              <Image
                src={logoUrl}
                alt={logoAlt}
                fill
                className="object-contain filter brightness-0 invert"
              />
            </Link>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Professional laundry & linen management service with free pickup & delivery across all 5 New York City boroughs. We care for your clothes and commercial linens with universal precautions.
            </p>

            {/* Social Icons with Clean Vector SVGs */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-blue-900/60 hover:bg-[#005BD3] text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-full bg-blue-900/60 hover:bg-[#005BD3] text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-blue-900/60 hover:bg-[#005BD3] text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <p className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </p>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><Link href="/" className="hover:text-blue-300 transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-blue-300 transition-colors">All Services Catalog</Link></li>
              <li><Link href="/wash-fold" className="hover:text-blue-300 transition-colors">Wash & Fold</Link></li>
              <li><Link href="/commercial-laundry" className="hover:text-blue-300 transition-colors">Commercial Laundry</Link></li>
              <li><Link href="/how-it-works" className="hover:text-blue-300 transition-colors">How It Works</Link></li>
              <li><Link href="/track" className="inline-flex items-center gap-1.5 text-sky-400 hover:text-white font-semibold transition-colors">
                <span>Track Order Status</span>
                <span className="text-[10px] bg-sky-500/20 text-sky-300 px-1.5 py-0.5 rounded border border-sky-400/30">Live</span>
              </Link></li>
              <li><Link href="/about" className="hover:text-blue-300 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-300 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <p className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Our Services
            </p>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><Link href="/wash-fold" className="hover:text-blue-300 transition-colors">Wash & Fold</Link></li>
              <li><Link href="/commercial-laundry" className="hover:text-blue-300 transition-colors">Commercial Laundry</Link></li>
              <li><Link href="/services/hotel-laundry" className="hover:text-blue-300 transition-colors">Hotel & Hospitality</Link></li>
              <li><Link href="/services/hospital-laundry" className="hover:text-blue-300 transition-colors">Hospital Laundry</Link></li>
              <li><Link href="/services/short-term-rentals" className="hover:text-blue-300 transition-colors">Short-Term Rentals</Link></li>
              <li><Link href="/services/gyms" className="hover:text-blue-300 transition-colors">Gyms & Fitness</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-3.5">
            <p className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contact Us
            </p>
            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <Phone className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
              <a href={`tel:${phoneRaw}`} className="hover:text-white font-semibold">
                {phone}
              </a>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <Mail className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
              <a href={`mailto:${email}`} className="hover:text-white">
                {email}
              </a>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
              <span>{address}</span>
            </div>

            <div className="pt-2">
              <Link
                href="/pickup-request"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#005BD3] hover:bg-[#004BB5] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all"
              >
                <span>Book a Pickup</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>&copy; {currentYear} Mulan Laundry Service. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
