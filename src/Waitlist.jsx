import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const InfoSquareIcon = ({ className }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
        className={className}
    >
        <path d="M3 3h18v18H3z" />
        <line x1="12" y1="16" x2="12" y2="11" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
);

const shimmerStyle = `
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
.shimmer-text {
  background: linear-gradient(90deg, #9ca3af 20%, #111 50%, #9ca3af 80%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 5s linear infinite;
  display: block;
  width: 100%;
}
`;

const Waitlist = () => {
    return (
        <div className="font-funnel bg-white text-black selection:bg-black selection:text-white min-h-screen flex items-center justify-center p-6 md:p-12 overflow-x-hidden relative">
            <style>{shimmerStyle}</style>

            {/* Logo at the top */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20">
                <Link to="/" className="text-2xl font-black tracking-tighter hover:text-black/70 transition-colors text-black block">Centhropy</Link>
            </div>

            {/* Info Icon top right - Sharp Edges & Hover Card */}
            <div className="absolute top-12 right-8 md:right-12 z-20 group">
                <InfoSquareIcon className="w-6 h-6 text-gray-300 group-hover:text-black transition-colors cursor-pointer" />

                {/* Tactical Info Card */}
                <div className="absolute top-10 right-0 w-64 bg-white border border-black p-5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 pointer-events-none transition-all duration-300 z-30">
                    <div className="mb-3 flex justify-between items-center border-b border-black/10 pb-2">
                        <span className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-black">Protocol_Justification</span>
                        <span className="text-[9px] font-mono text-black/30">[01]</span>
                    </div>
                    <p className="text-[10px] font-mono leading-relaxed text-gray-600 uppercase tracking-wider text-justify">
                        Nuestra lista de espera actúa como filtro de integridad y control de calidad para asegurar una respuesta operativa de alta precisión y personalizada para cada entidad admitida.
                    </p>
                    <div className="mt-4 pt-2 border-t border-black/5">
                        <span className="text-[8px] font-mono italic text-black/40">Exclusividad funcional autogestionada.</span>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-lg animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both pt-12">

                <form className="space-y-8 bg-white" autoComplete="off" onSubmit={(e) => e.preventDefault()}>
                    {/* Full Name */}
                    <div className="group relative">
                        <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-gray-400 group-focus-within:text-black transition-colors block mb-1">
                            Nombre y Apellido
                        </label>
                        <input type="text" placeholder="Ej. Alex Mercer"
                            className="w-full bg-transparent border-b border-black/20 py-3 text-lg font-medium rounded-none outline-none focus:border-black transition-all placeholder:text-black/30 placeholder:font-light text-black" />
                    </div>

                    {/* Organization */}
                    <div className="group relative">
                        <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-gray-400 group-focus-within:text-black transition-colors block mb-1">
                            Nombre de la Organización
                        </label>
                        <input type="text" placeholder="Centhropy Inc."
                            className="w-full bg-transparent border-b border-black/20 py-3 text-lg font-medium rounded-none outline-none focus:border-black transition-all placeholder:text-black/30 placeholder:font-light text-black" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Sector */}
                        <div className="group relative">
                            <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-gray-400 group-focus-within:text-black transition-colors block mb-1">
                                Sector Específico
                            </label>
                            <input type="text" placeholder="Fintech / AI"
                                className="w-full bg-transparent border-b border-black/20 py-3 text-lg font-medium rounded-none outline-none focus:border-black transition-all placeholder:text-black/30 placeholder:font-light text-black" />
                        </div>

                        {/* Email */}
                        <div className="group relative">
                            <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-gray-400 group-focus-within:text-black transition-colors block mb-1">
                                Correo de Contacto
                            </label>
                            <input type="email" placeholder="contact@domain.com"
                                className="w-full bg-transparent border-b border-black/20 py-3 text-lg font-medium rounded-none outline-none focus:border-black transition-all placeholder:text-black/30 placeholder:font-light text-black" />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                        <button type="submit"
                            className="w-full bg-black text-white py-5 font-black uppercase tracking-[0.3em] text-sm hover:bg-gray-900 transition-all active:scale-[0.98] rounded-none group flex items-center justify-center gap-3">
                            <span>Ingresar</span>
                            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="shimmer-text text-[10px] mt-8 text-center font-mono uppercase tracking-widest leading-relaxed">
                            Será evaluado y contactado por nuestro departamento de<br />integración estratégica.
                        </p>
                    </div>
                </form>

            </div>

            {/* Bottom Footer Section - Centered in column */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-lg px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[8px] font-mono text-black/30 tracking-[0.2em] uppercase animate-in fade-in duration-1000 delay-500 fill-mode-both border-t border-black/5 pt-8">
                <span>Authenticity_Guaranteed</span>
                <Link to="/" className="hover:text-black transition-colors border-b border-black/10 pb-0.5">VOLVER AL HOME</Link>
                <span>Secure_Layer_v.04</span>
            </div>
        </div>
    );
};

export default Waitlist;
