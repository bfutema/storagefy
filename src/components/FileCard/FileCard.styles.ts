import styled from 'styled-components';

type CardVariant = 'grid' | 'tiles';

const variantSizes: Record<CardVariant, { minHeight: string; iconSize: number; padding: string }> = {
  grid: { minHeight: '160px', iconSize: 80, padding: '24px' },
  tiles: { minHeight: '120px', iconSize: 48, padding: '16px' },
};

export const Card = styled.article<{ $variant?: CardVariant }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme, $variant = 'grid' }) =>
    theme.spacing[$variant === 'tiles' ? 'md' : 'lg']};
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  transition: all 0.2s;
  cursor: pointer;
  min-height: ${({ $variant = 'grid' }) => variantSizes[$variant].minHeight};

  &:hover {
    background-color: ${({ theme }) => theme.colors.surfaceHover};
    border-color: ${({ theme }) => theme.colors.border};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const IconArea = styled.div<{ $variant?: CardVariant }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $variant = 'grid' }) => variantSizes[$variant].iconSize}px;
  height: ${({ $variant = 'grid' }) => variantSizes[$variant].iconSize}px;
  color: ${({ theme }) => theme.colors.textMuted};
  flex-shrink: 0;
`;

export const TypeBadge = styled.span<{ $color: string }>`
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  padding: 2px 10px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ $color }) => $color};
  color: white;
  font-size: 10px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 0.02em;
`;

export const FileName = styled.h3<{ $variant?: CardVariant }>`
  margin: ${({ theme, $variant = 'grid' }) =>
    theme.spacing[$variant === 'tiles' ? 'sm' : 'md']} 0 0;
  font-size: ${({ theme, $variant = 'grid' }) =>
    theme.fontSize[$variant === 'tiles' ? 'xs' : 'sm']};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  word-break: break-word;
  line-height: 1.3;
  max-width: 100%;
`;
