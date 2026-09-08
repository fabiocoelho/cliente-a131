/**
 * 🔒 Controle de Acesso (Degustação)
 * Edite APENAS este arquivo ao enviar a proposta para um novo cliente.
 */
export const ACCESS_CONFIG = {
  /** true = 🔴 TRAVA LIGADA | 🟢 false = TRAVA DESLIGADA */
  enabled: true, //

  /** 🏷️ Título principal exibido na tela de login */
  clientName: "Acesso Restrito",

  /** 🔑 Senha de acesso do cliente */
  password: "123",

  /** ⏳ Data/hora limite de 48h (Formato ISO) */
  expiresAt: "2026-08-05T23:59:59",

  /** 🔗 Link para o seu site / agência */
  agencyUrl: "https://www.getsite.com.br",
};

export const ACCESS_STORAGE_KEY = `access_${ACCESS_CONFIG.clientName}`;
