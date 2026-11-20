import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, TrendingUp, Users, Sparkles, Building2 } from "lucide-react";
import { COMMERCIAL_HUB_DATA } from "@/data/services";

interface CommercialFeatureProps {
  commercialImage?: string;
  commercialAlt?: string;
}

export const CommercialFeature: React.FC<CommercialFeatureProps> = ({
  commercialImage = "/images/commercial-laundry.jpg",
  commercialAlt = "Commercial laundry services machinery and linen handling",
}) => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Operational Pillars */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>Commercial Laundry & Linen Management</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
              High-Volume Commercial Capability Across New York City
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Processing over 1,000,000 pounds per year, Mulan Commercial Laundry New York operates under universal precautions adhering to OSHA and Joint Commission (JCAHO) regulated standards.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We specialize in hotel laundry and also service institutional, commercial, and industrial facilities. We use only quality products in our processes and are constantly implementing improved wash formulas to extend customer linen lifespans while delivering clean, crisp, fresh-smelling results.
            </p>

            {/* 4 Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-subtle">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-2.5">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-navy-900">1,000,000+ Lbs/Year</h3>
                <p className="text-xs text-slate-500 mt-1">High-volume capacity built for massive hospitality, institutional, and athletic demands.</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-subtle">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-2.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-navy-900">OSHA & JCAHO Standards</h3>
                <p className="text-xs text-slate-500 mt-1">Operating under universal precautions with rigorous thermal and chemical disinfection.</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-subtle">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-2.5">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-navy-900">Dedicated Account Specialist</h3>
                <p className="text-xs text-slate-500 mt-1">Each commercial account is personally managed to ensure reliable par inventory.</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-subtle">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-2.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-navy-900">Extended Textile Lifespan</h3>
                <p className="text-xs text-slate-500 mt-1">Advanced chemistry that protects delicate fibers and preserves costly linen investments.</p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/commercial-laundry"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm rounded-xl transition-all shadow-sm"
              >
                <span>View All Commercial Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-navy-900 border border-slate-200 font-bold text-sm rounded-xl transition-all"
              >
                <span>Request B2B Quote</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/3] sm:aspect-[4/3] lg:aspect-auto lg:h-[480px] w-full rounded-2xl overflow-hidden shadow-card border border-slate-200">
              <Image
                src={commercialImage}
                alt={commercialAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                loading="lazy"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
            </div>

            {/* Floating Volume Stats Box */}
            <div className="absolute bottom-3 left-3 sm:bottom-auto sm:-bottom-8 sm:left-10 sm:right-auto bg-navy-900/95 backdrop-blur-md text-white p-3.5 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-navy-800/80 max-w-[230px] sm:max-w-xs">
              <span className="text-[10px] sm:text-xs font-bold text-sky-400 uppercase tracking-widest block mb-0.5 sm:mb-1">
                Annual Capacity
              </span>
              <div className="text-xl sm:text-3xl font-black text-white leading-tight">1,000,000+ Lbs</div>
              <div className="text-[11px] sm:text-xs text-slate-300 mt-1 hidden sm:block">
                Full complement of laundry programs & linen management
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
