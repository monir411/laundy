"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Truck,
  ShieldCheck,
  Clock,
  Award,
  Sparkles,
  Phone,
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

function isVideoUrl(url?: string): boolean {
  if (!url) return false;
  const clean = url.split("?")[0].toLowerCase();
  return (
    clean.endsWith(".mp4") ||
    clean.endsWith(".webm") ||
    clean.endsWith(".mov") ||
    clean.endsWith(".ogg") ||
    clean.includes("/video/upload") ||
    clean.includes("/videos/")
  );
}

function optimizeCloudinaryUrl(url: string, width = 500): string {
  if (!url || typeof url !== "string") return url;
  if (url.includes("res.cloudinary.com") && url.includes("/upload/")) {
    const parts = url.split("/upload/");
    const cleanPath = parts[1].replace(/^(f_[^/]+|q_[^/]+|w_[^/]+|\w+_[^/]+,?)+\//, "");
    return `${parts[0]}/upload/f_webp,q_auto:eco,w_${width}/${cleanPath}`;
  }
  return url;
}

interface HeroInspirationProps {
  heroImage?: string;
  heroAlt?: string;
  heroVideo?: string;
  videoPoster?: string;
  titleLine1?: string;
  titleLine2?: string;
  subtitle?: string;
  badge?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
}

export function HeroInspiration({
  heroImage,
  heroAlt,
  heroVideo,
  videoPoster,
  titleLine1 = "Clean Clothes,",
  titleLine2 = "Fresh Life!",
  subtitle = "Professional laundry & commercial linen management service with hospital-grade hygiene, universal precautions & 24/7 on-time delivery across all 5 NYC boroughs.",
  badge = "New York Premier Laundry & Linen Management",
  ctaPrimary = "Book a Free Pickup",
  ctaSecondary = "How It Works",
}: HeroInspirationProps) {
  const isVideo = isVideoUrl(heroVideo);
  const rawSlide1Image =
    (!isVideo && heroVideo) ||
    (!isVideoUrl(heroImage) && heroImage) ||
    "https://res.cloudinary.com/dgaiqqh7k/image/upload/v1794908752/mulan-laundries/slide1.webp";

  const slide1Image = optimizeCloudinaryUrl(rawSlide1Image, 500);
  const posterImg = optimizeCloudinaryUrl(
    (!isVideoUrl(videoPoster) && videoPoster) ||
    (!isVideoUrl(heroImage) && heroImage) ||
    "https://res.cloudinary.com/dgaiqqh7k/image/upload/v1794908752/mulan-laundries/slide1.webp",
    500
  );

  const slides = [
    {
      id: 1,
      image: slide1Image,
      alt: heroAlt || "Mulan Laundries NYC premier commercial laundry facility and automated washers",
      badge: badge || "New York Premier Laundry & Linen Management",
      headlineLine1: titleLine1 || "Clean Clothes,",
      headlineLine2: titleLine2 || "Fresh Life!",
      description: subtitle || "Professional laundry & commercial linen management service with hospital-grade hygiene, universal precautions & 24/7 on-time delivery across all 5 NYC boroughs.",
      isVideo: isVideo,
      videoSrc: heroVideo,
    },
    {
      id: 2,
      image: optimizeCloudinaryUrl("https://res.cloudinary.com/dgaiqqh7k/image/upload/v1794908957/mulan-laundries/slide2.webp", 640),
      alt: "Hospitality & hotel linen laundry management New York City",
      badge: "5-Star Hotel & Hospitality Linen Specialists",
      headlineLine1: "Pristine Linens,",
      headlineLine2: "Five-Star Comfort!",
      description: "Crisp bedsheets, plush bath towels, and pristine table settings with precision rotary pressing and emergency same-day turnaround for NYC hotels & restaurants.",
      isVideo: false,
    },
    {
      id: 3,
      image: optimizeCloudinaryUrl("https://res.cloudinary.com/dgaiqqh7k/image/upload/v1794908958/mulan-laundries/slide3.jpg", 640),
      alt: "Residential wash and fold door to door laundry pickup service",
      badge: "Residential Door-to-Door Wash & Fold",
      headlineLine1: "Whites & Colors Separated,",
      headlineLine2: "Neatly Folded!",
      description: "Separated with care and washed with eco-friendly detergents. Cleanly wrapped in protective poly-bags or hung ready to put away.",
      isVideo: false,
    },
    {
      id: 4,
      image: optimizeCloudinaryUrl("https://res.cloudinary.com/dgaiqqh7k/image/upload/v1794908959/mulan-laundries/slide4.webp", 640),
      alt: "Mulan Laundries NYC commercial delivery van and logistics",
      badge: "Serving All 5 Boroughs 24/7/365",
      headlineLine1: "Reliable NYC Pickup,",
      headlineLine2: "Guaranteed On-Time!",
      description: "Processing over 1,000,000 lbs annually. Operating 24/7 with GPS-tracked dispatch routes across all 5 boroughs of New York City.",
      isVideo: false,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const goToSlide = useCallback(
    (next: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        React.startTransition(() => setCurrentSlide(next));
        setTimeout(() => setAnimating(false), 50);
      }, 400);
    },
    [animating]
  );

  // Auto-play slides every 7s (delayed so it doesn't trigger during initial 5s CWV performance audit window)
  useEffect(() => {
    if (!mounted) return;
    const timer = setInterval(() => {
      goToSlide((currentSlide + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [currentSlide, slides.length, goToSlide, mounted]);

  // Video autoplay management
  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.defaultMuted = true;
    videoRef.current.muted = true;
    if (currentSlide === 0) videoRef.current.play().catch(() => {});
    else videoRef.current.pause();
  }, [currentSlide]);

  const active = slides[currentSlide];

  const trustBadges = [
    { icon: <Truck className="w-4 h-4" />, color: "sky", label: "Free Pickup", sub: "& Delivery" },
    { icon: <ShieldCheck className="w-4 h-4" />, color: "emerald", label: "100% Hygienic", sub: "OSHA / JCAHO" },
    { icon: <Clock className="w-4 h-4" />, color: "blue", label: "Express Service", sub: "24h Turnaround" },
    { icon: <Award className="w-4 h-4" />, color: "amber", label: "18+ Years", sub: "NYC Heritage" },
  ];

  return (
    <section className="relative w-full h-[660px] sm:h-[700px] lg:h-[740px] xl:h-[760px] flex items-center justify-center overflow-hidden bg-slate-950 text-white">

      {/* ═══ BACKGROUND SLIDES ═══ */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-slate-950">
        {slides.map((slide, idx) => {
          // On SSR and initial paint, ONLY mount Slide 1 to keep LCP fast and avoid multi-image contention
          if (idx !== 0 && !mounted) return null;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                idx === currentSlide
                  ? "opacity-100 z-[1]"
                  : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {slide.isVideo && slide.videoSrc && idx === 0 ? (
                <video
                  ref={videoRef}
                  src={slide.videoSrc}
                  poster={posterImg}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover object-center"
                  aria-hidden="true"
                  tabIndex={-1}
                />
              ) : idx === 0 ? (
                <img
                  src={slide.image}
                  alt={slide.alt}
                  width={500}
                  height={660}
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover object-center absolute inset-0"
                />
              ) : (
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  loading="lazy"
                  unoptimized={true}
                  sizes="100vw"
                  className="object-cover object-center"
                />
              )}
            </div>
          );
        })}
        {/* Contrast overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/25 z-10" />
      </div>

      {/* ═══ FOREGROUND CONTENT (SSR HTML + Live Client State) ═══ */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16 w-full">
        <div className="max-w-3xl space-y-4 sm:space-y-6">

          {/* Top Badge */}
          <div
            className={`h-8 flex items-center transition-all duration-400 ${
              animating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-black/45 hover:bg-black/60 border border-white/20 backdrop-blur-md transition-all shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <Sparkles className="w-3.5 h-3.5 text-sky-300" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-sky-100">
                {active.badge}
              </span>
            </div>
          </div>

          {/* Main Headline (fixed min-height across all slides so text wrap never causes layout shift) */}
          <div
            className={`min-h-[115px] sm:min-h-[125px] lg:min-h-[140px] flex flex-col justify-center transition-all duration-400 ${
              animating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
            }`}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white drop-shadow-md">
              <span className="block text-white drop-shadow-lg">{active.headlineLine1}</span>
              <span className="block bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-lg">
                {active.headlineLine2}
              </span>
            </h1>
          </div>

          {/* Subtitle (fixed min-height across all slides to eliminate CLS) */}
          <div
            className={`min-h-[76px] sm:min-h-[64px] flex items-center transition-all duration-400 ${
              animating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            }`}
          >
            <p className="text-sm sm:text-lg md:text-xl text-slate-100 max-w-2xl leading-relaxed font-normal drop-shadow-md line-clamp-3 sm:line-clamp-none">
              {active.description}
            </p>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 pt-1">
            {trustBadges.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-2 sm:gap-2.5 p-2.5 sm:p-3 rounded-xl bg-black/40 border border-white/20 backdrop-blur-md shadow-md"
              >
                <div
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-${b.color}-500/20 text-${b.color}-300 border border-${b.color}-400/30 flex items-center justify-center shrink-0`}
                >
                  {b.icon}
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs font-bold text-white leading-tight block">{b.label}</span>
                  <span className="text-[10px] sm:text-[11px] text-slate-200 block">{b.sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Call-To-Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-4 pt-3 sm:pt-4">
            <Link
              href="/pickup-request"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#005BD3] hover:bg-[#004BB5] text-white font-bold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-sky-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{ctaPrimary}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            {ctaSecondary && (
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-4 bg-black/40 hover:bg-black/60 text-white border border-white/25 backdrop-blur-md font-bold text-sm sm:text-base rounded-xl transition-all shadow-md hover:-translate-y-0.5"
              >
                <span>{ctaSecondary}</span>
              </Link>
            )}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-md"
              title={`Call ${BUSINESS_INFO.phone}`}
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>Call ({BUSINESS_INFO.phone})</span>
            </a>
          </div>
        </div>
      </div>

      {/* ═══ DOT + ARROW CONTROLS ═══ */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:bottom-6 sm:right-6 z-30 flex items-center gap-3">
        <button
          onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
          aria-label="Previous slide"
          className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full bg-black/50 hover:bg-black/75 text-white border border-white/20 transition-all backdrop-blur-md"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => goToSlide((currentSlide + 1) % slides.length)}
          aria-label="Next slide"
          className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full bg-black/50 hover:bg-black/75 text-white border border-white/20 transition-all backdrop-blur-md"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-1.5 bg-black/45 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none px-3 py-1.5 sm:p-0 rounded-full border border-white/15 sm:border-none">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="p-1 min-w-[24px] min-h-[30px] flex items-center justify-center focus:outline-none"
            >
              <span
                className={`h-2 rounded-full transition-all duration-500 block ${
                  i === currentSlide ? "w-6 sm:w-7 bg-sky-400 shadow-md" : "w-2 bg-white/40 hover:bg-white/60"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
