import styled from 'styled-components';

export const PokemonName = styled.h1`
  font-size: 32px;

  @media (max-width: 670px) {
    font-size: 24px;
  }
`;

export const PokemonImage = styled.img`
  width: 360px;

   @media (max-width: 600px) {
    width: 200px;
  }
`;

export const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  border-radius: 10px;
  padding: 20px;
  max-width: 500px;

  @media (max-width: 670px) {
    max-width: 70%;
  }
`;

export const PokemonContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
  margin-top: 20px;
  font-size: 16px;
  font-family: 'Times New Roman', sans-serif;
  background-color: ${({ theme }) => theme.infoBackground};
  color: ${({ theme }) => theme.color};
  padding: 15px;
  border-radius: 10px;

  max-height: 120px;   /* altura máxima do container */
  overflow-y: auto;    /* habilita a barra de rolagem vertical */

  /* Estilizando a barra de rolagem */
  &::-webkit-scrollbar {
    width: 10px;              /* largura da barra */
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);  /* trilho da barra */
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.rollBarBackground}; /* cor do “dedo” */
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.infoBackground}; /* espaçamento */
  }

  @media (max-width: 670px) {
    max-height: 100px;
    font-size: 14px;
    padding: 10px;
    text-align: left;
  }
`;

export const AbilitiesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style-type: disc;
  padding: 10px 20px;
  margin: 0;
  text-align: left;
`;

export const BackButton = styled.button`
  padding: 10px 20px;
  background-color: #ff1c1c;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #e60000;
  }
`;