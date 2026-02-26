"use client";
import axios from "axios";
import { Code2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as LucideIcons from "lucide-react";
import Loader from "../loader";

export default function ServicesSection() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/services");
        setServices(res.data);
      } catch (error) {
        console.log("Error while fetching services", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section
      id="services"
      className="py-24 max-sm:py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl px-4 mx-auto mb-16 relative">
        {/* Badge / Tag */}
        <div
          className="mx-auto w-fit flex items-center gap-2 px-4 py-1.5 rounded-full
          bg-[#496cbf]/10
          backdrop-blur-md ring-1 ring-[#496cbf]/30
          hover:scale-105 transition-transform duration-300 group"
        >
          <Code2 className="h-4 w-4 text-[#496cbf] group-hover:text-indigo-500 transition-colors duration-300" />
          <span className="text-xs font-semibold text-[#496cbf] group-hover:text-indigo-500 tracking-tight">
            Services
          </span>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight relative z-10 mt-4">
          <span className="block mb-2">What I Do</span>
          <span className="block h-1 w-24 mx-auto rounded-full bg-[#496cbf]/90 mt-2" />
        </h2>

        {/* Section Description */}
        <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          I provide developer-focused services with modern tech stacks, scalable
          architecture, and professional implementations.
          <span className="text-[#496cbf] font-semibold">
            {" "}
            Clean, efficient, and production-ready solutions.
          </span>
        </p>
      </div>

      {/* Services Grid */}
      {loading ? (
        <Loader text="Loading Services..." />
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 4).map((service, index) => {
            const Icon = LucideIcons[service.icon] || LucideIcons.HelpCircle;
            return (
              <article
                key={index}
                className="group relative flex flex-col
          rounded-xl bg-white
          border border-slate-200
          p-7
          shadow-[0_8px_30px_rgba(15,23,42,0.06)]
          hover:shadow-[0_20px_60px_rgba(73,108,191,0.18)]
          transition-all duration-500 ease-out
          hover:-translate-y-2 overflow-hidden"
              >
                {/* Subtle Tech Grid Background */}
                <div
                  className="absolute inset-0 opacity-[0.04] pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #496cbf 1px, transparent 1px), linear-gradient(to bottom, #496cbf 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />

                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#496cbf] via-indigo-400 to-transparent" />

                {/* Icon Wrapper */}
                <div
                  className="relative z-10 mb-6 flex items-center justify-center
            h-14 w-14 rounded-2xl
            bg-gradient-to-br from-[#eef2ff] to-[#e0e7ff]
            ring-1 ring-indigo-200/60
            group-hover:from-[#496cbf]/20 group-hover:to-indigo-400/20
            transition-all duration-500"
                >
                  <Icon className="h-7 w-7" aria-hidden />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Glow */}
                <div
                  className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full
            bg-gradient-to-tr from-[#496cbf]/20 to-indigo-400/20
            blur-3xl opacity-0 group-hover:opacity-100
            transition-opacity duration-700"
                />
              </article>
            );
          })}
        </div>
      )}
      <div className="mt-12 text-center">
        <Link href="/services">
          <button
            className="relative inline-flex items-center gap-3 rounded-xl
      bg-gradient-to-r from-[#496cbf] to-indigo-500
      px-10 py-4 text-white font-semibold tracking-tight
      shadow-[0_10px_30px_rgba(73,108,191,0.35)]
      hover:shadow-[0_14px_45px_rgba(73,108,191,0.5)]
      transition-all duration-300 overflow-hidden group"
          >
            {/* Layered Glow */}
            <span
              className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/5 to-white/20
        opacity-0 group-hover:opacity-50 transition-opacity duration-500"
            />

            {/* Holographic Circles */}
            <span className="absolute -top-8 -left-12 h-20 w-20 rounded-full bg-white/10 blur-3xl animate-pulse-slow" />
            <span className="absolute -bottom-8 -right-12 h-20 w-20 rounded-full bg-indigo-200/15 blur-3xl animate-pulse-slow" />

            {/* Diagonal Animated Shine */}
            <span className="absolute -top-1/2 -left-1/2 w-24 h-48 bg-white/10 rotate-45 blur-xl animate-slide-shine pointer-events-none" />

            {/* Button Text */}
            <span className="relative flex items-center gap-2 tracking-wide">
              See All Services
              <LucideIcons.ExternalLink className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
}
