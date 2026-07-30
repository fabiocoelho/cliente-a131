## Objetivo

Enriquecer a seção Hero com movimento sutil e elementos visuais, mantendo o visual corporativo limpo (Marinho + Coral, Space Grotesk + DM Sans) e sem dados reais de cliente.

## Abordagem de animação

Usar CSS puro via tokens do `src/styles.css` + utilitários Tailwind (o projeto já tem `tw-animate-css`), **sem instalar Framer Motion**. Motivo: a Hero é conteúdo above-the-fold; animações CSS não adicionam JS ao bundle nem atrasam o LCP no mobile. Se preferir Framer Motion mesmo assim, é só dizer.

## 1. Badge de destaque

Refinar o badge existente acima do título:
- Ícone sutil (`Zap` ou `ShieldCheck` do lucide) em coral, texto tipo "Resposta em minutos pelo WhatsApp" (placeholder genérico).
- Pílula com borda, fundo `brand-soft/50`, ponto pulsante discreto.

## 2. Prova social flutuante

Ao lado/sobre a imagem:
- Card inferior-esquerdo (já existe): avaliação em estrelas + depoimento de exemplo — mantido e refinado.
- Novo card superior-direito: métrica curta (ex.: "+0.000 atendimentos" / "0.0 no Google", coerente com os placeholders do TrustBar), com ícone e sombra `--shadow-elegant`.
- Ambos ganham flutuação lenta em loop (`translateY` de ~6px, 6s, alternada) e ficam ocultos em telas pequenas para não poluir o mobile.

## 3. Entrada escalonada

Nova keyframe `fade-up` em `src/styles.css` + utilitário com `animation-delay` por etapa (badge → título → parágrafo → botões → provas → imagem), passos de ~80ms, `animation-fill-mode: both` para não haver flash.

## 4. Hover na imagem

Wrapper com `group`: no hover, `scale-[1.03]` na imagem (transição ~700ms, `overflow-hidden` no card), leve elevação da sombra e intensificação do halo coral atrás.

## 5. Mobile e acessibilidade

- Cards flutuantes só a partir de `sm`/`lg`; halo e blur reduzidos no mobile.
- `@media (prefers-reduced-motion: reduce)`: desliga todas as animações e loops.
- Imagem mantém `width`/`height` e `fetchPriority="high"`; nenhum JS novo.

## Detalhes técnicos

- Arquivos alterados: `src/components/site/Hero.tsx` e `src/styles.css` (keyframes/utilities).
- Sem cores hardcoded: apenas tokens (`brand`, `brand-soft`, `border`, `muted-foreground`).
- Verificação: build/typecheck limpos e screenshot do preview em mobile e desktop.
