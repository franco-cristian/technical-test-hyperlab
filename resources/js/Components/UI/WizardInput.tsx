import { InputHTMLAttributes, forwardRef, ReactNode } from 'react';
import { clsx } from 'clsx';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    label?: string;
    endContent?: ReactNode;
}

const WizardInput = forwardRef<HTMLInputElement, Props>(
    ({ type = 'text', className, error, label, id, endContent, ...props }, ref) => {
        return (
            <div className="w-full flex flex-col gap-1">
                {label && (
                    <label htmlFor={id} className="sr-only">
                        {label}
                    </label>
                )}

                <div className="relative">
                    <input
                        {...props}
                        id={id}
                        type={type}
                        ref={ref}
                        style={{
                            backgroundColor: '#212121',
                            color: '#FFFFFF',
                            caretColor: '#FF0061',
                        }}
                        className={clsx(
                            'w-full h-14 rounded-[16px] px-4 border-0 font-medium',
                            'placeholder:text-gray-500 placeholder:font-normal',
                            'focus:ring-2 focus:ring-white/20 transition-all outline-none',
                            endContent ? 'pr-12' : '',
                            '[&:-webkit-autofill]:shadow-[0_0_0_1000px_#212121_inset]',
                            '[&:-webkit-autofill]:-webkit-text-fill-color:white',
                            error && 'ring-2 ring-red-500',
                            className,
                        )}
                    />

                    {endContent && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 flex items-center justify-center">
                            {endContent}
                        </div>
                    )}
                </div>

                {error && (
                    <span role="alert" className="text-red-500 text-[10px] ml-1 animate-pulse">
                        {error}
                    </span>
                )}
            </div>
        );
    },
);

WizardInput.displayName = 'WizardInput';
export default WizardInput;
