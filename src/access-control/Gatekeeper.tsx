import { useEffect, useState, type ReactNode } from "react";

import { ACCESS_CONFIG } from "./config";

const STORAGE_KEY = `access_${ACCESS_CONFIG.clientName}`;

function isExpired() {
  return Date.now() > new Date(ACCESS_CONFIG.expiresAt).getTime();
}

function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm rounded-xl border border-border bg-card p-8 text-center shadow-sm">
        {children}
      </div>
    </div>
  );
}

function AgencyButton({ label }: { label: string }) {
  return (
    <a
      href={ACCESS_CONFIG.agencyUrl}
      target="_blank"
      rel="noreferrer"
      className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
    >
      {label}
    </a>
  );
}

export function Gatekeeper({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [expired, setExpired] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!ACCESS_CONFIG.enabled) return;
    if (isExpired()) {
      setExpired(true);
    } else if (window.localStorage.getItem(STORAGE_KEY) === "granted") {
      setUnlocked(true);
    }
    setReady(true);
  }, []);

  if (!ACCESS_CONFIG.enabled) return <>{children}</>;
  if (!ready) return <div className="min-h-screen bg-background" />;

  if (expired) {
    return (
      <Shell>
        <h1 className="text-xl font-semibold text-foreground">Período de degustação encerrado</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          O prazo para visualização deste projeto chegou ao fim. Fale com a agência para reativar o
          acesso.
        </p>
        <AgencyButton label="Falar com a agência" />
      </Shell>
    );
  }

  if (unlocked) return <>{children}</>;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (password === ACCESS_CONFIG.password) {
      window.localStorage.setItem(STORAGE_KEY, "granted");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <Shell>
      <h1 className="text-xl font-semibold text-foreground">Acesso Restrito</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Digite a senha para visualizar o projeto.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-3">
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(false);
          }}
          autoComplete="current-password"
          placeholder="Senha de acesso"
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
        />
        <button
          type="submit"
          className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Entrar
        </button>
      </form>
      {error && (
        <div className="mt-4 text-sm text-destructive">
          Senha incorreta.{" "}
          <a
            href={ACCESS_CONFIG.agencyUrl}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Solicitar acesso à agência
          </a>
        </div>
      )}
    </Shell>
  );
}

export default Gatekeeper;
