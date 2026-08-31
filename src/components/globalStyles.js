import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  #root {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.5s ease;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  ::selection {
    background: #6c63ff;
    color: #ffffff;
  }

  ::-webkit-scrollbar-thumb {
    background: #6c63ff;
  }
`;
