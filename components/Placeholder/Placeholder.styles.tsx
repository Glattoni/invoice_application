import styled from 'styled-components';
import { between, Breakpoints, up } from '../../constants/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6.4rem;

  ${between(Breakpoints.XS, Breakpoints.LG, 'landscape')} {
    margin-top: 0;
  }

  ${up(Breakpoints.LG)} {
    margin-top: 13.2rem;
  }

  ${between(Breakpoints.LG, Breakpoints.XL, 'landscape')} {
    margin-top: 6rem;
  }
`;

export const StyledImage = styled.img`
  margin-bottom: 2.5rem;
  width: 12rem;

  ${between(Breakpoints.XS, Breakpoints.LG, 'landscape')} {
    margin-bottom: 1rem;
  }

  ${up(Breakpoints.LG)} {
    min-width: 15rem;
    margin-bottom: 4rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  line-height: 1.375rem;
  letter-spacing: -0.625px;
  margin-bottom: 1.5rem;
`;

export const Content = styled.p`
  max-width: 14rem;
  text-align: center;
  line-height: 0.975rem;
  letter-spacing: -0.25px;
  color: ${({ theme }) => theme.colors.manatee};
  span {
    font-weight: bold;
  }

  ${between(Breakpoints.XS, Breakpoints.LG, 'landscape')} {
    display: none;
  }
`;

export const FullButtonName = styled.span`
  display: none;
  padding-left: 0.25em;

  ${up(Breakpoints.LG)} {
    display: inline;
  }
`;
