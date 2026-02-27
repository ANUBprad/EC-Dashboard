"use client";
import { ShoppingBag, ClipboardList, Heart, Coins } from "lucide-react";

const stats = [
    { label: "Total Orders", value: "47", sub: "All time", icon: ClipboardList, color: "#4f7cff" },
    { label: "Cart Items", value: "3", sub: "Ready to buy", icon: ShoppingBag, color: "#a78bfa" },
    { label: "Wishlist", value: "12", sub: "Saved items", icon: Heart, color: "#f87171" },
    { label: "Loyalty Points", value: "2,840", sub: "≈ $28.40 value", icon: Coins, color: "#fbbf24" },
];

export default function StatsStrip() {
    return (
        <div className="animate-in" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 20 }}>
            {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                    <div key={i} className="card" style={{ padding: "18px 20px", animationDelay: `${i * 0.06}s` }}>
                        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12 }}>
                            <div style={{
                                width: 36, height: 36, borderRadius: 10,
                                background: `${s.color}18`, border: `1px solid ${s.color}30`,
                                display: "flex", alignItems: "center", justifyContent: "center",
                            }}>
                                <Icon size={17} color={s.color} strokeWidth={2} />
                            </div>
                            <span style={{ fontSize: 10, color: "var(--text-muted)" }}>Today</span>
                        </div>
                        <div style={{ fontSize: 26, fontWeight: 800, color: "var(--text-primary)", lineHeight: 1, marginBottom: 4 }}>{s.value}</div>
                        <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 2 }}>{s.label}</div>
                        <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{s.sub}</div>
                    </div>
                );
            })}
        </div>
    );
}
