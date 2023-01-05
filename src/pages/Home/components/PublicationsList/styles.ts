import styled from "styled-components";

export const PulicationsListContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin: 0 18rem 14.625rem 18rem;
`;

export const PulicationsListContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem 2rem 2rem;
  border: solid 2px transparent;
  border-radius: 10px;
  background: ${(props) => props.theme["base-post"]};

  h1 {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-title"]};
    width: 283px;
  }
  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-span"]};
  }

  p {
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    font-size: 1rem;
    color: ${(props) => props.theme["base-text"]};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  :hover {
    cursor: pointer;
    border: solid 2px ${(props) => props.theme["base-label"]};
  }
`;
export const TittleAndDate = styled.div`
  display: flex;
  margin-top: 2rem;
`;
