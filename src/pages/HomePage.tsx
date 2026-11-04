import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ArrowRight, ChevronLeft, ChevronRight, Users, Compass, Leaf, Clock, MapPin,
  Sparkles, ShieldCheck, Star, Globe2, Volume2, VolumeX, Binoculars, Calendar,
} from 'lucide-react';
import { ArticleModal, ArticleData } from '../components/WildUI';
import { TOURS_DATA } from '../data/tours';

/*
  WALIA TRAVEL — BRAND TOKENS
  Forest #173F35 · Gold #C89B3C · Ivory #F7F3E9 · Earth #352D27
  Sky #1E5A8A · Nature #4E7653 · Terracotta #B5523A · Sand #E6DED1
*/

interface HomePageProps {
  onNavigate?: (path: string) => void;
  onOpenInquiry?: (tourName?: string) => void;
  onSelectTour?: (tour: any) => void;
  onSelectDestination?: (dest: any) => void;
  onSelectPost?: (post: any) => void;
}

/* ------------------------------------------------------------------ DATA */
const DESTINATIONS = {
  simien: {
    id: 'simien', eyebrow: 'The Roof of Africa', title: 'Simien Mountains', meta: '3,800m · Trekking',
    coords: '13.19°N, 38.04°E', tag: 'Wildlife & Escarpments',
    desc: 'Trek sheer escarpments where troops of gelada forage in alpine meadows, and lammergeiers ride the thermals below the rim.',
    img: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789393450/qpalhi1agsrwvlh1ftpa.jpg',
  },
  bale: {
    id: 'bale', eyebrow: 'The Rarest Canid', title: 'Bale Mountains', meta: '4,000m · Wildlife Trek',
    coords: '6.85°N, 39.73°E', tag: 'Afro-Alpine Plateau',
    desc: "Cross the frost-covered Sanetti Plateau to track the Ethiopian wolf, the world's rarest canid, hunting giant mole-rats in open moorland.",
    img: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789820884/zd5ze8a4zujmqqpqpgvx.jpg',
  },
  danakil: {
    id: 'danakil', eyebrow: "Earth's Inferno", title: 'Danakil Depression', meta: '-125m · Expedition',
    coords: '14.24°N, 40.30°E', tag: 'Volcanoes & Salt Flats',
    desc: 'Descend to one of the hottest, lowest places on Earth, past bubbling sulphur springs and salt caravans crossing an ancient seabed.',
    img: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1793479165/htmjyzhosybgns4dbvc5.jpg',
  },
  riftvalley: {
    id: 'riftvalley', eyebrow: 'The Great Rift Valley', title: 'Lakes of Abundance', meta: '1,600m · Safari',
    coords: '7.05°N, 38.47°E', tag: 'Flamingos & Hot Springs',
    desc: 'Navigate volcanic lakes shored pink with flamingos, where hippos surface among fishing boats and pelicans drift in the shallows.',
    img: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1792878267/ogypvgs3p7ryk5gtpoar.jpg',
  },
  omo: {
    id: 'omo', eyebrow: 'Cradle of Cultures', title: 'Omo Valley', meta: '400m · Cultural Journey',
    coords: '5.85°N, 36.05°E', tag: 'Ancient Tribal Heritage',
    desc: 'Meet communities whose traditions stretch back millennia along the Omo River, one of the most culturally diverse corners of Africa.',
    img: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1785762596/at38awk2jml8g4legvyy.webp',
  },
};

const IMG = {
  lalibela: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789400488/yjjoqh9dg9b36oubwmn3.jpg',
  danakil: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1784044759/cyzxqd7f9ratotwxhbat.jpg',
  omo: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789400510/jjmp2ct6hd27bzfodiz9.jpg',
  culture: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789690142/lcupyjfbrdjbytckaa7p.webp',
  a1: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789689878/juflmufrwax6lbsh02ei.jpg',
  a2: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789831861/x1v8yps47xeqiazls9ir.jpg',
  a3: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789393565/taibssdz4dyoerdepxl9.jpg',
};

const FEATURED_DESTINATIONS = [
  { id: 'simien', title: 'Simien Mountains', subtitle: 'Trekking & Wildlife', tag: 'UNESCO World Heritage', img: DESTINATIONS.simien.img },
  { id: 'lalibela', title: 'Lalibela', subtitle: 'Ancient Monolithic Churches', tag: '12th-Century Sanctuaries', img: IMG.lalibela },
  { id: 'danakil', title: 'Danakil Depression', subtitle: 'Otherworldly Landscapes', tag: 'Active Volcanoes & Salt Plains', img: IMG.danakil },
  { id: 'omo', title: 'Omo Valley', subtitle: 'Culture & Living Traditions', tag: 'Ancient Tribal Heritage', img: IMG.omo },
];

/* Field guide: strictly Ethiopia's iconic endemic wildlife */
const SPECIES = [
  {
    id: 'wolf',
    name: 'Ethiopian Wolf',
    latin: 'Canis simensis',
    place: 'Bale Mountains & Simien Highlands',
    season: 'Nov – Mar',
    odds: 4,
    img: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1791473044/cvjt50mizzfu0krwh3o8.jpg',
    pos: '50% 50%',
    fact: "The world's rarest canid and Africa's most threatened carnivore. Found exclusively in Ethiopia's Afro-alpine ranges above 3,000 metres, where packs and solitary hunters stalk giant mole-rats across the frosty Sanetti Plateau at dawn.",
  },
  {
    id: 'gelada',
    name: 'Gelada',
    latin: 'Theropithecus gelada',
    place: 'Simien Mountains',
    season: 'Oct – Mar',
    odds: 5,
    img: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1793175235/crpodr92rcfxr4ahwqyk.jpg',
    pos: '30% 55%',
    fact: 'Often called the bleeding-heart monkey for the vivid hourglass patch on its chest, the gelada is the only surviving grazing primate on Earth. Troops of hundreds forage across high alpine meadows by day and roost on sheer cliff ledges at night.',
  },
  {
    id: 'walia',
    name: 'Walia Ibex',
    latin: 'Capra walie',
    place: 'Simien Mountains',
    season: 'Oct – Mar',
    odds: 4,
    img: DESTINATIONS.simien.img,
    pos: '78% 40%',
    fact: 'Our namesake, living nowhere else on Earth but the northern escarpments of the Simien Mountains. With sweeping scimitar horns and remarkable agility on near-vertical basalt cliffs, it is best spotted along the rim at first light.',
  },
  {
    id: 'nyala',
    name: 'Mountain Nyala',
    latin: 'Tragelaphus buxtoni',
    place: 'Bale Mountains (Dinsho & Gaysay)',
    season: 'Oct – Apr',
    odds: 4,
    img:'https://res.cloudinary.com/dw1ohipim/image/upload/v1793559735/vonxhprx3selx6v60j3v.jpg',
    pos: '50% 50%',
    fact: 'A majestic, spiral-horned antelope endemic to the high montane woodlands and heather moorlands east of the Rift Valley. Males carry magnificent lyre-shaped horns and move quietly through the juniper and hagenia forests of Bale.',
  },
  {
    id: 'bushbuck',
    name: 'Menelik’s Bushbuck',
    latin: 'Tragelaphus scriptus meneliki',
    place: 'Bale & Central Ethiopian Highlands',
    season: 'Year-round',
    odds: 4,
    img: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1793559822/gfhnie9luodiygnwb4sz.jpg',
    pos: '50% 50%',
    fact: 'Named in honour of Emperor Menelik II, this shy highland antelope is distinguished by its thick, dark-chestnut to near-black coat adapted for cold mountain air. It shelters in dense Afro-montane juniper and cedar forests up to 4,000 metres.',
  },
];

const MARQUEE = [
  'Ethiopian Wolf',
  'Gelada',
  'Walia Ibex',
  'Mountain Nyala',
  'Menelik’s Bushbuck',
];

const STATS = [
  { to: 850, suffix: '+', label: 'bird species recorded in Ethiopia' },
  { to: 4550, suffix: 'm', label: 'Ras Dejen, the highest peak in the Simiens' },
  { to: 125, prefix: '−', suffix: 'm', label: 'below sea level in the Danakil' },
  { to: 10, prefix: '6–', label: 'guests per group, never more' },
];

/* Backup itineraries so the section is never empty if tour data is missing or its IDs change. */
const FALLBACK_TOURS = [
  { id: 'wf-1', name: 'Simien Gelada Trek', region: 'Simien Mountains', duration: '5 Days', difficulty: 'Moderate',
    subtitle: 'Walk the escarpment rim with gelada troops, ibex and lammergeiers overhead.', priceFrom: 'On request', image: DESTINATIONS.simien.img },
  { id: 'wf-2', name: 'Bale Wolves & Wild Highlands', region: 'Bale Mountains', duration: '6 Days', difficulty: 'Moderate',
    subtitle: 'Track the Ethiopian wolf across the Sanetti Plateau and into Harenna Forest.', priceFrom: 'On request', image: DESTINATIONS.bale.img },
  { id: 'wf-3', name: 'Rift Valley Lakes Safari', region: 'Great Rift Valley', duration: '4 Days', difficulty: 'Easy',
    subtitle: 'Flamingos, hippos and hot springs along a chain of volcanic lakes.', priceFrom: 'On request', image: DESTINATIONS.riftvalley.img },
];

const FEATURED_TOUR_IDS = ['4', '2', '1'];

/** Reads whatever shape the tour data has and returns display fields plus the untouched original. */
const toView = (t: any, i: number) => {
  const pic = t?.image ?? t?.img ?? t?.heroImage ?? t?.cover ?? t?.images ?? t?.gallery;
  const image = Array.isArray(pic) ? (typeof pic[0] === 'string' ? pic[0] : pic[0]?.url ?? pic[0]?.src) : typeof pic === 'string' ? pic : pic?.url;
  const price = t?.priceFrom ?? t?.price ?? t?.from;
  return {
    raw: t,
    key: String(t?.id ?? `tour-${i}`),
    name: t?.name ?? t?.title ?? 'Ethiopian Journey',
    region: t?.region ?? t?.location ?? t?.destination ?? 'Ethiopia',
    duration: t?.duration ?? (t?.days ? `${t.days} Days` : ''),
    difficulty: t?.difficulty ?? t?.level,
    subtitle: t?.subtitle ?? t?.tagline ?? t?.summary ?? t?.description ?? '',
    priceFrom: price === undefined || price === null || price === '' ? 'On request' : typeof price === 'number' ? `$${price.toLocaleString()}` : String(price),
    image: image || DESTINATIONS.simien.img,
  };
};

const pickFeaturedTours = () => {
  const all: any[] = Array.isArray(TOURS_DATA) ? (TOURS_DATA as any[]) : Object.values((TOURS_DATA as any) ?? {});
  const byId = FEATURED_TOUR_IDS.map((id) => all.find((t) => String(t?.id) === id)).filter(Boolean);
  const chosen = byId.length ? byId : all.slice(0, 3);
  return (chosen.length ? chosen : FALLBACK_TOURS).map(toView);
};
const FEATURED_TOURS = pickFeaturedTours();

const FEATURED_POSTS = [
  { id: 'post-1', title: "A First-Timer's Guide to Trekking the Simiens", category: 'Trekking', date: 'Sep 12', image: IMG.a1,
    excerpt: 'What to pack, how to acclimatise, and where to camp along the escarpment.', author: 'Walia Expeditions', readTime: '5 min read',
    content: 'Trekking the Simien Mountains is a profound experience. You will need sturdy boots, layers for the cold alpine nights, and a spirit of adventure. Our guides handle the logistics, so you can focus on the breathtaking views and endemic wildlife.' },
  { id: 'post-2', title: 'Tracking the Ethiopian Wolf: What to Expect', category: 'Wildlife', date: 'Aug 28', image: IMG.a2,
    excerpt: 'Best months, guide etiquette, and the odds of a sighting on the Sanetti Plateau.', author: 'Field Naturalist', readTime: '4 min read',
    content: 'The Ethiopian wolf is the rarest canid in the world. Early morning excursions on the Sanetti plateau offer the best chance of spotting them as they hunt for giant mole-rats among the giant lobelias.' },
  { id: 'post-3', title: 'When to Visit the Rift Valley Lakes for Flamingos', category: 'Birding', date: 'Aug 05', image: IMG.a3,
    excerpt: "Reading the seasons across Ethiopia's chain of volcanic lakes.", author: 'Ornithologist', readTime: '6 min read',
    content: "The Rift Valley lakes are a birder's paradise. Depending on the season, millions of flamingos migrate through this corridor. Understanding the wet and dry seasons is crucial for timing your visit perfectly." },
];

const toArticle = (p: any): ArticleData => ({
  image: p.image, title: p.title, category: p.category, date: p.date, readTime: p.readTime,
  author: p.author, excerpt: p.excerpt, body: String(p.content).split(/\n\s*\n/),
});

/* ---------------------------------------------------------------- HELPERS */
const SLIDE_MS = 7000;
const KEYS = Object.keys(DESTINATIONS) as (keyof typeof DESTINATIONS)[];

const cld = (url: string, transform: string) =>
  url.includes('res.cloudinary.com') && url.includes('/upload/') ? url.replace('/upload/', `/upload/${transform}/`) : url;

const MountainMark: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 120 44" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M3 41 L38 12 L54 27 L70 6 L117 41" />
    <path d="M38 12 L46 20" opacity="0.55" />
  </svg>
);

/* ---------------------------------------------------- LIGHT NATURE TOUCHES */
const rnd = (i: number) => { const v = Math.sin(i * 127.1 + 311.7) * 43758.5453; return v - Math.floor(v); };
const leafD = (l: number) => `M0 0C${l * 0.3} ${-l * 0.3} ${l * 0.75} ${-l * 0.24} ${l} 0C${l * 0.75} ${l * 0.24} ${l * 0.3} ${l * 0.3} 0 0Z`;

/** Subtle leaves spiralling gently down through the scene. */
const FallingLeaves: React.FC<{ count?: number }> = ({ count = 5 }) => (
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
    {Array.from({ length: count }, (_, i) => {
      const r = rnd(i + 3);
      return (
        <svg
          key={i}
          viewBox="-2 -14 52 28"
          className="walia-fall absolute -top-8 w-4 sm:w-5"
          style={{
            left: `${(i * (100 / count) + r * 12) % 100}%`,
            animationDuration: `${16 + r * 12}s`,
            animationDelay: `${-r * 20}s`,
          }}
        >
          <path d={leafD(42)} fill={i % 2 === 0 ? '#E5BA55' : '#4E7653'} opacity=".55" />
        </svg>
      );
    })}
  </div>
);

/** Drifting fireflies and pollen. Skipped entirely under reduced motion. */
const Fireflies: React.FC<{ count?: number }> = ({ count = 24 }) => {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    if (!c || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = c.getContext('2d')!;
    let w = 0, h = 0, raf = 0;
    const size = () => { const r = c.getBoundingClientRect(); w = c.width = r.width; h = c.height = r.height; };
    size();
    const ps = Array.from({ length: count }, () => ({
      x: Math.random() * 1400, y: Math.random() * 900, r: Math.random() * 1.8 + 0.6,
      vx: (Math.random() - 0.5) * 0.25, vy: -Math.random() * 0.25 - 0.05, p: Math.random() * 6.28, s: Math.random() * 0.02 + 0.008,
    }));
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of ps) {
        p.x += p.vx + Math.sin(p.p) * 0.15; p.y += p.vy; p.p += p.s;
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        if (p.x < -10) p.x = w + 10; if (p.x > w + 10) p.x = -10;
        const a = 0.25 + 0.55 * Math.abs(Math.sin(p.p));
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        g.addColorStop(0, `rgba(246,219,134,${a})`); g.addColorStop(1, 'rgba(246,219,134,0)');
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 6, 0, 6.28); ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener('resize', size);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', size); };
  }, [count]);
  return <canvas ref={ref} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true" />;
};

/** Generated savannah-highland ambience: wind plus the occasional bird call. No audio files needed. */
const startAmbience = () => {
  const AC = window.AudioContext || (window as any).webkitAudioContext;
  const ctx = new AC();
  const buf = ctx.createBuffer(1, ctx.sampleRate * 4, ctx.sampleRate);
  const d = buf.getChannelData(0);
  let last = 0;
  for (let i = 0; i < d.length; i++) { last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02; d[i] = last * 3.5; }
  const src = ctx.createBufferSource(); src.buffer = buf; src.loop = true;
  const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 420;
  const lfo = ctx.createOscillator(); lfo.frequency.value = 0.11;
  const depth = ctx.createGain(); depth.gain.value = 220;
  lfo.connect(depth); depth.connect(lp.frequency);
  const master = ctx.createGain(); master.gain.value = 0;
  master.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 2.5);
  src.connect(lp); lp.connect(master); master.connect(ctx.destination);
  src.start(); lfo.start();
  let timer: any;
  const chirp = () => {
    const t = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain();
    const f = 2400 + Math.random() * 1600;
    o.frequency.setValueAtTime(f, t); o.frequency.exponentialRampToValueAtTime(f * 1.35, t + 0.09);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.035, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.14);
    o.connect(g); g.connect(ctx.destination); o.start(t); o.stop(t + 0.16);
    if (Math.random() > 0.5) setTimeout(chirp, 170);
    timer = setTimeout(chirp, 3500 + Math.random() * 6000);
  };
  timer = setTimeout(chirp, 2500);
  return {
    stop: () => {
      clearTimeout(timer);
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.6);
      setTimeout(() => ctx.close(), 700);
    },
  };
};

/** Fades its children in once, when they first scroll into view. */
const Reveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = '', delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') { setSeen(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`walia-reveal ${seen ? 'is-seen' : ''} ${className}`}>{children}</div>;
};

const Counter: React.FC<{ to: number; prefix?: string; suffix?: string }> = ({ to, prefix = '', suffix = '' }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const run = () => {
      if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return setN(to);
      const t0 = performance.now();
      const step = (t: number) => {
        const k = Math.min((t - t0) / 1800, 1);
        setN(Math.round(to * (1 - Math.pow(1 - k, 3))));
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if (typeof IntersectionObserver === 'undefined') return setN(to);
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { run(); io.disconnect(); } }, { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{prefix}{n.toLocaleString()}{suffix}</span>;
};

/* ------------------------------------------------------------------- PAGE */
export default function HomePage({ onNavigate, onOpenInquiry, onSelectTour, onSelectDestination, onSelectPost }: HomePageProps) {
  const [active, setActive] = useState(0);
  const [article, setArticle] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [reduceMotion, setReduceMotion] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [species, setSpecies] = useState(0);
  const touchX = useRef<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const sound = useRef<{ stop: () => void } | null>(null);

  const next = useCallback(() => setActive((a) => (a + 1) % KEYS.length), []);
  const prev = useCallback(() => setActive((a) => (a - 1 + KEYS.length) % KEYS.length), []);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setTimeout(next, SLIDE_MS);
    return () => clearTimeout(id);
  }, [active, reduceMotion, next]);

  // Scroll progress trail along the top edge
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (barRef.current) barRef.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, []);

  useEffect(() => () => sound.current?.stop(), []);

  const toggleSound = () => {
    if (sound.current) { sound.current.stop(); sound.current = null; setSoundOn(false); return; }
    try { sound.current = startAmbience(); setSoundOn(true); } catch { setSoundOn(false); }
  };

  const onMove = (e: React.MouseEvent) => {
    if (reduceMotion || !heroRef.current) return;
    const r = heroRef.current.getBoundingClientRect();
    heroRef.current.style.setProperty('--px', String(((e.clientX - r.left) / r.width - 0.5) * 2));
    heroRef.current.style.setProperty('--py', String(((e.clientY - r.top) / r.height - 0.5) * 2));
  };
  const onTouchStart = (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
  };

  const go = (path: string) => { onNavigate?.(path); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const openTour = (key: string) => {
    const tour = FEATURED_TOURS.find((t) => t.key === key);
    if (onSelectTour && tour) onSelectTour(tour.raw);
    else go('/tours');
  };

  const current = DESTINATIONS[KEYS[active]];
  const sp = SPECIES[species];

  return (
    <div className="walia-root min-h-screen w-full bg-[#F7F3E9] text-[#352D27] antialiased">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Source+Sans+3:wght@300;400;500;600;700&display=swap');

        .walia-root { font-family: 'Source Sans 3', -apple-system, BlinkMacSystemFont, sans-serif; }
        .walia-serif { font-family: 'Playfair Display', Georgia, serif; }
        .walia-ui { font-family: 'Montserrat', sans-serif; }

        .hero-gold {
          background: linear-gradient(180deg, #F6DB86 0%, #E3B44C 42%, #C89B3C 72%, #A8761C 100%);
          -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent;
          padding: 0 0.08em 0.16em 0; filter: drop-shadow(0 6px 26px rgba(0,0,0,.45));
        }
        .hero-veil-left { background: linear-gradient(90deg, rgba(7,24,18,.9) 0%, rgba(7,24,18,.6) 34%, rgba(7,24,18,.16) 68%, rgba(7,24,18,0) 100%); }
        .hero-veil-bottom { background: linear-gradient(0deg, rgba(7,24,18,.96) 0%, rgba(7,24,18,.5) 20%, rgba(7,24,18,0) 52%); }
        .hero-veil-top { background: linear-gradient(180deg, rgba(7,24,18,.34) 0%, rgba(7,24,18,0) 20%); }
        .hero-vignette { background: radial-gradient(120% 90% at 50% 45%, transparent 55%, rgba(4,14,10,.65) 100%); }
        @media (max-width: 1023px) {
          .hero-veil-left { background: linear-gradient(180deg, rgba(7,24,18,.5) 0%, rgba(7,24,18,.34) 40%, rgba(7,24,18,.72) 100%); }
        }

        /* Film grain: gives photos and dark sections a tactile, printed-on-paper feel */
        .walia-grain::after {
          content: ''; position: absolute; inset: 0; pointer-events: none; opacity: .16; mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
        /* Topographic contour rings, like a survey map under the page */
        .walia-topo {
          background-image:
            repeating-radial-gradient(circle at 12% 18%, transparent 0 26px, rgba(23,63,53,.055) 26px 27px),
            repeating-radial-gradient(circle at 88% 82%, transparent 0 30px, rgba(23,63,53,.05) 30px 31px);
        }

        .glass-card { background: rgba(255,255,255,.82); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); }
        .glass-dark { background: rgba(10,28,22,.6); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); }

        /* The orchestrated moment: hero entrance, slow Ken Burns, drifting mist */
        @keyframes waliaRise { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: none; } }
        .walia-rise { animation: waliaRise .95s cubic-bezier(.2,.7,.2,1) backwards; }
        .walia-d1 { animation-delay: .1s; } .walia-d2 { animation-delay: .28s; } .walia-d3 { animation-delay: .46s; }
        .walia-d4 { animation-delay: .62s; } .walia-d5 { animation-delay: .8s; }

        .walia-kb { transform: scale(1.02); transition: transform 9s linear; will-change: transform; }
        .walia-kb.is-active { transform: scale(1.1); }
        .walia-par { transition: transform .5s cubic-bezier(.2,.7,.2,1); transform: translate3d(calc(var(--px,0) * -16px), calc(var(--py,0) * -10px), 0); }

        @keyframes waliaMist { from { transform: translateX(-8%); } to { transform: translateX(8%); } }
        .walia-mist { animation: waliaMist 26s ease-in-out infinite alternate; }
        .walia-mist.slow { animation-duration: 38s; animation-direction: alternate-reverse; }

        @keyframes waliaProgress { from { width: 0; } to { width: 100%; } }
        .walia-progress { animation: waliaProgress ${SLIDE_MS}ms linear forwards; }

        @keyframes waliaMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .walia-marquee { animation: waliaMarquee 46s linear infinite; }
        .walia-marquee-wrap:hover .walia-marquee { animation-play-state: paused; }

        @keyframes waliaPulse { 0% { box-shadow: 0 0 0 0 rgba(200,155,60,.55); } 100% { box-shadow: 0 0 0 16px rgba(200,155,60,0); } }
        .walia-pulse { animation: waliaPulse 2.2s ease-out infinite; }

        .walia-reveal { opacity: 0; transform: translateY(18px); transition: opacity .8s ease, transform .8s cubic-bezier(.2,.7,.2,1); }
        .walia-reveal.is-seen { opacity: 1; transform: none; }

        @keyframes waliaFall {
          0% { transform: translate3d(0,0,0) rotate(0); opacity: 0; }
          8% { opacity: .65; }
          25% { transform: translate3d(40px,28vh,0) rotate(110deg); }
          50% { transform: translate3d(-30px,55vh,0) rotate(230deg); }
          75% { transform: translate3d(50px,82vh,0) rotate(330deg); opacity: .65; }
          100% { transform: translate3d(-10px,112vh,0) rotate(430deg); opacity: 0; }
        }
        .walia-fall { animation: waliaFall 18s linear infinite; }

        @media (prefers-reduced-motion: reduce) {
          .walia-rise, .walia-progress, .walia-mist, .walia-marquee, .walia-pulse { animation: none; }
          .walia-kb, .walia-kb.is-active, .walia-par { transform: none; transition: none; }
          .walia-reveal { opacity: 1; transform: none; transition: none; }
          .walia-fall { display: none; }
        }
      `,
        }}
      />

      {/* Scroll trail */}
      <div className="pointer-events-none fixed left-0 top-0 z-[60] h-[3px] w-full">
        <div ref={barRef} className="h-full origin-left bg-gradient-to-r from-[#4E7653] via-[#C89B3C] to-[#F6DB86]" style={{ transform: 'scaleX(0)' }} />
      </div>

      {/* Ambient sound toggle */}
      <button
        onClick={toggleSound}
        aria-pressed={soundOn}
        aria-label={soundOn ? 'Mute wild ambience' : 'Play wild ambience'}
        className={`walia-ui glass-dark fixed bottom-5 left-5 z-50 inline-flex items-center gap-2.5 rounded-full border border-white/20 py-2.5 pl-3 pr-4 text-xs font-semibold text-white transition hover:border-[#C89B3C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F6DB86] ${soundOn ? '' : 'walia-pulse'}`}
      >
        {soundOn ? <Volume2 className="h-4 w-4 text-[#F6DB86]" /> : <VolumeX className="h-4 w-4 text-white/70" />}
        <span>{soundOn ? 'Ambience on' : 'Hear the highlands'}</span>
      </button>

      {/* =====================================================================
           1. HERO: cinematic slideshow in a living landscape
          ===================================================================== */}
      <section
        ref={heroRef}
        onMouseMove={onMove}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className="walia-grain relative isolate flex min-h-[100dvh] w-full flex-col overflow-hidden bg-[#071812] text-white"
        aria-roledescription="carousel"
        aria-label="Featured Ethiopian destinations"
      >
        {KEYS.map((k, i) => (
          <div
            key={k}
            aria-hidden={i !== active}
            className={`absolute inset-0 -z-30 transition-opacity duration-[1400ms] ease-in-out ${i === active ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
          >
            <div className="walia-par absolute -inset-6">
              <img
                src={cld(DESTINATIONS[k].img, 'f_auto,q_auto,w_2000')}
                alt={DESTINATIONS[k].title}
                fetchPriority={i === 0 ? 'high' : 'auto'}
                className={`walia-kb h-full w-full object-cover object-center ${i === active ? 'is-active' : ''}`}
              />
            </div>
          </div>
        ))}

        <div className="hero-veil-left absolute inset-0 -z-20" />
        <div className="hero-veil-bottom absolute inset-0 -z-20" />
        <div className="hero-veil-top absolute inset-0 -z-20" />
        <div className="hero-vignette absolute inset-0 -z-20" />

        {/* Subtle ambient touches: floating leaves, soft fireflies & highland mist */}
        <div className="absolute inset-0 -z-10"><Fireflies count={22} /></div>
        <FallingLeaves count={5} />
        <div className="pointer-events-none absolute inset-x-0 bottom-[64px] -z-10 h-[34vh] overflow-hidden" aria-hidden="true">
          <div className="walia-mist absolute -inset-x-[10%] bottom-0 h-3/4 bg-[radial-gradient(60%_100%_at_30%_100%,rgba(230,240,235,.14),transparent),radial-gradient(50%_90%_at_75%_100%,rgba(230,240,235,.1),transparent)]" />
          <div className="walia-mist slow absolute -inset-x-[10%] bottom-0 h-1/2 bg-[radial-gradient(55%_100%_at_55%_100%,rgba(230,240,235,.12),transparent)]" />
        </div>

        <div className="mx-auto flex w-full max-w-7xl flex-1 items-center px-6 pb-12 pt-32 sm:px-10 sm:pt-36 lg:px-12">
          <div className="w-full max-w-3xl">
            <div className="walia-rise walia-d1 flex items-center gap-4">
              <span className="h-px w-12 bg-[#C89B3C]" />
              <span className="walia-ui text-[11px] font-semibold uppercase tracking-[0.34em] text-[#E5BA55] sm:text-xs">Authentic Journeys</span>
            </div>

            <h1 className="walia-serif mt-6 text-[clamp(2.6rem,8vw,5.75rem)] font-normal leading-[0.98] tracking-[-0.02em]">
              <span className="walia-rise walia-d2 block text-[#FBF8F0] drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">Extraordinary</span>
              <span className="walia-rise walia-d3 hero-gold block italic">Ethiopia.</span>
            </h1>

            <p className="walia-rise walia-d4 mt-8 max-w-lg text-lg font-light leading-relaxed text-white/85 sm:text-xl">
              Ancient history. Breathtaking landscapes.
              <br className="hidden sm:block" /> Unforgettable people.
            </p>

            <div className="walia-rise walia-d5 mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => go('/tours')}
                className="walia-ui group inline-flex items-center gap-3 rounded-[6px] bg-[#C89B3C] px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_14px_34px_rgba(200,155,60,0.38)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B58930] hover:shadow-[0_18px_44px_rgba(200,155,60,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F6DB86] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071812] sm:text-[13px]"
              >
                <span>Explore Our Tours</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => onOpenInquiry?.()}
                className="walia-ui inline-flex items-center gap-2.5 rounded-[6px] border border-white/45 bg-white/10 px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071812] sm:text-[13px]"
              >
                <Compass className="h-4 w-4 text-[#F6DB86]" />
                <span>Plan Your Journey</span>
              </button>
            </div>

            <ul className="walia-rise walia-d5 mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
              <li className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#E5BA55]" /> Licensed Ethiopian operator</li>
              <li className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-[#E5BA55]" /> Small groups, 6–10 guests</li>
              <li className="inline-flex items-center gap-2"><Compass className="h-4 w-4 text-[#E5BA55]" /> Tailor-made on request</li>
            </ul>
          </div>
        </div>

        <div className="relative border-t border-white/15 bg-[#071812]/45 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-10 lg:px-12">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <button onClick={prev} aria-label="Previous slide" className="grid h-10 w-10 place-items-center rounded-full border border-white/25 text-white transition hover:border-[#C89B3C] hover:bg-[#C89B3C] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"><ChevronLeft className="h-5 w-5" /></button>
                <button onClick={next} aria-label="Next slide" className="grid h-10 w-10 place-items-center rounded-full border border-white/25 text-white transition hover:border-[#C89B3C] hover:bg-[#C89B3C] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"><ChevronRight className="h-5 w-5" /></button>
              </div>
              <div className="hidden sm:block">
                <p className="walia-ui text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">Current vista</p>
                <p className="walia-ui mt-0.5 text-sm font-semibold">{current.title}<span className="ml-3 font-medium text-[#E5BA55]">{current.meta}</span></p>
              </div>
            </div>

            <div className="hidden items-center gap-3 md:flex">
              {KEYS.map((k, idx) => (
                <button
                  key={k}
                  onClick={() => setActive(idx)}
                  aria-label={`Show ${DESTINATIONS[k].title}`}
                  aria-current={idx === active}
                  className={`relative h-14 overflow-hidden rounded-xl border transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${idx === active ? 'w-28 border-[#C89B3C]' : 'w-14 border-white/20 opacity-70 hover:border-white/50 hover:opacity-100'}`}
                >
                  <img src={cld(DESTINATIONS[k].img, 'c_fill,w_240,h_120,q_auto,f_auto')} alt="" className="h-full w-full object-cover" />
                  <span className="absolute inset-0 bg-[#071812]/25" />
                  {idx === active && !reduceMotion && <span key={active} className="walia-progress absolute bottom-0 left-0 h-[3px] bg-[#C89B3C]" />}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 md:hidden">
              {KEYS.map((k, idx) => (
                <button key={k} onClick={() => setActive(idx)} aria-label={`Slide ${idx + 1}: ${DESTINATIONS[k].title}`} className={`h-2 rounded-full transition-all duration-500 ${idx === active ? 'w-8 bg-[#C89B3C]' : 'w-2 bg-white/35'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wildlife ticker */}
      <div className="walia-marquee-wrap overflow-hidden border-b border-[#C89B3C]/30 bg-[#0B261E] py-4" aria-label="Endemic Ethiopian wildlife">
        <div className="walia-marquee flex w-max items-center gap-10 whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i} className="walia-serif flex items-center gap-10 text-lg italic text-white/75">
              {m}
              <Leaf className="h-4 w-4 text-[#C89B3C]" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>

      {/* =====================================================================
           2. ICONIC DESTINATIONS
          ===================================================================== */}
      <section className="walia-topo relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="walia-ui inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#C89B3C]">
                <Sparkles className="h-3.5 w-3.5" /><span>Timeless Wonder</span>
              </div>
              <h2 className="walia-serif mt-3 text-4xl font-normal tracking-tight text-[#173F35] sm:text-5xl lg:text-6xl">Iconic Destinations</h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#352D27]/75">
                Four regions that show Ethiopia at its most dramatic, from highland ridgelines to rock-hewn churches.
              </p>
            </div>
            <button onClick={() => go('/destinations')} className="walia-ui group inline-flex items-center gap-2 rounded-[6px] border border-[#173F35] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#173F35] transition hover:bg-[#173F35] hover:text-white">
              <span>View All Destinations</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_DESTINATIONS.map((item, i) => (
              <Reveal key={item.id} delay={i * 90}>
                <article
                  onClick={() => {
                    const match = DESTINATIONS[item.id as keyof typeof DESTINATIONS];
                    if (onSelectDestination && match) onSelectDestination(match);
                    else go('/destinations');
                  }}
                  className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-[#173F35] shadow-[0_12px_40px_rgba(23,63,53,0.14)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_26px_56px_rgba(23,63,53,0.28)] ${i % 2 ? 'lg:mt-10' : ''}`}
                >
                  <div className="walia-grain relative aspect-[3/4] w-full overflow-hidden">
                    <img src={cld(item.img, 'f_auto,q_auto,w_900')} alt={item.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071812]/90 via-[#071812]/25 to-transparent" />
                    <div className="absolute left-4 top-4">
                      <span className="glass-dark walia-ui rounded-full px-3 py-1 text-[11px] font-semibold text-white/90">{item.tag}</span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                      <h3 className="walia-serif text-2xl font-normal text-white transition-colors group-hover:text-[#F6DB86]">{item.title}</h3>
                      <p className="mt-1 text-sm text-white/70">{item.subtitle}</p>
                      <div className="walia-ui mt-4 flex items-center justify-between border-t border-white/20 pt-3 text-xs font-semibold text-white">
                        <span className="uppercase tracking-wider">Discover Region</span>
                        <div className="grid h-8 w-8 place-items-center rounded-full bg-white/20 backdrop-blur-md transition-all group-hover:bg-[#C89B3C]"><ArrowRight className="h-4 w-4" /></div>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
           3. FIELD GUIDE: endemic animals found only in Ethiopia
          ===================================================================== */}
      <section className="walia-grain relative isolate overflow-hidden border-t border-[#C89B3C]/25 bg-[#0B261E] py-24 text-white lg:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10"><Fireflies count={18} /></div>
        <FallingLeaves count={5} />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_85%_0%,rgba(200,155,60,.14),transparent)]" />
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <Reveal className="max-w-2xl">
            <div className="walia-ui inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#E5BA55]">
              <Binoculars className="h-4 w-4" /><span>The Endemic Field Guide</span>
            </div>
            <h2 className="walia-serif mt-3 text-4xl font-normal leading-tight sm:text-5xl">
              Meet the residents <span className="italic text-[#F6DB86]">before they meet you.</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Ethiopia's highlands shelter rare mammals that exist nowhere else on Earth. Pick one of our five signature endemics to see where we track it and when to go.
            </p>
          </Reveal>

          <Reveal className="mt-12 grid gap-8 lg:grid-cols-12" delay={120}>
            <div role="tablist" aria-label="Endemic Ethiopian wildlife species" className="flex gap-3 overflow-x-auto pb-2 lg:col-span-4 lg:flex-col lg:overflow-visible lg:pb-0">
              {SPECIES.map((s, i) => (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={i === species}
                  onClick={() => setSpecies(i)}
                  className={`group shrink-0 rounded-2xl border px-5 py-4 text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F6DB86] lg:shrink ${i === species ? 'border-[#C89B3C] bg-white/10 shadow-[0_10px_30px_rgba(0,0,0,.25)]' : 'border-white/10 bg-white/[0.03] hover:border-white/30'}`}
                >
                  <p className={`walia-serif text-xl ${i === species ? 'text-[#F6DB86]' : 'text-white'}`}>{s.name}</p>
                  <p className="mt-0.5 text-sm italic text-white/50">{s.latin}</p>
                </button>
              ))}
            </div>

            <div key={sp.id} className="walia-rise relative overflow-hidden rounded-3xl border border-white/10 lg:col-span-8">
              <div className="walia-grain relative aspect-[16/10] w-full sm:aspect-[16/9]">
                <img src={cld(sp.img, 'f_auto,q_auto,w_1400')} alt={`${sp.name} (${sp.latin}) in ${sp.place}`} loading="lazy" style={{ objectPosition: sp.pos }} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071812] via-[#071812]/55 to-transparent" />
                <div className="absolute left-6 top-6 z-10">
                  <span className="walia-ui glass-dark inline-flex items-center gap-1.5 rounded-full border border-[#C89B3C]/40 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#F6DB86]">
                    <Leaf className="h-3 w-3 text-[#C89B3C]" /> Endemic to Ethiopia
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-9">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="walia-serif text-3xl sm:text-4xl">{sp.name}</h3>
                    <span className="walia-serif text-base italic text-[#F6DB86]/80">{sp.latin}</span>
                  </div>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/80 sm:text-base">{sp.fact}</p>
                  <dl className="walia-ui mt-6 grid grid-cols-1 gap-4 border-t border-white/15 pt-5 text-sm sm:grid-cols-3">
                    <div>
                      <dt className="flex items-center gap-1.5 text-xs text-white/50"><MapPin className="h-3.5 w-3.5 text-[#E5BA55]" />Where</dt>
                      <dd className="mt-1 font-semibold">{sp.place}</dd>
                    </div>
                    <div>
                      <dt className="flex items-center gap-1.5 text-xs text-white/50"><Calendar className="h-3.5 w-3.5 text-[#E5BA55]" />Best months</dt>
                      <dd className="mt-1 font-semibold">{sp.season}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-white/50">Sighting odds</dt>
                      <dd className="mt-2 flex gap-1.5" aria-label={`${sp.odds} out of 5`}>
                        {[1, 2, 3, 4, 5].map((n) => <span key={n} className={`h-2.5 w-6 rounded-full ${n <= sp.odds ? 'bg-[#C89B3C]' : 'bg-white/15'}`} />)}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 flex justify-end">
            <button onClick={() => go('/tours')} className="walia-ui group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white transition hover:text-[#F6DB86]">
              See tours that track them
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================================
           4. WHY WALIA + STATS
          ===================================================================== */}
      <section className="border-y border-[#E6DED1] bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <Reveal className="max-w-2xl">
            <span className="walia-ui text-xs font-bold uppercase tracking-[0.22em] text-[#4E7653]">Why Travel with Walia</span>
            <h2 className="walia-serif mt-3 text-3xl font-normal text-[#173F35] sm:text-4xl">Led by people who call these places home</h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { Icon: Compass, title: 'Expert Local Guides', body: 'Native naturalists, historians, and licensed mountain guides with generational roots and deep cultural access.', BadgeIcon: ShieldCheck, badge: '100% Certified Field Experts' },
              { Icon: Users, title: 'Small, Curated Groups', body: 'Intimate expedition sizes (max 6–10 guests) ensuring quiet wildlife encounters and genuine hospitality.', BadgeIcon: Star, badge: 'Private & Tailor-Made Available' },
              { Icon: Leaf, title: 'Conservation-First Travel', body: 'Every booking directly funds Simien gelada habitats, local community schools, and Bale wolf research initiatives.', BadgeIcon: Globe2, badge: 'Empowering Regional Communities' },
            ].map(({ Icon, title, body, BadgeIcon, badge }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-[#E6DED1] bg-[#F7F3E9] p-8 transition-shadow duration-300 hover:shadow-md">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#173F35] text-[#F6DB86]"><Icon className="h-7 w-7" strokeWidth={1.6} /></div>
                  <h3 className="walia-serif mt-6 text-2xl font-normal text-[#352D27]">{title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#352D27]/75">{body}</p>
                  <div className="walia-ui mt-5 flex items-center gap-2 text-xs font-bold text-[#173F35]"><BadgeIcon className="h-4 w-4 text-[#4E7653]" /><span>{badge}</span></div>
                </div>
              </Reveal>
            ))}
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-y-10 border-t border-[#E6DED1] pt-12 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <div key={i} className={`px-4 ${i ? 'lg:border-l lg:border-[#E6DED1]' : ''}`}>
                <dd className="walia-serif text-4xl text-[#173F35] sm:text-5xl"><Counter to={s.to} prefix={s.prefix} suffix={s.suffix} /></dd>
                <dt className="mt-2 max-w-[15rem] text-sm leading-snug text-[#352D27]/65">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* =====================================================================
           5. FEATURED TOURS
          ===================================================================== */}
      <section className="walia-topo relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
          <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="walia-ui text-xs font-bold uppercase tracking-[0.2em] text-[#C89B3C]">Signature Itineraries</span>
              <h2 className="walia-serif mt-2 text-4xl font-normal text-[#173F35] sm:text-5xl">Featured Tours</h2>
            </div>
            <button onClick={() => go('/tours')} className="walia-ui rounded-[6px] border border-[#173F35] bg-transparent px-7 py-3 text-xs font-semibold uppercase tracking-wider text-[#173F35] transition hover:bg-[#173F35] hover:text-white">
              View Tours
            </button>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-9 md:grid-cols-3">
            {FEATURED_TOURS.map((t, i) => (
              <Reveal key={t.key} delay={i * 110}>
                <article
                  onClick={() => openTour(t.key)}
                  className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#E6DED1] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(23,63,53,0.12)]"
                >
                  <div className="walia-grain relative aspect-[16/11] overflow-hidden bg-[#173F35]">
                    <img src={cld(t.image, 'f_auto,q_auto,w_900')} alt={t.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071812]/45 to-transparent" />
                    {t.duration && (
                      <span className="walia-ui absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-[4px] bg-[#173F35]/90 px-3.5 py-1 text-xs font-medium text-white backdrop-blur-md">
                        <Clock className="h-3.5 w-3.5 text-[#E5BA55]" />{t.duration}
                      </span>
                    )}
                    {t.difficulty && (
                      <div className="walia-ui absolute right-4 top-4 z-10 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#173F35] shadow-sm">{t.difficulty}</div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-7">
                    <div>
                      <p className="walia-ui flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#4E7653]"><MapPin className="h-3.5 w-3.5" />{t.region}</p>
                      <h3 className="walia-serif mt-2.5 text-2xl font-normal text-[#352D27] transition-colors group-hover:text-[#173F35]">{t.name}</h3>
                      {t.subtitle && <p className="mt-2.5 line-clamp-2 text-[15px] leading-relaxed text-[#352D27]/70">{t.subtitle}</p>}
                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-[#E6DED1] pt-5">
                      <div>
                        <span className="walia-ui text-[11px] uppercase tracking-wider text-[#352D27]/50">{/\d/.test(t.priceFrom) ? 'From, per traveler' : 'Pricing'}</span>
                        <p className="walia-ui text-lg font-bold text-[#173F35]">{t.priceFrom}</p>
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); onOpenInquiry?.(t.name); }}
                        className="walia-ui inline-flex items-center gap-2 rounded-[6px] bg-[#C89B3C] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#B58930]"
                      >
                        <span>Book Your Trip</span><ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
           6. CULTURE + JOURNAL
          ===================================================================== */}
      <section className="border-t border-[#E6DED1] bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <Reveal className="relative lg:col-span-6">
              <div className="walia-grain relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_24px_60px_rgba(23,63,53,0.2)]">
                <img src={cld(IMG.culture, 'f_auto,q_auto,w_1200')} alt="Ethiopian cultural hospitality and traditions" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="glass-card absolute -bottom-6 -right-6 hidden rounded-2xl border border-[#E6DED1] p-5 shadow-xl sm:block">
                <p className="walia-ui text-xs font-bold text-[#C89B3C]">3,000+ Years</p>
                <p className="text-sm font-semibold text-[#352D27]">Continuous Sovereign History</p>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-6 lg:pl-6" delay={120}>
              <span className="walia-ui text-xs font-semibold uppercase tracking-[0.2em] text-[#B5523A]">Cultural & Community</span>
              <h2 className="walia-serif mt-3 text-4xl font-normal leading-tight text-[#352D27] sm:text-5xl">
                More Than a Destination.
                <br />
                <span className="italic text-[#173F35]">A Living Connection.</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#352D27]/80">
                From ancient rock-hewn sanctuaries in Lalibela to timeless ceremonies along the Omo River, our journeys are structured around unhurried encounters, local life, and legendary Ethiopian warmth.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button onClick={() => onOpenInquiry?.()} className="walia-ui inline-flex items-center gap-2 rounded-[6px] bg-[#C89B3C] px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition hover:bg-[#B58930]">
                  <span>Book Your Trip</span><ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => go('/about')} className="walia-ui rounded-[6px] border border-[#173F35] bg-transparent px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#173F35] transition hover:bg-[#173F35] hover:text-white">
                  Our Story
                </button>
              </div>
            </Reveal>
          </div>

          <div className="mt-24 border-t border-[#E6DED1] pt-16">
            <div className="flex items-end justify-between">
              <div>
                <span className="walia-ui text-xs font-semibold uppercase tracking-[0.2em] text-[#4E7653]">From The Journal</span>
                <h3 className="walia-serif mt-2 text-3xl font-normal text-[#352D27]">Field Notes & Stories</h3>
              </div>
              <button onClick={() => go('/blog-events')} className="walia-ui text-xs font-semibold uppercase tracking-wider text-[#173F35] transition hover:text-[#1E5A8A]">All Stories</button>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
              {FEATURED_POSTS.map((p, i) => (
                <Reveal key={p.id} delay={i * 100}>
                  <article onClick={() => setArticle(p)} className="group cursor-pointer">
                    <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-[#173F35]">
                      <img src={cld(p.image, 'f_auto,q_auto,w_800')} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <p className="walia-ui mt-4 text-xs font-medium text-[#4E7653]">{p.category} · {p.readTime}</p>
                    <h4 className="walia-serif mt-1.5 text-xl font-normal text-[#352D27] transition-colors group-hover:text-[#1E5A8A]">{p.title}</h4>
                    <p className="mt-2 line-clamp-2 text-[15px] leading-relaxed text-[#352D27]/70">{p.excerpt}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
           7. FINAL CTA
          ===================================================================== */}
      <section className="walia-grain relative isolate overflow-hidden border-t border-[#C89B3C]/25 bg-[#173F35] py-24 text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10"><Fireflies count={18} /></div>
        <FallingLeaves count={4} />
        <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: 'radial-gradient(60% 80% at 50% 0%, rgba(200,155,60,0.16) 0%, rgba(200,155,60,0) 70%)' }} />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h2 className="walia-serif text-3xl font-normal text-white sm:text-5xl">Ready for Your Ethiopian Adventure?</h2>
          <p className="mt-4 text-lg text-white/80">Get travel inspiration, exclusive offers and trip updates.</p>

          <form
            onSubmit={(e) => { e.preventDefault(); onOpenInquiry?.(email ? `Newsletter subscription: ${email}` : undefined); setEmail(''); }}
            className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row sm:gap-0"
          >
            <label htmlFor="walia-newsletter" className="sr-only">Your email address</label>
            <input
              id="walia-newsletter" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address"
              className="min-w-0 flex-1 rounded-[6px] border-0 bg-[#F7F3E9] px-5 py-4 text-sm text-[#352D27] placeholder:text-[#352D27]/50 focus:outline-none focus:ring-2 focus:ring-[#E5BA55] sm:rounded-r-none"
            />
            <button type="submit" className="walia-ui rounded-[6px] bg-[#C89B3C] px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-[#B58930] sm:rounded-l-none">Subscribe</button>
          </form>

          <MountainMark className="mx-auto mt-16 h-10 w-28 text-[#C89B3C]" />
          <p className="walia-serif mt-4 text-base italic text-white/55">More than a destination. A deeper connection.</p>
        </div>
      </section>

      <ArticleModal
        article={article ? toArticle(article) : null}
        onClose={() => setArticle(null)}
        primaryLabel="Read full journal"
        onPrimary={() => {
          if (onSelectPost) onSelectPost(article);
          else if (onNavigate) onNavigate('/blog-events');
          window.scrollTo(0, 0);
          setArticle(null);
        }}
      />
    </div>
  );
}