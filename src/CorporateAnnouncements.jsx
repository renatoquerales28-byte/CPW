import React, { useState, useEffect } from 'react';
import { ArrowRight, Info, FileText, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';

const CorporateAnnouncements = () => {

    // Categories for corporate announcements
    const categories = [
        "Todos",
        "Estructura Organizativa",
        "Expansión Global",
        "Alianzas Estratégicas",
        "ESG & Impacto",
        "Informes Trimestrales"
    ];

    const announcements = [
        {
            title: "Centhropy anuncia nueva estructura de liderazgo para 2026",
            category: "Estructura Organizativa",
            image: "/Unifyprotocol.jpg",
            date: "Febrero 20, 2026",
            summary: "Reorganización quirúrgica enfocada en la aceleración de nodos de datos globales."
        },
        {
            title: "Alianza Estratégica con consorcio tecnológico de la UE",
            category: "Alianzas Estratégicas",
            image: "/Unifydc.jpg",
            date: "Febrero 10, 2026",
            summary: "Integración de Unify Protocol en la infraestructura de datos soberanos europea."
        },
        {
            title: "Apertura de Centhropy Nexus en Madrid y Berlín",
            category: "Expansión Global",
            image: "/Unifyagent3.0.jpg",
            date: "Enero 25, 2026",
            summary: "Nuevos centros de operaciones para fortalecer la presencia en el mercado de la EU."
        },
        {
            title: "Informe Trimestral Q4 2025: Crecimiento sin precedentes",
            category: "Informes Trimestrales",
            image: "/Unifydc.jpg",
            date: "Enero 05, 2026",
            summary: "Análisis de rendimiento y métricas de expansión de la red Unify."
        }
    ];

    return (
        <div className="font-funnel no-select w-full bg-white text-black min-h-screen relative overflow-x-hidden">
            {/* HEADER */}
            <Navbar subtitle="Anuncios Corporativos" />

            <main className="pt-[140px] md:pt-[200px] px-5 md:px-10 max-w-[1800px] mx-auto">
                {/* HERO SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
                    <div className="md:col-span-8">
                        <h1 className="text-7xl md:text-[120px] font-medium tracking-tighter leading-[0.85] uppercase">
                            Anuncios <br /> Corporativos
                        </h1>
                    </div>
                    <div className="md:col-span-4 flex items-end">
                        <p className="text-xl md:text-2xl font-light leading-snug text-black/80">
                            Notas oficiales, actualizaciones de estructura y comunicaciones institucionales de Centhropy.
                        </p>
                    </div>
                </div>

                {/* CATEGORY NAV */}
                <div className="border-t border-black/10 py-6 mb-16 overflow-x-auto no-scrollbar">
                    <div className="flex gap-8 whitespace-nowrap">
                        {categories.map((cat, i) => (
                            <button key={i} className="text-sm font-medium text-black/60 hover:text-black transition-colors uppercase tracking-widest">
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ANNOUNCEMENTS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 pb-32">
                    {announcements.map((item, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="aspect-[16/9] w-full overflow-hidden mb-8 border border-black/5 relative bg-gray-100">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out grayscale hover:grayscale-0"
                                />
                                <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-[8px] font-bold uppercase tracking-[0.3em]">
                                    {item.category}
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-bold text-black/30 uppercase tracking-[0.4em]">{item.date}</span>
                                    <Bell size={12} className="text-black/20" />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-medium tracking-tighter uppercase leading-[0.9] group-hover:text-black/60 transition-colors">
                                    {item.title}
                                </h2>
                                <p className="text-black/60 font-light max-w-xl">
                                    {item.summary}
                                </p>
                                <div className="pt-4 flex items-center gap-2 group/btn">
                                    <span className="text-xs font-bold uppercase tracking-widest border-b border-black/20 pb-1 group-hover/btn:border-black transition-all">Ver comunicado</span>
                                    <ArrowRight size={14} className="translate-y-[-1px] group-hover/btn:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* FOOTER */}
            <footer className="bg-white border-t border-black/5 px-5 md:px-10 py-20 max-w-[1800px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                    <div>
                        <span className="text-3xl font-black tracking-tighter">Centhropy</span>
                        <p className="text-sm text-black/40 mt-4 max-w-xs">Transparencia y rigor en la comunicación de nuestra infraestructura global.</p>
                    </div>
                    <div className="flex flex-col gap-2 items-start md:items-end">
                        <span className="text-[10px] font-bold text-black/30 uppercase tracking-[0.3em]">© {new Date().getFullYear()} Centhropy</span>
                        <span className="text-[10px] font-bold text-black/30 uppercase tracking-[0.3em]">Corporate Relations Department</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default CorporateAnnouncements;
