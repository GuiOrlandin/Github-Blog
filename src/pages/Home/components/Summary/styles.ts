import styled from "styled-components";

export const SummaryContainer = styled.header`
  display: flex;
  width: 54rem;
  align-items: center;
  justify-content: center;
  margin: -5.5625rem 18rem 0 18rem;
  padding: 2rem;
  background-color: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
`;

export const SummaryContent = styled.div`
  margin-left: 2rem;
  p {
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const AvatarImg = styled.img`
  height: 9.25rem;
  width: 9.25rem;
  border-radius: 8px;
`;

export const DescriptionUser = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  width: 38.25rem;
`;

export const NameAndGitHub = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["base-title"]};
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
