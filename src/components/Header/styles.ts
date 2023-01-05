import styled from "styled-components";
import headerBackground from "../../assets/header-background.svg";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 40.375rem 8.375rem 40.375rem;
  background: ${() => `url(${headerBackground}) no-repeat
  `};
  background-size: cover;
`;
