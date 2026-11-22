import type { VisualKind } from '@/data/projects';

/**
 * Illustrative, code-drawn product views for projects whose real UI is private.
 * All values shown are representative samples, not production data.
 */

function Frame({ title, children, dense }: { title: string; children: React.ReactNode; dense?: boolean }) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-line bg-bg-elev font-mono text-[11px] leading-relaxed sm:text-xs">
      <div className="flex items-center gap-2 border-b border-line px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="ml-2 truncate text-faint">{title}</span>
      </div>
      <div className={`flex-1 ${dense ? 'p-3' : 'p-4'}`}>{children}</div>
    </div>
  );
}

const Ok = () => <span className="text-ok">✓</span>;

function AgentLoop() {
  const checks = ['evidence', 'policy', 'authority'];
  return (
    <Frame title="foreman · wo-1042 · decision log">
      <div className="space-y-2.5">
        <div className="text-faint">
          09:14:02 <span className="text-muted">timer</span> vendor ETA overdue by 26h
        </div>
        <div>
          <span className="text-faint">09:14:03</span> <span className="text-accent">propose</span>{' '}
          <span className="text-fg">chase_vendor(eta, channel=sms)</span>
        </div>
        <div className="rounded-lg border border-line bg-surface p-2.5">
          <div className="mb-1.5 text-faint">kernel.verify()</div>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {checks.map((c) => (
              <span key={c} className="text-muted">
                <Ok /> {c}
              </span>
            ))}
          </div>
        </div>
        <div>
          <span className="text-faint">09:14:03</span> <span className="text-ok">sent</span>{' '}
          <span className="text-muted">· autonomy=auto · tenant policy v12</span>
        </div>
        <div className="text-faint">
          09:14:03 <span className="text-muted">sleep</span> until reply or +4h
        </div>
        <div className="pt-1">
          <span className="text-faint">09:31:47</span> <span className="text-accent">propose</span>{' '}
          <span className="text-fg">approve_nte(+$180)</span>
        </div>
        <div className="text-warn">⏸ over tenant cap: queued for human approval</div>
      </div>
    </Frame>
  );
}

function ModelBoard() {
  // Representative rolling-accuracy curve, ending at the reported live figure.
  const pts = [50.0, 53.1, 51.6, 54.2, 56.0, 54.9, 55.3, 56.4, 55.1, 55.8];
  const w = 300;
  const h = 110;
  const min = 46;
  const max = 62;
  const y = (v: number) => h - ((v - min) / (max - min)) * h;
  const x = (i: number) => (i / (pts.length - 1)) * w;
  const path = pts.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  return (
    <Frame title="degens-mlb · 2026 live accuracy">
      <div className="mb-3 flex items-end justify-between">
        <div>
          <div className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">55.8%</div>
          <div className="text-faint">winner accuracy · n=233</div>
        </div>
        <div className="text-right text-faint">
          <div>
            <span className="text-muted">breakeven</span> 52.4%
          </div>
          <div>
            <span className="text-muted">vegas fav</span> 60.3%
          </div>
        </div>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="h-24 w-full overflow-visible sm:h-28" preserveAspectRatio="none" aria-hidden>
        <line x1="0" x2={w} y1={y(52.4)} y2={y(52.4)} stroke="var(--faint)" strokeDasharray="3 4" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="0" x2={w} y1={y(60.3)} y2={y(60.3)} stroke="var(--warn)" strokeOpacity="0.6" strokeDasharray="3 4" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <path d={path} fill="none" stroke="var(--accent)" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
      </svg>
    </Frame>
  );
}

function Pipeline() {
  const stages = [
    { name: 'scout', note: 'niche + IP gates' },
    { name: 'produce', note: '40 pages generated' },
    { name: 'clean', note: '1-bit line art' },
    { name: 'qa', note: 'canary 3/3 caught' },
    { name: 'merch', note: 'listing + keywords' },
  ];
  return (
    <Frame title="greenaway status · title B07">
      <ol className="space-y-2">
        {stages.map((s, i) => (
          <li key={s.name} className="flex items-center gap-3">
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-soft text-[10px] text-accent">{i + 1}</span>
            <span className="w-16 text-fg">{s.name}</span>
            <span className="h-px flex-1 bg-line" />
            <span className="text-muted">{s.note}</span>
            <Ok />
          </li>
        ))}
      </ol>
      <div className="mt-3 flex justify-between border-t border-line pt-2.5 text-faint">
        <span>242 tests passing</span>
        <span className="text-accent">upload-ready · 1h 28m</span>
      </div>
    </Frame>
  );
}

function DraftRoom() {
  const rows = [
    { pos: 'WR', name: 'Player A', v: 92 },
    { pos: 'RB', name: 'Player B', v: 81 },
    { pos: 'TE', name: 'Player C', v: 64 },
    { pos: 'QB', name: 'Player D', v: 48 },
  ];
  return (
    <Frame title="coach-lasso · draft room · round 4, pick 7">
      <div className="mb-2 flex justify-between text-faint">
        <span>best available</span>
        <span>marginal weekly win value</span>
      </div>
      <div className="space-y-2">
        {rows.map((r, i) => (
          <div key={r.name} className="flex items-center gap-3">
            <span className="w-6 text-faint">{r.pos}</span>
            <span className="w-20 truncate text-fg">{r.name}</span>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-2">
              <div className={`h-full rounded-full ${i === 0 ? 'bg-accent' : 'bg-line-strong'}`} style={{ width: `${r.v}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-lg border border-line bg-surface p-2.5 text-muted">
        <span className="text-accent">coach:</span> WR depth thins after this pick; your bye-week overlap is lowest with A.
      </div>
    </Frame>
  );
}

function Estimator() {
  const lines = [
    { item: 'Labor · 3h', quote: 420, base: 390, flag: false },
    { item: 'Compressor', quote: 1180, base: 760, flag: true },
    { item: 'Refrigerant', quote: 210, base: null as number | null, flag: false },
  ];
  return (
    <Frame title="barker · quote audit · WO-88213">
      <div className="grid grid-cols-[1fr_auto_auto] gap-x-4 gap-y-2">
        <span className="text-faint">line</span>
        <span className="text-right text-faint">quote</span>
        <span className="text-right text-faint">baseline</span>
        {lines.map((l) => (
          <div key={l.item} className="contents">
            <span className="text-fg">{l.item}</span>
            <span className={`text-right ${l.flag ? 'text-warn' : 'text-muted'}`}>${l.quote}</span>
            <span className="text-right text-muted">{l.base === null ? <span className="text-faint">unresolved</span> : `$${l.base}`}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 space-y-1 border-t border-line pt-2.5">
        <div className="text-warn">⚑ compressor +55% vs 3 cited listings</div>
        <div className="text-faint">refrigerant: no confirmed price, not guessed</div>
      </div>
    </Frame>
  );
}

function Harness() {
  return (
    <Frame title="lovelace run.yaml">
      <pre className="whitespace-pre-wrap text-muted">
        <span className="text-accent">objective</span>: characterize billing module{'\n'}
        <span className="text-accent">read</span>:  [src/billing/**, tests/**]{'\n'}
        <span className="text-accent">write</span>: [tests/billing/**]{'\n'}
        <span className="text-accent">allow</span>: [&quot;pnpm vitest run billing&quot;]{'\n'}
        <span className="text-accent">done_when</span>:{'\n'}
        {'  '}- stdout ~ /Tests\s+\d+ passed/{'\n'}
        {'  '}- not ~ /skipped|todo/{'\n'}
        <span className="text-faint">{'\n'}# anything else → run halts (fail closed)</span>
      </pre>
    </Frame>
  );
}

function Crm() {
  const rows = [
    { t: 'Ops dashboard rebuild', s: 0.91 },
    { t: 'Data pipeline audit', s: 0.78 },
    { t: 'Shopify theme tweak', s: 0.22 },
  ];
  return (
    <Frame title="rose · opportunity queue">
      <div className="space-y-2.5">
        {rows.map((r) => (
          <div key={r.t} className="flex items-center justify-between gap-3">
            <span className="truncate text-fg">{r.t}</span>
            <span className={r.s > 0.5 ? 'text-accent' : 'text-faint'}>{r.s.toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 border-t border-line pt-2.5 text-faint">
        prompt v14 · claude · 1.8s · $0.004 / call
      </div>
    </Frame>
  );
}

function Etl() {
  const rows = [
    ['extract', 'court filings', 'daily CSV'],
    ['load', 'parcel roll', '531,000 rows'],
    ['match', 'fuzzy name + address', 'scored'],
    ['score', 'equity estimate', 'ranked'],
  ];
  return (
    <Frame title="records-pipeline · nightly run">
      <div className="space-y-2">
        {rows.map(([verb, what, out]) => (
          <div key={verb} className="flex items-baseline gap-2">
            <span className="w-14 shrink-0 text-accent">{verb}</span>
            <span className="truncate text-muted">{what}</span>
            <span className="ml-auto shrink-0 text-fg">{out}</span>
          </div>
        ))}
        <div className="pt-1 text-faint">personal data stays private · demo values</div>
      </div>
    </Frame>
  );
}

const map: Record<VisualKind, () => React.ReactElement> = {
  'agent-loop': AgentLoop,
  'model-board': ModelBoard,
  pipeline: Pipeline,
  'draft-room': DraftRoom,
  estimator: Estimator,
  harness: Harness,
  crm: Crm,
  etl: Etl,
};

export default function ProjectVisual({ kind }: { kind: VisualKind }) {
  const C = map[kind];
  return <C />;
}
