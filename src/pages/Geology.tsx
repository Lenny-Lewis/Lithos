import React from 'react';
import { StaticHero } from '../components/StaticHero';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { Layers, Sparkles, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ConceptSection {
  tag: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  image: string;
  quote: string;
  icon: React.ComponentType<{ className?: string }>;
  stat: { label: string; value: string };
}

const CONCEPTS: ConceptSection[] = [
  {
    tag: 'Sedimentary Architecture',
    title: 'Rock Layers: The Chronology of Deposition',
    subtitle: 'From ancient seabeds to drifting volcanic ash',
    paragraphs: [
      'Every layer of sediment records an indelible chapter of planetary history. Sand accumulates along storm-swept beaches; silts settle into quiet marine basins; microscopic calcite shells precipitate from warm prehistoric waters to compress into thick limestone shelves.',
      'As tectonic forces subside and resurgence cycles occur, newer deposits interlock above the older horizons. Reading these layered strata is not merely observing stone — it is reading an unbroken ledger of shifting climates, drying lakes, and violent pyroclastic surges.',
    ],
    image:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    quote:
      'The dust beneath our feet is yesterday’s mountains, ground to flour and pressed into bedrock.',
    icon: Layers,
    stat: { label: 'Oldest Intact Sediments', value: '3.8 Billion Years' },
  },
  {
    tag: 'Paleontological Signatures',
    title: 'Fossils: Chronometers of Extinct Worlds',
    subtitle: 'Biological markers trapped between lithic pages',
    paragraphs: [
      'When an organism is swiftly buried by anoxic muds, water percolating through the sediments deposits silica, pyrite, and calcite into the delicate voids of bone and shell. What emerges millions of years later is a literal stone cast of a moment in time.',
      'Index fossils — creatures that flourished widely for brief geological intervals, such as coiled ammonites or trilobite species — enable field geologists to synchronize disjointed rock faces separated by oceans with surgical temporal resolution.',
    ],
    image: '/assets/fossils.jpg',
    quote:
      'A fossil is an ambassador from an era when continents were rearranged and the skies were strange.',
    icon: Sparkles,
    stat: { label: 'Known Fossilized Species', value: '300,000+' },
  },
  {
    tag: 'Geochronology & Scale',
    title: 'Deep Time: The Unfathomable Horizon',
    subtitle: 'Where human history occupies the thinnest glaze',
    paragraphs: [
      'Conceiving geological time requires letting go of centuries and thinking in increments of ten million years. In deep time, granite behaves like thick honey under continental collisions; solid plate margins tear open to form oceans and crash back together in endless supercontinental cycles.',
      'Radiometric dating of zircon crystals unlocks the clockwork of radioactive decay — measuring uranium transforming into lead atom by atom, illuminating the 4.54-billion-year odyssey of planet Earth.',
    ],
    image:
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    quote:
      'We find no vestige of a beginning, no prospect of an end. Only the patient persistence of change.',
    icon: Clock,
    stat: { label: 'Age of the Crust', value: '4.54 Ga' },
  },
];

export const Geology: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Static Hero */}
      <StaticHero
        titleLine1="Geology."
        titleLine2="The Written Earth"
        subtitle="Exploring the architectural anatomy of the crust — rock layers, fossils, and the vast span of deep time."
      />

      {/* Editorial Alternating Image/Text Sections */}
      <section className="py-24 sm:py-32 px-5 sm:px-10 max-w-7xl mx-auto flex flex-col gap-28 sm:gap-36">
        {CONCEPTS.map((concept, index) => {
          const isReversed = index % 2 === 1;
          const Icon = concept.icon;

          return (
            <RevealOnScroll key={concept.title}>
              <div
                className={`flex flex-col ${
                  isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } items-center gap-12 lg:gap-20`}
              >
                {/* Image & Callout Box */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-stone-100 border border-gray-200">
                    <img
                      src={concept.image}
                      alt={concept.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Floating Stat Badge */}
                  <div className="absolute -bottom-6 -right-6 sm:bottom-6 sm:right-6 bg-stone-900/90 backdrop-blur-md text-white p-5 rounded-2xl border border-white/20 shadow-xl max-w-xs">
                    <div className="text-2xl sm:text-3xl font-playfair italic text-[#e8702a]">
                      {concept.stat.value}
                    </div>
                    <div className="text-xs text-white/70 uppercase tracking-wider font-medium mt-0.5">
                      {concept.stat.label}
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e8702a] mb-3">
                    <Icon className="w-4 h-4" />
                    <span>{concept.tag}</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair italic text-gray-950 leading-tight mb-2">
                    {concept.title}
                  </h2>

                  <p className="text-sm font-medium text-gray-500 mb-6 italic">
                    {concept.subtitle}
                  </p>

                  <div className="flex flex-col gap-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                    {concept.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  {/* Blockquote callout */}
                  <blockquote className="mt-8 pl-5 border-l-2 border-[#e8702a] text-sm italic text-gray-800 font-playfair leading-relaxed">
                    &ldquo;{concept.quote}&rdquo;
                  </blockquote>
                </div>
              </div>
            </RevealOnScroll>
          );
        })}
      </section>

      {/* Closing CTA Band */}
      <section className="bg-stone-950 text-white py-20 sm:py-24 px-5 sm:px-10 text-center border-t border-white/10">
        <RevealOnScroll className="max-w-3xl mx-auto flex flex-col items-center">
          <Layers className="w-10 h-10 text-[#e8702a] mb-6" />
          <h2 className="text-3xl sm:text-5xl font-playfair italic text-white mb-4">
            Peel back the crust with Lithos
          </h2>
          <p className="text-white/70 text-sm sm:text-base max-w-lg mb-8 leading-relaxed">
            Trace how stones, fossils, and deep time combine to shape the ground beneath your feet.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/course"
              className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm font-semibold px-8 py-3.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#e8702a]/20 flex items-center gap-2"
            >
              Take the Course <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/field-guides"
              className="bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-8 py-3.5 rounded-full transition-all border border-white/20"
            >
              Browse Field Guides
            </Link>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
};
