import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Leaf, Award, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

interface BusinessIntroProps {
  aboutImage?: string;
  aboutAlt?: string;
}

export const BusinessIntro: React.FC<BusinessIntroProps> = ({
  aboutImage = "/images/about-us.webp",
  aboutAlt = "About Mulan Laundries NYC commercial laundry operations",
}) => {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual & Heritage Badge */}
          <div className="relative">
            <div className="relative aspect-[4/3] sm:aspect-[4/3] lg:aspect-auto lg:h-[480px] w-full rounded-2xl overflow-hidden shadow-card border border-slate-100">
              <Image
                src={aboutImage}
                alt={aboutAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                loading="lazy"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute bottom-3 right-3 sm:-bottom-8 sm:right-6 bg-navy-900/95 backdrop-blur-md text-white p-3 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-navy-800/80 max-w-[210px] sm:max-w-xs">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span className="text-lg sm:text-2xl font-black text-white block leading-tight">18+ Years</span>
                  <span className="text-[10px] sm:text-xs text-slate-300 uppercase tracking-wider block">NYC Heritage</span>
                </div>
              </div>
            </div>

            {/* Secondary Floating Pill */}
            <div className="absolute top-3 left-3 sm:top-6 sm:left-6 bg-white/95 backdrop-blur-sm text-navy-900 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl shadow-md border border-slate-100 flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-600" />
              <span>Headquartered in the Bronx, NYC</span>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider border border-sky-100">
              <span>About Mulan Laundries</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
              New York’s Premier Commercial Laundry & Linen Management Company
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Mulan Laundry is a New York Premier commercial laundry and linen management company. We offer commercial laundry account services for all types of businesses—whether you are an independent boutique property or a national group with numerous locations, we always put your requirements first.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We, the team of Mulan Laundries, are proud to be part of an 18-year-old brand based in New York. Ours is a team of experts who make sure that linens are picked safely from your workplace or home, washed under universal precautions, dried, folded, and delivered directly to your doorstep.
            </p>

            {/* Green Commitment Callout */}
            <div className="p-5 bg-sky-50/60 rounded-xl border border-sky-100 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-sky-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-navy-900">Committed to Green Technology</p>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  We work hard to deliver laundry that is not just spotlessly clean and immaculately ironed, but environmentally responsible. We utilize eco-friendly ECOS detergents, allergy-free hypoallergenic solutions, and non-chlorine Oxi-Clean upon request.
                </p>
              </div>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-navy-900 pt-2 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Operating 24/7, 365 Days a Year</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>All 5 NYC Boroughs Covered</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Over 1,000,000 Lbs/Yr Processed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>OSHA & JCAHO Standards</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 hover:bg-navy-850 text-white font-bold text-sm rounded-xl transition-all shadow-sm"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pickup-request"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold text-sm rounded-xl transition-all"
              >
                <span>Schedule a Pickup</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
