// Full-width cover hero using provided gradient-themed image asset
// Note: This uses the supplied JPG as a cover background with soft gradient overlays

export default function HeroSpline() {
  const coverUrl =
    'https://cdn.dribbble.com/userupload/16537236/file/original-3c9baf8044faac370974ead6e9a41217.jpg?resize=1504x1003&vertical=center';

  return (
    <div className="relative h-[320px] w-full overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${coverUrl})` }}
      />
      {/* Brand gradient veil using the requested palette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#702ABD]/70 via-[#305FB3]/50 to-[#2F7EC0]/40" />
      {/* Subtle top/bottom fades for legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent dark:from-gray-950/60" />

      {/* Headline */}
      <div className="relative z-10 flex h-full items-center justify-between px-6 py-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white drop-shadow-sm sm:text-3xl">
            Diagnose. Prioritize. Scale.
          </h2>
          <p className="mt-2 max-w-xl text-sm text-white/90">
            AI-powered business diagnostics across Team, Sales, Finance, Process, and Founders.
          </p>
        </div>
        <div className="hidden sm:block">
          <div className="rounded-xl bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur">
            Real-time insights • Actionable playbooks
          </div>
        </div>
      </div>
    </div>
  );
}
