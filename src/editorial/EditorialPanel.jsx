import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    FileText,
    Layers,
    LogOut,
    Plus,
    Trash2,
    Eye,
    EyeOff,
    Settings2,
    ChevronRight,
    Upload,
    CheckCircle2,
    AlertCircle,
    Edit,
    Image as ImageIcon,
    X
} from 'lucide-react';
import { useEditorial } from '../hooks/useEditorial';

const EditorialPanel = () => {
    const navigate = useNavigate();
    const { posts, slots, addPost, updatePost, deletePost, togglePostStatus, setSlot } = useEditorial();
    const [activeTab, setActiveTab] = useState('posts');
    const [isAddingPost, setIsAddingPost] = useState(false);
    const [editingPost, setEditingPost] = useState(null);

    // Auth Check
    useEffect(() => {
        const isAuth = localStorage.getItem('ces_authorized');
        if (!isAuth) navigate('/terminal-x92-core');
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('ces_authorized');
        navigate('/terminal-x92-core');
    };

    return (
        <div className="min-h-screen bg-black text-white font-funnel flex">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/25 flex flex-col bg-black">
                <div className="h-[120px] px-8 flex flex-col justify-center border-b border-white/25">
                    <div className="flex items-center gap-3 mb-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-[10px] font-mono tracking-[0.4em] font-medium text-white/80 uppercase">CES v4.1</span>
                    </div>
                    <h1 className="text-xl font-medium tracking-tighter uppercase whitespace-nowrap">Centhropy_Core</h1>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    <button
                        onClick={() => setActiveTab('posts')}
                        className={`w-full flex items-center gap-4 px-4 py-3 rounded-none transition-all group border ${activeTab === 'posts' ? 'bg-white text-black border-white' : 'hover:bg-white/10 text-gray-200 border-transparent'}`}
                    >
                        <FileText className="w-4 h-4" />
                        <span className="text-xs font-medium tracking-[0.2em] uppercase">Gestión_Posts</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('slots')}
                        className={`w-full flex items-center gap-4 px-4 py-3 rounded-none transition-all group border ${activeTab === 'slots' ? 'bg-white text-black border-white' : 'hover:bg-white/10 text-gray-200 border-transparent'}`}
                    >
                        <Layers className="w-4 h-4" />
                        <span className="text-xs font-medium tracking-[0.2em] uppercase">Control_Menú</span>
                    </button>
                </nav>

                <div className="p-6 border-t border-white/25">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-4 px-4 py-3 text-red-500 hover:bg-red-500/10 rounded-none transition-all border border-transparent hover:border-red-500/20"
                    >
                        <LogOut className="w-4 h-4" />
                        <span className="text-xs font-medium tracking-[0.2em] uppercase text-left">Cerrar_Frecuencia</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto bg-black">
                <header className="h-[120px] px-12 border-b border-white/25 flex justify-between items-center bg-black/80 backdrop-blur-md sticky top-0 z-10">
                    <div>
                        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-1 font-medium">
                            {activeTab === 'posts' ? 'Directorio de Contenido' : 'Arquitectura del Menú'}
                        </span>
                        <h2 className="text-3xl font-medium tracking-tighter uppercase text-white leading-none">
                            {activeTab === 'posts' ? 'Publicaciones' : 'Slots del Sistema'}
                        </h2>
                    </div>

                    {activeTab === 'posts' && (
                        <button
                            onClick={() => setIsAddingPost(true)}
                            className="bg-white text-black px-8 py-4 rounded-none font-medium text-xs tracking-[0.3em] uppercase flex items-center gap-4 hover:bg-gray-200 transition-all active:scale-95 shadow-lg shadow-white/5"
                        >
                            <Plus className="w-5 h-5" />
                            Nueva_Entrada
                        </button>
                    )}
                </header>

                <div className="p-12">
                    {activeTab === 'posts' ? (
                        <PostsList
                            posts={posts}
                            toggleStatus={togglePostStatus}
                            onDelete={deletePost}
                            onEdit={(post) => setEditingPost(post)}
                        />
                    ) : (
                        <MenuSlots
                            posts={posts}
                            slots={slots}
                            setSlot={setSlot}
                        />
                    )}
                </div>
            </main>

            {/* Post Modal (Add/Edit) */}
            {(isAddingPost || editingPost) && (
                <PostModal
                    initialData={editingPost}
                    onClose={() => {
                        setIsAddingPost(false);
                        setEditingPost(null);
                    }}
                    onSave={(data) => {
                        if (editingPost) {
                            updatePost(editingPost.id, data);
                        } else {
                            addPost(data);
                        }
                        setIsAddingPost(false);
                        setEditingPost(null);
                    }}
                />
            )}
        </div>
    );
};

/* Sub-components */

const PostsList = ({ posts, toggleStatus, onDelete, onEdit }) => {
    return (
        <div className="grid grid-cols-1 gap-6">
            {posts.map(post => (
                <div key={post.id} className="group relative bg-white/[0.03] border border-white/20 p-6 flex items-center gap-8 hover:border-white/50 transition-all">
                    <div className="w-32 h-20 bg-gray-950 border border-white/20 overflow-hidden flex-shrink-0">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                            <span className="text-[9px] font-mono text-white/70 uppercase tracking-widest font-medium">{post.type}</span>
                            <div className={`w-1.5 h-1.5 rounded-full ${post.status === 'active' ? 'bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]' : 'bg-red-500'}`}></div>
                        </div>
                        <h3 className="text-lg font-medium tracking-tight mb-1 text-white">{post.title}</h3>
                        <p className="text-sm text-gray-200 line-clamp-1 max-w-2xl font-light">{post.description}</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => onEdit(post)}
                            className="p-3 bg-white/5 hover:bg-white hover:text-black transition-all rounded-sm border border-white/20"
                            title="Editar"
                        >
                            <Edit className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => toggleStatus(post.id)}
                            className="p-3 bg-white/5 hover:bg-white hover:text-black transition-all rounded-sm border border-white/20"
                            title={post.status === 'active' ? 'Desactivar' : 'Activar'}
                        >
                            {post.status === 'active' ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                        <button
                            onClick={() => onDelete(post.id)}
                            className="p-3 bg-white/5 hover:bg-red-600 transition-all rounded-sm border border-white/20"
                            title="Eliminar"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

const MenuSlots = ({ posts, slots, setSlot }) => {
    const slotConfigs = [
        { id: 'news', label: 'Slot 01: Noticia Principal', icon: <FileText className="w-4 h-4" /> },
        { id: 'news2', label: 'Slot 02: Noticia Secundaria', icon: <FileText className="w-4 h-4" /> },
        { id: 'announcement', label: 'Slot 03: Anuncio Corporativo', icon: <AlertCircle className="w-4 h-4" /> },
        { id: 'impact', label: 'Slot 04: Estudios de Impacto', icon: <CheckCircle2 className="w-4 h-4" /> }
    ];

    const activePosts = posts.filter(p => p.status === 'active');

    return (
        <div className="space-y-12 max-w-4xl">
            {slotConfigs.map(config => {
                const selectedPost = posts.find(p => p.id === slots[config.id]);

                return (
                    <div key={config.id} className="border-l-2 border-white/25 pl-8 space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="text-white">{config.icon}</span>
                            <h4 className="text-xs font-mono font-medium tracking-[0.3em] uppercase text-gray-300">{config.label}</h4>
                        </div>

                        <div className="bg-white/[0.03] border border-white/20 p-8 rounded-sm">
                            <label className="text-[10px] text-gray-300 block mb-4 uppercase tracking-widest font-medium">Post Seleccionado</label>

                            <select
                                value={slots[config.id] || ''}
                                onChange={(e) => setSlot(config.id, e.target.value)}
                                className="w-full bg-black border border-white/20 p-4 rounded-none outline-none focus:border-white transition-all text-sm font-medium tracking-tight text-white hover:border-white/40 cursor-pointer"
                            >
                                <option value="">-- SELECCIONAR POST --</option>
                                {activePosts.map(p => (
                                    <option key={p.id} value={p.id}>{p.title}</option>
                                ))}
                            </select>

                            {selectedPost && (
                                <div className="mt-6 flex items-center gap-4 text-[10px] text-green-400 font-mono font-medium tracking-wider">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.4)]"></div>
                                    <span>VINCULADO CORRECTAMENTE A LA NAVEGACIÓN</span>
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const PostModal = ({ onClose, onSave, initialData }) => {
    const [formData, setFormData] = useState({
        title: initialData?.title || '',
        description: initialData?.description || '',
        type: initialData?.type || 'news',
        image: initialData?.image || ''
    });

    const [preview, setPreview] = useState(initialData?.image || null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                setFormData({ ...formData, image: base64String });
                setPreview(base64String);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-black/95 backdrop-blur-md">
            <div className="w-full max-w-3xl bg-black border border-white/40 p-12 relative shadow-2xl overflow-y-auto max-h-[90vh]">
                <button
                    onClick={onClose}
                    className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/20 rounded-full border border-white/10"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="mb-10">
                    <span className="text-[10px] font-mono text-gray-300 uppercase tracking-widest block mb-1 font-medium">Entrada de Sistema</span>
                    <h2 className="text-3xl font-medium tracking-tighter uppercase text-white">
                        {initialData ? 'Editar_Publicación' : 'Crear_Nueva_Publicación'}
                    </h2>
                </div>

                <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); onSave(formData); }}>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-[10px] text-gray-300 uppercase tracking-[0.2em] font-medium">Sección</label>
                                <select
                                    value={formData.type}
                                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                    className="w-full bg-transparent border-b border-white/40 py-3 outline-none focus:border-white transition-all text-sm text-white font-medium"
                                >
                                    <option value="news" className="bg-black">SALA DE PRENSA</option>
                                    <option value="announcement" className="bg-black">ANUNCIO CORPORATIVO</option>
                                    <option value="impact_study" className="bg-black">ESTUDIO DE IMPACTO</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] text-gray-300 uppercase tracking-[0.2em] font-medium">Imagen de Cabecera</label>
                                <div className="grid grid-cols-1 gap-4">
                                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/20 hover:border-white/40 hover:bg-white/5 transition-all cursor-pointer group">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <ImageIcon className="w-6 h-6 text-gray-400 group-hover:text-white mb-2" />
                                            <p className="text-[10px] text-gray-400 group-hover:text-white uppercase font-medium tracking-widest">Cargar desde equipo</p>
                                        </div>
                                        <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                                    </label>

                                    <div className="relative">
                                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[9px] text-white/30 font-medium uppercase">URL</div>
                                        <input
                                            type="text"
                                            placeholder="https://..."
                                            value={formData.image.startsWith('data:') ? 'Imagen local cargada' : formData.image}
                                            onChange={(e) => {
                                                setFormData({ ...formData, image: e.target.value });
                                                setPreview(e.target.value);
                                            }}
                                            disabled={formData.image.startsWith('data:')}
                                            className="w-full bg-transparent border border-white/20 pl-12 pr-4 py-3 outline-none focus:border-white transition-all text-[11px] text-white placeholder:text-white/10 disabled:opacity-50"
                                        />
                                        {formData.image.startsWith('data:') && (
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setFormData({ ...formData, image: '' });
                                                    setPreview(null);
                                                }}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-red-500 font-medium hover:underline"
                                            >
                                                BORRAR
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] text-gray-300 uppercase tracking-[0.2em] font-medium">Vista Previa Assets</label>
                            <div className="w-full h-full min-h-[180px] bg-white/[0.02] border border-white/10 flex items-center justify-center relative overflow-hidden group">
                                {preview ? (
                                    <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                                ) : (
                                    <div className="text-center">
                                        <ImageIcon className="w-8 h-8 text-white/10 mx-auto mb-2" />
                                        <span className="text-[9px] text-white/20 uppercase tracking-[0.3em]">Sin contenido visual</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 border-[20px] border-black/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] text-gray-300 uppercase tracking-[0.2em] font-medium">Título Publicación</label>
                        <input
                            type="text"
                            placeholder="ELEGIR UN TÍTULO IMPACTANTE..."
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="w-full bg-transparent border-b border-white/40 py-3 outline-none focus:border-white transition-all text-lg font-medium text-white placeholder:text-white/20"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] text-gray-300 uppercase tracking-[0.2em] font-medium">Descripción / Contenido</label>
                        <textarea
                            rows="4"
                            placeholder="ESCRIBIR AQUÍ..."
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="w-full bg-transparent border border-white/40 p-4 outline-none focus:border-white transition-all text-sm text-white font-light placeholder:text-white/10"
                            required
                        />
                    </div>

                    <button className="w-full py-5 bg-white text-black font-medium tracking-[0.4em] uppercase text-xs hover:bg-gray-200 transition-all active:scale-95 flex items-center justify-center gap-3 mt-4">
                        <Upload className="w-4 h-4" />
                        {initialData ? 'Actualizar_Contenido' : 'Publicar_En_Frecuencia'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditorialPanel;
