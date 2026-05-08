import { FormEventHandler } from 'react';
import { Link, useForm } from '@inertiajs/react';
import { Star } from 'lucide-react';
import WizardLayout from '@/Layouts/WizardLayout';
import { useTranslation } from '@/Hooks/useTranslation';
import Checkbox from '@/Components/Checkbox';
import DarkInput from '@/Components/UI/DarkInput';
import BrandButton from '@/Components/UI/BrandButton';
import SocialButton from '@/Components/UI/SocialButton';
import GoogleIcon from '@/Components/Icons/GoogleIcon';
import PaymentLogos from '@/Components/UI/PaymentLogos';

interface LoginProps {
    status?: string;
    canResetPassword?: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const { t, toggleLanguage } = useTranslation();
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    const handleGoogleLogin = () => {
        window.location.href = route('login.google');
    };

    return (
        <WizardLayout title={t('login_btn')} hideIndicator={true}>
            <div className="absolute inset-0 bg-onboarding z-0" />
            <div className="flex flex-col h-full relative z-10 py-8">
                <div className="shrink-0 flex flex-col items-center justify-center">
                    <button
                        type="button"
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 text-caption font-bold tracking-widest text-white hover:opacity-80 transition-opacity uppercase mb-2"
                    >
                        <div className="bg-white rounded-full w-4 h-4 flex items-center justify-center shadow-md">
                            <Star size={10} className="fill-brand stroke-none" />
                        </div>
                        <span>{t('idiom_label')}</span>
                    </button>
                    {status && (
                        <div className="font-medium text-[10px] text-white text-center bg-black/20 px-2 py-1 rounded-lg">
                            {status}
                        </div>
                    )}
                </div>

                <form onSubmit={submit} className="w-full my-auto flex flex-col gap-2 sm:gap-3">
                    <div className="flex flex-col gap-3">
                        <DarkInput
                            id="email"
                            type="email"
                            name="email"
                            placeholder={t('email_placeholder')}
                            value={data.email}
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            error={errors.email}
                        />
                        <DarkInput
                            id="password"
                            type="password"
                            name="password"
                            placeholder={t('password_placeholder')}
                            value={data.password}
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                            error={errors.password}
                        />
                    </div>

                    <div className="flex items-center justify-between mt-1 mb-2">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="text-[10px] sm:text-xs font-normal hover:underline text-brand hover:text-white transition-colors"
                            >
                                {t('forgot_password')}
                            </Link>
                        )}
                        <label className="flex items-center cursor-pointer group">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                                className="!bg-transparent !border-white text-white focus:ring-white rounded-sm w-3.5 h-3.5 mr-2"
                            />
                            <span className="text-[10px] sm:text-xs text-white group-hover:text-brand transition-colors">
                                {t('remember_me')}
                            </span>
                        </label>
                    </div>

                    <BrandButton disabled={processing} isLoading={processing} type="submit">
                        {t('login_btn')}
                    </BrandButton>

                    <div className="relative w-full py-3">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/40"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="px-4 text-caption font-bold text-white tracking-widest uppercase shadow-sm">
                                {t('or')}
                            </span>
                        </div>
                    </div>

                    <SocialButton
                        icon={<GoogleIcon className="w-4 h-4 sm:w-5 sm:h-5" />}
                        type="button"
                        onClick={handleGoogleLogin}
                        className="!bg-transparent !border !border-white/40 !rounded-[16px] !text-white text-xs sm:text-sm font-medium hover:!bg-white/5 h-14"
                    >
                        {t('google_btn')}
                    </SocialButton>
                </form>

                <div className="shrink-0 pt-6 flex flex-col items-center text-center">
                    <p className="text-caption tracking-wide mb-3 text-[#5F5F5F]">
                        {t('protected')}{' '}
                        <span className="font-bold ml-1 text-brand hover:underline cursor-pointer">
                            {t('privacy_terms')}
                        </span>
                    </p>
                    <Link
                        href={route('onboarding.welcome')}
                        className="font-bold text-xs sm:text-sm hover:underline mb-4 text-brand block"
                    >
                        {t('create_account')}
                    </Link>
                    <PaymentLogos />
                    <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-legal mt-3 text-[#999999]">
                        <Link href="#" className="hover:text-white transition-colors">
                            {t('footer.terms')}
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            {t('footer.privacy')}
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            {t('footer.cookies')}
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            {t('footer.contact')}
                        </Link>
                    </div>
                </div>
            </div>
        </WizardLayout>
    );
}
