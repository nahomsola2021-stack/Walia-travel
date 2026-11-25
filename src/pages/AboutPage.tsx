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
        tag="About Walia Travel | Ethiopian Tourism Experts"
        title="Discover Ethiopia and Embrace the Journey"
        sub="Authentic wildlife, cultural, historical, and nature experiences created by passionate Ethiopian tourism professionals."
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
                Ethiopian Tourism Experts
              </div>
              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-[#173F35] sm:text-6xl">
                Walia Travel
              </h2>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-[#E6DED1] bg-white px-5 py-3.5 shadow-sm">
              <Compass className="h-5 w-5 text-[#C89B3C]" />
              <div className="text-left">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#352D27]/50">Owned & Led in</p>
                <p className="font-serif text-sm font-bold text-[#173F35]">Ethiopia</p>
              </div>
            </div>
          </div>

          {/* Editorial Pull-Quote Banner */}
          <div className="relative mt-12 overflow-hidden rounded-3xl bg-[#173F35] p-8 text-[#F7F3E9] shadow-2xl sm:p-12 md:p-14">
            <Quote className="pointer-events-none absolute -right-6 -top-6 h-44 w-44 text-[#C89B3C]/10" />
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C89B3C]">Who We Are</p>
              <blockquote className="mt-4 font-serif text-2xl italic leading-relaxed text-[#F7F3E9] sm:text-3xl md:leading-[1.5]">
                "Walia Travel is an Ethiopian-owned travel and tour company led by a team of passionate, knowledgeable, and dedicated Ethiopian tourism professionals."
              </blockquote>
              <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-[#F7F3E9]/15 pt-6 text-xs uppercase tracking-widest text-[#F7F3E9]/70">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#C89B3C]" />
                  Local Expertise
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#C89B3C]" />
                  Genuine Hospitality
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#C89B3C]" />
                  Professional Service
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
                text: "Our inspiration comes from Ethiopia's extraordinary natural treasures — endemic wildlife, diverse birdlife, dramatic mountains, lush forests, and fascinating ecosystems. The iconic Walia Ibex reflects the spirit behind our name and our passion for nature and wildlife conservation.",
              },
              {
                num: '02',
                label: 'The Experiences',
                text: "From the spectacular Simien and Bale Mountains to the Great Rift Valley, we create wildlife tours, cultural and historical tours, birdwatching experiences, trekking adventures, nature excursions, and tailor-made Ethiopia travel packages.",
              },
              {
                num: '03',
                label: 'The Connection',
                text: "We combine destination knowledge, genuine hospitality, professional dedication, and reliable travel services to create authentic experiences that connect travelers with nature, local communities, and the true spirit of Ethiopia.",
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
                Responsible travel, lasting impact
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-[#352D27]/70">
              Our commitment extends beyond travel to the conservation and preservation of Ethiopia's natural and cultural heritage.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-12">
            {[
              {
                Icon: Heart,
                badge: 'Conservation First',
                title: 'Nature & heritage',
                a: "We value responsible tourism, sustainable development, wildlife conservation, and the preservation of Ethiopia's natural and cultural heritage.",
                b: 'Our journeys highlight the ecosystems, wildlife, traditions, and communities that make Ethiopia exceptional while encouraging respect for the places and people we visit.',
              },
              {
                Icon: ShieldCheck,
                badge: 'Trusted Local Experts',
                title: 'Your Ethiopian journey',
                a: "We don't just show you Ethiopia — we help you experience it through the eyes of people who know it, love it, and proudly call it home.",
                b: 'Every tailor-made journey is designed to combine adventure and discovery with genuine connection, reliable service, and lasting memories.',
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
                "To share Ethiopia's extraordinary natural beauty, unique wildlife, rich cultural heritage, and remarkable history with travelers from around the world."
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
                To create memorable, authentic journeys through destination knowledge, genuine Ethiopian hospitality, professional dedication, and reliable travel services. We connect travelers with nature, local communities, and the true spirit of Ethiopia through responsible and sustainable tourism.
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
          Walia Travel is led by passionate, knowledgeable, and dedicated Ethiopian tourism professionals. Rooted in local expertise and inspired by a deep love for our country, we proudly share Ethiopia through the eyes of people who know it, love it, and call it home.
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