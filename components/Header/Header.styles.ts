import styled from 'styled-components';
import { Breakpoints, up } from '../../constants/breakpoints';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  ${up(Breakpoints.LG)} {
    margin-top: 3.5rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  line-height: 1.375rem;
  letter-spacing: -0.925px;
  margin-bottom: 0.25rem;

  ${up(Breakpoints.LG)} {
    font-size: 2rem;
    line-height: 2.25rem;
    margin-bottom: 0.5rem;
  }
`;

export const Description = styled.span`
  color: ${({ theme }) => theme.colors.baliHai};
  letter-spacing: -0.25px;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  ${up(Breakpoints.LG)} {
    gap: 2.5rem;
  }
`;
