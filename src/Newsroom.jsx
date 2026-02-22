import React, { useState, useEffect } from 'react';
import { ArrowRight, Globe, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Newsroom = () => {
    const [menuOpen, setMenuOpen] = useState(false);

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
            {/* HEADER — Same as main app but simplified for Newsroom */}
            <header className={`fixed inset-x-0 top-0 z-[10000] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${menuOpen
                ? 'h-screen bg-black'
                : 'h-[72px] md:h-[84px] backdrop-blur-[12px] bg-white/82'
                }`}>

                <div className="flex justify-between items-center w-full max-w-[1800px] mx-auto px-5 md:px-10 h-[72px] md:h-[84px] shrink-0">
                    <Link to="/" className="flex items-center gap-4 pointer-events-auto">
                        <span className={`text-2xl font-black tracking-tighter leading-none transition-colors duration-500 ${menuOpen ? 'text-white' : 'text-black'}`}>Centhropy</span>
                        <div className={`h-6 w-[1.5px] transition-colors duration-500 ${menuOpen ? 'bg-white/20' : 'bg-black/20'}`}></div>
                        <span className={`text-[11px] font-funnel font-bold tracking-[0.25em] transition-colors duration-500 uppercase ${menuOpen ? 'text-white' : 'text-black/60'}`}>
                            Sala de Prensa
                        </span>
                    </Link>
                    <div
                        className="flex items-center pointer-events-auto cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <div className="w-8 h-8 flex flex-col items-end justify-center gap-1.5">
                            <span className={`h-[2px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${menuOpen ? 'w-6 rotate-45 translate-y-[5.5px] bg-white' : 'w-6 bg-black'
                                }`}></span>
                            <span className={`h-[2px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${menuOpen ? 'w-6 -rotate-45 -translate-y-[5.5px] bg-white' : 'w-4 bg-black'
                                }`}></span>
                        </div>
                    </div>
                </div>

                {/* MENU CONTENT — Replicated for consistency */}
                <div className={`px-5 md:px-16 pt-12 pb-16 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${menuOpen ? 'opacity-100 translate-y-0 delay-[150ms]' : 'opacity-0 -translate-y-6 pointer-events-none'
                    }`} style={{ height: 'calc(100vh - 84px)' }}>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 h-full max-w-[1800px] mx-auto overflow-y-auto pb-24 no-scrollbar">
                        {/* COLUMN 1: NAVIGATION */}
                        <div className="md:col-span-3 flex flex-col gap-12">
                            <div>
                                <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] mb-6 block">Navegación</span>
                                <nav className="flex flex-col gap-9">
                                    <div className="flex flex-col gap-4">
                                        <Link to="/" onClick={() => setMenuOpen(false)} className="text-3xl font-medium text-white hover:text-white/60 transition-colors uppercase tracking-tighter">Home</Link>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div className="text-3xl font-medium text-white/40 uppercase tracking-tighter">GET STARTED</div>
                                        <div className="flex flex-col gap-5">
                                            <a href="#" className="text-3xl font-medium text-white hover:text-white/60 transition-colors">↳ Unify Protocol</a>
                                            <a href="#" className="text-3xl font-medium text-white hover:text-white/60 transition-colors">↳ Unify Data Center</a>
                                            <a href="#" className="text-3xl font-medium text-white hover:text-white/60 transition-colors">↳ Unify Agent</a>
                                            <a href="#" className="text-3xl font-medium text-white hover:text-white/60 transition-colors">↳ Unify Team</a>
                                        </div>
                                    </div>
                                    <a href="#" className="text-3xl font-medium text-white hover:text-white/60 transition-colors uppercase tracking-tighter">Estudios de Impacto</a>
                                    <Link to="/newsroom" onClick={() => setMenuOpen(false)} className="text-3xl font-medium text-white hover:text-white/60 transition-colors uppercase tracking-tighter">Últimas Noticias</Link>
                                    <a href="#" className="text-3xl font-medium text-white hover:text-white/60 transition-colors uppercase tracking-tighter">Documentación</a>
                                    <a href="#" className="text-3xl font-medium text-white hover:text-white/60 transition-colors uppercase tracking-tighter">Careers</a>
                                </nav>
                            </div>
                        </div>

                        {/* ... simpler menu for now to keep focus on Newsroom content ... */}
                    </div>
                </div>
            </header>

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

            {/* FOOTER */}
            <footer className="bg-white border-t border-black/5 px-5 md:px-10 py-20 max-w-[1800px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                    <div>
                        <span className="text-3xl font-black tracking-tighter">Centhropy</span>
                        <p className="text-sm text-black/40 mt-4 max-w-xs">Building the global fabric for autonomous data intelligence.</p>
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
