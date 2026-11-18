import { motion } from 'motion/react';
import { ArrowUpRight, Building2, FileCheck2, Grid3X3, Zap } from 'lucide-react';
import { CORE_EXPERTISE_PANEL, PROJECTS_DATA, SolarProject } from '../data/jjpData';
import ParallaxImage from './ParallaxImage';

interface OverlappingPanelsProps {
  onSelectProject: (project: SolarProject) => void;
  onSelectExpertise: (serviceId: string) => void;
}

const EXPERTISE_ICONS = [Grid3X3, Building2, Zap, FileCheck2];

const EXPERTISE_TO_SERVICE_ID: Record<string, string> = {
  'utility-solar': 'utility-scale',
  'rooftop-systems': 'rooftop-solar',
  'grid-substations': 'engineering-commissioning',
  'approvals-om': 'approvals-compliance',
};

export default function OverlappingPanels({
  onSelectProject,
  onSelectExpertise,
}: OverlappingPanelsProps) {
  const panelProjects = PROJECTS_DATA.filter((p) => p.featuredInHeroPanel).slice(0, 2);

  return (
    <section className="relative z-20 bg-[#071B3D]">
      <div
        aria-hidden="true"
        className="hidden lg:block absolute inset-x-0 bottom-0 h-12 bg-[#F4F6F9] pointer-events-none"
      />

      <div className="w-full max-w-[1800px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="-mt-32 sm:-mt-36 lg:-mt-40 relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-0 items-stretch">
          {/* LEFT PANEL — Who We Are (Distinct Origin Story) */}
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="group relative bg-[#09214A] border-t border-l border-white/10 p-7 lg:p-9 flex flex-col justify-between lg:mb-12 transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(4,16,38,0.45)]"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#2389E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div>
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-serif text-[23px] lg:text-[26px] font-medium text-white tracking-[-0.01em]">
                  About Us
                </h2>
                <span className="text-[12px] font-medium text-[#8BC6FF] tabular-nums">
                  Est. 2012
                </span>
              </div>
              <p className="mt-3.5 text-[14px] leading-[1.68] text-[#C5D0DF]">
                Headquartered in Nandanam, Chennai, Jerry John Powers Pvt. Ltd. engineers
                dependable captive rooftop and utility-scale solar plants across South India.
              </p>
            </div>

            <div className="mt-6 relative bg-[#05142E]">
              <ParallaxImage
                src="/assets/jjp/product_panel.jpg"
                alt="Jerry John Powers engineers inspecting utility-scale ground-mounted solar arrays"
                className="w-full h-56 lg:h-64"
                intensity={8}
                scale={1.16}
              />
            </div>
          </motion.article>

          {/* MIDDLE PANEL — Our Expertise (Stepped Centerpiece) */}
          <motion.article
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 lg:-mt-4 bg-gradient-to-b from-[#13356B] to-[#0D254D] border border-[#3B69B2]/40 p-7 lg:p-10 shadow-[0_28px_64px_rgba(4,16,38,0.52)] flex flex-col"
          >
            <motion.div
              aria-hidden="true"
              animate={{ opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#2389E8]/20 via-[#60B4FF] to-[#2389E8]/20"
            />

            <div className="flex items-center justify-between gap-3">
              <h2 className="font-serif text-[23px] lg:text-[26px] font-medium text-white tracking-[-0.01em]">
                Our Expertise
              </h2>
              <span className="text-[12px] font-medium text-[#8BC6FF] tabular-nums">
                4 Core Pillars
              </span>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 flex-1 border-t border-white/12">
              {CORE_EXPERTISE_PANEL.map((item, idx) => {
                const Icon = EXPERTISE_ICONS[idx % EXPERTISE_ICONS.length];
                const isLeftCol = idx % 2 === 0;
                const isTopRow = idx < 2;
                const targetServiceId = EXPERTISE_TO_SERVICE_ID[item.id] ?? 'rooftop-solar';

                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    whileHover={{ y: -2 }}
                    onClick={() => onSelectExpertise(targetServiceId)}
                    className={`group text-left py-6 px-4 sm:px-5 transition-colors duration-200 hover:bg-[#194385]/55 focus-visible:outline-2 focus-visible:outline-[#2389E8] cursor-pointer ${
                      isLeftCol ? 'sm:border-r sm:border-white/12' : ''
                    } ${
                      isTopRow
                        ? 'border-b border-white/12'
                        : 'border-b sm:border-b-0 border-white/12'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <Icon
                        className="w-7 h-7 text-[#8BC6FF] transition-transform duration-200 group-hover:scale-110 group-hover:text-white"
                        strokeWidth={1.35}
                      />
                      <ArrowUpRight className="w-4 h-4 text-[#8BC6FF] opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <h3 className="mt-4 font-sans text-[15.5px] font-semibold text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-[1.6] text-[#C5D0DF] group-hover:text-white/90 transition-colors">
                      {item.desc}
                    </p>
                  </motion.button>
                );
              })}
            </div>
          </motion.article>

          {/* RIGHT PANEL — Flagship Highlights */}
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="group relative bg-[#09214A] border-t border-r border-white/10 p-7 lg:p-9 flex flex-col justify-between lg:mb-12 transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(4,16,38,0.45)]"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#2389E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div>
              <h2 className="font-serif text-[23px] lg:text-[26px] font-medium text-white tracking-[-0.01em]">
                Recent Projects
              </h2>

              <div className="mt-5 space-y-5">
                {panelProjects.map((project) => (
                  <motion.button
                    key={project.id}
                    type="button"
                    whileHover={{ y: -2 }}
                    onClick={() => onSelectProject(project)}
                    className="group/card block w-full text-left bg-[#05142E] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#2389E8]"
                  >
                    <ParallaxImage
                      src={project.image}
                      alt={`${project.client} — ${project.capacity} ${project.category}`}
                      className="w-full h-36"
                      intensity={7}
                      scale={1.15}
                    />
                    <div className="px-4 py-3 bg-[#05142E] flex items-center justify-between gap-2">
                      <span className="text-[14px] font-medium text-white truncate">
                        {project.client}
                      </span>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[12.5px] font-semibold text-[#8BC6FF] tabular-nums whitespace-nowrap">
                          {project.capacity}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#8BC6FF] transition-transform duration-200 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
