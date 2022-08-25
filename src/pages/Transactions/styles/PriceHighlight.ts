import styled from "styled-components";

interface PriceHighlightProps {
  variant: "income" | "outcome";
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${({ variant, theme }) =>
    variant === "income" ? theme.colors["green-300"] : theme.colors["red-300"]};
`;
