import { MainLayout } from '../../components';
import * as S from './SettingsPage.styles';

export function SettingsPage() {
  return (
    <MainLayout title="Configurações">
      <S.Content>
        <S.Title>Configurações</S.Title>
        <S.Subtitle>
          As configurações do sistema estarão disponíveis em breve.
        </S.Subtitle>
      </S.Content>
    </MainLayout>
  );
}
