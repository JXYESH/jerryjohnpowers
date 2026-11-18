import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import {
  COMPLETE_PROJECT_LEDGER,
  PROJECTS_DATA,
  SolarProject,
} from '../data/jjpData';
import ParallaxImage from './ParallaxImage';

interface ProjectsSectionProps {
  onSelectProject: (project: SolarProject) => void;
}

type ProjectFilter = 'All' | 'Ground Mounted' | 'Roof Top';

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<ProjectFilter>('All');
  const [showLedger, setShowLedger] = useState(false);

  const showcasePool = PROJECTS_DATA.filter((p) => !p.featuredInHeroPanel);
  const filteredProjects =
    filter === 'All'
      ? showcasePool
      : showcasePool.filter((p) => p.category === filter);

  const leadProject = filteredProjects[0];
  const secondaryProjects = filteredProjects.slice(1);

  return (
    <section
      className="bg-[#F4F6F9] text-[#071B3D] py-20 lg:py-28"
    >
      <div className="w-full max-w-[1800px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Open Editorial Header + Underline Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#CBD5E1]">
          <div className="max-w-[680px]">
            <h2 className="font-serif text-[32px] lg:text-[42px] font-medium text-[#071B3D] leading-[1.16] tracking-[-0.01em]">
              Featured Projects
            </h2>
            <p className="mt-3 text-[15.5px] text-[#475569] leading-[1.7]">
              Selected utility-scale solar parks and commercial rooftop plants delivered for India’s
              leading industrial enterprises, EPC partners, and universities.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="inline-flex flex-wrap items-center gap-6 self-start lg:self-end"
          >
            {(['All', 'Ground Mounted', 'Roof Top'] as ProjectFilter[]).map((tab) => {
              const active = filter === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(tab)}
                  className={`pb-2 text-[13.5px] font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer border-b-2 ${
                    active
                      ? 'text-[#071B3D] border-[#2389E8]'
                      : 'text-[#64748B] border-transparent hover:text-[#071B3D]'
                  }`}
                >
                  {tab === 'All' ? 'All Projects' : tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Lead Project Editorial Feature — Open Unboxed Split with Parallax Photo */}
        {leadProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
          >
            <div className="lg:col-span-7 shadow-[0_24px_60px_rgba(7,27,61,0.14)]">
              <ParallaxImage
                src={leadProject.image}
                alt={`${leadProject.client} — ${leadProject.capacity}`}
                className="w-full h-72 sm:h-96 lg:h-[440px]"
                intensity={12}
                scale={1.2}
              />
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-[13px] font-medium text-[#475569]">
                <span className="text-[#2389E8] font-semibold">{leadProject.category}</span>
                <span aria-hidden="true">·</span>
                <span>{leadProject.location}</span>
              </div>

              <h3 className="mt-3 font-serif text-[28px] lg:text-[34px] font-medium text-[#071B3D] leading-[1.18]">
                {leadProject.title}
              </h3>

              <div className="mt-6 py-5 border-y border-[#CBD5E1] grid grid-cols-2 gap-6">
                <div>
                  <div className="text-[12px] text-[#64748B]">Client</div>
                  <div className="mt-1 text-[16px] font-semibold text-[#071B3D]">
                    {leadProject.client}
                  </div>
                </div>
                <div>
                  <div className="text-[12px] text-[#64748B]">System Capacity</div>
                  <div className="mt-1 text-[24px] font-semibold text-[#2389E8] tabular-nums">
                    {leadProject.capacity}
                  </div>
                </div>
              </div>

              <p className="mt-6 text-[15px] text-[#475569] leading-[1.72]">
                {leadProject.description}
              </p>

              <div className="mt-7">
                <button
                  type="button"
                  onClick={() => onSelectProject(leadProject)}
                  className="inline-flex items-center gap-2 bg-[#2389E8] hover:bg-[#1B76CC] text-white text-[13.5px] font-medium px-6 py-3 rounded-[3px] transition-colors cursor-pointer"
                >
                  <span>Inspect Project Scope</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Secondary Photography Grid — Unboxed Editorial Photo Showcases with Parallax */}
        {secondaryProjects.length > 0 && (
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {secondaryProjects.map((project, idx) => (
              <motion.button
                key={project.id}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, delay: (idx % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                onClick={() => onSelectProject(project)}
                className="group text-left flex flex-col cursor-pointer focus-visible:outline-2 focus-visible:outline-[#2389E8]"
              >
                <div className="w-full relative shadow-[0_14px_36px_rgba(7,27,61,0.1)]">
                  <ParallaxImage
                    src={project.image}
                    alt={`${project.client} — ${project.capacity}`}
                    className="w-full h-60 sm:h-64"
                    intensity={9}
                    scale={1.16}
                  />
                  {/* Subtle dark bottom scrim inside photo for capacity contrast */}
                  <div className="absolute inset-x-0 bottom-0 px-4 py-3 bg-gradient-to-t from-[#05142E]/90 via-[#05142E]/45 to-transparent flex items-center justify-between pointer-events-none">
                    <span className="text-[12.5px] font-medium text-[#8BC6FF]">
                      {project.category}
                    </span>
                    <span className="text-[14px] font-semibold text-white tabular-nums">
                      {project.capacity}
                    </span>
                  </div>
                </div>

                <div className="pt-4 pb-3 border-b border-[#CBD5E1] group-hover:border-[#2389E8] transition-colors flex-1 flex flex-col justify-between w-full">
                  <div>
                    <h3 className="font-serif text-[22px] font-medium text-[#071B3D] leading-snug group-hover:text-[#2389E8] transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-1.5 text-[13.5px] text-[#475569]">
                      {project.partnerNote
                        ? `${project.client} (${project.partnerNote})`
                        : `${project.client} · ${project.location}`}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-[13px] font-medium text-[#071B3D]">
                    <span className="group-hover:text-[#2389E8] transition-colors">
                      View Engineering Details
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#2389E8] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        )}

        {/* Expandable Verified Complete Project Capacity Register (Hairline Open Accordion) */}
        <div className="mt-14 border-y border-[#CBD5E1]">
          <button
            type="button"
            onClick={() => setShowLedger((prev) => !prev)}
            aria-expanded={showLedger}
            className="w-full py-5 flex items-center justify-between gap-4 text-left hover:text-[#2389E8] transition-colors cursor-pointer"
          >
            <div>
              <span className="font-serif text-[22px] font-medium text-[#071B3D]">
                Complete Executed Project Register
              </span>
              <span className="ml-3 text-[13.5px] text-[#475569] tabular-nums">
                ({COMPLETE_PROJECT_LEDGER.length} verified installations)
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#2389E8] shrink-0">
              {showLedger ? 'Hide Register' : 'View All Capacities'}
              {showLedger ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </span>
          </button>

          {showLedger && (
            <div className="pb-6 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#CBD5E1] text-[12px] font-semibold uppercase tracking-[0.06em] text-[#475569]">
                    <th className="py-3.5 pr-6">Client / Partner</th>
                    <th className="py-3.5 px-6">Installed Capacity</th>
                    <th className="py-3.5 px-6">Installation Type</th>
                    <th className="py-3.5 pl-6">Project Scope</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DCE3EC] text-[14px]">
                  {COMPLETE_PROJECT_LEDGER.map((row) => (
                    <tr key={`${row.client}-${row.capacity}`} className="hover:bg-white/60">
                      <td className="py-3.5 pr-6 font-medium text-[#071B3D]">{row.client}</td>
                      <td className="py-3.5 px-6 font-semibold text-[#2389E8] tabular-nums">
                        {row.capacity}
                      </td>
                      <td className="py-3.5 px-6 text-[#475569]">{row.type}</td>
                      <td className="py-3.5 pl-6 text-[#475569]">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
