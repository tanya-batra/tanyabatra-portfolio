"use client";

import { AdminHeader } from "@/components/admin/AdminHeader";
import { Sidebar } from "@/components/admin/Sidebar";
import { useEffect, useState } from "react";

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen overflow-hidden bg-gradient-to-br from-[#f8fafc] via-white to-[#eef2ff] dark:from-black dark:via-neutral-950 dark:to-black">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #496cbf 1px, transparent 1px), linear-gradient(to bottom, #496cbf 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow Effects */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#496cbf]/20 blur-[160px] rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-400/20 blur-[160px] rounded-full" />

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed z-50 inset-y-0 left-0 w-72 transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:static lg:translate-x-0`}
      >
        <Sidebar onMenuClick={() => setOpen(false)} />
      </div>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col relative z-10">
        <AdminHeader onMenuClick={() => setOpen(true)} />
        <main className=" p-6 md:p-10 h-[85vh] overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
