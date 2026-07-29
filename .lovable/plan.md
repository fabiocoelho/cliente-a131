## Objetivo

Deixar o site pronto como template: nenhum dado real do cliente no código, tudo em placeholders óbvios e fáceis de substituir depois; manter as fontes atuais (Space Grotesk + DM Sans) e aplicar a paleta Marinho + Coral.

## 1. Centralizar e neutralizar os dados

Todos os dados sensíveis passam a viver só em `src/lib/site.ts`, com placeholders genéricos:

- Nome: `Nome da Empresa`
- Cidade/Estado: `Cidade/UF`
- Endereço: `Rua Exemplo, 000 — Bairro, Cidade/UF`
- WhatsApp/Telefone exibido: `(00) 00000-0000` (raw `5500000000000`)
- E-mail: `contato@empresa.com.br`
- Horário: `Segunda a Sexta, 9h às 18h`
- Busca no mapa: `Porto Alegre, RS`

Comentário no topo do arquivo indicando que é o único ponto a editar na entrega ao cliente.

Ajustes nos componentes que ainda têm texto fixo:

- Logo do Navbar/Footer: inicial derivada do nome do site em vez do "A" fixo.
- `src/routes/index.tsx`: título, descrição, canonical e JSON-LD passam a ser montados a partir de `SITE` (sem nome/telefone reais escritos no arquivo).
- Alt das imagens e nomes de arquivos de imagem seguem como estão (imagens genéricas de escritório/vistoria).

## 2. Nova paleta — Marinho + Coral

Tokens em `src/styles.css` (sem cores hardcoded nos componentes):

```text
background   #F7F4F1 (off-white quente)
foreground   #101B33 (marinho profundo)
primary      #101B33  → primary-foreground #F7F4F1
brand        #FF6B5A (coral) → brand-foreground #101B33
brand-soft   coral bem claro (fundo de halo/badge)
secondary    marinho #22366B a 6% sobre o off-white
muted-fg     marinho dessaturado
border/input marinho a ~12%
ring         coral
```

Também atualizo `--chart-*`, tokens de sidebar e as sombras `--shadow-elegant`/`--shadow-soft` para tingirem em marinho em vez de preto puro. Fontes permanecem inalteradas.

## Detalhes técnicos

- Valores de cor em `oklch`, seguindo o padrão atual do arquivo.
- Nenhuma mudança estrutural de layout, seções ou rotas.
- Verificação final: build/typecheck limpos e revisão do preview para contraste (coral sobre marinho e coral sobre off-white).