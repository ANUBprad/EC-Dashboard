import { systemServices } from "@/lib/mock-data";
import { CheckCircle, AlertTriangle, XCircle, Wifi } from "lucide-react";

const statusConfig: Record<string, { icon: typeof CheckCircle; color: string; badgeClass: string }> = {
    Operational: { icon: CheckCircle, color: "#34d399", badgeClass: "badge-green" },
    Degraded: { icon: AlertTriangle, color: "#fbbf24", badgeClass: "badge-yellow" },
    Down: { icon: XCircle, color: "#f87171", badgeClass: "badge-red" },
};

export default function SystemStatus() {
    const allOk = systemServices.every(s => s.status === "Operational");
    const degraded = systemServices.filter(s => s.status === "Degraded").length;

    return (
        <div className="card animate-in" style={{ animationDelay: "0s" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", marginBottom: 2 }}>System Status</h3>
                    <p style={{ fontSize: 12, color: "var(--text-muted)" }}>All services — live</p>
                </div>
                <span className={`badge ${allOk ? "badge-green" : "badge-yellow"}`}>
                    <span className={`pulse-dot`} style={{ width: 6, height: 6, borderRadius: "50%", background: allOk ? "#34d399" : "#fbbf24", display: "inline-block" }} />
                    {allOk ? "All Systems Operational" : `${degraded} Service${degraded > 1 ? "s" : ""} Degraded`}
                </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
                {systemServices.map((svc, i) => {
                    const cfg = statusConfig[svc.status] || statusConfig.Operational;
                    const Icon = cfg.icon;
                    return (
                        <div key={i} style={{
                            background: "var(--bg-primary)",
                            border: `1px solid ${svc.status !== "Operational" ? cfg.color + "40" : "var(--border)"}`,
                            borderRadius: 12, padding: "14px 16px",
                        }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                                    <Wifi size={13} color="var(--text-muted)" />
                                    <span style={{ fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }}>{svc.name}</span>
                                </div>
                                <Icon size={14} color={cfg.color} />
                            </div>
                            <div style={{ display: "flex", gap: 16 }}>
                                <div>
                                    <div style={{ fontSize: 10, color: "var(--text-muted)", marginBottom: 2 }}>UPTIME</div>
                                    <div style={{ fontSize: 13, fontWeight: 700, color: cfg.color }}>{svc.uptime}</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: 10, color: "var(--text-muted)", marginBottom: 2 }}>LATENCY</div>
                                    <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-secondary)" }}>{svc.latency}</div>
                                </div>
                            </div>
                            <span className={`badge ${cfg.badgeClass}`} style={{ marginTop: 10, fontSize: 10 }}>{svc.status}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
