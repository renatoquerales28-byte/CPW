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

const LoginMobile = () => {
    const [isInfoOpen, setIsInfoOpen] = useState(false);
    const infoRef = React.useRef(null);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const isFormValid = formData.email && formData.password;

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (infoRef.current && !infoRef.current.contains(event.target)) {
                setIsInfoOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="font-funnel bg-white text-black selection:bg-black selection:text-white min-h-screen flex flex-col items-center p-6 pt-32 pb-24 overflow-x-hidden relative">
            <style>{shimmerStyle}</style>

            {/* Brand Title at the top */}
            <div className="absolute top-10 left-6 z-20">
                <Link to="/" className="hover:opacity-70 transition-opacity blockOrigin-left">
                    <span className="text-xl font-medium tracking-tighter text-black">Unify Data Center</span>
                </Link>
            </div>

            {/* Info Icon top right */}
            <div className="absolute top-10 right-6 z-20" ref={infoRef}>
                <button
                    onClick={() => setIsInfoOpen(!isInfoOpen)}
                    className="focus:outline-none"
                >
                    <InfoSquareIcon className={`w-6 h-6 transition-colors ${isInfoOpen ? 'text-black' : 'text-gray-300'}`} />
                </button>

                {/* Tactical Info Card */}
                <div className={`absolute top-10 right-0 w-64 bg-white border border-black p-5 transition-all duration-300 z-30 pointer-events-none ${isInfoOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
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

            <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both pt-4">

                <form className="space-y-10 bg-white" autoComplete="off" onSubmit={(e) => e.preventDefault()}>
                    {/* Email */}
                    <div className="group relative">
                        <div className="flex justify-between items-center mb-1">
                            <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 block">
                                EMAIL / USER
                            </label>
                            <Mail className="w-3 h-3 text-gray-300 transition-colors" />
                        </div>
                        <input
                            type="email"
                            placeholder="ejemplo@correo.com"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full bg-transparent border-b border-black/10 py-3 text-lg font-medium rounded-none outline-none focus:border-black transition-all placeholder:text-black/20 text-black"
                        />
                    </div>

                    {/* Password */}
                    <div className="group relative">
                        <div className="flex justify-between items-center mb-1">
                            <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 block">
                                Contraseña
                            </label>
                            <Lock className="w-3 h-3 text-gray-300 transition-colors" />
                        </div>
                        <input
                            type="password"
                            placeholder="••••••••"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full bg-transparent border-b border-black/10 py-3 text-lg font-medium rounded-none outline-none focus:border-black transition-all placeholder:text-black/20 text-black"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={!isFormValid}
                            className={`w-full py-5 font-medium uppercase tracking-[0.3em] text-xs transition-all rounded-none flex items-center justify-center gap-3 active:scale-[0.98] ${isFormValid
                                ? "bg-black text-white hover:bg-gray-900"
                                : "bg-transparent border border-black text-black cursor-not-allowed opacity-50"
                                }`}
                        >
                            <span>Iniciar Sesión</span>
                            <ChevronRight className={`w-4 h-4 transition-transform ${isFormValid ? "translate-x-0" : ""}`} />
                        </button>
                    </div>

                    {/* Meta Links */}
                    <div className="flex flex-col gap-10 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="h-[1px] bg-black/10 flex-grow"></div>
                            <span className="text-[8px] font-mono text-black/30 uppercase tracking-[0.1em]">O INGRESA A LA LISTA</span>
                            <div className="h-[1px] bg-black/10 flex-grow"></div>
                        </div>

                        <Link
                            to="/waitlist"
                            className="w-full py-4 bg-black text-white active:bg-gray-900 flex items-center justify-center transition-all"
                        >
                            <span className="text-xs font-medium uppercase tracking-[0.3em]">WAITLIST</span>
                        </Link>
                    </div>

                    <p className="shimmer-text text-[10px] mt-12 text-center font-mono uppercase tracking-widest leading-relaxed">
                        Será evaluado y contactado por nuestro departamento<br />de integración estratégica.
                    </p>
                </form>
            </div>

            {/* Bottom Footer Section */}
            <div className="mt-20 w-full flex flex-col items-center gap-8 text-[8px] font-mono text-black/20 tracking-[0.2em] uppercase pb-8">
                <Link to="/" className="text-black font-bold border-b border-black/20 pb-0.5 mb-2">VOLVER A HOME</Link>
                <div className="flex justify-between w-full px-4">
                    <span>Authenticity_Guaranteed</span>
                    <span>v.26</span>
                </div>
            </div>
        </div>
    );
};

export default LoginMobile;
