# GetSiteBadge — badge flutuante reutilizável

## O que será feito

Criar a pasta autocontida `src/components/GetSiteBadge/` com o badge "Criado por GetSite", fiel ao componente de referência (mesmo layout, classes Tailwind, ring, divisor, botão de fechar com fade-out de 240ms, z-index e acessibilidade), mudando apenas a identidade da marca.

Diferenças em relação à referência:
- IDs: `getsite-badge`, `getsite-badge-cta`, `getsite-badge-text`, `getsite-badge-divider`, `getsite-badge-close`
- `lang="pt-BR"`, `aria-label="Criado por GetSite"`, botão fechar com `aria-label`/`title` = "Fechar"
- Texto: "Criado por"
- Link: `https://getsite.com.br` (target _blank, rel noopener nofollow)
- Logo: `import logo from "./logo-getsite.png"` com `className="h-4 w-[52px] object-contain"`
- Posição: `fixed bottom-4 left-4` (canto inferior esquerdo, conforme solicitado), evitando colisão com o botão flutuante do WhatsApp à direita

## Integração

O layout raiz deste projeto é `src/routes/__root.tsx` (TanStack Start). O badge será renderizado uma única vez dentro de `RootComponent`, ao lado do `<Outlet />`, aparecendo em todas as páginas.

## Detalhes técnicos

- Arquivo: `src/components/GetSiteBadge/index.tsx` — componente client-side com `useState` (`isVisible`, `isClosing`), sem dependências externas além do React, para que a pasta possa ser copiada isoladamente.
- Imagem: `src/components/GetSiteBadge/logo-getsite.png`, importada via ES import (Vite resolve e faz o hashing do asset). Não usa `public/`.

## Pendência

O arquivo `logo-getsite.png` ainda não existe no projeto. A estrutura será criada e o import feito normalmente; a implementação será interrompida enquanto o arquivo não existir, no caminho exato `src/components/GetSiteBadge/logo-getsite.png` — basta substituir esse arquivo pela logo oficial quando você enviá-la, sem alterar código.
