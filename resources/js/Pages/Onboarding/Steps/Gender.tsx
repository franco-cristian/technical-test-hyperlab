import { FormEventHandler } from 'react';
import { useForm } from '@inertiajs/react';
import WizardLayout from '@/Layouts/WizardLayout';
import { useTranslation } from '@/Hooks/useTranslation';
import RadioOption from '@/Components/UI/RadioOption';
import WizardFooter from '@/Components/UI/WizardFooter';

export default function Gender() {
    const { t } = useTranslation();
    const { data, setData, patch, processing } = useForm({ gender: '' });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        patch(route('onboarding.storeGender'));
    };

    return (
        <WizardLayout
            title={t('gender.title')}
            progress={88}
            backUrl={route('onboarding.categories')}
        >
            <form onSubmit={submit} className="flex-1 flex flex-col justify-between h-full">
                <div className="flex flex-col items-center justify-center w-full my-auto">
                    <h1 className="text-3xl sm:text-4xl font-normal text-white text-center mb-16 max-w-[280px] leading-tight">
                        {t('gender.title')}
                    </h1>

                    <div className="flex flex-col gap-6 w-full max-w-[200px] justify-center ml-10">
                        <RadioOption
                            id="gender-male"
                            value="male"
                            label={t('gender.options.male')}
                            checked={data.gender === 'male'}
                            onChange={() => setData('gender', 'male')}
                        />
                        <RadioOption
                            id="gender-female"
                            value="female"
                            label={t('gender.options.female')}
                            checked={data.gender === 'female'}
                            onChange={() => setData('gender', 'female')}
                        />
                        <RadioOption
                            id="gender-other"
                            value="other"
                            label={t('gender.options.other')}
                            checked={data.gender === 'other'}
                            onChange={() => setData('gender', 'other')}
                        />
                    </div>
                </div>

                <WizardFooter disabled={processing || !data.gender} isLoading={processing} />
            </form>
        </WizardLayout>
    );
}
