import DashboardLayout from '@/Layouts/DashboardLayout';
import { usePage, Link } from '@inertiajs/react';
import {
    Heart,
    MapPin,
    ChevronDown,
    Bookmark,
    Send,
    Star,
    MoreHorizontal,
    User,
} from 'lucide-react';

export default function Dashboard() {
    return (
        <DashboardLayout title="Dashboard">
            <div className="flex flex-col w-full px-4 pt-8">
                <div className="flex items-center justify-between mb-6">
                    <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center bg-[#1A1A1A]">
                        <User size={18} className="text-white" />
                    </div>
                    <button className="bg-[#212121] hover:bg-white/10 transition-colors px-4 py-2 rounded-md text-xs font-bold text-white border border-transparent">
                        $300
                    </button>
                </div>

                <div className="flex gap-2 mb-8 overflow-x-auto no-scrollbar">
                    <button className="px-4 py-1.5 rounded-full border border-gray-600 text-[10px] text-white whitespace-nowrap bg-transparent">
                        Explorer
                    </button>
                    <button className="px-4 py-1.5 rounded-full border border-gray-600 text-[10px] text-gray-400 whitespace-nowrap hover:border-white hover:text-white transition-colors">
                        Mis Suscripciones
                    </button>
                    <button className="px-4 py-1.5 rounded-full border border-gray-600 text-[10px] text-gray-400 whitespace-nowrap hover:border-white hover:text-white transition-colors">
                        Trends
                    </button>
                    <button className="px-4 py-1.5 rounded-full border border-gray-600 text-[10px] text-gray-400 whitespace-nowrap hover:border-white hover:text-white transition-colors">
                        Marcadores
                    </button>
                </div>

                <div className="flex flex-col items-center mb-6">
                    <div className="flex items-center gap-4 text-[10px] text-gray-400 mb-6">
                        <span className="flex items-center gap-1">
                            <Heart size={12} /> 1K
                        </span>
                        <span className="flex items-center gap-1">
                            <div className="w-3 h-3 rounded-full border border-gray-400 flex items-center justify-center">
                                <User size={8} />
                            </div>{' '}
                            4K
                        </span>
                        <span className="flex items-center gap-1">
                            <MapPin size={12} /> Colombia
                        </span>
                    </div>

                    <div className="relative mb-3">
                        <div className="w-24 h-24 rounded-full border-[3px] border-brand p-1">
                            <img
                                src="/images/avatar-mariano.jpg"
                                alt="Mariano"
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                        <button className="absolute bottom-0 right-1 bg-brand text-white text-[12px] w-6 h-6 flex items-center justify-center rounded-full border-2 border-black hover:scale-110 transition-transform">
                            +
                        </button>
                    </div>

                    <h2 className="text-xl font-bold text-white flex items-center gap-1">
                        Mariano
                        <svg className="w-4 h-4 text-brand" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                    </h2>
                    <p className="text-xs text-gray-500">@mariano12</p>
                </div>

                <div className="flex justify-between items-center px-2 mb-4">
                    <div className="flex flex-col items-start">
                        <span className="text-[10px] text-gray-400 mb-1">Ganancias Netas</span>
                        <span className="text-2xl font-bold text-[#34A853]">300$</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] text-gray-400 mb-1">Suscripciones</span>
                        <span className="text-2xl font-bold text-white">1K</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] text-gray-400 mb-1">Propinas</span>
                        <span className="text-2xl font-bold text-white">189$</span>
                    </div>
                </div>

                <div className="bg-[#121212] rounded-[16px] flex justify-between items-center p-3 mb-8">
                    <div className="flex flex-col items-center flex-1">
                        <span className="text-xs font-bold text-brand mb-1">$0</span>
                        <span className="text-[8px] text-gray-500">Hoy</span>
                    </div>
                    <div className="flex flex-col items-center flex-1 border-x border-white/5">
                        <span className="text-xs font-bold text-brand mb-1">$0</span>
                        <span className="text-[8px] text-gray-500">Esta Semana</span>
                    </div>
                    <div className="flex flex-col items-center flex-1">
                        <span className="text-xs font-bold text-[#34A853] mb-1">$0</span>
                        <span className="text-[8px] text-gray-500">Este Mes</span>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-sm font-bold text-white">Ganancias</span>
                        <button className="flex items-center gap-1 bg-white hover:bg-gray-200 transition-colors text-black px-3 py-1 rounded-full text-[10px] font-bold">
                            Por mes <ChevronDown size={12} />
                        </button>
                    </div>

                    <div className="flex items-end h-36 w-full px-2 gap-2 sm:gap-3 relative">
                        {/* Agregamos h-full y justify-end a cada columna */}
                        <div className="flex flex-col justify-end items-center flex-1 h-full z-10 gap-2">
                            <div className="w-full bg-brand rounded-t-md h-[40%]" />
                            <span className="text-[10px] text-white shrink-0">L</span>
                        </div>
                        <div className="flex flex-col justify-end items-center flex-1 h-full z-10 gap-2">
                            <div className="w-full bg-brand rounded-t-md h-[60%]" />
                            <span className="text-[10px] text-white shrink-0">K</span>
                        </div>
                        <div className="flex flex-col justify-end items-center flex-1 h-full z-10 gap-2">
                            <div className="w-full bg-brand rounded-t-md h-[85%]" />
                            <span className="text-[10px] text-white shrink-0">M</span>
                        </div>
                        <div className="flex flex-col justify-end items-center flex-1 h-full z-10 gap-2">
                            <div className="w-full bg-brand rounded-t-md h-[30%]" />
                            <span className="text-[10px] text-white shrink-0">J</span>
                        </div>
                        <div className="flex flex-col justify-end items-center flex-1 h-full z-10 gap-2">
                            <div className="w-full bg-brand rounded-t-md h-[70%]" />
                            <span className="text-[10px] text-white shrink-0">V</span>
                        </div>
                        <div className="flex flex-col justify-end items-center flex-1 h-full z-10 gap-2">
                            <div className="w-full bg-[#34A853] rounded-t-md h-[100%] relative">
                                {/* Estrella ajustada para flotar arriba de la barra */}
                                <Star
                                    className="absolute -top-4 left-1/2 -translate-x-1/2 text-white fill-white"
                                    size={14}
                                />
                            </div>
                            <span className="text-[10px] text-white shrink-0">S</span>
                        </div>
                        <div className="flex flex-col justify-end items-center flex-1 h-full z-10 gap-2">
                            <div className="w-full bg-brand rounded-t-md h-[55%]" />
                            <span className="text-[10px] text-white shrink-0">D</span>
                        </div>

                        {/* Eje Y (Valores) ajustados visualmente para alinear con la base de las barras */}
                        <div className="flex flex-col justify-between items-end h-full text-[10px] text-gray-500 ml-2 pb-[22px]">
                            <span>$10</span>
                            <span>$5</span>
                            <span>$0</span>
                        </div>
                    </div>
                </div>

                <div className="bg-[#1C1C1E] rounded-xl p-4 min-h-[100px] mb-8 border border-white/5">
                    <p className="text-sm text-gray-300">Descripción del Usuario</p>
                </div>

                <div className="bg-[#121212] rounded-3xl overflow-hidden border border-white/5 mb-6">
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-2">
                            <img
                                src="/images/avatar-mariano.jpg"
                                alt="Mariano"
                                className="w-10 h-10 rounded-full object-cover border border-white/10"
                            />
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-white flex items-center gap-1">
                                    Mariano
                                    <svg
                                        className="w-3 h-3 text-brand"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </span>
                                <span className="text-[10px] text-gray-500">@mariano12</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                            <span className="text-xs font-bold text-white">1h</span>
                            <MoreHorizontal
                                size={20}
                                className="text-white hover:text-brand transition-colors cursor-pointer"
                            />
                        </div>
                    </div>

                    <div className="w-full bg-black">
                        <img
                            src="/images/avatar-mariano.jpg"
                            alt="Post"
                            className="w-full object-cover"
                        />
                    </div>

                    <div className="p-4">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <button className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full text-white text-xs font-bold hover:bg-white/20 transition-colors">
                                    <Heart size={14} fill="white" /> 1K
                                </button>
                                <button className="text-white hover:text-brand transition-colors">
                                    <Bookmark size={20} />
                                </button>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="flex items-center gap-1 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold text-white hover:border-white transition-colors">
                                    <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center text-[8px] font-bold">
                                        $
                                    </div>
                                    Tip
                                </button>
                                <button className="text-white hover:text-brand transition-colors">
                                    <Send size={20} />
                                </button>
                                <button className="bg-brand text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-brand-hover transition-colors">
                                    Comprar
                                </button>
                            </div>
                        </div>

                        <p className="text-xs text-white leading-relaxed font-medium">
                            Ya escuchaste mi nuevo tema?
                            <br />
                            @mariano12
                            <br />
                            <span className="text-brand">#abc #abcd #abcde</span>
                        </p>
                    </div>
                </div>

                <div className="w-full flex justify-center mb-8">
                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="text-red-500 text-xs font-bold border border-red-500/30 hover:bg-red-500 hover:text-white transition-colors px-6 py-2 rounded-full"
                    >
                        Cerrar Sesión
                    </Link>
                </div>
            </div>
        </DashboardLayout>
    );
}
