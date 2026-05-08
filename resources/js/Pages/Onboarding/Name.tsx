import { FormEventHandler } from 'react';
import { useForm } from '@inertiajs/react';
import WizardLayout from '@/Layouts/WizardLayout';
import { useTranslation } from '@/Hooks/useTranslation';
import WizardInput from '@/Components/UI/WizardInput';
import WizardFooter from '@/Components/UI/WizardFooter';

export default function Name() {
    const { t } = useTranslation();
    const { data, setData, post, processing, errors } = useForm({ name: '' });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('onboarding.name'));
    };

    return (
        <WizardLayout
            title={t('identity.title')}
            progress={30}
            backUrl={route('onboarding.language')}
        >
            <form onSubmit={submit} className="flex-1 flex flex-col justify-between h-full">
                <div className="flex flex-col items-center justify-center w-full my-auto">
                    <h1 className="text-3xl sm:text-4xl font-normal text-white text-center mb-12 max-w-[280px] leading-tight">
                        {t('identity.title')}
                    </h1>

                    <div className="w-full max-w-[320px]">
                        <WizardInput
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            placeholder={t('identity.placeholder')}
                            error={errors.name}
                            className="mb-4"
                            autoFocus
                        />
                        <p className="text-[11px] text-gray-400 leading-relaxed text-center px-1">
                            {t('identity.note')}
                        </p>
                    </div>
                </div>

                <WizardFooter disabled={processing || !data.name} isLoading={processing} />
            </form>
        </WizardLayout>
    );
}
