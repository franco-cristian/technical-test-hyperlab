import { PropsWithChildren } from 'react';
import { Head } from '@inertiajs/react';
import { Home, Search, Plus, Send, Bell } from 'lucide-react';
import { clsx } from 'clsx';

export default function DashboardLayout({ title, children }: PropsWithChildren<{ title: string }>) {
    return (
        <div className="fixed inset-0 bg-black flex justify-center items-center font-sans">
            <Head title={title} />
            <main
                className={clsx(
                    'w-full h-full',
                    'sm:w-[430px] sm:h-[95vh] sm:max-h-[932px] sm:rounded-[3rem] sm:border sm:border-gray-800',
                    'flex flex-col relative bg-black overflow-hidden shadow-2xl',
                )}
            >
                <div className="flex-1 overflow-y-auto no-scrollbar pb-28 relative">{children}</div>

                <div className="absolute bottom-6 left-6 right-6 bg-[#121212] border border-white/10 rounded-full h-[60px] flex items-center justify-between px-6 z-50">
                    <button className="text-white hover:text-brand transition-colors">
                        <Home size={22} />
                    </button>
                    <button className="text-gray-500 hover:text-white transition-colors">
                        <Search size={22} />
                    </button>
                    <button className="text-white hover:scale-105 transition-transform">
                        <Plus size={28} strokeWidth={3} />
                    </button>
                    <button className="text-gray-500 hover:text-white transition-colors">
                        <Send size={22} />
                    </button>
                    <button className="text-gray-500 hover:text-white transition-colors">
                        <Bell size={22} />
                    </button>
                </div>

                <style>{`
                    .no-scrollbar::-webkit-scrollbar { display: none; }
                    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                `}</style>
            </main>
        </div>
    );
}
