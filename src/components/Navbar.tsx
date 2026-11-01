import React, { useState, useEffect, useCallback } from 'react';
import { WaliaLogo } from './WaliaLogo';
import { Menu, X, Compass, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenInquiry: (tourName?: string) => void;
}

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Tours', path: '/tours' },
  { name: 'Blog & Events', path: '/blog-events' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHome = currentPath === '/' || currentPath === '' || currentPath === '/home';
  const isTransparentTop = isHome && !isScrolled;

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMobileMenuOpen(false);
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const onResize = () => window.innerWidth >= 1024 && setMobileMenuOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = useCallback(
    (path: string) => {
      onNavigate(path);
      setMobileMenuOpen(false);
    },
    [onNavigate]
  );

  const isActive = (path: string) => currentPath === path || (path !== '/' && currentPath.startsWith(path));

  // Determine dynamic bar styles matching the luxury #FAF7F0/#173F35 theme
  const getNavBackgroundClass = () => {
    if (isTransparentTop) {
      return 'bg-transparent py-4 lg:py-6 border-0 border-none shadow-none backdrop-blur-none';
    }
    if (isScrolled) {
      return 'bg-[#FAF7F0]/95 py-2.5 shadow-[0_12px_30px_-12px_rgba(23,63,53,0.12)] backdrop-blur-md border-b border-[#E3DAC8]/50';
    }
    return 'bg-[#FAF7F0] py-3 lg:py-4 border-b border-[#E3DAC8]/50';
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Source+Sans+3:wght@300;400;500;600&display=swap');
        .nav-font-body { font-family: 'Source Sans 3', sans-serif; }
        .nav-font-serif { font-family: 'Playfair Display', Georgia, serif; }
        .nav-font-ui { font-family: 'Montserrat', sans-serif; }
      `}} />

      <header
        id="walia-main-navbar"
        style={
          isTransparentTop
            ? { backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }
            : undefined
        }
        className={`fixed inset-x-0 top-0 z-40 w-full transition-all duration-300 ease-out nav-font-ui ${getNavBackgroundClass()} ${
          isTransparentTop ? 'text-white border-0' : 'text-[#173F35]'
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 md:px-12">
          
          {/* Logo: Bigger at the top of homepage, smoothly shrinking when scrolled */}
          <button
            onClick={() => handleNavClick('/')}
            aria-label="Walia Travel home"
            className={`flex shrink-0 origin-left items-center rounded-sm transition-all duration-300 ease-out ${
              isTransparentTop
                ? 'h-16 sm:h-20 scale-110 sm:scale-125 lg:scale-135 brightness-0 invert drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]'
                : isScrolled
                ? 'h-12 scale-[0.72] sm:scale-[0.8] brightness-0 sepia hue-rotate-[130deg] saturate-[2]'
                : 'h-14 scale-[0.85] sm:scale-95 brightness-0 sepia hue-rotate-[130deg] saturate-[2]'
            }`}
          >
            <WaliaLogo />
          </button>

          {/* Desktop links */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.path);
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  aria-current={active ? 'page' : undefined}
                  className={`relative rounded-full px-3 py-2 text-[11px] uppercase tracking-widest transition-all duration-200 ${
                    active
                      ? isTransparentTop
                        ? 'bg-white/20 font-bold text-white shadow-sm backdrop-blur-sm'
                        : 'bg-[#173F35]/10 font-bold text-[#173F35]'
                      : isTransparentTop
                      ? 'font-medium text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] hover:bg-white/20 hover:text-white'
                      : 'font-medium text-[#173F35]/80 hover:bg-[#173F35]/5 hover:text-[#173F35]'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span
                      className={`absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full ${
                        isTransparentTop ? 'bg-[#C89B3C]' : 'bg-[#C89B3C]'
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop actions */}
          <div className="hidden shrink-0 items-center gap-4 lg:flex">
            <button 
              id="nav-plan-adventure-btn" 
              onClick={() => onOpenInquiry()} 
              className="bg-[#C89B3C] text-white px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider rounded-[6px] shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-[#B58930] flex items-center gap-2"
            >
              <Compass className="h-[14px] w-[14px]" />
              Plan your adventure
            </button>
          </div>

          {/* Mobile actions */}
          <div className="flex shrink-0 items-center gap-3 lg:hidden">
            <button 
              onClick={() => onOpenInquiry()} 
              className="bg-[#C89B3C] text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded shadow hover:bg-[#B58930]"
            >
              Plan
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu-drawer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className={`grid h-10 w-10 place-items-center rounded-full transition ${
                isTransparentTop
                  ? 'bg-black/30 text-white backdrop-blur-sm hover:bg-black/50'
                  : 'bg-[#173F35]/5 text-[#173F35] hover:bg-[#173F35]/10'
              }`}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="fixed inset-0 z-50 flex h-[100dvh] flex-col overflow-y-auto bg-[#173F35] px-6 pb-8 pt-28 text-[#FAF7F0] lg:hidden nav-font-ui"
        >
          <nav className="flex-1" aria-label="Mobile">
            <ul className="divide-y divide-[#FAF7F0]/15 border-y border-[#FAF7F0]/15">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.path);
                return (
                  <li key={link.path}>
                    <button
                      onClick={() => handleNavClick(link.path)}
                      aria-current={active ? 'page' : undefined}
                      className="flex w-full items-center justify-between py-5 text-left"
                    >
                      <span className={`nav-font-serif text-3xl font-normal ${active ? 'text-[#C89B3C]' : 'text-[#FAF7F0]'}`}>
                        {link.name}
                      </span>
                      {active ? <span className="h-2 w-2 rounded-full bg-[#C89B3C]" /> : <ArrowUpRight className="h-5 w-5 text-[#FAF7F0]/40" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-8 shrink-0 space-y-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full bg-[#C89B3C] text-white py-4 rounded-[6px] text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#B58930] transition"
            >
              <Compass className="h-4 w-4" />
              Plan your adventure
            </button>
            <div className="flex items-center justify-center text-[11px] text-[#FAF7F0]/70 font-semibold uppercase tracking-wider">
              <span>Addis Ababa, Ethiopia</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};