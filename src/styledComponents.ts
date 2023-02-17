import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
}

const Button = styled.button<ButtonProps>`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  ${(props) =>
    props.primary &&
    `
    background-color: blue;
    color: white;
  `}

  ${(props) =>
    props.secondary &&
    `
    background-color: gray;
    color: white;
  `}
`;

export default Button;