import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 2px rgb(23, 33, 78);
  margin-bottom: 40px;
  margin-top: 40px;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.color};
  background-color: ${({ theme }) => theme.colors.secondary};
  outline: none;

  &::placeholder {
    color: #a9a9a9;
  }
`;

export const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.color};
  background-color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
`;


export const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.color};
  background-color: ${({ theme }) => theme.colors.background};
  resize: none;
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primaryHover};
  color: #fff;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FormTitle = styled.h2`
   text-align: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.color};
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #a9a9a9;
  margin-bottom: 2rem;
`;


