import React, { useState, useEffect } from 'react';
import { ArrowRight, Globe, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Logo from './components/Logo';

const ImpactStudies = () => {

    // Categories for impact studies
    const categories = [
        "Retail Intelligence",
        "Supply Chain",
        "Predictive Analysis",
        "Global Infrastructure",
        "Data Sovereignty",
        "Strategic Growth"
    ];

    const impactItems = [
        {
            title: "Optimizando Decisiones en el Sector Farmacéutico Global",
            category: "Retail Intelligence",
            image: "/Unifydc.jpg",
            date: "Febrero 10, 2026",
            caseId: "Case_07"
        },
        {
            title: "Reducción de Latencia en Nodos de Datos Europeos",
            category: "Global Infrastructure",
            image: "/Unifyprotocol.jpg",
            date: "Enero 22, 2026",
            caseId: "Case_04"
        },
        {
            title: "Análisis Predictivo para la Cadena de Suministro de Latam",
            category: "Supply Chain",
            image: "/Unifyagent3.0.jpg",
            date: "Diciembre 15, 2025",
            caseId: "Case_02"
        }
    ];

    return (
        <div className="font-funnel no-select w-full bg-white text-black min-h-screen relative overflow-x-hidden">
            <Navbar subtitle="Estudios de Impacto" />

            <main className="pt-[140px] md:pt-[200px] px-5 md:px-10 max-w-[1800px] mx-auto">
                {/* HERO SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
                    <div className="md:col-span-8">
                        <h1 className="text-7xl md:text-[120px] font-medium tracking-tighter leading-[0.85] uppercase">
                            Impacto
                        </h1>
                    </div>
                    <div className="md:col-span-4 flex items-end">
                        <p className="text-xl md:text-2xl font-light leading-snug text-black/80">
                            Casos de éxito y estudios detallados sobre cómo Centhropy resuelve desafíos complejos.
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

                {/* IMPACT GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 pb-32">
                    {impactItems.map((item, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="aspect-[16/9] w-full overflow-hidden mb-8 border border-black/5">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                                />
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-bold text-black/40 uppercase tracking-[0.4em]">{item.category}</span>
                                    <span className="text-[10px] font-mono text-black/20">{item.caseId}</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-medium tracking-tighter uppercase leading-[0.9] group-hover:text-black/60 transition-colors">
                                    {item.title}
                                </h2>
                                <div className="pt-4 flex items-center gap-2 group/btn">
                                    <span className="text-xs font-bold uppercase tracking-widest border-b border-black/20 pb-1 group-hover/btn:border-black transition-all">Ver Caso</span>
                                    <ArrowRight size={14} className="translate-y-[-1px] group-hover/btn:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="bg-white border-t border-black/5 px-5 md:px-10 py-20 max-w-[1800px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                    <div>
                        <Logo className="text-black mb-4" />
                        <p className="text-sm text-black/40 max-w-xs">Building the global fabric for autonomous data intelligence.</p>
                    </div>
                    <div className="flex flex-col gap-2 items-start md:items-end">
                        <span className="text-[10px] font-bold text-black/30 uppercase tracking-[0.3em]">© {new Date().getFullYear()} Centhropy</span>
                        <span className="text-[10px] font-bold text-black/30 uppercase tracking-[0.3em]">All Rights Reserved</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ImpactStudies;
