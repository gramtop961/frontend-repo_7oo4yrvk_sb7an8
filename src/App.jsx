import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import HeroSpline from './components/HeroSpline';
import ChatPanel from './components/ChatPanel';

function MetricCard({ title, value, trend, accent = 'indigo' }) {
  const color = {
    indigo: 'from-indigo-500 to-fuchsia-500',
    emerald: 'from-emerald-500 to-teal-500',
    amber: 'from-amber-500 to-orange-500',
    sky: 'from-sky-500 to-cyan-500',
  }[accent];

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">{title}</h3>
        <div className={`h-2 w-20 rounded-full bg-gradient-to-r ${color}`} />
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div className="text-3xl font-semibold text-gray-900 dark:text-gray-100">{value}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400">{trend}</div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
      <TopBar />
      <div className="mx-auto flex max-w-7xl gap-4 px-4 py-4">
        <Sidebar />
        <main className="flex-1 space-y-4">
          <HeroSpline />

          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            <MetricCard title="Overall Health" value="78%" trend="+4% this week" accent="indigo" />
            <MetricCard title="Sales Velocity" value="1.3x" trend="+0.2x from last month" accent="emerald" />
            <MetricCard title="Cash Runway" value="8.5 mo" trend="Stable" accent="amber" />
            <MetricCard title="Team NPS" value="62" trend="+3 vs last Q" accent="sky" />
          </section>

          <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
              <h2 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">New Chat</h2>
              <ChatPanel />
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
              <h2 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Model Scores</h2>
              <div className="grid grid-cols-2 gap-3">
                <MetricCard title="Team" value="74" trend="Bar" />
                <MetricCard title="Sales" value="81" trend="Radar" />
                <MetricCard title="Finance" value="69" trend="Circle" />
                <MetricCard title="Process" value="72" trend="Line" />
              </div>
              <div className="mt-3">
                <MetricCard title="Founders" value="85" trend="Scorecard" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
