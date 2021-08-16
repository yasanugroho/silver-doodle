import { useRouter } from 'next/router';
import React from 'react';

export function _(lang: 'en' | 'id' | string, id: React.ReactNode, en: React.ReactNode): React.ReactNode;
export function _(lang: 'en' | 'id' | string, id: string, en: string): string;
export function _(
  lang: 'en' | 'id' | string,
  id: string | React.ReactNode,
  en: string | React.ReactNode
): string | React.ReactNode {
  if (lang === 'id') {
    return id;
  }
  if (lang === 'en') {
    return en;
  }
  return en;
}

export const L: React.FC = ({ children }) => {
  const l = useLocale();

  if (l === 'id') {
    return children[0];
  }
  if (l === 'en') {
    return children[1];
  }
  return children[0];
};

export const useLocale = (): string => {
  const router = useRouter();
  const { locale } = router;
  return locale;
};
