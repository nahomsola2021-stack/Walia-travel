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
} from 'lucide-react';
import { WildStyles, PageHero } from '../components/WildUI';

interface AboutPageProps {
  onOpenInquiry: (name?: string) => void;
  onNavigate: (path: string) => void;
}

/* Brand tokens (unchanged from the rest of the site).
   Gold on light backgrounds uses a darker tone (#8F6A1E) so small text passes contrast. */
const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#173F35]';

/** Fires once when the element scrolls into view. */
function useInView<T extends HTMLElement>() {
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
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen] as const;
}

/** The one signature moment: the Simien escarpment rising into the dark section. */
const Ridge: React.FC = () => {
  const [ref, seen] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className="relative -mb-px bg-[#F7F3E9]" aria-hidden="true">
      <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="block h-20 w-full md:h-36">
        <g
          className={`motion-safe:transition-transform motion-safe:duration-[1400ms] motion-safe:ease-out ${
            seen ? 'translate-y-0' : 'motion-safe:translate-y-10'
          }`}
        >
          <path
            fill="#2A5E4F"
            d="M0 160V90l90-30 80 40 90-60 70 45 90-30 100 55 90-40 90-40 90 60 90-32 100 47 90-55 90 45 90-33 90 38 100-30v90z"
          />
        </g>
        <g
          className={`motion-safe:transition-transform motion-safe:delay-200 motion-safe:duration-[1400ms] motion-safe:ease-out ${
            seen ? 'translate-y-0' : 'motion-safe:translate-y-16'
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
    label: 'Where the name comes from',
    text: "Our inspiration comes from Ethiopia's extraordinary natural treasures: endemic wildlife, diverse birdlife, dramatic mountains, lush forests and fascinating ecosystems. The iconic Walia Ibex reflects the spirit behind our name and our passion for nature and wildlife conservation.",
  },
  {
    label: 'What we create',
    text: 'From the spectacular Simien and Bale Mountains to the Great Rift Valley, we create wildlife tours, cultural and historical tours, birdwatching experiences, trekking adventures, nature excursions and tailor-made Ethiopia travel packages.',
  },
  {
    label: 'How we do it',
    text: 'We combine destination knowledge, genuine hospitality, professional dedication and reliable travel services to create authentic experiences that connect travelers with nature, local communities and the true spirit of Ethiopia.',
  },
];

const experiences = [
  { Icon: Binoculars, title: 'Wildlife tours', note: 'Endemic species in their own habitat' },
  { Icon: Landmark, title: 'Cultural and historical tours', note: 'Ancient sites and living traditions' },
  { Icon: TreePine, title: 'Birdwatching', note: 'Forests, lakes and highland valleys' },
  { Icon: Footprints, title: 'Trekking adventures', note: 'Simien, Bale and beyond' },
  { Icon: Mountain, title: 'Nature excursions', note: 'Rift Valley landscapes at your pace' },
  { Icon: Route, title: 'Tailor-made packages', note: 'Journeys built around you' },
];

const team = [
  { Icon: Globe, title: 'Local cultural ambassadors', note: 'People who call Ethiopia home' },
  { Icon: Binoculars, title: 'Certified wildlife guides', note: 'Trained to read the landscape' },
  { Icon: Landmark, title: 'Multilingual storytellers', note: 'History told in your language' },
  { Icon: LifeBuoy, title: '24/7 expedition support', note: 'Help on the trail, any hour' },
];

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenInquiry, onNavigate }) => {
  return (
    <div className="w-full bg-[#F7F3E9] font-sans text-[#352D27] selection:bg-[#173F35] selection:text-[#F7F3E9]">
      <WildStyles />

      <PageHero
        tag="About Walia Travel | Ethiopian Tourism Experts"
        title="Discover Ethiopia and Embrace the Journey"
        sub="Authentic wildlife, cultural, historical, and nature experiences created by passionate Ethiopian tourism professionals."
        image="https://res.cloudinary.com/dw1ohipim/image/upload/v1789393456/b37btmwltxmlwbt7lefb.jpg"
      />

      {/* WHO WE ARE: sticky statement beside an editorial read */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="inline-flex items-center gap-2 border-l-2 border-[#C89B3C] pl-3 text-sm font-semibold text-[#8F6A1E]">
                <Compass className="h-4 w-4" aria-hidden="true" />
                Owned and led in Ethiopia
              </p>
              <h2 className="mt-6 font-serif text-5xl font-bold leading-[1.02] tracking-tight text-[#173F35] sm:text-6xl xl:text-7xl">
                Ethiopia, shown by the people who live it.
              </h2>
              <p className="mt-8 max-w-md font-serif text-xl leading-[1.7] text-[#352D27]/80">
                Walia Travel is an Ethiopian-owned travel and tour company led by passionate, knowledgeable and dedicated Ethiopian tourism professionals.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="divide-y divide-[#E6DED1] border-y border-[#E6DED1]">
              {stories.map((s) => (
                <article key={s.label} className="grid gap-3 py-10 md:grid-cols-[11rem_1fr] md:gap-10">
                  <h3 className="font-serif text-xl font-bold text-[#173F35]">{s.label}</h3>
                  <p className="max-w-[62ch] text-lg leading-[1.85] text-[#352D27]/85">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Ridge />

      {/* THE WALIA IBEX + EXPERIENCES */}
      <section className="relative bg-[#173F35] pb-24 pt-6 text-[#F7F3E9] md:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <h2 className="font-serif text-4xl font-bold leading-[1.05] sm:text-6xl lg:col-span-7">
              Named for an ibex found nowhere else on earth.
            </h2>
            <p className="max-w-md text-lg leading-[1.8] text-[#F7F3E9]/75 lg:col-span-5 lg:justify-self-end">
              The Walia Ibex lives in Ethiopia's Simien Mountains. It stands for what we protect and what we invite you to see.
            </p>
          </div>

          <ul className="mt-16 grid border-t border-[#F7F3E9]/15 md:grid-cols-2 md:gap-x-16">
            {experiences.map(({ Icon, title, note }) => (
              <li
                key={title}
                className="group flex items-center gap-5 border-b border-[#F7F3E9]/15 py-6 transition-colors duration-300 hover:border-[#C89B3C]"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[#F7F3E9]/20 text-[#C89B3C] transition-colors duration-300 group-hover:bg-[#C89B3C] group-hover:text-[#173F35]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-serif text-xl font-bold">{title}</span>
                  <span className="mt-0.5 block text-sm text-[#F7F3E9]/65">{note}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36">
        <div className="grid gap-8 lg:grid-cols-12">
          <p className="text-sm font-semibold text-[#8F6A1E] lg:col-span-2 lg:pt-3">Our vision</p>
          <p className="font-serif text-3xl leading-[1.35] text-[#173F35] sm:text-5xl sm:leading-[1.25] lg:col-span-10">
            To share Ethiopia's extraordinary natural beauty, unique wildlife, rich cultural heritage and remarkable history with travelers from around the world.
          </p>
        </div>

        <div className="mt-16 grid gap-8 border-t border-[#E6DED1] pt-16 lg:grid-cols-12">
          <p className="text-sm font-semibold text-[#8F6A1E] lg:col-span-2">Our mission</p>
          <p className="max-w-3xl text-xl leading-[1.85] text-[#352D27]/85 lg:col-span-7">
            To create memorable, authentic journeys through destination knowledge, genuine Ethiopian hospitality, professional dedication and reliable travel services. We connect travelers with nature, local communities and the true spirit of Ethiopia through responsible and sustainable tourism.
          </p>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-y border-[#E6DED1] bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-4xl font-bold leading-[1.08] text-[#173F35] sm:text-5xl">
              Responsible travel, lasting impact
            </h2>
            <p className="mt-6 max-w-md text-lg leading-[1.8] text-[#352D27]/75">
              Our commitment extends beyond travel to the conservation and preservation of Ethiopia's natural and cultural heritage.
            </p>
          </div>

          <div className="space-y-6 lg:col-span-7">
            {[
              {
                Icon: Heart,
                title: 'Nature and heritage come first',
                a: "We value responsible tourism, sustainable development, wildlife conservation and the preservation of Ethiopia's natural and cultural heritage.",
                b: 'Our journeys highlight the ecosystems, wildlife, traditions and communities that make Ethiopia exceptional, while encouraging respect for the places and people we visit.',
              },
              {
                Icon: ShieldCheck,
                title: 'Trusted local experts',
                a: "We don't just show you Ethiopia. We help you experience it through the eyes of people who know it, love it and proudly call it home.",
                b: 'Every tailor-made journey combines adventure and discovery with genuine connection, reliable service and lasting memories.',
              },
            ].map(({ Icon, title, a, b }) => (
              <div
                key={title}
                className="flex gap-6 rounded-3xl border border-[#E6DED1] bg-[#F7F3E9]/50 p-8 transition-colors duration-300 hover:border-[#C89B3C] sm:p-10"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#173F35] text-[#C89B3C]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#173F35]">{title}</h3>
                  <p className="mt-3 text-lg leading-[1.8] text-[#352D27]/80">{a}</p>
                  <p className="mt-3 text-lg leading-[1.8] text-[#352D27]/80">{b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
        <div className="grid gap-8 lg:grid-cols-12">
          <h2 className="font-serif text-4xl font-bold text-[#173F35] sm:text-5xl lg:col-span-4">
            The people behind every journey
          </h2>
          <p className="max-w-2xl text-xl leading-[1.85] text-[#352D27]/80 lg:col-span-8">
            Rooted in local expertise and inspired by a deep love for our country, we share Ethiopia through the eyes of people who know it, love it and call it home.
          </p>
        </div>

        <ul className="mt-16 grid divide-y divide-[#E6DED1] border-y border-[#E6DED1] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {team.map(({ Icon, title, note }) => (
            <li key={title} className="p-8 sm:border-b sm:border-[#E6DED1] lg:border-b-0">
              <Icon className="h-7 w-7 text-[#8F6A1E]" aria-hidden="true" />
              <h3 className="mt-6 font-serif text-xl font-bold text-[#173F35]">{title}</h3>
              <p className="mt-2 text-base leading-relaxed text-[#352D27]/70">{note}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-[#173F35] py-28 text-center text-[#F7F3E9] md:py-36">
        <img
          src="https://res.cloudinary.com/dw1ohipim/image/upload/v1789393457/zzfjfc2hfezgwd2dmrfo.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#173F35] via-[#173F35]/70 to-[#173F35]/30" />

        <div className="mx-auto max-w-3xl px-5">
          <MapPin className="mx-auto h-8 w-8 text-[#C89B3C]" aria-hidden="true" />
          <h2 className="mt-6 font-serif text-4xl font-bold leading-[1.05] md:text-6xl">Where do you want to go?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#F7F3E9]/85">
            Browse the top destinations in Ethiopia, chosen for travelers who love rich culture, ancient history and untouched natural beauty.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() => onNavigate('/destinations')}
              className={`group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C89B3C] px-8 py-4 text-sm font-bold tracking-wide text-[#173F35] transition-colors duration-300 hover:bg-[#d8ab4a] sm:w-auto ${focusRing}`}
            >
              Explore destinations
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </button>
            <button
              onClick={() => onOpenInquiry()}
              className={`w-full rounded-full border border-[#F7F3E9]/50 px-8 py-4 text-sm font-bold tracking-wide text-[#F7F3E9] transition-colors duration-300 hover:border-[#C89B3C] hover:text-[#C89B3C] sm:w-auto ${focusRing}`}
            >
              Plan your trip
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};