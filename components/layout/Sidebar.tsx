"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard, ShoppingBag, ClipboardList, Heart,
    BarChart3, Package, Users, TrendingUp,
    Server, Activity, AlertTriangle, Settings, Code2,
    ChevronRight, Zap,
} from "lucide-react";

const roles = [
    { key: "user", label: "User", icon: ShoppingBag, color: "#4f7cff" },
    { key: "admin", label: "Admin", icon: BarChart3, color: "#a78bfa" },
    { key: "developer", label: "Developer", icon: Code2, color: "#34d399" },
];

const navItems: Record<string, { icon: React.ElementType; label: string; suffix?: string }[]> = {
    user: [
        { icon: LayoutDashboard, label: "Dashboard" },
        { icon: ShoppingBag, label: "Shop" },
        { icon: ClipboardList, label: "My Orders" },
        { icon: Heart, label: "Wishlist", suffix: "12" },
    ],
    admin: [
        { icon: LayoutDashboard, label: "Overview" },
        { icon: BarChart3, label: "Analytics" },
        { icon: Package, label: "Products" },
        { icon: ClipboardList, label: "Orders" },
        { icon: Users, label: "Customers" },
        { icon: TrendingUp, label: "Reports" },
    ],
    developer: [
        { icon: Activity, label: "System Status" },
        { icon: Server, label: "API Metrics" },
        { icon: AlertTriangle, label: "Error Logs", suffix: "5" },
        { icon: Code2, label: "Build Info" },
        { icon: Settings, label: "Config" },
    ],
};

export default function Sidebar() {
    const pathname = usePathname();
    const currentRole = pathname.split("/")[1] as string;
    const roleConfig = roles.find(r => r.key === currentRole) || roles[0];

    return (
        <aside style={{
            width: 240,
            minWidth: 240,
            background: "var(--bg-secondary)",
            borderRight: "1px solid var(--border)",
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            position: "sticky",
            top: 0,
        }}>
            {/* Logo */}
            <div style={{ padding: "24px 20px 20px", borderBottom: "1px solid var(--border)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{
                        width: 34, height: 34,
                        background: "linear-gradient(135deg, #4f7cff, #a78bfa)",
                        borderRadius: 10,
                        display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                        <Zap size={18} color="white" strokeWidth={2.5} />
                    </div>
                    <div>
                        <div style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>ShopNova</div>
                        <div style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 500 }}>E-commerce Platform</div>
                    </div>
                </div>
            </div>

            {/* Role Switcher */}
            <div style={{ padding: "16px 12px 8px" }}>
                <div style={{ fontSize: 10, color: "var(--text-muted)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8, paddingLeft: 8 }}>
                    View As
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    {roles.map(role => {
                        const Icon = role.icon;
                        const isActive = role.key === currentRole;
                        return (
                            <Link key={role.key} href={`/${role.key}`} style={{ textDecoration: "none" }}>
                                <div style={{
                                    display: "flex", alignItems: "center", gap: 10,
                                    padding: "9px 12px", borderRadius: 10,
                                    background: isActive ? `${role.color}18` : "transparent",
                                    border: isActive ? `1px solid ${role.color}40` : "1px solid transparent",
                                    cursor: "pointer",
                                    transition: "all 0.15s",
                                }}>
                                    <Icon size={15} color={isActive ? role.color : "var(--text-muted)"} strokeWidth={2} />
                                    <span style={{
                                        fontSize: 13, fontWeight: isActive ? 600 : 400,
                                        color: isActive ? role.color : "var(--text-secondary)",
                                    }}>{role.label}</span>
                                    {isActive && <ChevronRight size={13} color={role.color} style={{ marginLeft: "auto" }} />}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Nav */}
            <div style={{ padding: "8px 12px", flex: 1 }}>
                <div style={{ fontSize: 10, color: "var(--text-muted)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8, paddingLeft: 8 }}>
                    Navigation
                </div>
                {(navItems[currentRole] || []).map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <div key={i} style={{
                            display: "flex", alignItems: "center", gap: 10,
                            padding: "9px 12px", borderRadius: 10,
                            cursor: "pointer",
                            transition: "background 0.15s",
                            marginBottom: 2,
                            background: i === 0 ? "rgba(255,255,255,0.04)" : "transparent",
                        }}
                            onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
                            onMouseLeave={e => (e.currentTarget.style.background = i === 0 ? "rgba(255,255,255,0.04)" : "transparent")}>
                            <Icon size={15} color={i === 0 ? roleConfig.color : "var(--text-muted)"} strokeWidth={2} />
                            <span style={{ fontSize: 13, fontWeight: i === 0 ? 500 : 400, color: i === 0 ? "var(--text-primary)" : "var(--text-secondary)", flex: 1 }}>
                                {item.label}
                            </span>
                            {item.suffix && (
                                <span style={{ fontSize: 11, fontWeight: 600, color: "#f87171", background: "rgba(248,113,113,0.15)", padding: "1px 7px", borderRadius: 99 }}>
                                    {item.suffix}
                                </span>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Footer */}
            <div style={{ padding: "12px 16px 20px", borderTop: "1px solid var(--border)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{
                        width: 32, height: 32, borderRadius: "50%",
                        background: "linear-gradient(135deg, #4f7cff40, #a78bfa40)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 13, fontWeight: 700, color: "var(--text-primary)",
                    }}>A</div>
                    <div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>Anubhav</div>
                        <div style={{ fontSize: 11, color: "var(--text-muted)" }}>anubhav@shopnova.io</div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
