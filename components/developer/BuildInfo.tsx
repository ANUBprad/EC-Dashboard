import { GitBranch, Clock, Cpu, Globe, Box, CheckCircle } from "lucide-react";

const buildRows = [
    { label: "Version", value: "v2.14.1", icon: Box },
    { label: "Commit", value: "a3f8c91", icon: GitBranch },
    { label: "Branch", value: "main", icon: GitBranch },
    { label: "Deployed At", value: "Feb 27, 2026 · 09:14", icon: Clock },
    { label: "Environment", value: "Production", icon: Globe },
    { label: "Node.js", value: "v20.11.1 (LTS)", icon: Cpu },
    { label: "Next.js", value: "14.2.3", icon: Box },
    { label: "Build Status", value: "Passed", icon: CheckCircle },
];

export default function BuildInfo() {
    return (
        <div className="card animate-in" style={{ animationDelay: "0.16s" }}>
            <div style={{ marginBottom: 18 }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", marginBottom: 2 }}>Build Info</h3>
                <p style={{ fontSize: 12, color: "var(--text-muted)" }}>Current deployment details</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {buildRows.map((row, i) => {
                    const Icon = row.icon;
                    const isStatus = row.label === "Build Status";
                    return (
                        <div key={i} style={{
                            display: "flex", alignItems: "center", justifyContent: "space-between",
                            padding: "10px 0",
                            borderBottom: i < buildRows.length - 1 ? "1px solid rgba(42,47,69,0.5)" : "none",
                        }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <Icon size={13} color="var(--text-muted)" strokeWidth={1.8} />
                                <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{row.label}</span>
                            </div>
                            {isStatus ? (
                                <span className="badge badge-green">{row.value}</span>
                            ) : (
                                <span style={{
                                    fontSize: 13, fontWeight: 600, color: "var(--text-primary)",
                                    fontFamily: row.label === "Commit" ? "monospace" : "inherit",
                                    background: row.label === "Environment" ? "rgba(79,124,255,0.1)" : "transparent",
                                    color: row.label === "Environment" ? "#4f7cff" : "var(--text-primary)",
                                    padding: row.label === "Environment" ? "2px 8px" : 0,
                                    borderRadius: row.label === "Environment" ? 6 : 0,
                                }}>{row.value}</span>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
