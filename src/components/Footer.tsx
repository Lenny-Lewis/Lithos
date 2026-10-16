import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RevealOnScroll } from './RevealOnScroll';
import { SignUpModal } from './SignUpModal';

export const Footer: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <footer className="bg-black text-white px-5 sm:px-10 py-14 sm:py-20 border-t border-white/10">
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
          {/* Top Row: Left brand & Right navigation links */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-12">
            {/* Left: Logo, Wordmark, and Tagline */}
            <div className="flex flex-col items-start gap-3 max-w-sm">
              <Link to="/" className="flex items-center gap-3 group">
                <svg
                  className="w-[26px] h-[26px] transition-transform group-hover:scale-105"
                  viewBox="0 0 256 256"
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
                </svg>
                <span className="text-white text-2xl font-playfair italic">
                  Lithos
                </span>
              </Link>
              <p className="text-white/60 text-sm leading-relaxed mt-2">
                Tracing how stones, fossils, and deep time combine to shape the
                ground beneath our feet.
              </p>
            </div>

            {/* Right: Nav link columns + Sign Up */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 text-sm">
              <div className="flex flex-col gap-3">
                <span className="text-white/40 uppercase tracking-wider text-xs font-semibold">
                  Exploration
                </span>
                <Link
                  to="/course"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Course
                </Link>
                <Link
                  to="/field-guides"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Field Guides
                </Link>
                <Link
                  to="/geology"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Geology
                </Link>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-white/40 uppercase tracking-wider text-xs font-semibold">
                  Access
                </span>
                <Link
                  to="/plans"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Plans
                </Link>
                <Link
                  to="/live-tour"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Live Tour
                </Link>
              </div>

              <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
                <span className="text-white/40 uppercase tracking-wider text-xs font-semibold">
                  Join Lithos
                </span>
                <p className="text-white/60 text-xs leading-normal">
                  Unlock interactive geological maps and field expeditions.
                </p>
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="bg-white text-gray-900 text-xs font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition-colors w-fit mt-1"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Row: Copyright & Lead Dev Attribution */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-xs">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-center sm:text-left">
              <span>
                &copy; {new Date().getFullYear()} Lithos Inc. All rights reserved.
              </span>
              <span className="hidden sm:inline text-white/20">•</span>
              <div className="inline-flex flex-col items-center gap-1 whitespace-nowrap">
                <span>
                  Made by{' '}
                  <a
                    href="https://lennoxlewis.co.ke"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Lennox Lewis, developer"
                    className="font-medium text-white transition-colors hover:text-[#e8702a]"
                  >
                    Lennox Lewis
                  </a>
                </span>
                <a
                  href="https://lennoxlewis.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Lennox Lewis signature"
                  className="inline-flex items-center justify-center transition-opacity hover:opacity-75"
                >
                  <img
                    src="/assets/Signatures/signature_L_white.png"
                    alt=""
                    aria-hidden="true"
                    className="h-8 w-auto drop-shadow-[0_0_8px_rgba(232,112,42,0.55)]"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white/30">
              <span>Deep time in every stratum</span>
              <span>•</span>
              <span>Earth Science Publishing</span>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      <SignUpModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </footer>
  );
};
