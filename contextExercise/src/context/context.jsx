
import { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const languages = ['JavaScript', 'Python','java'];
  const [favoriteLanguage, setFavoriteLanguage] = useState(languages[0]);

  const toggleLanguage = () => {
    setFavoriteLanguage(prevLanguage => 
      prevLanguage == languages[0] ? languages[1] : languages[0]
      //languages[0] ? languages[1] : languages[2]
 
    );
  };

  return (
    <LanguageContext.Provider value={{ favoriteLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
