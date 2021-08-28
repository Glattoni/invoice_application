import React, { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { useThemeContext } from '../../contexts/themeContext/ThemeStore';
import { themes } from '../../constants/themes';

const Theme: FC<ReactNode> = ({ children }) => {
  const { theme } = useThemeContext();
  return (
    <ThemeProvider theme={theme && themes[theme]}>{children}</ThemeProvider>
  );
};

export default Theme;
