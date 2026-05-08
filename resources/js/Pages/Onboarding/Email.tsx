import { FormEventHandler } from 'react';
import { useForm } from '@inertiajs/react';
import WizardLayout from '@/Layouts/WizardLayout';
import { useTranslation } from '@/Hooks/useTranslation';
import WizardInput from '@/Components/UI/WizardInput';
import SocialButton from '@/Components/UI/SocialButton';
import GoogleIcon from '@/Components/Icons/GoogleIcon';
import WizardFooter from '@/Components/UI/WizardFooter';

export default function Email() {
    const { t } = useTranslation();
    const { data, setData, post, processing, errors } = useForm({ email: '' });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('onboarding.email'));
    };

    const handleGoogleLogin = () => {
        window.location.href = route('login.google');
    };

    return (
        <WizardLayout title={t('email.title')} progress={45} backUrl={route('onboarding.name')}>
            <form onSubmit={submit} className="flex-1 flex flex-col justify-between h-full">
                <div className="flex flex-col items-center justify-center w-full my-auto">
                    <h1 className="text-3xl sm:text-4xl font-normal text-white text-center mb-12 max-w-[280px] leading-tight">
                        {t('email.title')}
                    </h1>

                    <div className="w-full max-w-[320px]">
                        <WizardInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder={t('email.placeholder')}
                            error={errors.email}
                            autoFocus
                        />

                        <div className="relative w-full py-6">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-white/20"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <span className="px-4 text-[10px] bg-black text-gray-500 font-bold tracking-widest uppercase">
                                    {t('common.or')}
                                </span>
                            </div>
                        </div>

                        <SocialButton
                            icon={<GoogleIcon className="w-5 h-5" />}
                            type="button"
                            onClick={handleGoogleLogin}
                            className="!bg-[#212121] !border-transparent !rounded-[16px] !text-white text-sm font-medium hover:!bg-[#2a2a2a] w-full h-14"
                        >
                            {t('email.google_action')}
                        </SocialButton>
                    </div>
                </div>

                <WizardFooter disabled={processing || !data.email} isLoading={processing} />
            </form>
        </WizardLayout>
    );
}
