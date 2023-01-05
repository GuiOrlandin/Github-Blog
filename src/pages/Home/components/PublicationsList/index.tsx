import {
  PulicationsListContainer,
  PulicationsListContent,
  TittleAndDate,
} from "./styles";

export function PublicationsList() {
  return (
    <PulicationsListContainer>
      <PulicationsListContent>
        <TittleAndDate>
          <h1>JavaScript data types and data structures</h1>
          <span>Há 1 dia</span>
        </TittleAndDate>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
      </PulicationsListContent>
      <PulicationsListContent>
        <TittleAndDate>
          <h1>JavaScript data types and data structures</h1>
          <span>Há 1 dia</span>
        </TittleAndDate>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
      </PulicationsListContent>
    </PulicationsListContainer>
  );
}
