// ─────────────────────────────────────────────
// Shared mock data for all three dashboards
// ─────────────────────────────────────────────

export const recentOrders = [
  { id: "#ORD-7821", product: "Sony WH-1000XM5", date: "Feb 27, 2026", status: "Delivered",  amount: "$349.00", avatar: "https://api.dicebear.com/7.x/initials/svg?seed=AL" },
  { id: "#ORD-7820", product: "Apple Watch Ultra", date: "Feb 26, 2026", status: "Shipped",    amount: "$799.00", avatar: "https://api.dicebear.com/7.x/initials/svg?seed=MK" },
  { id: "#ORD-7819", product: "Nike Air Max 270",  date: "Feb 25, 2026", status: "Processing", amount: "$129.00", avatar: "https://api.dicebear.com/7.x/initials/svg?seed=PJ" },
  { id: "#ORD-7818", product: "Logitech MX Keys",  date: "Feb 24, 2026", status: "Delivered",  amount: "$109.00", avatar: "https://api.dicebear.com/7.x/initials/svg?seed=SR" },
  { id: "#ORD-7817", product: "iPad Pro 12.9\"",   date: "Feb 23, 2026", status: "Cancelled",  amount: "$1,099.00", avatar: "https://api.dicebear.com/7.x/initials/svg?seed=TR" },
];

export const featuredProducts = [
  { id: 1, name: "Sony WH-1000XM5", category: "Audio",       price: "$349",   rating: 4.8, reviews: 2341, badge: "Bestseller", emoji: "🎧" },
  { id: 2, name: "MacBook Air M3",   category: "Laptops",     price: "$1,099", rating: 4.9, reviews: 1872, badge: "New",        emoji: "💻" },
  { id: 3, name: "Nike Air Max 270", category: "Footwear",    price: "$129",   rating: 4.5, reviews: 4512, badge: "Sale",       emoji: "👟" },
  { id: 4, name: "Kindle Paperwhite",category: "Books & E-Readers", price: "$139", rating: 4.7, reviews: 8921, badge: "Top Rated", emoji: "📖" },
  { id: 5, name: "Dyson V15 Detect", category: "Home",        price: "$749",   rating: 4.6, reviews: 1234, badge: "",           emoji: "🌀" },
  { id: 6, name: "Canon EOS R10",    category: "Cameras",     price: "$879",   rating: 4.8, reviews: 987,  badge: "New",        emoji: "📷" },
];

export const revenueData = [
  { month: "Mar", revenue: 42000, prevYear: 31000 },
  { month: "Apr", revenue: 55000, prevYear: 38000 },
  { month: "May", revenue: 48000, prevYear: 42000 },
  { month: "Jun", revenue: 67000, prevYear: 52000 },
  { month: "Jul", revenue: 72000, prevYear: 58000 },
  { month: "Aug", revenue: 61000, prevYear: 55000 },
  { month: "Sep", revenue: 80000, prevYear: 63000 },
  { month: "Oct", revenue: 93000, prevYear: 71000 },
  { month: "Nov", revenue: 110000, prevYear: 88000 },
  { month: "Dec", revenue: 98000, prevYear: 95000 },
  { month: "Jan", revenue: 74000, prevYear: 62000 },
  { month: "Feb", revenue: 88000, prevYear: 70000 },
];

export const categoryData = [
  { name: "Electronics", value: 38, color: "#4f7cff" },
  { name: "Clothing",    value: 22, color: "#a78bfa" },
  { name: "Home & Garden", value: 18, color: "#34d399" },
  { name: "Books",       value: 12, color: "#fbbf24" },
  { name: "Sports",      value: 10, color: "#fb923c" },
];

export const topProducts = [
  { rank: 1, name: "MacBook Air M3",    sales: 1842, revenue: "$2.02M", trend: "+18%" },
  { rank: 2, name: "Sony WH-1000XM5",  sales: 4123, revenue: "$1.44M", trend: "+12%" },
  { rank: 3, name: "Apple Watch Ultra", sales: 1201, revenue: "$960K",  trend: "+31%" },
  { rank: 4, name: "Dyson V15 Detect",  sales: 892,  revenue: "$668K",  trend: "+7%"  },
  { rank: 5, name: "iPad Pro 12.9\"",   sales: 543,  revenue: "$596K",  trend: "-3%"  },
];

export const adminOrders = [
  { id: "#ORD-7821", customer: "Alice Lee",     product: "Sony WH-1000XM5", date: "Feb 27",  status: "Delivered",  total: "$349" },
  { id: "#ORD-7820", customer: "Mark Kim",      product: "Apple Watch Ultra",date: "Feb 26",  status: "Shipped",    total: "$799" },
  { id: "#ORD-7819", customer: "Priya Jain",    product: "Nike Air Max 270", date: "Feb 25",  status: "Processing", total: "$129" },
  { id: "#ORD-7818", customer: "Sam Rodrigues", product: "Logitech MX Keys", date: "Feb 24",  status: "Delivered",  total: "$109" },
  { id: "#ORD-7817", customer: "Tom Reeves",    product: "iPad Pro 12.9\"",  date: "Feb 23",  status: "Cancelled",  total: "$1,099"},
  { id: "#ORD-7816", customer: "Emily Chang",   product: "MacBook Air M3",   date: "Feb 22",  status: "Delivered",  total: "$1,099"},
];

export const signupData = [
  { week: "W1", users: 210 }, { week: "W2", users: 340 }, { week: "W3", users: 280 },
  { week: "W4", users: 420 }, { week: "W5", users: 390 }, { week: "W6", users: 510 },
  { week: "W7", users: 460 }, { week: "W8", users: 580 },
];

export const apiMetricsData = [
  { time: "00:00", rps: 120,  latency: 45  },
  { time: "04:00", rps: 80,   latency: 38  },
  { time: "08:00", rps: 340,  latency: 72  },
  { time: "10:00", rps: 520,  latency: 91  },
  { time: "12:00", rps: 480,  latency: 88  },
  { time: "14:00", rps: 610,  latency: 104 },
  { time: "16:00", rps: 590,  latency: 98  },
  { time: "18:00", rps: 720,  latency: 115 },
  { time: "20:00", rps: 440,  latency: 80  },
  { time: "22:00", rps: 250,  latency: 58  },
  { time: "23:59", rps: 180,  latency: 49  },
];

export const errorLogs = [
  { time: "18:42:12", method: "POST", endpoint: "/api/checkout",       status: 500, message: "Payment gateway timeout" },
  { time: "17:31:05", method: "GET",  endpoint: "/api/products/9981",  status: 404, message: "Product not found" },
  { time: "16:18:44", method: "PUT",  endpoint: "/api/orders/7820",    status: 422, message: "Invalid order state transition" },
  { time: "14:09:33", method: "GET",  endpoint: "/api/users/me",       status: 401, message: "Token expired" },
  { time: "11:55:18", method: "POST", endpoint: "/api/auth/login",     status: 429, message: "Rate limit exceeded" },
];

export const systemServices = [
  { name: "API Gateway",    status: "Operational", uptime: "99.98%", latency: "42ms"  },
  { name: "Database (RDS)", status: "Operational", uptime: "99.95%", latency: "3ms"   },
  { name: "Redis Cache",    status: "Operational", uptime: "100%",   latency: "0.8ms" },
  { name: "CDN (Cloudfront)",status:"Operational", uptime: "100%",   latency: "8ms"   },
  { name: "Search (ES)",    status: "Degraded",    uptime: "98.10%", latency: "210ms" },
  { name: "Email (SES)",    status: "Operational", uptime: "99.87%", latency: "120ms" },
];
