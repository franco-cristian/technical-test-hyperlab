import { FormEventHandler, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Eye, EyeOff } from 'lucide-react';
import WizardLayout from '@/Layouts/WizardLayout';
import { useTranslation } from '@/Hooks/useTranslation';
import WizardInput from '@/Components/UI/WizardInput';
import WizardFooter from '@/Components/UI/WizardFooter';

export default function Password() {
    const { t } = useTranslation();
    const [showPassword, setShowPassword] = useState(false);
    const { data, setData, post, processing, errors } = useForm({ password: '' });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('onboarding.register'));
    };

    return (
        <WizardLayout title={t('password.title')} progress={60} backUrl={route('onboarding.email')}>
            <form onSubmit={submit} className="flex-1 flex flex-col justify-between h-full">
                <div className="flex flex-col items-center justify-center w-full my-auto">
                    <h1 className="text-3xl sm:text-4xl font-normal text-white text-center mb-12 max-w-[280px] leading-tight">
                        {t('password.title')}
                    </h1>

                    <div className="w-full max-w-[320px]">
                        <WizardInput
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder={t('password.placeholder')}
                            error={errors.password}
                            autoFocus
                            endContent={
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="focus:outline-none hover:text-white transition-colors"
                                >
                                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                                </button>
                            }
                        />

                        <div className="flex flex-col gap-1 text-[11px] text-gray-400 px-1 opacity-90 font-medium mt-4">
                            <p>{t('password.requirement_1')}</p>
                            <p>{t('password.requirement_2')}</p>
                            <p>{t('password.requirement_3')}</p>
                        </div>
                    </div>
                </div>

                <WizardFooter disabled={processing || !data.password} isLoading={processing} />
            </form>
        </WizardLayout>
    );
}
