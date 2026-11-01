import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { WildStyles } from './WildUI';

interface FooterProps {
  onNavigate?: (path: string) => void;
  onOpenInquiry?: () => void; 
}

const EXPLORE = [
  { name: 'Our story', path: '/about' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Tour packages', path: '/tours' },
  { name: 'Expedition gallery', path: '/gallery' },
  { name: 'Field notes blog', path: '/blog-events' },
  { name: 'Contact', path: '/contact' },
];

const SOCIALS = [
  { Icon: Instagram, label: 'Instagram' },
  { Icon: Facebook, label: 'Facebook' },
  { Icon: Twitter, label: 'Twitter' },
  { Icon: Youtube, label: 'YouTube' },
];

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenInquiry }) => {
  const handleNav = (e: React.MouseEvent<HTMLElement>, path: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="wl relative isolate overflow-hidden bg-[#06110A] pb-10 pt-24 text-[#FBF8F0]">
      <WildStyles />
      <div className="absolute -right-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-[#173F35] opacity-30 blur-[140px]" />
      <div className="absolute -bottom-40 -left-40 -z-10 h-[420px] w-[420px] rounded-full bg-[#173F35] opacity-20 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          
          {/* Brand & Socials */}
          <div className="lg:col-span-4 lg:pr-4">
            <a href="/" onClick={(e) => handleNav(e, '/')} aria-label="Walia Travel home" className="inline-block">
              <img
                src="https://res.cloudinary.com/dw1ohipim/image/upload/v1789850868/unm4auzwrcwdgkxvtmqt.png"
                alt="Walia Travel logo"
                className="h-24 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </a>
            <p className="mt-8 font-['Playfair_Display'] text-[15px] leading-[1.8] text-[#FBF8F0]/80">
              Bespoke wildlife and cultural expeditions across Ethiopia. From the sheer escarpments of the Simien Mountains to the vibrant heart of the Omo Valley, we connect you with the soul of the Horn of Africa.
            </p>
            <div className="mt-10 flex items-center gap-4">
              {SOCIALS.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-[#1E2923] text-[#FBF8F0]/90 transition-all hover:-translate-y-1 hover:bg-[#2A362F]"
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h4 className="font-['Playfair_Display'] text-[22px] font-bold text-[#FBF8F0]">Explore</h4>
            <ul className="mt-8 space-y-4">
              {EXPLORE.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => handleNav(e, link.path)}
                    className="font-['Montserrat'] text-[13px] font-medium tracking-wide text-[#FBF8F0] transition hover:text-[#C89B3C]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-['Playfair_Display'] text-[22px] font-bold text-[#FBF8F0]">Contact our HQ</h4>
            <ul className="mt-8 space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#C89B3C]" strokeWidth={1.5} />
                <span className="font-['Playfair_Display'] text-[15px] leading-relaxed text-[#FBF8F0]">
                  Lalibela, Amhara Region,<br />Ethiopia
                </span>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#C89B3C]" strokeWidth={1.5} />
                <span className="flex flex-col gap-2 font-['Montserrat'] text-[13px] font-bold tracking-wider text-[#FBF8F0]">
                  <a href="tel:+251911072137" className="transition hover:text-[#C89B3C]">+251 911 072 137</a>
                  <a href="tel:+251925963212" className="transition hover:text-[#C89B3C]">+251 925 963 212</a>
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-5 w-5 shrink-0 text-[#C89B3C]" strokeWidth={1.5} />
                <a href="mailto:info@waliatravel.com" className="font-['Playfair_Display'] text-[15px] text-[#FBF8F0] transition hover:text-[#C89B3C]">
                  info@waliatravel.com
                </a>
              </li>
            </ul>
          </div>

          {/* The Expedition Club */}
          <div className="lg:col-span-3">
            <h4 className="font-['Playfair_Display'] text-[22px] font-bold text-[#FBF8F0]">The Expedition Club</h4>
            <p className="mt-8 font-['Playfair_Display'] text-[15px] leading-relaxed text-[#FBF8F0]/80">
              Get travel guides, early access to seasonal departures, and stories from the field.
            </p>
            
            <form className="relative mt-8" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="Your email address"
                className="w-full rounded-full border border-white/10 bg-[#1A2620] py-3.5 pl-5 pr-14 font-['Montserrat'] text-xs text-[#FBF8F0] placeholder:text-[#FBF8F0]/50 focus:border-[#C89B3C] focus:bg-[#202C26] focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute bottom-1 right-1 top-1 grid w-[38px] place-items-center rounded-full bg-[#173F35] text-[#FBF8F0] transition hover:bg-[#205245]"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </button>
            </form>
            
            <button 
              onClick={onOpenInquiry}
              className="mt-6 w-full rounded-full border border-[#C89B3C] bg-transparent py-3.5 font-['Montserrat'] text-[13px] font-bold tracking-wide text-[#C89B3C] transition hover:bg-[#C89B3C] hover:text-[#06110A]"
            >
              Plan your expedition
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 font-['Montserrat'] text-[11px] font-medium tracking-widest text-[#FBF8F0]/40 md:flex-row">
          <p>© {new Date().getFullYear()} Walia Travel Ethiopia. All rights reserved.</p>
          <div className="flex items-center gap-8 uppercase">
            <a href="#" className="transition hover:text-[#C89B3C]">Privacy policy</a>
            <a href="#" className="transition hover:text-[#C89B3C]">Terms of service</a>
            <a href="#" className="transition hover:text-[#C89B3C]">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};