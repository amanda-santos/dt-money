import styled from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

interface TransactionTypeButtonProps {
  variant: "income" | "outcome";
}

export const TransactionTypeButton = styled(
  RadioGroup.Item
)<TransactionTypeButtonProps>`
  background: ${({ theme }) => theme.colors["gray-700"]};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${({ theme }) => theme.colors["gray-300"]};

  svg {
    color: ${({ theme, variant }) =>
      variant === "income"
        ? theme.colors["green-300"]
        : theme.colors["red-300"]};
  }

  &[data-state="unchecked"]:hover {
    transition: background-color 0.2s;
    background: ${({ theme }) => theme.colors["gray-600"]};
  }

  &[data-state="checked"] {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme, variant }) =>
      variant === "income"
        ? theme.colors["green-500"]
        : theme.colors["red-500"]};

    svg {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
