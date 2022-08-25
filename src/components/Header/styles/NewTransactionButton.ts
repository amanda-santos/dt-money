import styled from "styled-components";

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${({ theme }) => theme["green-500"]};
  color: ${({ theme }) => theme["white"]};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme["green-700"]};
    transition: background-color 0.2s;
  }
`;
