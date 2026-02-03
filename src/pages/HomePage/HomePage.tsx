import { MainLayout } from '../../components';
import * as S from './HomePage.styles';

export function HomePage() {
  return (
    <MainLayout title="Início">
      <S.Content>
        <S.Title>Bem-vindo ao Storagefy</S.Title>
        <S.Subtitle>
          Use o menu lateral para navegar até o Explorador de Arquivos.
        </S.Subtitle>
      </S.Content>
    </MainLayout>
  );
}
