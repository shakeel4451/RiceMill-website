import React from "react";
import { Link } from "react-router-dom";
import "./SupplierSidebar.css";
import {
  FaThLarge,
  FaClipboardList,
  FaMoneyBillWave,
  FaSeedling,
  FaChartBar,
  FaUserCircle,
  FaCog,
} from "react-icons/fa";

const SupplierSidebar = () => {
  return (
    <div className="supplier-sidebar">
      <div className="sidebar-header">
        <h3>Supplier Portal</h3>
      </div>

      <ul className="sidebar-menu">
        <li className="active">
          <Link to="/supplier/dashboard">
            <FaThLarge /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/supplier/demand">
            <FaClipboardList /> Current Demand
          </Link>
        </li>
        <li>
          <Link to="/supplier/payments">
            <FaMoneyBillWave /> Payment History
          </Link>
        </li>
        <li>
          <Link to="/supplier/quality">
            <FaSeedling /> Quality Reports
          </Link>
        </li>
        <li>
          <Link to="/supplier/market-rates">
            <FaChartBar /> Market Trends
          </Link>
        </li>
        <li>
          <Link to="/supplier/profile">
            <FaUserCircle /> My Profile
          </Link>
        </li>
        <li>
          <Link to="/supplier/settings">
            <FaCog /> Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SupplierSidebar;
