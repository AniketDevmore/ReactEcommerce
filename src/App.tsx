import { useEffect } from "react"
import { RouterProvider } from 'react-router-dom';
import { router } from './navigation/router.jsx'
import { I18nextProvider, initReactI18next, useTranslation } from 'react-i18next';
import en from "./shared/language/en.json";
import i18 from 'i18next';

const resources: any = {
  en: { translation: en },
};

i18.use(initReactI18next).init({
  resources,
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

function App() {

  const { t, i18n } = useTranslation();

  useEffect(() => {
    getStoredLanguage();
  }, []);

  const getStoredLanguage = async () => {
    const storedLanguage = await localStorage.getItem('currentLanguage');
    console.log('storedLanguage=', storedLanguage);
    i18n.changeLanguage(storedLanguage || 'en');
  };
  
  return (
    <I18nextProvider i18n={i18}>
      <RouterProvider router={router} />
    </I18nextProvider>
  )
}

export default App
