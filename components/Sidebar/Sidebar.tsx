import React from 'react';
import Image from 'next/image';
import logo from '/public/icons/logo.svg';
import iconSun from '/public/icons/sun.svg';
import iconMoon from '/public/icons/moon.svg';
import avatar from '/public/images/avatar.png';
import { useThemeContext } from '../../contexts/global_theme/ThemeStore';
import {
  Wrapper,
  LogoWrapper,
  Container,
  AvatarContainer,
  StyledImage,
  ThemeContainer,
  AlignContainer,
  StyledAvatar,
} from './Sidebar.styles';

const Sidebar = () => {
  const { theme, setTheme } = useThemeContext();
  const switchTheme = () => {
    if (setTheme) {
      theme === 'light' ? setTheme('dark') : setTheme('light');
    }
  };
  return (
    <Wrapper>
      <LogoWrapper>
        <StyledImage src={logo} alt='logo' />
      </LogoWrapper>
      <Container>
        <ThemeContainer onClick={switchTheme}>
          <AlignContainer>
            <Image
              src={theme === 'light' ? iconSun : iconMoon}
              alt='theme icon'
            />
          </AlignContainer>
        </ThemeContainer>
        <AvatarContainer>
          <AlignContainer>
            <StyledAvatar src={avatar} alt='avatar' width={32} height={32} />
          </AlignContainer>
        </AvatarContainer>
      </Container>
    </Wrapper>
  );
};

export default Sidebar;
