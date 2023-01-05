import { Summary } from "./components/Summary";
import { SeachForm } from "./components/SearchForm";
import { HomeContainer } from "./styles";
import { PublicationsList } from "./components/PublicationsList";

export function Home() {
  return (
    <HomeContainer>
      <Summary />
      <SeachForm />
      <PublicationsList />
    </HomeContainer>
  );
}
