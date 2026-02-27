import DashboardShell from "@/components/layout/DashboardShell";
import StatsStrip from "@/components/user/StatsStrip";
import TrackingCard from "@/components/user/TrackingCard";
import FeaturedProducts from "@/components/user/FeaturedProducts";
import RecentOrders from "@/components/user/RecentOrders";

export const metadata = { title: "ShopNova — User Dashboard" };

export default function UserPage() {
    return (
        <DashboardShell role="user">
            {/* Welcome Banner */}
            <div className="animate-in" style={{
                marginBottom: 24,
                background: "linear-gradient(135deg, rgba(79,124,255,0.12) 0%, rgba(167,139,250,0.08) 100%)",
                border: "1px solid rgba(79,124,255,0.2)",
                borderRadius: 16,
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <div>
                    <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 4, fontWeight: 500 }}>Good evening 👋</p>
                    <h1 className="gradient-text" style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 4 }}>
                        Welcome back, Anubhav
                    </h1>
                    <p style={{ fontSize: 13, color: "var(--text-muted)" }}>You have 3 items in your cart and 1 active shipment on the way.</p>
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                    <button style={{
                        background: "linear-gradient(135deg, #4f7cff, #a78bfa)",
                        color: "white", fontWeight: 700, fontSize: 13,
                        padding: "10px 20px", borderRadius: 10, border: "none", cursor: "pointer",
                    }}>Continue Shopping</button>
                    <button style={{
                        background: "transparent", border: "1px solid var(--border)",
                        color: "var(--text-secondary)", fontWeight: 600, fontSize: 13,
                        padding: "10px 20px", borderRadius: 10, cursor: "pointer",
                    }}>View Cart (3)</button>
                </div>
            </div>

            <StatsStrip />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 16, marginBottom: 16 }}>
                <FeaturedProducts />
                <TrackingCard />
            </div>

            <RecentOrders />
        </DashboardShell>
    );
}
