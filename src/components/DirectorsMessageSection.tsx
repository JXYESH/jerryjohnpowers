import { motion } from 'motion/react';
import { COMPANY_INFO } from '../data/jjpData';
import ParallaxImage from './ParallaxImage';

export default function DirectorsMessageSection() {
  const leadDirector = COMPANY_INFO.directors[0];

  return (
    <section className="bg-white text-[#071B3D] py-14 lg:py-20">
      <div className="w-full max-w-[1800px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT — Unboxed Architectural Solar Visual & Board Attribution */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <ParallaxImage
              src="/assets/jjp/geo_solar.jpg"
              alt="Solar photovoltaic infrastructure engineered by Jerry John Powers"
              className="w-full h-[260px] sm:h-[310px] lg:h-[340px] shadow-[0_22px_54px_rgba(7,27,61,0.12)]"
              intensity={10}
              scale={1.18}
            />

            <div className="mt-5 pt-4 border-t border-[#CBD5E1] flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <div className="text-[11.5px] font-semibold uppercase tracking-[0.08em] text-[#2389E8]">
                  Board of Directors · Est. 2012
                </div>
                <div className="mt-1 font-serif text-[20px] font-medium text-[#071B3D]">
                  {COMPANY_INFO.directors.map((d) => d.name).join(' & ')}
                </div>
              </div>
              <div className="text-[13px] text-[#64748B]">Chennai · South India</div>
            </div>
          </motion.div>

          {/* RIGHT — Spacious, Minimal Editorial Quote */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 lg:pl-6"
          >
            <h2 className="font-serif text-[30px] lg:text-[38px] font-medium text-[#071B3D] tracking-[-0.01em]">
              Director’s Message
            </h2>

            <div className="mt-4 w-12 h-[2px] bg-[#2389E8]" aria-hidden="true" />

            <blockquote className="mt-6">
              <p className="font-serif italic text-[22px] sm:text-[26px] lg:text-[32px] text-[#071B3D] leading-[1.42] max-w-[820px]">
                “{leadDirector.quote}”
              </p>
              <footer className="mt-7 pt-5 border-t border-[#E2E8F0] flex flex-wrap items-center gap-3 text-[14.5px]">
                <span className="font-semibold text-[#071B3D]">{leadDirector.name}</span>
                <span className="text-[#94A3B8]" aria-hidden="true">
                  ·
                </span>
                <span className="text-[#475569]">Director, {COMPANY_INFO.name}</span>
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
