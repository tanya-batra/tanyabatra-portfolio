"use client";
import React, { useEffect, useState } from "react";
import { Code2, Briefcase, Layers, Rocket } from "lucide-react";

import Image from "next/image";
import axios from "axios";
import Loader from "@/components/loader";
const AboutClientPage = () => {
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [eduRes, expRes] = await Promise.all([
          axios.get("/api/education"),
          axios.get("/api/experiences"),
        ]);

        setEducations(eduRes.data);
        setExperiences(expRes.data);
      } catch (error) {
        console.error("Error fetching about data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <main className="mx-auto max-w-7xl px-4 md:px-8">
      {/* Intro */}
      <section className="py-16 sm:py-20 md:py-24 ">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* LEFT CONTENT */}
          <div className="order-2 md:order-1">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full 
        border border-[#496cbf]/30 bg-[#496cbf]/10 
        text-[#496cbf] text-xs sm:text-sm font-medium mb-6"
            >
              Laravel Developer • 1.5+ Years Experience
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
              Building Reliable Backend Systems
              <br className="hidden sm:block" />
              with <span className="text-[#496cbf]">Laravel & PHP</span>
            </h1>

            {/* Description */}
            <div>
              <p className="relative text-base sm:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 mb-6 italic pl-4">
                <span className="absolute left-0 top-1 h-full w-[3px] rounded-full bg-[#496cbf]" />
                I’m{" "}
                <span className="font-semibold text-foreground">
                  Tanya Batra
                </span>
                , a backend-focused developer specializing in{" "}
                <span className="font-medium text-[#496cbf]">
                  Laravel & PHP
                </span>
                . I build secure, scalable, and maintainable web applications
                designed for real-world usage — not demos or side projects.
              </p>

              <p className="text-base sm:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                Currently working at{" "}
                <span className="font-medium text-foreground">Buildupnet</span>,
                I contribute to live production systems including an e-commerce
                platform and a salon management application. My work involves
                API development, database architecture, authentication flows,
                and performance optimization across the stack.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center order-1 md:order-2 mb-5 md:mb-0">
            {/* Accent Glow */}
            <div className="absolute -inset-4 sm:-inset-6 bg-[#496cbf]/10 blur-3xl rounded-full" />

            {/* Image Container */}
            <div
              className="relative rounded-2xl overflow-hidden border 
        border-neutral-200/40 dark:border-neutral-800
        shadow-lg
        w-[320px] md:w-[380px] lg:w-[420px]
        h-[400px] md:h-[480px] lg:h-[520px]"
            >
              <Image
                src="/about.jpeg"
                alt="Tanya Batra - Laravel Developer"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-24 max-sm:py-16">
        <div className="relative mb-16 max-w-3xl">
          {/* Top Label */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#496cbf]/30 bg-[#496cbf]/5 px-4 py-1.5 text-xs font-medium text-[#496cbf] mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#496cbf]" />
            Professional Journey
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-6">
            Experience &{" "}
            <span className="text-[#496cbf]">Production Impact</span>
          </h2>

          {/* Accent Line */}
          <div className="h-[2px] w-16 bg-[#496cbf] mb-6" />

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            I focus on building real-world applications that go beyond
            functionality — delivering stable, secure, and scalable systems used
            in live production environments. My experience centers around
            solving practical business problems, optimizing backend performance,
            and maintaining structured development workflows.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Briefcase,
              title: "Production-Level Experience",
              desc: "1.5+ years building and maintaining live systems used by real customers. Experienced with deployment cycles, bug resolution, and structured development workflows.",
            },
            {
              icon: Layers,
              title: "Scalable System Architecture",
              desc: "Worked on e-commerce and management platforms handling dynamic data, authentication flows, REST APIs, and relational database design.",
            },
            {
              icon: Rocket,
              title: "Performance & Code Quality",
              desc: "Focused on clean architecture, maintainable code, query optimization, and writing solutions that scale without technical debt.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl
  border border-neutral-200 dark:border-neutral-800/60
  bg-white/70 dark:bg-neutral-900/70
  backdrop-blur-xl p-8
  transition-all duration-500 ease-out
  hover:-translate-y-2
  hover:shadow-[0_20px_30px_rgba(73,108,191,0.18)]"
            >
              {/* Top Code Accent */}
              <div
                className="absolute top-0 left-6 right-6 h-[2px]
    bg-gradient-to-r from-transparent via-[#496cbf] to-transparent"
              />

              {/* Icon Wrapper */}
              <div
                className="relative mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl
    bg-[#496cbf]/10 text-[#496cbf]
    ring-1 ring-[#496cbf]/20
    transition-all duration-300
    group-hover:scale-110
    group-hover:bg-[#496cbf]/15"
              >
                <item.icon className="h-6 w-6" />
              </div>

              {/* Title */}
              <h3
                className="text-lg font-semibold tracking-tight mb-3
    text-neutral-900 dark:text-neutral-100"
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Education & Experience */}
      <section className="py-24 max-sm:py-16">
        {loading ? (
          <Loader text="Loading About Data..." />
        ) : (
          <div className="grid lg:grid-cols-2 gap-20">
            {/* ================= EDUCATION ================= */}
            <div>
              {/* Section Header */}
              <div className="relative mb-12 max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#496cbf]/30 bg-[#496cbf]/5 px-4 py-1.5 text-xs font-medium text-[#496cbf] mb-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#496cbf]" />
                  Education
                </div>

                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-6">
                  Academic <span className="text-[#496cbf]">Foundation</span>
                </h2>

                <div className="h-[2px] w-16 bg-[#496cbf] mb-6" />

                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  My educational background provided strong fundamentals in
                  computer systems, networking, and software development.
                </p>
              </div>

              {/* Education Cards */}
              <div className="space-y-8">
                {educations.map((item, i) => (
                  <div
                    key={i}
                    className="group relative rounded-3xl border border-neutral-200 dark:border-neutral-800
                  bg-white/80 dark:bg-neutral-900/70 backdrop-blur-xl
                  p-8 transition-all duration-500 hover:-translate-y-2
                  hover:shadow-[0_25px_80px_rgba(73,108,191,0.15)]"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-sm font-mono text-[#496cbf]">
                        {item.period}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold mb-3 text-neutral-900 dark:text-neutral-100">
                      {item.degree}
                    </h3>

                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= EXPERIENCE ================= */}
            <div>
              {/* Section Header */}
              <div className="relative mb-12 max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#496cbf]/30 bg-[#496cbf]/5 px-4 py-1.5 text-xs font-medium text-[#496cbf] mb-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#496cbf]" />
                  Professional Experience
                </div>

                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-6">
                  Work <span className="text-[#496cbf]">Timeline</span>
                </h2>

                <div className="h-[2px] w-16 bg-[#496cbf] mb-6" />

                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Real-world experience working on live production systems,
                  internships, and full-time backend development roles.
                </p>
              </div>

              {/* Timeline */}
              <div className="relative border-l border-[#496cbf]/30 pl-8 space-y-12">
                {experiences.map((item, i) => (
                  <div key={i} className="relative group">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[38px] top-1.5 h-4 w-4 rounded-full bg-[#496cbf] ring-4 ring-white dark:ring-neutral-900" />

                    <div
                      className="rounded-3xl border border-neutral-200 dark:border-neutral-800
                    bg-white/80 dark:bg-neutral-900/70 backdrop-blur-xl
                    p-8 transition-all duration-500 hover:-translate-y-2
                    hover:shadow-[0_25px_80px_rgba(73,108,191,0.15)]"
                    >
                      <div className="mb-3 text-sm font-mono text-[#496cbf]">
                        {item.period}
                      </div>

                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                        {item.title}
                      </h3>

                      <p className="text-sm font-medium text-[#496cbf] mb-3">
                        {item.company}
                      </p>

                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* What I Do */}
      <section className="py-24 max-sm:py-16">
        {/* Section Header (Your Premium Style Adapted) */}
        <div className="relative mb-20 max-w-3xl">
          {/* Top Label */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#496cbf]/30 bg-[#496cbf]/5 px-4 py-1.5 text-xs font-medium text-[#496cbf] mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#496cbf]" />
            Technical Expertise
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-6">
            Backend Engineering &{" "}
            <span className="text-[#496cbf]">System Architecture</span>
          </h2>

          {/* Accent Line */}
          <div className="h-[2px] w-16 bg-[#496cbf] mb-6" />

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            My work revolves around designing scalable backend systems,
            production-ready APIs, and structured database architectures. I
            prioritize performance, maintainability, and long-term reliability
            in every project I build.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-20">
          {/* LEFT: Sticky Stacked Capability Cards */}
          <div className="relative space-y-24">
            {[
              {
                title: "Laravel & PHP Development",
                desc: "Building structured, modular, and maintainable applications using modern Laravel practices.",
              },
              {
                title: "REST API Engineering",
                desc: "Designing secure and scalable APIs with proper authentication, validation, and version control.",
              },
              {
                title: "Database Architecture (MySQL)",
                desc: "Optimizing relational schemas, indexing strategies, and query performance.",
              },
              {
                title: "Security & Authentication",
                desc: "Implementing authorization layers, secure session handling, and role-based access control.",
              },
              {
                title: "Production Optimization",
                desc: "Debugging live systems, improving performance bottlenecks, and ensuring deployment stability.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{ top: `${80 + i * 50}px` }}
                className="sticky z-20"
              >
                <div
                  className="group relative overflow-hidden rounded-3xl
                    border border-[#496cbf]/30 dark:border-[#496cbf]/50
                    bg-white/90 dark:bg-black/60
                    backdrop-blur-xl
                    p-8 md:p-10
                    shadow-lg
                    hover:shadow-[0_35px_90px_rgba(73,108,191,0.15)]
                    transition-all duration-500"
                >
                  {/* Gradient Edge Glow */}
                  <div
                    className="absolute -inset-1 rounded-3xl
                      bg-gradient-to-br from-[#496cbf]/20 via-[#496cbf]/10 to-[#496cbf]/20
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-500 pointer-events-none"
                  />

                  {/* Step Badge / Code-Like Indicator */}
                  <div className="mb-6 flex items-center gap-4">
                    <div
                      className="flex items-center justify-center w-12 h-12 rounded-xl
                      bg-[#496cbf]/10 dark:bg-[#496cbf]/20
                      ring-1 ring-[#496cbf]/20 text-[#496cbf] font-mono text-sm
                      transition-transform duration-300 group-hover:scale-110"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <div className="h-[2px] flex-1 bg-gradient-to-r from-[#496cbf]/50 to-transparent" />
                  </div>

                  {/* Card Icon (Optional Developer Touch) */}
                  {item.icon && (
                    <div
                      className="mb-4 inline-flex h-10 w-10 items-center justify-center
                      rounded-xl bg-[#496cbf]/10 text-[#496cbf]
                      ring-1 ring-[#496cbf]/20
                      transition-transform duration-300 group-hover:scale-110"
                    >
                      <item.icon className="h-5 w-5" />
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-semibold tracking-tight mb-3 text-neutral-900 dark:text-white">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Sticky Developer Mindset */}
          <div className="relative">
            <div className="sticky top-32">
              <div
                className="relative overflow-hidden rounded-3xl
        border border-[#496cbf]/30 dark:border-[#496cbf]/50
        bg-gradient-to-br from-[#496cbf]/10 via-transparent to-[#496cbf]/10
        backdrop-blur-xl p-12
        shadow-[0_40px_120px_rgba(73,108,191,0.12)]
        transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_50px_140px_rgba(73,108,191,0.18)]"
              >
                {/* Icon Header / Badge */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-lg bg-[#496cbf]/20 flex items-center justify-center text-[#496cbf] font-mono text-sm ring-1 ring-[#496cbf]/30">
                    &lt;/&gt;
                  </div>
                  <span className="text-sm font-mono text-[#496cbf]/80 uppercase tracking-wider">
                    Developer Philosophy
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6 text-neutral-900 dark:text-neutral-100">
                  Systems-First Engineering Mindset
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                  I approach development as a systems engineer — building
                  maintainable, scalable, and resilient architectures. Code must
                  not just work; it should be readable, adaptable, and
                  future-proof in production environments.
                </p>

                {/* Code-style Highlights */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#496cbf]" />
                    <span className="text-sm text-neutral-800 dark:text-neutral-200">
                      Clean & Modular Architecture
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#496cbf]" />
                    <span className="text-sm text-neutral-800 dark:text-neutral-200">
                      Version Control Discipline
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#496cbf]" />
                    <span className="text-sm text-neutral-800 dark:text-neutral-200">
                      Long-Term Scalability
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#496cbf]" />
                    <span className="text-sm text-neutral-800 dark:text-neutral-200">
                      Production Reliability
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#496cbf]" />
                    <span className="text-sm text-neutral-800 dark:text-neutral-200">
                      Performance Optimization
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Direction */}
      <div className="relative mb-16 max-w-3xl">
        {/* Top Label */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#496cbf]/30 bg-[#496cbf]/5 px-4 py-1.5 text-xs font-medium text-[#496cbf] mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-[#496cbf]" />
          Career Focus
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-6">
          Career Direction &{" "}
          <span className="text-[#496cbf]">Opportunities</span>
        </h2>

        {/* Accent Line */}
        <div className="h-[2px] w-16 bg-[#496cbf] mb-6" />

        {/* Description */}
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
          I’m actively seeking roles where I can contribute as a{" "}
          <span className="font-medium text-[#496cbf]">
            Laravel or Full Stack PHP Developer
          </span>
          , working on meaningful products, solving real-world problems, and
          collaborating with experienced teams.
        </p>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          I’m also open to{" "}
          <span className="font-medium text-[#496cbf]">freelance</span> and{" "}
          <span className="font-medium text-[#496cbf]">remote</span>{" "}
          opportunities that prioritize quality, long-term collaboration, and
          production-ready development practices.
        </p>
      </div>
    </main>
  );
};

export default AboutClientPage;
