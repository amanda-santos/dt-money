import { ReactElement } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useContextSelector } from "use-context-selector";

import { NewTransactionModal } from "../NewTransactionModal";
import { TransactionsContext } from "../../contexts/TransactionsContext";

import * as S from "./styles";
import logoImg from "../../assets/logo.svg";

export const Header = (): ReactElement => {
  const isNewTransactionModalOpen = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.isNewTransactionModalOpen;
    }
  );

  const setIsNewTransactionModalOpen = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.setIsNewTransactionModalOpen;
    }
  );

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root
          open={isNewTransactionModalOpen}
          onOpenChange={setIsNewTransactionModalOpen}
        >
          <Dialog.Trigger asChild>
            <S.NewTransactionButton>New transaction</S.NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};
