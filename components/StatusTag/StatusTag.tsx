import { FC } from 'react';
import { Wrapper, Status } from './StatusTag.styles';

type Props = {
  variant: string;
  className: string;
};

const StatusTag: FC<Props> = ({ variant, className }) => {
  return (
    <Wrapper className={className} variant={variant}>
      <Status>{variant}</Status>
    </Wrapper>
  );
};

export default StatusTag;
