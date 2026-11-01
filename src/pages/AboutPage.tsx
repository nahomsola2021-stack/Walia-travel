import React from 'react';
import {
  Target,
  Eye,
  Users,
  MapPin,
  Heart,
  ShieldCheck,
  Sparkles,
  Compass,
  Award,
  ArrowUpRight,
  Quote,
} from 'lucide-react';
import { WildStyles, PageHero } from '../components/WildUI';

interface AboutPageProps {
  onOpenInquiry: (name?: string) => void;
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenInquiry, onNavigate }) => {
  return (
    <div className="w-full bg-[#F7F3E9] font-sans text-[#352D27] selection:bg-[#173F35] selection:text-[#F7F3E9]">
      <WildStyles />

      <PageHero
        tag="About Walia Travel"
        title="Crafting your best memories"
        sub="Immersive journeys honoring Ethiopia's unique heritage, vibrant cultures, and untouched natural wonders."
        image="https://res.cloudinary.com/dw1ohipim/image/upload/v1789393456/b37btmwltxmlwbt7lefb.jpg"
      />

      {/* FOUNDER — EDITORIAL LAYOUT (NO IMAGE HOLDER) */}
      <section className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36">
        {/* Decorative background aura */}
        <div className="pointer-events-none absolute left-1/2 top-16 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#C89B3C]/10 blur-3xl" />

        <div className="mx-auto max-w-5xl">
          {/* Top Header */}
          <div className="flex flex-col items-start justify-between gap-6 border-b border-[#E6DED1] pb-12 md:flex-row md:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#C89B3C]/30 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#C89B3C] shadow-sm backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                The Visionary Behind Walia
              </div>
              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-[#173F35] sm:text-6xl">
                Eyerusalem Tigistu <span className="font-normal italic text-[#C89B3C]">(Jerry)</span>
              </h2>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-[#E6DED1] bg-white px-5 py-3.5 shadow-sm">
              <Compass className="h-5 w-5 text-[#C89B3C]" />
              <div className="text-left">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#352D27]/50">Roots & Origin</p>
                <p className="font-serif text-sm font-bold text-[#173F35]">Lalibela, Amhara • Ethiopia</p>
              </div>
            </div>
          </div>

          {/* Editorial Pull-Quote Banner */}
          <div className="relative mt-12 overflow-hidden rounded-3xl bg-[#173F35] p-8 text-[#F7F3E9] shadow-2xl sm:p-12 md:p-14">
            <Quote className="pointer-events-none absolute -right-6 -top-6 h-44 w-44 text-[#C89B3C]/10" />
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C89B3C]">Founder's Ethos</p>
              <blockquote className="mt-4 font-serif text-2xl italic leading-relaxed text-[#F7F3E9] sm:text-3xl md:leading-[1.5]">
                "An innovative travel company dedicated to showcasing the rich cultural heritage, breathtaking landscapes, and diverse ecosystems of Ethiopia."
              </blockquote>
              <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-[#F7F3E9]/15 pt-6 text-xs uppercase tracking-widest text-[#F7F3E9]/70">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#C89B3C]" />
                  Cultural Historian
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#C89B3C]" />
                  Eco-Adventure Pioneer
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#C89B3C]" />
                  Storyteller
                </span>
              </div>
            </div>
          </div>

          {/* 3-Column Magazine Story Grid */}
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                num: '01',
                label: 'The Inspiration',
                text: 'Inspired by a deep love for Ethiopian history and natural beauty, Jerry established Walia Travel to give travelers an authentic and meaningful way to experience this extraordinary region.',
              },
              {
                num: '02',
                label: 'The Heritage',
                text: "Born and raised in Lalibela/Amhara, Jerry developed a passion for travel and storytelling at an early age. With a background in tourism and cultural studies, she set out to go beyond traditional tourism.",
              },
              {
                num: '03',
                label: 'The Craft',
                text: 'Through Walia Travel, she has introduced a series of specialized tours, from cultural explorations to eco-adventures, each thoughtfully designed to connect travelers with the soul of Ethiopia.',
              },
            ].map((item) => (
              <div
                key={item.num}
                className="group relative rounded-2xl border border-[#E6DED1] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C89B3C] hover:shadow-xl"
              >
                <span className="font-serif text-4xl font-bold text-[#C89B3C]/25 transition-colors group-hover:text-[#C89B3C]">
                  {item.num}
                </span>
                <h3 className="mt-3 font-serif text-xl font-bold text-[#173F35]">{item.label}</h3>
                <p className="mt-3 text-base leading-[1.8] text-[#352D27]/80">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="relative border-y border-[#E6DED1] bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C89B3C]">Our Core Pillars</p>
              <h2 className="mt-3 max-w-2xl font-serif text-4xl font-bold leading-[1.08] text-[#173F35] sm:text-5xl">
                Responsible tourism & legacy
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-[#352D27]/70">
              Every expedition is built to protect Ethiopia’s fragile ecosystems while empowering the communities who call them home.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-12">
            {[
              {
                Icon: Heart,
                badge: 'Conservation First',
                title: 'Commitment to conservation',
                a: "With a keen awareness of the importance of preserving Ethiopia's natural and cultural assets, Jerry actively collaborates with local communities, conservation organizations, and cultural institutions.",
                b: "This commitment not only enhances the travel experience but also supports local livelihoods and conservation efforts, particularly for endangered species like the Walia ibex, which inspired the company's name and logo.",
              },
              {
                Icon: ShieldCheck,
                badge: 'Enduring Trust',
                title: 'Our legacy and impact',
                a: "Today, Walia Travel is recognized as a trusted name in Ethiopian tourism, embodying Jerry's vision of responsible exploration and cultural exchange.",
                b: 'She continues to lead the company in creating experiences that transform how travelers see and connect with Ethiopia, while also making a positive impact on the communities and environments they visit.',
              },
            ].map(({ Icon, badge, title, a, b }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-[#E6DED1] bg-[#F7F3E9]/60 p-8 transition-all duration-500 hover:border-[#C89B3C] hover:bg-white hover:shadow-2xl sm:p-12"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#173F35] text-[#F7F3E9] shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#C89B3C]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="rounded-full border border-[#C89B3C]/30 bg-white px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#173F35]">
                    {badge}
                  </span>
                </div>

                <h3 className="mt-8 font-serif text-3xl font-bold text-[#173F35]">{title}</h3>
                <p className="mt-4 text-lg leading-[1.8] text-[#352D27]/80">{a}</p>
                <p className="mt-4 border-t border-[#E6DED1] pt-4 text-lg leading-[1.8] text-[#352D27]/80">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="relative isolate overflow-hidden bg-[#173F35] text-[#F7F3E9]">
        {/* Ambient gold glow */}
        <div className="pointer-events-none absolute -left-24 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-[#C89B3C]/15 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="grid divide-y divide-[#F7F3E9]/10 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
            {/* Vision */}
            <div className="group relative px-8 py-24 transition-colors duration-500 hover:bg-[#123129] md:px-16 lg:py-32">
              <div className="inline-flex items-center gap-3 rounded-full bg-[#F7F3E9]/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#C89B3C]">
                <Eye className="h-4 w-4" />
                Looking Forward
              </div>
              <h2 className="mt-6 font-serif text-4xl font-bold sm:text-5xl">Our vision</h2>
              <p className="mt-8 border-l-2 border-[#C89B3C] pl-6 font-serif text-2xl italic leading-relaxed text-[#F7F3E9]/90">
                "To be the leading gateway for immersive and responsible travel experiences in the Horn of Africa, showcasing the natural wonders, vibrant cultures, and rich history of Ethiopia to the world."
              </p>
            </div>

            {/* Mission */}
            <div className="group relative px-8 py-24 transition-colors duration-500 hover:bg-[#123129] md:px-16 lg:py-32">
              <div className="inline-flex items-center gap-3 rounded-full bg-[#F7F3E9]/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#C89B3C]">
                <Target className="h-4 w-4" />
                Our Purpose
              </div>
              <h2 className="mt-6 font-serif text-4xl font-bold sm:text-5xl">Our mission</h2>
              <p className="mt-8 text-lg leading-[1.9] text-[#F7F3E9]/80">
                Walia Travel is dedicated to connecting travelers with the heart of Ethiopia by offering unforgettable journeys that honor local heritage, celebrate diverse ecosystems, and support sustainable tourism practices. Through respectful and responsible exploration, we aim to foster cultural exchange, enrich local communities, and inspire a global appreciation for Ethiopia's unique landscapes and traditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="mx-auto max-w-5xl px-5 py-24 text-center md:py-32">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl border border-[#E6DED1] bg-white text-[#C89B3C] shadow-md">
          <Users className="h-9 w-9" />
        </div>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#C89B3C]">The People Behind Every Journey</p>
        <h2 className="mt-3 font-serif text-4xl font-bold text-[#173F35] sm:text-5xl">Our team</h2>
        <p className="mx-auto mt-6 max-w-3xl text-xl leading-[1.85] text-[#352D27]/80">
          At Walia Travel, we're more than just a team: we're a family of travel enthusiasts, cultural ambassadors, and experienced professionals dedicated to sharing the wonders of Ethiopia with the world. Each member of our team brings a unique blend of local knowledge, travel expertise, and a deep passion for Ethiopian culture, landscapes, and wildlife.
        </p>

        {/* Team Pillars */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {[
            'Local Cultural Ambassadors',
            'Certified Wildlife Guides',
            'Multilingual Storytellers',
            '24/7 Expedition Support',
          ].map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-2 rounded-full border border-[#E6DED1] bg-white px-5 py-2.5 text-sm font-medium text-[#173F35] shadow-sm"
            >
              <Award className="h-4 w-4 text-[#C89B3C]" />
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-[#173F35] py-28 text-center text-[#F7F3E9]">
        <img
          src="https://res.cloudinary.com/dw1ohipim/image/upload/v1789393457/zzfjfc2hfezgwd2dmrfo.jpg"
          alt="Top destinations in Ethiopia"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#173F35] via-[#173F35]/60 to-transparent" />

        <div className="mx-auto max-w-3xl px-5">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-[#F7F3E9]/20 bg-[#F7F3E9]/10 backdrop-blur-md">
            <MapPin className="h-7 w-7 text-[#C89B3C]" />
          </div>
          <h2 className="mt-8 font-serif text-4xl font-bold md:text-6xl">Where do you want to go?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#F7F3E9]/85">
            Discover the top destinations in Ethiopia featured by Walia Travel, curated for travelers who love rich culture, ancient history, and untouched natural beauty.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() => onNavigate('/destinations')}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#C89B3C] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-[#b38830] hover:shadow-xl sm:w-auto"
            >
              Explore destinations
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => onOpenInquiry()}
              className="w-full rounded-xl border-2 border-[#C89B3C] bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#C89B3C] transition-all duration-300 hover:bg-[#C89B3C] hover:text-white sm:w-auto"
            >
              Plan your trip
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};