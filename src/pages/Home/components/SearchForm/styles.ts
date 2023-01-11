import styled from "styled-components";

export const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 54rem;
  margin: 4.5rem 18rem 3rem 18rem;
  color: ${(props) => props.theme["base-label"]};

  input {
    padding: 0.75rem 1rem;
    background: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-border"]};
    border-radius: 6px;
    color: ${(props) => props.theme["base-label"]};

    line-height: 25.6px;
    margin-top: 0.75rem;

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }

    :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
    }
  }
`;

export const Publicationsinfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 1.125rem;
    font-weight: 700;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-span"]};
  }
`;
