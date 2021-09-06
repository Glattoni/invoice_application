import styled from 'styled-components';

export const Status = styled.span`
  position: relative;
  padding-left: 1rem;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
  }
`;

export const Wrapper = styled.div<{ variant: string }>`
  max-width: 6.5rem;
  padding: 0.8rem 0;
  border-radius: 0.375rem;
  text-align: center;
  font-weight: bold;
  text-transform: capitalize;
  ${({ variant, theme }) => {
    switch (variant) {
      case 'paid':
        return `
			color: ${theme.colors.shamrock};
			background-color: ${theme.colors.shamrockLight};
			${Status}::after {
				background-color: ${theme.colors.shamrock};
			}
		  `;
      case 'pending':
        return `
			color: ${theme.colors.pizazz};
			background-color: ${theme.colors.pizazzLight};
			${Status}::after {
				background-color: ${theme.colors.pizazz};
			}
		  `;
      case 'draft':
        return `
			color: ${theme.colors.brightGray};
			background-color: ${theme.colors.dustyGray};
			${Status}::after {
				background-color: ${theme.colors.brightGray};
			}
		  `;
    }
  }}
`;
