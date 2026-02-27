"use client";
import { DollarSign, ShoppingCart, Users, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

const kpis = [
    { label: "Total Revenue", value: "$847,290", delta: "+18.3%", up: true, icon: DollarSign, color: "#4f7cff", sub: "vs last month" },
    { label: "Total Orders", value: "12,487", delta: "+9.2%", up: true, icon: ShoppingCart, color: "#a78bfa", sub: "vs last month" },
    { label: "Active Users", value: "38,924", delta: "+22.1%", up: true, icon: Users, color: "#34d399", sub: "vs last month" },
    { label: "Avg Order Value", value: "$67.80", delta: "-3.4%", up: false, icon: TrendingUp, color: "#fbbf24", sub: "vs last month" },
];

export default function KPICards() {
    return (
        <div className="animate-in" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 20 }}>
            {kpis.map((k, i) => {
                const Icon = k.icon;
                return (
                    <div key={i} className="card" style={{ animationDelay: `${i * 0.07}s` }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                            <div style={{
                                width: 38, height: 38, borderRadius: 10,
                                background: `${k.color}18`, border: `1px solid ${k.color}28`,
                                display: "flex", alignItems: "center", justifyContent: "center",
                            }}>
                                <Icon size={18} color={k.color} strokeWidth={1.8} />
                            </div>
                            <span style={{
                                fontSize: 12, fontWeight: 700,
                                color: k.up ? "#34d399" : "#f87171",
                                background: k.up ? "rgba(52,211,153,0.12)" : "rgba(248,113,113,0.12)",
                                padding: "3px 8px", borderRadius: 99,
                                display: "flex", alignItems: "center", gap: 2,
                            }}>
                                {k.up ? <ArrowUpRight size={11} /> : <ArrowDownRight size={11} />}
                                {k.delta}
                            </span>
                        </div>
                        <div style={{ fontSize: 28, fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 5 }}>
                            {k.value}
                        </div>
                        <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 2 }}>{k.label}</div>
                        <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{k.sub}</div>
                    </div>
                );
            })}
        </div>
    );
}
