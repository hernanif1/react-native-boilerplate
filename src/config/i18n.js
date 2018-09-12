import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import locale from 'react-native-locale-detector';
import { AsyncStorage } from 'react-native';

import en from '../translations/locales/en.json';
import pt from '../translations/locales/pt.json';
import { env } from './constants';

const STORAGE_KEY = '@APP:languageCode';

const languageDetector = {
  init: Function.prototype,
  type: 'languageDetector',
  async: true,
  detect: async callback => {
    const savedDataJSON = await AsyncStorage.getItem(STORAGE_KEY);
    const lng = savedDataJSON || null;
    const selectLanguage = lng || locale;
    callback(selectLanguage);
  },
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',
    resources: { en, pt },
    ns: ['common'],
    defaultNS: 'common',
    debug: env === 'development',
    cache: {
      enabled: env === 'production',
    },
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
