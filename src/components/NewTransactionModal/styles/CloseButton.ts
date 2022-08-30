import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors["gray-500"]};
`;
