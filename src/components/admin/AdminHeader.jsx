"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { ExternalLink, LogOut, Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function AdminHeader({ onMenuClick }) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.post("/api/admin/logout");
      toast.success("Logged out successfully");
      router.replace("/login");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <header className="sticky top-0 z-30 backdrop-blur-xl bg-white/70 dark:bg-neutral-900/70 border-b border-[#496cbf]/20">
      {/* Accent Gradient Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#496cbf] via-indigo-500 to-purple-600" />

      <div className="flex items-center justify-between px-6 py-4">
        {/* Left */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            onClick={onMenuClick}
            className="lg:hidden border-[#496cbf]/30 hover:bg-[#496cbf]/10"
          >
            <Menu className="h-5 w-5 text-[#496cbf]" />
          </Button>

          <h1 className="text-xl font-semibold tracking-tight">
            Admin Dashboard
          </h1>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            onClick={() => window.open("/", "_blank")}
            className="border-[#496cbf]/30 hover:bg-[#496cbf]/10"
          >
            <ExternalLink className="h-4 w-4 text-[#496cbf]" />
          </Button>

          <Button variant="destructive" size="icon" onClick={handleLogout}>
            <LogOut className="h-4 w-4" />
          </Button>

          {/* Avatar */}
          <div className="h-9 w-9 rounded-xl bg-gradient-to-r from-[#496cbf] to-indigo-500 flex items-center justify-center text-white text-sm font-semibold shadow-md">
            TB
          </div>
        </div>
      </div>
    </header>
  );
}
