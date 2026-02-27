import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "ShopNova — E-commerce Dashboard",
  description: "Multi-role e-commerce dashboard: User, Admin, and Developer views",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable} style={{ fontFamily: "var(--font-inter, 'Inter', sans-serif)" }}>
        {children}
      </body>
    </html>
  );
}
