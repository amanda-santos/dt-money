import styled, { css } from "styled-components";

interface SummaryCardProps {
  variant?: "green";
  iconColor: "green" | "red" | "white";
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${({ theme }) => theme.colors["gray-600"]};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors["gray-300"]};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  svg {
    color: ${({ theme, iconColor }) =>
      iconColor === "white"
        ? theme.colors[iconColor]
        : theme.colors[`${iconColor}-300`]};
  }

  ${({ variant, theme }) =>
    variant === "green" &&
    css`
      background: ${theme.colors["green-700"]};
    `}
`;
