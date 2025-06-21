import Image from "next/image";
import UserResearch from "@/public/UserResearch.png";
import InterfaceDesign from "@/public/InterfaceDesign.png";
import DesignSystem from "@/public/DesignSystem.png";
import Prototyping from "@/public/Prototyping.png";
import AuditingTesting from "@/public/AuditingTesting.png";
import Separator from "@/public/Separator.png";
import dynamic from 'next/dynamic'; // Import dynamic
import IsometricGridBackground from "./_components/IsometricGridBackground";

// Dynamically import ServiceCard3D
const ServiceCard3D = dynamic(() => import('./_components/ServiceCard3D'), {
    ssr: false,
    loading: () => <div style={{ width: '220px', height: '300px' }} className="bg-zinc-800 rounded-lg animate-pulse" />
});

// Augment projects data with details and ensure image paths are strings
export const projects = [
    {
      source: UserResearch.src, // Use .src for Next Image objects if they are not strings already
      title: "User Research",
      details: "Understanding user needs, behaviors, and motivations through interviews, surveys, and usability testing.",
    },
    {
      source: InterfaceDesign.src,
      title: "Interface Design",
      details: "Crafting visually appealing, intuitive, and user-friendly interfaces for digital products.",
    },
    {
      source: DesignSystem.src,
      title: "Design System",
      details: "Developing comprehensive design systems for consistency and scalability across all platforms.",
    },
    {
      source: Prototyping.src,
      title: "Prototyping",
      details: "Creating interactive prototypes to visualize and test product concepts before development.",
    },
    {
      source: AuditingTesting.src,
      title: "Auditing & Testing",
      details: "Evaluating existing products for usability issues and conducting thorough testing for optimal performance.",
    },
  ];


export default function ServicesSection1() {
    return (
        <div className="min-h-[38rem] p-[10px] lg:px-[120px] w-full py-[90px] bg-[#191C26] flex flex-col justify-center place-content-between relative overflow-hidden"> {/* Added relative and overflow-hidden */}
            <IsometricGridBackground />
            <div className="flex flex-col mb-12 relative z-10"> {/* Added relative z-10 */}
                <p className="flex items-center text-base font-normal text-[#FFFFFF]"><Image src={Separator} className="mr-[10px]" alt="separator"/> Our Services</p>
                <span className="mt-2 lg:mt-5 mb-4 lg:mb-0 font-bold text-3xl md:text-[53px] lg:text-[64px] leading-none md:leading-[64px] lg:leading-[76.8px] text-[#FFFFFF]">What we do</span>
            </div>
            {/* Replace HoverEffect with a grid of ServiceCard3D */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-content-center justify-items-center gap-x-6 gap-y-10 mt-9 relative z-10"> {/* Added relative z-10 */}
                {projects.map((project, idx) => (
                    <ServiceCard3D
                        key={idx}
                        icon={project.source}
                        title={project.title}
                        details={project.details}
                    />
                ))}
            </div>
        </div>
    )
}