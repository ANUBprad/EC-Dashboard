import { recentOrders } from "@/lib/mock-data";
import { ArrowUpRight } from "lucide-react";

const statusBadge: Record<string, string> = {
    Delivered: "badge-green",
    Shipped: "badge-blue",
    Processing: "badge-yellow",
    Cancelled: "badge-red",
};

const statusDot: Record<string, string> = {
    Delivered: "#34d399",
    Shipped: "#4f7cff",
    Processing: "#fbbf24",
    Cancelled: "#f87171",
};

export default function RecentOrders() {
    return (
        <div className="card animate-in" style={{ animationDelay: "0.2s" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", marginBottom: 2 }}>Recent Orders</h3>
                    <p style={{ fontSize: 12, color: "var(--text-muted)" }}>Your last 5 purchases</p>
                </div>
                <button style={{
                    display: "flex", alignItems: "center", gap: 4,
                    fontSize: 12, color: "var(--accent-blue)", fontWeight: 600,
                    background: "transparent", border: "none", cursor: "pointer",
                }}>Track All <ArrowUpRight size={13} /></button>
            </div>

            <table className="data-table">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Product</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th style={{ textAlign: "right" }}>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {recentOrders.map(order => (
                        <tr key={order.id}>
                            <td style={{ fontWeight: 600, color: "var(--text-primary)", fontFamily: "monospace", fontSize: 12 }}>{order.id}</td>
                            <td style={{ color: "var(--text-primary)" }}>{order.product}</td>
                            <td>{order.date}</td>
                            <td>
                                <span className={`badge ${statusBadge[order.status] || "badge-blue"}`}>
                                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: statusDot[order.status] || "#4f7cff", display: "inline-block" }} />
                                    {order.status}
                                </span>
                            </td>
                            <td style={{ textAlign: "right", fontWeight: 600, color: "var(--text-primary)" }}>{order.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
