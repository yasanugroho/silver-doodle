import { useRouter } from "next/router";

export function _(lang: 'en' | 'id' | string, id: JSX.Element, en: JSX.Element): JSX.Element;
export function _(lang: 'en' | 'id' | string, id: string, en: string): string;
export function _(lang: 'en' | 'id' | string, id: string | JSX.Element, en: string | JSX.Element): string | JSX.Element {
    if (lang === 'en') return en;
    if (lang === 'id') return id;
    return en;
}

export const useLocale = (): string => {
    const router = useRouter();
    const { locale } = router;
    return locale
}
