import { Link } from '@inertiajs/react';
import BrandButton from './BrandButton';
import { useTranslation } from '@/Hooks/useTranslation';

interface Props {
    nextText?: string;
    disabled?: boolean;
    isLoading?: boolean;
    skipUrl?: string;
}

export default function WizardFooter({ nextText, disabled, isLoading, skipUrl }: Props) {
    const { t } = useTranslation();

    return (
        <div className="w-full shrink-0 pt-4 mt-auto">
            {skipUrl && (
                <div className="flex justify-center mb-6">
                    <Link
                        href={skipUrl}
                        className="text-xs text-gray-400 hover:text-white transition-colors"
                    >
                        {t('common.skip')}
                    </Link>
                </div>
            )}

            <BrandButton
                className="w-full shadow-lg mb-14 sm:mb-16"
                disabled={disabled}
                isLoading={isLoading}
                type="submit"
            >
                {nextText || t('common.next')}
            </BrandButton>

            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] text-[#999999]">
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
    );
}
