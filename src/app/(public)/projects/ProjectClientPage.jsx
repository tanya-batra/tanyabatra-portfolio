"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  Database,
  ServerCog,
  ArrowRight,
  Search,
} from "lucide-react";
import axios from "axios";
import Loader from "@/components/loader";

const ProjectClientPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <main className="py-24 max-sm:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="relative mb-16 max-w-3xl">
        {/* Top Label */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#496cbf]/30 bg-[#496cbf]/5 px-4 py-1.5 text-xs font-medium text-[#496cbf] mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-[#496cbf]" />
          Projects
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-6">
          My Work &<span className="text-[#496cbf]">Projects</span>
        </h2>

        {/* Accent Line */}
        <div className="h-[2px] w-16 bg-[#496cbf] mb-6" />

        {/* Description */}
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          I focus on delivering production-ready applications that solve
          real-world problems. These projects showcase my experience with
          Laravel, PHP, Next.js, MySQL, and structured development workflows.
        </p>
      </section>

      {/* Search Box */}
      <div className="mb-10 ">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by title or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700
      bg-white dark:bg-[#0b0f1f]
      px-4 py-3 pr-10 text-sm
      focus:outline-none focus:ring-2 focus:ring-[#496cbf]/50
      transition-all duration-300"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
            <Search />
          </span>
        </div>
      </div>

      {/* Projects Grid */}
      {loading ? (
        <Loader text="Loading Projects..." />
      ) : filteredProjects.length === 0 ? (
        <div className="col-span-full text-center py-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#496cbf]/10 text-[#496cbf] text-sm font-medium mb-4">
            No Projects Found
          </div>

          <p className="text-gray-500 dark:text-gray-400 text-sm">
            No projects match your search. Try a different keyword.
          </p>
        </div>
      ) : (
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, i) => (
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
        </section>
      )}

      {/* CTA Section */}
      <section className="mt-20 flex flex-col items-center text-center px-4 md:px-0">
        <div className="relative md:max-w-2xl w-full bg-white/30 dark:bg-black/40 backdrop-blur-xl border border-[#496cbf]/20 rounded-3xl p-6 md:p-16 shadow-lg hover:shadow-[0_20px_60px_rgba(73,108,191,0.2)] transition-all duration-500 group">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
            Interested in <span className="text-[#496cbf]">Collaborating?</span>
          </h2>

          {/* Description */}
          <p className="text-muted-foreground mb-8 text-base md:text-lg leading-relaxed">
            I’m open to{" "}
            <span className="font-medium text-[#496cbf]">freelance</span> or{" "}
            <span className="font-medium text-[#496cbf]">full-time</span>{" "}
            opportunities where I can contribute to meaningful projects and
            deliver{" "}
            <span className="font-medium text-[#496cbf]">
              production-ready applications
            </span>{" "}
            with structured workflows.
          </p>

          {/* CTA Button */}
          <Link href="/contact">
            <button
              className="relative overflow-hidden rounded-xl px-10 py-4
        bg-gradient-to-r from-[#496cbf] to-indigo-600 text-white font-medium
        shadow-[0_6px_20px_rgba(73,108,191,0.35)]
        hover:shadow-[0_12px_35px_rgba(73,108,191,0.45)]
        transition-all duration-300 group"
            >
              {/* Glow Layer */}
              <span className="absolute inset-0 bg-white/10 blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300" />

              <span className="relative flex items-center justify-center gap-2">
                Let’s Work Together
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ProjectClientPage;
