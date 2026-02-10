// src/context/ThemeContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Récupérer le thème depuis localStorage ou utiliser 'light' par défaut
    return localStorage.getItem('shopio_theme') || 'light';
  });

  const [currency, setCurrency] = useState(() => {
    return localStorage.getItem('shopio_currency') || '¥';
  });

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('shopio_language') || 'en';
  });

  // Appliquer le thème au body
  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
      document.body.classList.add('bg-gray-900');
    } else {
      root.classList.remove('dark');
      document.body.classList.remove('bg-gray-900');
    }
    
    localStorage.setItem('shopio_theme', theme);
  }, [theme]);

  // Sauvegarder la devise
  useEffect(() => {
    localStorage.setItem('shopio_currency', currency);
  }, [currency]);

  // Sauvegarder la langue
  useEffect(() => {
    localStorage.setItem('shopio_language', language);
  }, [language]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const formatPrice = (price) => {
    const formatter = new Intl.NumberFormat(language === 'en' ? 'en-US' : 'fr-FR', {
      style: 'currency',
      currency: currency === '¥' ? 'JPY' : currency === '$' ? 'USD' : 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    
    return formatter.format(price);
  };

  const value = {
    theme,
    currency,
    language,
    toggleTheme,
    setCurrency,
    setLanguage,
    formatPrice,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};