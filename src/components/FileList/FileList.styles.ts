import styled from 'styled-components';
import type { ViewType } from '../../types/view';

const gridColumns: Record<ViewType, string> = {
  grid: 'repeat(auto-fill, minmax(160px, 1fr))',
  tiles: 'repeat(auto-fill, minmax(120px, 1fr))',
  list: '1fr',
  details: '1fr',
};

const gridColumnsMobile: Record<ViewType, string> = {
  grid: 'repeat(auto-fill, minmax(120px, 1fr))',
  tiles: 'repeat(auto-fill, minmax(100px, 1fr))',
  list: '1fr',
  details: '1fr',
};

export const List = styled.ul<{ $viewType: ViewType }>`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: ${({ $viewType }) => gridColumns[$viewType]};
  gap: ${({ theme, $viewType }) =>
    $viewType === 'list' ? theme.spacing.xs : $viewType === 'details' ? 0 : theme.spacing.md};

  @media (max-width: 767px) {
    grid-template-columns: ${({ $viewType }) => gridColumnsMobile[$viewType]};
    gap: ${({ theme, $viewType }) =>
      $viewType === 'list' ? theme.spacing.xs : $viewType === 'details' ? 0 : theme.spacing.sm};
  }
`;

export const ListItem = styled.li`
  margin: 0;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
`;
