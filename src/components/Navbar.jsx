import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import useIsMobile from '../hooks/useIsMobile';

const Navbar = ({ subtitle = "Unified Data Engine" }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const isMobile = useIsMobile();


    return (
        <header className={`fixed top-0 left-0 right-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${menuOpen
            ? 'h-screen bg-black'
            : 'h-[72px] md:h-[84px] backdrop-blur-[12px] bg-white/82'
            }`}
            style={{ zIndex: 10000 }}>

            {/* TOP BAR — always visible, never moves */}
            <div className="flex justify-between items-center w-full max-w-[1800px] mx-auto px-5 md:px-10 h-[72px] md:h-[84px] shrink-0 relative z-50">
                <Link to="/" className="flex items-center gap-6 pointer-events-auto" onClick={() => setMenuOpen(false)}>
                    <Logo
                        menuOpen={menuOpen}
                        className={menuOpen ? 'text-white' : 'text-black'}
                    />
                    <div className={`hidden md:block h-[34px] w-[1.5px] transition-colors duration-500 ${menuOpen ? 'bg-white/20' : 'bg-black/20'}`}></div>
                    <span className={`hidden sm:block text-[11px] font-funnel font-bold tracking-[0.25em] transition-colors duration-500 uppercase ${menuOpen ? 'text-white' : 'text-black/60'}`}>
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

            <div className={`px-5 md:px-10 pt-24 pb-12 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobile ? 'overflow-y-auto' : 'overflow-y-auto'} no-scrollbar ${menuOpen ? 'opacity-100 translate-y-0 delay-[150ms]' : 'opacity-0 -translate-y-6 pointer-events-none'
                }`} style={{ height: 'calc(100vh - 0px)', position: 'absolute', top: 0, left: 0, right: 0 }}>

                {isMobile ? (
                    /* MOBILE MENU — Optimized for vertical mobile flow */
                    <div className="flex flex-col gap-10 pb-32 no-scrollbar scroll-smooth">
                        {/* NAVIGATION */}
                        <div className="flex flex-col gap-10">
                            <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] block text-left">Navegación</span>
                            <nav className="flex flex-col gap-9">
                                <div className="flex flex-col gap-5">
                                    <Link to="/waitlist" onClick={() => setMenuOpen(false)} className="text-3xl font-medium text-white uppercase tracking-tighter">GET STARTED</Link>
                                    <div className="flex flex-col gap-5 text-white/80">
                                        <a href="#" className="text-2xl font-light">↳ Unify Protocol</a>
                                        <a href="#" className="text-2xl font-light">↳ Unify Data Center</a>
                                        <a href="#" className="text-2xl font-light">↳ Unify Agent</a>
                                        <a href="#" className="text-2xl font-light">↳ Unify Team</a>
                                    </div>
                                </div>
                                <Link to="/impact-studies" onClick={() => setMenuOpen(false)} className="text-3xl font-medium text-white uppercase tracking-tighter">Estudios de Impacto</Link>
                                <Link to="/newsroom" onClick={() => setMenuOpen(false)} className="text-3xl font-medium text-white uppercase tracking-tighter">Últimas Noticias</Link>
                                <a href="#" className="text-3xl font-medium text-white uppercase tracking-tighter">Documentación</a>
                                <a href="#" className="text-3xl font-medium text-white uppercase tracking-tighter">Careers</a>
                            </nav>
                        </div>

                        {/* SCROLL INDICATOR */}
                        <div className="flex justify-start py-2">
                            <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce-slow">
                                <path d="M10 5L30 25L50 5" stroke="white" strokeWidth="1.5" strokeOpacity="0.1" strokeLinecap="square" strokeLinejoin="miter" />
                                <path d="M10 5L30 25L50 5" stroke="white" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" className="energy-path" />
                            </svg>
                        </div>

                        {/* NEWS SECTION */}
                        <div className="flex flex-col gap-10 border-t border-white/10 pt-16">
                            <div className="flex justify-between items-end">
                                <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] block">Últimas Noticias</span>
                                <Link to="/newsroom" onClick={() => setMenuOpen(false)} className="text-[10px] font-bold text-white uppercase tracking-widest border-b border-white/20 pb-1">Newsroom ↗</Link>
                            </div>
                            <div className="flex flex-col gap-12">
                                <Link to="/blog/unify-agent-3-release" onClick={() => setMenuOpen(false)} className="flex flex-col gap-5">
                                    <div className="aspect-video overflow-hidden border border-white/10">
                                        <img src="/Unifyagent3.0.jpg" alt="News 1" className="w-full h-full object-cover" />
                                    </div>
                                    <h5 className="text-xl font-medium text-white leading-tight">Centhropy lanza Unify Agent 3.0: El futuro de la IA en Retail.</h5>
                                    <p className="text-sm text-white/40 font-light">Nuestro nuevo agente predictivo optimiza la cadena de suministros en tiempo real.</p>
                                </Link>
                            </div>
                        </div>

                        {/* IMPACT SECTION */}
                        <div className="flex flex-col gap-10 border-t border-white/10 pt-16">
                            <div className="flex justify-between items-end">
                                <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] block">Estudio de Impacto</span>
                                <Link to="/impact-studies" onClick={() => setMenuOpen(false)} className="text-[10px] font-bold text-white uppercase tracking-widest border-b border-white/20 pb-1">Ver todos ↗</Link>
                            </div>
                            <div className="flex flex-col gap-6">
                                <p className="text-2xl font-light text-white/70 leading-snug uppercase tracking-tighter">
                                    Plataformas para resolver problemas difíciles en tiempo real.
                                </p>
                                <div className="aspect-[4/3] w-full overflow-hidden border border-white/10 grayscale brightness-75">
                                    <img src="/Unifydc.jpg" alt="Impact Study" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Retail Intelligence // Case_07</span>
                                    <span className="text-base font-bold text-white">Optimizando Decisiones en el Sector Farmacéutico Global</span>
                                </div>
                            </div>
                        </div>

                        {/* FINAL CTA SECTION */}
                        <div className="flex flex-col gap-10 border-t border-white/10 pt-16">
                            <Link
                                to="/waitlist"
                                onClick={() => setMenuOpen(false)}
                                className="group flex justify-between items-center bg-black transition-all duration-500 py-4"
                            >
                                <span className="text-3xl font-medium uppercase tracking-tighter text-white">Get Started</span>
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:border-white transition-all">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                ) : (
                    /* DESKTOP MENU — 12-column grid layout */
                    <div className="grid grid-cols-12 gap-12 max-w-[1800px] mx-auto pb-12">
                        {/* COLUMN 1: NAVIGATION */}
                        <div className="col-span-3 flex flex-col gap-12">
                            <div>
                                <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] mb-6 block">Navegación</span>
                                <nav className="flex flex-col gap-9">
                                    <div className="flex flex-col gap-4">
                                        <Link to="/waitlist" onClick={() => setMenuOpen(false)} className="text-3xl font-medium text-white hover:text-white/60 transition-colors uppercase tracking-tighter">GET STARTED</Link>
                                        <div className="flex flex-col gap-3">
                                            <a href="#" className="text-2xl font-medium text-white hover:text-white/60 transition-colors">↳ Unify Protocol</a>
                                            <a href="#" className="text-2xl font-medium text-white hover:text-white/60 transition-colors">↳ Unify Data Center</a>
                                            <a href="#" className="text-2xl font-medium text-white hover:text-white/60 transition-colors">↳ Unify Agent</a>
                                            <a href="#" className="text-2xl font-medium text-white hover:text-white/60 transition-colors">↳ Unify Team</a>
                                        </div>
                                    </div>
                                    <Link to="/impact-studies" onClick={() => setMenuOpen(false)} className="text-3xl font-medium text-white hover:text-white/60 transition-colors uppercase tracking-tighter">Estudios de Impacto</Link>
                                    <Link to="/newsroom" onClick={() => setMenuOpen(false)} className="text-3xl font-medium text-white hover:text-white/60 transition-colors uppercase tracking-tighter">Últimas Noticias</Link>
                                    <a href="#" className="text-3xl font-medium text-white hover:text-white/60 transition-colors uppercase tracking-tighter">Documentación</a>
                                    <a href="#" className="text-3xl font-medium text-white hover:text-white/60 transition-colors uppercase tracking-tighter">Careers</a>
                                </nav>
                            </div>
                        </div>

                        {/* COLUMN 2: NEWS */}
                        <div className="col-span-5 flex flex-col gap-12 border-x border-white/10 px-8">
                            <div>
                                <div className="flex justify-between items-end mb-8">
                                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] block">Últimas Noticias</span>
                                    <Link to="/newsroom" onClick={() => setMenuOpen(false)} className="text-[10px] font-bold text-white uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white transition-all">Newsroom ↗</Link>
                                </div>
                                <div className="flex flex-col gap-12">
                                    {/* News Item 1 */}
                                    <Link to="/blog/unify-agent-3-release" onClick={() => setMenuOpen(false)} className="grid grid-cols-2 gap-6 group cursor-pointer">
                                        <div className="aspect-video overflow-hidden border border-white/10">
                                            <img src="/Unifyagent3.0.jpg" alt="News 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        </div>
                                        <div className="flex flex-col justify-between py-1">
                                            <div>
                                                <span className="text-[9px] font-bold text-white/30 uppercase mb-2 block tracking-widest">Febrero 21, 2026</span>
                                                <h5 className="text-lg font-medium text-white leading-tight mb-2 group-hover:text-white/70 transition-colors">Centhropy lanza Unify Agent 3.0: El futuro de la IA en Retail.</h5>
                                                <p className="text-xs text-white/40 line-clamp-2 font-funnel font-light">Nuestro nuevo agente predictivo optimiza la cadena de suministros en tiempo real.</p>
                                            </div>
                                        </div>
                                    </Link>

                                    {/* News Item 2 */}
                                    <Link to="/blog/security-protocols" onClick={() => setMenuOpen(false)} className="grid grid-cols-2 gap-6 group cursor-pointer">
                                        <div className="aspect-video overflow-hidden border border-white/10">
                                            <img src="/Unifydc.jpg" alt="News 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        </div>
                                        <div className="flex flex-col justify-between py-1">
                                            <div>
                                                <span className="text-[9px] font-bold text-white/30 uppercase mb-2 block tracking-widest">Enero 15, 2026</span>
                                                <h5 className="text-lg font-medium text-white leading-tight mb-2 group-hover:text-white/70 transition-colors">Implementación de Protocolos de Seguridad de Alta Fidelidad.</h5>
                                                <p className="text-xs text-white/40 line-clamp-2 font-funnel font-light">Reforzamos nuestra base operativa con nuevas capas de integridad de datos.</p>
                                            </div>
                                        </div>
                                    </Link>

                                    {/* Corporate Announcement Section */}
                                    <div className="flex flex-col gap-8 pt-4">
                                        <div className="flex justify-between items-end">
                                            <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] block">Anuncio Corporativo</span>
                                        </div>
                                        <Link to="/blog/global-expansion" onClick={() => setMenuOpen(false)} className="grid grid-cols-2 gap-6 group cursor-pointer">
                                            <div className="aspect-video overflow-hidden border border-white/10">
                                                <img src="/Unifyprotocol.jpg" alt="News 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                            </div>
                                            <div className="flex flex-col justify-between py-1">
                                                <div>
                                                    <h5 className="text-lg font-medium text-white leading-tight mb-2 group-hover:text-white/70 transition-colors">Expansión Global: Nuevos nodos en LATAM y Europa.</h5>
                                                    <p className="text-xs text-white/40 line-clamp-2 font-funnel font-light">Centhropy refuerza su infraestructura de datos para soportar operaciones transcontinentales.</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* COLUMN 3: OFFERINGS & IMPACT */}
                        <div className="col-span-4 flex flex-col gap-12 pl-4">
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
                )}
            </div>
        </header>
    );
};

export default Navbar;
