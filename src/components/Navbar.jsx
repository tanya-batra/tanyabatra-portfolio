"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Code2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b  bg-white/70 backdrop-blur-xl dark:bg-black/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 md:px-8">
        {/* Brand */}
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

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-1
  rounded-2xl border border-neutral-200
  bg-white/60 dark:bg-neutral-900/60
  backdrop-blur-2xl
  px-2 py-2"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link key={link.name} href={link.href} className="relative group">
                <div
                  className={`relative flex items-center justify-center
          px-5 py-2.5
          text-sm font-medium tracking-tight
          rounded-xl
          transition-all duration-300
          ${
            active
              ? "text-[#496cbf]"
              : "text-neutral-600 dark:text-neutral-300 hover:text-[#496cbf]"
          }`}
                >
                  {/* Subtle Background Glow */}
                  <span
                    className={`absolute inset-0 rounded-xl
            transition-all duration-300
            ${
              active
                ? "bg-[#496cbf]/10"
                : "group-hover:bg-neutral-100 dark:group-hover:bg-neutral-800"
            }`}
                  />

                  {/* Top Active Accent Line */}
                  <span
                    className={`absolute top-0 left-3 right-3 h-[2px]
            rounded-full
            bg-[#496cbf]
            transition-all duration-300
            ${
              active
                ? "opacity-100 scale-x-100"
                : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
            }`}
                  />

                  {/* Text */}
                  <span className="relative z-10">{link.name}</span>
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Resume Button – Developer Style */}
          <Link href="/resume.pdf" target="_blank">
            <Button
              variant="ghost"
              className="group relative overflow-hidden rounded-xl px-6 py-2.5
    border-[2px] border-[#496cbf]/30
    bg-white/60 dark:bg-neutral-900/60
    backdrop-blur-xl
    text-[#496cbf]
    hover:bg-[#496cbf]/10 h-full
    font-medium tracking-tight
    transition-all duration-300
    hover:border-[#496cbf]
    "
            >
              {/* Left Code Accent Bar */}
              <span
                className="absolute left-0 top-0 bottom-0 w-[3px]
      bg-[#496cbf]
      scale-y-0 origin-bottom
      group-hover:scale-y-100
      transition-transform duration-300"
              />

              {/* Content */}
              <span className="relative z-10 flex items-center gap-2">
                {/* Code Tag */}
                <span
                  className="font-mono text-xs px-1.5 py-0.5 rounded
        bg-[#496cbf]/10
        transition-all duration-300
        group-hover:bg-[#496cbf]/20"
                >
                  CV
                </span>

                {/* Text */}
                <span className="transition-all duration-300 group-hover:translate-x-0.5">
                  Resume
                </span>
              </span>
            </Button>
          </Link>

          {/* Hire Me – Premium Gradient Button */}
          <Link href="/contact">
            <Button
              className="relative group isolate overflow-hidden
    rounded-xl px-6 py-2.5 border-[2px] h-full border-[#496cbf]
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
                <span>Let’s Work</span>
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
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="relative rounded-xl">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[340px] p-0 border-l border-neutral-200/40 dark:border-neutral-800/40 dark:bg-black/80 backdrop-blur-2xl"
          >
            <div className="flex flex-col h-full">
              {/* ================= Top Brand ================= */}
              <div className="px-6 pt-8 pb-6 border-b border-neutral-200/40 dark:border-neutral-800/40">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="group flex items-center gap-4"
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl 
            bg-gradient-to-br from-[#496cbf] to-indigo-600
            shadow-md ring-1 ring-[#496cbf]/40 
            transition group-hover:scale-105"
                  >
                    <span className="font-mono text-white text-sm font-bold">
                      {`{T}`}
                    </span>
                  </div>

                  <div className="leading-tight">
                    <p className="text-base font-semibold tracking-tight">
                      Tanya <span className="text-[#496cbf]">Batra</span>
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      Full Stack Engineer
                    </p>
                  </div>
                </Link>
              </div>

              {/* ================= Navigation ================= */}
              <nav className="flex-1 px-6 py-8 space-y-2">
                {navLinks.map((link) => {
                  const active = pathname === link.href;

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group relative block"
                    >
                      <div
                        className={`relative flex items-center justify-between
                px-5 py-3 rounded-xl text-sm font-medium tracking-tight
                transition-all duration-300
                ${
                  active
                    ? "text-[#496cbf]"
                    : "text-neutral-600 dark:text-neutral-300 hover:text-[#496cbf]"
                }`}
                      >
                        {/* Background */}
                        <span
                          className={`absolute inset-0 rounded-xl transition-all
                  ${
                    active
                      ? "bg-[#496cbf]/10"
                      : "group-hover:bg-neutral-100 dark:group-hover:bg-neutral-800"
                  }`}
                        />

                        {/* Left Accent Line */}
                        <span
                          className={`absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-[#496cbf]
                  transition-all duration-300
                  ${
                    active
                      ? "opacity-100 scale-y-100"
                      : "opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100"
                  }`}
                        />

                        <span className="relative z-10">{link.name}</span>
                      </div>
                    </Link>
                  );
                })}
              </nav>

              {/* ================= Bottom CTA ================= */}
              <div className="px-6 pb-8 pt-6 border-t border-neutral-200/40 dark:border-neutral-800/40 flex flex-col gap-3">
                <Link
                  onClick={() => setOpen(false)}
                  href="/resume.pdf"
                  target="_blank"
                >
                  <Button
                    variant="ghost"
                    className="w-full relative overflow-hidden rounded-xl
            border border-[#496cbf]/30
            text-[#496cbf]
            hover:bg-[#496cbf]/10
            transition-all duration-300"
                  >
                    <span className="font-mono text-xs mr-2 bg-[#496cbf]/10 px-1.5 py-0.5 rounded">
                      CV
                    </span>
                    Resume
                  </Button>
                </Link>

                <Link href="/contact" onClick={() => setOpen(false)}>
                  <Button
                    className="w-full relative isolate overflow-hidden rounded-xl
            bg-gradient-to-r from-[#496cbf] to-indigo-600
            text-white font-medium
            shadow-[0_15px_35px_rgba(73,108,191,0.45)]
            transition-all duration-300 hover:-translate-y-1"
                  >
                    <span
                      className="absolute -left-full top-0 h-full w-full 
              bg-gradient-to-r from-transparent via-white/20 to-transparent
              group-hover:left-full transition-all duration-700"
                    />

                    <span className="relative flex items-center justify-center gap-2">
                      Let’s Work
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
