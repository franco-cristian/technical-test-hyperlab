import { ButtonHTMLAttributes, memo } from 'react';
import { clsx } from 'clsx';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
}

export default memo(function BrandButton({
    className,
    disabled,
    isLoading,
    children,
    ...props
}: Props) {
    return (
        <button
            {...props}
            disabled={disabled || isLoading}
            className={clsx(
                'w-full h-14 rounded-[16px] flex items-center justify-center',
                'font-bold text-base tracking-wide text-white',
                'bg-brand hover:bg-brand-hover transition-all duration-300',
                'active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-brand/30',
                'disabled:opacity-50 disabled:cursor-not-allowed hover:rounded-full',
                className,
            )}
        >
            {isLoading ? <span className="animate-pulse">...</span> : children}
        </button>
    );
});
