import React, {
  FC,
  useState,
  createContext,
  useContext,
  ReactNode,
} from 'react';

import { themes } from '../constants/themes';

type Props = {
  theme: keyof typeof themes;
  toggleTheme: () => void;
};

const ThemeContext = createContext<Partial<Props>>({});

const ThemeProvider: FC<ReactNode> = ({ children }) => {
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

export { ThemeProvider, ThemeContext, useThemeContext };
