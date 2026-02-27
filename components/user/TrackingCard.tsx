import { Package, CheckCircle, Truck, MapPin, Clock } from "lucide-react";

const steps = [
    { label: "Order Placed", icon: CheckCircle, done: true },
    { label: "Processing", icon: Package, done: true },
    { label: "Shipped", icon: Truck, done: true },
    { label: "Out for Delivery", icon: MapPin, done: false },
    { label: "Delivered", icon: CheckCircle, done: false },
];

export default function TrackingCard() {
    return (
        <div className="card animate-in" style={{ animationDelay: "0.1s" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", marginBottom: 2 }}>Active Shipment</h3>
                    <p style={{ fontSize: 12, color: "var(--text-muted)" }}>Order <span style={{ color: "#4f7cff", fontWeight: 600 }}>#ORD-7820</span></p>
                </div>
                <span className="badge badge-blue">
                    <span className="pulse-dot" style={{ width: 5, height: 5, borderRadius: "50%", background: "#4f7cff", display: "inline-block" }} />
                    In Transit
                </span>
            </div>

            {/* Product */}
            <div style={{
                display: "flex", alignItems: "center", gap: 12,
                background: "var(--bg-primary)", borderRadius: 10,
                padding: "12px 14px", marginBottom: 22,
                border: "1px solid var(--border)",
            }}>
                <div style={{ fontSize: 24 }}>⌚</div>
                <div>
                    <div style={{ fontSize: 13.5, fontWeight: 600, color: "var(--text-primary)" }}>Apple Watch Ultra</div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)" }}>1× Titanium · $799.00</div>
                </div>
                <div style={{ marginLeft: "auto", textAlign: "right" }}>
                    <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 2 }}>Est. Delivery</div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "var(--accent-green)" }}>Mar 1, 2026</div>
                </div>
            </div>

            {/* Stepper */}
            <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
                {steps.map((step, i) => {
                    const Icon = step.icon;
                    const isLast = i === steps.length - 1;
                    const isCurrent = !step.done && (i === 0 || steps[i - 1].done);
                    return (
                        <div key={i} style={{ display: "flex", alignItems: "center", flex: isLast ? 0 : 1 }}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                                <div style={{
                                    width: isCurrent ? 34 : 28, height: isCurrent ? 34 : 28,
                                    borderRadius: "50%",
                                    background: step.done ? "rgba(52,211,153,0.18)" : isCurrent ? "rgba(79,124,255,0.18)" : "var(--bg-primary)",
                                    border: `2px solid ${step.done ? "#34d399" : isCurrent ? "#4f7cff" : "var(--border)"}`,
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    transition: "all 0.3s",
                                }}>
                                    <Icon size={12} color={step.done ? "#34d399" : isCurrent ? "#4f7cff" : "var(--text-muted)"} strokeWidth={2.5} />
                                </div>
                                <span style={{ fontSize: 10, color: step.done ? "var(--accent-green)" : isCurrent ? "#4f7cff" : "var(--text-muted)", fontWeight: step.done || isCurrent ? 600 : 400, whiteSpace: "nowrap" }}>
                                    {step.label}
                                </span>
                            </div>
                            {!isLast && (
                                <div style={{
                                    flex: 1, height: 2, background: step.done ? "rgba(52,211,153,0.5)" : "var(--border)",
                                    margin: "0 4px", marginBottom: 20,
                                    transition: "background 0.3s",
                                }} />
                            )}
                        </div>
                    );
                })}
            </div>

            <div style={{
                display: "flex", alignItems: "center", gap: 6, marginTop: 16,
                background: "rgba(79,124,255,0.06)", border: "1px solid rgba(79,124,255,0.15)",
                borderRadius: 8, padding: "8px 12px"
            }}>
                <Clock size={12} color="#4f7cff" />
                <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>Last updated: Today at 14:32 · FedEx tracking #FX88234921</span>
            </div>
        </div>
    );
}
