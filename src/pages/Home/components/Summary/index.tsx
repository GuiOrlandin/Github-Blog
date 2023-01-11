import {
  AboutUser,
  DescriptionUser,
  SummaryContainer,
  SummaryContent,
  NameAndGitHub,
  AvatarImg,
} from "./styles";
import arrowup from "../../../../assets/arrowup-icon.svg";
import githubicon from "../../../../assets/github-icon.svg";
import companyicon from "../../../../assets/company-icon.svg";
import followersicon from "../../../../assets/followers-icon.svg";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";

interface Userinfo {
  login: string;
  name: string;
  avatar_url: string;
  followers: number;
  company?: string;
  bio: string;
}

const username = "GuiOrlandin";

export function Summary() {
  const [userinfo, setUserinfo] = useState<Userinfo>({} as Userinfo);

  const getUserInformations = useCallback(async () => {
    try {
      const response = await api.get(`/users/${username}`);
      setUserinfo(response.data);
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userinfo]);

  useEffect(() => {
    getUserInformations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SummaryContainer>
      <AvatarImg src={userinfo?.avatar_url} alt="" />
      <SummaryContent>
        <NameAndGitHub>
          <h1>{userinfo?.name}</h1>
          <a href="https://github.com/GuiOrlandin">
            GITHUB <img src={arrowup} alt="" />
          </a>
        </NameAndGitHub>
        <DescriptionUser>
          {userinfo?.bio ? userinfo?.bio : "Sem descrição."}
        </DescriptionUser>
        <AboutUser>
          <p>
            <img src={githubicon} alt="" /> {userinfo?.login}
          </p>
          <p>
            {userinfo?.company && (
              <>
                <img src={companyicon} alt="" />
                {userinfo?.company}
              </>
            )}
          </p>
          <p>
            <img src={followersicon} alt="" />
            {userinfo?.followers} seguidores
          </p>
        </AboutUser>
      </SummaryContent>
    </SummaryContainer>
  );
}
