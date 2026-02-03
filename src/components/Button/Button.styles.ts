import styled from 'styled-components';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface StyledButtonProps {
  $variant?: ButtonVariant;
}

export const Button = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;

  ${({ $variant = 'primary', theme }) => {
    switch ($variant) {
      case 'primary':
        return `
          background-color: ${theme.colors.primary};
          color: white;
          &:hover {
            background-color: ${theme.colors.primaryHover};
          }
        `;
      case 'secondary':
        return `
          background-color: transparent;
          color: ${theme.colors.primary};
          border-color: ${theme.colors.primary};
          &:hover {
            background-color: ${theme.colors.surfaceHover};
          }
        `;
      case 'ghost':
        return `
          background-color: transparent;
          color: ${theme.colors.text};
          &:hover {
            background-color: ${theme.colors.surfaceHover};
          }
        `;
      default:
        return '';
    }
  }}
`;
