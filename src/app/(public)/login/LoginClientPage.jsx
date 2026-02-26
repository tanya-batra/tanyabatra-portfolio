"use client";
import {
  ShieldCheck,
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  Terminal,
  ArrowLeft,
  Loader2,
} from "lucide-react";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import axios from "axios";
import { toast } from "sonner";
const LoginClientPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/api/admin/login", data);
      if (res.data.success) {
        toast.success(res.data.message);
        router.push("/admin");
      }
    } catch (error) {
      console.log("Error: ", error);

      toast.error("Something Went wrong please try again later");
    }
  };
  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-[#f8fafc] via-white to-[#eef2ff] dark:from-black dark:via-neutral-950 dark:to-black">
      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #496cbf 1px, transparent 1px), linear-gradient(to bottom, #496cbf 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow Effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#496cbf]/20 blur-[140px] rounded-full" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-400/20 blur-[140px] rounded-full" />

      <div className="relative w-full max-w-md">
        {/* Developer Branding */}
        <div className="flex flex-col items-center mb-10 text-center">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Secure Admin Login
          </h1>

          <p className="text-sm text-muted-foreground mt-2 max-w-xs">
            Authentication required to access dashboard, manage content, and
            control backend systems.
          </p>
        </div>

        {/* Glass Card */}
        <div
          className="relative rounded-3xl border border-[#496cbf]/20
            bg-white/80 dark:bg-neutral-900/70
            backdrop-blur-2xl p-8 md:p-10
            shadow-[0_40px_120px_rgba(73,108,191,0.15)]"
        >
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                Email Address
              </label>

              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-[#496cbf] transition-colors" />
                <input
                  type="email"
                  required
                  {...register("email", { required: "Email is required" })}
                  placeholder="admin@portfolio.com"
                  className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700
                    bg-white dark:bg-neutral-950
                    pl-11 pr-4 py-3 text-sm
                    focus:outline-none focus:ring-1 focus:ring-[#496cbf]
                    focus:border-[#496cbf]
                    transition-all duration-300"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium mb-2 block">Password</label>

              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-[#496cbf] transition-colors" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700
      bg-white dark:bg-neutral-950
      pl-11 pr-12 py-3 text-sm
      focus:outline-none focus:ring-1 focus:ring-[#496cbf]
      focus:border-[#496cbf]
      transition-all duration-300"
                />

                {/* Eye Toggle Button */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 
      p-1 rounded-md
      text-muted-foreground
      hover:text-[#496cbf]
      focus:outline-none focus:ring-1 focus:ring-[#496cbf]/40
      transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group w-full flex items-center justify-center gap-2 rounded-xl py-3 font-medium text-white
                bg-gradient-to-r from-[#496cbf] to-indigo-500
                shadow-[0_10px_20px_rgba(73,108,191,0.35)]
                hover:shadow-[0_15px_30px_rgba(73,108,191,0.45)]
                transition-all duration-300 hover:-translate-y-0.5"
            >
              {isSubmitting ? "Authenticating..." : "Authenticate"}
              {isSubmitting ? (
                <Loader2 className="animate-spin" />
              ) : (
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />

          {/* Back */}
          <div className="text-center text-sm text-muted-foreground ">
            <Link
              href="/"
              className="text-[#496cbf] hover:text-indigo-500 transition-colors flex items-center mx-auto w-fit "
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
            </Link>
          </div>

          {/* Glow Accent */}
          <div className="absolute -z-10 -top-10 -right-10 h-48 w-48 rounded-full bg-[#496cbf]/20 blur-[120px]" />
        </div>
      </div>
    </main>
  );
};

export default LoginClientPage;
