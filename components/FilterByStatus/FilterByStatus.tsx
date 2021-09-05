import { useState } from 'react';
import {
  Wrapper,
  Header,
  OptionList,
  OptionItem,
  Radio,
  Checkbox,
  Input,
  Title,
  FullName,
} from './FilterByStatus.styles';

const filterOptions: string[] = ['draft', 'pending', 'paid'];

const FilterByStatus = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Wrapper>
      <Header isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        Filter <FullName>by status</FullName>
      </Header>
      <OptionList isOpen={isOpen}>
        {filterOptions.map((option: string) => {
          return (
            <OptionItem key={option}>
              <Input type='radio' name='filter-option' id={option} />
              <Radio htmlFor={option}>
                <Checkbox />
                <Title>{option}</Title>
              </Radio>
            </OptionItem>
          );
        })}
      </OptionList>
    </Wrapper>
  );
};

export default FilterByStatus;
