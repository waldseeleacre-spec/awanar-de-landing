import { de } from './de';
import { pt } from './pt';
import type { Translations } from './de';

export type { Translations };
export type Language = 'de' | 'pt';

const translations: Record<Language, Translations> = {
  de,
  pt,
};

const STORAGE_KEY = 'awanar-lang';

class I18n {
  private currentLang: Language;
  private listeners: ((lang: Language) => void)[] = [];

  constructor() {
    // Load saved language or default to 'de'
    const saved = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    this.currentLang = (saved === 'pt' || saved === 'de') ? saved : 'de';
  }

  get lang(): Language {
    return this.currentLang;
  }

  set lang(lang: Language) {
    this.currentLang = lang;
    // Persist to localStorage
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang);
    }
    // Notify all listeners
    this.listeners.forEach(cb => cb(lang));
  }

  t(key: string): string {
    const keys = key.split('.');
    // Try current language first
    let value: unknown = translations[this.currentLang];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        // Fallback to 'de' if key not found in current language
        if (this.currentLang !== 'de') {
          let fallbackValue: unknown = translations['de'];
          for (const fk of keys) {
            if (fallbackValue && typeof fallbackValue === 'object' && fk in fallbackValue) {
              fallbackValue = (fallbackValue as Record<string, unknown>)[fk];
            } else {
              return key;
            }
          }
          return typeof fallbackValue === 'string' ? fallbackValue : key;
        }
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
