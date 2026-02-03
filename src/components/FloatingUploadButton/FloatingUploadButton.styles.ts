import styled from 'styled-components';

export const Button = styled.button`
  display: none;
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 100;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s, transform 0.1s, box-shadow 0.2s;

  @media (max-width: 767px) {
    display: flex;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
  }

  &:active {
    transform: translateX(-50%) scale(0.96);
  }
`;
