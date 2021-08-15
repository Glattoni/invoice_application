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
  setTheme: (theme: keyof typeof themes) => void;
};

const ThemeContext = createContext<Partial<ContextProps>>({});

const ThemeStore: FC<ReactNode> = ({ children }) => {
  const [theme, setTheme] = useState<keyof typeof themes>('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => useContext(ThemeContext);

export { ThemeStore, ThemeContext, useThemeContext };
