import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Share2, Bookmark } from 'lucide-react';

const BlogPost = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const post = {
        title: "Unify Agent 3.0: Redefiniendo la Inteligencia de Datos en Tiempo Real",
        subtitle: "Cómo nuestro nuevo agente predictivo está transformando la toma de decisiones en el sector Retail.",
        author: "Centhropy Engineering",
        date: "Febrero 21, 2026",
        readTime: "8 min read",
        category: "Tecnología",
        image: "/Unifyagent3.0.jpg"
    };

    return (
        <div className="bg-white min-h-screen font-funnel selection:bg-black selection:text-white">
            {/* MINI NAV (Sticky) */}
            <nav className={`fixed top-0 inset-x-0 z-[1000] transition-all duration-500 px-6 md:px-10 h-[72px] flex items-center justify-between ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-black/5' : 'bg-transparent'
                }`}>
                <Link to="/newsroom" className="flex items-center gap-2 group">
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-[11px] font-bold uppercase tracking-widest hidden sm:block">Volver a Sala de Prensa</span>
                </Link>

                <Link to="/" className="absolute left-1/2 -translate-x-1/2">
                    <span className="text-xl font-black tracking-tighter">Centhropy</span>
                </Link>

                <div className="flex items-center gap-6">
                    <button className="text-black/40 hover:text-black transition-colors">
                        <Share2 size={18} />
                    </button>
                    <button className="text-black/40 hover:text-black transition-colors">
                        <Bookmark size={18} />
                    </button>
                </div>
            </nav>

            <main className="pt-32 pb-24 px-6">
                <article className="max-w-[740px] mx-auto">
                    {/* HEADER */}
                    <header className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-2 py-0.5 bg-black text-white text-[10px] font-bold uppercase tracking-widest leading-none">
                                {post.category}
                            </span>
                            <div className="h-[1px] w-8 bg-black/10"></div>
                            <span className="text-[11px] font-medium text-black/40 uppercase tracking-widest">
                                {post.date}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-[56px] font-black tracking-tighter leading-[1.05] uppercase mb-6">
                            {post.title}
                        </h1>

                        <p className="text-xl md:text-2xl font-light text-black/60 leading-snug mb-8 uppercase tracking-tight">
                            {post.subtitle}
                        </p>

                        <div className="flex items-center justify-between border-y border-black/5 py-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">C</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold">{post.author}</span>
                                    <span className="text-xs text-black/40 flex items-center gap-1">
                                        <Clock size={12} /> {post.readTime}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* MAIN IMAGE */}
                    <figure className="mb-16 -mx-6 md:-mx-24 lg:-mx-40">
                        <div className="aspect-video w-full overflow-hidden border border-black/5">
                            <img src={post.image} alt="Unify Agent 3.0" className="w-full h-full object-cover" />
                        </div>
                        <figcaption className="text-center text-[11px] text-black/40 mt-4 uppercase tracking-widest">
                            Visualización conceptual de la arquitectura neuronal del Unify Agent 3.0
                        </figcaption>
                    </figure>

                    {/* CONTENT - USING UNNA FONT */}
                    <div className="font-unna text-xl md:text-[22px] leading-[1.6] text-black/90 space-y-8 prose prose-black max-w-none">
                        <p>
                            En el vertiginoso ecosistema del Retail moderno, la diferencia entre el éxito y la obsolescencia se mide en milisegundos. Hoy, Centhropy anuncia el lanzamiento oficial de <strong className="font-bold italic">Unify Agent 3.0</strong>, la evolución definitiva de nuestro motor de inteligencia predictiva.
                        </p>

                        <p>
                            A diferencia de los modelos analíticos tradicionales que se limitan a procesar información histórica, el Agente 3.0 opera en una dimensión de <span className="italic">ontología dinámica</span>. No solo entiende qué vendió su organización ayer; entiende por qué lo vendió y, lo más importante, predice con una precisión del 98.4% qué decisiones debe tomar hoy para maximizar la rentabilidad de mañana.
                        </p>

                        <h2 className="font-funnel font-black text-2xl md:text-3xl uppercase tracking-tighter pt-4 text-black italic">
                            Arquitectura sin precedentes
                        </h2>

                        <p>
                            El núcleo de esta nueva versión reside en su capacidad de integrar flujos masivos de datos desestructurados en una única verdad operativa. Mediante sistemas de <strong className="font-bold italic text-black underline decoration-black/20">búsqueda semántica y RAG (Retrieval-Augmented Generation)</strong>, el Agente 3.0 puede consultar petabytes de información en tiempo real para ofrecer respuestas accionables.
                        </p>

                        <blockquote className="border-l-[1.5px] border-black pl-8 py-2 font-unna italic text-2xl text-black md:-mx-12">
                            "No estamos construyendo un panel de control, estamos entregando un sistema nervioso autónomo para las organizaciones de alto valor."
                        </blockquote>

                        <p>
                            Para el sector Retail, esto se traduce en una optimización quirúrgica de la cadena de suministro, una personalización hiper-segmentada de la experiencia del cliente y la eliminación casi total de las ineficiencias logísticas.
                        </p>

                        <h3 className="font-funnel font-bold text-xl uppercase tracking-widest pt-4">
                            Control total por cualquier perfil
                        </h3>

                        <p>
                            Fieles a nuestra filosofía de diseño minimalista y simplicidad radical, el Agente 3.0 no requiere un equipo de científicos de datos para ser operado. Su interfaz intuitiva permite que cualquier perfil estratégico dentro de la organización pueda interactuar con el ecosistema Unify de manera natural, obteniendo <span className="p-1 tracking-tight">insights de crecimiento</span> instantáneos.
                        </p>

                        <p>
                            Este lanzamiento marca el inicio de una nueva era en <strong className="font-bold">Centhropy</strong>. Una donde la infraestructura de datos deja de ser un gasto operativo para convertirse en el motor principal de la expansión global.
                        </p>
                    </div>

                    {/* FOOTER OF POST */}
                    <footer className="mt-20 pt-10 border-t border-black/5 flex flex-col items-center gap-8">
                        <div className="flex gap-4">
                            {['Data', 'AI', 'Retail', 'Strategy'].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-black/5 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all cursor-pointer">
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/40">Sigue explorando</span>
                            <Link to="/newsroom" className="text-3xl font-black tracking-tighter hover:opacity-50 transition-opacity uppercase">
                                Sala de Prensa ↗
                            </Link>
                        </div>
                    </footer>
                </article>
            </main>

            {/* LIGHT FOOTER */}
            <footer className="py-20 px-6 border-t border-black/5 bg-black/[0.02]">
                <div className="max-w-[740px] mx-auto flex justify-between items-center text-black/30 text-[10px] font-bold uppercase tracking-[0.3em]">
                    <span>© 2026 Centhropy</span>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-black transition-colors">Twitter</a>
                        <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default BlogPost;
