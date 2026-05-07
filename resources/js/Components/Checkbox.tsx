import { InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';

export default function Checkbox({
    className = '',
    ...props
}: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            type="checkbox"
            className={clsx(
                'rounded border-gray-700 bg-brand-dark text-brand shadow-sm',
                'focus:ring-brand focus:ring-offset-brand-dark',
                'checked:bg-brand checked:border-brand',
                className,
            )}
        />
    );
}
