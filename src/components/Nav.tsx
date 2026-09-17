import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { SignUpModal } from './SignUpModal';

interface NavItem {
  label: string;
  path: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Course', path: '/course' },
  { label: 'Field Guides', path: '/field-guides' },
  { label: 'Geology', path: '/geology' },
  { label: 'Plans', path: '/plans' },
  { label: 'Live Tour', path: '/live-tour' },
];

export const Nav: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between transition-all duration-300 px-4 sm:px-6 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/30 py-3 sm:py-3.5'
            : 'bg-transparent py-4 sm:py-5 border-b border-transparent'
        }`}
      >
        {/* Left: Brand Logo & Wordmark (Links Home) */}
        <Link to="/" className="flex items-center gap-3 group">
          <svg
            className="w-[26px] h-[26px] transition-transform group-hover:scale-105"
            viewBox="0 0 256 256"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
          </svg>
          <span className="text-white text-2xl font-playfair italic drop-shadow-sm">
            Lithos
          </span>
        </Link>

        {/* Center pill (desktop) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-2 py-2 items-center gap-1 shadow-lg shadow-black/20">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-white/25 text-white font-semibold shadow-sm'
                    : 'text-white/80 hover:bg-white/20 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Right (desktop) */}
        <div className="hidden md:block">
          <button
            type="button"
            onClick={() => setSignUpModalOpen(true)}
            className="bg-white text-gray-900 text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-sm"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white/90 hover:text-white focus:outline-none bg-white/15 backdrop-blur-md border border-white/20 rounded-full transition-colors shadow-sm"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 p-4 bg-black/95 backdrop-blur-2xl border border-white/20 rounded-2xl flex flex-col gap-2 shadow-2xl animate-in fade-in slide-in-from-top-2">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-white/20 text-white font-semibold'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-3 mt-1 border-t border-white/10">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSignUpModalOpen(true);
                }}
                className="w-full bg-white text-gray-900 text-sm font-semibold py-2.5 rounded-full hover:bg-gray-100 transition-colors text-center"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Inline Modal (No routing, no separate page) */}
      <SignUpModal
        isOpen={signUpModalOpen}
        onClose={() => setSignUpModalOpen(false)}
      />
    </>
  );
};
