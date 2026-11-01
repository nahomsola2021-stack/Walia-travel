import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_ITEMS } from '../data/gallery';
import { MapPin, Camera, Image as ImageIcon, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { WildStyles, PageHero } from '../components/WildUI';

const CATEGORIES = ['All', 'Wildlife', 'Mountains', 'Landscapes', 'Adventure', 'People & Culture'];

// Adjusted aspect ratios to maintain the masonry rhythm but removed rounded edges
const SHAPES = ['aspect-[3/4]', 'aspect-square', 'aspect-[4/5]', 'aspect-[4/3]', 'aspect-[3/4]', 'aspect-[5/4]'];

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = GALLERY_ITEMS.filter((item) => (activeCategory === 'All' ? true : item.category === activeCategory));
  const current = openIndex !== null ? items[openIndex] : null;

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setOpenIndex((i) => (i === null || items.length === 0 ? i : (i + dir + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [openIndex, close, step]);

  return (
    <div className="w-full min-h-screen bg-[#F7F3E9] text-[#352D27] pb-24 font-sans">
      <WildStyles />

      <PageHero
        tag="Visual anthology"
        title="Expedition gallery"
        sub="Glimpses of high-altitude afro-alpine ridges, endemic wildlife encounters, geothermal calderas, and centuries of living culture."
        image="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000&auto=format&fit=crop"
      />

      {/* FILTERS */}
      <div className="relative z-20 mx-auto -mt-8 max-w-5xl px-4">
        <div className="flex items-center gap-2 overflow-x-auto border border-[#E6DED1] bg-white p-2 shadow-sm sm:justify-center scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`shrink-0 px-5 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${
                activeCategory === cat 
                  ? 'bg-[#173F35] text-white' 
                  : 'bg-transparent text-[#352D27] hover:bg-[#F7F3E9]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* MASONRY */}
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between border-b border-[#E6DED1] pb-4">
          <p className="text-sm font-bold uppercase tracking-wider text-[#352D27]/60">
            {items.length} {items.length === 1 ? 'photo' : 'photos'}
            {activeCategory !== 'All' && <> / {activeCategory}</>}
          </p>
        </div>

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {items.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setOpenIndex(index)}
              aria-label={`Open ${item.title}`}
              className={`group relative mb-6 block w-full break-inside-avoid overflow-hidden bg-black text-left border border-[#E6DED1] ${SHAPES[index % SHAPES.length]}`}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-[1400ms] group-hover:scale-105 group-hover:opacity-100"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
              <span className="absolute left-4 top-4 bg-[#F7F3E9] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#173F35]">{item.category}</span>
              <span className="absolute inset-x-6 bottom-6 text-[#F7F3E9]">
                <span className="block font-serif text-2xl font-bold leading-tight">{item.title}</span>
                <span className="mt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C89B3C]">
                  <MapPin className="h-3.5 w-3.5" />
                  {item.location}
                </span>
              </span>
            </button>
          ))}
        </div>

        {items.length === 0 && (
          <div className="border border-[#E6DED1] bg-white px-4 py-24 text-center">
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#F7F3E9] text-[#173F35]"><ImageIcon className="h-10 w-10" /></div>
            <h3 className="mt-6 font-serif text-3xl font-bold text-[#173F35]">No photos here yet</h3>
            <p className="mt-3 text-[#352D27]/80">There are no photos in this category. Try another one.</p>
            <button onClick={() => setActiveCategory('All')} className="mt-8 bg-[#C89B3C] px-8 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-[#b38830] transition-colors">View all photos</button>
          </div>
        )}
      </section>

      {/* LIGHTBOX */}
      {current && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-[#173F35]/95 backdrop-blur-md lg:flex-row"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
        >
          <button
            onClick={close}
            aria-label="Close gallery"
            className="absolute right-4 top-4 z-50 grid h-12 w-12 place-items-center rounded-full bg-white text-[#173F35] shadow-xl transition hover:bg-[#C89B3C] hover:text-white lg:right-6 lg:top-6"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Image + arrows */}
          <div className="relative flex min-h-0 flex-1 items-center justify-center p-4 pt-20 lg:p-12">
            <img
              key={current.id}
              src={current.imageUrl}
              alt={current.title}
              className="max-h-full max-w-full object-contain shadow-2xl border-4 border-white"
              onClick={(e) => e.stopPropagation()}
            />
            {items.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); step(-1); }}
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-[#C89B3C] lg:left-8"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); step(1); }}
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-[#C89B3C] lg:right-8"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </>
            )}
          </div>

          {/* Details */}
          <aside
            className="shrink-0 border-t border-white/20 bg-[#123129] p-8 text-[#F7F3E9] lg:flex lg:w-[400px] lg:flex-col lg:justify-center lg:border-l lg:border-t-0 lg:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="inline-block bg-[#C89B3C] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white">{current.category}</p>
            <h3 className="mt-6 font-serif text-3xl font-bold leading-tight lg:text-4xl">{current.title}</h3>
            <p className="mt-4 leading-relaxed text-[#F7F3E9]/80">{current.caption}</p>

            <div className="mt-8 space-y-5 border-t border-white/20 pt-8 text-sm">
              <p className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-[#C89B3C]"><MapPin className="h-4 w-4" /></span>
                <span className="font-bold uppercase tracking-wide">{current.location}</span>
              </p>
              {current.photographer && (
                <p className="flex items-center gap-3 text-[#F7F3E9]/80">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-[#C89B3C]"><Camera className="h-4 w-4" /></span>
                  Captured by <span className="font-bold text-white">{current.photographer}</span>
                </p>
              )}
              <p className="text-xs font-bold uppercase tracking-widest text-[#F7F3E9]/50">{(openIndex as number) + 1} of {items.length}</p>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};