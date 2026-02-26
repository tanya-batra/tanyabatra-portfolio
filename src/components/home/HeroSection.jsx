import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="relative isolate overflow-hidden py-24 max-sm:py-16"
      aria-label="Hero section"
    >
      {/* Background Atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-[-8rem] h-[42rem] w-[42rem] 
          -translate-x-1/2 rounded-full
          bg-[#496cbf]/25 blur-[140px]"
        />
        <div
          className="absolute right-0 bottom-0 h-[28rem] w-[28rem]
          rounded-full bg-indigo-600/10 blur-[120px]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Status Badge */}
            <div
              className="inline-flex items-center gap-3
  rounded-2xl
  border border-neutral-200
  bg-white/60 dark:bg-neutral-900/60
  backdrop-blur-xl
  px-5 py-2
  text-sm font-medium
  text-neutral-700 dark:text-neutral-200
  shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
            >
              {/* Left Accent Line */}
              <span className="absolute left-0 h-6 w-[3px] rounded-r-full bg-[#496cbf]" />

              {/* Status Dot */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#496cbf] opacity-70 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#496cbf]" />
              </span>

              {/* Text */}
              <span className="tracking-tight">
                <span className="font-semibold text-[#496cbf]">Available</span>{" "}
                for Freelance & Remote Roles
              </span>
            </div>

            {/* Headline */}
            <h1
              className="mt-8 max-w-2xl
  text-4xl sm:text-5xl lg:text-6xl
  font-semibold tracking-tight
  text-neutral-900 dark:text-white"
            >
              Building
              <span className="relative mx-2 inline-block text-[#496cbf]">
                scalable systems
                <span
                  className="absolute -bottom-1 left-0 h-[2px] w-full
      bg-[#496cbf]/30"
                />
              </span>
              <br />
              for modern web applications
            </h1>

            <p
              className="mt-7 max-w-xl text-base leading-relaxed
  text-neutral-600 dark:text-neutral-300
  border-l-2 border-[#496cbf]/40 pl-4"
            >
              Laravel backend developer with 1.5+ years of hands-on experience
              building scalable business applications at{" "}
              <span className="font-medium text-neutral-800 dark:text-white">
                Buildupnet
              </span>
              . I design secure RESTful APIs, structure efficient MySQL schemas,
              and implement clean backend architectures that support real-world
              products — including e-commerce platforms and full-scale salon
              management systems.
            </p>

            {/* CTA Row */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              {/* Primary CTA */}
              <Link href="/contact">
                <Button
                  className="relative group isolate overflow-hidden
                    rounded-xl px-6 py-3 border-[2px] h-full border-[#496cbf]
                    font-medium tracking-tight text-[#496cbf] hover:bg-[#496cbf] hover:text-white
                    bg-[#496cbf]/10
                    transition-all duration-300
                    hover:-translate-y-[1px]"
                >
                  {/* Edge Glow Border */}
                  <span
                    className="pointer-events-none absolute inset-0 rounded-xl
                      ring-1 ring-[#496cbf]/40
                      group-hover:ring-[#496cbf]/70
                      transition-all duration-300"
                  />

                  {/* Subtle Code Gradient Sweep */}
                  <span
                    className="pointer-events-none absolute -left-full top-0 h-full w-full
                      bg-gradient-to-r from-transparent via-white/20 to-transparent
                      group-hover:left-full
                      transition-all duration-700 ease-out"
                  />

                  {/* Content */}
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Let’s Discuss the Role</span>
                    <span
                      className="inline-flex h-5 w-5 items-center justify-center
                        rounded-md group-hover:bg-white/15 bg-[#496cbf] text-white text-xs
                        transition-transform duration-300
                        group-hover:translate-x-1"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </span>
                </Button>
              </Link>

              {/* Secondary CTA */}
              <Link href="/projects">
                <Button
                  variant="outline"
                  className="group relative isolate overflow-hidden
    rounded-xl px-7 py-3 h-full
    border-[2px] border-neutral-300/70 dark:border-neutral-700/70
    bg-white/70 dark:bg-neutral-900/60
    backdrop-blur-xl
    text-neutral-800 dark:text-neutral-200
    shadow-sm
    transition-all duration-300
    hover:-translate-y-[2px]
    hover:border-[#496cbf]/60
    hover:shadow-[0_10px_30px_rgba(73,108,191,0.12)]"
                >
                  {/* Soft Background Highlight */}
                  <span
                    className="absolute inset-0 rounded-xl
      bg-gradient-to-r from-[#496cbf]/5 to-indigo-600/5
      opacity-0 group-hover:opacity-100
      transition-opacity duration-300"
                  />

                  {/* Content */}
                  <span className="relative z-10 flex items-center gap-3 font-medium tracking-tight">
                    <span>View Live Projects</span>

                    <span
                      className="inline-flex items-center justify-center
        h-6 w-6 rounded-lg
        border border-neutral-300 dark:border-neutral-600
        bg-white dark:bg-neutral-800
        transition-all duration-300
        group-hover:border-[#496cbf]/60
        group-hover:bg-[#496cbf]/10"
                    >
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#496cbf]"
                      />
                    </span>
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex justify-center">
            {/* Outer Gradient Glow Layer */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <div className="h-[420px] w-[420px] sm:h-[480px] sm:w-[480px] lg:h-[540px] lg:w-[540px] rounded-full bg-gradient-to-br from-[#496cbf]/30 via-indigo-400/20 to-transparent blur-[120px]" />
            </div>

            {/* Glass Card Container */}
            <div
              className="relative w-[420px] sm:w-[480px] lg:w-[520px]
    rounded-[32px]
    border border-neutral-200/40 dark:border-neutral-800/60
    bg-white/60 dark:bg-neutral-900/60
    backdrop-blur-2xl
    shadow-[0_40px_100px_rgba(73,108,191,0.25)]
    transition-all duration-500
    hover:-translate-y-3 hover:shadow-[0_60px_140px_rgba(73,108,191,0.35)]"
            >
              {/* Subtle Top Gradient Line */}
              <div className="h-[3px] w-full rounded-t-[32px] bg-gradient-to-r from-transparent via-[#496cbf] to-transparent" />

              {/* Inner Soft Border Glow */}
              <div className="absolute inset-0 rounded-[32px] ring-1 ring-inset ring-[#496cbf]/10 pointer-events-none" />

              {/* Image Wrapper */}
              <div className="relative p-10">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-100 to-white dark:from-neutral-800 dark:to-neutral-900">
                  <Image
                    src="/illustration.png"
                    alt="Tanya Batra - Laravel Developer"
                    width={600}
                    height={500}
                    className="w-full h-auto object-contain transition-transform duration-700 hover:scale-[1.03]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
