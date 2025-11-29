import styled  from "styled-components";

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    @media (max-width: 575px) {
        gap: 25px;
        margin-top: 50px;
        font-size: 14px;
    }
`;