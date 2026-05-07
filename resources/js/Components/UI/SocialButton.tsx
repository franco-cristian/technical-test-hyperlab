import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: ReactNode;
}

export default function SocialButton({ className, children, icon, ...props }: Props) {
    return (
        <button
            {...props}
            className={clsx(
                'w-full py-3.5 px-6 rounded-2xl flex items-center justify-center gap-3',
                'bg-transparent border border-gray-700 text-white font-medium',
                'transition-all duration-300 hover:bg-white/5 hover:border-gray-500',
                'active:scale-[0.98]',
                className,
            )}
        >
            {icon && <span className="w-5 h-5 flex items-center justify-center">{icon}</span>}
            <span>{children}</span>
        </button>
    );
}
