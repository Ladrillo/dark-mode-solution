import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  });

  const setValue = value => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  }

  return [storedValue, setValue];
}

export const useDarkMode = () => {
  const [isDark, setIsdark] = useLocalStorage('dark', false);
  const toggleDark = () => {
    document.body.classList.toggle('dark-mode')
    setIsdark(!isDark);
  }
  useEffect(() => {
    isDark
      ? document.body.classList.add('dark-mode')
      : document.body.classList.remove('dark-mode');
  }, [isDark])
  return [isDark, toggleDark];
}
