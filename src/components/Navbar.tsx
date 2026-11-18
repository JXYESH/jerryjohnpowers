import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection?: string;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Overview', href: '#overview', id: 'overview' },
  { label: 'Capabilities', href: '#services', id: 'services' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Leadership', href: '#leadership', id: 'leadership' },
];

export default function Navbar({ activeSection = 'home' }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-40 bg-gradient-to-b from-[#05142E]/85 via-[#05142E]/45 to-transparent">
      <div className="w-full max-w-[1800px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 h-20 lg:h-24 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Lockup */}
        <a
          href="#home"
          className="flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2389E8]"
        >
          <img
            src="/assets/jjp/logo_alt.png"
            alt="Jerry John Powers emblem"
            referrerPolicy="no-referrer"
            className="h-9 w-9 object-contain shrink-0"
          />
          <span className="text-[16px] lg:text-[18px] tracking-[0.06em] font-sans uppercase text-white">
            <span className="font-semibold">Jerry John</span>{' '}
            <span className="font-normal text-[#8BC6FF]">Powers</span>
          </span>
        </a>

        {/* Zone 2: Navigation Links (Unique Target Per Section) */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 lg:gap-9"
        >
          {NAV_LINKS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`text-[14px] font-medium whitespace-nowrap shrink-0 pb-1 transition-colors border-b ${
                  isActive
                    ? 'text-white border-white/90'
                    : 'text-[#C5D0DF] border-transparent hover:text-white hover:border-white/50'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center bg-[#2389E8] hover:bg-[#1B76CC] text-white text-[13.5px] font-medium px-5 py-2.5 rounded-[3px] transition-colors whitespace-nowrap shrink-0"
          >
            Enquire
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-white border border-white/20 rounded-[3px] bg-[#071B3D]/70 hover:bg-[#102C59] transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#071B3D] border-t border-white/10 border-b border-white/15 px-6 py-5 shadow-2xl">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-3">
            {NAV_LINKS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={handleLinkClick}
                className="text-[15px] font-medium text-[#E2E8F0] hover:text-white py-2 border-b border-white/8"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="mt-2 inline-flex items-center justify-center bg-[#2389E8] hover:bg-[#1B76CC] text-white text-[14px] font-medium px-5 py-3 rounded-[3px] transition-colors"
            >
              Enquire
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
