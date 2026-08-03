# Centralizar mensagens do WhatsApp em src/lib/site.ts

## Objetivo
Ao clonar o projeto, mudar apenas `src/lib/site.ts` para alterar a mensagem de todos os botões de WhatsApp.

## O que muda

### 1. src/lib/site.ts
- Adicionar `whatsappMessage: "Olá! Gostaria de mais informações sobre os serviços."` dentro do objeto `SITE`.
- `whatsappUrl(message?)` passa a usar `SITE.whatsappMessage` como padrão quando nenhum parâmetro for passado.

### 2. src/components/site/WhatsAppButton.tsx
- Sem `message`, o botão já cairá no padrão do `SITE` (via `whatsappUrl`). Nenhuma mensagem chumbada no componente.

### 3. Componentes com textos chumbados
Remover a prop `message` (passando a usar o padrão centralizado) em:
- `Navbar.tsx` (botão desktop e botão do menu mobile)
- `Hero.tsx`
- `About.tsx`
- `FinalCta.tsx`
- `WhatsAppFab.tsx` (deixa de passar texto para `whatsappUrl()`)

`Footer.tsx` e `MapContact.tsx` já chamam `whatsappUrl()` sem argumento — passam a herdar a mensagem central automaticamente.

### 4. Services.tsx
Mantém a mensagem específica por serviço (ex.: "Gostaria de solicitar o serviço: Transferência de veículo"), pois é contextual e mais útil para conversão. O prefixo passa a vir de `SITE` como `whatsappServiceMessage: (servico: string) => ...` — assim continua editável em um só arquivo.

## Observação
Nenhuma mudança visual ou de layout; apenas o texto pré-preenchido no WhatsApp.
