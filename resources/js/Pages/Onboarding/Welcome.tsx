import { FormEventHandler } from 'react';
import { useForm } from '@inertiajs/react';
import WizardLayout from '@/Layouts/WizardLayout';
import { useTranslation } from '@/Hooks/useTranslation';
import RadioOption from '@/Components/UI/RadioOption';
import WizardFooter from '@/Components/UI/WizardFooter';

export default function Welcome() {
    const { t } = useTranslation();
    const { data, setData, post, processing } = useForm({ role: 'creator' });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('onboarding.welcome'));
    };

    return (
        <WizardLayout title={t('welcome.title')} backUrl={route('login')} hideIndicator={false}>
            <form onSubmit={submit} className="flex-1 flex flex-col justify-between h-full">
                <div className="flex flex-col items-center justify-center w-full my-auto">
                    <h1 className="text-3xl sm:text-4xl font-normal text-white text-center tracking-wide mb-6">
                        {t('welcome.title')}
                    </h1>

                    <p className="text-sm sm:text-base text-gray-300 text-center max-w-[300px] leading-relaxed mb-12 opacity-90">
                        {t('welcome.description')}
                    </p>

                    <div className="flex items-center gap-8 sm:gap-12 w-full justify-center">
                        <RadioOption
                            id="role-creator"
                            value="creator"
                            label={t('welcome.role_creator')}
                            checked={data.role === 'creator'}
                            onChange={() => setData('role', 'creator')}
                        />
                        <RadioOption
                            id="role-user"
                            value="user"
                            label={t('welcome.role_user')}
                            checked={data.role === 'user'}
                            onChange={() => setData('role', 'user')}
                        />
                    </div>
                </div>

                <WizardFooter disabled={processing} isLoading={processing} />
            </form>
        </WizardLayout>
    );
}
