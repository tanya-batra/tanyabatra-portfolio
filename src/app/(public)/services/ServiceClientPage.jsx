"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import axios from "axios";
import Loader from "@/components/loader";
import * as LucideIcons from "lucide-react";

const ServiceClientPage = () => {
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
    <main className="py-24 max-sm:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="relative mb-16 max-w-3xl">
        {/* Top Label */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#496cbf]/30 bg-[#496cbf]/5 px-4 py-1.5 text-xs font-medium text-[#496cbf] mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-[#496cbf]" />
          Services
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-6">
          My <span className="text-[#496cbf]">Developer Services</span>
        </h2>

        {/* Accent Line */}
        <div className="h-[2px] w-16 bg-[#496cbf] mb-6" />

        {/* Description */}
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          I provide a wide range of development services for startups and
          businesses, delivering modern, scalable, and production-ready web
          applications using the latest technologies.
        </p>
      </section>

      {/* Services Grid */}
      {loading ? (
        <Loader text="Loading Services..." />
      ) : (
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = LucideIcons[service.icon] || LucideIcons.HelpCircle;
            return (
              <article
                key={index}
                className="group relative flex flex-col rounded-xl bg-white border border-slate-200 p-7 shadow-[0_8px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_60px_rgba(73,108,191,0.18)] transition-all duration-500 ease-out hover:-translate-y-2 overflow-hidden"
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
                <div className="relative z-10 mb-6 flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-[#eef2ff] to-[#e0e7ff] ring-1 ring-indigo-200/60 group-hover:from-[#496cbf]/20 group-hover:to-indigo-400/20 transition-all duration-500">
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
                <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-tr from-[#496cbf]/20 to-indigo-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </article>
            );
          })}
        </section>
      )}

      {/* CTA Section */}
      <section className="mt-20 flex flex-col items-center text-center px-4 md:px-0">
        <div className="relative max-w-2xl w-full bg-white/30 dark:bg-black/40 backdrop-blur-xl border border-[#496cbf]/20 rounded-3xl p-6 md:p-16 shadow-lg hover:shadow-[0_20px_60px_rgba(73,108,191,0.2)] transition-all duration-500 group">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
            Looking for a <span className="text-[#496cbf]">Developer?</span>
          </h2>
          <p className="text-muted-foreground mb-8 text-base md:text-lg leading-relaxed">
            I’m open to freelance or full-time opportunities where I can
            contribute to meaningful projects and build production-ready
            applications with structured workflows.
          </p>
          <Link href="/contact">
            <button className="relative overflow-hidden rounded-xl px-10 py-4 bg-gradient-to-r from-[#496cbf] to-indigo-600 text-white font-medium shadow-[0_6px_20px_rgba(73,108,191,0.35)] hover:shadow-[0_12px_35px_rgba(73,108,191,0.45)] transition-all duration-300 group">
              <span className="absolute inset-0 bg-white/10 blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-2">
                Let’s Work Together <LucideIcons.Rocket className="w-4 h-4" />
              </span>
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ServiceClientPage;
