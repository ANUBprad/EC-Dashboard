"use client";
import { ShoppingBag, Star, Heart, ShoppingCart } from "lucide-react";
import { featuredProducts } from "@/lib/mock-data";

export default function FeaturedProducts() {
    return (
        <div className="card animate-in" style={{ animationDelay: "0.15s" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", marginBottom: 2 }}>Featured Products</h3>
                    <p style={{ fontSize: 12, color: "var(--text-muted)" }}>Curated picks just for you</p>
                </div>
                <button style={{
                    fontSize: 12, color: "var(--accent-blue)", fontWeight: 600,
                    background: "rgba(79,124,255,0.1)", border: "1px solid rgba(79,124,255,0.2)",
                    padding: "6px 14px", borderRadius: 8, cursor: "pointer",
                }}>View All</button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: 14 }}>
                {featuredProducts.map(p => (
                    <div key={p.id} style={{
                        background: "var(--bg-primary)",
                        border: "1px solid var(--border)",
                        borderRadius: 14,
                        padding: "16px",
                        position: "relative",
                        cursor: "pointer",
                        transition: "border-color 0.2s, transform 0.2s",
                    }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLDivElement).style.borderColor = "#4f7cff40";
                            (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                            (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                        }}>
                        {p.badge && (
                            <span className={`badge badge-${p.badge === "Sale" ? "orange" : p.badge === "New" ? "green" : p.badge === "Bestseller" ? "blue" : "purple"}`}
                                style={{ position: "absolute", top: 10, left: 10, fontSize: 10 }}>
                                {p.badge}
                            </span>
                        )}

                        {/* Heart */}
                        <div style={{ position: "absolute", top: 10, right: 10 }}>
                            <Heart size={14} color="var(--text-muted)" />
                        </div>

                        {/* Emoji product image placeholder */}
                        <div style={{
                            fontSize: 36, textAlign: "center", padding: "20px 0 14px",
                            background: "var(--bg-secondary)", borderRadius: 10, marginBottom: 12,
                        }}>
                            {p.emoji}
                        </div>

                        <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 3 }}>{p.category}</div>
                        <div style={{ fontSize: 13.5, fontWeight: 600, color: "var(--text-primary)", marginBottom: 8, lineHeight: 1.3 }}>{p.name}</div>

                        {/* Rating */}
                        <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 10 }}>
                            <Star size={11} color="#fbbf24" fill="#fbbf24" />
                            <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{p.rating}</span>
                            <span style={{ fontSize: 11, color: "var(--text-muted)" }}>({p.reviews.toLocaleString()})</span>
                        </div>

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <span style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }}>{p.price}</span>
                            <button style={{
                                width: 30, height: 30, borderRadius: 8, cursor: "pointer",
                                background: "rgba(79,124,255,0.15)", border: "1px solid rgba(79,124,255,0.3)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                            }}>
                                <ShoppingCart size={13} color="#4f7cff" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
