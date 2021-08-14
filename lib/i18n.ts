export const _ = (lang: 'en' | 'id' | string, id: string, en: string): string => {
    if (lang === 'en') return en;
    if (lang === 'id') return id;
    return en;
}
