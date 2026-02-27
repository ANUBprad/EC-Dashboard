import { Eye, EyeOff, Copy, Lock } from "lucide-react";

const envVars = [
    { key: "NEXT_PUBLIC_API_URL", value: "https://api.shopnova.io/v2", secret: false },
    { key: "DATABASE_URL", value: "postgres://***@db.shopnova.io:5432/prod", secret: true },
    { key: "REDIS_URL", value: "redis://***@cache.shopnova.io:6379", secret: true },
    { key: "JWT_SECRET", value: "ey8k2p9x...", secret: true },
    { key: "STRIPE_PUBLISHABLE_KEY", value: "pk_live_51N...", secret: true },
    { key: "NEXT_PUBLIC_ENV", value: "production", secret: false },
    { key: "SENTRY_DSN", value: "https://***@o12345.ingest.sentry.io", secret: true },
    { key: "CDN_BASE_URL", value: "https://cdn.shopnova.io", secret: false },
];

export default function EnvConfig() {
    return (
        <div className="card animate-in" style={{ animationDelay: "0.2s" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 30, height: 30, borderRadius: 8, background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Lock size={14} color="#a78bfa" />
                    </div>
                    <div>
                        <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", marginBottom: 1 }}>Env Config</h3>
                        <p style={{ fontSize: 12, color: "var(--text-muted)" }}>{envVars.length} variables · {envVars.filter(e => e.secret).length} masked</p>
                    </div>
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {envVars.map((env, i) => (
                    <div key={i} style={{
                        display: "flex", alignItems: "center", gap: 10,
                        background: "var(--bg-primary)", borderRadius: 8, padding: "9px 12px",
                        border: "1px solid var(--border)",
                    }}>
                        {env.secret
                            ? <Lock size={11} color="#a78bfa" />
                            : <div style={{ width: 11, height: 11, borderRadius: 3, background: "rgba(52,211,153,0.3)", border: "1px solid #34d39940" }} />
                        }
                        <span style={{
                            fontSize: 12, fontWeight: 600, color: "var(--text-secondary)",
                            fontFamily: "monospace", minWidth: 220,
                        }}>{env.key}</span>
                        <span style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "monospace", flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                            {env.value}
                        </span>
                        <div style={{ display: "flex", gap: 6, marginLeft: 8 }}>
                            {env.secret && (
                                <div style={{ cursor: "pointer", opacity: 0.5 }}>
                                    <EyeOff size={13} color="var(--text-muted)" />
                                </div>
                            )}
                            <div style={{ cursor: "pointer", opacity: 0.5 }}>
                                <Copy size={13} color="var(--text-muted)" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
