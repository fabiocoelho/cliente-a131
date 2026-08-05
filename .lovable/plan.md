# Badge "Criado por GetSite"

Criar um componente reutilizável e autocontido que exibe um selo fixo no rodapé da página, com link para a GetSite e botão de fechar.

## O que será feito

**Novo arquivo `src/components/GetSiteBadge/index.tsx`**
- Cópia fiel do componente de referência: mesmo JSX, padding, gap, border radius, sombra, ring, divisor, botão de fechar com o mesmo SVG, estados `isVisible` / `isClosing`, fade-out de 200ms com remoção após 240ms.
- Ajustes de marca:
  - IDs: `getsite-badge`, `getsite-badge-cta`, `getsite-badge-text`, `getsite-badge-divider`, `getsite-badge-close`.
  - `lang="pt-BR"`, `aria-label="Criado por GetSite"`, texto "Criado por", `title`/`aria-label` do fechar = "Fechar".
  - Link para `https://getsite.com.br` (`target="_blank"`, `rel="noopener nofollow"`).
  - No lugar do SVG da Lovable, `<img src="/logo-getsite.png" alt="GetSite" className="h-4 w-auto" />` — mesma altura visual (16px) e alinhamento do SVG original.
- Posição: `fixed bottom-4 left-4 z-[9999]` (canto inferior esquerdo, conforme escolhido, para não colidir com o botão do WhatsApp). Todo o resto das classes Tailwind permanece igual à referência.
- Sem dependência de nada do projeto (nenhum import de `@/lib`), para poder ser copiado para outros projetos.

**Integração**
- Renderizar `<GetSiteBadge />` uma vez em `src/routes/__root.tsx`, dentro do `RootComponent` logo após o `<Outlet />`, de modo que apareça em todas as páginas.

## Observação sobre a logo

O componente vai apontar para `/logo-getsite.png`. Esse arquivo ainda não existe em `public/` — enquanto você não enviar a imagem, o badge aparece com o espaço da logo vazio (texto e botão funcionam normalmente). Assim que enviar, é só colocar em `public/logo-getsite.png` e ela aparece automaticamente.
