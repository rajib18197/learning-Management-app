import styled from "styled-components";

const ButtonIcon = styled.button`
  display: inline-block;
  font-size: 1.6rem;
  text-transform: capitalize;
  background-color: var(--color-grey-100);
  color: var(--color-grey-800);
  border-radius: 2px;
  border: none;
  outline: none;
  padding: 0.6rem;

  & svg {
    height: 2rem;
    width: 2rem;
    color: var(--color-brand-600);
  }

  &:hover {
    background-color: var(--color-brand-100);
  }
`;

export default ButtonIcon;
