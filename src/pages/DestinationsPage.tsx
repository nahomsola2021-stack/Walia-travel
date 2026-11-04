import React, { useState } from 'react';
import { DESTINATIONS_DATA } from '../data/destinations';
import { Destination } from '../types';
import { Search, X, MapPin, ArrowUpRight } from 'lucide-react';

/*
  Palette: Ink #10302A · Teff #ECE4D3 · Meskel #F4B81B · Clay #B23A22 · Highland #2E6B4F · Moss #7FB08F
  Cards: leaf-shaped corners, a staggered masonry flow, and a 12-month strip that
  lights up the best months to visit (read from each destination's bestSeason text).
*/

interface DestinationsPageProps {
  onSelectDestination: (destination: Destination) => void;
}

const REGIONS = ['All', 'Addis Ababa', 'Lalibela', 'Gondar', 'Simien Mountains', 'Bale Mountains'];

const FALLBACK_IMG =
  'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1600&auto=format&fit=crop';

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const LETTERS = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

/** 
 * Replaces restrictive best seasons with "Almost every month", 
 * while preserving "Year-round" and suffix notes (e.g., "; best for festivals").
 */
const getDisplaySeason = (season?: string) => {
  if (!season) return undefined;
  const lower = season.toLowerCase();
  
  if (lower.includes('year-round') || lower.includes('all year') || lower.includes('almost every month')) {
    return season;
  }
  
  const parts = season.split(';');
  return `Almost every month${parts.length > 1 ? ';' + parts.slice(1).join(';') : ''}`;
};

/** Parses strings to month indices. Correctly processes "Year-round" and "Almost every month". */
const monthsOf = (s?: string): Set<number> | null => {
  if (!s) return null;
  const lower = s.toLowerCase();
  
  // Fully highlight 12 months for year-round
  if (lower.includes('year-round') || lower.includes('all year')) {
    return new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  }
  
  // Highlight 10 months (Sep-Jun) to reflect "almost every month"
  if (lower.includes('almost every month')) {
    return new Set([0, 1, 2, 3, 4, 5, 8, 9, 10, 11]);
  }
  
  const found = (lower.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*/g) || []).map((w) =>
    MONTHS.indexOf(w.slice(0, 3))
  );
  
  if (!found.length) return null;
  
  const set = new Set<number>([found[0]]);
  if (found.length >= 2 && /\b(to|through|until)\b|[–-]/i.test(s)) {
    let i = found[0];
    while (i !== found[1]) { i = (i + 1) % 12; set.add(i); }
  } else found.forEach((m) => set.add(m));
  
  return set;
};

const cld = (url: string, t: string) =>
  url && url.includes('res.cloudinary.com') && url.includes('/upload/')
    ? url.replace('/upload/', `/upload/${t}/`)
    : url;

const RATIOS = ['aspect-[4/5]', 'aspect-square', 'aspect-[4/3]'];

export const DestinationsPage: React.FC<DestinationsPageProps> = ({ onSelectDestination }) => {
  const [tab, setTab] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = DESTINATIONS_DATA.filter((d) => {
    if (tab !== 'All' && !d.name.toLowerCase().includes(tab.toLowerCase())) return false;
    const q = search.trim().toLowerCase();
    if (!q) return true;
    return (
      d.name.toLowerCase().includes(q) ||
      d.description.toLowerCase().includes(q) ||
      (d.wildlife && d.wildlife.some((w) => w.toLowerCase().includes(q)))
    );
  });

  const clear = () => { setSearch(''); setTab('All'); };

  return (
    <div className="dp min-h-screen bg-[#ECE4D3] text-[#10302A]">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Hanken+Grotesk:wght@400;500;600;700&family=Noto+Sans+Ethiopic:wght@800&display=swap');
        .dp { font-family: 'Hanken Grotesk', system-ui, sans-serif; }
        .dp-serif { font-family: 'Young Serif', Georgia, serif; }
        .dp-geez { font-family: 'Noto Sans Ethiopic', sans-serif; -webkit-text-stroke: 1.5px rgba(236,228,211,.16); color: transparent; }
        .dp-scroll { scrollbar-width: none; } .dp-scroll::-webkit-scrollbar { display: none; }
        .dp-tibeb {
          height: 12px; background-color: #F4B81B;
          background-image:
            linear-gradient(135deg, #B23A22 25%, transparent 25%), linear-gradient(225deg, #B23A22 25%, transparent 25%),
            linear-gradient(315deg, #10302A 25%, transparent 25%), linear-gradient(45deg, #10302A 25%, transparent 25%);
          background-size: 12px 12px; background-position: -6px 0, -6px 0, 0 0, 0 0;
        }
        @keyframes dpKb { from { transform: scale(1.02); } to { transform: scale(1.1); } }
        .dp-kb { animation: dpKb 26s ease-out forwards; }
        @keyframes dpRise { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: none; } }
        .dp-rise { animation: dpRise .9s cubic-bezier(.2,.7,.2,1) backwards; }
        @media (prefers-reduced-motion: reduce) { .dp-kb, .dp-rise { animation: none; } .dp * { transition-duration: 0s !important; } }
      `}} />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#10302A] text-[#ECE4D3]">
        <img
          src={cld('https://res.cloudinary.com/dw1ohipim/image/upload/v1784104443/smfqr0psykq2bcpiugcp.jpg', 'f_auto,q_auto,w_2000')}
          alt=""
          fetchPriority="high"
          className="dp-kb absolute inset-0 -z-20 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#10302A] via-[#10302A]/70 to-transparent" />
        <span aria-hidden className="dp-geez pointer-events-none absolute -bottom-8 right-0 -z-10 select-none whitespace-nowrap text-[22vw] leading-none">
          መዳረሻ
        </span>

        <div className="dp-rise mx-auto max-w-7xl px-5 pb-20 pt-36 sm:px-8 sm:pt-44">
          <h1 className="dp-serif max-w-4xl text-[clamp(2.6rem,7vw,6rem)] leading-[1] tracking-tight">
            Eleven places, a thousand years apart.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#ECE4D3]/80">
            Sleep beside a 12th-century rock church, hike a plateau above the clouds, then end in a capital that never goes quiet.
          </p>
        </div>
        <div className="dp-tibeb" />
      </section>

      {/* FILTERS */}
      <div className="mx-auto max-w-7xl px-5 pb-4 pt-10 sm:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="dp-scroll -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
            {REGIONS.map((r) => (
              <button
                key={r}
                onClick={() => setTab(r)}
                aria-pressed={tab === r}
                className={`shrink-0 rounded-full border-2 px-4 py-1.5 text-sm font-semibold transition ${
                  tab === r ? 'border-[#10302A] bg-[#10302A] text-[#ECE4D3]' : 'border-[#10302A]/25 hover:border-[#10302A]'
                }`}
              >
                {r === 'All' ? 'Everywhere' : r}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-80">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#10302A]/50" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search destinations"
              placeholder="Search a place or an animal"
              className="w-full rounded-full border-2 border-[#10302A] bg-transparent py-2.5 pl-11 pr-10 text-sm placeholder:text-[#10302A]/45 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#F4B81B]/50"
            />
            {search && (
              <button onClick={() => setSearch('')} aria-label="Clear search" className="absolute right-3.5 top-1/2 -translate-y-1/2 hover:text-[#B23A22]">
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
        <p className="mt-6 text-sm font-semibold text-[#10302A]/60">
          {filtered.length} {filtered.length === 1 ? 'destination' : 'destinations'}
        </p>
      </div>

      {/* CARDS */}
      <main className="mx-auto max-w-7xl px-5 pb-28 pt-4 sm:px-8">
        {filtered.length === 0 ? (
          <div className="rounded-[2rem] border-2 border-dashed border-[#10302A]/30 px-6 py-20 text-center">
            <h2 className="dp-serif text-3xl">No place or animal matches that</h2>
            <p className="mx-auto mt-3 max-w-md text-[#10302A]/70">Check the spelling, try a region like Lalibela, or start again from all destinations.</p>
            <button onClick={clear} className="mt-7 rounded-full bg-[#10302A] px-6 py-3 text-sm font-bold text-[#ECE4D3] hover:bg-[#2E6B4F]">
              Show all destinations
            </button>
          </div>
        ) : (
          <div className="columns-1 gap-7 sm:columns-2 lg:columns-3">
            {filtered.map((dest, i) => {
              const bg = (dest as any).heroImage || (dest as any).image || FALLBACK_IMG;
              
              // Apply the logic here to widen the destination's best times.
              const displaySeason = getDisplaySeason(dest.bestSeason);
              const best = monthsOf(displaySeason);
              
              return (
                <article
                  key={dest.id}
                  onClick={() => onSelectDestination(dest)}
                  className="group mb-7 cursor-pointer break-inside-avoid overflow-hidden rounded-[2.75rem_0.75rem_2.75rem_0.75rem] bg-[#FBF8F0] shadow-[0_1px_0_#10302A,0_14px_30px_-12px_rgba(16,48,42,.35)] transition-transform duration-500 hover:-translate-y-1.5"
                >
                  <div className={`relative overflow-hidden bg-[#10302A] ${RATIOS[i % 3]}`}>
                    <img
                      src={cld(bg, 'f_auto,q_auto,w_900')}
                      alt={dest.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10302A]/90 via-[#10302A]/10 to-transparent" />
                    <span className="absolute left-0 top-6 inline-flex items-center gap-1.5 rounded-r-full bg-[#F4B81B] py-1.5 pl-5 pr-4 text-sm font-bold">
                      <MapPin className="h-3.5 w-3.5" /> {dest.region}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h2 className="dp-serif text-[28px] leading-tight text-white sm:text-3xl">{dest.name}</h2>
                      {dest.subtitle && <p className="mt-1 text-sm font-medium text-[#F4B81B]">{dest.subtitle}</p>}
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="line-clamp-3 text-[15px] leading-relaxed text-[#10302A]/75">{dest.description}</p>

                    {dest.wildlife && dest.wildlife.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {dest.wildlife.slice(0, 3).map((w, k) => (
                          <span key={k} className="rounded-full bg-[#2E6B4F]/10 px-2.5 py-1 text-xs font-semibold text-[#2E6B4F]">{w}</span>
                        ))}
                        {dest.wildlife.length > 3 && (
                          <span className="rounded-full border border-[#10302A]/20 px-2.5 py-1 text-xs text-[#10302A]/60">+{dest.wildlife.length - 3}</span>
                        )}
                      </div>
                    )}

                    <div className="mt-5">
                      <p className="mb-2 text-xs font-semibold text-[#10302A]/60">
                        Best time to go{displaySeason ? `: ${displaySeason}` : ''}
                      </p>
                      {best && (
                        <div className="grid grid-cols-12 gap-[3px]" aria-hidden>
                          {LETTERS.map((l, m) => (
                            <span
                              key={m}
                              className={`grid h-6 place-items-center rounded-[4px] text-[10px] font-bold ${best.has(m) ? 'bg-[#F4B81B] text-[#10302A]' : 'bg-[#10302A]/8 text-[#10302A]/35'}`}
                              style={best.has(m) ? undefined : { background: 'rgba(16,48,42,.08)' }}
                            >
                              {l}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-dashed border-[#10302A]/30 pt-4 text-sm font-bold">
                      <span>See this destination</span>
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-[#10302A] text-[#ECE4D3] transition group-hover:bg-[#B23A22]">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
};