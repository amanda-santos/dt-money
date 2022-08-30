import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${({ theme }) => theme.colors["gray-800"]};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background: ${({ theme }) => theme.colors["gray-900"]};
      color: ${({ theme }) => theme.colors["gray-300"]};
      padding: 1rem;
      &::placeholder {
        color: ${({ theme }) => theme.colors["gray-500"]};
      }
    }

    button[type="submit"] {
      height: 50px;
      border: 0;
      background: ${({ theme }) => theme.colors["green-500"]};
      color: ${({ theme }) => theme.colors.white};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.25rem;
      cursor: pointer;
      &:hover {
        background: ${({ theme }) => theme.colors["green-700"]};
        transition: background-color 0.2s;
      }
    }
  }
`;
