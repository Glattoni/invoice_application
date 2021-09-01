import { useState } from 'react';
import {
  Wrapper,
  Header,
  OptionList,
  OptionItem,
  Radio,
  Checkbox,
  Input,
} from './FilterByStatus.styles';

const filterOptions: string[] = ['draft', 'pending', 'paid'];

const FilterByStatus = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Wrapper>
      <Header isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        Filter <span>by status</span>
      </Header>
      <OptionList isOpen={isOpen}>
        {filterOptions.map((option: string) => {
          return (
            <OptionItem key={option}>
              <Input type='radio' name='filter-option' id={option} />
              <Radio htmlFor={option}>
                <Checkbox />
                <span className='title'>{option}</span>
              </Radio>
            </OptionItem>
          );
        })}
      </OptionList>
    </Wrapper>
  );
};

export default FilterByStatus;
