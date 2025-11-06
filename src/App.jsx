import { useState } from 'react';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import ChatPanel from './components/ChatPanel';
import ModelGrid from './components/ModelGrid';
import HeroSpline from './components/HeroSpline';

export default function App() {
  const [activePage, setActivePage] = useState('Dashboard');

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
      <TopBar />
      <div className="mx-auto flex max-w-7xl gap-4 px-4 py-4">
        <Sidebar active={activePage} onNavigate={setActivePage} />
        <main className="flex-1 space-y-4">
          {activePage === 'New Chat' ? (
            <div className="space-y-4">
              <HeroSpline />
              <div className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
                <h2 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">New Chat</h2>
                <ChatPanel />
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <HeroSpline />
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">Dashboard</h1>
              </div>
              <ModelGrid />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
