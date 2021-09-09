import { FC } from 'react';
import Link from 'next/link';
import {
  Container,
  UID,
  Hash,
  Payer,
  PaymentDue,
  TotalAmount,
  StyledStatusTag,
  Arrow,
} from './Invoice.styles';

type Props = {
  url: string;
  status: string;
};

const Invoice: FC<Props> = ({ url, status }) => {
  return (
    <Link href={url} passHref>
      <Container href={url}>
        <UID>
          <Hash>#</Hash>RT3080
        </UID>
        <Payer>Jensen Huang</Payer>
        <PaymentDue>Due 19 Aug 2021</PaymentDue>
        <TotalAmount>£ 1,800.90</TotalAmount>
        <StyledStatusTag className={''} variant={status} />
        <Arrow src='/icons/arrow-right.svg' alt='arrow' />
      </Container>
    </Link>
  );
};

export default Invoice;
