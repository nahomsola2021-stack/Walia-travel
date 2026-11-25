import React, { useEffect, useRef, useState } from 'react';
import {
  Binoculars,
  Compass,
  Footprints,
  Globe,
  Heart,
  Landmark,
  LifeBuoy,
  MapPin,
  Mountain,
  Route,
  ShieldCheck,
  TreePine,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Award,
  Users,
  MountainSnow,
} from 'lucide-react';
import { WildStyles, PageHero } from '../components/WildUI';

interface AboutPageProps {
  onOpenInquiry: (name?: string) => void;
  onNavigate: (path: string) => void;
}

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#173F35]';

/** Fires once when the element scrolls into view. */
function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen] as const;
}

/** Signature Simien escarpment transition. */
const Ridge: React.FC = () => {
  const [ref, seen] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className="relative -mb-px bg-[#F7F3E9]" aria-hidden="true">
      <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="block h-16 w-full md:h-28">
        <g
          className={`motion-safe:transition-transform motion-safe:duration-[1200ms] motion-safe:ease-out ${
            seen ? 'translate-y-0' : 'motion-safe:translate-y-8'
          }`}
        >
          <path
            fill="#2A5E4F"
            d="M0 160V90l90-30 80 40 90-60 70 45 90-30 100 55 90-40 90-40 90 60 90-32 100 47 90-55 90 45 90-33 90 38 100-30v90z"
          />
        </g>
        <g
          className={`motion-safe:transition-transform motion-safe:delay-150 motion-safe:duration-[1200ms] motion-safe:ease-out ${
            seen ? 'translate-y-0' : 'motion-safe:translate-y-12'
          }`}
        >
          <path
            fill="#173F35"
            d="M0 160v-40l120-25 100 30 120-40 110 45 130-30 110 35 130-45 120 38 120-30 120 34 120-28 140 22v64z"
          />
        </g>
      </svg>
    </div>
  );
};

const stories = [
  {
    title: 'Where the Name Comes From',
    badge: 'Our Origin',
    text: "Inspired by Ethiopia's rare Walia Ibex inhabiting the high Simien cliffs. It symbolizes strength, local independence, and our passion for endemic wildlife conservation.",
  },
  {
    title: 'What We Create',
    badge: 'Bespoke Journeys',
    text: 'From historic rock-hewn wonders to high-altitude trekking across Simien and Bale, we craft authentic journeys tailored specifically to your group.',
  },
  {
    title: 'How We Travel',
    badge: 'Local Philosophy',
    text: 'We combine native destination mastery with genuine hospitality, connecting you directly to local communities and wild ecosystems.',
  },
];

const experiences = [
  { Icon: Binoculars, title: 'Wildlife Tours', note: 'Endemic species in untouched highland habitats', filterPath: '/tours?category=wildlife' },
  { Icon: Landmark, title: 'Cultural & History', note: 'Ancient kingdoms and living traditions', filterPath: '/tours?category=culture' },
  { Icon: TreePine, title: 'Birdwatching', note: 'Rift Valley lakes and highland valleys', filterPath: '/tours?category=birdwatching' },
  { Icon: Footprints, title: 'Trekking Expeditions', note: 'Conquer Simien and Bale peaks', filterPath: '/tours?category=trekking' },
  { Icon: Mountain, title: 'Nature Excursions', note: 'Volcanoes, salt flats, and Rift canyons', filterPath: '/tours?category=nature' },
  { Icon: Route, title: 'Tailor-Made Packages', note: 'Journeys designed 100% around you', filterPath: 'inquiry' },
];

const stats = [
  { label: 'Local Expertise', value: '100%', subtext: 'Ethiopian Owned & Led', icon: Users },
  { label: 'Endemic Wildlife Focus', value: '15+', subtext: 'Highland Expeditions', icon: MountainSnow },
  { label: 'Guest Rating', value: '5.0★', subtext: 'Verified Reviews', icon: Award },
  { label: 'Tailored Routes', value: '50+', subtext: 'Across Ethiopia', icon: Compass },
];

const teamPillars = [
  { Icon: Globe, title: 'Local Cultural Ambassadors', note: 'Native guides who call Ethiopia home.' },
  { Icon: Binoculars, title: 'Certified Wildlife Trackers', note: 'Trained to read the highland wildlife.' },
  { Icon: Landmark, title: 'Multilingual Historians', note: 'Ancient heritage told in your language.' },
  { Icon: LifeBuoy, title: '24/7 Trail Support', note: 'Dedicated logistics on every single route.' },
];

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenInquiry, onNavigate }) => {
  /** Handles clicking any 'Explore' button throughout the page */
  const handleExploreAction = (filterPath: string, tourTitle: string) => {
    if (filterPath === 'inquiry') {
      onOpenInquiry(tourTitle);
    } else {
      onNavigate(filterPath);
    }
  };

  return (
    <div className="w-full bg-[#F7F3E9] font-sans text-[#352D27] selection:bg-[#173F35] selection:text-[#F7F3E9]">
      <WildStyles />

      {/* HERO SECTION */}
      <PageHero
        tag="About Walia Travel | Ethiopian Tourism Experts"
        title="Discover Ethiopia and Embrace the Journey"
        sub="Authentic wildlife, cultural, historical, and nature experiences created by passionate Ethiopian tourism professionals."
        image="https://res.cloudinary.com/dw1ohipim/image/upload/v1789393456/b37btmwltxmlwbt7lefb.jpg"
      />

      {/* TRUST STATS BANNER */}
      <section className="relative z-10 -mt-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-4 rounded-3xl border border-[#E6DED1] bg-white/95 p-6 shadow-xl backdrop-blur-md md:grid-cols-4 md:p-8">
          {stats.map(({ label, value, subtext, icon: StatIcon }) => (
            <div key={label} className="flex flex-col items-center text-center p-2">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#173F35]/5 text-[#8F6A1E]">
                <StatIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <span className="font-serif text-3xl font-bold tracking-tight text-[#173F35] sm:text-4xl">{value}</span>
              <span className="mt-1 text-xs font-bold uppercase tracking-wider text-[#352D27]">{label}</span>
              <span className="text-xs text-[#352D27]/60">{subtext}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE ARE: CLEAN 3-PILLAR STORY GRID */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#C89B3C]/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#8F6A1E]">
            <Compass className="h-4 w-4" aria-hidden="true" />
            Owned and Led in Ethiopia
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-[#173F35] sm:text-5xl">
            Ethiopia, shown by the people who live it.
          </h2>
          <p className="mt-4 font-serif text-lg leading-relaxed text-[#352D27]/80 sm:text-xl">
            Walia Travel is an Ethiopian-owned travel and tour company led by passionate, knowledgeable tourism professionals.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {stories.map((s) => (
            <div
              key={s.title}
              className="flex flex-col justify-between rounded-3xl border border-[#E6DED1] bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#C89B3C]"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#8F6A1E]">
                  {s.badge}
                </span>
                <h3 className="mt-3 font-serif text-2xl font-bold text-[#173F35]">{s.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-[#352D27]/80">{s.text}</p>
              </div>
              <button
                onClick={() => onOpenInquiry(`Inquiry regarding: ${s.title}`)}
                className={`mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#173F35] transition-colors hover:text-[#8F6A1E] ${focusRing}`}
              >
                Learn more & plan <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ESCARPMENT RIDGE SEPARATOR */}
      <Ridge />

      {/* EXPERIENCES GRID WITH FUNCTIONAL EXPLORE BUTTONS */}
      <section className="relative bg-[#173F35] pb-24 pt-10 text-[#F7F3E9] md:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#F7F3E9]/15 pb-10">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C89B3C]">
                <Sparkles className="h-4 w-4" /> Named for the Walia Ibex
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold sm:text-5xl">
                Curated Travel Experiences
              </h2>
            </div>
            <p className="max-w-md text-base text-[#F7F3E9]/80">
              Select an experience below to explore specialized itineraries or request a personalized plan.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map(({ Icon, title, note, filterPath }) => (
              <div
                key={title}
                className="group relative flex flex-col justify-between rounded-3xl border border-[#F7F3E9]/15 bg-[#173F35]/70 p-8 transition-all duration-300 hover:border-[#C89B3C] hover:bg-[#1E4D41] hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-[#F7F3E9]/20 bg-[#F7F3E9]/5 text-[#C89B3C] transition-colors duration-300 group-hover:bg-[#C89B3C] group-hover:text-[#173F35]">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-6 font-serif text-2xl font-bold text-[#F7F3E9]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#F7F3E9]/70">{note}</p>
                </div>

                {/* FUNCTIONAL EXPLORE BUTTON */}
                <div className="mt-8 pt-6 border-t border-[#F7F3E9]/10 flex items-center justify-between">
                  <button
                    onClick={() => handleExploreAction(filterPath, title)}
                    className={`inline-flex items-center gap-2 rounded-full border border-[#C89B3C]/40 bg-[#C89B3C]/10 px-4 py-2 text-xs font-bold text-[#C89B3C] transition-all hover:bg-[#C89B3C] hover:text-[#173F35] ${focusRing}`}
                  >
                    Explore tours
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                  <span className="text-xs text-[#F7F3E9]/50">Guided Expeditions</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CLEAR VISION & MISSION CARDS */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Vision */}
          <div className="rounded-3xl border border-[#E6DED1] bg-white p-8 shadow-sm sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8F6A1E]">Our Vision</span>
              <h3 className="mt-3 font-serif text-3xl font-bold text-[#173F35]">
                Sharing Ethiopia's natural treasures with the world.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#352D27]/80">
                To share Ethiopia's extraordinary natural beauty, unique wildlife, rich cultural heritage, and ancient history with travelers seeking deep, authentic connection.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#173F35] border-t border-[#E6DED1] pt-6">
              <CheckCircle2 className="h-5 w-5 text-[#8F6A1E]" /> Preserving Ethiopian natural heritage
            </div>
          </div>

          {/* Mission */}
          <div className="rounded-3xl border border-[#E6DED1] bg-[#173F35] p-8 text-[#F7F3E9] shadow-xl sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C89B3C]">Our Mission</span>
              <h3 className="mt-3 font-serif text-3xl font-bold text-[#F7F3E9]">
                Authentic, sustainable travel created locally.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#F7F3E9]/80">
                To create memorable, authentic journeys through destination knowledge, genuine hospitality, and reliable travel services that directly benefit local communities.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#C89B3C] border-t border-[#F7F3E9]/15 pt-6">
              <ShieldCheck className="h-5 w-5" /> 100% Sustainable & Responsible Travel
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES / IMPACT */}
      <section className="border-y border-[#E6DED1] bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8F6A1E]">Commitment</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[#173F35] sm:text-4xl">
              Responsible travel, lasting impact
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                Icon: Heart,
                title: 'Conservation First',
                desc: "We prioritize responsible tourism, wildlife protection, and cultural preservation. Our itineraries are built to respect delicate highland ecosystems and honor living community traditions.",
              },
              {
                Icon: ShieldCheck,
                title: 'Trusted Local Expertise',
                desc: "We don't just guide you through Ethiopia—we share our home. Every trip is led by local specialists who ensure safe, seamless, and unforgettable travel experiences.",
              },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="flex gap-5 rounded-3xl border border-[#E6DED1] bg-[#F7F3E9]/40 p-8">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#173F35] text-[#C89B3C]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#173F35]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#352D27]/80">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM PILLARS */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#8F6A1E]">Our Team</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[#173F35] sm:text-4xl">
              The people behind every journey
            </h2>
          </div>
          <button
            onClick={() => onOpenInquiry('Custom Guide Request')}
            className={`inline-flex items-center gap-2 text-sm font-bold text-[#8F6A1E] hover:text-[#173F35] ${focusRing}`}
          >
            Meet your trip coordinator <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamPillars.map(({ Icon, title, note }, index) => (
            <div key={title} className="rounded-3xl border border-[#E6DED1] bg-white p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <Icon className="h-7 w-7 text-[#8F6A1E]" aria-hidden="true" />
                <span className="font-serif text-xs font-bold text-[#173F35]/40">0{index + 1}</span>
              </div>
              <h3 className="mt-5 font-serif text-lg font-bold text-[#173F35]">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#352D27]/70">{note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="relative isolate overflow-hidden bg-[#173F35] py-24 text-center text-[#F7F3E9] md:py-32">
        <img
          src="https://res.cloudinary.com/dw1ohipim/image/upload/v1789393457/zzfjfc2hfezgwd2dmrfo.jpg"
          alt="Ethiopia scenery"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#173F35] via-[#173F35]/80 to-[#173F35]/40" />

        <div className="mx-auto max-w-3xl px-5">
          <MapPin className="mx-auto h-8 w-8 text-[#C89B3C]" aria-hidden="true" />
          <h2 className="mt-4 font-serif text-3xl font-bold sm:text-5xl">Where do you want to go?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#F7F3E9]/85">
            Discover historic circuits, wildlife sanctuaries, and custom treks with dedicated Ethiopian hosts.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() => onNavigate('/destinations')}
              className={`group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C89B3C] px-8 py-4 text-sm font-bold text-[#173F35] transition-all duration-300 hover:bg-[#d8ab4a] sm:w-auto ${focusRing}`}
            >
              Explore Destinations
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => onOpenInquiry('Custom Ethiopia Trip')}
              className={`w-full rounded-full border border-[#F7F3E9]/50 bg-[#173F35]/40 backdrop-blur-sm px-8 py-4 text-sm font-bold text-[#F7F3E9] transition-all duration-300 hover:border-[#C89B3C] hover:text-[#C89B3C] sm:w-auto ${focusRing}`}
            >
              Plan Your Custom Trip
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};