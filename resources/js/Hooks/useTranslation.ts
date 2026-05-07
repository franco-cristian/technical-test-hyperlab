import { useState, useCallback, useEffect } from 'react';
import enAuth from '../Locales/en/auth.json';
import esAuth from '../Locales/es/auth.json';
import enOnboarding from '../Locales/en/onboarding.json';
import esOnboarding from '../Locales/es/onboarding.json';

type Language = 'en' | 'es';

interface TranslationStructure {
    [key: string]: string | TranslationStructure;
}

const dictionaries: Record<Language, TranslationStructure> = {
    en: { ...enAuth, ...enOnboarding },
    es: { ...esAuth, ...esOnboarding },
};

export function useTranslation() {
    const [language, setLanguage] = useState<Language>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('app_lang');
            return saved === 'en' || saved === 'es' ? saved : 'en';
        }
        return 'en';
    });

    useEffect(() => {
        localStorage.setItem('app_lang', language);
    }, [language]);

    const toggleLanguage = useCallback(() => {
        setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));
    }, []);

    const t = useCallback(
        (path: string): string => {
            const keys = path.split('.');
            let current: TranslationStructure | string = dictionaries[language];

            for (const key of keys) {
                if (
                    typeof current !== 'object' ||
                    current === null ||
                    (current as TranslationStructure)[key] === undefined
                ) {
                    return path;
                }
                current = (current as TranslationStructure)[key];
            }

            if (typeof current !== 'string') {
                return path;
            }

            return current;
        },
        [language],
    );

    return {
        language,
        toggleLanguage,
        t,
    };
}
