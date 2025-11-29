import styled from "styled-components";
import { typeColors } from "../utils/pokemonTypeStyles.js";

export const DropdownContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 220px;
  font-family: serif, sans-serif;

  @media (max-width: 700px) {
    width: 140px;
    font-size: 0.8rem;
  }
`;

export const DropdownHeader = styled.div`
  color: ${({ theme }) => theme.selectTitleColor};
  background: ${({ $type, theme }) => typeColors[$type] || theme.selectTitleBackground};
  padding: 10px 14px;
  border: 2px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;

  transition: 0.2s ease;

  &:hover {
    border-color: #999;
  }
`;

export const ChevronIconWrapper = styled.span`
  display: flex;
  align-items: center;
  transition: transform 0.2s ease;
  transform: ${({ $open }) => ($open ? "rotate(180deg)" : "rotate(0)")};
`;

export const DropdownList = styled.ul`
  margin: 6px 0 0 0;
  padding: 15px;
  list-style: none;
  text-align: left;

  position: absolute;
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  z-index: 10;

  background-color: ${({ theme }) => theme.selectItemsBackground};
  backdrop-filter: blur(10px);
  border: 1px solid #ccc;
  border-radius: 12px;

  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  /* Estilizando a barra de rolagem */
  &::-webkit-scrollbar {
    width: 10px;              /* largura da barra */
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);  /* trilho da barra */
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(173, 250, 237, 0.85); /* cor da barra */
    border-radius: 10px;
    border: 2px solid rgba(6, 187, 127, 0.7);
  }

  @media (max-width: 575px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 30px;
    max-height: none;
    overflow-y: auto;
    z-index: 1000;
    text-align: center;
  }
`;

export const DropdownItem = styled.li`
  color: ${({ theme }) => theme.selectItemsColor};
  padding: 12px 16px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: 0.30s ease;
  border-radius: 12px;
  background-color: ${({ $type, theme }) => typeColors[$type] || theme.selectItemsBackground};

  &:hover {
    background-color: transparent;
    border:  1px solid #000;
    border-radius: 8px;
  }

  svg {
    width: 20px;
    height: 20px;
    stroke: ${({ $type, theme }) => typeColors[$type] || theme.selectItemsBackground};
  }
`;