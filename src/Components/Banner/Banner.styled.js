import { styled } from "styled-components";

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px; /* Altura do banner */

  @media (max-width: 1024px) {
    height: 600px; /* Reduz a altura em telas menores */
  }

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 480px) {
    height: 200px;
    padding: 0 1rem;
  }
`;


export const BannerBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5);
`;

export const BannerImg = styled.img`
  width: 100%;            
  max-width: 500px;      
  border-radius: 15px;
  box-shadow: 0px 0px 0.75rem 0.25rem 
    ${({ theme, $category }) => theme.colors.categoryBorders[$category]};
  object-fit: contain;      

  @media (max-width: 768px) {
    max-width: 80%;  /* Reduz a imagem em telas menores */
  }

  @media (max-width: 480px) {
    max-width: 90%;
    height: auto;
  }
`;

export const BannerContent = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    width: 90%;
    gap: 0.5rem;
  }
`;

export const BannerTitle = styled.h1`
  font-size: 2.5rem;
  background-color: ${({ theme, $category}) =>
    theme.colors.categoryColors[$category]};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    max-width: 90%;
  }
`;

export const BannerDescription = styled.p`
  font-size: 1.2rem;
  margin-top: 1rem;
  max-width: 700px; 
  height: 4.5rem; 
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word; 
  white-space: normal; 

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    max-width: 100%;
  }
`;
