import { styled } from "styled-components";

export const CategoryTitle = styled.h2`
  width: 300px;
  background-color: ${({ theme, $category }) =>
    theme.colors.categoryColors[$category]};
  color: #fff;
  padding: 0.5rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  

`;

export const VideoContainer = styled.div`
  padding-left: 3rem;
  box-sizing: border-box;
`;

export const VideoList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  
  gap: 40px;
  margin-bottom: 5%;
`;

export const VideoCard = styled.div`
  border-radius: 15px;
  overflow: hidden; 
  box-shadow: 0px 0px 0.75rem 0.25rem 
    ${({ theme, $category }) => theme.colors.categoryBorders[$category]};
  box-sizing: border-box;

`;