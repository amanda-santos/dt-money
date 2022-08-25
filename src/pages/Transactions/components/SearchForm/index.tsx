import { ReactElement } from "react";
import { MagnifyingGlass } from "phosphor-react";

import * as S from "./styles";

export const SearchForm = (): ReactElement => {
  return (
    <S.SearchFormContainer>
      <input type="text" placeholder="Search for transactions" />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Search
      </button>
    </S.SearchFormContainer>
  );
};
