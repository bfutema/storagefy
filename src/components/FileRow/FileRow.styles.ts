import styled from 'styled-components';

export const Row = styled.article<{ $compact?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme, $compact }) =>
    $compact ? `${theme.spacing.xs} ${theme.spacing.md}` : `${theme.spacing.sm} ${theme.spacing.md}`};
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid transparent;
  border-radius: ${({ theme, $compact }) => ($compact ? 0 : theme.borderRadius.md)};
  border-bottom: ${({ theme, $compact }) =>
    $compact ? `1px solid ${theme.colors.border}` : 'none'};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surfaceHover};
    border-color: ${({ theme, $compact }) => ($compact ? 'transparent' : theme.colors.border)};
  }

  &:last-child {
    border-bottom: ${({ $compact }) => ($compact ? 'none' : 'inherit')};
  }
`;

export const IconCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const NameCell = styled.div`
  flex: 1;
  min-width: 0;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TypeCell = styled.div`
  flex: 0 0 80px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-transform: uppercase;
`;

export const SizeCell = styled.div`
  flex: 0 0 80px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: right;
`;

export const DateCell = styled.div`
  flex: 0 0 100px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: right;
`;

export const TableHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;
