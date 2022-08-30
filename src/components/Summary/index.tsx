import { ReactElement } from "react";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

import { useTransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

import * as S from "./styles";

export const Summary = (): ReactElement => {
  const { transactions } = useTransactionsContext();

  const summary = transactions.reduce(
    (accumulator, transaction) => {
      if (transaction.type === "income") {
        accumulator.income += transaction.price;
        accumulator.total += transaction.price;
      } else {
        accumulator.outcome += transaction.price;
        accumulator.total -= transaction.price;
      }

      return accumulator;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return (
    <S.SummaryContainer>
      <S.SummaryCard iconColor="green">
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </S.SummaryCard>

      <S.SummaryCard iconColor="red">
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </S.SummaryCard>

      <S.SummaryCard variant="green" iconColor="white">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </S.SummaryCard>
    </S.SummaryContainer>
  );
};
