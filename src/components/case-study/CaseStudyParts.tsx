import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export interface Metric { value: string; label: string; note?: string }

export const ProjectHero = ({ eyebrow, title, summary, details }: {
  eyebrow: string; title: string; summary: string; details: { label: string; value: string }[];
}) => (
  <header className="pb-16">
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-editorial-muted">{eyebrow}</p>
    <h1 className="max-w-4xl text-4xl font-medium leading-tight text-editorial-fg md:text-6xl">{title}</h1>
    <p className="mt-6 max-w-3xl text-lg leading-relaxed text-editorial-muted md:text-xl">{summary}</p>
    <dl className="mt-10 grid gap-6 border-t border-editorial-line pt-6 md:grid-cols-3">
      {details.map((d) => (
        <div key={d.label}>
          <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-editorial-muted">{d.label}</dt>
          <dd className="mt-2 text-editorial-fg">{d.value}</dd>
        </div>
      ))}
    </dl>
  </header>
);

export const MetricGrid = ({ metrics }: { metrics: Metric[] }) => (
  <section className="grid grid-cols-2 gap-x-8 gap-y-10 border-y border-editorial-line py-12 lg:grid-cols-4" aria-label="Key metrics">
    {metrics.map((m) => (
      <div key={m.label}>
        <p className="text-4xl font-medium text-editorial-fg md:text-5xl">{m.value}</p>
        <p className="mt-3 font-medium text-editorial-fg">{m.label}</p>
        {m.note && <p className="mt-1 text-sm text-editorial-muted">{m.note}</p>}
      </div>
    ))}
  </section>
);

export const CaseStudySection = ({ title, label, children }: { title: string; label?: string; children: ReactNode }) => (
  <section className="grid gap-6 py-16 md:grid-cols-[1fr_2fr] md:gap-12">
    <div className="flex flex-wrap items-center gap-3 self-start">
      <h2 className="text-2xl font-medium text-editorial-fg md:text-3xl">{title}</h2>
      {label && (
        <span className="rounded-full border border-editorial-line px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-editorial-muted">{label}</span>
      )}
    </div>
    <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-editorial-muted">{children}</div>
  </section>
);

export const MediaBlock = ({ src, alt, type = 'image' }: { src?: string; alt?: string; type?: 'image' | 'video' }) => {
  if (!src) return null;
  return (
    <div className="overflow-hidden rounded-lg bg-editorial-media">
      {type === 'video'
        ? <video src={src} className="w-full" autoPlay muted loop playsInline />
        : <img src={src} alt={alt ?? ''} className="w-full" loading="lazy" />}
    </div>
  );
};

export const BeforeAfter = ({ before, after }: { before?: string; after?: string }) => {
  if (!before || !after) return null;
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <MediaBlock src={before} alt="Before" />
      <MediaBlock src={after} alt="After" />
    </div>
  );
};

export const QuoteBlock = ({ quote }: { quote: string }) => (
  <blockquote className="border-l-2 border-editorial-accent pl-6 text-2xl font-medium leading-snug text-editorial-fg">{quote}</blockquote>
);

export const FinancialImpact = ({ label, paragraphs }: { label: string; paragraphs: string[] }) => (
  <CaseStudySection title="Modeled Impact" label={label}>
    {paragraphs.map((p) => <p key={p}>{p}</p>)}
  </CaseStudySection>
);

export const Decision = ({ number, title, body, media }: { number: string; title: string; body: string; media?: string }) => (
  <div className="space-y-3">
    <p className="text-sm font-semibold text-editorial-accent">{number}</p>
    <h3 className="text-xl font-medium text-editorial-fg">{title}</h3>
    <p>{body}</p>
    <MediaBlock src={media} />
  </div>
);

const order = [
  { title: 'Vendor Insurance', path: '/product-designs/hivey/vendor-insurance' },
  { title: 'Enterprise Checkout', path: '/product-designs/hivey/enterprise-checkout' },
  { title: 'Self-Service Onboarding', path: '/product-designs/hivey/self-service-onboarding' },
];

export const ProjectNavigation = ({ current }: { current: string }) => {
  const i = order.findIndex((o) => o.path === current);
  const prev = order[(i - 1 + order.length) % order.length];
  const next = order[(i + 1) % order.length];
  return (
    <nav className="mt-8 grid gap-6 border-t border-editorial-line pt-10 md:grid-cols-3" aria-label="Project navigation">
      <Link to={prev.path} className="group">
        <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-editorial-muted"><ArrowLeft size={14} /> Previous Project</span>
        <span className="mt-2 block text-lg font-medium text-editorial-fg group-hover:text-editorial-accent">{prev.title}</span>
      </Link>
      <Link to="/work" className="text-editorial-fg hover:text-editorial-accent md:text-center md:self-center font-medium">Back to Product Design</Link>
      <Link to={next.path} className="group md:text-right">
        <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-editorial-muted md:justify-end">Next Project <ArrowRight size={14} /></span>
        <span className="mt-2 block text-lg font-medium text-editorial-fg group-hover:text-editorial-accent">{next.title}</span>
      </Link>
    </nav>
  );
};

export const CaseStudyShell = ({ children }: { children: ReactNode }) => (
  <main className="mx-auto max-w-[1600px] px-4 pb-16 pt-16 md:px-8">{children}</main>
);
