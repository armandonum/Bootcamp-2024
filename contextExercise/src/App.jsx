/**
 * 
 * Your goal is to modify the application so that when you click the toggle button,
 * the favorite programming language toggles between the items in the languages array.
 * The default value should be the first item in the array.
 *
 * You must use the Context API for this challenge, which means you have to use the createContext
 * and Context.Provider functions. You are free to add classes and styles,
 * but make sure you leave the component ID's and clases provided as they are.
 *
 * Submit your code once it is complete.
 */
// src/App.jsx
import React from 'react';
import { LanguageProvider } from './context/context';
import Section from './components/Section';

function App() {
  return (
    <LanguageProvider>
      <Section />
    </LanguageProvider>
  );
}

export default App;
