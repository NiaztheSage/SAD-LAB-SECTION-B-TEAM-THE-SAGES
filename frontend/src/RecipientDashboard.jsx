
import "./RecipientDashboard.css";
import { useState } from "react";

function RecipientDashboard({ onLogout }) {
  const [recipient, setRecipient] = useState({
    fullName: "Mohammad Hasan",
    email: "hasan@example.com",
    phone: "01712345678",
    location: "Dhaka, Bangladesh",
  });

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Welcome to NI-ODTCN!",
      message: "Welcome to our recipient community.",
      date: "21 November 2026",
      isRead: false,
    },
    {
      id: 2,
      title: "Registration Update",
      message: "Your recipient registration is under review.",
      date: "20 November 2026",
      isRead: false,
    },
    {
      id: 3,
      title: "Medical Information",
      message: "Please keep your medical information updated.",
      date: "19 November 2026",
      isRead: true,
    },
  ]);

  const transplantHistory = [
    {
      id: "TR-2026-001",
      organ: "Kidney",
      hospital: "Dhaka Central Hospital",
      date: "10 October 2026",
      status: "Registration Submitted",
    },
    {
      id: "TR-2026-002",
      organ: "Liver",
      hospital: "National Medical Center",
      date: "15 November 2026",
      status: "Under Review",
    },
  ];

  function markAsRead(id) {
    setNotifications((previous) =>
      previous.map((item) =>
        item.id === id ? { ...item, isRead: true } : item
      )
    );
  }

  function clearAllNotifications() {
    setNotifications([]);
  }

  return (
    <div className="recipient-dashboard">
      {/* Sidebar */}
      <aside className="recipient-sidebar">
        <h2>NI-ODTCN</h2>
        <p className="recipient-sidebar-subtitle">
          Recipient Portal
        </p>

        <nav>
          <a href="#overview">🏠 Overview</a>
          <a href="#profile">👤 My Profile</a>
          <a href="#registration">📋 Registration</a>
          <a href="#medical">🩺 Medical Information</a>
          <a href="#waiting-list">⏳ Waiting List Status</a>
          <a href="#compatibility">🔬 Compatibility</a>
          <a href="#history">📁 Transplant History</a>
          <a href="#notifications">🔔 Notifications</a>
        </nav>

        <button
          className="recipient-logout-btn"
          onClick={onLogout}
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="recipient-main">

        {/* Topbar */}
        <header className="recipient-topbar">
          <div>
            <h2>Recipient Dashboard</h2>
            <p>Welcome back, {recipient.fullName}!</p>
          </div>
          <div className="recipient-user">
            👤 {recipient.fullName}
          </div>
        </header>

        {/* Overview */}
        <section className="recipient-section" id="overview">
          <h2>Overview</h2>

          <div className="recipient-stats">
            <div className="recipient-stat-card">
              <span>📋</span>
              <h3>Registration</h3>
              <p>Submitted</p>
            </div>

            <div className="recipient-stat-card">
              <span>⏳</span>
              <h3>Waiting List</h3>
              <p>Under Review</p>
            </div>

            <div className="recipient-stat-card">
              <span>🩺</span>
              <h3>Organ Type</h3>
              <p>Kidney</p>
            </div>

            <div className="recipient-stat-card">
              <span>🔔</span>
              <h3>Notifications</h3>
              <p>
                {notifications.filter((item) => !item.isRead).length} Unread
              </p>
            </div>
          </div>
        </section>

        {/* Profile */}
        <section className="recipient-section" id="profile">
          <h2>My Profile</h2>

          <div className="recipient-card">
            <div className="recipient-avatar">
              {recipient.fullName
                .split(" ")
                .map((word) => word[0])
                .join("")
                .toUpperCase()}
            </div>

            <div className="recipient-profile-details">
              <h3>{recipient.fullName}</h3>
              <p>Registered Recipient</p>
              <p>Email: {recipient.email}</p>
              <p>Phone: {recipient.phone}</p>
              <p>Location: {recipient.location}</p>
            </div>
          </div>
        </section>

        {/* Registration */}
        <section className="recipient-section" id="registration">
          <h2>Recipient Registration</h2>

          <div className="recipient-card">
            <h3>Registration Information</h3>
            <p><strong>Registration ID:</strong> REC-2026-001</p>
            <p><strong>Organ Requested:</strong> Kidney</p>
            <p><strong>Registration Date:</strong> 15 October 2026</p>
            <p><strong>Status:</strong> Under Review</p>
          </div>
        </section>

        {/* Medical Information */}
        <section className="recipient-section" id="medical">
          <h2>Medical Information</h2>

          <div className="recipient-card">
            <h3>Medical Details</h3>
            <p><strong>Blood Group:</strong> B+</p>
            <p><strong>Required Organ:</strong> Kidney</p>
            <p><strong>Hospital:</strong> Dhaka Central Hospital</p>
            <p><strong>Medical Report:</strong> Demo information</p>
            <p className="recipient-demo-note">
              This is fictional demonstration data.
            </p>
          </div>
        </section>

        {/* Waiting List */}
        <section className="recipient-section" id="waiting-list">
          <h2>Waiting List Status</h2>

          <div className="recipient-card">
            <h3>Kidney Waiting List</h3>
            <p><strong>Current Status:</strong> Under Review</p>
            <p><strong>Hospital:</strong> Dhaka Central Hospital</p>
            <p><strong>Last Updated:</strong> 20 November 2026</p>
            <p className="recipient-demo-note">
              No actual waiting-list position or allocation decision is shown.
            </p>
          </div>
        </section>

        {/* Compatibility */}
        <section className="recipient-section" id="compatibility">
          <h2>Organ Compatibility Suggestions</h2>

          <div className="recipient-card">
            <h3>Compatibility Information</h3>
            <p>
              The system may display potential compatibility information
              for review by authorized medical professionals.
            </p>
            <p><strong>Organ Requested:</strong> Kidney</p>
            <p><strong>Suggestion Status:</strong> No verified suggestion</p>
            <p className="recipient-demo-note">
              These suggestions are not medical decisions or final
              compatibility determinations.
            </p>
          </div>
        </section>

        {/* Transplant History */}
        <section className="recipient-section" id="history">
          <h2>Transplant History</h2>

          <div className="recipient-history-list">
            {transplantHistory.map((record) => (
              <div className="recipient-card" key={record.id}>
                <h3>{record.organ} Request</h3>
                <p><strong>Record ID:</strong> {record.id}</p>
                <p><strong>Date:</strong> {record.date}</p>
                <p><strong>Hospital:</strong> {record.hospital}</p>
                <p><strong>Status:</strong> {record.status}</p>
              </div>
            ))}
          </div>

          <p className="recipient-demo-note">
            These are fictional demonstration records.
          </p>
        </section>

        {/* Notifications */}
        <section className="recipient-section" id="notifications">
          <div className="recipient-notification-heading">
            <div>
              <h2>Notifications</h2>
              <p>
                You have{" "}
                {notifications.filter((item) => !item.isRead).length}
                {" "}unread notifications.
              </p>
            </div>

            <button
              className="recipient-clear-btn"
              onClick={clearAllNotifications}
              disabled={notifications.length === 0}
            >
              Clear All
            </button>
          </div>

          <div className="recipient-notification-list">
            {notifications.length === 0 ? (
              <div className="recipient-card">
                <h3>🔔 No Notifications</h3>
                <p>You are all caught up!</p>
              </div>
            ) : (
              notifications.map((item) => (
                <div
                  className={`recipient-notification-item ${
                    item.isRead ? "read" : "unread"
                  }`}
                  key={item.id}
                >
                  <span>🔔</span>

                  <div className="recipient-notification-content">
                    <h3>{item.title}</h3>
                    <p>{item.message}</p>
                    <small>{item.date}</small>
                  </div>

                  {!item.isRead ? (
                    <button
                      className="recipient-read-btn"
                      onClick={() => markAsRead(item.id)}
                    >
                      Mark as Read
                    </button>
                  ) : (
                    <span className="recipient-read-label">
                      Read
                    </span>
                  )}
                </div>
              ))
            )}
          </div>
        </section>

        <footer className="recipient-footer">
          NI-ODTCN | Recipient Portal | Demo Version
        </footer>
      </main>
    </div>
  );
}

export default RecipientDashboard;
