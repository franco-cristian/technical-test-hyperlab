import { FormEventHandler } from 'react';
import { useForm } from '@inertiajs/react';
import { ChevronDown } from 'lucide-react';
import WizardLayout from '@/Layouts/WizardLayout';
import { useTranslation } from '@/Hooks/useTranslation';
import WizardFooter from '@/Components/UI/WizardFooter';

export default function Language() {
    const { t, toggleLanguage, language } = useTranslation();
    const { post, processing } = useForm({ locale: language });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('onboarding.language'), { data: { locale: language } });
    };

    return (
        <WizardLayout
            title={t('language.title')}
            progress={15}
            backUrl={route('onboarding.welcome')}
        >
            <form onSubmit={submit} className="flex-1 flex flex-col justify-between h-full">
                <div className="flex flex-col items-center justify-center w-full my-auto">
                    <h1 className="text-3xl sm:text-4xl font-normal text-white text-center mb-8">
                        {t('language.title')}
                    </h1>

                    <p className="text-sm text-gray-300 text-center max-w-[320px] leading-relaxed mb-12">
                        {t('language.description')}
                    </p>

                    <div className="w-full max-w-[320px]">
                        <button
                            type="button"
                            onClick={toggleLanguage}
                            className="w-full h-14 bg-[#212121] text-white rounded-xl px-6 flex items-center justify-between border border-transparent focus:border-white/20 hover:bg-[#2a2a2a] transition-all group"
                        >
                            <span className="text-base font-medium">
                                {language === 'en' ? t('language.english') : t('language.spanish')}
                            </span>
                            <ChevronDown
                                className="text-gray-400 group-hover:text-white transition-colors"
                                size={20}
                            />
                        </button>
                        <p className="text-[10px] text-gray-500 mt-3 text-center">
                            {t('language.switch_prompt')}
                        </p>
                    </div>
                </div>

                <WizardFooter disabled={processing} isLoading={processing} />
            </form>
        </WizardLayout>
    );
}
