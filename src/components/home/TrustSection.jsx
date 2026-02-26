import { ShieldCheck } from "lucide-react";
import React from "react";

const TrustSection = () => {
  return (
    <section
      id="trust"
      className="relative bg-white dark:bg-[#0f111a] py-24 max-sm:py-16"
      aria-label="Developer Trust Section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 relative">
          <div
            className="mx-auto w-fit flex items-center gap-2 px-4 py-1.5 rounded-full 
  bg-[#496cbf]/10
  backdrop-blur-md  ring-1 ring-[#496cbf]/30
  hover:scale-105 transition-transform duration-300
  group"
          >
            {/* Icon with subtle glow */}
            <ShieldCheck className="h-4 w-4 text-[#496cbf] group-hover:text-indigo-500 transition-colors duration-300" />

            {/* Text */}
            <span className="text-xs font-semibold text-[#496cbf] group-hover:text-indigo-500 tracking-tight">
              Trusted Developer
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight relative z-10 mt-4">
            <span className="block mb-2">Why You Can Trust Me</span>
            {/* Subtle underline / code style highlight */}
            <span className="block h-1 w-24 mx-auto rounded-full bg-[#496cbf]/90 mt-2" />
          </h2>

          <p className="mt-6     text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Proven experience, multiple successful projects, and mastery of
            modern technologies.
            <span className="text-[#496cbf] font-semibold">
              {" "}
              Clean code, scalable systems, and developer-first approach.
            </span>
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: "25+", label: "Projects Completed", accent: "#496cbf" },
            { value: "5+", label: "Certifications Earned", accent: "#496cbf" },
            { value: "20+", label: "Happy Clients", accent: "#496cbf" },
            { value: "1.5+", label: "Years of Experience", accent: "#496cbf" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl bg-[#1f202e] dark:bg-[#0f111a]
    p-10 flex flex-col items-center justify-center
    shadow-[0_12px_30px_rgba(0,0,0,0.15)]
    hover:shadow-[0_25px_80px_rgba(73,108,191,0.45)]
    transition-transform duration-500 group overflow-hidden cursor-pointer
    border border-transparent hover:border-[#496cbf]/30
    transform hover:-translate-y-1 hover:scale-[1.03]"
            >
              {/* Floating Glow Blobs */}
              <div
                className={`absolute -top-16 -right-16 w-48 h-48 rounded-full
      bg-[${stat.accent}]/25 blur-[140px] animate-pulse-slow
      transform group-hover:scale-110 transition-transform duration-700`}
              />
              <div
                className="absolute -bottom-16 -left-16 w-36 h-36 rounded-full
      bg-indigo-500/15 blur-[120px] transform group-hover:scale-105
      transition-transform duration-700"
              />

              {/* Statistic Value with Gradient + Shadow */}
              <h3
                className={`relative z-10 font-bold text-5xl sm:text-6xl tracking-tight
      bg-clip-text text-transparent
      bg-gradient-to-r from-[#496cbf] via-indigo-500 to-[#496cbf]
      drop-shadow-[0_2px_8px_rgba(73,108,191,0.5)]
      animate-text-gradient`}
              >
                {stat.value}
              </h3>

              {/* Label with subtle underline */}
              <p className="mt-3 relative z-10 text-gray-300 dark:text-gray-400 font-medium text-center text-lg sm:text-xl">
                {stat.label}
                <span className="block mx-auto mt-2 h-[2px] w-10 rounded-full bg-[#496cbf]/50"></span>
              </p>

              {/* Abstract Floating Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <span
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-white/15 animate-float-slow"
                    style={{
                      top: `${Math.random() * 85}%`,
                      left: `${Math.random() * 85}%`,
                    }}
                  />
                ))}
              </div>

              {/* Optional subtle highlight circle */}
              <div className="absolute -inset-2 rounded-full border border-[#496cbf]/10 opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
