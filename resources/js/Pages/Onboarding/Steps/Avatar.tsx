import React from 'react';
import { FormEventHandler, useRef, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { User, Plus } from 'lucide-react';
import WizardLayout from '@/Layouts/WizardLayout';
import { useTranslation } from '@/Hooks/useTranslation';
import WizardFooter from '@/Components/UI/WizardFooter';

export default function Avatar() {
    const { t } = useTranslation();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const { setData, post, processing, errors } = useForm({
        avatar: null as File | null,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('onboarding.storeAvatar'), {
            forceFormData: true,
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('avatar', file);
            setPreview(URL.createObjectURL(file));
        }
    };

    return (
        <WizardLayout title={t('avatar.title')} progress={93} backUrl={route('onboarding.socials')}>
            <form onSubmit={submit} className="flex-1 flex flex-col justify-between h-full">
                <div className="flex flex-col items-center justify-center w-full my-auto">
                    <h1 className="text-3xl sm:text-4xl font-normal text-white text-center mb-16 max-w-[280px] leading-tight">
                        {t('avatar.title')}
                    </h1>

                    <div className="relative">
                        <div
                            className="w-32 h-32 sm:w-36 sm:h-36 rounded-full flex items-center justify-center overflow-hidden"
                            style={{ backgroundColor: '#FFD9E8' }}
                        >
                            {preview ? (
                                <img
                                    src={preview}
                                    className="w-full h-full object-cover"
                                    alt="Avatar preview"
                                />
                            ) : (
                                <User size={64} color="#FF0061" strokeWidth={2} />
                            )}
                        </div>

                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="absolute bottom-0 right-0 bg-brand rounded-full p-2 border-[4px] border-black hover:scale-105 transition-transform"
                        >
                            <Plus size={20} color="#FFFFFF" strokeWidth={3} />
                        </button>

                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                            accept="image/*"
                        />
                    </div>
                    {errors.avatar && <p className="text-red-500 text-xs mt-4">{errors.avatar}</p>}
                </div>

                <WizardFooter
                    disabled={processing}
                    isLoading={processing}
                    skipUrl={route('onboarding.bio')}
                />
            </form>
        </WizardLayout>
    );
}
