import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 26rem;
  height: 16.25rem;
  padding: 2rem 2rem 2rem 2rem;
  border: solid 2px transparent;
  border-radius: 10px;
  background: ${(props) => props.theme["base-post"]};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  overflow: hidden;
  -webkit-box-orient: vertical;
  a {
    color: ${(props) => props.theme.blue};
  }

  strong {
  }

  h1 {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-title"]};
    width: 283px;
  }
  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-span"]};
  }

  h2 {
    margin-top: 1.25rem;
    color: ${(props) => props.theme["base-text"]};
  }

  p {
    margin-top: 1.25rem;
    text-align: left;
    width: 22rem;
    height: 100%;
    font-size: 1rem;
    color: ${(props) => props.theme["base-text"]};
  }

  :hover {
    cursor: pointer;
    border: solid 2px ${(props) => props.theme["base-label"]};
  }
`;

export const CardContent = styled.div`
  width: 22rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  overflow: hidden;
  -webkit-box-orient: vertical;

  a {
    text-decoration: none;
  }

  a:hover {
    color: ${(props) => props.theme.blue};
    text-decoration: underline;
  }
`;
export const TittleAndDate = styled.div`
  display: flex;
  align-items: top;
  span {
    margin-top: 0.35rem;
  }
`;
