import styled from "styled-components";
import CoursePlayerInfo from "../features/coursePlayer/CoursePlayerInfo";

const StyledSection = styled.section`
  padding: 6rem 0;
  background-color: var(--color-grey-100);
  color: var(--color-grey-700);
`;

export default function CoursePlayer() {
  return (
    <StyledSection>
      <CoursePlayerInfo />
    </StyledSection>
  );
}
