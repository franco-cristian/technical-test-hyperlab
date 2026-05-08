import { FormEventHandler } from 'react';
import { useForm } from '@inertiajs/react';
import { Search } from 'lucide-react';
import WizardLayout from '@/Layouts/WizardLayout';
import { useTranslation } from '@/Hooks/useTranslation';
import WizardInput from '@/Components/UI/WizardInput';
import WizardFooter from '@/Components/UI/WizardFooter';

export default function BlockCountries() {
    const { t } = useTranslation();
    const { data, setData, patch, processing, errors } = useForm({
        blocked_countries: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        patch(route('onboarding.storeBlockCountries'));
    };

    return (
        <WizardLayout title={t('block_countries.title')} progress={96} backUrl={route('onboarding.bio')}>
            <form onSubmit={submit} className="flex-1 flex flex-col justify-between h-full">
                <div className="flex flex-col items-center justify-center w-full my-auto">
                    <h1 className="text-3xl sm:text-4xl font-normal text-white text-center mb-12 max-w-[280px] leading-tight">
                        {t('block_countries.title')}
                    </h1>

                    <div className="w-full max-w-[320px]">
                        <WizardInput
                            id="blocked_countries"
                            name="blocked_countries"
                            value={data.blocked_countries}
                            onChange={(e) => setData('blocked_countries', e.target.value)}
                            placeholder={t('block_countries.placeholder')}
                            error={errors.blocked_countries}
                            autoFocus
                            endContent={<Search size={20} className="text-gray-400" />}
                        />
                    </div>
                </div>

                <WizardFooter
                    disabled={processing}
                    isLoading={processing}
                    skipUrl={route('onboarding.username')}
                />
            </form>
        </WizardLayout>
    );
}