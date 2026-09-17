import React, { useState } from 'react';
import { StaticHero } from '../components/StaticHero';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { Check, Sparkles, HelpCircle } from 'lucide-react';

interface PlanTier {
  name: string;
  tagline: string;
  monthlyPrice: number;
  yearlyPrice: number;
  highlighted?: boolean;
  badge?: string;
  features: string[];
}

const TIERS: PlanTier[] = [
  {
    name: 'Explorer',
    tagline: 'Ideal for students, amateur naturalists, and curious outdoor hikers.',
    monthlyPrice: 19,
    yearlyPrice: 15,
    features: [
      'Access to 60+ global field guide surveys',
      'Offline mobile vector maps with contour layers',
      'Weekly deep-time essays & researcher field notes',
      'Specimen photo identification database',
      'Community discussion forums & field notes sharing',
    ],
  },
  {
    name: 'Geologist',
    tagline: 'Comprehensive suite for practicing earth scientists and avid explorers.',
    monthlyPrice: 49,
    yearlyPrice: 39,
    highlighted: true,
    badge: 'Most Popular',
    features: [
      'Unlimited access to all 120+ master field guides',
      'LiDAR digital elevation models & 3D stratum slices',
      'Complete 10-week "The Course" video lectures & syllabus',
      'Downloadable GIS shapefiles, GeoJSON & high-res SVGs',
      'Priority booking & 20% discount on all Live Tour expeditions',
    ],
  },
  {
    name: 'Institutional',
    tagline: 'Department-wide license for universities, survey teams, and research labs.',
    monthlyPrice: 149,
    yearlyPrice: 119,
    features: [
      'Multi-seat department licensing (up to 25 seats)',
      'Raw radiometric & geochemical dataset export engine',
      'Customized regional field guide compilations',
      'Direct consults with Lithos cartographers & curators',
      'Full API access to global stratigraphy coordinate index',
    ],
  },
];

export const Plans: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="bg-white">
      {/* Static Hero */}
      <StaticHero
        titleLine1="Plans."
        titleLine2="Membership & Access"
        subtitle="Transparent memberships crafted for independent observers, seasoned field researchers, and academic institutions."
      />

      {/* Pricing Section */}
      <section className="py-20 sm:py-28 px-5 sm:px-10 max-w-7xl mx-auto">
        {/* Billing Interval Toggle */}
        <RevealOnScroll>
          <div className="flex flex-col items-center mb-16">
            <div className="inline-flex items-center bg-stone-100 p-1.5 rounded-full border border-gray-200">
              <button
                type="button"
                onClick={() => setIsAnnual(false)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  !isAnnual
                    ? 'bg-white text-gray-950 shadow-sm'
                    : 'text-gray-600 hover:text-gray-950'
                }`}
              >
                Monthly Billing
              </button>
              <button
                type="button"
                onClick={() => setIsAnnual(true)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  isAnnual
                    ? 'bg-white text-gray-950 shadow-sm'
                    : 'text-gray-600 hover:text-gray-950'
                }`}
              >
                Annual Billing
                <span className="bg-[#e8702a]/15 text-[#e8702a] text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </RevealOnScroll>

        {/* Pricing Cards Grid */}
        <RevealOnScroll stagger className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {TIERS.map((tier) => {
            const price = isAnnual ? tier.yearlyPrice : tier.monthlyPrice;

            return (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 relative ${
                  tier.highlighted
                    ? 'border-2 border-[#e8702a] shadow-2xl shadow-[#e8702a]/10 bg-white md:-translate-y-2'
                    : 'border border-gray-200 bg-stone-50/70 hover:border-gray-300 hover:shadow-lg'
                }`}
              >
                {/* Highlight Badge */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#e8702a] text-white text-[11px] font-semibold uppercase tracking-wider px-4 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {tier.badge}
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="mb-6">
                    <h3 className="text-2xl sm:text-3xl font-playfair italic text-gray-950">
                      {tier.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {tier.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 mb-8 pb-6 border-b border-gray-200">
                    <span className="text-4xl sm:text-5xl font-extrabold text-gray-950 tracking-tight">
                      ${price}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      / month {isAnnual ? '(billed annually)' : ''}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block">
                      Included in {tier.name}
                    </span>
                    {tier.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${
                            tier.highlighted
                              ? 'bg-[#e8702a] text-white'
                              : 'bg-stone-200 text-gray-800'
                          }`}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Start Digging Styled Button */}
                <button
                  type="button"
                  className={`w-full text-sm font-medium py-3.5 rounded-full transition-all hover:scale-[1.02] active:scale-95 text-center ${
                    tier.highlighted
                      ? 'bg-[#e8702a] hover:bg-[#d2611f] text-white hover:shadow-lg hover:shadow-[#e8702a]/30'
                      : 'bg-stone-900 hover:bg-stone-800 text-white'
                  }`}
                >
                  Start Digging
                </button>
              </div>
            );
          })}
        </RevealOnScroll>

        {/* FAQ Teaser */}
        <RevealOnScroll className="mt-20 pt-16 border-t border-gray-200 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-4 text-[#e8702a]">
            <HelpCircle className="w-5 h-5" />
            <span className="text-xs uppercase tracking-widest font-semibold text-gray-500">
              Questions & Answers
            </span>
          </div>
          <h4 className="text-center text-2xl font-playfair italic text-gray-950 mb-4">
            Can our research team switch plans later?
          </h4>
          <p className="text-center text-sm text-gray-600 leading-relaxed max-w-xl mx-auto">
            Yes, upgrade or modify your membership tier anytime. Prorated credits apply instantly
            towards institutional seats or physical field expedition pack shipments.
          </p>
        </RevealOnScroll>
      </section>
    </div>
  );
};
