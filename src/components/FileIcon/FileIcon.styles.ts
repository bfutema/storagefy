import styled from 'styled-components';

interface IconWrapperProps {
  $size?: number;
  $variant?: 'default' | 'muted';
}

export const IconWrapper = styled.span<IconWrapperProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size = 40 }) => $size}px;
  height: ${({ $size = 40 }) => $size}px;
  color: ${({ theme, $variant }) =>
    $variant === 'muted' ? theme.colors.textMuted : theme.colors.primary};
`;
