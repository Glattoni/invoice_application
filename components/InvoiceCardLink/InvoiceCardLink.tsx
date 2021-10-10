import { FC } from 'react';
import Link from 'next/link';
import { Months } from '../../enums/months';
import { formatPrice } from '../../utils/helpers';
import {
  Container,
  ID,
  Hash,
  ClientName,
  PaymentDue,
  Total,
  StyledStatusTag,
  ArrowIcon,
} from './InvoiceCardLink.styles';

type Props = {
  id: string;
  clientName: string;
  paymentDue: string;
  total: number;
  status: string;
};

const InvoiceCardLink: FC<Props> = (props) => {
  const { id, clientName, paymentDue, total, status } = props;

  const invoiceUrl = `/invoices/${id}`;
  const totalAmount = formatPrice(total);
  const [year, month, day] = paymentDue.split('-');
  const shortenedMonth = Months[+month].substr(0, 3);

  return (
    <Link href={invoiceUrl} passHref>
      <Container href={invoiceUrl}>
        <ID>
          <Hash>#</Hash>
          {id}
        </ID>
        <ClientName>{clientName}</ClientName>
        <PaymentDue>
          Due {day} {shortenedMonth} {year}
        </PaymentDue>
        <Total>{totalAmount}</Total>
        <StyledStatusTag className={''} variant={status} />
        <ArrowIcon src='/icons/arrow-right.svg' alt='arrow' />
      </Container>
    </Link>
  );
};

export default InvoiceCardLink;
