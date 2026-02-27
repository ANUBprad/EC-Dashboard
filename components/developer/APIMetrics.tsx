"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";
import { apiMetricsData } from "@/lib/mock-data";

export default function APIMetrics() {
    return (
        <div className="card animate-in" style={{ animationDelay: "0.08s" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", marginBottom: 2 }}>API Metrics</h3>
                    <p style={{ fontSize: 12, color: "var(--text-muted)" }}>Requests/min + P95 Latency (last 24h)</p>
                </div>
                <div style={{ display: "flex", gap: 14, fontSize: 12 }}>
                    <div style={{ textAlign: "right" }}>
                        <div style={{ color: "var(--text-muted)", fontSize: 10, marginBottom: 2 }}>PEAK RPS</div>
                        <div style={{ fontWeight: 700, color: "#4f7cff" }}>720</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                        <div style={{ color: "var(--text-muted)", fontSize: 10, marginBottom: 2 }}>P95 LATENCY</div>
                        <div style={{ fontWeight: 700, color: "#fbbf24" }}>115ms</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                        <div style={{ color: "var(--text-muted)", fontSize: 10, marginBottom: 2 }}>AVG LATENCY</div>
                        <div style={{ fontWeight: 700, color: "#34d399" }}>76ms</div>
                    </div>
                </div>
            </div>

            <ResponsiveContainer width="100%" height={200}>
                <LineChart data={apiMetricsData} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(42,47,69,0.7)" vertical={false} />
                    <XAxis dataKey="time" tick={{ fill: "#475569", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis yAxisId="left" tick={{ fill: "#475569", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fill: "#475569", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `${v}ms`} />
                    <Tooltip
                        contentStyle={{ background: "#1e2130", border: "1px solid #2a2f45", borderRadius: 10, fontSize: 12 }}
                        labelStyle={{ color: "#94a3b8", marginBottom: 4 }}
                    />
                    <Legend wrapperStyle={{ fontSize: 12, color: "#475569" }} />
                    <Line yAxisId="left" type="monotone" dataKey="rps" stroke="#4f7cff" strokeWidth={2} dot={false} name="Req/min" />
                    <Line yAxisId="right" type="monotone" dataKey="latency" stroke="#fbbf24" strokeWidth={2} dot={false} name="Latency (ms)" strokeDasharray="5 3" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
