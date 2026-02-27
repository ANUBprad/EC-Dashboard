import DashboardShell from "@/components/layout/DashboardShell";
import KPICards from "@/components/admin/KPICards";
import RevenueChart from "@/components/admin/RevenueChart";
import CategoryPieChart from "@/components/admin/CategoryPieChart";
import TopProducts from "@/components/admin/TopProducts";
import OrdersTable from "@/components/admin/OrdersTable";
import CustomerInsights from "@/components/admin/CustomerInsights";

export const metadata = { title: "ShopNova — Admin Dashboard" };

export default function AdminPage() {
    return (
        <DashboardShell role="admin">
            {/* Header strip */}
            <div className="animate-in" style={{
                marginBottom: 24,
                background: "linear-gradient(135deg, rgba(167,139,250,0.12) 0%, rgba(79,124,255,0.06) 100%)",
                border: "1px solid rgba(167,139,250,0.2)",
                borderRadius: 16,
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <div>
                    <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 4 }}>Analytics Overview</p>
                    <h1 style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 4, color: "var(--text-primary)" }}>
                        Admin <span style={{ background: "linear-gradient(135deg, #a78bfa, #4f7cff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Control Panel</span>
                    </h1>
                    <p style={{ fontSize: 13, color: "var(--text-muted)" }}>Live data as of Feb 27, 2026 · All figures in USD</p>
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                    <button style={{
                        background: "linear-gradient(135deg, #a78bfa, #4f7cff)",
                        color: "white", fontWeight: 700, fontSize: 13,
                        padding: "10px 20px", borderRadius: 10, border: "none", cursor: "pointer",
                    }}>Export Report</button>
                    <button style={{
                        background: "transparent", border: "1px solid var(--border)",
                        color: "var(--text-secondary)", fontWeight: 600, fontSize: 13,
                        padding: "10px 20px", borderRadius: 10, cursor: "pointer",
                    }}>Date Range</button>
                </div>
            </div>

            <KPICards />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 16, marginBottom: 16 }}>
                <RevenueChart />
                <CategoryPieChart />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 16, marginBottom: 16 }}>
                <OrdersTable />
                <CustomerInsights />
            </div>

            <TopProducts />
        </DashboardShell>
    );
}
