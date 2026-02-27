"use client";
import { Bell, Search, Sun } from "lucide-react";

const roleLabels: Record<string, { label: string; color: string; desc: string }> = {
    user: { label: "User", color: "#4f7cff", desc: "Shopping & Orders" },
    admin: { label: "Admin", color: "#a78bfa", desc: "Analytics & Operations" },
    developer: { label: "Developer", color: "#34d399", desc: "System & Infrastructure" },
};

export default function Topbar({ role }: { role: string }) {
    const config = roleLabels[role] || roleLabels.user;

    return (
        <header style={{
            height: 64,
            background: "var(--bg-secondary)",
            borderBottom: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            padding: "0 28px",
            gap: 16,
            position: "sticky",
            top: 0,
            zIndex: 20,
        }}>
            {/* Page title */}
            <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }}>Dashboard</div>
                    <span style={{
                        fontSize: 11, fontWeight: 600,
                        color: config.color,
                        background: `${config.color}18`,
                        border: `1px solid ${config.color}40`,
                        padding: "2px 10px",
                        borderRadius: 99,
                    }}>{config.label}</span>
                </div>
                <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 1 }}>{config.desc}</div>
            </div>

            {/* Search */}
            <div style={{
                display: "flex", alignItems: "center", gap: 8,
                background: "var(--bg-card)", border: "1px solid var(--border)",
                borderRadius: 10, padding: "8px 14px",
                width: 220,
            }}>
                <Search size={14} color="var(--text-muted)" />
                <input placeholder="Search…" style={{
                    background: "none", border: "none", outline: "none",
                    fontSize: 13, color: "var(--text-primary)", width: "100%",
                }} />
                <span style={{ fontSize: 11, color: "var(--text-muted)", background: "var(--border)", padding: "1px 6px", borderRadius: 5 }}>⌘K</span>
            </div>

            {/* Notification Bell */}
            <div style={{ position: "relative", cursor: "pointer" }}>
                <div style={{
                    width: 38, height: 38, display: "flex", alignItems: "center", justifyContent: "center",
                    background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10,
                }}>
                    <Bell size={16} color="var(--text-muted)" />
                </div>
                <div style={{
                    position: "absolute", top: 7, right: 7,
                    width: 8, height: 8, borderRadius: "50%",
                    background: "#f87171", border: "2px solid var(--bg-secondary)",
                }} />
            </div>

            {/* Light mode toggle (decorative) */}
            <div style={{
                width: 38, height: 38, display: "flex", alignItems: "center", justifyContent: "center",
                background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, cursor: "pointer",
            }}>
                <Sun size={16} color="var(--text-muted)" />
            </div>

            {/* Date */}
            <div style={{ fontSize: 12, color: "var(--text-muted)", whiteSpace: "nowrap" }}>
                Feb 27, 2026
            </div>
        </header>
    );
}
