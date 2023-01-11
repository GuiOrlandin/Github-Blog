import { HeaderContainer } from "./styles";
import gitgubLogo from "../../assets/github-logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={gitgubLogo} alt="" />
    </HeaderContainer>
  );
}
