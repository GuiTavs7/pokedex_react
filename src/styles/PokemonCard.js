import styled from 'styled-components';

export const DivPokemonCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 28px;
    width: 200px;
    padding: 18px;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.background};
    border: 1px solid #ccc;
    border-radius: 20px;
    overflow: hidden;
    text-align: center;

    &&:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
        cursor: pointer;
    }

    @media (max-width: 400px) {
        width: 100px;
        font-size: 0.6rem;
    }

     @media (min-width: 401px) and (max-width: 575px) {
        width: 120px;
        font-size: 0.8rem;
    }
`;

export const ImgPokemon = styled.img`
    width: 60%;
    height: auto;
`;