import React from "react";
import "./history.css"; // Make sure the path matches your file location

const History = () => {
  const orders = [
    { id: "#ORD-9982", date: "Oct 28, 2023", amount: "$273.50", status: "Shipped", bgColor: "#e0e7ff", textColor: "#4338ca" },
    { id: "#ORD-7721", date: "Oct 24, 2023", amount: "$12.00", status: "Delivered", bgColor: "#dcfce7", textColor: "#15803d" },
    { id: "#ORD-6612", date: "Oct 12, 2023", amount: "$34.50", status: "Cancelled", bgColor: "#fee2e2", textColor: "#b91c1c" },
    { id: "#ORD-5541", date: "Sep 30, 2023", amount: "$189.99", status: "Delivered", bgColor: "#dcfce7", textColor: "#15803d" },
    { id: "#ORD-4412", date: "Sep 15, 2023", amount: "$45.00", status: "Delivered", bgColor: "#dcfce7", textColor: "#15803d" },
  ];

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <span>🏸</span> BADMINTON<span className="logo-highlight">SHOP</span>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search for rackets, shoes, shuttles..." />
        </div>
        <div className="nav-links">
          <span>Home</span>
          <span style={{ color: "#00ff66", fontWeight: "600" }}>Shop</span>
          <span>🔔</span>
          <span>🛒 Cart (3)</span>
          <span>👤 Profile</span>
        </div>
      </nav>

      <div className="main-layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="profile-card">
            <p style={{ color: "#888", fontSize: "14px" }}>Welcome back,</p>
            <h4 style={{ margin: "5px 0 20px 0" }}>Badminton Enthusiast</h4>
            <div className="nav-item">👤 Profile Settings</div>
            <div className="nav-item active">📦 Order History</div>
            <div className="nav-item">❤️ Wishlist</div>
            <button className="page-btn" style={{ width: "100%", marginTop: "20px" }}>Log Out</button>
          </div>

          <div className="promo-card">
            <span style={{ fontSize: "12px", opacity: 0.7 }}>PRO MEMBER</span>
            <h2 style={{ margin: "10px 0" }}>2,450 pts</h2>
            <p style={{ fontSize: "13px", opacity: 0.8, marginBottom: "20px" }}>
              You're 550 points away from a free restringing!
            </p>
            <button className="btn-redeem">Redeem Rewards</button>
          </div>
        </aside>

        {/* Main Section */}
        <section className="content-area">
          <h1>Order History</h1>
          <p style={{ color: "#666", marginBottom: "25px" }}>Total Orders (12)</p>

          <div className="order-table-card">
            <div className="table-filters">
              <input type="text" placeholder="Search orders..." />
              <div>
                <select><option>Status: All</option></select>
                <select><option>Year: 2024</option></select>
              </div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>ORDER ID</th>
                  <th>DATE</th>
                  <th>TOTAL AMOUNT</th>
                  <th>STATUS</th>
                  <th style={{ textAlign: "right" }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td style={{ fontWeight: "bold" }}>{order.id}</td>
                    <td>{order.date}</td>
                    <td style={{ fontWeight: "bold" }}>{order.amount}</td>
                    <td>
                      <span 
                        className="status-badge" 
                        style={{ backgroundColor: order.bgColor, color: order.textColor }}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <button style={{ color: "#2563eb", border: "none", background: "none", cursor: "pointer", fontWeight: "600" }}>View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="pagination">
              <span>Showing 1 to 5 of 12 orders</span>
              <div>
                <button className="page-btn">&lt;</button>
                <button className="page-btn active">1</button>
                <button className="page-btn">2</button>
                <button className="page-btn">3</button>
                <button className="page-btn">&gt;</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default History;