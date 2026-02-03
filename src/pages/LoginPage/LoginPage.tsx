import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './LoginPage.styles';
import { useAuth } from '../../contexts/AuthContext';

export function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname ?? '/';

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    const success = await login(username, password);

    if (success) {
      navigate(from, { replace: true });
    } else {
      setError('Credenciais inválidas. Tente novamente.');
    }

    setIsSubmitting(false);
  };

  return (
    <S.Page>
      <S.Card>
        <S.Title>Storagefy</S.Title>
        <S.DemoCredentials>Credenciais de demonstração: admin / admin</S.DemoCredentials>
        <S.Form onSubmit={handleSubmit}>
          <S.Input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            disabled={isSubmitting}
          />
          <S.Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            disabled={isSubmitting}
          />
          {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
          <S.SubmitButton type="submit" disabled={isSubmitting}>
            Entrar
          </S.SubmitButton>
        </S.Form>
      </S.Card>
    </S.Page>
  );
}
