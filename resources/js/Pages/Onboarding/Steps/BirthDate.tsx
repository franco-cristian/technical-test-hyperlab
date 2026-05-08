import { FormEventHandler } from 'react';
import { useForm } from '@inertiajs/react';
import WizardLayout from '@/Layouts/WizardLayout';
import { useTranslation } from '@/Hooks/useTranslation';
import WizardInput from '@/Components/UI/WizardInput';
import WizardFooter from '@/Components/UI/WizardFooter';

export default function BirthDate() {
    const { t } = useTranslation();
    const { data, setData, patch, processing, errors } = useForm({ birth_date: '' });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        patch(route('onboarding.storeBirth'));
    };

    return (
        <WizardLayout title={t('birth_date.title')} progress={70}>
            <form onSubmit={submit} className="flex-1 flex flex-col justify-between h-full">
                <div className="flex flex-col items-center justify-center w-full my-auto">
                    <h1 className="text-3xl sm:text-4xl font-normal text-white text-center mb-12 max-w-[280px] leading-tight">
                        {t('birth_date.title')}
                    </h1>

                    <div className="w-full max-w-[320px]">
                        <WizardInput
                            id="birth_date"
                            type="date"
                            name="birth_date"
                            value={data.birth_date}
                            onChange={(e) => setData('birth_date', e.target.value)}
                            error={errors.birth_date}
                            className="mb-4 text-white uppercase [&::-webkit-calendar-picker-indicator]:invert"
                        />
                        <p className="text-[11px] text-gray-400 leading-relaxed text-center px-1 mt-6">
                            {t('birth_date.disclaimer')}
                        </p>

                        <div className="flex justify-center mt-6">
                            <img
                                src="/images/ncmec-logo.png"
                                alt="National Center for Missing & Exploited Children"
                                className="h-10 object-contain opacity-90"
                            />
                        </div>
                    </div>
                </div>

                <WizardFooter disabled={processing || !data.birth_date} isLoading={processing} />
            </form>
        </WizardLayout>
    );
}
