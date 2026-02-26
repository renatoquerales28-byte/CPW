import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Lock, Mail } from 'lucide-react';

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

const LoginDesktop = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const isFormValid = formData.email && formData.password;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="font-funnel bg-white text-black selection:bg-black selection:text-white min-h-screen flex items-center justify-center p-12 overflow-x-hidden relative">
            <style>{shimmerStyle}</style>

            {/* Brand Title at the top */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20">
                <Link to="/" className="hover:opacity-70 transition-opacity block whitespace-nowrap text-center">
                    <span className="text-3xl font-medium tracking-tighter text-black">Unify Data Center</span>
                </Link>
            </div>

            {/* Info Icon top right */}
            <div className="absolute top-12 right-12 z-20 group">
                <InfoSquareIcon className="w-6 h-6 text-gray-300 group-hover:text-black transition-colors cursor-pointer" />
                <div className="absolute top-10 right-0 w-64 bg-white border border-black p-5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 pointer-events-none transition-all duration-300 z-30">
                    <div className="mb-3 flex justify-between items-center border-b border-black/10 pb-2">
                        <span className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-black">ACCESS_PROTOCOL</span>
                        <span className="text-[9px] font-mono text-black/30">[02]</span>
                    </div>
                    <p className="text-[10px] font-mono leading-relaxed text-gray-600 uppercase tracking-wider text-justify">
                        Las credenciales de acceso a Unify Data Center no deben ser compartidas. Recomendamos mantener sus credenciales en secreto para una capa adicional de seguridad.
                    </p>
                    <p className="text-[10px] font-mono font-bold text-black uppercase tracking-wider mt-4">
                        EL ACCESO ESTÁ RESTRINGIDO A PERSONAL AUTORIZADO.
                    </p>
                </div>
            </div>

            <div className="w-full max-w-sm animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both pt-8">

                <form className="space-y-8 bg-white" autoComplete="off" onSubmit={(e) => e.preventDefault()}>
                    {/* Email */}
                    <div className="group relative">
                        <div className="flex justify-between items-center mb-1">
                            <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-gray-400 group-focus-within:text-black transition-colors">
                                EMAIL / USER
                            </label>
                            <Mail className="w-3 h-3 text-gray-300 group-focus-within:text-black transition-colors" />
                        </div>
                        <input
                            type="email"
                            placeholder="ejemplo@correo.com"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full bg-transparent border-b border-black/20 py-3 text-lg font-medium rounded-none outline-none focus:border-black transition-all placeholder:text-black/30 placeholder:font-light text-black"
                        />
                    </div>

                    {/* Password */}
                    <div className="group relative">
                        <div className="flex justify-between items-center mb-1">
                            <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-gray-400 group-focus-within:text-black transition-colors">
                                Contraseña
                            </label>
                            <Lock className="w-3 h-3 text-gray-300 group-focus-within:text-black transition-colors" />
                        </div>
                        <input
                            type="password"
                            placeholder="••••••••"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full bg-transparent border-b border-black/20 py-3 text-lg font-medium rounded-none outline-none focus:border-black transition-all placeholder:text-black/30 placeholder:font-light text-black"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={!isFormValid}
                            className={`w-full py-5 font-medium uppercase tracking-[0.3em] text-sm transition-all rounded-none group flex items-center justify-center gap-3 active:scale-[0.98] ${isFormValid
                                ? "bg-black text-white hover:bg-gray-900"
                                : "bg-transparent border border-black text-black cursor-not-allowed opacity-50"
                                }`}
                        >
                            <span>Iniciar Sesión</span>
                            <ChevronRight className={`w-4 h-4 transform transition-transform ${isFormValid ? "group-hover:translate-x-1" : ""}`} />
                        </button>
                    </div>

                    {/* Meta Links */}
                    <div className="flex flex-col gap-8 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="h-[1px] bg-black/10 flex-grow"></div>
                            <span className="text-[9px] font-mono text-black/30 uppercase tracking-[0.2em]">O INGRESA A LA LISTA</span>
                            <div className="h-[1px] bg-black/10 flex-grow"></div>
                        </div>

                        <Link
                            to="/waitlist"
                            className="w-full py-4 bg-black text-white hover:bg-gray-900 flex items-center justify-center transition-all"
                        >
                            <span className="text-sm font-medium uppercase tracking-[0.3em]">WAITLIST</span>
                        </Link>
                    </div>

                    <p className="shimmer-text text-[10px] mt-8 text-center font-mono uppercase tracking-widest leading-relaxed">
                        Será evaluado y contactado por nuestro departamento<br />de integración estratégica.
                    </p>
                </form>
            </div>

            {/* Bottom Footer Section */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-sm flex justify-between items-center text-[8px] font-mono text-black/30 tracking-[0.2em] uppercase animate-in fade-in duration-1000 delay-500 fill-mode-both">
                <span>Auth_Protocol_Active</span>
                <Link to="/" className="hover:text-black transition-colors border-b border-black/10 pb-0.5">VOLVER A HOME</Link>
                <span>Encrypted_Session</span>
            </div>
        </div>
    );
};

export default LoginDesktop;
