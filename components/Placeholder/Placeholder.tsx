import {
  Wrapper,
  StyledImage,
  Title,
  Content,
  FullButtonName,
} from './Placeholder.styles';

const Placeholder = () => {
  return (
    <Wrapper>
      <StyledImage src='/icons/illustration-empty.svg' />
      <Title>There is nothing here</Title>
      <Content>
        Create an invoice by clicking the <span>New</span>
        <FullButtonName>Invoice</FullButtonName> button and get started
      </Content>
    </Wrapper>
  );
};

export default Placeholder;
