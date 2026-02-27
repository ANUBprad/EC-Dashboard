import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardShell({ children, role }: { children: React.ReactNode; role: string }) {
    return (
        <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
            <Sidebar />
            <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
                <Topbar role={role} />
                <main style={{ flex: 1, overflowY: "auto", padding: "28px 28px 40px" }}>
                    {children}
                </main>
            </div>
        </div>
    );
}
