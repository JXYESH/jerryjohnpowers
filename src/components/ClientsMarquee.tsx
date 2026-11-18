import { CLIENT_LOGOS } from '../data/jjpData';

export default function ClientsMarquee() {
  return (
    <section
      aria-label="Clients and EPC Collaborations"
      className="bg-[#F4F6F9] text-[#071B3D] py-6 lg:py-8 border-t border-[#DCE3EC]/80"
    >
      <div className="w-full max-w-[1800px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-baseline justify-between gap-4 mb-3">
          <h3 className="font-serif text-[21px] lg:text-[25px] font-medium text-[#071B3D] tracking-[-0.01em]">
            Trusted by Leading Enterprises &amp; EPC Partners
          </h3>
          <span className="text-[13px] text-[#64748B] hidden sm:inline">
            Hover to pause
          </span>
        </div>
      </div>

      <div className="marquee-wrapper relative overflow-hidden py-1.5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 z-10 bg-gradient-to-r from-[#F4F6F9] to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 z-10 bg-gradient-to-l from-[#F4F6F9] to-transparent"
        />

        <div className="animate-client-marquee items-center">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="mx-8 sm:mx-12 lg:mx-16 h-20 sm:h-24 flex items-center justify-center shrink-0"
            >
              <img
                src={client.logo}
                alt={client.name}
                referrerPolicy="no-referrer"
                className="h-16 sm:h-20 w-auto max-w-[200px] object-contain mix-blend-multiply opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-200"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
