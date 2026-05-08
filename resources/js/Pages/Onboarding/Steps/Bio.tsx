import { FormEventHandler } from 'react';
import { useForm } from '@inertiajs/react';
import WizardLayout from '@/Layouts/WizardLayout';
import { useTranslation } from '@/Hooks/useTranslation';
import WizardTextarea from '@/Components/UI/WizardTextarea';
import WizardFooter from '@/Components/UI/WizardFooter';

export default function Bio() {
    const { t } = useTranslation();
    const { data, setData, patch, processing, errors } = useForm({ bio: '' });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        patch(route('onboarding.storeBio'));
    };

    return (
        <WizardLayout title={t('bio.title')} progress={96} backUrl={route('onboarding.avatar')}>
            <form onSubmit={submit} className="flex-1 flex flex-col justify-between h-full">
                <div className="flex flex-col items-center justify-center w-full my-auto">
                    <h1 className="text-3xl sm:text-4xl font-normal text-white text-center mb-12 max-w-[280px] leading-tight">
                        {t('bio.title')}
                    </h1>

                    <div className="w-full max-w-[320px]">
                        <WizardTextarea
                            id="bio"
                            name="bio"
                            value={data.bio}
                            onChange={(e) => setData('bio', e.target.value)}
                            placeholder={t('bio.placeholder')}
                            error={errors.bio}
                            autoFocus
                        />
                    </div>
                </div>

                <WizardFooter
                    disabled={processing}
                    isLoading={processing}
                    skipUrl={route('onboarding.block_countries')}
                />
            </form>
        </WizardLayout>
    );
}
