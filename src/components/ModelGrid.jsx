function Pill({ color }) {
  return <span className={`inline-block h-2 w-14 rounded-full bg-gradient-to-r ${color}`} />;
}

function ModelCard({ title, score, accent = 'from-indigo-500 to-fuchsia-500' }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">{title}</h3>
        <Pill color={accent} />
      </div>
      <div className="mt-6 flex items-end justify-between">
        <div>
          <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">{score}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">health score</div>
        </div>
        <div className="text-xs text-emerald-600 dark:text-emerald-400">+3 this week</div>
      </div>
    </div>
  );
}

export default function ModelGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      <ModelCard title="Team" score="74" accent="from-indigo-500 to-fuchsia-500" />
      <ModelCard title="Sales" score="81" accent="from-emerald-500 to-teal-500" />
      <ModelCard title="Finance" score="69" accent="from-amber-500 to-orange-500" />
      <ModelCard title="Process" score="72" accent="from-sky-500 to-cyan-500" />
      <ModelCard title="Founders" score="85" accent="from-violet-500 to-purple-500" />
    </div>
  );
}
