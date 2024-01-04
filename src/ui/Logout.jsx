import styled from "styled-components";
import Heading from "./Heading";
import ButtonIcon from "./ButtonIcon";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

const StyledLogout = styled.div`
  background-color: var(--color-brand-600);
  color: var(--color-grey-100);
  padding: 0.8rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  border-radius: 3px;
`;

export default function Logout() {
  return (
    <StyledLogout>
      <Heading as="h3">Saad Hasan</Heading>
      <ButtonIcon>
        <HiArrowRightOnRectangle />
      </ButtonIcon>
    </StyledLogout>
  );
}
