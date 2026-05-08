import { FormEventHandler } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import WizardLayout from '@/Layouts/WizardLayout';
import { useTranslation } from '@/Hooks/useTranslation';
import WizardFooter from '@/Components/UI/WizardFooter';
import { clsx } from 'clsx';

interface Category {
    id: number;
    name: string;
}

export default function Categories({ availableCategories }: { availableCategories: Category[] }) {
    const { t } = useTranslation();
    const user = usePage().props.auth.user as any;
    const { data, setData, patch, processing, errors } = useForm({ categories: [] as number[] });

    const backUrl = user.role === 'creator' ? route('onboarding.birth') : undefined;

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        patch(route('onboarding.storeCategories'));
    };

    const toggleCategory = (id: number) => {
        if (data.categories.includes(id)) {
            setData(
                'categories',
                data.categories.filter((c) => c !== id),
            );
        } else if (data.categories.length < 3) {
            setData('categories', [...data.categories, id]);
        }
    };

    return (
        <WizardLayout title={t('categories.title')} progress={85} backUrl={backUrl}>
            <form onSubmit={submit} className="flex-1 flex flex-col justify-between h-full">
                <div className="flex flex-col items-center justify-center w-full my-auto">
                    <h1 className="text-3xl sm:text-4xl font-normal text-white text-center mb-10 max-w-[280px] leading-tight">
                        {t('categories.title')}
                    </h1>

                    <div className="w-full max-w-[320px] flex flex-wrap justify-center gap-3">
                        {availableCategories.map((cat) => {
                            const isSelected = data.categories.includes(cat.id);
                            return (
                                <button
                                    key={cat.id}
                                    type="button"
                                    onClick={() => toggleCategory(cat.id)}
                                    className={clsx(
                                        'px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300',
                                        isSelected
                                            ? 'bg-brand text-white shadow-[0_4px_14px_0_rgba(255,0,97,0.39)] scale-105'
                                            : 'bg-[#212121] text-gray-400 shadow-sm hover:bg-[#2a2a2a] hover:-translate-y-1 hover:text-white',
                                    )}
                                >
                                    #{cat.name.toUpperCase()}
                                </button>
                            );
                        })}
                    </div>

                    {errors.categories && (
                        <p className="text-red-500 text-xs mt-4 animate-pulse">
                            {errors.categories}
                        </p>
                    )}

                    <p className="text-[10px] text-gray-400 leading-relaxed text-center px-4 mt-10 opacity-80">
                        {t('categories.limit_note')}
                    </p>
                </div>

                <WizardFooter
                    disabled={processing || data.categories.length === 0}
                    isLoading={processing}
                />
            </form>
        </WizardLayout>
    );
}
