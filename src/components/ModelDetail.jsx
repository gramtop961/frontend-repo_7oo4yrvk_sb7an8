import { ArrowLeft, Info, Target, Gauge, Lightbulb } from 'lucide-react';

const gradients = {
  Team: 'from-[#702ABD] via-[#305FB3] to-[#2F7EC0]',
  Sales: 'from-[#702ABD] via-[#305FB3] to-[#2F7EC0]',
  Finance: 'from-[#702ABD] via-[#305FB3] to-[#2F7EC0]',
  Process: 'from-[#702ABD] via-[#305FB3] to-[#2F7EC0]',
  Founders: 'from-[#702ABD] via-[#305FB3] to-[#2F7EC0]',
};

export default function ModelDetail({ modelName, onBack }) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-200 dark:hover:bg-gray-900 md:hidden"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
        <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">{modelName} Overview</h1>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Score</span>
            <span className={`inline-block h-2 w-14 rounded-full bg-gradient-to-r ${gradients[modelName]}`} />
          </div>
          <div className="mt-4 text-4xl font-bold text-gray-900 dark:text-gray-100">{modelName === 'Founders' ? 85 : modelName === 'Sales' ? 81 : modelName === 'Team' ? 74 : modelName === 'Process' ? 72 : 69}</div>
          <div className="text-xs text-emerald-600 dark:text-emerald-400">+3 this week</div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300"><Gauge className="h-4 w-4" /> KPIs</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• Leading indicator uptrend</li>
            <li>• Bottleneck identified</li>
            <li>• Confidence improving</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300"><Info className="h-4 w-4" /> Notes</div>
          <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">This section summarizes AI insights specific to {modelName}. Use it to prioritize actions for the next sprint.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300"><Target className="h-4 w-4" /> Top Priorities</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>1. Define clear weekly targets</li>
            <li>2. Instrument analytics on key steps</li>
            <li>3. Remove the highest-friction blocker</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300"><Lightbulb className="h-4 w-4" /> Suggested Experiments</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>A/B test messaging on a single segment</li>
            <li>Automate one manual process</li>
            <li>Run a 2-week sprint with clear owners</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
