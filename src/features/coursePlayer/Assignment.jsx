import styled from "styled-components";
import Heading from "../../ui/Heading";
import { useGetAssignmentMarkQuery } from "./coursePlayerApi";
import { useState } from "react";

const StyledAssignment = styled.div`
  background-color: var(--color-brand-600);
  color: var(--color-grey-100);
  padding: 2rem;
  border: 2px solid red;
`;

export default function Assignment({ assignment }) {
  const { data: assignmentMarks, isLoading } = useGetAssignmentMarkQuery(
    assignment.id
  );

  if (isLoading) return <h2>Loading</h2>;

  return (
    <StyledAssignment>
      <Heading as="h3">{assignment.title}</Heading>

      {assignmentMarks?.[0]?.status === "pending" && <AssignmentInput />}
      {assignmentMarks?.[0]?.status === "published" && (
        <div>
          <Heading as="h3">{assignmentMarks[0].student_name}</Heading>
          <Heading as="h3">{assignmentMarks[0].title}</Heading>
          <p>
            {assignmentMarks[0].mark} / {assignmentMarks[0].totalMark}
          </p>
          <p>{assignmentMarks[0].repo_link}</p>
        </div>
      )}
    </StyledAssignment>
  );
}

const Form = styled.form``;

const Input = styled.input``;
function AssignmentInput() {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input value={value} onChange={(e) => e.target.value} />
    </Form>
  );
}
