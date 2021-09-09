import styled from 'styled-components';
import StatusTag from '../StatusTag/StatusTag';
import { ReactSVG } from 'react-svg';
import { Breakpoints, up } from '../../constants/breakpoints';

export const Container = styled.a`
  display: grid;
  grid-template-rows: 1.5fr 1fr 1fr;
  grid-template-areas:
    'uid clientName' 'paymentDue status'
    'totalAmount status';
  background-color: ${({ theme }) => theme.colors.portGore};
  border-radius: 0.5rem;
  padding: 1.5rem;
  cursor: pointer;

  ${up(Breakpoints.LG)} {
    grid-template-rows: none;
    grid-template-columns: 1.4fr 1.95fr 1.9fr 2fr 2.3fr 0.4fr;
    padding: 1rem 1.5rem;
    align-items: center;
  }

  ${up(Breakpoints.XL)} {
    padding-left: 2rem;
  }
`;

export const UID = styled.div`
  grid-area: uid;
  font-weight: bold;

  ${up(Breakpoints.LG)} {
    grid-area: unset;
    order: 1;
  }
`;

export const Hash = styled.span`
  color: ${({ theme }) => theme.colors.wistFull};
`;

export const Payer = styled.div`
  grid-area: clientName;
  justify-self: end;
  color: ${({ theme }) => theme.colors.wildblueYonder};
  letter-spacing: -0.25px;

  ${up(Breakpoints.LG)} {
    grid-area: unset;
    order: 3;
    justify-self: center;
  }
`;

export const PaymentDue = styled.div`
  grid-area: paymentDue;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.wildblueYonder};

  ${up(Breakpoints.LG)} {
    grid-area: unset;
    margin: 0;
    order: 2;
  }
`;

export const TotalAmount = styled.div`
  grid-area: totalAmount;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.8px;
  font-weight: bold;

  ${up(Breakpoints.LG)} {
    grid-area: unset;
    order: 4;
    justify-self: end;
  }
`;

export const StyledStatusTag = styled(StatusTag)`
  grid-area: status;
  justify-self: end;
  align-self: center;

  ${up(Breakpoints.LG)} {
    grid-area: unset;
    order: 5;
  }
`;

export const Arrow = styled(ReactSVG)`
  display: none;

  ${up(Breakpoints.LG)} {
    display: block;
    order: 6;
    justify-self: end;
  }
`;
