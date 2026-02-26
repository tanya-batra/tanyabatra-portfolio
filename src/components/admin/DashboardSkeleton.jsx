export function DashboardSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="relative overflow-hidden rounded-xl border
                         bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl p-6"
        >
          {/* shimmer */}
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          <div className="flex items-center justify-between mb-6">
            <div className="h-4 w-24 rounded bg-slate-200 dark:bg-slate-700" />
            <div className="h-10 w-10 rounded-xl bg-slate-200 dark:bg-slate-700" />
          </div>

          <div className="h-8 w-20 rounded bg-slate-300 dark:bg-slate-600 mb-2" />
          <div className="h-3 w-32 rounded bg-slate-200 dark:bg-slate-700" />
        </div>
      ))}
    </div>
  );
}
