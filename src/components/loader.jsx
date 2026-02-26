"use client";

export default function Loader({ text = "Loading..." }) {
  return (
    <div className="h-full flex items-center justify-center bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-slate-200 dark:border-slate-800" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 border-r-purple-600 animate-spin" />
        </div>

        {/* Text */}
        <p className="text-sm font-medium tracking-wide text-slate-600 dark:text-slate-400">
          {text}
        </p>
      </div>
    </div>
  );
}
