import React from 'react';
import { StaticHero } from '../components/StaticHero';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { BookOpen, CheckCircle, Clock } from 'lucide-react';

interface Module {
  number: string;
  title: string;
  duration: string;
  description: string;
  topics: string[];
}

const MODULES: Module[] = [
  {
    number: '01',
    title: 'Principles of Stratigraphy & Superposition',
    duration: 'Week 1–2',
    description:
      'Master how sediment accumulation orders the planetary timeline and decode complex regional unconformities.',
    topics: ['Law of Superposition', "Walther's Facies Law", 'Hiatuses & Disconformities'],
  },
  {
    number: '02',
    title: 'Lithological Classification & Petrography',
    duration: 'Week 3–4',
    description:
      'Distinguish sedimentary, igneous, and metamorphic fabrics through hand specimens and optical mineralogy.',
    topics: ['Grain Sorting & Matrix', 'Foliation Mechanics', 'Diagenesis & Cementation'],
  },
  {
    number: '03',
    title: 'Biostratigraphy & Index Fossils',
    duration: 'Week 5–6',
    description:
      'Utilize evolutionary marker horizons to calibrate high-precision relative dating across disjointed strata.',
    topics: ['Biozones & Range Charts', 'Ammonites & Foraminifera', 'Extinction Boundaries'],
  },
  {
    number: '04',
    title: 'Structural Tectonics & Continental Folding',
    duration: 'Week 7–8',
    description:
      'Examine fault lines, nappes, synclines, and the tectonic forces that thrust ancient sea floors into alpine crests.',
    topics: ['Strike & Dip Measuring', 'Brittle vs Ductile Faults', 'Orogenic Cycles'],
  },
  {
    number: '05',
    title: 'Digital Cartography, LiDAR & Field GIS',
    duration: 'Week 9–10',
    description:
      'Combine hands-on geological compass notation with airborne LiDAR scans and satellite multispectral imaging.',
    topics: ['Digital Elevation Models', '3D Subsurface Models', 'Field Notebook Standardization'],
  },
];

export const Course: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Static Hero */}
      <StaticHero
        titleLine1="The Course."
        titleLine2="Reading the Earth"
        subtitle="A comprehensive 10-week master curriculum in field stratigraphy, lithology, and deep-time reconstruction."
      />

      {/* Course Overview Stats */}
      <section className="border-b border-gray-200 bg-stone-50 py-10 px-5 sm:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <RevealOnScroll>
            <span className="block text-3xl sm:text-4xl font-playfair italic text-gray-950 font-bold">
              10
            </span>
            <span className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mt-1 block">
              Weeks of Study
            </span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <span className="block text-3xl sm:text-4xl font-playfair italic text-gray-950 font-bold">
              5
            </span>
            <span className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mt-1 block">
              Core Modules
            </span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <span className="block text-3xl sm:text-4xl font-playfair italic text-gray-950 font-bold">
              24
            </span>
            <span className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mt-1 block">
              Field Case Studies
            </span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.3}>
            <span className="block text-3xl sm:text-4xl font-playfair italic text-gray-950 font-bold">
              1:1
            </span>
            <span className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mt-1 block">
              Mentor Reviews
            </span>
          </RevealOnScroll>
        </div>
      </section>

      {/* Syllabus / Module List */}
      <section className="py-24 sm:py-32 px-5 sm:px-10 max-w-5xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold block mb-3">
              Curriculum Roadmap
            </span>
            <h2 className="text-4xl sm:text-5xl font-playfair italic text-gray-950">
              Syllabus & Modules
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
              Designed from foundational stratigraphic rules to modern digital mapping technologies.
            </p>
          </div>
        </RevealOnScroll>

        {/* Modules List */}
        <div className="flex flex-col divide-y divide-gray-200">
          {MODULES.map((mod, index) => (
            <RevealOnScroll key={mod.number} delay={index * 0.05}>
              <div className="py-8 sm:py-12 group hover:bg-stone-50/60 transition-colors rounded-xl px-4 sm:px-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  {/* Left: Number + Title */}
                  <div className="flex items-start gap-5 sm:gap-8">
                    <span className="text-2xl sm:text-3xl font-mono font-medium text-[#e8702a] tracking-tight">
                      {mod.number}
                    </span>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-xs text-gray-500 font-medium bg-stone-100 px-2.5 py-1 rounded-full">
                          <Clock className="w-3 h-3 text-gray-400" />
                          {mod.duration}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-playfair italic text-gray-900 group-hover:text-[#e8702a] transition-colors leading-snug">
                        {mod.title}
                      </h3>
                      <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl">
                        {mod.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: Key Topics */}
                  <div className="md:w-64 flex-shrink-0 flex flex-col gap-2 pt-1 md:border-l md:border-gray-200 md:pl-6">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                      Key Competencies
                    </span>
                    {mod.topics.map((topic) => (
                      <div
                        key={topic}
                        className="flex items-center gap-2 text-xs text-gray-700"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-[#e8702a] flex-shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Closing CTA Band */}
      <section className="bg-stone-950 text-white py-20 sm:py-24 px-5 sm:px-10 text-center border-t border-white/10">
        <RevealOnScroll className="max-w-3xl mx-auto flex flex-col items-center">
          <BookOpen className="w-10 h-10 text-[#e8702a] mb-6" />
          <h2 className="text-3xl sm:text-5xl font-playfair italic text-white mb-4">
            Enroll in the upcoming cohort
          </h2>
          <p className="text-white/70 text-sm sm:text-base max-w-lg mb-8 leading-relaxed">
            Cohorts are limited to 40 participants to ensure direct field assignment critique
            and personalized guidance.
          </p>
          <button
            type="button"
            className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm font-semibold px-8 py-3.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#e8702a]/20"
          >
            Apply for Admission
          </button>
        </RevealOnScroll>
      </section>
    </div>
  );
};
