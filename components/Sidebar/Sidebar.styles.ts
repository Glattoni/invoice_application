import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import { Breakpoints, up } from '../../constants/breakpoints';

export const Wrapper = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.oxfordBlue};
  min-height: 4.5rem;

  ${up(Breakpoints.LG)} {
    height: 5rem;
  }
  ${up(Breakpoints.XL)} {
    flex-direction: column;
    width: 6.25rem;
    min-height: 100vh;
    border-radius: 0 1.25rem 1.25rem 0;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0 1.25rem 1.25rem 0;
  min-width: 4.5rem;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primaryLight};
    border-radius: 1.25rem 0 0 1.25rem;
  }

  ${up(Breakpoints.LG)} {
    width: 5rem;
  }

  ${up(Breakpoints.XL)} {
    height: 6.25rem;
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;

  ${up(Breakpoints.XL)} {
    flex-direction: column;
  }
`;

export const ThemeContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-right: 1px solid ${({ theme }) => theme.colors.fiord};

  ${up(Breakpoints.XL)} {
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.fiord};
  }
`;

export const AlignContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;

  ${up(Breakpoints.LG)} {
    padding: 0 1.85rem;
  }

  ${up(Breakpoints.XL)} {
    padding: 2rem 0;
  }
`;

export const AvatarContainer = styled.div`
  overflow: hidden;
`;

export const StyledReactSVG = styled(ReactSVG)`
  z-index: 1;
  width: 1.65rem;
  height: 1.75rem;

  div,
  svg {
    height: 100%;
    width: 100%;
  }

  ${up(Breakpoints.LG)} {
    width: 1.9rem;
    height: 1.8rem;
  }

  ${up(Breakpoints.XL)} {
    width: 2.5rem;
    height: 2.4rem;
  }
`;

export const StyledAvatar = styled.img`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;

  ${up(Breakpoints.LG)} {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
