import React from "react";
import { Link } from "react-router-dom";
import "./AdminSidebar.css";
import {
  FaThLarge,
  FaShoppingCart,
  FaCogs,
  FaWarehouse,
  FaChartLine,
  FaUsers,
  FaTruck,
  FaFileAlt,
  FaCog,
} from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <div className="sidebar-header">
        <h3>Admin Portal</h3>
      </div>

      <ul className="sidebar-menu">
        <li className="active">
          <Link to="/admin/dashboard">
            <FaThLarge /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin/orders">
            <FaShoppingCart /> My Orders
          </Link>
        </li>
        <li>
          <Link to="/admin/milling">
            <FaCogs /> Milling System
          </Link>
        </li>
        <li>
          <Link to="/admin/inventory">
            <FaWarehouse /> Inventory
          </Link>
        </li>
        <li>
          <Link to="/admin/sales">
            <FaChartLine /> Sales & Orders
          </Link>
        </li>
        <li>
          <Link to="/admin/customers">
            <FaUsers /> Customer Accounts
          </Link>
        </li>
        <li>
          <Link to="/admin/suppliers">
            <FaTruck /> Supplier Mgmt
          </Link>
        </li>
        <li>
          <Link to="/admin/reports">
            <FaFileAlt /> BI & Reports
          </Link>
        </li>
        <li>
          <Link to="/admin/settings">
            <FaCog /> Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
