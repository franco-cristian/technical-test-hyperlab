import { TextareaHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: string;
    label?: string;
}

const WizardTextarea = forwardRef<HTMLTextAreaElement, Props>(
    ({ className, error, label, id, ...props }, ref) => {
        return (
            <div className="w-full flex flex-col gap-1">
                {label && (
                    <label htmlFor={id} className="sr-only">
                        {label}
                    </label>
                )}

                <textarea
                    {...props}
                    id={id}
                    ref={ref}
                    style={{
                        backgroundColor: '#212121',
                        color: '#FFFFFF',
                        caretColor: '#FF0061',
                    }}
                    className={clsx(
                        'w-full min-h-[140px] rounded-[16px] p-4 border-0 font-medium resize-none',
                        'placeholder:text-gray-500 placeholder:font-normal',
                        'focus:ring-2 focus:ring-white/20 transition-all outline-none',
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

WizardTextarea.displayName = 'WizardTextarea';
export default WizardTextarea;
