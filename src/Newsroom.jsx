import React, { useState, useEffect } from 'react';
import { ArrowRight, Globe, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Logo from './components/Logo';

const Newsroom = () => {

    // Categories for the sub-nav
    const categories = [
        "Cobertura mediática",
        "Comunicados de prensa",
        "Blog",
        "Cartas del CEO",
        "Liderazgo de pensamiento",
        "Noticias de relaciones con los inversores"
    ];

    const newsItems = [
        {
            title: "Centhropy lanza Unify Agent 3.0: El futuro de la IA en Retail",
            category: "Blog",
            image: "/Unifyagent3.0.jpg",
            date: "Febrero 21, 2026"
        },
        {
            title: "Cartas del CEO: La visión de Centhropy para 2026",
            category: "Cartas del CEO",
            image: "/Unifydc.jpg",
            date: "Febrero 15, 2026"
        },
        {
            title: "Expansión Global: Nuevos nodos en LATAM y Europa",
            category: "Comunicados de prensa",
            image: "/Unifyprotocol.jpg",
            date: "Enero 28, 2026"
        },
        {
            title: "Seguridad y Soberanía: Cómo protegemos los activos de datos",
            category: "Liderazgo de pensamiento",
            image: "/Unifydc.jpg",
            date: "Enero 12, 2026"
        }
    ];

    return (
        <div className="font-funnel no-select w-full bg-white text-black min-h-screen relative overflow-x-hidden">
            {/* HEADER — Glassmorphism Blind Menu */}
            <Navbar subtitle="Sala de Prensa" />

            <main className="pt-[140px] md:pt-[200px] px-5 md:px-10 max-w-[1800px] mx-auto">
                {/* HERO SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
                    <div className="md:col-span-8">
                        <h1 className="text-7xl md:text-[120px] font-medium tracking-tighter leading-[0.85] uppercase">
                            Sala de prensa
                        </h1>
                    </div>
                    <div className="md:col-span-4 flex items-end">
                        <p className="text-xl md:text-2xl font-light leading-snug text-black/80">
                            Las últimas noticias, comunicados de prensa, blogs y demostraciones de Centhropy.
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

                {/* NEWS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 pb-32">
                    {newsItems.map((item, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="aspect-[16/9] w-full overflow-hidden mb-8 border border-black/5">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                                />
                            </div>
                            <div className="flex flex-col gap-4">
                                <span className="text-[10px] font-bold text-black/40 uppercase tracking-[0.4em]">{item.category}</span>
                                <h2 className="text-4xl md:text-5xl font-medium tracking-tighter uppercase leading-[0.9] group-hover:text-black/60 transition-colors">
                                    {item.title}
                                </h2>
                                <div className="pt-4 flex items-center gap-2 group/btn">
                                    <span className="text-xs font-bold uppercase tracking-widest border-b border-black/20 pb-1 group-hover/btn:border-black transition-all">Leer más</span>
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

export default Newsroom;
