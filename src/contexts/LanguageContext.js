import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const navigate = useNavigate();
  const location = useLocation();

  // Extract language from URL on mount and location change
  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const langInUrl = pathParts[pathParts.length - 1];
    
    if (langInUrl === 'en' || langInUrl === 'mr') {
      setLanguage(langInUrl);
    }
  }, [location.pathname]);

  const changeLanguage = (newLang) => {
    setLanguage(newLang);
    
    // Update URL with language parameter
    const pathParts = location.pathname.split('/');
    const lastPart = pathParts[pathParts.length - 1];
    
    // If last part is already a language code, replace it
    if (lastPart === 'en' || lastPart === 'mr') {
      pathParts[pathParts.length - 1] = newLang;
      navigate(pathParts.join('/'));
    } else {
      // Otherwise, append the language code
      navigate(`${location.pathname}/${newLang}`);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
