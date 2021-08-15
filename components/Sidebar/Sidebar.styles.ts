import styled from 'styled-components';
import Image from 'next/image';

export const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.asideBackground};
  height: 4.5rem;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 0rem 1.25rem 1.25rem 0rem;
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
    background-color: ${({ theme }) => theme.primaryLight};
    border-radius: 1.25rem 0rem 0rem 1.25rem;
  }
`;

export const Container = styled.div`
  display: flex;
`;

export const ThemeContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-right: 1px solid ${({ theme }) => theme.asideBorder};
`;

export const AlignContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
`;

export const AvatarContainer = styled.div`
  overflow: hidden;
`;

export const StyledImage = styled(Image)`
  z-index: 1;
`;

export const StyledAvatar = styled(Image)`
  border-radius: 50%;
`;
