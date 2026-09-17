import React from 'react';
import { StaticHero } from '../components/StaticHero';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { Compass, MapPin, Download, ArrowUpRight } from 'lucide-react';

interface FieldGuide {
  title: string;
  region: string;
  era: string;
  description: string;
  image: string;
  elevation: string;
}

const FIELD_GUIDES: FieldGuide[] = [
  {
    title: 'Grand Canyon Supergroup',
    region: 'Colorado Plateau, USA',
    era: 'Precambrian to Permian (2.0 Ga)',
    description:
      'The definitive planetary stratigraphic cross-section. Key waypoints include the Great Unconformity, Bright Angel Shale, and Kaibab Limestone.',
    image:
      'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=800&q=80',
    elevation: '2,100 m',
  },
  {
    title: 'Jurassic Coast Cliffs',
    region: 'Dorset & East Devon, UK',
    era: 'Triassic to Cretaceous (185 Ma)',
    description:
      'A continuous 95-mile chronological transect exposing intact ammonite pavements, fossilized forests, and marine reptile horizons.',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    elevation: '160 m',
  },
  {
    title: 'Dolomite Reef Platforms',
    region: 'Northern Italian Alps',
    era: 'Triassic Orogeny (230 Ma)',
    description:
      'Uplifted paleotropical coral and sponge reefs displaying severe diagenetic dolomitization, vertical karst fissures, and Alpine thrust sheets.',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    elevation: '3,343 m',
  },
  {
    title: 'Atacama Evaporite Crusts',
    region: 'Altiplano, Chile',
    era: 'Neogene to Quaternary',
    description:
      'Extreme hyper-arid mineral crusts, lithium-rich salars, and ignimbrite plateaus preserving volcanic fallouts under zero chemical weathering.',
    image:
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    elevation: '2,400 m',
  },
  {
    title: 'Burgess Shale Ridge',
    region: 'Yoho National Park, Canada',
    era: 'Middle Cambrian (508 Ma)',
    description:
      'World-famous Burgess Shale fossil quarry featuring exceptional soft-tissue preservation of early multicellular life on deep mudstone beds.',
    image:
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=80',
    elevation: '2,280 m',
  },
  {
    title: 'Mid-Atlantic Spreading Ridge',
    region: 'Thingvellir, Iceland',
    era: 'Holocene Volcanic Rift',
    description:
      'Walk between the diverging North American and Eurasian tectonic plates. Features glassy basalt pillow formations and fresh fault grabens.',
    image:
      'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&q=80',
    elevation: '100 m',
  },
];

export const FieldGuides: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Static Hero */}
      <StaticHero
        titleLine1="Field Guides."
        titleLine2="Strata & Waypoints"
        subtitle="Expert topographical and stratigraphic compendiums curated for on-site geological reconnaissance."
      />

      {/* Filter / Category Header Bar */}
      <section className="border-b border-gray-200 bg-stone-50 py-6 px-5 sm:px-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#e8702a]" />
            <span>Curated Expedition Guides ({FIELD_GUIDES.length} Global Surveys)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">Format:</span>
            <span className="text-xs font-medium text-gray-900 bg-white border border-gray-200 px-3 py-1 rounded-full shadow-sm">
              Offline GPS + Vector Strat Maps
            </span>
          </div>
        </div>
      </section>

      {/* Grid of Guide Cards */}
      <section className="py-20 sm:py-28 px-5 sm:px-10 max-w-7xl mx-auto">
        <RevealOnScroll stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FIELD_GUIDES.map((guide) => (
            <div
              key={guide.title}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200/90 hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="aspect-[16/10] w-full overflow-hidden relative bg-stone-100">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#e8702a]" />
                    {guide.region}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-gray-900 text-[10px] font-mono font-medium px-2 py-0.5 rounded shadow-sm">
                    {guide.elevation}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="text-[11px] font-semibold text-[#e8702a] tracking-wider uppercase mb-1">
                    {guide.era}
                  </div>
                  <h3 className="text-2xl font-playfair italic text-gray-950 group-hover:text-[#e8702a] transition-colors mb-2.5">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {guide.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-800">
                <span className="text-gray-400 font-normal">Lithos Field Pack v2.4</span>
                <span className="flex items-center gap-1 group-hover:text-[#e8702a] transition-colors">
                  View Guide <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </RevealOnScroll>
      </section>

      {/* Closing CTA Band */}
      <section className="bg-stone-900 text-white py-20 sm:py-24 px-5 sm:px-10 text-center border-t border-white/10">
        <RevealOnScroll className="max-w-3xl mx-auto flex flex-col items-center">
          <Download className="w-10 h-10 text-[#e8702a] mb-6" />
          <h2 className="text-3xl sm:text-5xl font-playfair italic text-white mb-4">
            Carry the strata in your pocket
          </h2>
          <p className="text-white/70 text-sm sm:text-base max-w-lg mb-8 leading-relaxed">
            Download our complete collection of 120+ field guides with vector maps,
            strike-and-dip markers, and offline GPS tracking.
          </p>
          <button
            type="button"
            className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm font-semibold px-8 py-3.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#e8702a]/20"
          >
            Download Field Pack (.zip)
          </button>
        </RevealOnScroll>
      </section>
    </div>
  );
};
