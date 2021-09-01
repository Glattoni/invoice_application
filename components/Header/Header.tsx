import { Buttons, Wrapper, Content } from './Header.styles';
import Button from '../Button/Button';
import FilterByStatus from '../FilterByStatus/FilterByStatus';

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <h1>Invoices</h1>
        <p className='short-description'>No invoices</p>
        <p className='long-description'>There are 7 total invoices</p>
      </Content>
      <Buttons>
        <FilterByStatus />
        <Button withIcon>
          New &nbsp;<span>invoice</span>
        </Button>
      </Buttons>
    </Wrapper>
  );
};

export default Header;
