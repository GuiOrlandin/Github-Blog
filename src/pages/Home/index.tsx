import { Summary } from "./components/Summary";
import { SeachForm } from "./components/SearchForm";
import { HomeContainer, PublicationsListContainer } from "./styles";

import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { CardPost } from "./components/CardPost";

export interface IssueInfo {
  title: string;
  number: number;
  login: string;
  body: string;
  created_at: string;
  comments: number;
  html_url: string;
  user: {
    login: string;
  };
}

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
    []
  );
  useEffect(() => {
    fetchIssues();
  }, []);
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
