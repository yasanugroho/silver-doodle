import { useRouter } from 'next/router';
import React from 'react';

export function _(lang: 'en' | 'id' | string | undefined, id: React.ReactNode, en: React.ReactNode): React.ReactNode;
export function _(lang: 'en' | 'id' | string | undefined, id: string, en: string): string;
export function _(
  lang: 'en' | 'id' | string | undefined,
  id: string | React.ReactNode,
  en: string | React.ReactNode,
): string | React.ReactNode {
  if (lang === 'id' || lang === undefined) {
    return id;
  }
  if (lang === 'en') {
    return en;
  }
  return id;
}

export const L: React.FC = ({ children }) => {
  const l = useLocale();
  const childrenArray = React.Children.toArray(children);

  if (l === 'id') {
    return <>{childrenArray[0]}</>;
  }
  if (l === 'en') {
    return <>{childrenArray[1]}</>;
  }
  return <>{childrenArray[0]}</>;
};

export const useLocale = (): string => {
  const router = useRouter();
  const { locale } = router;
  return locale ?? 'id';
};

export const langNames: Record<string, Record<string, string>> = {
  en: {
    en: 'English',
    id: 'Indonesian',
  },
  id: {
    en: 'Bahasa Inggris',
    id: 'Bahasa Indonesia',
  },
};
