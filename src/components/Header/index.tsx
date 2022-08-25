import { ReactElement } from "react";

import * as S from "./styles";
import logoImg from "../../assets/logo.svg";

export const Header = (): ReactElement => {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={logoImg} alt="" />

        <S.NewTransactionButton>New transaction</S.NewTransactionButton>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};
