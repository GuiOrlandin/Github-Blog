import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const SummaryContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin: -5.5625rem 18rem 0 18rem;
  padding: 2rem;
  width: 48.8125rem;
  background-color: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["base-title"]};
    margin-bottom: 0.5rem;
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    color: ${(props) => props.theme.blue};
    border: 1px solid transparent;
    :hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }

  p {
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const SummaryLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
`;

export const AboutUser = styled.div`
  display: flex;
  gap: 1.5rem;

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const PostContent = styled.div`
  margin: 0 18rem;
  height: 100%;
  width: 48.8125rem;
  padding: 2.5rem 2rem;

  a {
    text-decoration: none;
    margin-bottom: 0.5rem;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    color: ${(props) => props.theme.blue};
    text-decoration: underline solid ${(props) => props.theme.blue};
  }

  h2 {
    margin-top: 2rem;
    color: ${(props) => props.theme["base-text"]};
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  p {
    margin: 2rem 0;
  }

  li {
    font-size: 1rem;
    margin: 1rem 0 1rem 1rem;
  }

  img {
    margin-top: 1.5rem;
    width: 100%;
  }
`;
