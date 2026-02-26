"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Folder,
  Star,
  Layers,
  Wrench,
  Briefcase,
  Award,
  GraduationCap,
  X,
  Layout,
} from "lucide-react";
import { Button } from "../ui/button";

const menu = [
  { name: "Dashboard", href: "/admin", icon: Layout },
  { name: "Projects", href: "/admin/projects", icon: Folder },
  { name: "Testimonials", href: "/admin/testimonials", icon: Star },
  { name: "Services", href: "/admin/services", icon: Layers },
  { name: "Skills", href: "/admin/skills", icon: Wrench },
  {
    name: "Experiences",
    href: "/admin/experiences",
    icon: Briefcase,
  },
  {
    name: "Educations",
    href: "/admin/educations",
    icon: GraduationCap,
  },
];

export function Sidebar({ onMenuClick }) {
  const pathname = usePathname();

  return (
    <aside className="w-72 min-h-screen backdrop-blur-xl bg-white/80 dark:bg-neutral-900/80 border-r border-[#496cbf]/20 flex flex-col shadow-[0_0_40px_rgba(73,108,191,0.08)]">
      {/* Brand */}
      <div className="px-6 py-6 border-b border-[#496cbf]/20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-[#496cbf] to-indigo-500 flex items-center justify-center text-white font-bold shadow-md">
            TB
          </div>
          <div>
            <h2 className="text-sm font-semibold leading-tight">Admin Panel</h2>
            <p className="text-xs text-muted-foreground">Portfolio Manager</p>
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={onMenuClick}
          className="lg:hidden border-[#496cbf]/30"
        >
          <X className="h-5 w-5 text-[#496cbf]" />
        </Button>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2">
        {menu.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onMenuClick}
              className={`relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group
              ${
                active
                  ? "bg-[#496cbf]/10 text-[#496cbf]"
                  : "hover:bg-[#496cbf]/5"
              }`}
            >
              {active && (
                <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-[#496cbf]" />
              )}

              <div
                className={`h-9 w-9 flex items-center justify-center rounded-lg transition-all
                ${
                  active
                    ? "bg-gradient-to-r from-[#496cbf] to-indigo-500 text-white shadow-md"
                    : "bg-[#496cbf]/10 text-[#496cbf] group-hover:bg-[#496cbf]/20"
                }`}
              >
                <item.icon className="h-4 w-4" />
              </div>

              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-[#496cbf]/20 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Tanya Batra
      </div>
    </aside>
  );
}
