import styled from 'styled-components';
import { Breakpoints, up } from '../../constants/breakpoints';

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const Header = styled.button<{ isOpen: boolean }>`
  position: relative;
  padding: 0;
  padding-right: 1.5rem;
  font-weight: bold;
  span {
    display: none;
  }

  &:after {
    content: url('/icons/arrow-down.svg');
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 0)};
    transition: ${({ theme }) => theme.transitions.primary('transform')};
  }

  ${up(Breakpoints.LG)} {
    span {
      display: inline;
    }
  }
`;

export const OptionList = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  top: 2.625rem;
  right: 50%;
  transform: translateX(50%);
  display: flex;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  flex-direction: column;
  gap: 1rem;
  max-width: 12rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  ${({ theme }) => `
    background-color: ${theme.colors.martinique};
    box-shadow: ${theme.boxShadows.statusFilter};
    transition: ${theme.transitions.primary('opacity')};
  `}

  ${up(Breakpoints.LG)} {
    width: 12rem;
  }
`;

export const OptionItem = styled.li`
  display: flex;
  align-items: center;
  font-weight: bold;
`;

export const Checkbox = styled.span`
  position: relative;
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background-color: ${({ theme }) => theme.colors.mirage};
  border-radius: 0.125rem;

  &:after {
    content: url('/icons/check.svg');
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
`;

export const Radio = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  .title {
    line-height: 0.925rem;
    text-transform: capitalize;
  }

  &:hover {
    ${Checkbox} {
      border: 1px solid ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Input = styled.input`
  display: none;
  &:checked {
    & + ${Radio} ${Checkbox} {
      background-color: ${({ theme }) => theme.colors.primary};
      &::after {
        opacity: 1;
      }
    }
  }
`;
