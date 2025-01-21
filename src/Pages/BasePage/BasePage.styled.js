import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};

`;
