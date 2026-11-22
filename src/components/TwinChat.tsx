'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, Loader2, MessageCircle, X } from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_TWIN_API_URL;

type Msg = { role: 'user' | 'assistant'; content: string };

const starters = [
  'What do you do right now?',
  'Tell me about PM + FOREMAN',
  'What kind of consulting work do you take on?',
  'How can I get in touch?',
];

const GREETING: Msg = {
  role: 'assistant',
  content:
    'Hi! I’m Jonny’s **AI twin**. I’m trained on his résumé and portfolio. Ask me about his data and BI work, the projects on this site, or how to work with him.',
};

/** Minimal, safe markdown: **bold**, [links](https://…), bare URLs and "- " bullets. No HTML injection. */
function renderInline(text: string, keyBase: string) {
  const parts: React.ReactNode[] = [];
  const re = /\*\*([^*]+)\*\*|\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)|(https?:\/\/[^\s)]+)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const k = `${keyBase}-${i++}`;
    if (m[1]) parts.push(<strong key={k} className="font-semibold text-fg">{m[1]}</strong>);
    else {
      const href = m[3] || m[4];
      parts.push(
        <a key={k} href={href} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">
          {m[2] || href.replace(/^https?:\/\//, '')}
        </a>,
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function Markdown({ text }: { text: string }) {
  const bullet = /^\s*([-*•]|\d+\.)\s+/;
  const nodes: React.ReactNode[] = [];
  let para: string[] = [];
  let list: string[] = [];
  const flushPara = () => {
    if (!para.length) return;
    const k = nodes.length;
    nodes.push(
      <p key={k} className="my-1.5 first:mt-0 last:mb-0">
        {para.map((l, i) => (
          <Fragment key={i}>
            {i > 0 && <br />}
            {renderInline(l, `${k}-${i}`)}
          </Fragment>
        ))}
      </p>,
    );
    para = [];
  };
  const flushList = () => {
    if (!list.length) return;
    const k = nodes.length;
    nodes.push(
      <ul key={k} className="my-1.5 space-y-1 pl-1">
        {list.map((l, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
            <span>{renderInline(l, `${k}-${i}`)}</span>
          </li>
        ))}
      </ul>,
    );
    list = [];
  };
  for (const line of text.split('\n')) {
    if (!line.trim()) {
      flushPara();
      flushList();
    } else if (bullet.test(line)) {
      flushPara();
      list.push(line.replace(bullet, ''));
    } else {
      flushList();
      para.push(line);
    }
  }
  flushPara();
  flushList();
  return <>{nodes}</>;
}

export default function TwinChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, busy]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    const onOpen = () => setOpen(true);
    window.addEventListener('open-twin', onOpen);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('open-twin', onOpen);
    };
  }, [open]);

  if (!API_URL) return null;

  const send = async (text: string) => {
    const message = text.trim();
    if (!message || busy) return;
    const history = messages.filter((m) => m !== GREETING);
    setMessages((m) => [...m, { role: 'user', content: message }]);
    setInput('');
    setBusy(true);
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, history }),
      });
      const data = await res.json().catch(() => ({}));
      const reply = data.reply || data.error || 'Something went wrong. Please try the contact form.';
      setMessages((m) => [...m, { role: 'assistant', content: reply }]);
    } catch {
      setMessages((m) => [...m, { role: 'assistant', content: 'I couldn’t reach the server. Please try the contact form below.' }]);
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            onClick={() => setOpen(true)}
            className="fixed right-4 bottom-4 z-[60] flex items-center gap-2.5 rounded-full border border-line-strong bg-surface py-2 pr-4 pl-2 shadow-2xl transition-transform hover:-translate-y-0.5 sm:right-6 sm:bottom-6"
            aria-label="Chat with Jonny’s AI twin"
          >
            <span className="relative">
              <Image src="/images/headshot.jpg" alt="" width={36} height={36} className="h-9 w-9 rounded-full object-cover object-top" />
              <span className="pulse-dot absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2 border-surface bg-ok" />
            </span>
            <span className="text-sm font-medium">Ask my AI twin</span>
            <MessageCircle size={16} className="text-accent" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Chat with Jonny’s AI twin"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-3 bottom-3 z-[60] flex h-[min(640px,calc(100dvh-1.5rem))] flex-col overflow-hidden rounded-2xl border border-line-strong bg-bg-elev shadow-2xl sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-[400px]"
          >
            <header className="flex items-center gap-3 border-b border-line px-4 py-3">
              <Image src="/images/headshot.jpg" alt="" width={36} height={36} className="h-9 w-9 rounded-full object-cover object-top" />
              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold">Jonny’s AI twin</div>
                <div className="truncate text-xs text-faint">An AI trained on his résumé & portfolio</div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-8 w-8 place-items-center rounded-full text-muted hover:bg-surface-2 hover:text-fg"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </header>

            <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4" aria-live="polite">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.role === 'user' ? 'rounded-br-md bg-accent text-accent-ink' : 'rounded-bl-md border border-line bg-surface text-fg/90'
                    }`}
                  >
                    {m.role === 'assistant' ? <Markdown text={m.content} /> : m.content}
                  </div>
                </div>
              ))}
              {busy && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl rounded-bl-md border border-line bg-surface px-3.5 py-2.5 text-sm text-faint">
                    <Loader2 size={14} className="animate-spin" /> Thinking…
                  </div>
                </div>
              )}
              {messages.length === 1 && !busy && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {starters.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => send(s)}
                      className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-muted transition-colors hover:border-line-strong hover:text-fg"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="border-t border-line p-3"
            >
              <div className="flex items-end gap-2 rounded-xl border border-line bg-bg px-3 py-2 focus-within:border-accent">
                <textarea
                  ref={inputRef}
                  rows={1}
                  maxLength={1500}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      send(input);
                    }
                  }}
                  placeholder="Ask about my work…"
                  aria-label="Message"
                  className="max-h-28 flex-1 resize-none bg-transparent py-1 text-sm text-fg placeholder:text-faint focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={busy || !input.trim()}
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent text-accent-ink transition-opacity disabled:opacity-40"
                  aria-label="Send"
                >
                  <ArrowUp size={16} />
                </button>
              </div>
              <p className="mt-2 text-center text-[11px] text-faint">AI responses may be imperfect. For anything important, use the contact form.</p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
