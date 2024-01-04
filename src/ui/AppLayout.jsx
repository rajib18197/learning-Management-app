import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Container = styled.div`
  padding: 0 4rem;
`;

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </StyledAppLayout>
  );
}
