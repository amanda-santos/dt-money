import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { api } from "../lib/axios";
import { Transaction } from "../types";

interface TransactionsContextType {
  transactions: Transaction[];
  createTransaction: (
    data: Omit<Transaction, "id" | "createdAt">
  ) => Promise<void>;
  fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps): ReactElement => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = async (query?: string) => {
    const response = await api.get("transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });

    setTransactions(response.data);
  };

  const createTransaction = async (
    transaction: Omit<Transaction, "id" | "createdAt">
  ) => {
    const { description, price, category, type } = transaction;

    const response = await api.post("transactions", {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    });

    setTransactions((prevState) => [response.data, ...prevState]);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, createTransaction, fetchTransactions }}
    >
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
