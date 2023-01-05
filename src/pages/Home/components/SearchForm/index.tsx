import { Publicationsinfo, SearchFormContainer } from "./styles";

export function SeachForm() {
  return (
    <SearchFormContainer>
      <Publicationsinfo>
        <h2>Publicações</h2>
        <p>6 publicações</p>
      </Publicationsinfo>

      <input type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  );
}
