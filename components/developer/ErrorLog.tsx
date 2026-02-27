import { errorLogs } from "@/lib/mock-data";
import { AlertOctagon, RefreshCw } from "lucide-react";

const statusColor: Record<number, string> = {
    500: "badge-red",
    404: "badge-yellow",
    422: "badge-orange",
    401: "badge-purple",
    429: "badge-blue",
};

const methodColor: Record<string, string> = {
    GET: "#34d399",
    POST: "#4f7cff",
    PUT: "#fbbf24",
    DELETE: "#f87171",
    PATCH: "#a78bfa",
};

export default function ErrorLog() {
    return (
        <div className="card animate-in" style={{ animationDelay: "0.12s" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 30, height: 30, borderRadius: 8, background: "rgba(248,113,113,0.12)", border: "1px solid rgba(248,113,113,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <AlertOctagon size={14} color="#f87171" />
                    </div>
                    <div>
                        <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", marginBottom: 1 }}>Recent Errors</h3>
                        <p style={{ fontSize: 12, color: "var(--text-muted)" }}>Last 5 errors today</p>
                    </div>
                </div>
                <button style={{
                    display: "flex", alignItems: "center", gap: 5,
                    fontSize: 12, color: "var(--text-secondary)", fontWeight: 500,
                    background: "var(--bg-primary)", border: "1px solid var(--border)",
                    padding: "6px 12px", borderRadius: 8, cursor: "pointer",
                }}>
                    <RefreshCw size={12} /> Refresh
                </button>
            </div>

            <table className="data-table">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Method</th>
                        <th>Endpoint</th>
                        <th>Status</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {errorLogs.map((log, i) => (
                        <tr key={i}>
                            <td style={{ fontFamily: "monospace", fontSize: 12, color: "var(--text-muted)", whiteSpace: "nowrap" }}>{log.time}</td>
                            <td>
                                <span style={{
                                    fontSize: 11, fontWeight: 700,
                                    color: methodColor[log.method] || "#94a3b8",
                                    background: `${methodColor[log.method]}18` || "rgba(148,163,184,0.1)",
                                    padding: "2px 8px", borderRadius: 5,
                                }}>{log.method}</span>
                            </td>
                            <td style={{ fontFamily: "monospace", fontSize: 12, color: "var(--text-secondary)" }}>{log.endpoint}</td>
                            <td>
                                <span className={`badge ${statusColor[log.status] || "badge-red"}`}>{log.status}</span>
                            </td>
                            <td style={{ fontSize: 12, color: "var(--text-muted)", maxWidth: 200 }}>{log.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
