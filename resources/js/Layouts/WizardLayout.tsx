import { PropsWithChildren } from 'react';
import { Head, Link } from '@inertiajs/react';
import { ChevronLeft } from 'lucide-react';
import { clsx } from 'clsx';
import ProgressBar from '@/Components/Onboarding/ProgressBar';

interface Props {
    title: string;
    progress?: number;
    backUrl?: string;
    hideIndicator?: boolean;
}

export default function WizardLayout({
    title,
    children,
    progress,
    backUrl,
    hideIndicator = false,
}: PropsWithChildren<Props>) {
    return (
        <div className="fixed inset-0 bg-black flex justify-center items-center font-sans">
            <Head title={title} />

            <main
                className={clsx(
                    'w-full h-full',
                    'sm:w-[430px] sm:h-[95vh] sm:max-h-[932px] sm:rounded-[3rem] sm:border sm:border-gray-800',
                    'flex flex-col relative bg-black overflow-hidden shadow-2xl',
                )}
                style={{ backgroundColor: '#000000' }}
            >
                <header className="pt-8 px-6 pb-2 shrink-0 z-20">
                    <div className="h-2 mb-4 flex items-center">
                        {progress !== undefined ? (
                            <ProgressBar progress={progress} />
                        ) : (
                            <div className="w-full h-1" />
                        )}
                    </div>

                    <div className="h-10 flex items-center">
                        {backUrl && (
                            <Link
                                href={backUrl}
                                className="text-white hover:text-gray-300 transition-colors p-2 -ml-2 rounded-full hover:bg-white/10"
                            >
                                <ChevronLeft size={28} />
                            </Link>
                        )}
                    </div>
                </header>

                <div className="flex-1 flex flex-col px-6 pb-14 sm:pb-16">{children}</div>

                {!hideIndicator && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full pointer-events-none z-30" />
                )}
            </main>
        </div>
    );
}
