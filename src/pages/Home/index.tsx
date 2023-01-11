import { Summary } from "./components/Summary";
import { SeachForm } from "./components/SearchForm";
import { HomeContainer, PublicationsListContainer } from "./styles";

import { useCallback, useState } from "react";
import { api } from "../../lib/axios";
import { CardPost } from "./components/CardPost";
import { IssueInfo } from "./IssueInfo";

const username = "GuiOrlandin";
const repo = "Github-Blog";

export function Home() {
  const [issuesinfo, setIssuesinfo] = useState<IssueInfo[]>([]);

  const fetchIssues = useCallback(
    async (query: string = "") => {
      const response = await api.get(
        `/search/issues?q=${query}%20repo:${username}/${repo}`
      );

      setIssuesinfo(response.data.items);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [issuesinfo]
  );
  // useEffect(() => {
  //   fetchIssues();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <HomeContainer>
      <Summary />
      <SeachForm issueLenght={issuesinfo.length} onChange={fetchIssues} />
      <PublicationsListContainer>
        {issuesinfo.map((issue) => (
          <CardPost key={issue.number} issue={issue} />
        ))}
      </PublicationsListContainer>
    </HomeContainer>
  );
}
