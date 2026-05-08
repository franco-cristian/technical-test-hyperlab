import { FormEventHandler } from 'react';
import { useForm } from '@inertiajs/react';
import WizardLayout from '@/Layouts/WizardLayout';
import { useTranslation } from '@/Hooks/useTranslation';
import WizardFooter from '@/Components/UI/WizardFooter';

export default function Completion() {
    const { t } = useTranslation();
    const { get, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        get(route('dashboard'));
    };

    return (
        <WizardLayout 
            title={t('completion.title')} 
            progress={100} 
            backUrl={route('onboarding.categories')}
        >
            <form onSubmit={submit} className="flex-1 flex flex-col justify-between h-full">
                <div className="flex flex-col items-center justify-center w-full my-auto">
                    <h1 className="text-3xl sm:text-4xl font-normal text-white text-center leading-tight">
                        {t('completion.title')}
                    </h1>
                </div>

                <WizardFooter
                    nextText={t('completion.action')}
                    disabled={processing}
                    isLoading={processing}
                />
            </form>
        </WizardLayout>
    );
}