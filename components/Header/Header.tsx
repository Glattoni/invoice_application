import { Buttons, Wrapper, Title, Description } from './Header.styles';
import Button from '../Button/Button';
import FilterByStatus from '../FilterByStatus/FilterByStatus';

const Header = () => {
  return (
    <Wrapper>
      <div>
        <Title>Invoices</Title>
        <Description>No invoices</Description>
      </div>
      <Buttons>
        <FilterByStatus />
        <Button withIcon>
          New <span>Invoice</span>
        </Button>
      </Buttons>
    </Wrapper>
  );
};

export default Header;
