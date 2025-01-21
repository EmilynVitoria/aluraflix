import styled from "styled-components";

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.background};

  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 1rem; 

  min-height: calc(100vh - 200px); 
  box-sizing: border-box; 
`;

export const SuccessMessage = styled.div`
  color: ${({ theme, $category }) => theme.colors.color[$category]};
  font-size: 1.2rem;
  padding: 10px;
  margin: 20px 0;
  background-color: ${({ theme }) => theme.colors.color};
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 2px 5px #fff;
`;