import { adminOrders } from "@/lib/mock-data";
import { Filter, Download } from "lucide-react";

const statusBadge: Record<string, string> = {
    Delivered: "badge-green",
    Shipped: "badge-blue",
    Processing: "badge-yellow",
    Cancelled: "badge-red",
};

export default function OrdersTable() {
    return (
        <div className="card animate-in" style={{ animationDelay: "0.14s" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                <div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", marginBottom: 2 }}>Order Management</h3>
                    <p style={{ fontSize: 12, color: "var(--text-muted)" }}>All recent transactions</p>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                    <button style={{
                        display: "flex", alignItems: "center", gap: 6,
                        fontSize: 12, color: "var(--text-secondary)", fontWeight: 500,
                        background: "var(--bg-primary)", border: "1px solid var(--border)", padding: "7px 12px", borderRadius: 8, cursor: "pointer",
                    }}><Filter size={13} /> Filter</button>
                    <button style={{
                        display: "flex", alignItems: "center", gap: 6,
                        fontSize: 12, color: "var(--accent-blue)", fontWeight: 600,
                        background: "rgba(79,124,255,0.1)", border: "1px solid rgba(79,124,255,0.2)", padding: "7px 12px", borderRadius: 8, cursor: "pointer",
                    }}><Download size={13} /> Export</button>
                </div>
            </div>

            <table className="data-table">
                <thead>
                    <tr>
                        <th>Order</th>
                        <th>Customer</th>
                        <th>Product</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th style={{ textAlign: "right" }}>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {adminOrders.map(o => (
                        <tr key={o.id}>
                            <td style={{ fontWeight: 600, color: "#4f7cff", fontFamily: "monospace", fontSize: 12 }}>{o.id}</td>
                            <td style={{ fontWeight: 500, color: "var(--text-primary)" }}>{o.customer}</td>
                            <td>{o.product}</td>
                            <td>{o.date}</td>
                            <td><span className={`badge ${statusBadge[o.status] || "badge-blue"}`}>{o.status}</span></td>
                            <td style={{ textAlign: "right", fontWeight: 600, color: "var(--text-primary)" }}>{o.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
