import styled from "styled-components";

interface TransactionTypeButtonProps {
  variant: "income" | "outcome";
}

export const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
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
`;
