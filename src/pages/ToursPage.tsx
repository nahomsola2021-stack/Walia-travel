import React, { useState, useMemo, useEffect } from 'react';
import { Search, Heart, X, MapPin, ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Tour } from '../types';
import { ExtendedTour, TOURS_DATA } from '../data/tours';

interface ToursPageProps {
  onNavigate?: (path: string) => void;
  onOpenInquiry?: (tourName?: string) => void;
  onSelectTour?: (tour: Tour) => void;
  savedTourIds?: string[];
  onToggleSaveTour?: (tourId: string) => void;
}

const CATEGORIES = [
  'Completed Ethiopia Journey',
  'Cultural Journeys',
  'Historical Discoveries',
  'Nature and Adventure',
  'Wildlife Safaris',
  'City Tours',
  'Birding Tours',
  'Specialty Coffee Tours',
];

const LENGTHS = [
  { label: 'Any length', max: 20 },
  { label: '1–3 days', max: 3 },
  { label: 'Up to 7', max: 7 },
  { label: 'Up to 12', max: 12 },
];

const PAGE_SIZE = 6;

const cld = (url: string, t: string) =>
  url && url.includes('res.cloudinary.com') && url.includes('/upload/')
    ? url.replace('/upload/', `/upload/${t}/`)
    : url;

export const ToursPage: React.FC<ToursPageProps> = ({
  onNavigate,
  onOpenInquiry,
  onSelectTour,
  savedTourIds = [],
  onToggleSaveTour = () => {},
}) => {
  const [cats, setCats] = useState<string[]>([]);
  const [maxDays, setMaxDays] = useState(20);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = useMemo(
    () =>
      TOURS_DATA.filter((t: ExtendedTour) => {
        if (cats.length && !cats.includes(t.category)) return false;
        if (t.daysCount > maxDays) return false;
        const q = query.trim().toLowerCase();
        if (q && !`${t.name} ${t.destination} ${t.shortDescription || t.overview}`.toLowerCase().includes(q)) return false;
        return true;
      }),
    [cats, maxDays, query]
  );

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  
  const shown = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const dirty = cats.length > 0 || maxDays < 20 || query !== '';
  
  const reset = () => { 
    setCats([]); 
    setMaxDays(20); 
    setQuery(''); 
    setCurrentPage(1); 
  };

  const open = (t: ExtendedTour) => {
    onSelectTour?.(t as unknown as Tour);
    onNavigate?.(`/tours/${t.id}`);
    window.scrollTo(0, 0);
  };

  const toggleCat = (c: string) => {
    setCats((p) => (p.includes(c) ? p.filter((x) => x !== c) : [...p, c]));
    setCurrentPage(1);
  };

  const priceOf = (t: ExtendedTour) => {
    const p = String(t.priceFrom ?? '');
    if (!/\d/.test(p)) return null;
    return p.startsWith('$') ? p : `$${p}`;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById('journeys')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="tp min-h-screen bg-[#ECE4D3] text-[#10302A]">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Hanken+Grotesk:wght@300;400;500;600;700&display=swap');
        .tp { font-family: 'Hanken Grotesk', system-ui, sans-serif; }
        .tp-serif { font-family: 'Young Serif', Georgia, serif; }
        .tp-scroll { scrollbar-width: none; } .tp-scroll::-webkit-scrollbar { display: none; }
        .tp-tibeb {
          height: 12px; background-color: #F4B81B;
          background-image:
            linear-gradient(135deg, #B23A22 25%, transparent 25%), linear-gradient(225deg, #B23A22 25%, transparent 25%),
            linear-gradient(315deg, #10302A 25%, transparent 25%), linear-gradient(45deg, #10302A 25%, transparent 25%);
          background-size: 12px 12px; background-position: -6px 0, -6px 0, 0 0, 0 0;
        }
        @keyframes tpRise { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: none; } }
        .tp-rise { animation: tpRise .9s cubic-bezier(.2,.7,.2,1) backwards; }
        @media (prefers-reduced-motion: reduce) { .tp-rise { animation: none; } .tp * { transition-duration: 0s !important; } }
      `}} />

      {/* HERO */}
      <section className="relative flex h-[65vh] min-h-[500px] flex-col items-center justify-center overflow-hidden bg-[#10302A] px-5 pt-12 text-center sm:px-8">
        <img
          src={cld(TOURS_DATA[0]?.heroImage || TOURS_DATA[0]?.galleryImages?.[0] || '', 'f_auto,q_auto,w_1920')}
          alt="Ethiopia Landscape"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#10302A]/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#10302A]/90" /> 
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.5)_0%,transparent_60%)]" />

        <div className="tp-rise relative z-10 mx-auto flex max-w-4xl flex-col items-center">
          <div className="mb-6 flex items-center gap-4 opacity-100">
            <span className="h-[1px] w-8 bg-[#F4B81B]/70 shadow-sm"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F4B81B] drop-shadow-md">
              Our Journeys
            </span>
            <span className="h-[1px] w-8 bg-[#F4B81B]/70 shadow-sm"></span>
          </div>

          <h1 className="tp-serif text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.1] tracking-tight text-[#FBF8F0] drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
            Start with a place that <br className="hidden sm:block"/> 
            <span className="font-light italic text-[#F4B81B]">stops you mid-sentence.</span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-xl text-[15px] font-medium leading-relaxed text-[#ECE4D3] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] sm:text-base">
            Discover our carefully curated Ethiopian journeys. Find the route that calls to you, or let our travel designers craft a bespoke adventure.
          </p>

          <button
            onClick={() => {
              document.getElementById('journeys')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group mt-12 flex flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F4B81B] drop-shadow-md transition duration-300 hover:text-[#FBF8F0]"
          >
            Explore Journeys
            <ArrowDown className="h-4 w-4 animate-bounce opacity-90" />
          </button>
        </div>
      </section>

      {/* CATALOGUE HEADER + FILTERS (REDESIGNED) */}
      <section id="journeys" className="mx-auto max-w-7xl scroll-mt-6 px-5 pb-8 pt-20 sm:px-8">
        {/* Top Row: Title and Search */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="tp-serif text-5xl tracking-tight text-[#10302A] sm:text-6xl">
            {filtered.length} {filtered.length === 1 ? 'journey' : 'journeys'}
          </h2>
          <div className="relative w-full lg:w-[28rem]">
            <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#10302A]/40" strokeWidth={2} />
            <input
              value={query}
              onChange={(e) => { setQuery(e.target.value); setCurrentPage(1); }}
              placeholder="Search a place or experience"
              aria-label="Search journeys"
              className="w-full rounded-full border-[1.5px] border-[#10302A] bg-transparent py-3.5 pl-12 pr-5 text-[15px] text-[#10302A] placeholder:text-[#10302A]/50 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#10302A]/20"
            />
          </div>
        </div>

        {/* Bottom Row: Categories and Length Filter */}
        <div className="mt-8 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          
          {/* Categories */}
          <div className="tp-scroll -mx-1 flex flex-1 gap-2.5 overflow-x-auto px-1 pb-2">
            {CATEGORIES.map((c) => {
              const on = cats.includes(c);
              return (
                <button
                  key={c}
                  onClick={() => toggleCat(c)}
                  aria-pressed={on}
                  className={`shrink-0 rounded-full border-[1.5px] px-5 py-2.5 text-[14px] font-medium transition-all ${
                    on 
                      ? 'border-[#10302A] bg-[#10302A] text-white shadow-md' 
                      : 'border-[#10302A]/25 text-[#10302A] hover:border-[#10302A]/50 hover:bg-[#10302A]/5'
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>

          {/* Length Segmented Control & Clear */}
          <div className="flex shrink-0 items-center gap-4">
            <div className="flex items-center rounded-full border-[1.5px] border-[#10302A] bg-transparent p-1">
              {LENGTHS.map((l) => (
                <button
                  key={l.max}
                  onClick={() => { setMaxDays(l.max); setCurrentPage(1); }}
                  aria-pressed={maxDays === l.max}
                  className={`rounded-full px-5 py-2 text-[13px] font-semibold transition-all ${
                    maxDays === l.max 
                      ? 'bg-[#F4B81B] text-[#10302A] shadow-sm' 
                      : 'text-[#10302A] hover:bg-[#10302A]/5'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            
            {dirty && (
              <button 
                onClick={reset} 
                className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#B23A22] transition-colors hover:text-[#10302A]"
              >
                <X className="h-4 w-4" strokeWidth={2.5} /> Clear
              </button>
            )}
          </div>

        </div>
      </section>

      {/* CARDS */}
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-4 sm:px-8">
        {filtered.length === 0 ? (
          <div className="rounded-[2rem] border-2 border-dashed border-[#10302A]/30 px-6 py-20 text-center">
            <h3 className="tp-serif text-3xl">Nothing matches those filters</h3>
            <p className="mx-auto mt-3 max-w-md text-[#10302A]/70">Widen the trip length or remove a style. Or ask our designers for a private route.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <button onClick={reset} className="rounded-full bg-[#10302A] px-6 py-3 text-sm font-semibold text-[#ECE4D3] hover:bg-[#2E6B4F]">Clear filters</button>
              <button onClick={() => onOpenInquiry?.('Custom Bespoke Itinerary')} className="rounded-full border-2 border-[#10302A] px-6 py-3 text-sm font-semibold hover:bg-[#10302A] hover:text-[#ECE4D3]">Ask for a custom route</button>
            </div>
          </div>
        ) : (
          <>
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {shown.map((t: ExtendedTour) => {
                const saved = savedTourIds.includes(t.id);
                const price = priceOf(t);
                return (
                  <article
                    key={t.id}
                    onClick={() => open(t)}
                    className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border-2 border-[#10302A] bg-[#FBF8F0] shadow-[6px_6px_0_#10302A] transition-all duration-300 hover:-translate-y-1 hover:translate-x-[-2px] hover:shadow-[10px_10px_0_#B23A22]"
                  >
                    <div className="relative aspect-[16/11] overflow-hidden bg-[#10302A]">
                      <img
                        src={cld(t.heroImage || t.galleryImages?.[0] || '', 'f_auto,q_auto,w_800')}
                        alt={t.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                      />
                      <span className="absolute left-4 top-4 rounded-full border-2 border-[#10302A] bg-[#F4B81B] px-3 py-1 text-xs font-bold">
                        {t.category}
                      </span>
                      <button
                        onClick={(e) => { e.stopPropagation(); onToggleSaveTour(t.id); }}
                        aria-label={saved ? 'Remove from saved' : 'Save journey'}
                        aria-pressed={saved}
                        className={`absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border-2 border-[#10302A] transition ${saved ? 'bg-[#B23A22] text-white' : 'bg-[#FBF8F0] hover:bg-[#F4B81B]'}`}
                      >
                        <Heart className={`h-4 w-4 ${saved ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                    <div className="tp-tibeb" />

                    <div className="flex-1 p-6">
                      <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-[#2E6B4F]">
                        <MapPin className="h-3.5 w-3.5" /> {t.destination}
                      </p>
                      <h3 className="tp-serif line-clamp-2 text-2xl leading-tight">{t.name}</h3>
                      <p className="mt-3 line-clamp-2 text-[15px] leading-relaxed text-[#10302A]/70">{t.shortDescription || t.overview}</p>
                    </div>

                    {/* perforation */}
                    <div className="relative">
                      <span className="absolute -left-3.5 -top-3.5 h-7 w-7 rounded-full border-2 border-[#10302A] bg-[#ECE4D3]" />
                      <span className="absolute -right-3.5 -top-3.5 h-7 w-7 rounded-full border-2 border-[#10302A] bg-[#ECE4D3]" />
                      <div className="mx-6 border-t-2 border-dashed border-[#10302A]/35" />
                    </div>

                    <div className="grid grid-cols-3 gap-3 px-6 pb-5 pt-4 text-sm">
                      <div>
                        <p className="text-xs text-[#10302A]/55">Length</p>
                        <p className="font-bold">{t.daysCount} {t.daysCount === 1 ? 'day' : 'days'}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#10302A]/55">Pace</p>
                        <p className="truncate font-bold">{t.difficulty || 'Easy'}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-[#10302A]/55">{price ? 'From' : 'Price'}</p>
                        <p className="font-bold">{price || 'On request'}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <nav aria-label="Pagination" className="mt-16 flex items-center justify-center gap-3">
                <button
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  aria-label="Previous page"
                  className="grid h-12 w-12 cursor-pointer place-items-center rounded-full border-[1.5px] border-[#10302A] transition-colors hover:bg-[#10302A] hover:text-[#ECE4D3] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-[#10302A]"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      aria-current={currentPage === page}
                      className={`grid h-12 w-12 cursor-pointer place-items-center rounded-full border-[1.5px] font-bold transition-all ${
                        currentPage === page
                          ? 'border-[#10302A] bg-[#10302A] text-[#ECE4D3] shadow-[4px_4px_0_#F4B81B]'
                          : 'border-[#10302A] text-[#10302A] hover:bg-[#F4B81B] hover:shadow-[4px_4px_0_#10302A]'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  aria-label="Next page"
                  className="grid h-12 w-12 cursor-pointer place-items-center rounded-full border-[1.5px] border-[#10302A] transition-colors hover:bg-[#10302A] hover:text-[#ECE4D3] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-[#10302A]"
                >
                  <ChevronRight size={20} />
                </button>
              </nav>
            )}
          </>
        )}
      </section>

      {/* BESPOKE */}
      <section className="bg-[#10302A] text-[#ECE4D3]">
        <div className="tp-tibeb" />
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="tp-serif text-4xl leading-tight sm:text-5xl">Don’t see your Ethiopia? We’ll draw it.</h2>
            <p className="mt-4 text-lg leading-relaxed text-[#ECE4D3]/75">
              Share your dates, pace and interests. A travel designer replies with a private itinerary built only for your group.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => onNavigate?.('/planner')} className="rounded-full bg-[#F4B81B] px-7 py-3.5 text-sm font-bold text-[#10302A] transition hover:bg-white">
              Open the journey planner
            </button>
            <button onClick={() => onOpenInquiry?.('Custom Bespoke Itinerary')} className="rounded-full border-2 border-[#ECE4D3]/40 px-7 py-3.5 text-sm font-bold transition hover:border-[#F4B81B] hover:text-[#F4B81B]">
              Talk to a designer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};