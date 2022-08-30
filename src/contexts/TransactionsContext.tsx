import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { Transaction } from "../types";

interface TransactionsContextType {
  transactions: Transaction[];
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps): ReactElement => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const loadTransactions = async () => {
    const response = await fetch("http://localhost:3333/transactions");
    const data = await response.json();

    setTransactions(data);
  };

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactionsContext = (): TransactionsContextType => {
  const context = useContext(TransactionsContext);

  if (
    context &&
    Object.keys(context).length === 0 &&
    Object.getPrototypeOf(context) === Object.prototype
  ) {
    throw new Error(
      "useTransactionsContext must be used within a TransactionsProvider"
    );
  }

  return context;
};
