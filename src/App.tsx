import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OverlappingPanels from './components/OverlappingPanels';
import CompanyOverview from './components/CompanyOverview';
import ClientsMarquee from './components/ClientsMarquee';
import ExpertiseSection from './components/ExpertiseSection';
import ProjectsSection from './components/ProjectsSection';
import DirectorsMessageSection from './components/DirectorsMessageSection';
import ContactFooter from './components/ContactFooter';
import ProjectDetailModal from './components/ProjectDetailModal';
import StackingSection from './components/StackingSection';
import { SolarProject } from './data/jjpData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<SolarProject | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [preselectedEnquiryService, setPreselectedEnquiryService] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sections = ['home', 'overview', 'services', 'projects', 'leadership', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectExpertise = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestProposal = (serviceType: string) => {
    setPreselectedEnquiryService(serviceType);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#071B3D] text-white flex flex-col overflow-x-clip">
      <main className="flex-1 relative">
        {/* Normal Flow: Hero + Signature Overlapping Panels */}
        <div id="home" className="relative z-10 bg-[#071B3D]">
          <Navbar activeSection={activeSection} />
          <HeroSection />
          <OverlappingPanels
            onSelectProject={setSelectedProject}
            onSelectExpertise={handleSelectExpertise}
          />
        </div>

        {/* Stacked Important Page 1: Company Overview + Moving Clients Marquee */}
        <StackingSection
          anchorId="overview"
          zIndex={20}
          dwellVh={22}
          fullViewport
          bgClassName="bg-[#F4F6F9]"
          elevatedEdge={false}
        >
          <CompanyOverview />
          <ClientsMarquee />
        </StackingSection>

        {/* Normal Flow: Engineering & Solar Capabilities (Slides over Company Overview) */}
        <div
          id="services"
          className="relative z-30 bg-[#071B3D] shadow-[0_-24px_60px_rgba(4,16,38,0.32)]"
        >
          <ExpertiseSection
            externalSelectedId={selectedServiceId}
            onRequestProposal={handleRequestProposal}
          />
        </div>

        {/* Normal Flow: Featured Projects */}
        <div id="projects" className="relative z-30 bg-[#F4F6F9]">
          <ProjectsSection onSelectProject={setSelectedProject} />
        </div>

        {/* Stacked Important Page 2: Director's Message */}
        <StackingSection
          anchorId="leadership"
          zIndex={40}
          dwellVh={14}
          fullViewport
          bgClassName="bg-white"
        >
          <DirectorsMessageSection />
        </StackingSection>

        {/* Normal Flow: Closing Contact & Footer (Slides over Director's Message) */}
        <div
          id="contact"
          className="relative z-50 bg-[#071B3D] shadow-[0_-24px_60px_rgba(4,16,38,0.32)]"
        >
          <ContactFooter preselectedService={preselectedEnquiryService} />
        </div>
      </main>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onDiscussProject={handleRequestProposal}
      />
    </div>
  );
}
