import React from "react";
import { Link } from "react-router-dom";
import "./CustomerSidebar.css";
import {
  FaThLarge,
  FaShoppingCart,
  FaHistory,
  FaTruck,
  FaMapMarkerAlt,
  FaUserCircle,
  FaCog,
} from "react-icons/fa";

const CustomerSidebar = () => {
  return (
    <div className="customer-sidebar">
      <div className="sidebar-header">
        <h3>Customer Portal</h3>
      </div>

      <ul className="sidebar-menu">
        <li className="active">
          <Link to="/customer/dashboard">
            <FaThLarge /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/products">
            <FaShoppingCart /> Place New Order
          </Link>
        </li>
        <li>
          <Link to="/customer/history">
            <FaHistory /> Order History
          </Link>
        </li>
        <li>
          <Link to="/customer/tracking">
            <FaTruck /> Track Shipments
          </Link>
        </li>
        <li>
          <Link to="/customer/traceability">
            <FaMapMarkerAlt /> Traceability Check
          </Link>
        </li>
        <li>
          <Link to="/customer/profile">
            <FaUserCircle /> My Profile
          </Link>
        </li>
        <li>
          <Link to="/customer/settings">
            <FaCog /> Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CustomerSidebar;
