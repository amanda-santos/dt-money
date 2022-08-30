import { ReactElement } from "react";

import { Header, Summary } from "../../components";
import { useTransactionsContext } from "../../contexts/TransactionsContext";
import { SearchForm } from "./components/SearchForm";

import * as S from "./styles";

export const Transactions = (): ReactElement => {
  const { transactions } = useTransactionsContext();

  return (
    <div>
      <Header />
      <Summary />

      <S.TransactionsContainer>
        <SearchForm />

        <S.TransactionsTable>
          <tbody>
            {transactions?.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <S.PriceHighlight variant={transaction.type}>
                    {transaction.price}
                  </S.PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </S.TransactionsTable>
      </S.TransactionsContainer>
    </div>
  );
};
