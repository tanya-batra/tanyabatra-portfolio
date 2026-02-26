"use client";
import React from "react";
import Loader from "@/components/loader";
import axios from "axios";
import { useEffect, useState } from "react";

const ProjectDetailsClient = ({ id }) => {
  console.log("project id: ", id);

  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`/api/projects/${id}`);
        setProject(res.data);
      } catch (error) {
        console.log("Error while fetching project details", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <Loader text="Loading Project Details" />;

  return (
    <main className="mx-auto max-w-6xl px-4  py-24 max-sm:py-16">
      {/* ================= HERO ================= */}
      <section className="">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#496cbf]/30 bg-[#496cbf]/5 px-4 py-1.5 text-xs font-medium text-[#496cbf] mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-[#496cbf]" />
          {project.category}
        </div>

        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
          {project.title}
        </h1>

        <div className="h-[2px] w-20 bg-[#496cbf] mb-6" />

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed ">
          {project.description}
        </p>
      </section>

      {/* ================= PROJECT INFO CARD ================= */}
      <section className="mt-20 max-sm:mt-10">
        <div className="relative overflow-hidden ">
          {/* Header */}
          <div className="mb-8">
            <h2 className=" text-xl md:text-2xl  font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Technical & Project Information
            </h2>

            <div className="h-[2px] w-20 bg-[#496cbf] mt-4" />
          </div>

          {/* Vertical Info Stack */}
          <div className="space-y-7">
            {/* Category */}
            <div className="group flex flex-col gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-5">
              <span className="text-base font-mono uppercase tracking-wider text-muted-foreground">
                Category
              </span>
              <span className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                {project.category}
              </span>
            </div>

            {/* Developed By */}
            <div className="group flex flex-col gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-8">
              <span className="text-base font-mono uppercase tracking-wider text-muted-foreground">
                Designed & Developed By
              </span>
              <span className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                {project.designedBy}
              </span>
            </div>

            {/* Project Date */}
            <div className="group flex flex-col gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-8">
              <span className="text-base font-mono uppercase tracking-wider text-muted-foreground">
                Project Date
              </span>
              <span className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                {project.projectDate}
              </span>
            </div>

            {/* Technologies */}
            <div className="flex flex-col gap-4">
              <span className="text-base font-mono uppercase tracking-wider text-muted-foreground">
                Keywords
              </span>

              <div className="flex flex-wrap gap-3">
                {project?.keywords?.map((keyword, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 text-sm rounded-full
                bg-[#496cbf]/10 text-[#496cbf]
                border border-[#496cbf]/20
                hover:bg-[#496cbf]/20 transition-colors duration-300"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetailsClient;
