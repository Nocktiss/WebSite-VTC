import styled from "styled-components";

export const StyledMenu = styled.nav`
  z-index: 2;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.primaryDark};
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  width: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.5s ease-in-out;
  outline: none !important;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    box-shadow: none;
  }
  p {
    text-transform: uppercase;
    padding: 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryWhite};
    transition: color 0.3s linear;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 0.9rem;
      text-align: left;
    }
    &:hover {
      color: ${({ theme }) => theme.primaryGold};
      outline: none !important;
    }
  }
`;
