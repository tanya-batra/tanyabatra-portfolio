"use client";
import axios from "axios";
import { Cpu } from "lucide-react";
import { useEffect, useState } from "react";
import Loader from "../loader";

export default function TechStackSection() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/skills");
        setSkills(res.data);
      } catch (error) {
        console.log("Error while fetching skills", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section
      id="tech-stack"
      className="relative py-24 max-sm:py-16 px-4 sm:px-10 bg-white dark:bg-[#0b0f19] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-24 -left-20 h-72 w-72 bg-[#496cbf]/20 blur-[140px] rounded-full" />
      <div className="absolute -bottom-24 -right-20 h-72 w-72 bg-indigo-500/20 blur-[140px] rounded-full" />

      <div className="relative max-w-6xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-2xl mx-auto mb-16 relative">
          {/* Badge */}
          <div
            className="mx-auto w-fit flex items-center gap-2 px-4 py-1.5 rounded-full
            bg-[#496cbf]/10 backdrop-blur-md ring-1 ring-[#496cbf]/30
            hover:scale-105 transition-transform duration-300 group"
          >
            <Cpu className="h-4 w-4 text-[#496cbf] group-hover:text-indigo-500 transition-colors duration-300" />
            <span className="text-xs font-semibold text-[#496cbf] group-hover:text-indigo-500 tracking-tight">
              Technical Expertise
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight relative z-10 mt-4">
            <span className="block mb-2">Tech Stack I Work With</span>
            <span className="block h-1 w-24 mx-auto rounded-full bg-[#496cbf]/90 mt-2" />
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            A modern development stack focused on performance, scalability, and
            clean architecture.
            <span className="text-[#496cbf] font-semibold">
              {" "}
              Production-ready tools and technologies.
            </span>
          </p>
        </div>

        {/* ================= STACK GRID ================= */}
        {loading ? (
          <Loader text="Loading Skills..." />
        ) : (
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((tech, index) => (
              <div
                key={index}
                className="
              group relative
              rounded-2xl
              p-[1px]
              bg-gradient-to-br from-[#496cbf]/40 via-transparent to-indigo-500/40
              transition-all duration-300
              hover:scale-[1.04] overflow-hidden
            "
              >
                {/* Inner Card */}
                <div
                  className="
                relative rounded-2xl
                bg-white dark:bg-[#111827]
                border border-neutral-200 dark:border-white/10
                px-5 py-3
                backdrop-blur-md
                transition-all duration-300
                group-hover:border-[#496cbf]/40
                group-hover:shadow-[0_15px_40px_rgba(73,108,191,0.25)]
              "
                >
                  {/* Subtle Top Accent Line */}
                  <div className="absolute top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#496cbf] to-indigo-500 group-hover:w-full transition-all duration-500 rounded-t-2xl" />

                  {/* Glow Layer */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#496cbf]/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="relative z-10 flex items-center gap-3">
                    {/* Status Dot (Dev Inspired) */}
                    <span className="h-2.5 w-2.5 rounded-full bg-[#496cbf] shadow-[0_0_8px_rgba(73,108,191,0.8)] group-hover:bg-indigo-500 transition-colors duration-300" />

                    {/* Skill Name */}
                    <span className="text-sm font-medium tracking-wide text-gray-800 dark:text-gray-200">
                      {tech.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
