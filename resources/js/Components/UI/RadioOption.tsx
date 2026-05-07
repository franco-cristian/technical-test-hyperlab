import { clsx } from 'clsx';

interface Props {
    id: string;
    label: string;
    checked: boolean;
    onChange: () => void;
    value: string;
}

export default function RadioOption({ id, label, checked, onChange, value }: Props) {
    return (
        <label htmlFor={id} className="flex items-center gap-3 cursor-pointer group select-none">
            <div className="relative flex items-center justify-center w-5 h-5">
                <input
                    type="radio"
                    id={id}
                    value={value}
                    checked={checked}
                    onChange={onChange}
                    className="sr-only"
                />
                <div
                    className={clsx(
                        'w-5 h-5 rounded-full border-2 transition-all duration-200',
                        checked ? 'border-white' : 'border-white/60 group-hover:border-white',
                    )}
                />

                <div
                    className={clsx(
                        'absolute w-2.5 h-2.5 rounded-full bg-white transition-all duration-200',
                        checked ? 'scale-100' : 'scale-0',
                    )}
                />
            </div>

            <span
                className={clsx(
                    'text-base font-normal transition-colors',
                    checked ? 'text-white' : 'text-white/80 group-hover:text-white',
                )}
            >
                {label}
            </span>
        </label>
    );
}
