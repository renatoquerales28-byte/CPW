import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Activity, ShieldCheck, Zap, Globe, Cpu, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CenthropyApp = () => {
    const containerRef = useRef(null);
    const hudRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [openModule, setOpenModule] = useState(0);
    const [activeService, setActiveService] = useState(0);
    const [metrics, setMetrics] = useState({
        coordX: "12.45° N",
        coordY: "88.10° E",
        progress: "66%",
        entropy: "0.003%",
        freq: "144.02 MHZ",
        xover: "0.12%",
        heat: "32°C",
        drift: "0.4ms",
        entropyMini: "LOW",
        timer: "00:00:00",
        vSync: "STABLE",
        latency: "0.12ms",
        secBit: "SECURED",
        meshNet: "SYNCED"
    });

    const leftModules = [
        {
            l: 'Metric_01',
            w: 'Control',
            desc: 'Gestión centralizada de flujos de datos con monitorización en tiempo real y protocolos de seguridad de última generación.'
        },
        {
            l: 'Logic_02',
            w: 'Optimización',
            desc: 'Refinamiento continuo de procesos mediante algoritmos inteligentes que reducen la latencia y maximizan la eficiencia.'
        },
        {
            l: 'Core_03',
            w: 'Escalabilidad',
            desc: 'Arquitectura modular diseñada para crecer junto a sus necesidades, integrando nuevos nodos sin interrupciones.'
        },
        {
            l: 'Goal_04',
            w: 'Crecimiento',
            desc: 'Estrategias de expansión impulsadas por datos que identifican oportunidades de mercado y optimizan el rendimiento.'
        },
        {
            l: 'Yield_05',
            w: 'Rentabilidad',
            desc: 'Maximización del retorno de inversión mediante la reducción de costes operativos y optimización de recursos.'
        }
    ];

    // 100% FAITHFUL REPLICA OF THE HTML MOCKUP THREE.JS LOGIC
    useEffect(() => {
        if (!containerRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        containerRef.current.innerHTML = '';
        containerRef.current.appendChild(renderer.domElement);

        const organismGroup = new THREE.Group();
        scene.add(organismGroup);

        const ringCount = 145;
        const segments = 220;
        const rings = [];
        const sphereRadius = 12.8;

        for (let i = 0; i < ringCount; i++) {
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array((segments + 1) * 3);
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

            const t = i / ringCount;
            const poleFactor = Math.sin(t * Math.PI);
            const material = new THREE.LineBasicMaterial({
                color: 0x000000,
                transparent: true,
                opacity: poleFactor * 0.4
            });

            const line = new THREE.Line(geometry, material);
            const latitude = t * Math.PI - Math.PI / 2;

            rings.push({
                mesh: line,
                lat: latitude,
                id: i,
                baseRadius: sphereRadius * Math.cos(latitude)
            });
            organismGroup.add(line);
        }

        const targetAnchor = new THREE.Vector3(5.5, 4.5, 5.5);
        camera.position.set(0, 0, 48);

        let frameId;
        const animate = () => {
            frameId = requestAnimationFrame(animate);
            const time = performance.now() * 0.001;

            rings.forEach((ring) => {
                const positions = ring.mesh.geometry.attributes.position.array;
                const lat = ring.lat;
                const rBase = ring.baseRadius;

                if (rBase < 0.1) return;

                for (let j = 0; j <= segments; j++) {
                    const lon = (j / segments) * Math.PI * 2;
                    const wave =
                        Math.sin(lon * 4 + time + ring.id * 0.1) * 0.4 +
                        Math.cos(lat * 7 - time * 0.4) * 0.25;

                    const r = rBase + wave;
                    positions[j * 3] = Math.cos(lon) * r;
                    positions[j * 3 + 1] = Math.sin(lat) * sphereRadius + (wave * 0.3);
                    positions[j * 3 + 2] = Math.sin(lon) * r;
                }
                ring.mesh.geometry.attributes.position.needsUpdate = true;
            });

            organismGroup.rotation.y = time * 0.08;
            organismGroup.rotation.x = Math.sin(time * 0.1) * 0.05;

            if (hudRef.current) {
                const vector = targetAnchor.clone();
                vector.applyMatrix4(organismGroup.matrixWorld);
                vector.project(camera);

                const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
                const y = (vector.y * -0.5 + 0.5) * window.innerHeight;

                hudRef.current.style.transform = `translate(${x}px, ${y}px)`;
                hudRef.current.style.opacity = (vector.z < 1) ? "1" : "0";
            }

            renderer.render(scene, camera);
        };

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.position.set(0, 0, 48);
        };

        const container = containerRef.current;
        window.addEventListener('resize', handleResize);
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(frameId);
            if (container) container.innerHTML = '';
            rings.forEach(ring => {
                ring.mesh.geometry.dispose();
                ring.mesh.material.dispose();
            });
            renderer.dispose();
        };
    }, []);

    // Scroll Inertia Effect (Responsive & Aggressive)
    const [scrollInertia, setScrollInertia] = useState(0);
    const [introInertia, setIntroInertia] = useState(0);
    const scrollPos = useRef(0);
    const inertiaRef = useRef(0);
    const frameIdRef = useRef(null);

    useEffect(() => {
        scrollPos.current = window.pageYOffset;

        const handleScroll = () => {
            const currentPos = window.pageYOffset;
            const diff = currentPos - scrollPos.current;
            inertiaRef.current = diff * 0.25;
            scrollPos.current = currentPos;
        };

        const updateInertia = () => {
            // Physics for the movements
            inertiaRef.current *= 0.96; // Silkier decay
            if (Math.abs(inertiaRef.current) < 0.01) inertiaRef.current = 0;

            // Standard inertia for components (more responsive)
            setScrollInertia(prev => prev + (inertiaRef.current - prev) * 0.1);

            // ULTRA SMOOTH inertia for the main Intro (The "Floating" effect)
            setIntroInertia(prev => prev + (inertiaRef.current - prev) * 0.025);

            frameIdRef.current = requestAnimationFrame(updateInertia);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        frameIdRef.current = requestAnimationFrame(updateInertia);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
        };
    }, []);

    // Metrics Logic - FULLY DYNAMIC & REALISTIC
    useEffect(() => {
        const interval = setInterval(() => {
            const time = performance.now() * 0.001;
            const now = new Date();
            setMetrics(prev => ({
                ...prev,
                coordX: (12.45 + Math.sin(time) * 0.01).toFixed(2) + "° N",
                coordY: (88.10 + Math.cos(time) * 0.01).toFixed(2) + "° E",
                progress: (40 + Math.sin(time * 1.5) * 30).toFixed(0) + "%",
                entropy: (0.003 + Math.random() * 0.0005).toFixed(4) + "%",
                freq: (144.00 + Math.random() * 1.5).toFixed(2) + " MHZ",
                xover: (0.10 + Math.random() * 0.05).toFixed(2) + "%",
                heat: Math.floor(31 + Math.sin(time * 0.5) * 4) + "°C",
                drift: (0.3 + Math.random() * 0.15).toFixed(2) + "ms",
                entropyMini: Math.random() > 0.95 ? "STABLE" : "LOW",
                timer: `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`,
                vSync: Math.random() > 0.98 ? "RE-SYNC" : "STABLE",
                latency: (0.10 + Math.random() * 0.04).toFixed(2) + "ms",
                secBit: Math.random() > 0.99 ? "ENCRYPTING" : "SECURED",
                meshNet: Math.random() > 0.97 ? "OPTIMIZING" : "SYNCED"
            }));
        }, 80);

        // Status panel scroll monitoring (currently just logic, state was unused)
        const handleScroll = () => {
            const statusPanel = document.getElementById('status-panel');
            if (statusPanel) {
                // Logic for potential status panel effects could go here
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            clearInterval(interval);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="font-funnel no-select w-full bg-white text-black min-h-screen relative overflow-x-hidden">
            {/* CANVAS LAYER (Lowest) */}
            <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none" />

            {/* HEADER — Glassmorphism Blind Menu */}
            <header className={`fixed inset-x-0 top-0 z-[10000] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${menuOpen
                ? 'h-screen bg-black'
                : 'h-[72px] md:h-[84px] backdrop-blur-[12px] bg-white/82'
                }`}>

                {/* TOP BAR — always visible, never moves */}
                <div className="flex justify-between items-center w-full max-w-[1800px] mx-auto px-5 md:px-10 h-[72px] md:h-[84px] shrink-0">
                    <Link to="/" className="flex items-center gap-6 pointer-events-auto">
                        <span className={`text-2xl font-black tracking-tighter leading-none transition-colors duration-500 ${menuOpen ? 'text-white' : 'text-black'}`}>Centhropy</span>
                        <div className={`hidden md:block h-6 w-[1.5px] transition-colors duration-500 ${menuOpen ? 'bg-white/20' : 'bg-black/20'}`}></div>
                        <span className={`hidden sm:block text-[11px] font-funnel font-bold tracking-[0.25em] transition-colors duration-500 uppercase ${menuOpen ? 'text-white' : 'text-black'}`}>
                            Unified Data Engine
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
                                        <a href="#" className="text-3xl font-medium text-white hover:text-white/60 transition-colors uppercase tracking-tighter">GET STARTED</a>
                                        <div className="flex flex-col gap-5">
                                            <a href="#" className="text-3xl font-medium text-white hover:text-white/60 transition-colors">↳ Unify Protocol</a>
                                            <a href="#" className="text-3xl font-medium text-white hover:text-white/60 transition-colors">↳ Unify Data Center</a>
                                            <a href="#" className="text-3xl font-medium text-white hover:text-white/60 transition-colors">↳ Unify Agent</a>
                                            <a href="#" className="text-3xl font-medium text-white hover:text-white/60 transition-colors">↳ Unify Team</a>
                                        </div>
                                    </div>
                                    <a href="#" className="text-3xl font-medium text-white hover:text-white/60 transition-colors uppercase tracking-tighter">Estudios de Impacto</a>
                                    <Link to="/newsroom" className="text-3xl font-medium text-white hover:text-white/60 transition-colors uppercase tracking-tighter">Últimas Noticias</Link>
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
                                    <Link to="/newsroom" className="text-[10px] font-bold text-white uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white transition-all">Newsroom ↗</Link>
                                </div>

                                <div className="flex flex-col gap-12">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 group cursor-pointer">
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
                                    </div>

                                    <div className="flex flex-col gap-8 pt-12 border-t border-white/5">
                                        <div className="flex justify-between items-end">
                                            <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] block">Anuncio Corporativo</span>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 group cursor-pointer">
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* COLUMN 3: OFFERINGS & IMPACT (4 Cols) */}
                        <div className="md:col-span-4 flex flex-col gap-12 pl-4">
                            <div>
                                <div className="flex justify-between items-end mb-8">
                                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] block">Estudio de Impacto</span>
                                    <a href="#" className="text-[10px] font-bold text-white uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white transition-all">Ver todos ↗</a>
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

            {/* LEFT SIDE ACCORDION (Interactive Layer) */}
            <div className="fixed left-0 top-1/2 -translate-y-1/2 pl-12 z-[1000] flex flex-col h-[65vh] pointer-events-none py-2">
                {leftModules.map((item, i) => (
                    <React.Fragment key={i}>
                        <div className="flex flex-col relative pointer-events-auto w-[350px] group">
                            <div
                                className="cursor-pointer select-none flex items-center gap-4 transition-all duration-300 ease-out"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setOpenModule(openModule === i ? null : i);
                                }}
                            >
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-3">
                                        <span className={`text-2xl font-bold uppercase transition-all duration-300 ${openModule === i ? 'text-black' : 'text-black/80 hover:text-black'}`}>
                                            {item.w}
                                        </span>
                                        <div className={`transition-transform duration-500 ${openModule === i ? 'rotate-90' : 'rotate-0'}`}>
                                            <ChevronRight size={18} className="text-black" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* EXPANSION CONTENT - GRID HEIGHT TRICK */}
                            <div
                                className={`grid transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${openModule === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                            >
                                <div className="overflow-hidden">
                                    <div className="relative mt-2 py-2 w-full pr-4">
                                        <span className="text-[9px] font-funnel text-black/40 mb-2 tracking-[0.2em] uppercase block font-bold">{item.l}</span>
                                        <p className="text-[13px] font-funnel font-medium leading-relaxed text-black/80 whitespace-normal">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CENTERED SEPARATOR LINE (Invisible spacer to maintain structure) */}
                        {i !== leftModules.length - 1 && (
                            <div className="flex-1 flex items-center pointer-events-none">
                                <div className="w-32 h-[1px] bg-transparent" />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>


            {/* RIGHT SIDE DATA HUD */}
            <div className="fixed right-0 top-1/2 -translate-y-1/2 pr-10 hidden lg:flex flex-col items-end text-right justify-between h-[65vh] pointer-events-none text-black z-[1000] py-2">
                {[
                    { icon: <Activity size={14} />, label: 'Data Stream', m1: 'V_SYNC', v1: metrics.vSync, m2: 'FREQ', v2: metrics.freq },
                    { icon: <Cpu size={14} />, label: 'Analytic Engine', m1: 'X_OVER', v1: metrics.xover, m2: 'HEAT', v2: metrics.heat },
                    { icon: <Globe size={14} />, label: 'Global Sync', m1: 'DRIFT', v1: metrics.drift, m2: 'ENTROPY', v2: metrics.entropyMini },
                    { icon: <ShieldCheck size={14} />, label: 'Quantum Vault', m1: 'SEC_BIT', v1: metrics.secBit, m2: 'NODE', v2: 'X-07' },
                    { icon: <Zap size={14} />, label: 'Link Status', m1: 'LATENCY', v1: metrics.latency, m2: 'MESH', v2: metrics.meshNet }
                ].map((mod, i) => (
                    <div key={i} className="flex flex-col border-r border-black/20 pr-6 items-end">
                        <span className="text-[11px] font-funnel font-bold flex items-center gap-2 text-black uppercase tracking-tighter">
                            {mod.icon} {mod.label}
                        </span>
                        <div className="flex flex-col font-funnel text-[10px] text-black">
                            <div className="flex justify-between w-48 border-b border-black/10 py-1.5 flex-row-reverse">
                                <span>{mod.m1}</span><span className="font-bold">{mod.v1}</span>
                            </div>
                            <div className="flex justify-between w-48 border-b border-black/10 py-1.5 flex-row-reverse">
                                <span>{mod.m2}</span><span className="font-bold">{mod.v2}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* FLOATING SPHERE HUD */}
            <div ref={hudRef} className="fixed top-0 left-0 pointer-events-none opacity-0 transform-gpu z-[40]">
                <div className="relative flex items-center justify-center mb-1">
                    <div className="absolute w-6 h-6 border border-black/20 rounded-full animate-ping"></div>
                    <div className="w-2.5 h-2.5 bg-black rounded-full border border-white"></div>
                </div>
                <div className="tactical-card p-3 min-w-[180px] flex flex-col gap-2">
                    <div className="flex justify-between items-start border-b border-black/10 pb-1.5">
                        <div className="flex flex-col">
                            <span className="text-[9px] font-funnel font-bold text-gray-500 uppercase leading-none">Node</span>
                            <span className="text-[11px] font-bold uppercase tracking-tight">Core Insight</span>
                        </div>
                        <span className="text-[8px] font-funnel bg-black text-white px-1 py-0.5 whitespace-nowrap">X-7</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex justify-between text-[8px] font-funnel uppercase text-gray-500">
                            <span>Lat. Core</span>
                            <span className="text-black font-bold">{metrics.coordX}</span>
                        </div>
                        <div className="flex justify-between text-[8px] font-funnel uppercase text-gray-500">
                            <span>Lon. Core</span>
                            <span className="text-black font-bold">{metrics.coordY}</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 pt-1">
                        <div className="w-full h-0.5 bg-black/10 relative overflow-hidden">
                            <div className="absolute inset-y-0 left-0 bg-black" style={{ width: metrics.progress }}></div>
                        </div>
                        <div className="flex justify-between text-[7px] font-funnel uppercase pt-0.5">
                            <span>{metrics.timer}</span>
                            <span className="text-gray-500 tracking-tighter">Active Sync</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* CONTENT LAYER (Scrollable) */}
            <main className="relative z-[5000] w-full pointer-events-none">
                {/* SPACER FOR HERO */}
                <section className="h-screen" />

                <div id="status-panel" className="relative z-[5000] bg-white pointer-events-auto">
                    <div className="w-full px-5 py-12 md:px-10 md:pt-32 md:pb-0 bg-white">
                        <div className="max-w-[1800px] mx-auto">
                            {/* STATUS RECAP MINI */}
                            <div className="flex flex-wrap justify-between gap-8 font-funnel text-[10px] uppercase tracking-[0.2em] border-b border-black/10 pb-12 mb-24 text-black">
                                <div className="flex flex-col gap-1">
                                    <span className="text-black/30">Sync Status</span>
                                    <span className="font-bold flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" /> CORE_OPTIMIZED
                                    </span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-black/30">Encryption</span>
                                    <span className="font-bold">UNIFY_VAULT_ACTIVE</span>
                                </div>
                                <div className="flex flex-col gap-1 text-right">
                                    <span className="text-black/30">Location</span>
                                    <span className="font-bold uppercase">Multi-Node_Global</span>
                                </div>
                            </div>

                            {/* HIGH IMPACT INTRO */}
                            <div className="max-w-6xl mx-auto mb-32 text-center">
                                <h2 className="text-3xl md:text-[64px] font-normal tracking-tight leading-[1.0] text-black flex flex-col gap-0">
                                    {[
                                        "Ecosistema que optimiza",
                                        "decisiones en tiempo real en",
                                        "organizaciones de alto valor,",
                                        "al mismo tiempo que son potenciadas",
                                        "con inteligencia de datos avanzada"
                                    ].map((line, i) => (
                                        <span
                                            key={i}
                                            className="block aria-hidden:true will-change-transform"
                                            style={{
                                                transform: `translateY(${-introInertia * (8 + i * 2.5)}px)`
                                            }}
                                        >
                                            {line}
                                        </span>
                                    ))}
                                </h2>
                            </div>

                            {/* ENERGY ARROW GUIDE */}
                            <div className="flex justify-center mb-32">
                                <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                                    {/* Background Path (Duct) */}
                                    <path d="M10 5L30 25L50 5" stroke="black" strokeWidth="1.5" strokeOpacity="0.1" strokeLinecap="round" strokeLinejoin="round" />
                                    {/* Energy Path (Moving Light) */}
                                    <path d="M10 5L30 25L50 5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="energy-path" />
                                </svg>
                            </div>

                            {/* COMPONENT SEGMENTS */}
                            <div className="flex flex-col">
                                {[
                                    { id: 'SYS.01', t1: 'Unify', t2: 'Protocol', short: 'UP', desc: 'Protocolo de ontología diseñado para descifrar el pulso de vida de las organizaciones con un grado de precisión militar.' },
                                    { id: 'SYS.02', t1: 'Unify Data', t2: 'Center', short: 'DC', desc: 'Centro de unificación y análisis avanzado de datos con una interfaz simplificada y controlable por cualquier perfil corporativo.' },
                                    { id: 'SYS.03', t1: 'Unify', t2: 'Agent', short: 'UA', desc: 'Agente de inteligencia avanzada de datos, es un copiloto ideal para la toma de decisiones ágiles centradas en el crecimiento, la optimización y el control.' },
                                    { id: 'SYS.04', t1: 'Unify', t2: 'Team', short: 'UT', desc: 'Equipo de élite especializado en Data-Driven-Growth y enfocado en garantizar la confiabilidad de todo el ecosistema Unify.' }
                                ].map((comp, idx) => (
                                    <div key={idx} className="flex flex-col md:flex-row items-center border-t border-black/10 py-16 md:py-32 gap-24 group transition-all duration-500 hover:bg-black/[0.01]">
                                        {/* DESC & ID */}
                                        <div className="w-full md:w-[240px] flex flex-col gap-6">
                                            <span className="text-[14px] font-bold text-black font-funnel">{comp.id}</span>
                                            <p className="text-[15px] font-normal leading-relaxed text-black max-w-[240px]">
                                                {comp.desc}
                                            </p>
                                        </div>

                                        {/* BG MOTIF & IMAGE HOVER */}
                                        <div className="hidden md:flex flex-1 justify-center items-center relative h-[250px] overflow-hidden">
                                            {/* Initial MAYUS text (UP, DC, etc) */}
                                            <span className="text-[220px] font-black text-black/[0.02] leading-none select-none tracking-tighter transition-all duration-700 group-hover:opacity-0 group-hover:scale-95">
                                                {comp.short}
                                            </span>

                                            {/* Sliding Illustration Banner (Emerging for SYS.01, SYS.02, SYS.03 & SYS.04) */}
                                            {(idx === 0 || idx === 1 || idx === 2 || idx === 3) && (
                                                <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
                                                    <div className="w-0 group-hover:w-[450px] transition-all duration-700 ease-in-out flex items-center justify-end overflow-hidden opacity-0 group-hover:opacity-100 origin-right border border-black/10 bg-black">
                                                        <img
                                                            src={
                                                                idx === 0 ? "/Unifyprotocol.jpg" :
                                                                    idx === 1 ? "/Unifydc.jpg" :
                                                                        idx === 2 ? "/Unifyagent3.0.jpg" :
                                                                            "/Unifyteam.jpg"
                                                            }
                                                            alt={`${comp.t1} ${comp.t2} Illustration`}
                                                            className="h-auto block"
                                                            style={{ width: '450px', minWidth: '450px' }}
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* MAIN TITLE */}
                                        <div className="w-full md:w-[500px] text-left md:text-right">
                                            <div
                                                className="will-change-transform"
                                                style={{ transform: `translateY(${-scrollInertia * 0.4}px)` }}
                                            >
                                                <h4 className="text-5xl md:text-[100px] font-black tracking-tighter uppercase leading-[0.8] text-black transition-transform duration-700 group-hover:translate-x-[-20px]">
                                                    {comp.t1} <br />
                                                    <span className="text-black">{comp.t2}</span>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* SERVICES / PRODUCTS SECTION */}
                            <div className="mt-48 mb-32">
                                {/* SECTION HEADER */}
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/40 mb-4">Sistemas de Crecimiento</span>
                                        <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Soluciones</h3>
                                    </div>
                                    <div className="max-w-xs md:text-right">
                                        <p className="text-xs md:text-sm font-medium uppercase tracking-widest text-black/60 leading-tight">
                                            Impulsamos el control, la optimización y la expansión de organizaciones en el sector del eCommerce y Retail
                                        </p>
                                    </div>
                                </div>

                                {/* DYNAMIC HORIZONTAL ACCORDION */}
                                <div className="flex flex-col md:flex-row gap-4 h-[600px] w-full">
                                    {[
                                        {
                                            id: 'SERV.01',
                                            title: 'Unify Data Center',
                                            subtitle: 'Centro de Datos y Decisiones',
                                            desc: 'Ontología de negocio personalizada para estandarizar datos y transformar información en oportunidades reales de crecimiento mediante IA avanzada.',
                                            features: ['Insights to Growth', 'Advanced Analytics', 'Intelligent Agent']
                                        },
                                        {
                                            id: 'SERV.02',
                                            title: 'TI Outsourcing',
                                            subtitle: 'Digitalización de Datos',
                                            desc: 'Gestión integral de infraestructura de datos: desde la ingesta y pipelines hasta almacenamiento con políticas de respaldo y RAG para acceso rápido.',
                                            features: ['Conexiones e Ingesta', 'Almacenamiento & Backup', 'Gestión de Documentos']
                                        },
                                        {
                                            id: 'SERV.03',
                                            title: 'Retail Intelligence',
                                            subtitle: 'Intelligent eCommerce',
                                            desc: 'Gestión 360° de eCommerce: desarrollo, operación estratégica y métricas accionables integradas al ecosistema Unify para maximizar la conversión.',
                                            features: ['Desarrollo & Operación', 'Integración Unify', 'Investigación & Estrategia']
                                        }
                                    ].map((service, sIdx) => {
                                        const isActive = sIdx === activeService;
                                        return (
                                            <div
                                                key={service.id}
                                                onClick={() => setActiveService(sIdx)}
                                                onMouseEnter={() => setActiveService(sIdx)}
                                                className={`relative cursor-pointer transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] bg-black overflow-hidden flex flex-col p-10 group ${isActive ? 'flex-[4]' : 'flex-[1]'}`}
                                            >
                                                {/* SERVICE ID & TAG */}
                                                <div className="flex justify-between items-start z-10">
                                                    <span className={`text-[10px] font-bold tracking-[0.4em] uppercase transition-all duration-700 ${isActive ? 'text-white/60 translate-x-0' : 'text-white/10 -translate-x-2'}`}>
                                                        {service.id}
                                                    </span>
                                                    <div className={`w-1.5 h-1.5 rounded-full bg-white transition-all duration-700 ${isActive ? 'opacity-100 scale-125' : 'opacity-10 scale-50'}`} />
                                                </div>

                                                {/* CONTENT BOX */}
                                                <div className="mt-auto flex flex-col z-10 w-full">
                                                    {/* SMALL LABEL — visible only when INACTIVE */}
                                                    <h4 className={`font-black uppercase tracking-tighter text-sm md:text-xl text-white ${isActive ? 'opacity-0 transition-none pointer-events-none' : 'opacity-100 transition-opacity duration-300 ease-out'
                                                        }`}>
                                                        {service.title}
                                                    </h4>

                                                    {/* LARGE HEADING — visible only when ACTIVE */}
                                                    <h4 className={`font-black uppercase tracking-tighter text-5xl md:text-7xl text-white mb-4 ${isActive
                                                        ? 'opacity-100 translate-y-0 transition-all duration-700 delay-[150ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-auto'
                                                        : 'opacity-0 translate-y-16 transition-none absolute pointer-events-none'
                                                        }`}>
                                                        {service.title}
                                                    </h4>

                                                    {/* STAGGERED CONTENT REVEAL */}
                                                    <div className={`flex flex-col transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-12 pointer-events-none absolute'}`}>
                                                        <span className={`text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] block mb-6 transition-all duration-700 delay-[100ms] ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                                            {service.subtitle}
                                                        </span>
                                                        <p className={`text-white/70 text-lg font-medium leading-tight mb-8 max-w-xl transition-all duration-700 delay-[200ms] ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                                            {service.desc}
                                                        </p>

                                                        <div className={`flex flex-wrap gap-3 transition-all duration-700 delay-[300ms] ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                                            {service.features.map(f => (
                                                                <span key={f} className="text-[8px] font-bold uppercase tracking-[0.2em] border border-white/10 px-3 py-1.5 text-white/40 bg-white/5 hover:bg-white/10 transition-colors duration-300">
                                                                    {f}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* BG DECOR NUMERAL */}
                                                <div className={`absolute -bottom-10 -right-10 text-[280px] font-black leading-none select-none pointer-events-none transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'text-white/[0.04] translate-y-0 rotate-0 scale-100' : 'text-white/[0.01] translate-y-40 rotate-12 scale-110'}`}>
                                                    0{sIdx + 1}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* FOOTER CALL TO ACTION STYLE */}
                            <div className="mt-24 py-8 border-t border-black flex justify-between items-center">
                                <div className="flex flex-col">
                                    <h5 className="text-6xl font-black uppercase tracking-tighter leading-none">Get Started</h5>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center group cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
                                        <ChevronRight size={32} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CenthropyApp;
