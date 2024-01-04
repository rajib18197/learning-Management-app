import { Link } from "react-router-dom";
import styled from "styled-components";
import Logout from "./Logout";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0.6rem 2rem;
  align-items: center;
  background-color: var(--color-grey-800);
  color: var(--color-grey-100);
`;

const Logo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 4.6rem;
  width: auto;
`;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export default function Navbar() {
  return (
    <StyledNav>
      <Logo>
        <Link to={"/"}>
          <Img src="/vite.svg" />
        </Link>
      </Logo>

      <Container>
        <Link to="/leaderboard">Leaderboard</Link>

        <Logout />
      </Container>
    </StyledNav>
  );
}
