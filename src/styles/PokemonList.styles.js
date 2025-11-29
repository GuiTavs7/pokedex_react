import styled from "styled-components";

export const DivPokemonListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 45px;
`;

export const DivPokemonList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`;

export const Button = styled.button`
    width: 120px;
    height: 30px;
    background-color: #ff9494;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    color: #fff;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #d0d0d0;
    }
`;

export const DivButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;