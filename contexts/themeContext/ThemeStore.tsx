import React, {
  useState,
  createContext,
  FC,
  useContext,
  ReactNode,
} from 'react';

import { themes } from '../../components/Theme/themes';

type ContextProps = {
  theme: keyof typeof themes;
  toggleTheme: () => void;
};

const ThemeContext = createContext<Partial<ContextProps>>({});

const ThemeStore: FC<ReactNode> = ({ children }) => {
  const [theme, setTheme] = useState<keyof typeof themes>('light');

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => useContext(ThemeContext);

export { ThemeStore, ThemeContext, useThemeContext };
