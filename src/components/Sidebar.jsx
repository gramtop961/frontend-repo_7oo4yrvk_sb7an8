import { useState } from 'react';
import { Plus, LayoutDashboard, Users, LineChart, Wallet, Cog, Sparkles, MessageSquare } from 'lucide-react';

const NavItem = ({ icon: Icon, label, active = false }) => (
  <button className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
    active
      ? 'bg-indigo-50 font-medium text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300'
      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
  }`}>
    <Icon className="h-4 w-4" />
    <span>{label}</span>
  </button>
);

export default function Sidebar() {
  const [active, setActive] = useState('New Chat');
  const models = [
    { label: 'Team', icon: Users },
    { label: 'Sales', icon: LineChart },
    { label: 'Finance', icon: Wallet },
    { label: 'Process', icon: Cog },
    { label: 'Founders', icon: Sparkles },
  ];

  return (
    <aside className="hidden h-[calc(100vh-64px)] w-64 flex-shrink-0 border-r border-gray-200 p-3 dark:border-gray-800 md:block">
      <div className="flex flex-col gap-2">
        <NavItem icon={Plus} label="New Chat" active={active === 'New Chat'} />
        <NavItem icon={LayoutDashboard} label="Dashboard" active={active === 'Dashboard'} />
        <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-gray-400">Models</div>
        {models.map((m) => (
          <NavItem key={m.label} icon={m.icon} label={m.label} active={active === m.label} />
        ))}
        <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-gray-400">Recent Chats</div>
        <div className="flex flex-col gap-1">
          {['Pricing strategy insights', 'Hiring plan 2025', 'Cashflow bottlenecks'].map((c) => (
            <button key={c} className="flex items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
              <MessageSquare className="h-4 w-4" />
              <span className="line-clamp-1">{c}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
