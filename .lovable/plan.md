## Objetivo

Trazer o código de `fabiocoelho/cliente-b132` (React + Vite + TypeScript + Tailwind) para este projeto, adaptando ao stack atual (TanStack Start + Tailwind v4).

## Etapas

1. **Conectar o GitHub**
   Abro o card de conexão do conector GitHub. Você autoriza a conta que tem acesso ao repositório (privado ou público).

2. **Inventariar o repositório**
   Leio a árvore de arquivos e o `package.json` para mapear: páginas/rotas, componentes, estilos, assets, dependências e se há backend (Supabase, APIs, variáveis de ambiente).

3. **Instalar dependências equivalentes**
   Adiciono as libs usadas pelo repo que ainda não existem aqui (shadcn/ui, ícones, forms, etc.), descartando as que conflitam com o stack atual.

4. **Copiar componentes e assets**
   Trago `src/components`, `src/lib`, hooks e imagens praticamente como estão, ajustando apenas imports e caminhos `@/`.

5. **Adaptar as rotas**
   O repo provavelmente usa React Router (`src/pages` + `App.tsx`). Aqui as rotas vivem em `src/routes/*.tsx` com TanStack Router. Converto cada página em um arquivo de rota, troco `<Link to>`/`useNavigate` pelos equivalentes do TanStack, e movo o layout compartilhado para `__root.tsx`. A home vira `src/routes/index.tsx` (substituindo o placeholder).

6. **Migrar os estilos**
   Porto as variáveis de tema e fontes do `index.css`/`tailwind.config.ts` do repo para o `src/styles.css` (Tailwind v4, tokens em `@theme`). Fontes externas entram via `<link>` no `__root.tsx`.

7. **Backend, se houver**
   Se o repo usar Supabase ou chaves de API, habilito o Lovable Cloud, recrio o schema por migração e movo chamadas server-side para server functions. Segredos entram pelo gerenciador de segredos, nunca no código.

8. **Verificar**
   Build/typecheck, navegação por todas as rotas no preview e correção do que quebrar na conversão.

## Detalhes técnicos

- Arquivos incompatíveis não são copiados: `vite.config.ts`, `main.tsx`, `App.tsx`, `index.html`, `tailwind.config.ts`, roteador antigo.
- `react-router-dom` não será instalado; todo roteamento usa `@tanstack/react-router`.
- Metadados de SEO de cada página são reescritos no `head()` de cada rota.

## Limitações

- Não é um clone byte a byte: a camada de roteamento e build é reescrita.
- Histórico de commits e branches do repo original não vêm junto.
- Se o repo for grande, priorizo páginas e componentes principais primeiro e sigo em lotes.
