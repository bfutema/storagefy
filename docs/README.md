# Documentação do Storagefy

Este diretório contém documentação e histórico de planejamento do projeto.

## Estrutura

```
docs/
├── README.md           # Este arquivo
└── plans/             # Planos de implementação (originados do Cursor)
    ├── 01-file-explorer-system.md
    ├── 02-login-e-navegacao-por-pastas.md
    └── 03-responsividade-mobile-e-scroll.md
```

## Planos de Implementação

Os arquivos em `plans/` são cópias dos planos gerados pelo Cursor durante o desenvolvimento. Eles documentam as decisões e a ordem de implementação de cada funcionalidade.

| Arquivo | Descrição |
| --- | --- |
| [01-file-explorer-system.md](plans/01-file-explorer-system.md) | Sistema base: explorador de arquivos, tema, componentes, dark/light mode, estrutura de pastas |
| [02-login-e-navegacao-por-pastas.md](plans/02-login-e-navegacao-por-pastas.md) | Login (admin/admin), AuthContext, rotas protegidas, filtro por pasta |
| [03-responsividade-mobile-e-scroll.md](plans/03-responsividade-mobile-e-scroll.md) | Responsividade mobile, drawer, FAB, scroll isolado, scrollbar customizada |

## Origem

Os planos originais ficam em `~/.cursor/plans/` (fora do repositório). Estes arquivos foram copiados para o projeto para:

- Manter histórico versionado no Git
- Facilitar onboarding de novos desenvolvedores
- Servir como referência para manutenção futura
