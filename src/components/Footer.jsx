import Link from "next/link";
import { Code2, Mail, ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative  overflow-hidden border-t border-neutral-200/40 dark:border-neutral-800/40 bg-white/70 dark:bg-black/60 backdrop-blur-xl">
      {/* Top Gradient Accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#496cbf]/50 to-transparent" />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#496cbf]/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {/* ================= Brand ================= */}
          <div>
            <Link
              href="/"
              className="group relative flex items-center gap-4 select-none"
            >
              <Image
                src={"/logo.png"}
                alt="tanya batra portfolio logo"
                width={0}
                height={0}
                sizes="100vw"
                className="w-fit h-12"
                priority
              />
            </Link>

            <p className="mt-5 max-w-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Crafting scalable web applications with clean architecture,
              performance-first engineering, and production-grade standards.
            </p>
          </div>

          {/* ================= Navigation ================= */}
          <div>
            <h4 className=" font-semibold tracking-wide text-gray-900 dark:text-white mb-5">
              Explore
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Projects", href: "/projects" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 transition hover:text-[#496cbf]"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#496cbf]/60 opacity-0 group-hover:opacity-100 transition" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= Contact CTA ================= */}
          <div>
            <h4 className=" font-semibold tracking-wide text-gray-900 dark:text-white mb-5">
              Let’s Work Together
            </h4>

            <p className=" text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              Open for freelance collaborations and full-time engineering
              opportunities.
            </p>

            <div className="flex flex-col gap-4">
              <Link href="/contact">
                <Button className="group relative isolate overflow-hidden rounded-xl px-6 py-2.5 bg-gradient-to-r from-[#496cbf] to-indigo-600 text-white shadow-[0_15px_40px_rgba(73,108,191,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(73,108,191,0.6)]">
                  <span className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-700" />

                  <span className="relative flex items-center gap-2">
                    Contact Me
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>

              <Link
                href="mailto:batraofficial.02@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#496cbf] hover:underline underline-offset-4"
              >
                <Mail className="h-4 w-4" />
                batraofficial.02@gmail.com
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-neutral-200/40 dark:bg-neutral-800/40" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Tanya Batra. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/tanya-batra"
              target="_blank"
              className="group transition hover:text-[#496cbf]"
            >
              <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/tanyabatra7814"
              target="_blank"
              className="group transition hover:text-[#496cbf]"
            >
              <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
