import styled from "styled-components";

export const PostContainer = styled.div`
  height: 100%;
`;

export const SummaryContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin: -5.5625rem 18rem 2.5rem 18rem;
  padding: 2rem;
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

export const DescriptionUser = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
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
  margin: 0 20rem 4.5rem 20rem;
`;

export const ResumeAndContent = styled.div`
  h2 {
    margin-top: 2rem;
    color: ${(props) => props.theme.blue};
    font-size: 1rem;
    font-weight: 400;
    text-decoration: underline;
  }
`;

export const ExampleContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  padding: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;

  background: ${(props) => props.theme["base-post"]};

  p {
    display: flex;
    gap: 0.5rem;
  }

  strong {
    color: #6ad445;
  }

  span {
    color: #80abd6;
  }
`;

export const Comment = styled.div`
  display: flex;
`;
