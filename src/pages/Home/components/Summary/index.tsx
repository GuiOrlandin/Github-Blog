import {
  AboutUser,
  DescriptionUser,
  SummaryContainer,
  SummaryContent,
  NameAndGitHub,
} from "./styles";
import profilePic from "../../../../assets/profilePic.svg";
import arrowup from "../../../../assets/arrowup-icon.svg";
import githubicon from "../../../../assets/github-icon.svg";
import companyicon from "../../../../assets/company-icon.svg";
import followersicon from "../../../../assets/followers-icon.svg";

export function Summary() {
  return (
    <SummaryContainer>
      <img src={profilePic} alt="" />
      <SummaryContent>
        <NameAndGitHub>
          <h1>Cameron Williamson</h1>
          <a href="https://github.com/GuiOrlandin">
            GITHUB <img src={arrowup} alt="" />
          </a>
        </NameAndGitHub>
        <DescriptionUser>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </DescriptionUser>

        <AboutUser>
          <p>
            <img src={githubicon} alt="" /> cameronwll
          </p>
          <p>
            <img src={companyicon} alt="" /> Rocketseat
          </p>
          <p>
            <img src={followersicon} alt="" />
            32 seguidores
          </p>
        </AboutUser>
      </SummaryContent>
    </SummaryContainer>
  );
}
