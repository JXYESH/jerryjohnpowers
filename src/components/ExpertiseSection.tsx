import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Building2,
  Check,
  FileCheck2,
  Grid3X3,
  ShieldCheck,
  Sun,
  Zap,
} from 'lucide-react';
import { SERVICES_LIST } from '../data/jjpData';
import ParallaxImage from './ParallaxImage';

type CategoryFilter = 'All' | 'Solar Generation' | 'Engineering & Regulatory';

interface ExpertiseSectionProps {
  externalSelectedId?: string | null;
  onRequestProposal: (serviceCategory: string) => void;
}

const SERVICE_ICONS: Record<string, typeof Sun> = {
  'rooftop-solar': Building2,
  'ground-mounted': Grid3X3,
  'utility-scale': Sun,
  'engineering-commissioning': Zap,
  'approvals-compliance': FileCheck2,
  'operations-maintenance': ShieldCheck,
};

export default function ExpertiseSection({
  externalSelectedId,
  onRequestProposal,
}: ExpertiseSectionProps) {
  const [filter, setFilter] = useState<CategoryFilter>('All');
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_LIST[0].id);

  useEffect(() => {
    if (externalSelectedId) {
      setFilter('All');
      setSelectedServiceId(externalSelectedId);
    }
  }, [externalSelectedId]);

  const visibleServices =
    filter === 'All'
      ? SERVICES_LIST
      : SERVICES_LIST.filter((s) => s.category === filter);

  const activeService =
    SERVICES_LIST.find((s) => s.id === selectedServiceId) ?? visibleServices[0] ?? SERVICES_LIST[0];

  const handleFilterChange = (next: CategoryFilter) => {
    setFilter(next);
    const nextList =
      next === 'All' ? SERVICES_LIST : SERVICES_LIST.filter((s) => s.category === next);
    if (nextList.length > 0 && !nextList.some((s) => s.id === selectedServiceId)) {
      setSelectedServiceId(nextList[0].id);
    }
  };

  return (
    <section
      className="bg-[#071B3D] text-white py-20 lg:py-28"
    >
      <div className="w-full max-w-[1800px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Clean Editorial Header + Open Segmented Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-white/12">
          <div className="max-w-[680px]">
            <h2 className="font-serif text-[32px] lg:text-[42px] font-medium text-white leading-[1.16] tracking-[-0.01em]">
              Engineering &amp; Solar Capabilities
            </h2>
            <p className="mt-3 text-[15.5px] text-[#C5D0DF] leading-[1.7]">
              From land identification and TANGEDCO technical feasibility to 110 kV substation
              evacuation and 25-year linear output maintenance.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter capabilities"
            className="inline-flex flex-wrap items-center gap-6 self-start lg:self-end"
          >
            {(['All', 'Solar Generation', 'Engineering & Regulatory'] as CategoryFilter[]).map(
              (tab) => {
                const active = filter === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => handleFilterChange(tab)}
                    className={`pb-2 text-[13.5px] font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer border-b-2 ${
                      active
                        ? 'text-white border-[#2389E8]'
                        : 'text-[#94A3B8] border-transparent hover:text-white'
                    }`}
                  >
                    {tab === 'All' ? 'All Capabilities' : tab}
                  </button>
                );
              }
            )}
          </div>
        </div>

        {/* Open Architectural Split: Flowing Hairline Service List (Left) + Parallax Feature (Right) */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left 7 Cols: Open Flowing Architectural Rows (Zero Grid Boxes) */}
          <div className="lg:col-span-7 divide-y divide-white/12">
            {visibleServices.map((service) => {
              const isSelected = activeService.id === service.id;
              const Icon = SERVICE_ICONS[service.id] ?? Sun;

              return (
                <motion.button
                  key={service.id}
                  type="button"
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setSelectedServiceId(service.id)}
                  className="group w-full text-left py-6 pr-4 transition-colors flex items-start justify-between gap-6 cursor-pointer"
                >
                  <div className="flex items-start gap-5">
                    <div
                      className={`mt-1 transition-colors ${
                        isSelected ? 'text-[#2389E8]' : 'text-[#8BC6FF] group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-6 h-6" strokeWidth={1.35} />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-3">
                        <span className="text-[12.5px] font-medium text-[#8BC6FF] tabular-nums">
                          {service.number}
                        </span>
                        <h3
                          className={`font-serif text-[22px] lg:text-[24px] font-medium leading-snug transition-colors ${
                            isSelected
                              ? 'text-[#60B4FF]'
                              : 'text-white group-hover:text-[#8BC6FF]'
                          }`}
                        >
                          {service.title}
                        </h3>
                      </div>

                      <p className="mt-2 text-[14px] text-[#C5D0DF] leading-[1.68] max-w-[580px]">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    className={`w-5 h-5 mt-2 shrink-0 transition-all duration-200 ${
                      isSelected
                        ? 'text-[#2389E8] translate-x-0.5 -translate-y-0.5'
                        : 'text-[#8BC6FF]/50 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                    }`}
                  />
                </motion.button>
              );
            })}
          </div>

          {/* Right 5 Cols: Open Parallax Visual + Technical Brief */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0.75, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
            <div className="relative overflow-hidden shadow-[0_24px_60px_rgba(4,16,38,0.45)]">
              <ParallaxImage
                src={activeService.image ?? '/assets/jjp/geo_solar.jpg'}
                alt={activeService.title}
                className="w-full h-64 lg:h-72"
                intensity={10}
                scale={1.18}
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#071B3D] to-transparent pointer-events-none" />
            </div>

            <div className="pt-6">
              <div className="text-[13px] font-medium text-[#8BC6FF]">
                {activeService.number} · {activeService.category}
              </div>

              <h3 className="mt-2 font-serif text-[26px] lg:text-[30px] font-medium text-white leading-snug">
                {activeService.title}
              </h3>

              <p className="mt-3 text-[14.5px] text-[#C5D0DF] leading-[1.72]">
                {activeService.summary}
              </p>

              <ul className="mt-6 space-y-3 pt-5 border-t border-white/12">
                {activeService.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-[14px] text-[#E2E8F0]"
                  >
                    <Check className="w-4 h-4 text-[#2389E8] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <button
                  type="button"
                  onClick={() => {
                    const mapped =
                      activeService.id === 'rooftop-solar'
                        ? 'Commercial Roof Top'
                        : activeService.id === 'utility-scale' ||
                          activeService.id === 'engineering-commissioning'
                        ? 'Utility-Scale & Substations'
                        : activeService.id === 'approvals-compliance' ||
                          activeService.id === 'operations-maintenance'
                        ? 'TANGEDCO Approvals & O&M'
                        : 'Ground Mounted Solar';
                    onRequestProposal(mapped);
                  }}
                  className="inline-flex items-center justify-center bg-[#2389E8] hover:bg-[#1B76CC] text-white text-[14px] font-medium px-6 py-3 rounded-[3px] transition-colors cursor-pointer"
                >
                  Request Technical Proposal
                </button>
              </div>
            </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
