"use client";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { categoryData } from "@/lib/mock-data";

export default function CategoryPieChart() {
    return (
        <div className="card animate-in" style={{ animationDelay: "0.12s" }}>
            <div style={{ marginBottom: 16 }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", marginBottom: 2 }}>Sales by Category</h3>
                <p style={{ fontSize: 12, color: "var(--text-muted)" }}>Revenue distribution</p>
            </div>
            <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                    <Pie data={categoryData} cx="50%" cy="50%" innerRadius={50} outerRadius={80}
                        paddingAngle={4} dataKey="value">
                        {categoryData.map((entry, i) => (
                            <Cell key={i} fill={entry.color} stroke="none" />
                        ))}
                    </Pie>
                    <Tooltip
                        contentStyle={{
                            background: "#1e2130",
                            border: "1px solid #2a2f45",
                            borderRadius: 10,
                            fontSize: 12
                        }}
                        formatter={(value: number | undefined) => [
                            `${(value ?? 0)}%`,
                            ""
                        ]}
                        />
                </PieChart>
            </ResponsiveContainer>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {categoryData.map((c, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <div style={{ width: 8, height: 8, borderRadius: 2, background: c.color }} />
                            <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{c.name}</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <div style={{
                                width: 80, height: 4, background: "var(--border)", borderRadius: 99, overflow: "hidden",
                            }}>
                                <div style={{ width: `${c.value}%`, height: "100%", background: c.color, borderRadius: 99 }} />
                            </div>
                            <span style={{ fontSize: 12, fontWeight: 600, color: "var(--text-primary)", width: 30, textAlign: "right" }}>{c.value}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
