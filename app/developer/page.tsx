import DashboardShell from "@/components/layout/DashboardShell";
import SystemStatus from "@/components/developer/SystemStatus";
import APIMetrics from "@/components/developer/APIMetrics";
import ErrorLog from "@/components/developer/ErrorLog";
import BuildInfo from "@/components/developer/BuildInfo";
import EnvConfig from "@/components/developer/EnvConfig";

export const metadata = { title: "ShopNova — Developer Dashboard" };

export default function DeveloperPage() {
    return (
        <DashboardShell role="developer">
            {/* Header strip */}
            <div className="animate-in" style={{
                marginBottom: 24,
                background: "linear-gradient(135deg, rgba(52,211,153,0.1) 0%, rgba(79,124,255,0.06) 100%)",
                border: "1px solid rgba(52,211,153,0.2)",
                borderRadius: 16,
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <div>
                    <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 4 }}>System Overview</p>
                    <h1 style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 4, color: "var(--text-primary)" }}>
                        Developer <span style={{ background: "linear-gradient(135deg, #34d399, #4f7cff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Control Center</span>
                    </h1>
                    <p style={{ fontSize: 13, color: "var(--text-muted)" }}>
                        Infrastructure health · API performance · Error monitoring
                    </p>
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                    <button style={{
                        background: "linear-gradient(135deg, #34d399, #4f7cff)",
                        color: "white", fontWeight: 700, fontSize: 13,
                        padding: "10px 20px", borderRadius: 10, border: "none", cursor: "pointer",
                    }}>Trigger Deploy</button>
                    <button style={{
                        background: "transparent", border: "1px solid var(--border)",
                        color: "var(--text-secondary)", fontWeight: 600, fontSize: 13,
                        padding: "10px 20px", borderRadius: 10, cursor: "pointer",
                    }}>View Logs</button>
                </div>
            </div>

            <SystemStatus />

            <div style={{ marginTop: 16 }}>
                <APIMetrics />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 16, marginTop: 16 }}>
                <ErrorLog />
                <BuildInfo />
            </div>

            <div style={{ marginTop: 16 }}>
                <EnvConfig />
            </div>
        </DashboardShell>
    );
}
