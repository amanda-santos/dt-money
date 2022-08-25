import { ReactElement } from "react";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

import * as S from "./styles";

export const Summary = (): ReactElement => {
  return (
    <S.SummaryContainer>
      <S.SummaryCard iconColor="green">
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} />
        </header>

        <strong>R$ 17.400,00</strong>
      </S.SummaryCard>

      <S.SummaryCard iconColor="red">
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} />
        </header>

        <strong>R$ 17.400,00</strong>
      </S.SummaryCard>

      <S.SummaryCard variant="green" iconColor="white">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} />
        </header>

        <strong>R$ 17.400,00</strong>
      </S.SummaryCard>
    </S.SummaryContainer>
  );
};
