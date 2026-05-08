import { FormEventHandler, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { clsx } from 'clsx';
import WizardLayout from '@/Layouts/WizardLayout';
import { useTranslation } from '@/Hooks/useTranslation';
import WizardInput from '@/Components/UI/WizardInput';
import WizardFooter from '@/Components/UI/WizardFooter';

export default function Username() {
    const { t } = useTranslation();
    const [isActive, setIsActive] = useState(true);
    const { data, setData, patch, processing, errors } = useForm({
        username: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        patch(route('onboarding.storeUsername'));
    };

    return (
        <WizardLayout title={t('username.title')} progress={98} backUrl={route('onboarding.block_countries')}>
            <form onSubmit={submit} className="flex-1 flex flex-col justify-between h-full">
                <div className="flex flex-col items-center justify-center w-full my-auto">
                    <h1 className="text-3xl sm:text-4xl font-normal text-white text-center mb-12 max-w-[280px] leading-tight">
                        {t('username.title')}
                    </h1>

                    <div className="w-full max-w-[320px]">
                        <WizardInput
                            id="username"
                            name="username"
                            value={data.username}
                            onChange={(e) => setData('username', e.target.value)}
                            placeholder={t('username.placeholder')}
                            error={errors.username}
                            autoFocus
                            endContent={
                                <button
                                    type="button"
                                    onClick={() => setIsActive(!isActive)}
                                    className={clsx(
                                        "w-9 h-5 rounded-full flex items-center transition-colors px-0.5",
                                        isActive ? "bg-brand" : "bg-gray-600"
                                    )}
                                >
                                    <div
                                        className={clsx(
                                            "w-4 h-4 bg-white rounded-full transition-transform",
                                            isActive ? "translate-x-4" : "translate-x-0"
                                        )}
                                    />
                                </button>
                            }
                        />
                    </div>
                </div>

                <WizardFooter disabled={processing || !data.username} isLoading={processing} />
            </form>
        </WizardLayout>
    );
}