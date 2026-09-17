import React, { useState } from 'react';
import { StaticHero } from '../components/StaticHero';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { Calendar, MapPin, Users, CheckCircle2 } from 'lucide-react';

interface TourDate {
  id: string;
  dates: string;
  location: string;
  country: string;
  title: string;
  description: string;
  spotsLeft: number;
  duration: string;
}

const TOUR_DATES: TourDate[] = [
  {
    id: 'zion-2026',
    dates: 'May 14 – 18, 2026',
    location: 'Zion & Bryce Canyon Amphitheater',
    country: 'Utah, United States',
    title: 'Navajo Sandstone & Claron Formation Hoodoos',
    description:
      'Traverse colossal fossilized dunes, cross-bedding strata, and tectonic joint systems guided by regional sedimentologists.',
    spotsLeft: 12,
    duration: '5 Days',
  },
  {
    id: 'skye-2026',
    dates: 'June 22 – 27, 2026',
    location: 'Isle of Skye & The Quiraing',
    country: 'Scottish Highlands, UK',
    title: 'Palaeogene Basalt Sills & Jurassic Coastlines',
    description:
      'Inspect monumental columnar basalt cliffs, landslip amphitheaters, and Middle Jurassic sauropod track horizons along Staffin Bay.',
    spotsLeft: 6,
    duration: '6 Days',
  },
  {
    id: 'rockies-2026',
    dates: 'August 08 – 14, 2026',
    location: 'Canadian Rockies Thrust Belt',
    country: 'Banff & Yoho, Canada',
    title: 'Burgess Shale Ridge & Orogenic Nappes',
    description:
      'High-alpine ascent to Cambrian mudstones with authorized quarry inspection and structural fold analysis in alpine passes.',
    spotsLeft: 4,
    duration: '7 Days',
  },
  {
    id: 'eifel-2026',
    dates: 'October 04 – 09, 2026',
    location: 'Volcanic Eifel Maar Field',
    country: 'Rhineland-Palatinate, Germany',
    title: 'Pleistocene Volcanism & Mantle Xenoliths',
    description:
      'Sample peridotite mantle nodules, examine explosive maar tuff rings, and measure active sub-surface carbon dioxide mofettes.',
    spotsLeft: 14,
    duration: '6 Days',
  },
  {
    id: 'morocco-2026',
    dates: 'November 15 – 21, 2026',
    location: 'Anti-Atlas Paleozoic Sequence',
    country: 'Alnif & Zagora, Morocco',
    title: 'Ordovician Trilobite Beds & Desert Strata',
    description:
      'Uncover pristine spiny trilobites and giant Fezouata Biota specimens preserved in weathered Saharan marine shale layers.',
    spotsLeft: 5,
    duration: '7 Days',
  },
];

export const LiveTour: React.FC = () => {
  const [reservedIds, setReservedIds] = useState<string[]>([]);

  const handleReserve = (id: string) => {
    if (!reservedIds.includes(id)) {
      setReservedIds((prev) => [...prev, id]);
    }
  };

  return (
    <div className="bg-white">
      {/* Static Hero */}
      <StaticHero
        titleLine1="Live Tour."
        titleLine2="Field Expeditions"
        subtitle="Small-group field immersions led by research geoscientists across world-renowned stratigraphic landmarks."
      />

      {/* Intro Bar */}
      <section className="border-b border-gray-200 bg-stone-50 py-8 px-5 sm:px-10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold block">
              Expedition Protocol
            </span>
            <p className="text-sm font-medium text-gray-900 mt-1">
              Field gear, geological lens sets, and digital GPS field packs provided for all attendees.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm">
            <Users className="w-3.5 h-3.5 text-[#e8702a]" />
            <span>Strict Limit: 16 Researchers per Excursion</span>
          </div>
        </div>
      </section>

      {/* Tour List */}
      <section className="py-20 sm:py-28 px-5 sm:px-10 max-w-5xl mx-auto">
        <div className="flex flex-col divide-y divide-gray-200">
          {TOUR_DATES.map((tour, index) => {
            const isReserved = reservedIds.includes(tour.id);

            return (
              <RevealOnScroll key={tour.id} delay={index * 0.05}>
                <div className="py-10 sm:py-12 group hover:bg-stone-50/70 transition-colors rounded-2xl px-4 sm:px-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    {/* Left: Date & Location Details */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-8 flex-grow">
                      {/* Date Badge */}
                      <div className="w-44 flex-shrink-0">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#e8702a] uppercase tracking-wider mb-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{tour.duration}</span>
                        </div>
                        <div className="text-lg sm:text-xl font-bold text-gray-950">
                          {tour.dates}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {tour.spotsLeft} places remaining
                        </div>
                      </div>

                      {/* Main Copy */}
                      <div className="flex-grow">
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1">
                          <MapPin className="w-3 h-3 text-[#e8702a]" />
                          <span>
                            {tour.location} &bull; {tour.country}
                          </span>
                        </div>
                        <h3 className="text-2xl font-playfair italic text-gray-950 group-hover:text-[#e8702a] transition-colors mb-2">
                          {tour.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed max-w-xl">
                          {tour.description}
                        </p>
                      </div>
                    </div>

                    {/* Right: Reserve Action */}
                    <div className="lg:w-40 flex-shrink-0 flex items-center justify-end">
                      {isReserved ? (
                        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-4 py-2.5 rounded-full">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Reserved</span>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleReserve(tour.id)}
                          className="w-full sm:w-auto bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs font-semibold px-6 py-3 rounded-full transition-all hover:scale-105 active:scale-95 shadow-md shadow-[#e8702a]/20"
                        >
                          Reserve Place
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </section>

      {/* Closing CTA Band */}
      <section className="bg-stone-900 text-white py-20 px-5 sm:px-10 text-center border-t border-white/10">
        <RevealOnScroll className="max-w-3xl mx-auto flex flex-col items-center">
          <MapPin className="w-10 h-10 text-[#e8702a] mb-6" />
          <h2 className="text-3xl sm:text-5xl font-playfair italic text-white mb-4">
            Custom expeditions for teams
          </h2>
          <p className="text-white/70 text-sm sm:text-base max-w-lg mb-8 leading-relaxed">
            Planning a university field trip, corporate retreat, or documentary research expedition?
            Our cartographers build custom geological itineraries.
          </p>
          <button
            type="button"
            className="bg-white text-gray-900 text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            Inquire About Private Tours
          </button>
        </RevealOnScroll>
      </section>
    </div>
  );
};
