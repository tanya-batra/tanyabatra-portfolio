"use client";

import { Folder, Star, Layers, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import axios from "axios";
import { DashboardSkeleton } from "@/components/admin/DashboardSkeleton";

const statsConfig = [
  {
    key: "projects",
    title: "Projects",
    icon: Folder,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    key: "testimonials",
    title: "Testimonials",
    icon: Star,
    gradient: "from-amber-400 to-orange-500",
  },
  {
    key: "services",
    title: "Services",
    icon: Layers,
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    key: "skills",
    title: "Skills",
    icon: Wrench,
    gradient: "from-purple-500 to-fuchsia-600",
  },

  {
    key: "education",
    title: "Education",
    icon: Folder,
    gradient: "from-cyan-500 to-blue-600",
  },
];

export default function AdminDashboard() {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const loadAnalytics = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/admin/analytics");
        setStats(res.data);
      } catch (error) {
        console.error("Analytics fetch failed", error);
      } finally {
        setLoading(false);
      }
    };

    loadAnalytics();
  }, []);
  if (loading) {
    return <DashboardSkeleton />; // 🔥 PRO DASHBOARD LOADER
  }
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {statsConfig.map((item) => (
        <Card
          key={item.key}
          className="group relative overflow-hidden border border-slate-200/60 dark:border-slate-800
                     bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl
                     shadow-sm hover:shadow-xl transition-all duration-300
                     hover:-translate-y-1"
        >
          {/* Glow Gradient */}
          <div
            className={`absolute -top-20 -right-20 h-40 w-40 rounded-full
                        bg-gradient-to-br ${item.gradient}
                        opacity-20 blur-3xl group-hover:opacity-30 transition`}
          />

          <CardHeader className="relative flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {item.title}
            </CardTitle>

            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl
                          bg-gradient-to-br ${item.gradient}
                          text-white shadow-md`}
            >
              <item.icon className="h-5 w-5" />
            </div>
          </CardHeader>

          <CardContent className="relative">
            <div className="flex items-end gap-2">
              <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                {stats[item.key]}
              </p>
              <span className="mb-1 text-xs text-slate-400">total</span>
            </div>

            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              Updated automatically
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
