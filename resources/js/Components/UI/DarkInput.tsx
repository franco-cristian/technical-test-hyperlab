import { InputHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    label?: string;
}

const DarkInput = forwardRef<HTMLInputElement, Props>(
    ({ type = 'text', className, error, label, id, ...props }, ref) => {
        return (
            <div className="w-full flex flex-col gap-1">
                {label && (
                    <label htmlFor={id} className="sr-only">
                        {label}
                    </label>
                )}

                <input
                    {...props}
                    id={id}
                    type={type}
                    ref={ref}
                    style={{
                        backgroundColor: '#5F0B2F',
                        color: '#FFFFFF',
                        caretColor: '#FF0061',
                    }}
                    className={clsx(
                        'w-full h-14 rounded-[16px] px-4 border-0 font-medium',
                        'placeholder:text-[#F5EFF7] placeholder:opacity-80',
                        'focus:ring-2 focus:ring-white/20 transition-all outline-none',
                        '[&:-webkit-autofill]:shadow-[0_0_0_1000px_#5F0B2F_inset]',
                        '[&:-webkit-autofill]:-webkit-text-fill-color:white',
                        error && 'ring-2 ring-red-500',
                        className,
                    )}
                />

                {error && (
                    <span role="alert" className="text-red-500 text-[10px] ml-1 animate-pulse">
                        {error}
                    </span>
                )}
            </div>
        );
    },
);

DarkInput.displayName = 'DarkInput';
export default DarkInput;
