import React from 'react';
import Image from 'next/image';
import logo from '/public/icons/logo.svg';
import iconSun from '/public/icons/sun.svg';
import iconMoon from '/public/icons/moon.svg';
import avatar from '/public/images/avatar.png';
import { useThemeContext } from '../../context/theme_context';
import {
  Wrapper,
  LogoWrapper,
  Container,
  AvatarContainer,
  StyledReactSVG,
  ThemeContainer,
  AlignContainer,
  StyledAvatar,
} from './Sidebar.styles';

const Sidebar = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <Wrapper>
      <LogoWrapper>
        <StyledReactSVG src={logo.src} alt='logo' />
      </LogoWrapper>
      <Container>
        <ThemeContainer onClick={toggleTheme}>
          <AlignContainer>
            <Image
              src={theme === 'light' ? iconSun : iconMoon}
              alt='theme icon'
            />
          </AlignContainer>
        </ThemeContainer>
        <AvatarContainer>
          <AlignContainer>
            <StyledAvatar src={avatar.src} alt='avatar' />
          </AlignContainer>
        </AvatarContainer>
      </Container>
    </Wrapper>
  );
};

export default Sidebar;
