import React, { useEffect } from 'react';
import { X, ArrowLeft } from 'lucide-react';

/**
 * Walia Wild design system
 * White canvas, forest-green navbar/buttons, jungle-black cinematic heroes.
 * Put this file in /components and import it from every page.
 */
export const WildStyles: React.FC = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap');

    .wl{--g:#1B6B3A;--gd:#0F4A27;--gl:#E8F3EA;--gold:#E8A93B;--ink:#0C1A11;--soft:#4A5A4F;--line:#E1EAE2;--night:#06110A;
      font-family:'Newsreader',Georgia,serif;font-size:1.0625rem;line-height:1.65;color:var(--ink);overflow-x:hidden}
    .wl :where(h1,h2,h3,h4,h5){font-family:'Outfit',system-ui,sans-serif;letter-spacing:-.025em}
    .wl :where(button,input,select,textarea,.wl-d){font-family:'Outfit',system-ui,sans-serif}

    /* Oversized hero lettering, the signature move */
    .wl-giant{font-family:'Outfit',system-ui,sans-serif;font-weight:800;line-height:.78;letter-spacing:-.055em;text-transform:lowercase;user-select:none;pointer-events:none;white-space:nowrap}
    .wl-outline{color:transparent;-webkit-text-stroke:2px rgba(255,255,255,.6)}

    /* Buttons: always green (white + ghost variants only on dark/green surfaces) */
    .wl-btn{display:inline-flex;align-items:center;justify-content:center;gap:.6rem;padding:.95rem 1.9rem;border-radius:999px;background:var(--g);color:#fff;
      font-family:'Outfit',system-ui,sans-serif;font-weight:600;font-size:.95rem;line-height:1.2;border:1px solid transparent;cursor:pointer;
      box-shadow:0 14px 30px -12px rgba(27,107,58,.75);transition:background .3s,color .3s,transform .3s}
    .wl-btn:hover{background:var(--gd);transform:translateY(-2px)}
    .wl-btn-ghost{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.55);backdrop-filter:blur(10px);box-shadow:none}
    .wl-btn-ghost:hover{background:#fff;color:var(--gd)}
    .wl-btn-light{background:#fff;color:var(--gd);box-shadow:none}
    .wl-btn-light:hover{background:var(--gl);color:var(--gd)}
    .wl-btn:disabled{opacity:.55;pointer-events:none}
    .wl a:focus-visible,.wl button:focus-visible,.wl input:focus-visible,.wl select:focus-visible,.wl textarea:focus-visible{outline:3px solid var(--gold);outline-offset:2px}

    .wl-field{width:100%;border-radius:.9rem;border:1px solid var(--line);background:#F7FAF7;padding:.9rem 1.15rem;font-size:.95rem;color:var(--ink);transition:border-color .25s,background .25s,box-shadow .25s}
    .wl-field::placeholder{color:#8A998E}
    .wl-field:focus{outline:none;border-color:var(--g);background:#fff;box-shadow:0 0 0 3px rgba(27,107,58,.15)}

    @keyframes wl-kb{from{transform:scale(1.12)}to{transform:scale(1)}}
    @keyframes wl-prog{from{width:0}to{width:100%}}
    @keyframes wl-marq{to{transform:translateX(-50%)}}
    @keyframes wl-up{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
    .wl-kb{animation:wl-kb 10s ease-out forwards}
    .wl-marq{animation:wl-marq 45s linear infinite}
    .wl-up{animation:wl-up .9s cubic-bezier(.2,.8,.2,1) both}
    .wl-hide::-webkit-scrollbar{display:none}
    .wl-hide{scrollbar-width:none}
    @media (prefers-reduced-motion:reduce){.wl-kb,.wl-marq,.wl-up{animation:none}}
  `}</style>
);

/* ---------- Page hero: dark cinematic photo + giant ghost word ---------- */
interface PageHeroProps {
  title: string;
  sub: string;
  image: string;
  tag?: string;
  children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({ title, sub, image, tag, children }) => (
  <section className="relative isolate flex min-h-[78vh] items-end overflow-hidden bg-[#06110A] text-white">
    <img src={image} alt="" className="wl-kb absolute inset-0 -z-20 h-full w-full object-cover opacity-80" />
    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#06110A] via-[#06110A]/35 to-[#06110A]/65" />
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_100%,rgba(27,107,58,.5),transparent_60%)]" />
    <div className="mx-auto w-full max-w-7xl px-5 pb-28 pt-40 sm:px-8 lg:pb-32">
      <div className="wl-up max-w-3xl">
        {tag && (
          <span className="wl-d inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm backdrop-blur">
            {tag}
          </span>
        )}
        <h1 className="mt-5 text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">{title}</h1>
        <p className="mt-6 max-w-xl text-lg text-white/85 sm:text-xl">{sub}</p>
        {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
      </div>
    </div>
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
  </section>
);

/* ---------- Green species marquee ---------- */
export const Marquee: React.FC<{ items: string[] }> = ({ items }) => {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden bg-[#1B6B3A] py-5 text-white" aria-hidden>
      <div className="wl-marq flex w-max gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="wl-d flex items-center gap-10 text-2xl font-medium sm:text-3xl">
            {t}
            <span className="h-2 w-2 rounded-full bg-[#E8A93B]" />
          </span>
        ))}
      </div>
    </div>
  );
};

/* ---------- Article reader (used by Home, Tours, Blog) ---------- */
export interface ArticleData {
  image: string;
  title: string;
  category: string;
  author: string;
  excerpt: string;
  body: string[];
  date?: string;
  readTime?: string;
}

interface ArticleModalProps {
  article: ArticleData | null;
  onClose: () => void;
  primaryLabel: string;
  onPrimary: () => void;
  ctaTitle?: string;
  ctaText?: string;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose, primaryLabel, onPrimary, ctaTitle, ctaText }) => {
  useEffect(() => {
    if (!article) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [article, onClose]);

  if (!article) return null;
  const meta = [article.category, article.date, article.readTime].filter(Boolean).join(', ');

  return (
    <div
      className="wl fixed inset-0 z-[100] overflow-y-auto bg-[#06110A]/90 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={article.title}
    >
      <div className="mx-auto flex min-h-full max-w-3xl md:px-4 md:py-10">
        <article onClick={(e) => e.stopPropagation()} className="wl-up relative w-full overflow-hidden bg-white md:rounded-[2rem]">
          <button
            onClick={onClose}
            aria-label="Close article"
            className="fixed right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-[#1B6B3A] text-white shadow-lg transition hover:bg-[#0F4A27] md:absolute"
          >
            <X size={20} />
          </button>
          <div className="relative h-64 md:h-80">
            <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06110A]/60 to-transparent" />
          </div>
          <div className="px-6 pb-12 pt-8 md:px-14">
            <p className="wl-d text-sm font-medium text-[#1B6B3A]">{meta}</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">{article.title}</h2>
            <p className="wl-d mt-4 text-sm text-[#4A5A4F]">By {article.author}</p>
            <p className="mt-8 border-l-4 border-[#1B6B3A] pl-5 text-xl italic leading-relaxed md:text-2xl">{article.excerpt}</p>
            <div className="mt-8 space-y-6 text-lg leading-[1.8] text-[#2D3B31]">
              {article.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-12 rounded-[1.5rem] bg-[#E8F3EA] p-8 text-center">
              {ctaTitle && <h3 className="text-2xl font-bold">{ctaTitle}</h3>}
              {ctaText && <p className="mx-auto mt-2 max-w-md text-[#4A5A4F]">{ctaText}</p>}
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button onClick={onPrimary} className="wl-btn w-full sm:w-auto">{primaryLabel}</button>
                <button onClick={onClose} className="wl-d w-full rounded-full px-6 py-3 text-sm font-semibold text-[#0F4A27] transition hover:bg-white sm:w-auto">
                  Close article
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

/* ---------- Small pill used in detail heroes ---------- */
export const Chip: React.FC<{ solid?: boolean; children: React.ReactNode }> = ({ solid, children }) => (
  <span
    className={`wl-d inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium backdrop-blur ${
      solid ? 'bg-[#1B6B3A] text-white' : 'border border-white/25 bg-white/10 text-white'
    }`}
  >
    {children}
  </span>
);

/* ---------- Hero for destination and tour detail pages ---------- */
interface DetailHeroProps {
  image: string;
  title: string;
  sub?: string;
  onBack: () => void;
  backLabel: string;
  chips?: React.ReactNode;
  action?: React.ReactNode;
}

export const DetailHero: React.FC<DetailHeroProps> = ({ image, title, sub, onBack, backLabel, chips, action }) => (
  <section className="relative isolate flex min-h-[80vh] items-end overflow-hidden bg-[#06110A] text-white">
    <img src={image} alt={title} className="wl-kb absolute inset-0 -z-20 h-full w-full object-cover opacity-80" />
    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#06110A] via-[#06110A]/35 to-[#06110A]/65" />
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_100%,rgba(27,107,58,.5),transparent_60%)]" />

    <div className="absolute inset-x-0 top-24 z-20 md:top-28">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <button onClick={onBack} className="wl-btn wl-btn-ghost !px-5 !py-2.5 !text-sm">
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </button>
        {action}
      </div>
    </div>

    <div className="mx-auto w-full max-w-7xl px-5 pb-28 pt-48 sm:px-8 lg:pb-32">
      <div className="wl-up max-w-4xl">
        {chips && <div className="flex flex-wrap gap-2">{chips}</div>}
        <h1 className="mt-5 text-5xl font-bold leading-[1.03] sm:text-6xl lg:text-7xl">{title}</h1>
        {sub && <p className="mt-6 line-clamp-3 max-w-2xl text-lg text-white/85 sm:text-xl">{sub}</p>}
      </div>
    </div>
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
  </section>
);