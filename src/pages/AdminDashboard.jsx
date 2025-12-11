import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import "./AdminDashboard.css";
import { FaMapMarkedAlt } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div className="admin-layout">
      <AdminSidebar />

      <main className="admin-content">
        <h1 className="page-title">Dashboard</h1>

        {/* TOP ROW: Chart & Insights */}
        <div className="dashboard-grid">
          {/* Widget 1: Sales Chart (Simulated) */}
          <div className="card chart-card">
            <h3>Sales Performance & Profitability Trends</h3>
            <p className="subtitle">Last 6 Months</p>
            <div className="chart-placeholder">
              {/* Simulated Chart Bars/Lines using CSS */}
              <div className="chart-bar" style={{ height: "30%" }}>
                <span>Jan</span>
              </div>
              <div className="chart-bar" style={{ height: "50%" }}>
                <span>Feb</span>
              </div>
              <div className="chart-bar" style={{ height: "45%" }}>
                <span>Mar</span>
              </div>
              <div className="chart-bar" style={{ height: "70%" }}>
                <span>Apr</span>
              </div>
              <div className="chart-bar" style={{ height: "60%" }}>
                <span>May</span>
              </div>
              <div className="chart-bar active" style={{ height: "85%" }}>
                <span>Jun</span>
              </div>
            </div>
          </div>

          {/* Widget 2: AI Insights */}
          <div className="card ai-card">
            <h3>Smart AI Insights</h3>
            <div className="ai-content">
              <p>
                <strong>Optimization Alert:</strong> Milling efficiency dropped
                by 2% in Unit B. Suggested maintenance for Huller #4.
              </p>
              <p>
                <strong>Market Trend:</strong> Basmati prices are expected to
                rise by 5% next week due to high export demand.
              </p>
              <p>
                <strong>Inventory:</strong> Brown Rice stocks are low.
                Recommendation: Reorder from Supplier 1127.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Orders & Map */}
        <div className="dashboard-grid">
          {/* Widget 3: Recent Orders Table */}
          <div className="card table-card">
            <h3>Recent Orders</h3>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#11273</td>
                  <td>Ali Traders</td>
                  <td>2025-10-23</td>
                  <td>
                    <span className="status pending">Processing</span>
                  </td>
                </tr>
                <tr>
                  <td>#11275</td>
                  <td>Lahore Mart</td>
                  <td>2025-10-22</td>
                  <td>
                    <span className="status pending">Processing</span>
                  </td>
                </tr>
                <tr>
                  <td>#11274</td>
                  <td>Ahmed Bros</td>
                  <td>2025-10-21</td>
                  <td>
                    <span className="status success">Shipped</span>
                  </td>
                </tr>
                <tr>
                  <td>#11276</td>
                  <td>Karachi Rice</td>
                  <td>2025-10-20</td>
                  <td>
                    <span className="status success">Delivered</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Widget 4: Live Operations Map */}
          <div className="card map-card">
            <h3>Live Operations Map</h3>
            <div className="map-placeholder">
              <FaMapMarkedAlt className="map-icon" />
              <p>Tracking Transport 1...</p>
              <div
                className="map-pin"
                style={{ top: "40%", left: "30%" }}
              ></div>
              <div
                className="map-pin"
                style={{ top: "60%", left: "70%" }}
              ></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
