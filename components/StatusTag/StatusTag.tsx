import { FC } from 'react';
import { Wrapper, Status } from './StatusTag.styles';

type Props = {
  variant: string;
};

const StatusTag: FC<Props> = ({ variant }) => {
  return (
    <Wrapper variant={variant}>
      <Status>{variant}</Status>
    </Wrapper>
  );
};

export default StatusTag;
