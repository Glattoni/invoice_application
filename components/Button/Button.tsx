import { FC } from 'react';
import Image from 'next/image';
import { StyledButton, PlusButton } from './Button.styles';

type Props = {
  variant: 'default' | 'paid' | 'edit' | 'draft' | 'delete' | 'item';
  withIcon?: boolean;
};

const Button: FC<Props> = ({ variant, withIcon, children }) => {
  return (
    <StyledButton variant={variant} withIcon={withIcon}>
      {withIcon && (
        <PlusButton>
          <Image src='/icons/plus.svg' width={10} height={10} alt='plus icon' />
        </PlusButton>
      )}
      {children}
    </StyledButton>
  );
};

export default Button;
