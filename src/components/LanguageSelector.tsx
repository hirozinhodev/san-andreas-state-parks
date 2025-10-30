import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const getFlag = (lng: string) => {
    switch (lng) {
      case 'en':
        // Bandeira dos Estados Unidos da América
        return (
          <img 
            src="https://i.imgur.com/JzxHcMZ.png" 
            alt="United States" 
            className="w-6 h-4 object-cover rounded-sm"
          />
        );
      case 'es':
        // Bandeira da Espanha
        return (
          <img 
            src="https://i.imgur.com/4TY5LLb.png" 
            alt="Spain" 
            className="w-6 h-4 object-cover rounded-sm"
          />
        );
      case 'pt':
        // Bandeira do Brasil
        return (
          <img 
            src="https://i.imgur.com/1tZIEWB.png" 
            alt="Brazil" 
            className="w-6 h-4 object-cover rounded-sm"
          />
        );
      default:
        return null;
    }
  };

  const getCurrentFlag = () => {
    return getFlag(i18n.language);
  };

  const getLanguageName = (lng: string) => {
    switch (lng) {
      case 'en':
        return 'English';
      case 'es':
        return 'Español';
      case 'pt':
        return 'Português';
      default:
        return 'Idioma';
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Select language"
      >
        {getCurrentFlag()}
        <span className="hidden md:inline text-sm font-medium text-gray-700">
          {getLanguageName(i18n.language)}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {['es', 'en', 'pt'].map((lng) => (
            <button
              key={lng}
              onClick={() => changeLanguage(lng)}
              className={`flex items-center space-x-2 w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                i18n.language === lng ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
            >
              {getFlag(lng)}
              <span className="text-sm">{getLanguageName(lng)}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;