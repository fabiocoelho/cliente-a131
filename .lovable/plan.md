## Objetivo
Ajustar os cards flutuantes da seção Hero (métrica "+0.000 atendimentos" e depoimento com estrelas) para terem um movimento contínuo mais perceptível e orgânico, sem perder a elegância corporativa.

## Alterações propostas

### 1. Keyframes mais expressivos em `src/styles.css`
- Substituir o keyframe `hero-float` linear por um movimento combinado: leve deslocamento vertical maior (~10-12px) + micro rotação alternada (~±2deg) + sutil escala (~0.98 ↔ 1.02).
- Criar variações com fases diferentes para que os dois cards não flutuem sincronizados.
- Manter curva `ease-in-out` e duração entre 5s e 7s.

### 2. Aplicar novas classes nos cards
- Card superior (métricas): animação mais curta e fase inicial levemente atrasada.
- Card inferior (depoimento): animação com fase invertida para criar contraste de movimento.
- Manter ocultação em mobile (`hidden sm:block` / `lg:flex`) e reduzir intensidade em telas pequenas.

### 3. Acessibilidade e performance
- Preservar a regra `@media (prefers-reduced-motion: reduce)` desligando todas as animações.
- Continuar sem JS/biblioteca extra (CSS puro).

## Arquivos alterados
- `src/styles.css`: keyframes e utilitários de flutuação.
- `src/components/site/Hero.tsx`: classes dos cards flutuantes.

## Verificação
- Build/typecheck limpos.
- Screenshot desktop e mobile para confirmar que o movimento não quebra layout e mobile permanece limpo.