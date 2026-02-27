"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { signupData } from "@/lib/mock-data";

const retention = [
    { label: "Day 1", value: 100 },
    { label: "Day 3", value: 72 },
    { label: "Day 7", value: 54 },
    { label: "Day 14", value: 41 },
    { label: "Day 30", value: 28 },
];

export default function CustomerInsights() {
    return (
        <div className="card animate-in" style={{ animationDelay: "0.22s" }}>
            <div style={{ marginBottom: 18 }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", marginBottom: 2 }}>Customer Insights</h3>
                <p style={{ fontSize: 12, color: "var(--text-muted)" }}>New signups & retention</p>
            </div>

            {/* Signup bar chart */}
            <p style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 8, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>Weekly New Users</p>
            <ResponsiveContainer width="100%" height={120}>
                <BarChart data={signupData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }} barSize={18}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(42,47,69,0.7)" vertical={false} />
                    <XAxis dataKey="week" tick={{ fill: "#475569", fontSize: 10 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: "#475569", fontSize: 10 }} axisLine={false} tickLine={false} />
                    <Tooltip
                        contentStyle={{ background: "#1e2130", border: "1px solid #2a2f45", borderRadius: 10, fontSize: 12 }}
                        cursor={{ fill: "rgba(79,124,255,0.06)" }}
                    />
                    <Bar dataKey="users" fill="#a78bfa" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>

            {/* Retention funnel */}
            <p style={{ fontSize: 11, color: "var(--text-muted)", margin: "18px 0 10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>User Retention</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {retention.map((r, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ fontSize: 11, color: "var(--text-muted)", width: 36 }}>{r.label}</span>
                        <div style={{ flex: 1, height: 5, background: "var(--border)", borderRadius: 99, overflow: "hidden" }}>
                            <div style={{
                                width: `${r.value}%`, height: "100%", borderRadius: 99,
                                background: `rgba(79,124,255,${0.4 + (r.value / 250)})`,
                            }} />
                        </div>
                        <span style={{ fontSize: 12, fontWeight: 600, color: "var(--text-secondary)", width: 36, textAlign: "right" }}>{r.value}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
