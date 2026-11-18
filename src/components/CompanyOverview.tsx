import { motion } from 'motion/react';
import { COMPANY_INFO, OVERVIEW_STATS } from '../data/jjpData';
import ParallaxImage from './ParallaxImage';

export default function CompanyOverview() {
  return (
    <section className="bg-[#F4F6F9] text-[#071B3D] py-8 lg:py-10">
      <div className="w-full max-w-[1800px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* LEFT — Distinct Operational Scale & Group Structure */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <h2 className="font-serif text-[30px] lg:text-[38px] font-medium text-[#071B3D] leading-[1.15] tracking-[-0.01em]">
              Company Overview
            </h2>

            <p className="mt-3.5 text-[15px] text-[#475569] leading-[1.68]">
              Operating across Tamil Nadu and South India, our teams deliver customized power
              plants for commercial enterprises, manufacturing facilities, IT campuses, and
              hospitals—backed by 25-year linear output warranties and captive grid savings.
            </p>

            {/* Open Unboxed Statistics Separated by Crisp Vertical Hairlines */}
            <div className="mt-6 pt-4 pb-4 border-y border-[#CBD5E1] grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-0 sm:divide-x sm:divide-[#CBD5E1]">
              {OVERVIEW_STATS.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className={idx > 0 ? 'sm:pl-6 sm:pr-4' : 'sm:pr-5'}
                >
                  <div className="text-[32px] lg:text-[36px] font-medium text-[#2389E8] leading-none tabular-nums">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[13px] font-medium text-[#475569] leading-[1.4]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-5">
              <div className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#64748B]">
                Group Entities
              </div>
              <p className="mt-1.5 text-[14px] text-[#475569] leading-[1.6]">
                {COMPANY_INFO.groupCompanies.join(' · ')}
              </p>
            </div>
          </motion.div>

          {/* RIGHT — Unboxed Full-Bleed Parallax Solar Infrastructure Photograph */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <ParallaxImage
              src="/assets/jjp/biz_panels_2.jpg"
              alt="Grid-connected ground-mounted solar array and power control station"
              className="w-full h-[270px] sm:h-[310px] lg:h-[340px] shadow-[0_20px_50px_rgba(7,27,61,0.14)]"
              intensity={12}
              scale={1.2}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
