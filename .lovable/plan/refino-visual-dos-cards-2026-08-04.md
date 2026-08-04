# Refino visual dos cards

Padronizar o acabamento de todos os cards e blocos do site: borda fina, sombra discreta e uma reação suave ao passar o mouse.

## Padrão único

Todos os cards passam a usar a mesma receita:

- borda fina e sombra leve em repouso
- ao passar o mouse: elevação sutil, sombra um pouco maior e borda levemente mais escura
- transição suave (300ms) em todas as propriedades
- sem mudança de conteúdo, texto ou layout

## Onde aplica

- Cards de serviços (`Services.tsx`) — já têm hover; será alinhado ao padrão
- Diferenciais (`Differentials.tsx`) — hoje são blocos soltos; viram cards com o mesmo acabamento
- Passos "Como funciona" (`HowItWorks.tsx`)
- Depoimentos (`Reviews.tsx`)
- Blocos de FAQ, Sobre e Contato/Mapa, quando forem contêineres visuais
- Cartões flutuantes do Hero mantêm o visual atual (já usam sombra elegante), apenas com a borda alinhada

## Detalhes técnicos

- Classes: `border border-border shadow-[var(--shadow-soft)] transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)] hover:border-foreground/15`
- Uso dos tokens semânticos do design system (`border-border`, sombras em `src/styles.css`) em vez de `border-gray-200`/`shadow-sm` fixos, para manter tema e contraste consistentes — o efeito visual é o mesmo pedido.
- Para evitar repetição, criar um utilitário `@utility card-surface` em `src/styles.css` e aplicá-lo nos componentes.
- Respeitar `prefers-reduced-motion`: sem translação para quem desativou animações.
