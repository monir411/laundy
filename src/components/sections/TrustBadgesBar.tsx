import React from "react";
import { ShieldCheck, Clock, Lock, Leaf, ThumbsUp } from "lucide-react";

export const TrustBadgesBar: React.FC = () => {
  const trustPoints = [
    {
      title: "100% Hygienic",
      subtitle: "Universal precautions, OSHA & JCAHO",
      icon: ShieldCheck
    },
    {
      title: "On-Time Delivery",
      subtitle: "Always on time, 24/7 NYC dispatch",
      icon: Clock
    },
    {
      title: "Secure & Safe",
      subtitle: "Your linens in 18-year trusted hands",
      icon: Lock
    },
    {
      title: "Eco Friendly",
      subtitle: "Environment safe ECOS cleaning",
      icon: Leaf
    },
    {
      title: "Satisfaction",
      subtitle: "100% customer guarantee",
      icon: ThumbsUp
    }
  ];

  return (
    <section className="py-10 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-center">
          {trustPoints.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <div className="w-11 h-11 rounded-full border border-blue-200 bg-blue-50/50 text-[#005BD3] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 leading-tight">
                    {p.title}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                    {p.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
