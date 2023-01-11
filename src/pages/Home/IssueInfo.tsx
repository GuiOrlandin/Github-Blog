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
