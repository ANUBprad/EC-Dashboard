"use client";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { revenueData } from "@/lib/mock-data";

export default function RevenueChart() {
    return (
        <div className="card animate-in" style={{ animationDelay: "0.1s" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", marginBottom: 2 }}>Revenue Overview</h3>
                    <p style={{ fontSize: 12, color: "var(--text-muted)" }}>Mar 2025 – Feb 2026</p>
                </div>
                <div style={{ display: "flex", gap: 16, fontSize: 12, color: "var(--text-muted)" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                        <span style={{ width: 10, height: 3, background: "#4f7cff", borderRadius: 4, display: "inline-block" }} />
                        This Year
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                        <span style={{ width: 10, height: 3, background: "#3a4060", borderRadius: 4, display: "inline-block" }} />
                        Last Year
                    </span>
                </div>
            </div>

            <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={revenueData} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#4f7cff" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#4f7cff" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPrev" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3a4060" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#3a4060" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(42,47,69,0.7)" vertical={false} />
                    <XAxis dataKey="month" tick={{ fill: "#475569", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: "#475569", fontSize: 11 }} axisLine={false} tickLine={false}
                        tickFormatter={v => `$${(v / 1000).toFixed(0)}k`} />
                    <Tooltip
                        contentStyle={{ background: "#1e2130", border: "1px solid #2a2f45", borderRadius: 10, fontSize: 12 }}
                        labelStyle={{ color: "#94a3b8", marginBottom: 4 }}
                        itemStyle={{ color: "#f1f5f9" }}
                        formatter={(v) => [`$${(v ?? 0).toLocaleString()}`, ""]}
                    />
                    <Area type="monotone" dataKey="prevYear" stroke="#3a4060" strokeWidth={2} fill="url(#colorPrev)" name="Last Year" dot={false} />
                    <Area type="monotone" dataKey="revenue" stroke="#4f7cff" strokeWidth={2.5} fill="url(#colorRevenue)" name="This Year" dot={false} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
