import { ReactElement } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";

import * as S from "./styles";

export const NewTransactionModal = (): ReactElement => {
  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        <Dialog.Title>New transaction</Dialog.Title>
        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>

        <form>
          <input type="text" placeholder="Description" required />
          <input type="number" placeholder="Price" required />
          <input type="text" placeholder="Category" required />

          <button type="submit">Create transaction</button>
        </form>
      </S.Content>
    </Dialog.Portal>
  );
};
