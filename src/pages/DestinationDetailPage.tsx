import React from 'react';
import { Destination } from '../types';
import { TOURS_DATA, ExtendedTour } from '../data/tours';
import { 
  MapPin, Check, Calendar, TrendingUp, ArrowLeft, ArrowUpRight, Compass, Shield
} from 'lucide-react';

interface DestinationDetailPageProps {
  destination: Destination;
  onBack: () => void;
  onSelectTour: (tour: any) => void; // Bypass strict mismatch with any
  onOpenInquiry: (name?: string) => void;
}

export const DestinationDetailPage: React.FC<DestinationDetailPageProps> = ({ 
  destination, 
  onBack, 
  onSelectTour, 
  onOpenInquiry 
}) => {
  const recommendedTours = TOURS_DATA.filter((t) => destination.recommendedTourIds.includes(t.id));

  const facts = [
    { Icon: Calendar, label: 'Optimal Expedition Window', value: destination.bestSeason },
    destination.elevation ? { Icon: TrendingUp, label: 'Highland Elevation', value: destination.elevation } : null,
    { Icon: MapPin, label: 'Territory & Region', value: destination.region },
  ].filter(Boolean) as { Icon: React.ElementType; label: string; value: string }[];

  return (
    <div className="w-full min-h-screen bg-[#FAF7F0] text-[#2C241E] pb-24 antialiased">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Source+Sans+3:wght@300;400;500;600&display=swap');
        .dest-body { font-family: 'Source Sans 3', sans-serif; }
        .dest-serif { font-family: 'Playfair Display', Georgia, serif; }
        .dest-ui { font-family: 'Montserrat', sans-serif; }
      `,
        }}
      />

      {/* EDITORIAL HERO */}
      <section className="relative min-h-[580px] lg:min-h-[660px] w-full flex items-end pb-16 pt-32 overflow-hidden bg-[#0A1410]">
        <img
          src={destination.heroImage}
          alt={destination.name}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1410] via-black/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
          <button 
            onClick={onBack} 
            className="dest-ui inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md hover:bg-white/20 transition-all mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to destinations
          </button>

          <div className="max-w-4xl">
            <span className="dest-ui bg-[#C89B3C] text-white px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest rounded-full">
              {destination.region}
            </span>

            <h1 className="dest-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-white leading-[1.08] tracking-tight mt-4">
              {destination.name}
            </h1>

            {destination.subtitle && (
              <p className="dest-body mt-4 max-w-2xl text-lg sm:text-xl text-white/85 font-light leading-relaxed">
                {destination.subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* TWO-COLUMN EDITORIAL CONTENT */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-20 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          
          {/* LEFT: Deep Field Narrative */}
          <div className="space-y-16 lg:col-span-8">
            <section>
              <span className="dest-ui text-xs font-bold uppercase tracking-[0.22em] text-[#C89B3C]">
                Regional Focus
              </span>
              <h2 className="dest-serif text-3xl sm:text-4xl font-normal text-[#173F35] mt-2">
                About {destination.name}
              </h2>
              <p className="dest-body mt-6 text-lg sm:text-xl leading-[1.8] text-[#3D332A] font-light">
                {destination.description}
              </p>
            </section>

            {/* Attractions */}
            {destination.keyAttractions && destination.keyAttractions.length > 0 && (
              <section className="border-t border-[#E3DAC8] pt-12">
                <span className="dest-ui text-xs font-bold uppercase tracking-[0.22em] text-[#C89B3C]">
                  Significance
                </span>
                <h3 className="dest-serif text-3xl font-normal text-[#173F35] mt-2 mb-6">
                  Key Historical & Natural Landmarks
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {destination.keyAttractions.map((att, i) => (
                    <div key={i} className="flex items-start gap-3.5 rounded-xl border border-[#E3DAC8] bg-white p-5 shadow-sm">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#173F35] text-[#F1D17A]">
                        <Check className="h-3 w-3 stroke-[2.5]" />
                      </span>
                      <span className="dest-body text-base font-medium text-[#2C241E] leading-snug">{att}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Wildlife & Adventures */}
            {((destination.wildlife && destination.wildlife.length > 0) || (destination.adventureActivities && destination.adventureActivities.length > 0)) && (
              <section className="grid gap-6 md:grid-cols-2 border-t border-[#E3DAC8] pt-12">
                {destination.wildlife && destination.wildlife.length > 0 && (
                  <div className="rounded-2xl border border-[#E3DAC8] bg-white p-8 shadow-sm">
                    <h4 className="dest-serif text-2xl font-normal text-[#173F35] mb-4">Wildlife Encounters</h4>
                    <ul className="space-y-3">
                      {destination.wildlife.map((w, i) => (
                        <li key={i} className="dest-body flex items-center gap-3 text-base text-[#3D332A]">
                          <span className="h-1.5 w-1.5 shrink-0 bg-[#C89B3C] rounded-full" />
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {destination.adventureActivities && destination.adventureActivities.length > 0 && (
                  <div className="rounded-2xl border border-[#E3DAC8] bg-white p-8 shadow-sm">
                    <h4 className="dest-serif text-2xl font-normal text-[#173F35] mb-4">Expedition Activities</h4>
                    <ul className="space-y-3">
                      {destination.adventureActivities.map((a, i) => (
                        <li key={i} className="dest-body flex items-center gap-3 text-base text-[#3D332A]">
                          <span className="h-1.5 w-1.5 shrink-0 bg-[#173F35] rounded-full" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            )}
          </div>

          {/* RIGHT: Regional Travel Card */}
          <aside className="lg:col-span-4">
            <div className="rounded-3xl border border-[#E3DAC8] bg-[#173F35] p-8 lg:p-9 text-[#FAF7F0] shadow-xl lg:sticky lg:top-28">
              <span className="dest-ui text-[11px] font-bold uppercase tracking-[0.2em] text-[#E5BA55]">
                Expedition Notes
              </span>
              <h3 className="dest-serif text-3xl font-normal text-white mt-2 mb-8">
                Travel Parameters
              </h3>

              <div className="space-y-6 border-y border-white/15 py-6">
                {facts.map(({ Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-[#E5BA55]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="dest-ui text-[10px] font-bold uppercase tracking-widest text-[#FAF7F0]/60">{label}</p>
                      <p className="dest-serif text-lg text-white mt-0.5">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => onOpenInquiry(`Inquiry for ${destination.name}`)} 
                className="dest-ui mt-8 flex w-full items-center justify-center gap-2 rounded-[6px] bg-[#C89B3C] py-4 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-md transition hover:bg-[#b58930]"
              >
                <Compass className="h-4 w-4" />
                Plan An Expedition Here
              </button>

              <div className="mt-8 flex items-start gap-3.5 border-t border-white/15 pt-6 text-xs text-white/75">
                <Shield className="h-5 w-5 text-[#E5BA55] shrink-0 mt-0.5" />
                <p>Native scout and naturalist access arranged in direct coordination with Ethiopian wildlife authorities.</p>
              </div>
            </div>
          </aside>
        </div>

        {/* RECOMMENDED EXPEDITIONS SECTION */}
        {recommendedTours.length > 0 && (
          <section className="mt-24 border-t border-[#E3DAC8] pt-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <span className="dest-ui text-xs font-bold uppercase tracking-[0.22em] text-[#C89B3C]">
                  Itineraries
                </span>
                <h2 className="dest-serif text-3xl sm:text-4xl font-normal text-[#173F35] mt-2">
                  Featured Expeditions In {destination.name}
                </h2>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {recommendedTours.map((tour: ExtendedTour) => {
                const img = tour.heroImage || tour.galleryImages?.[0];
                const displayPrice = (!tour.priceFrom || tour.priceFrom === 'On request' || String(tour.priceFrom).toLowerCase().includes('request'))
                  ? 'On request'
                  : (String(tour.priceFrom).startsWith('$') ? tour.priceFrom : `$${tour.priceFrom}`);

                return (
                  <article 
                    key={tour.id} 
                    onClick={() => onSelectTour(tour as any)} 
                    className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#E3DAC8] hover:border-[#173F35]/40 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg flex flex-col"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#0A1410]">
                      {img && (
                        <img 
                          src={img} 
                          alt={tour.name} 
                          className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" 
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                      <span className="dest-ui absolute bottom-3 left-4 bg-[#173F35]/90 text-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-full">
                        {tour.duration}
                      </span>
                    </div>

                    <div className="p-6 flex flex-col flex-1 justify-between">
                      <div>
                        {tour.destination && (
                          <p className="dest-ui text-[11px] font-bold uppercase tracking-[0.2em] text-[#C89B3C] mb-2">
                            {tour.destination}
                          </p>
                        )}
                        <h3 className="dest-serif text-xl font-normal text-[#173F35] group-hover:text-[#C89B3C] transition-colors leading-snug">
                          {tour.name}
                        </h3>
                      </div>
                      
                      <div className="mt-6 pt-5 border-t border-[#EDE5D5] flex items-center justify-between">
                        <span className="dest-ui text-sm font-bold text-[#173F35]">{displayPrice}</span>
                        <span className="dest-ui inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#173F35] group-hover:text-[#C89B3C] transition-colors">
                          View Tour <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};