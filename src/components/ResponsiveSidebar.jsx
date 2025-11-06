import { useState, useEffect } from 'react';
import { Menu, X, Plus, LayoutDashboard, Users, LineChart, Wallet, Cog, Sparkles, MessageSquare } from 'lucide-react';

const NavItem = ({ icon: Icon, label, active = false, onClick }) => (
  <button
    onClick={onClick}
    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
      active
        ? 'bg-indigo-50 font-medium text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300'
        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
    }`}
  >
    <Icon className="h-4 w-4" />
    <span>{label}</span>
  </button>
);

export default function ResponsiveSidebar({ active = 'Dashboard', onNavigate = () => {} }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const models = [
    { label: 'Team', icon: Users },
    { label: 'Sales', icon: LineChart },
    { label: 'Finance', icon: Wallet },
    { label: 'Process', icon: Cog },
    { label: 'Founders', icon: Sparkles },
  ];

  return (
    <>
      {/* Mobile top action bar */}
      <div className="flex items-center justify-between md:hidden">
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-200 dark:hover:bg-gray-900"
        >
          <Menu className="h-4 w-4" /> Menu
        </button>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden h-[calc(100vh-64px)] w-64 flex-shrink-0 border-r border-gray-200 p-3 dark:border-gray-800 md:block">
        <div className="flex flex-col gap-2">
          <NavItem icon={Plus} label="New Chat" active={active === 'New Chat'} onClick={() => onNavigate('New Chat')} />
          <NavItem icon={LayoutDashboard} label="Dashboard" active={active === 'Dashboard'} onClick={() => onNavigate('Dashboard')} />
          <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-gray-400">Models</div>
          {models.map((m) => (
            <NavItem key={m.label} icon={m.icon} label={m.label} active={active === m.label} onClick={() => onNavigate(m.label)} />
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

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[80%] overflow-y-auto border-r border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-gray-950">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Navigation</span>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 transition hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <NavItem icon={Plus} label="New Chat" active={active === 'New Chat'} onClick={() => { onNavigate('New Chat'); setOpen(false); }} />
              <NavItem icon={LayoutDashboard} label="Dashboard" active={active === 'Dashboard'} onClick={() => { onNavigate('Dashboard'); setOpen(false); }} />
              <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-gray-400">Models</div>
              {models.map((m) => (
                <NavItem key={m.label} icon={m.icon} label={m.label} active={active === m.label} onClick={() => { onNavigate(m.label); setOpen(false); }} />
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
          </div>
        </div>
      )}
    </>
  );
}
