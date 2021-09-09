import styled, { css } from 'styled-components';
import { Breakpoints, up } from '../../constants/breakpoints';

export const StyledButton = styled.button<{
  variant: string;
  withIcon?: boolean;
}>`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  border-radius: 2.5rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  letter-spacing: -0.25px;
  line-height: 0.95rem;
  transition: ${({ theme }) =>
    `${theme.transitions.primary(
      'background-color'
    )}, ${theme.transitions.primary('color')}`};

  span {
    display: none;
    margin-left: 0.25em;
  }

  ${({ variant, theme }) => {
    switch (variant) {
      case 'default':
        return css`
          background-color: ${theme.colors.primary};
          padding: 0.375rem 0.525rem 0.375rem 0.375rem;
          &:hover {
            background-color: ${theme.colors.primaryLight};
          }
          ${up(Breakpoints.LG)} {
            padding: 0.5rem 1rem 0.5rem 0.5rem;
            span {
              display: inline;
            }
          }
        `;
      case 'paid':
        return css`
          background-color: ${theme.colors.primary};
          &:hover {
            background-color: ${theme.colors.primaryLight};
          }
        `;
      case 'edit':
        return css`
          color: ${theme.colors.shipCove};
          background-color: ${theme.colors.whiteLilac};
          &:hover {
            background-color: ${theme.colors.moonRaker};
          }
        `;
      case 'draft':
        return css`
          color: ${theme.colors.shipCove};
          background-color: ${theme.colors.oxfordBlue};
          &:hover {
            background-color: ${theme.colors.vulcan};
          }
        `;
      case 'delete':
        return css`
          background-color: ${theme.colors.burntSienna};
          &:hover {
            background-color: ${theme.colors.monaLisa};
          }
        `;
      case 'item':
        return css`
          color: ${theme.colors.blueBell};
          background-color: ${theme.colors.selagoLight};
          &:hover {
            background-color: ${theme.colors.selago};
          }
        `;
    }
  }}
`;

export const PlusButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};

  ${up(Breakpoints.LG)} {
    margin-right: 1rem;
  }
`;
