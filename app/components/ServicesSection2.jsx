"use client";

import { useState } from 'react';
import Image from "next/image";
import Separator from "@/public/Separator.png";
import Travel from "@/public/Travel.png";
import Agritech from "@/public/Agritech.png";
import Education from "@/public/Education.png";
import TravelImg from "@/public/TravelImg.png";
import AgriTechImg from "@/public/AgriTechImg.png";
import EducationImg from "@/public/EducationImg.png";
import { useRef, useState as useLocalState } from 'react';
import jsPDF from "jspdf";


// Data-driven approach for industries
const industries = [
    {
        key: "Travel",
        label: "Travel",
        icon: Travel,
        image: TravelImg,
        description: "Empowering travel businesses with seamless booking, itinerary management, and customer engagement solutions."
    },
    {
        key: "Agritech",
        label: "Agritech, Oil & Gas, NGO",
        icon: Agritech,
        image: AgriTechImg,
        description: "Innovative digital solutions for agriculture, oil & gas, and NGOs to optimize operations and maximize impact."
    },
    {
        key: "Education",
        label: "Education",
        icon: Education,
        image: EducationImg,
        description: "Transforming education with e-learning platforms, student management, and interactive content delivery."
    }
];

export default function ServicesSection2() {
    const [activeTab, setActiveTab] = useState(industries[0].key);
    const [showModal, setShowModal] = useLocalState(false);
    const [form, setForm] = useLocalState({ name: '', company: '', contact: '' });
    const [formError, setFormError] = useLocalState('');
    const formRef = useRef();

    // Keyboard navigation for tabs
    const handleKeyDown = (e, idx) => {
        if (e.key === "ArrowDown" || e.key === "ArrowRight") {
            setActiveTab(industries[(idx + 1) % industries.length].key);
        } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
            setActiveTab(industries[(idx - 1 + industries.length) % industries.length].key);
        }
    };

    const activeIndustry = industries.find(ind => ind.key === activeTab);

    // PDF generation
    const handleDownload = () => {
        const doc = new jsPDF();
        doc.text("Softles Education Brochure", 20, 20);
        doc.text(`Name: ${form.name}`, 20, 40);
        doc.text(`Company: ${form.company}`, 20, 50);
        doc.text(`Contact: ${form.contact}`, 20, 60);
        doc.text("This is a test PDF for the Education Brochure.", 20, 80);
        doc.save("Softles-Education-Brochure.pdf");
    };

    const handleFormChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setFormError('');
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.company || !form.contact) {
            setFormError("All fields are required.");
            return;
        }
        setShowModal(false);
        setTimeout(handleDownload, 300); // Delay to allow modal to close
        setForm({ name: '', company: '', contact: '' });
    };

    return (
        <section className="min-h-[30rem] px-2 md:px-8 lg:px-[120px] w-full py-16 bg-[#111319] bg-grid-white text-white flex flex-col justify-center">
            <div className="flex flex-col mb-8">
                <p className="flex items-center text-base font-medium tracking-wide">
                    <Image src={Separator} className="mr-3" alt="separator" />
                    <span className="uppercase tracking-widest text-[#DC4242]">Industries We Serve</span>
                </p>
                <span className="mt-2 lg:mt-5 mb-4 lg:mb-0 font-bold text-3xl md:text-[53px] lg:text-[64px] leading-tight md:leading-[64px] lg:leading-[76.8px]">
                    We are more than our words
                </span>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Tabs */}
                <nav className="bg-[#191C26] rounded-2xl shadow-lg min-h-fit lg:min-h-[387px] w-full lg:w-[357px] p-6 flex flex-col">
                    <h2 className="font-semibold text-lg leading-[32.22px] mb-6 text-[#DC4242]">Industry or Domain</h2>
                    <ul className="flex flex-col gap-4 lg:gap-8" role="tablist">
                        {industries.map((industry, idx) => (
                            <li
                                key={industry.key}
                                role="tab"
                                aria-selected={activeTab === industry.key}
                                tabIndex={0}
                                className={`
                                    cursor-pointer font-medium text-base flex items-center gap-x-4 px-4 py-3 rounded-xl transition
                                    ${activeTab === industry.key
                                        ? "bg-[#23263A] text-[#DC4242] shadow-md scale-105"
                                        : "hover:bg-[#23263A]/70 hover:text-[#DC4242] text-white/80"}
                                    outline-none focus:ring-2 focus:ring-[#DC4242]
                                `}
                                onClick={() => setActiveTab(industry.key)}
                                onKeyDown={e => handleKeyDown(e, idx)}
                            >
                                <Image src={industry.icon} alt={industry.label} className="w-7 h-7" />
                                <span>{industry.label}</span>
                            </li>
                        ))}
                    </ul>
                </nav>
                {/* Tab Panel */}
                <div className="w-full lg:w-[807px] bg-[#191C26] rounded-2xl shadow-lg flex flex-col items-center justify-center p-4 lg:p-10 transition">
                    <Image
                        src={activeIndustry.image}
                        alt={activeIndustry.label}
                        className="rounded-xl mb-6 shadow-md object-contain"
                        style={{ maxHeight: 220, width: "auto" }}
                    />
                    <h3 className="text-2xl font-bold mb-2 text-[#DC4242]">{activeIndustry.label}</h3>
                    <p className="text-base text-white/90 mb-6 text-center max-w-xl">{activeIndustry.description}</p>
                    {/* View Case Study Button for all industries */}
                    <button
                        className="bg-[#DC4242] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#b32e2e] transition mb-4"
                        onClick={() => setShowModal(true)}
                    >
                        View Case Study
                    </button>
                    {/* Dots */}
                    <div className="flex justify-center items-center gap-x-2 mt-2">
                        {industries.map(ind => (
                            <span
                                key={ind.key}
                                className={`rounded-full transition-all duration-200
                                    ${activeTab === ind.key
                                        ? "bg-[#DC4242] w-3 h-3"
                                        : "bg-[#D9D9D9] w-2 h-2"}
                                `}
                            />
                        ))}
                    </div>
                    {/* Modal */}
                    {showModal && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                            <div className="bg-[#191C26] rounded-2xl p-8 w-[90vw] max-w-md shadow-lg relative">
                                <button
                                    className="absolute top-3 right-3 text-white text-2xl"
                                    onClick={() => setShowModal(false)}
                                    aria-label="Close"
                                >&times;</button>
                                <h4 className="text-xl font-bold mb-4 text-[#DC4242]">Download Brochure</h4>
                                <form ref={formRef} onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={form.name}
                                        onChange={handleFormChange}
                                        className="px-4 py-2 rounded bg-[#23263A] text-white focus:outline-none focus:ring-2 focus:ring-[#DC4242]"
                                    />
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder="Company"
                                        value={form.company}
                                        onChange={handleFormChange}
                                        className="px-4 py-2 rounded bg-[#23263A] text-white focus:outline-none focus:ring-2 focus:ring-[#DC4242]"
                                    />
                                    <input
                                        type="text"
                                        name="contact"
                                        placeholder="Contact"
                                        value={form.contact}
                                        onChange={handleFormChange}
                                        className="px-4 py-2 rounded bg-[#23263A] text-white focus:outline-none focus:ring-2 focus:ring-[#DC4242]"
                                    />
                                    {formError && <span className="text-red-400 text-sm">{formError}</span>}
                                    <button
                                        type="submit"
                                        className="bg-[#DC4242] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#b32e2e] transition mt-2"
                                    >
                                        Download PDF
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}