import githubicon from "../../assets/github-icon.svg";
import calendaricon from "../../assets/calendar-icon.svg";
import commenticon from "../../assets/comment-icon.svg";
import arrowup from "../../assets/arrowup-icon.svg";
import arrowleft from "../../assets/arrowleft-icon.svg";

import {
  AboutUser,
  Comment,
  ExampleContainer,
  PostContainer,
  PostContent,
  ResumeAndContent,
  SummaryContainer,
  SummaryLinks,
} from "./styles";
import { NavLink } from "react-router-dom";

export function Post() {
  return (
    <PostContainer>
      <SummaryContainer>
        <SummaryLinks>
          <NavLink to={"/"} style={{ textDecoration: "none" }}>
            <img src={arrowleft} alt="" />
            VOLTAR
          </NavLink>
          <a href="" style={{ textDecoration: "none" }}>
            VER NO GITHUB <img src={arrowup} alt="" />
          </a>
        </SummaryLinks>

        <h1>JavaScript data types and data structures</h1>
        <AboutUser>
          <p>
            <img src={githubicon} alt="" />
            login
          </p>
          <p>
            <img src={calendaricon} alt="" /> Rocketseat
          </p>
          <p>
            <img src={commenticon} alt="" />
            32 comentários
          </p>
        </AboutUser>
      </SummaryContainer>
      <PostContent>
        <ResumeAndContent>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn.
          </p>
          <h2>Dynamic typing</h2>
          <p>
            JavaScript is a loosely typed and dynamic language. Variables in
            JavaScript are not directly associated with any particular value
            type, and any variable can be assigned (and re-assigned) values of
            all types:
          </p>
        </ResumeAndContent>
        <ExampleContainer>
          <p>
            <span>let</span> foo = <strong>42</strong>;
            <Comment>{"// foo is now a number"}</Comment>
          </p>
          <p>
            foo = <strong>‘bar’</strong>;
            <Comment>{"// foo is now a string"}</Comment>
          </p>
          <p>
            foo = <strong>true</strong>;
            <Comment>{"// foo is now a boolea"}n</Comment>
          </p>
        </ExampleContainer>
      </PostContent>
    </PostContainer>
  );
}
