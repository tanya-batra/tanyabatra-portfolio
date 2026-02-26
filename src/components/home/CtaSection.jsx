import Link from "next/link";
import { Button } from "../ui/button";
import { Code2, Terminal, Briefcase } from "lucide-react";

const CtaSection = () => {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative isolate overflow-hidden py-24 max-sm:py-16 sm:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#496cbf]/5 to-white dark:from-black dark:via-[#496cbf]/10 dark:to-black" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.12] bg-[linear-gradient(to_right,#496cbf_1px,transparent_1px),linear-gradient(to_bottom,#496cbf_1px,transparent_1px)] bg-[size:42px_42px]" />

      {/* Glow Orbs */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#496cbf]/30 blur-[180px]" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          {/* Badge */}
          <div className="mx-auto w-fit flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#496cbf]/10 ring-1 ring-[#496cbf]/30 backdrop-blur-md hover:scale-105 transition-transform duration-300">
            <Terminal className="h-4 w-4 text-[#496cbf]" />
            <span className="text-xs font-semibold text-[#496cbf] tracking-tight">
              Let’s Build Together
            </span>
          </div>

          {/* Title */}
          <h2
            id="cta-heading"
            className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Turning Ideas into
            <span className="block text-[#496cbf] mt-2">
              Scalable, High-Performance Products
            </span>
            <span className="block h-1 w-24 mx-auto rounded-full bg-[#496cbf]/90 mt-5" />
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I design and build modern web applications with clean architecture,
            performance-first mindset, and real-world scalability — whether
            you’re hiring a developer or launching your next product.
          </p>
        </div>

        {/* CTA Card */}
        <div className="relative mx-auto max-w-5xl px-4 sm:px-0">
          {/* Gradient Border Wrapper */}
          <div className="rounded-3xl p-[1px] bg-gradient-to-br from-[#496cbf]/50 via-transparent to-indigo-500/40">
            <div
              className="relative rounded-3xl
      bg-white/80 dark:bg-neutral-900/80
      backdrop-blur-xl
      border border-neutral-200/40 dark:border-neutral-800/50
      shadow-[0_40px_120px_rgba(0,0,0,0.12)]
      p-6 sm:p-8 md:p-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left Content */}
                <div className="text-center md:text-left">
                  <h3
                    className="flex flex-col sm:flex-row items-center sm:items-start
            gap-3 text-xl sm:text-2xl font-semibold
            text-gray-900 dark:text-white"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#496cbf]/10 ring-1 ring-[#496cbf]/30">
                      <Briefcase className="h-5 w-5 text-[#496cbf]" />
                    </span>
                    <span>Open for Freelance & Full-Time Roles</span>
                  </h3>

                  <p
                    className="mt-4 text-sm sm:text-base
            text-gray-600 dark:text-gray-300
            leading-relaxed max-w-md mx-auto md:mx-0"
                  >
                    From MVPs to production-grade platforms, I focus on
                    maintainable code, clean UI, and long-term scalability that
                    supports real business growth.
                  </p>
                </div>

                {/* Right Actions */}
                <div
                  className="flex flex-col items-center md:items-end
          gap-5 sm:gap-6"
                >
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      className="relative group isolate overflow-hidden
              w-full sm:w-auto
              rounded-xl px-8 sm:px-9 py-3 sm:py-3.5
              bg-gradient-to-r from-[#496cbf] to-indigo-600
              text-white font-medium
              shadow-[0_15px_40px_rgba(73,108,191,0.45)]
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_25px_60px_rgba(73,108,191,0.6)]"
                    >
                      {/* Animated border */}
                      <span className="absolute inset-0 rounded-xl ring-1 ring-white/20 group-hover:ring-white/40 transition-all" />

                      {/* Shine effect */}
                      <span className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:left-full transition-all duration-700" />

                      <span className="relative flex items-center justify-center gap-2">
                        Start a Project
                        <Code2 className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </Link>

                  <div className="flex flex-wrap justify-center md:justify-end items-center gap-3 text-sm">
                    <Link
                      href="/resume.pdf"
                      target="_blank"
                      className="font-medium text-[#496cbf] hover:underline underline-offset-4"
                    >
                      View Resume
                    </Link>
                    <span className="text-neutral-400 hidden sm:inline">•</span>
                    <Link
                      href="/projects"
                      className="font-medium text-[#496cbf] hover:underline underline-offset-4"
                    >
                      See Projects
                    </Link>
                  </div>
                </div>
              </div>

              {/* Subtle bottom code-line accent */}
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#496cbf]/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
