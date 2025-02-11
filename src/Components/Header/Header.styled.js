import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LinkNav = styled(NavLink)`
  &.active button {
    background: #000000e5;
    border: 0.125rem solid #2271d1;
    box-shadow: 0px 0px 0.75rem 0.25rem #2271d1 inset;
    color: #2271d1;
  }
`;

export const Logo = styled.img`
  height: 3.125rem;
  margin-right: 2rem;

  @media (max-width: 768px) {
    height: 2.5rem;
    margin-right: 0;
  }
`;

export const Nav = styled.nav`
  box-shadow: 0px 0px 0.75rem 0.25rem #2271d1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 4rem;
  background-color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
`;

export const NavContainer = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

  @media (max-width: 480px) {
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 0.5rem;
}
`;
