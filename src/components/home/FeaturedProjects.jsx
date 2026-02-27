"use client";

import Link from "next/link";
import { ExternalLink, Laptop } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../loader";

export default function FeaturedProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/projects");
        setProjects(res.data);
      } catch (error) {
        console.log("Error while fetching projects", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="relative py-24 max-sm:py-16 px-4 bg-gray-50 dark:bg-black/80">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 relative">
        {/* Badge / Tag */}
        <div
          className="mx-auto w-fit flex items-center gap-2 px-4 py-1.5 rounded-full
      bg-[#496cbf]/10
      backdrop-blur-md ring-1 ring-[#496cbf]/30
      hover:scale-105 transition-transform duration-300 group"
        >
          {/* Icon with subtle hover glow */}
          <Laptop className="h-4 w-4 text-[#496cbf] group-hover:text-indigo-500 transition-colors duration-300" />

          {/* Badge Text */}
          <span className="text-xs font-semibold text-[#496cbf] group-hover:text-indigo-500 tracking-tight">
            Featured Work
          </span>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight relative z-10 mt-4">
          <span className="block mb-2">My Top Projects</span>
          {/* Underline highlight */}
          <span className="block h-1 w-24 mx-auto rounded-full bg-[#496cbf]/90 mt-2" />
        </h2>

        {/* Section Description */}
        <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
  A collection of my best web development projects built with modern tech stacks, 
  clean architecture, and real-world scalability. 
  <span className="text-[#496cbf] font-semibold">
    Developer-focused, reliable, and performance-driven solutions.
  </span>
</p>
      </div>

      {/* Projects Grid */}
      {loading ? (
        <Loader text="Loading Projects..." />
      ) : (
        <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={`/projects/${project._id}`}
              className="group relative block rounded-xl bg-white shadow-lg overflow-hidden transition-transform duration-500 hover:-translate-y-2 hover:scale-[1.03]"
            >
              {/* Project Image */}
              <div className="h-56 w-full relative overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#496cbf]/20 via-indigo-300/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="px-6 py-6 relative z-10">
                {/* Title + Icon */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                    {project.title}
                  </h3>
                  <ExternalLink className="h-5 w-5 text-[#496cbf] transition-transform duration-300 group-hover:translate-x-1" />
                </div>

                {/* Description */}
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {project.description?.length > 100
                    ? project.description.slice(0, 100) + "..."
                    : project.description}
                </p>

                {/* Tech Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="flex items-center gap-1 text-xs font-mono text-[#496cbf] bg-[#496cbf]/10 px-2 py-1 rounded-lg transition-all duration-300 hover:bg-[#496cbf]/20 hover:text-[#3b5199]"
                    >
                      <ExternalLink className="h-3 w-3 text-[#496cbf]" />{" "}
                      {keyword}
                    </span>
                  ))}
                </div>

                {/* Hover CTA */}
                <div className="mt-4">
                  <span className="inline-flex items-center text-sm font-medium text-[#496cbf] gap-1 group-hover:underline">
                    View Project <ExternalLink className="h-4 w-4" />
                  </span>
                </div>
              </div>

              {/* Background Glow Accents */}
              <div className="absolute -bottom-12 -right-12 h-36 w-36 rounded-full bg-[#496cbf]/25 blur-[120px] animate-pulse-slow" />
              <div className="absolute -top-10 -left-10 h-28 w-28 rounded-full bg-indigo-300/25 blur-[100px] animate-pulse-slow" />
            </Link>
          ))}
        </div>
      )}
      <div className="mt-12 text-center">
        <Link href="/projects">
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
              See All Projects
              <ExternalLink className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
}
