/* eslint-disable react/no-children-prop */
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

import { relativeDateFormatter } from "../../utils/formatter";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";

import githubicon from "../../assets/github-icon.svg";
import calendaricon from "../../assets/calendar-icon.svg";
import commenticon from "../../assets/comment-icon.svg";
import arrowup from "../../assets/arrowup-icon.svg";
import arrowleft from "../../assets/arrowleft-icon.svg";

import {
  AboutUser,
  PostContainer,
  PostContent,
  SummaryContainer,
  SummaryLinks,
} from "./styles";
import { IssueInfo } from "../Home";

const username = "GuiOrlandin";
const repo = "Github-Blog";

export function Post() {
  const [postData, setPostData] = useState<IssueInfo | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const getPost = async () => {
      const response = await api.get(`/repos/${username}/${repo}/issues/${id}`);
      setPostData(response.data);
      console.log(response.data.user.login);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    };
    getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!postData) {
    return <h1>Loading</h1>;
  }

  const formattedDate = relativeDateFormatter(postData.created_at);
  const content = postData.body;

  return (
    <PostContainer>
      <SummaryContainer>
        <SummaryLinks>
          <NavLink to={"/"} style={{ textDecoration: "none" }}>
            <img src={arrowleft} alt="" />
            VOLTAR
          </NavLink>
          <a href={postData.html_url} style={{ textDecoration: "none" }}>
            VER NO GITHUB <img src={arrowup} alt="" />
          </a>
        </SummaryLinks>

        <h1>{postData.title}</h1>
        <AboutUser>
          {postData.user.login && (
            <p>
              <img src={githubicon} alt="" />
              {postData.user.login}
            </p>
          )}

          <p>
            <img src={calendaricon} alt="" /> {postData && formattedDate}
          </p>
          <p>
            <img src={commenticon} alt="" />
            {postData.comments} comentários
          </p>
        </AboutUser>
      </SummaryContainer>
      <PostContent>
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeKatex]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  style={dracula as any}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </PostContent>
    </PostContainer>
  );
}
