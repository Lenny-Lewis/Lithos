import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SpotlightHero } from '../components/SpotlightHero';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { SignUpModal } from '../components/SignUpModal';

interface FeatureCard {
  title: string;
  description: string;
  image: string;
  link: string;
  tag: string;
}

const FEATURE_CARDS: FeatureCard[] = [
  {
    title: 'Field Guides',
    description:
      'Curated geological surveys spanning coastal cliffs, glacial valleys, and tectonic rifts across six continents.',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    link: '/field-guides',
    tag: 'Stratigraphy & Wayfinding',
  },
  {
    title: 'Geology',
    description:
      'Explore the architectural anatomy of the crust — sediment dynamics, mineralization cycles, and paleoclimatic signatures.',
    image:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    link: '/geology',
    tag: 'Core Earth Science',
  },
  {
    title: 'Plans',
    description:
      'Direct access to high-resolution stratum mapping, laboratory sample catalogs, and guided field expeditions.',
    image: '/assets/plans.jpg',
    link: '/plans',
    tag: 'Membership & Access',
  },
];

export const Home: React.FC = () => {
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Signature Cursor-Following Spotlight Hero (Home Only) */}
      <SpotlightHero />

      {/* Section 1: "What you'll uncover" */}
      <section id="explore" className="py-24 sm:py-32 px-5 sm:px-10 max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold block mb-3">
                Overview & Exploration
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair italic text-gray-950 leading-tight">
                What you'll uncover
              </h2>
            </div>
            <p className="text-sm sm:text-base text-gray-600 max-w-md leading-relaxed">
              Every formation carries an unwritten chronology. Explore our specialized
              collections designed for field researchers and curious observers alike.
            </p>
          </div>
        </RevealOnScroll>

        {/* 3 Feature Cards */}
        <RevealOnScroll stagger className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {FEATURE_CARDS.map((card) => (
            <Link
              key={card.title}
              to={card.link}
              className="group flex flex-col bg-stone-50 rounded-2xl overflow-hidden border border-gray-200/80 hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative bg-stone-200">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full uppercase tracking-wider">
                  {card.tag}
                </div>
              </div>

              <div className="p-7 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl sm:text-3xl font-playfair italic text-gray-900 group-hover:text-[#e8702a] transition-colors">
                      {card.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-stone-200/80 flex items-center justify-center text-gray-700 group-hover:bg-[#e8702a] group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center text-xs font-semibold text-gray-900 group-hover:text-[#e8702a] transition-colors">
                  Explore {card.title} &rarr;
                </div>
              </div>
            </Link>
          ))}
        </RevealOnScroll>
      </section>

      {/* Section 2: "Start Digging" CTA Band */}
      <section className="bg-[#e8702a] text-white py-20 sm:py-28 px-5 sm:px-10 relative overflow-hidden">
        {/* Subtle background topographical contour pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <RevealOnScroll>
            <span className="text-xs uppercase tracking-widest text-white/80 font-semibold block mb-4">
              Begin Your Journey
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-playfair italic leading-[1.05] mb-6 text-white">
              Ready to dig into deep time?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-xl mx-auto leading-relaxed mb-10">
              Join thousands of geologists, students, and naturalists tracking the
              unseen layers that define our continent.
            </p>
            <button
              type="button"
              onClick={() => setSignUpModalOpen(true)}
              className="bg-white text-gray-900 text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-black/10"
            >
              Sign Up
            </button>
          </RevealOnScroll>
        </div>
      </section>

      {/* Inline Modal */}
      <SignUpModal
        isOpen={signUpModalOpen}
        onClose={() => setSignUpModalOpen(false)}
      />
    </div>
  );
};
