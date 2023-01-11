import { Publicationsinfo, SearchFormContainer } from "./styles";
import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "../../../../hooks/useDebounce";

interface searchFormProps {
  onChange: (search: string) => Promise<void>;
  issueLenght: number;
}

export function SeachForm({ onChange, issueLenght }: searchFormProps) {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce<string>(value, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    onChange(debouncedValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <SearchFormContainer>
      <Publicationsinfo>
        <h2>Publicações</h2>
        <p>{issueLenght} publicações</p>
      </Publicationsinfo>

      <input
        type="text"
        onChange={handleChange}
        placeholder="Buscar conteúdo"
      />
    </SearchFormContainer>
  );
}
