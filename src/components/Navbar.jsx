import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = ({ subtitle = "Unified Data Engine" }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={`fixed inset-x-0 top-0 z-[10000] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${menuOpen
            ? 'h-screen bg-black'
            : 'h-[72px] md:h-[84px] backdrop-blur-[12px] bg-white/82'
            }`}>

            {/* TOP BAR — always visible, never moves */}
            <div className="flex justify-between items-center w-full max-w-[1800px] mx-auto px-5 md:px-10 h-[72px] md:h-[84px] shrink-0">
                <Link to="/" className="flex items-center gap-6 pointer-events-auto" onClick={() => setMenuOpen(false)}>
                    <Logo
                        menuOpen={menuOpen}
                        className={menuOpen ? 'text-white' : 'text-black'}
                    />
                    <div className={`hidden md:block h-[34px] w-[1.5px] translate-y-[2px] transition-colors duration-500 ${menuOpen ? 'bg-white/20' : 'bg-black/20'}`}></div>
                    <span className={`hidden sm:block text-[11px] font-funnel font-bold tracking-[0.25em] transition-colors duration-500 uppercase translate-y-[3px] ${menuOpen ? 'text-white' : 'text-black/60'}`}>
                        {subtitle}
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

            {/* EXPANDED MENU CONTENT — MODULAR DESIGN */}
            <div className={`px-5 md:px-16 pt-12 pb-16 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${menuOpen ? 'opacity-100 translate-y-0 delay-[150ms]' : 'opacity-0 -translate-y-6 pointer-events-none'
                }`} style={{ height: 'calc(100vh - 84px)' }}>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 h-screen max-w-[1800px] mx-auto overflow-y-auto pb-24 no-scrollbar">
                    {/* COLUMN 1: NAVIGATION (4 Cols) */}
                    <div className="md:col-span-3 flex flex-col gap-12">
                        <div>
                            <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] mb-6 block">Navegación</span>
                            <nav className="flex flex-col gap-9">
                                <div className="flex flex-col gap-4">
                                    <Link to="/waitlist" onClick={() => setMenuOpen(false)} className="text-3xl font-medium text-white hover:text-white/60 transition-colors uppercase tracking-tighter">GET STARTED</Link>
                                    <div className="flex flex-col gap-5">
                                        <a href="#" className="text-3xl font-medium text-white hover:text-white/60 transition-colors">↳ Unify Protocol</a>
                                        <a href="#" className="text-3xl font-medium text-white hover:text-white/60 transition-colors">↳ Unify Data Center</a>
                                        <a href="#" className="text-3xl font-medium text-white hover:text-white/60 transition-colors">↳ Unify Agent</a>
                                        <a href="#" className="text-3xl font-medium text-white hover:text-white/60 transition-colors">↳ Unify Team</a>
                                    </div>
                                </div>
                                <Link to="/impact-studies" onClick={() => setMenuOpen(false)} className="text-3xl font-medium text-white hover:text-white/60 transition-colors uppercase tracking-tighter">Estudios de Impacto</Link>
                                <Link to="/newsroom" onClick={() => setMenuOpen(false)} className="text-3xl font-medium text-white hover:text-white/60 transition-colors uppercase tracking-tighter">Últimas Noticias</Link>
                                <a href="#" className="text-3xl font-medium text-white hover:text-white/60 transition-colors uppercase tracking-tighter">Documentación</a>
                                <a href="#" className="text-3xl font-medium text-white hover:text-white/60 transition-colors uppercase tracking-tighter">Careers</a>
                            </nav>
                        </div>
                    </div>

                    {/* COLUMN 2: NEWS (5 Cols) */}
                    <div className="md:col-span-5 flex flex-col gap-12 border-x border-white/5 px-8">
                        <div>
                            <div className="flex justify-between items-end mb-8">
                                <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] block">Últimas Noticias</span>
                                <Link to="/newsroom" onClick={() => setMenuOpen(false)} className="text-[10px] font-bold text-white uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white transition-all">Newsroom ↗</Link>
                            </div>

                            <div className="flex flex-col gap-12">
                                <Link to="/blog/unify-agent-3-release" onClick={() => setMenuOpen(false)} className="grid grid-cols-1 sm:grid-cols-2 gap-6 group cursor-pointer border border-transparent hover:border-white/5 transition-all">
                                    <div className="aspect-video overflow-hidden border border-white/10">
                                        <img src="/Unifyagent3.0.jpg" alt="News 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                    <div className="flex flex-col justify-between py-1">
                                        <div>
                                            <span className="text-[9px] font-bold text-white/30 uppercase mb-2 block tracking-widest">Febrero 21, 2026</span>
                                            <h5 className="text-lg font-medium text-white leading-tight mb-2 group-hover:text-white/70 transition-colors">Centhropy lanza Unify Agent 3.0: El futuro de la IA en Retail.</h5>
                                            <p className="text-xs text-white/40 line-clamp-2 font-funnel font-light">Nuestro nuevo agente predictivo optimiza la cadena de suministros en tiempo real.</p>
                                        </div>
                                        <span className="text-[10px] font-bold text-white mt-4 flex items-center gap-1">↳ Leer más</span>
                                    </div>
                                </Link>

                                <div className="flex flex-col gap-8 pt-12 border-t border-white/5">
                                    <div className="flex justify-between items-end">
                                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] block">Anuncio Corporativo</span>
                                    </div>
                                    <Link to="/blog/global-expansion" onClick={() => setMenuOpen(false)} className="grid grid-cols-1 sm:grid-cols-2 gap-6 group cursor-pointer border border-transparent hover:border-white/5 transition-all">
                                        <div className="aspect-video overflow-hidden border border-white/10">
                                            <img src="/Unifyprotocol.jpg" alt="News 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        </div>
                                        <div className="flex flex-col justify-between py-1">
                                            <div>
                                                <h5 className="text-lg font-medium text-white leading-tight mb-2 group-hover:text-white/70 transition-colors">Expansión Global: Nuevos nodos en LATAM y Europa.</h5>
                                                <p className="text-xs text-white/40 line-clamp-2 font-funnel font-light">Centhropy refuerza su infraestructura de datos para soportar operaciones transcontinentales.</p>
                                            </div>
                                            <span className="text-[10px] font-bold text-white mt-4 flex items-center gap-1">↳ Leer más</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COLUMN 3: OFFERINGS & IMPACT (4 Cols) */}
                    <div className="md:col-span-4 flex flex-col gap-12 pl-4">
                        <div>
                            <div className="flex justify-between items-end mb-8">
                                <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] block">Estudio de Impacto</span>
                                <Link to="/impact-studies" onClick={() => setMenuOpen(false)} className="text-[10px] font-bold text-white uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white transition-all">Ver todos ↗</Link>
                            </div>
                            <div className="group cursor-pointer">
                                <p className="text-xl font-light text-white/70 leading-snug mb-8 group-hover:text-white transition-colors uppercase tracking-tighter">
                                    Nuestras plataformas son utilizadas para ayudar a organizaciones de alto valor a resolver los problemas más difíciles en tiempo real.
                                </p>
                                <div className="aspect-[4/3] w-full overflow-hidden border border-white/10 mb-6">
                                    <img src="/Unifydc.jpg" alt="Impact Study" className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em]">Retail Intelligence // Case_07</span>
                                    <span className="text-sm font-bold text-white">Optimizando Decisiones en el Sector Farmacéutico Global</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
