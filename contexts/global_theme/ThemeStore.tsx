import React, {
  useState,
  createContext,
  FC,
  ReactChildren,
  useContext,
} from 'react';

type ContextProps = {
  theme: string;
  switchTheme: (theme: string) => void;
};

const ThemeContext = createContext<Partial<ContextProps>>({});

const ThemeStore: FC<ReactChildren> = ({ children }) => {
  const [theme, setTheme] = useState<string>('light');
  const switchTheme = (theme: string) => setTheme(theme);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => useContext(ThemeContext);

export { ThemeStore, ThemeContext, useThemeContext };
