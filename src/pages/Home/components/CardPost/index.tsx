import { useNavigate } from "react-router-dom";
import { CardContainer, CardContent, TittleAndDate } from "./styles";
import ReactMarkdown from "react-markdown";
import { relativeDateFormatter } from "../../../../utils/formatter";
import { IssueInfo } from "../..";

interface publicationsListProps {
  issue: IssueInfo;
}

export function CardPost({ issue }: publicationsListProps) {
  const formattedDate = relativeDateFormatter(issue.created_at);
  const navigate = useNavigate();
  return (
    <div>
      <CardContainer onClick={() => navigate(`/post/${issue.number}`)}>
        <TittleAndDate>
          <h1>{issue?.title}</h1>
          <span>{formattedDate}</span>
        </TittleAndDate>
        <CardContent>
          <ReactMarkdown>{issue.body}</ReactMarkdown>
        </CardContent>
      </CardContainer>
    </div>
  );
}
