
import React, { useContext } from 'react';
import { LanguageContext } from '../context/context';

function Section() {
  const { favoriteLanguage, toggleLanguage } = useContext(LanguageContext);

  return (
    <div>
      <p id="favoriteLanguage">Favorite programming language: {favoriteLanguage}</p>
      <button id="changeFavorite" onClick={toggleLanguage}>Toggle Language</button>
    </div>
  );
}

export default Section;
