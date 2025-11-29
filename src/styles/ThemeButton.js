import styled from 'styled-components';

export const ThemeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 20px;
  right: 20px;

  width: 40px;
  height: 40px;

  border: none;
  border-radius: 50%;
  cursor: pointer;

  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: rotate(15deg) scale(1.1);
    box-shadow: 0 4px 10px rgba(0,0,0,0.6);
  }

  svg {
    transition: transform 0.3s ease;
  }

  @media (max-width: 600px) {
    width: 35px;
    height: 35px;
  }
`;
