import { topProducts } from "@/lib/mock-data";
import { TrendingUp, TrendingDown, Medal } from "lucide-react";

const rankColors = ["#fbbf24", "#94a3b8", "#fb923c"];

export default function TopProducts() {
    return (
        <div className="card animate-in" style={{ animationDelay: "0.18s" }}>
            <div style={{ marginBottom: 18 }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", marginBottom: 2 }}>Top Products</h3>
                <p style={{ fontSize: 12, color: "var(--text-muted)" }}>Best sellers this month</p>
            </div>

            <table className="data-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Units Sold</th>
                        <th>Revenue</th>
                        <th>Trend</th>
                    </tr>
                </thead>
                <tbody>
                    {topProducts.map(p => {
                        const isUp = p.trend.startsWith("+");
                        return (
                            <tr key={p.rank}>
                                <td>
                                    {p.rank <= 3 ? (
                                        <Medal size={14} color={rankColors[p.rank - 1]} />
                                    ) : (
                                        <span style={{ color: "var(--text-muted)", fontWeight: 600 }}>{p.rank}</span>
                                    )}
                                </td>
                                <td style={{ fontWeight: 600, color: "var(--text-primary)" }}>{p.name}</td>
                                <td>{p.sales.toLocaleString()}</td>
                                <td style={{ fontWeight: 600, color: "var(--text-primary)" }}>{p.revenue}</td>
                                <td>
                                    <span style={{
                                        display: "flex", alignItems: "center", gap: 3,
                                        fontSize: 12, fontWeight: 600,
                                        color: isUp ? "#34d399" : "#f87171",
                                    }}>
                                        {isUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                                        {p.trend}
                                    </span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
