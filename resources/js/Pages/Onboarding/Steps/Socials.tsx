import { FormEventHandler } from 'react';
import { useForm } from '@inertiajs/react';
import WizardLayout from '@/Layouts/WizardLayout';
import { useTranslation } from '@/Hooks/useTranslation';
import WizardInput from '@/Components/UI/WizardInput';
import WizardFooter from '@/Components/UI/WizardFooter';
import { Instagram, TikTok, Twitter, Reddit, Facebook } from '@/Components/Icons/BrandIcons';

export default function Socials() {
    const { t } = useTranslation();
    const { data, setData, patch, processing, errors } = useForm({
        instagram: '',
        tiktok: '',
        x: '',
        reddit: '',
        facebook: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        patch(route('onboarding.storeSocials'));
    };

    return (
        <WizardLayout title={t('socials.title')} progress={90} backUrl={route('onboarding.gender')}>
            <form onSubmit={submit} className="flex-1 flex flex-col justify-between h-full">
                <div className="flex flex-col items-center justify-center w-full my-auto">
                    <h1 className="text-3xl sm:text-4xl font-normal text-white text-center mb-10 max-w-[280px] leading-tight">
                        {t('socials.title')}
                    </h1>

                    <div className="w-full max-w-[320px] flex flex-col gap-3">
                        <WizardInput
                            id="instagram"
                            type="url"
                            name="instagram"
                            value={data.instagram}
                            onChange={(e) => setData('instagram', e.target.value)}
                            placeholder="https://www.instagram.com/username"
                            error={errors.instagram}
                            endContent={<Instagram size={18} />}
                        />
                        <WizardInput
                            id="tiktok"
                            type="url"
                            name="tiktok"
                            value={data.tiktok}
                            onChange={(e) => setData('tiktok', e.target.value)}
                            placeholder="https://www.tiktok.com/@username"
                            error={errors.tiktok}
                            endContent={<TikTok size={18} />}
                        />
                        <WizardInput
                            id="x"
                            type="url"
                            name="x"
                            value={data.x}
                            onChange={(e) => setData('x', e.target.value)}
                            placeholder="https://www.x.com/username"
                            error={errors.x}
                            endContent={<Twitter size={18} />}
                        />
                        <WizardInput
                            id="reddit"
                            type="url"
                            name="reddit"
                            value={data.reddit}
                            onChange={(e) => setData('reddit', e.target.value)}
                            placeholder="https://www.reddit.com/user/username"
                            error={errors.reddit}
                            endContent={<Reddit size={18} />}
                        />
                        <WizardInput
                            id="facebook"
                            type="url"
                            name="facebook"
                            value={data.facebook}
                            onChange={(e) => setData('facebook', e.target.value)}
                            placeholder="https://www.facebook.com/username"
                            error={errors.facebook}
                            endContent={<Facebook size={18} />}
                        />
                    </div>
                </div>

                <WizardFooter
                    disabled={processing}
                    isLoading={processing}
                    skipUrl={route('onboarding.avatar')}
                />
            </form>
        </WizardLayout>
    );
}
