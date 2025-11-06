import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <div className="relative h-[320px] w-full overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <Spline
        scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60 dark:from-gray-950" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="rounded-2xl bg-white/60 px-4 py-2 text-center text-sm font-medium text-gray-800 backdrop-blur dark:bg-gray-900/60 dark:text-gray-100">
          AI voice agent aura animation
        </div>
      </div>
    </div>
  );
}
