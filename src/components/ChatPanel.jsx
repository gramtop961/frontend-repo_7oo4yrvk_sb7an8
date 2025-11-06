import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';

export default function ChatPanel() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm your ScalingWolf AI growth assistant. Ask me where your business might be lagging, and I'll suggest the next best actions." },
  ]);
  const [input, setInput] = useState('');
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages]);

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg = { role: 'user', content: text };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setTimeout(() => {
      const reply = {
        role: 'assistant',
        content:
          'Based on similar companies, the main bottleneck is inconsistent top-of-funnel. Consider standardizing weekly outreach targets and implementing a simple qualification checklist. I can generate a 2-week sprint plan if you like.',
      };
      setMessages((m) => [...m, reply]);
    }, 500);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div ref={listRef} className="scrollbar-thin flex-1 space-y-3 overflow-y-auto p-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex items-start gap-3 ${m.role === 'user' ? 'justify-end' : ''}`}>
            {m.role === 'assistant' && (
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <Bot className="h-4 w-4" />
              </div>
            )}
            <div className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
              m.role === 'assistant'
                ? 'bg-indigo-50 text-indigo-900 dark:bg-indigo-950/40 dark:text-indigo-100'
                : 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100'
            }`}>
              {m.content}
            </div>
            {m.role === 'user' && (
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                <User className="h-4 w-4" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200 p-3 dark:border-gray-800">
        <div className="flex items-end gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            rows={1}
            placeholder="Ask anything about your business…"
            className="min-h-[44px] max-h-40 flex-1 resize-none rounded-xl border border-gray-200 bg-white p-3 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100"
          />
          <button
            onClick={sendMessage}
            className="inline-flex h-11 items-center gap-2 rounded-xl bg-indigo-600 px-4 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700 active:translate-y-px"
          >
            <Send className="h-4 w-4" /> Send
          </button>
        </div>
      </div>
    </div>
  );
}
