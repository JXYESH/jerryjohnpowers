import { useEffect, useState, FormEvent } from 'react';
import { ArrowUp, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/jjpData';

interface FormState {
  name: string;
  contact: string;
  serviceType: string;
  message: string;
}

interface ContactFooterProps {
  preselectedService?: string | null;
}

const INITIAL_FORM: FormState = {
  name: '',
  contact: '',
  serviceType: 'Ground Mounted Solar',
  message: '',
};

export default function ContactFooter({ preselectedService }: ContactFooterProps) {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [error, setError] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setSubmitted(false);
      setForm((prev) => ({ ...prev, serviceType: preselectedService }));
    }
  }, [preselectedService]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const contactVal = form.contact.trim();
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactVal);
    const isPhone = contactVal.replace(/\D/g, '').length >= 8;

    if (!form.name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!isEmail && !isPhone) {
      setError('Please enter a valid email address or phone number.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  return (
    <footer className="bg-[#071B3D] text-white lg:min-h-screen flex flex-col justify-between pt-20 pb-10 lg:pt-28 lg:pb-12">
      <div className="w-full max-w-[1800px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 my-auto py-8">
        {/* Minimal Contact & Enquiry Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left — Clean Heading & Direct Contact */}
          <div className="lg:col-span-5">
            <h2 className="font-serif text-[34px] lg:text-[46px] font-medium text-white leading-[1.12] tracking-[-0.01em]">
              Start a Solar Project Conversation
            </h2>
            <p className="mt-5 text-[15.5px] text-[#C5D0DF] leading-[1.7] max-w-[460px]">
              Connect with our Chennai engineering team for feasibility studies, commercial
              rooftops, or utility-scale execution.
            </p>

            <div className="mt-9 pt-7 border-t border-white/12 space-y-3 text-[14.5px] text-[#E2E8F0]">
              <div>
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="hover:text-[#8BC6FF] transition-colors"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
              <div className="tabular-nums text-[#C5D0DF]">
                <a href="tel:+919677209406" className="hover:text-white transition-colors">
                  {COMPANY_INFO.contact.phonePrimary}
                </a>
                <span className="mx-2 text-white/30">·</span>
                <a href="tel:+919003380181" className="hover:text-white transition-colors">
                  {COMPANY_INFO.contact.phoneSecondary}
                </a>
              </div>
              <div className="pt-1 text-[13.5px] text-[#94A3B8]">
                34, Swathi Complex, Nandanam, Chennai – 600035
              </div>
            </div>
          </div>

          {/* Right — Streamlined 4-Field Architectural Enquiry Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="py-10 border-t border-white/15">
                <CheckCircle2 className="w-9 h-9 text-[#2389E8]" />
                <h3 className="mt-3 font-serif text-[26px] font-medium text-white">
                  Enquiry Prepared
                </h3>
                <p className="mt-2 text-[15px] text-[#C5D0DF] max-w-[480px]">
                  Thank you, {form.name}. Send your {form.serviceType.toLowerCase()} enquiry
                  directly to our engineering desk.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${COMPANY_INFO.contact.email}?subject=${encodeURIComponent(
                      `Solar Project Enquiry — ${form.serviceType}`
                    )}&body=${encodeURIComponent(
                      `Name: ${form.name}\nContact: ${form.contact}\nService: ${form.serviceType}\n\nDetails:\n${form.message}`
                    )}`}
                    className="inline-flex items-center justify-center bg-[#2389E8] hover:bg-[#1B76CC] text-white text-[13.5px] font-medium px-6 py-2.5 rounded-[3px] transition-colors"
                  >
                    Open in Email Client
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setForm(INITIAL_FORM);
                      setSubmitted(false);
                    }}
                    className="inline-flex items-center justify-center border border-white/25 hover:border-white/50 text-white text-[13.5px] font-medium px-6 py-2.5 rounded-[3px] transition-colors cursor-pointer"
                  >
                    New Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-7">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label
                      htmlFor="jjp-name"
                      className="block text-[12px] font-medium text-[#94A3B8] mb-1.5"
                    >
                      Name *
                    </label>
                    <input
                      id="jjp-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-transparent border-b border-white/25 px-1 py-2.5 text-[14.5px] text-white placeholder:text-[#64748B] focus:outline-none focus:border-[#2389E8] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="jjp-contact"
                      className="block text-[12px] font-medium text-[#94A3B8] mb-1.5"
                    >
                      Email or Phone *
                    </label>
                    <input
                      id="jjp-contact"
                      type="text"
                      required
                      value={form.contact}
                      onChange={(e) => setForm({ ...form, contact: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full bg-transparent border-b border-white/25 px-1 py-2.5 text-[14.5px] text-white placeholder:text-[#64748B] focus:outline-none focus:border-[#2389E8] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="jjp-service"
                      className="block text-[12px] font-medium text-[#94A3B8] mb-1.5"
                    >
                      Project Type
                    </label>
                    <select
                      id="jjp-service"
                      value={form.serviceType}
                      onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                      className="w-full bg-[#071B3D] border-b border-white/25 px-1 py-2.5 text-[14.5px] text-white focus:outline-none focus:border-[#2389E8] transition-colors cursor-pointer"
                    >
                      <option value="Ground Mounted Solar">Ground Mounted Solar</option>
                      <option value="Commercial Roof Top">Commercial Roof Top</option>
                      <option value="Utility-Scale & Substations">
                        Utility-Scale &amp; Substations
                      </option>
                      <option value="TANGEDCO Approvals & O&M">
                        TANGEDCO Approvals &amp; O&amp;M
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="jjp-msg"
                    className="block text-[12px] font-medium text-[#94A3B8] mb-1.5"
                  >
                    Project Brief
                  </label>
                  <textarea
                    id="jjp-msg"
                    rows={2}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Location, estimated kW / MW capacity, or grid requirement."
                    className="w-full bg-transparent border-b border-white/25 px-1 py-2.5 text-[14.5px] text-white placeholder:text-[#64748B] focus:outline-none focus:border-[#2389E8] transition-colors resize-none"
                  />
                </div>

                {error && (
                  <p role="alert" className="text-[13px] text-[#FCA5A5] font-medium">
                    {error}
                  </p>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center bg-[#2389E8] hover:bg-[#1B76CC] text-white text-[14px] font-medium px-8 py-3 rounded-[3px] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Quiet Single-Row Executive Footer (No Duplicate Navbar Links) */}
      <div className="w-full max-w-[1800px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="pt-8 border-t border-white/12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[13px] text-[#94A3B8]">
          <div className="flex items-center gap-3">
            <img
              src="/assets/jjp/logo_alt.png"
              alt="Jerry John Powers emblem"
              referrerPolicy="no-referrer"
              className="h-7 w-7 object-contain"
            />
            <span className="font-medium text-white">
              Jerry John Powers Private Limited
            </span>
            <span className="hidden sm:inline text-white/25">·</span>
            <span className="hidden sm:inline">© 2026 All rights reserved</span>
          </div>

          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-[#C5D0DF] hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
