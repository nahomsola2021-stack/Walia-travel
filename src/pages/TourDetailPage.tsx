import React, { useState, useEffect } from 'react';
import { 
  MapPin, Check, X, ChevronDown, Share2, ArrowLeft, 
  Heart, Calendar, Activity, Navigation, Sun, Plane, Info 
} from 'lucide-react';
import { Tour } from '../types';
import { ExtendedTour } from '../data/tours';

interface TourDetailPageProps {
  tour: Tour | ExtendedTour;
  onBack: () => void;
  onOpenInquiry: (tourName: string) => void;
}

const cld = (url: string, t: string) =>
  url && url.includes('res.cloudinary.com') && url.includes('/upload/')
    ? url.replace('/upload/', `/upload/${t}/`)
    : url;

export const TourDetailPage: React.FC<TourDetailPageProps> = ({ 
  tour, 
  onBack, 
  onOpenInquiry 
}) => {
  const t = tour as ExtendedTour;
  
  const [openDays, setOpenDays] = useState<number[]>([1]);
  const [isSaved, setIsSaved] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setIsScrolled(window.scrollY > 250);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [t.id]);

  const toggleDay = (n: number) => {
    setOpenDays((prev) => (prev.includes(n) ? prev.filter((d) => d !== n) : [...prev, n]));
  };
  
  const expandAll = () => t.itinerary && setOpenDays(t.itinerary.map((d) => d.day));
  const collapseAll = () => setOpenDays([]);

  const share = async () => {
    try {
      if (navigator.share) await navigator.share({ title: t.name, url: window.location.href });
      else {
        await navigator.clipboard?.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch { /* cancelled */ }
  };

  const priceStr = String(t.priceFrom ?? '');
  const displayPrice = /\d/.test(priceStr) 
    ? (priceStr.startsWith('$') ? priceStr : `$${priceStr}`) 
    : 'On request';

  return (
    <div className="tp min-h-screen bg-[#ECE4D3] text-[#10302A] selection:bg-[#F4B81B] selection:text-[#10302A] pb-24">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Hanken+Grotesk:wght@300;400;500;600;700&display=swap');
        .tp { font-family: 'Hanken Grotesk', system-ui, sans-serif; }
        .tp-serif { font-family: 'Young Serif', Georgia, serif; }
        .tp-tibeb {
          height: 12px; background-color: #F4B81B;
          background-image:
            linear-gradient(135deg, #B23A22 25%, transparent 25%), linear-gradient(225deg, #B23A22 25%, transparent 25%),
            linear-gradient(315deg, #10302A 25%, transparent 25%), linear-gradient(45deg, #10302A 25%, transparent 25%);
          background-size: 12px 12px; background-position: -6px 0, -6px 0, 0 0, 0 0;
        }
        @keyframes tpRise { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: none; } }
        .tp-rise { animation: tpRise .9s cubic-bezier(.2,.7,.2,1) backwards; }
      `}} />

      {/* STICKY NAV BAR (Appears when scrolling down) */}
      <div className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-5 py-4 transition-transform duration-300 border-b-2 border-[#10302A] bg-[#FBF8F0] ${isScrolled ? 'translate-y-0 shadow-[0_4px_0_#10302A]' : '-translate-y-full'}`}>
        <button
          onClick={onBack}
          className="group flex items-center gap-2 rounded-full bg-[#ECE4D3] px-4 py-2.5 border-2 border-[#10302A] transition-all hover:bg-[#F4B81B] hover:shadow-[3px_3px_0_#10302A]"
        >
          <ArrowLeft className="h-4 w-4 text-[#10302A] transition-transform group-hover:-translate-x-1" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#10302A]">
            Back to Tours
          </span>
        </button>
        <button
          onClick={() => onOpenInquiry(t.name)}
          className="rounded-full border-2 border-[#10302A] bg-[#10302A] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#FBF8F0] transition-all hover:bg-[#F4B81B] hover:text-[#10302A] hover:shadow-[3px_3px_0_#10302A]"
        >
          <span className="hidden sm:inline">Inquire </span>Now
        </button>
      </div>

      {/* HERO SECTION */}
      <section className="relative h-[70vh] min-h-[550px] w-full overflow-hidden bg-[#10302A]">
        <img
          src={cld(t.heroImage || t.galleryImages?.[0] || '', 'f_auto,q_auto,w_1920')}
          alt={t.name}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover opacity-80 mix-blend-overlay transition-transform duration-[20s] hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10302A] via-[#10302A]/40 to-black/30" />
        
        {/* Top Nav Bar (Inside Hero) */}
        <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between p-5 sm:px-8 sm:py-6">
          <button
            onClick={onBack}
            className="group flex h-12 items-center gap-2.5 rounded-full bg-[#FBF8F0] px-5 border-2 border-[#10302A] shadow-[4px_4px_0_#10302A] transition-all hover:-translate-y-1 hover:bg-[#F4B81B] hover:shadow-[6px_6px_0_#10302A]"
          >
            <ArrowLeft className="h-5 w-5 text-[#10302A] transition-transform group-hover:-translate-x-1" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#10302A]">
              Back to Tours
            </span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={share}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FBF8F0] border-2 border-[#10302A] shadow-[4px_4px_0_#10302A] transition-all hover:-translate-y-1 hover:bg-[#ECE4D3] hover:shadow-[6px_6px_0_#10302A]"
              aria-label="Share"
            >
              <Share2 className="h-4 w-4" />
            </button>
            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#10302A] shadow-[4px_4px_0_#10302A] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_#10302A] ${isSaved ? 'bg-[#B23A22] text-white' : 'bg-[#FBF8F0] text-[#10302A] hover:bg-[#F4B81B]'}`}
              aria-label="Save Journey"
            >
              <Heart className={`h-5 w-5 ${isSaved ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Hero Content */}
        <div className="tp-rise relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-16 sm:px-8">
          <span className="mb-4 inline-block w-fit rounded-full border-2 border-[#10302A] bg-[#F4B81B] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#10302A] shadow-[3px_3px_0_#10302A]">
            {t.category}
          </span>
          <h1 className="tp-serif max-w-4xl text-4xl text-[#FBF8F0] sm:text-5xl lg:text-7xl leading-[1.05] drop-shadow-xl">
            {t.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-medium text-[#ECE4D3]/90 sm:text-xl drop-shadow-md">
            {t.tagline || t.shortDescription}
          </p>
        </div>
      </section>

      <div className="tp-tibeb" />

      {/* MAIN CONTENT GRID */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          
          {/* LEFT COLUMN: Deep Dive */}
          <div className="flex-1 space-y-16 lg:w-2/3">
            
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
              <div className="rounded-3xl border-2 border-[#10302A] bg-[#FBF8F0] p-4 text-center shadow-[4px_4px_0_#10302A] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0_#B23A22]">
                <Calendar className="mx-auto mb-2 h-6 w-6 text-[#2E6B4F]" />
                <p className="text-xs text-[#10302A]/60 uppercase tracking-widest font-bold">Duration</p>
                <p className="mt-1 font-semibold text-lg">{t.duration || `${t.daysCount} Days`}</p>
              </div>
              <div className="rounded-3xl border-2 border-[#10302A] bg-[#FBF8F0] p-4 text-center shadow-[4px_4px_0_#10302A] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0_#F4B81B]">
                <Activity className="mx-auto mb-2 h-6 w-6 text-[#B23A22]" />
                <p className="text-xs text-[#10302A]/60 uppercase tracking-widest font-bold">Pace</p>
                <p className="mt-1 font-semibold text-lg">{t.difficulty || 'Moderate'}</p>
              </div>
              <div className="rounded-3xl border-2 border-[#10302A] bg-[#FBF8F0] p-4 text-center shadow-[4px_4px_0_#10302A] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0_#2E6B4F]">
                <MapPin className="mx-auto mb-2 h-6 w-6 text-[#F4B81B]" />
                <p className="text-xs text-[#10302A]/60 uppercase tracking-widest font-bold">Region</p>
                <p className="mt-1 font-semibold text-sm leading-tight line-clamp-1">{t.destination}</p>
              </div>
              <div className="rounded-3xl border-2 border-[#10302A] bg-[#FBF8F0] p-4 text-center shadow-[4px_4px_0_#10302A] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0_#B23A22]">
                <Plane className="mx-auto mb-2 h-6 w-6 text-[#10302A]" />
                <p className="text-xs text-[#10302A]/60 uppercase tracking-widest font-bold">Transport</p>
                <p className="mt-1 font-semibold text-sm leading-tight">{t.transportation?.split('+')[0] || 'Varies'}</p>
              </div>
            </div>

            {/* Overview Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-12 bg-[#F4B81B]"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#10302A]/70">The Experience</span>
              </div>
              <h2 className="tp-serif text-3xl sm:text-4xl text-[#10302A]">Expedition Narrative</h2>
              <p className="text-lg leading-relaxed text-[#10302A]/85 sm:text-xl font-medium">
                {t.overview}
              </p>
            </div>

            {/* Highlights */}
            {t.highlights && t.highlights.length > 0 && (
              <div className="space-y-6 rounded-[2rem] border-2 border-[#10302A] bg-[#10302A] p-8 text-[#ECE4D3] sm:p-12 shadow-[8px_8px_0_#F4B81B]">
                <h3 className="tp-serif text-3xl text-[#FBF8F0] sm:text-4xl">Journey Highlights</h3>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">
                  {t.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1 flex shrink-0 h-7 w-7 items-center justify-center rounded-full bg-[#F4B81B] text-[#10302A] border-2 border-[#F4B81B]">
                        <Check size={16} strokeWidth={3} />
                      </div>
                      <span className="font-semibold leading-relaxed text-[15px] sm:text-base">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* ITINERARY (Vertical Timeline Accordion) */}
            {t.itinerary && t.itinerary.length > 0 && (
              <div className="space-y-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <span className="h-[2px] w-12 bg-[#B23A22]"></span>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#10302A]/70">The Route</span>
                    </div>
                    <h2 className="tp-serif text-3xl sm:text-4xl text-[#10302A]">Detailed Itinerary</h2>
                  </div>
                  
                  <div className="flex shrink-0 items-center gap-3">
                    <button onClick={expandAll} className="rounded-full border-2 border-[#10302A] bg-[#10302A] px-5 py-2 text-xs font-bold uppercase tracking-widest text-[#FBF8F0] transition hover:bg-[#F4B81B] hover:text-[#10302A]">
                      Expand All
                    </button>
                    <button onClick={collapseAll} className="rounded-full border-2 border-[#10302A]/30 bg-transparent px-5 py-2 text-xs font-bold uppercase tracking-widest text-[#10302A] transition hover:border-[#10302A] hover:bg-[#FBF8F0]">
                      Collapse
                    </button>
                  </div>
                </div>

                <div className="relative border-l-2 border-dashed border-[#10302A]/40 ml-5 pl-8 sm:ml-8 sm:pl-12 space-y-10 pt-4">
                  {t.itinerary.map((day) => {
                    const isOpen = openDays.includes(day.day);
                    return (
                      <div key={day.day} className="relative">
                        {/* Timeline Node */}
                        <button 
                          onClick={() => toggleDay(day.day)}
                          className={`absolute -left-[45px] sm:-left-[65px] flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#10302A] font-black shadow-[4px_4px_0_#10302A] transition-all hover:scale-110 ${isOpen ? 'bg-[#F4B81B] text-[#10302A]' : 'bg-[#FBF8F0] text-[#10302A]'}`}
                        >
                          D{day.day}
                        </button>
                        
                        {/* Interactive Card */}
                        <div className={`overflow-hidden rounded-3xl border-2 border-[#10302A] bg-[#FBF8F0] transition-all duration-300 ${isOpen ? 'shadow-[8px_8px_0_#B23A22]' : 'shadow-[4px_4px_0_#10302A] hover:-translate-y-1 hover:shadow-[6px_6px_0_#10302A]'}`}>
                          
                          {/* Header (Clickable) */}
                          <div onClick={() => toggleDay(day.day)} className="flex cursor-pointer items-center justify-between gap-4 p-5 sm:p-7">
                            <h4 className="tp-serif text-xl sm:text-2xl leading-tight">{day.title}</h4>
                            <div className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 border-[#10302A] transition-transform duration-300 ${isOpen ? 'bg-[#10302A] text-white rotate-180' : 'bg-transparent text-[#10302A]'}`}>
                              <ChevronDown className="h-4 w-4" strokeWidth={3} />
                            </div>
                          </div>

                          {/* Collapsible Content */}
                          <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                            <div className="overflow-hidden">
                              <div className="border-t-2 border-dashed border-[#10302A]/20 px-5 pb-7 pt-5 sm:px-7 sm:pb-8 sm:pt-6">
                                {day.location && (
                                  <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border-2 border-[#10302A] bg-[#ECE4D3] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#10302A]">
                                    <MapPin size={14} /> {day.location}
                                  </div>
                                )}
                                <p className="text-[#10302A]/80 leading-relaxed text-[15px] sm:text-lg font-medium">
                                  {day.description}
                                </p>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Inclusions & Exclusions */}
            {((t.whatsIncluded && t.whatsIncluded.length > 0) || (t.whatsNotIncluded && t.whatsNotIncluded.length > 0)) && (
              <div className="grid gap-8 sm:grid-cols-2 pt-6">
                
                {/* Included */}
                <div className="rounded-3xl border-2 border-[#10302A] bg-[#2E6B4F] text-[#FBF8F0] p-6 sm:p-8 shadow-[6px_6px_0_#10302A]">
                  <h4 className="tp-serif text-2xl mb-6 flex items-center gap-3">
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-[#FBF8F0] text-[#2E6B4F]"><Check size={18} strokeWidth={3}/></div>
                    Included
                  </h4>
                  <ul className="space-y-4 text-[15px] font-medium">
                    {t.whatsIncluded?.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 border-b border-[#FBF8F0]/20 pb-3 last:border-0 last:pb-0">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F4B81B]" /> 
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Not Included */}
                <div className="rounded-3xl border-2 border-[#10302A] bg-[#FBF8F0] p-6 sm:p-8 shadow-[6px_6px_0_#10302A]">
                  <h4 className="tp-serif text-2xl mb-6 flex items-center gap-3 text-[#10302A]">
                    <div className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#10302A] bg-transparent text-[#B23A22]"><X size={18} strokeWidth={3}/></div>
                    Not Included
                  </h4>
                  <ul className="space-y-4 text-[15px] font-medium text-[#10302A]/80">
                    {t.whatsNotIncluded?.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 border-b border-[#10302A]/10 pb-3 last:border-0 last:pb-0">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B23A22]" /> 
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            )}

            {/* Gallery Section */}
            {t.galleryImages && t.galleryImages.length > 0 && (
              <div className="space-y-8 pt-8">
                <h3 className="tp-serif text-3xl sm:text-4xl text-[#10302A]">Visual Field Notes</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {t.galleryImages.map((img, idx) => (
                    <div key={idx} className="relative aspect-video overflow-hidden rounded-3xl border-2 border-[#10302A] shadow-[6px_6px_0_#10302A] bg-[#10302A]">
                      <img 
                        src={cld(img, 'f_auto,q_auto,w_800')} 
                        alt={`${t.name} visual ${idx + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-110 opacity-90 hover:opacity-100" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* RIGHT COLUMN: Sticky Booking Card */}
          <aside className="w-full lg:sticky lg:top-24 lg:w-[380px] xl:w-[420px] shrink-0">
            <div className="rounded-[2.5rem] border-2 border-[#10302A] bg-[#FBF8F0] p-6 sm:p-8 shadow-[8px_8px_0_#10302A] relative overflow-hidden">
              
              {/* Decorative graphic in background */}
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border-[12px] border-[#F4B81B]/20" />
              
              <div className="relative z-10">
                <p className="text-xs font-bold uppercase tracking-widest text-[#10302A]/50">Start your journey</p>
                <div className="mt-2 mb-8 flex items-baseline gap-2">
                  <span className="tp-serif text-4xl sm:text-5xl">{displayPrice}</span>
                  {displayPrice !== 'On request' && <span className="text-[#10302A]/60 font-medium text-sm">pp</span>}
                </div>

                <div className="mb-8 space-y-4 rounded-2xl border-2 border-[#10302A]/10 bg-[#ECE4D3]/40 p-5">
                  <div className="flex items-start gap-3">
                    <Navigation className="mt-0.5 h-5 w-5 shrink-0 text-[#B23A22]" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#10302A]/60">Route</p>
                      <p className="font-semibold text-sm mt-0.5">{t.startLocation || 'Addis Ababa'} → {t.endLocation || 'Addis Ababa'}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sun className="mt-0.5 h-5 w-5 shrink-0 text-[#F4B81B]" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#10302A]/60">Best Time to Visit</p>
                      <p className="font-semibold text-sm mt-0.5">{t.bestMonths || 'October – March'}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Plane className="mt-0.5 h-5 w-5 shrink-0 text-[#2E6B4F]" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#10302A]/60">Transit</p>
                      <p className="font-semibold text-sm mt-0.5">{t.transportation || 'Domestic Flights & 4WD'}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenInquiry?.(t.name)}
                  className="group relative w-full overflow-hidden rounded-full border-2 border-[#10302A] bg-[#10302A] px-8 py-4 text-center font-bold text-[#FBF8F0] shadow-[4px_4px_0_#F4B81B] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                >
                  <span className="relative z-10 block text-[15px] uppercase tracking-wider">Request this Journey</span>
                </button>

                {t.practicalNotes && t.practicalNotes.length > 0 && (
                  <div className="mt-8 border-t-2 border-dashed border-[#10302A]/20 pt-6">
                    <h5 className="flex items-center gap-2 font-bold text-[#10302A] mb-3 text-sm">
                      <Info size={16} className="text-[#B23A22]" /> Practical Notes
                    </h5>
                    <ul className="space-y-2 text-[13px] font-medium text-[#10302A]/70">
                      {t.practicalNotes.map((note, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="shrink-0">-</span> {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </aside>

        </div>
      </section>
    </div>
  );
};