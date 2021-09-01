import styled from 'styled-components';
import { Breakpoints, up } from '../../constants/breakpoints';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const Content = styled.div`
  h1 {
    font-size: 1.25rem;
    line-height: 1.375rem;
    letter-spacing: -0.625px;
    margin-bottom: 0.25rem;
  }
  p {
    color: ${({ theme }) => theme.colors.baliHai};
  }
  .long-description {
    display: none;
  }

  ${up(Breakpoints.LG)} {
    h1 {
      font-size: 2rem;
      line-height: 2.25rem;
      margin-bottom: 0.5rem;
    }
    .short-description {
      display: none;
    }
    .long-description {
      display: inline-block;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  ${up(Breakpoints.LG)} {
    gap: 2.5rem;
  }
`;
