import { ReactElement } from "react";
import { ThemeProvider } from "styled-components";

import { TransactionsProvider } from "./contexts/TransactionsContext";
import { Transactions } from "./pages/Transactions";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export const App = (): ReactElement => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  );
};
