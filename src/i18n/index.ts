import { de } from './de';
import { pt } from './pt';
import type { Translations } from './de';

export type { Translations };
export type Language = 'de' | 'pt';

const translations: Record<Language, Translations> = {
  de,
  pt,
};

class I18n {
  private currentLang: Language = 'de';
  private listeners: ((lang: Language) => void)[] = [];

  get lang(): Language {
    return this.currentLang;
  }

  set lang(lang: Language) {
    this.currentLang = lang;
    this.listeners.forEach(cb => cb(lang));
  }

  t(key: string): string {
    const keys = key.split('.');
    let value: unknown = translations[this.currentLang];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  }

  // Novo método para obter arrays
  tArray(key: string): string[] {
    const keys = key.split('.');
    let value: unknown = translations[this.currentLang];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return [];
      }
    }
    
    return Array.isArray(value) ? value : [];
  }

  onChange(callback: (lang: Language) => void): () => void {
    this.listeners.push(callback);
    return () => {
      const index = this.listeners.indexOf(callback);
      if (index > -1) this.listeners.splice(index, 1);
    };
  }
}

export const i18n = new I18n();
