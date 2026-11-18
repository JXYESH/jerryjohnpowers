import { useEffect } from 'react';
import { Check, MapPin, X } from 'lucide-react';
import { SolarProject } from '../data/jjpData';

interface ProjectDetailModalProps {
  project: SolarProject | null;
  onClose: () => void;
  onDiscussProject: (serviceType: string) => void;
}

export default function ProjectDetailModal({
  project,
  onClose,
  onDiscussProject,
}: ProjectDetailModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#05142E]/80"
      onClick={onClose}
    >
      <div
        className="bg-white text-[#071B3D] w-full max-w-[780px] border border-[#DCE3EC] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-[#071B3D]">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-56 sm:h-72 object-cover object-center"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="absolute top-4 right-4 w-10 h-10 bg-[#071B3D]/90 hover:bg-[#071B3D] text-white border border-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto">
          <div className="flex flex-wrap items-center gap-2 text-[12.5px] font-medium text-[#475569]">
            <span className="text-[#2389E8] font-semibold">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#64748B]" />
              {project.location}
            </span>
          </div>

          <h3
            id="project-modal-title"
            className="mt-2 font-serif text-[26px] sm:text-[30px] font-medium text-[#071B3D] leading-snug"
          >
            {project.title}
          </h3>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#F4F6F9] border border-[#DCE3EC] p-4">
            <div>
              <div className="text-[11.5px] uppercase tracking-[0.06em] text-[#64748B]">
                Client / Partner
              </div>
              <div className="mt-1 text-[15px] font-semibold text-[#071B3D]">
                {project.client}
                {project.partnerNote && (
                  <span className="block text-[12.5px] font-normal text-[#475569]">
                    {project.partnerNote}
                  </span>
                )}
              </div>
            </div>
            <div>
              <div className="text-[11.5px] uppercase tracking-[0.06em] text-[#64748B]">
                Installed Capacity
              </div>
              <div className="mt-1 text-[20px] font-semibold text-[#2389E8] tabular-nums">
                {project.capacity}
              </div>
            </div>
          </div>

          <p className="mt-5 text-[15px] text-[#475569] leading-[1.7]">{project.description}</p>

          <div className="mt-6 pt-5 border-t border-[#E2E8F0]">
            <div className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#475569]">
              Execution Scope
            </div>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.scope.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[14px] text-[#071B3D] font-medium"
                >
                  <Check className="w-4 h-4 text-[#2389E8] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7 pt-5 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => {
                const mapped =
                  project.category === 'Roof Top'
                    ? 'Commercial Roof Top'
                    : 'Ground Mounted Solar';
                onClose();
                onDiscussProject(mapped);
              }}
              className="inline-flex items-center justify-center bg-[#2389E8] hover:bg-[#1B76CC] text-white text-[13.5px] font-medium px-6 py-2.5 rounded-[3px] transition-colors cursor-pointer"
            >
              Discuss a Similar Project
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-[13.5px] font-medium text-[#475569] hover:text-[#071B3D] px-4 py-2"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
