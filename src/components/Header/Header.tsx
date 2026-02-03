import * as S from './Header.styles';

interface HeaderProps {
  title: string;
  leftContent?: React.ReactNode;
  children?: React.ReactNode;
}

export function Header({ title, leftContent, children }: HeaderProps) {
  return (
    <S.Header>
      <S.HeaderLeft>
        {leftContent}
        <S.Title>{title}</S.Title>
      </S.HeaderLeft>
      {children && <S.Actions>{children}</S.Actions>}
    </S.Header>
  );
}
