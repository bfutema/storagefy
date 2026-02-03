import styled from 'styled-components';

export const Page = styled.main`
  display: flex;
  height: 100dvh;
  min-height: 100dvh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
  transition: background-color 0.3s ease;
`;

export const MainArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
`;

export const Content = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;

`;
