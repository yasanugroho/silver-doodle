import { useRouter } from 'next/router';
import React, { Children, FC } from 'react';

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

export const L: FC = ({ children }) => {
  const l = useLocale();
  const childrenArray = Children.toArray(children);

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

// TODO: Update this area in double record

export const langNamesEn: Record<string, string> = {
  en: 'English',
  id: 'Indonesian',
};

export const langNamesId: Record<string, string> = {
  en: 'Bahasa Inggris',
  id: 'Bahasa Indonesia',
};
