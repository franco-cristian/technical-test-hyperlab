import { clsx } from 'clsx';

interface Props {
    progress: number;
    className?: string;
}

export default function ProgressBar({ progress, className }: Props) {
    return (
        <div className={clsx('w-full h-1.5 bg-gray-800 rounded-full overflow-hidden', className)}>
            <div
                className="h-full bg-brand transition-all duration-500 ease-out rounded-full shadow-[0_0_10px_rgba(255,0,79,0.5)]"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}
