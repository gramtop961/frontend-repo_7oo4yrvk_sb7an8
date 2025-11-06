import { useState } from 'react';
import TopBar from './components/TopBar';
import ResponsiveSidebar from './components/ResponsiveSidebar';
import ChatPanel from './components/ChatPanel';
import ModelGrid from './components/ModelGrid';
import HeroSpline from './components/HeroSpline';
import ModelDetail from './components/ModelDetail';

export default function App() {
  const [activePage, setActivePage] = useState('Dashboard');

  const isModelPage = ['Team', 'Sales', 'Finance', 'Process', 'Founders'].includes(activePage);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
      <TopBar />
      <div className="mx-auto flex max-w-7xl gap-4 px-4 py-4">
        <div className="md:hidden w-full">
          <ResponsiveSidebar active={activePage} onNavigate={setActivePage} />
        </div>
        <div className="hidden md:block">
          <ResponsiveSidebar active={activePage} onNavigate={setActivePage} />
        </div>
        <main className="flex-1 space-y-4">
          {activePage === 'New Chat' && (
            <div className="space-y-4">
              <HeroSpline />
              <div className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
                <h2 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">New Chat</h2>
                <ChatPanel />
              </div>
            </div>
          )}

          {activePage === 'Dashboard' && (
            <div className="space-y-4">
              <HeroSpline />
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">Dashboard</h1>
              </div>
              <ModelGrid />
            </div>
          )}

          {isModelPage && (
            <div className="space-y-4">
              <HeroSpline />
              <ModelDetail modelName={activePage} onBack={() => setActivePage('Dashboard')} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
