

import "./DonorDashboard.css";
import { useState } from "react";
import EditDonorProfile from "./EditDonorProfile";

function DonorDashboard({ onLogout }) {
  const [donor, setDonor] = useState({
    fullName: "Ayesha Rahman",
    email: "ayesha@example.com",
    phone: "01XXXXXXXXX",
    location: "Dhaka, Bangladesh",
  });

  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const donationHistory = [
    {
      id: "DON-2026-001",
      date: "15 October 2026",
      organ: "Kidney",
      hospital: "Dhaka Central Hospital",
      status: "Registered",
    },
    {
      id: "DON-2026-002",
      date: "05 November 2026",
      organ: "Liver",
      hospital: "National Medical Center",
      status: "Under Review",
    },
    {
      id: "DON-2026-003",
      date: "18 November 2026",
      organ: "Kidney",
      hospital: "Green Life Hospital",
      status: "Pending",
    },
  ];

  const [notifications, setNotifications] = useState([
  {
    id: 1,
    title: "Welcome to NI-ODTCN!",
    message: "Thank you for joining our donor community.",
    date: "21 November 2026",
    isRead: false,
  },
  {
    id: 2,
    title: "Registration Update",
    message: "Your donor registration is currently under review.",
    date: "20 November 2026",
    isRead: false,
  },
  {
    id: 3,
    title: "Profile Reminder",
    message: "Please keep your contact information updated.",
    date: "19 November 2026",
    isRead: true,
  },
]);

function markAsRead(id) {
  setNotifications((previous) =>
    previous.map((notification) =>
      notification.id === id
        ? { ...notification, isRead: true }
        : notification
    )
  );
}

function clearAllNotifications() {
  setNotifications([]);
}


  return (

    <div className="donor-dashboard">

      {/* Sidebar */}
      <aside className="donor-sidebar">
        <div className="donor-logo">
          <h2>NI-ODTCN</h2>
          <p>Donor Portal</p>
        </div>

        <nav className="donor-nav">
          <a href="#overview" className="active">🏠 Overview</a>
          <a href="#profile">👤 My Profile</a>
          <a href="#registration">📋 Registration Status</a>
          <a href="#medical">🩺 Medical Information</a>
          <a href="#history">📁 Donation History</a>
          <a href="#notifications">🔔 Notifications</a>
        </nav>

        <div className="donor-sidebar-footer">
  <button
    className="donor-logout-btn"
    onClick={onLogout}
  >
    🚪 Logout
  </button>

  <p>© 2026 NI-ODTCN</p>
</div>
      </aside>

      {/* Main Content */}
      <main className="donor-main">

        {/* Topbar */}
        <header className="donor-topbar">
          <div>
            <h2>Donor Dashboard</h2>
            <p>National & International Organ Donation Network</p>
          </div>

          <div className="donor-user">
            <span>🔔</span>
            <div className="donor-avatar">AR</div>
            <div>
              <strong>Ayesha Rahman</strong>
              <p>Donor</p>
            </div>
          </div>
        </header>

        {/* Welcome */}
        <section className="donor-welcome" id="overview">
          <div>
            <h1>Welcome Back, Ayesha! 👋</h1>
            <p>
              Thank you for being a part of our organ donation community.
            </p>
          </div>
          <div className="welcome-icon">💚</div>
        </section>

        {/* Statistics */}
        <section className="donor-stats">
          <div className="donor-stat-card">
            <span>📋</span>
            <h3>Registration Status</h3>
            <strong>Under Review</strong>
          </div>

          <div className="donor-stat-card">
            <span>🩺</span>
            <h3>Medical Records</h3>
            <strong>Not Submitted</strong>
          </div>

          <div className="donor-stat-card">
            <span>📁</span>
            <h3>Donation History</h3>
            <strong>0 Records</strong>
          </div>
        </section>

       

        {/* Profile */}
        <section className="donor-section" id="profile">
          <h2>My Profile</h2>

          {isEditingProfile ? (
            <EditDonorProfile
              donor={donor}
              onSave={(updatedDonor) => {
                setDonor(updatedDonor);
                setIsEditingProfile(false);
                alert("Profile updated successfully!");
              }}
              onCancel={() => setIsEditingProfile(false)}
            />
          ) : (
            <div className="donor-profile-card">
              <div className="profile-avatar">
                {donor.fullName
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .toUpperCase()}
              </div>

              <div className="profile-details">
                <h3>{donor.fullName}</h3>
                <p>Registered Donor</p>

                <div className="profile-info">
                  <span>Email: {donor.email}</span>
                  <span>Phone: {donor.phone}</span>
                  <span>Location: {donor.location}</span>
                </div>

                <button
                  className="edit-profile-btn"
                  onClick={() => setIsEditingProfile(true)}
                >
                  ✏️ Edit Profile
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Registration */}
        <section className="donor-section" id="registration">
          <h2>Registration Status</h2>

          <div className="donor-info-card">
            <div>
              <h3>Donor Registration</h3>
              <p>Your demo registration is currently under review.</p>
            </div>
            <span className="status-pending">Under Review</span>
          </div>
        </section>

        {/* Medical Information */}
        <section className="donor-section" id="medical">
          <h2>Medical Information</h2>

          <div className="donor-info-card">
            <div>
              <h3>Medical Records</h3>
              <p>
                Your medical information has not been submitted yet.
                Contact an authorized medical professional for guidance.
              </p>
            </div>
            <span className="status-pending">Not Submitted</span>
          </div>
        </section>

      
        {/* Donation History */}
        <section className="donor-section" id="history">
          <h2>Donation History</h2>
          <p className="history-subtitle">
            View your donation registration records.
          </p>

          <div className="donation-history-list">
            {donationHistory.map((record) => (
              <div className="donation-record-card" key={record.id}>
                <div className="donation-record-header">
                  <h3>{record.organ} Donation</h3>
                  <span className="donation-status">
                    {record.status}
                  </span>
                </div>

                <div className="donation-record-info">
                  <p><strong>Record ID:</strong> {record.id}</p>
                  <p><strong>Date:</strong> {record.date}</p>
                  <p><strong>Hospital:</strong> {record.hospital}</p>
                </div>

                <button
                  className="donation-details-btn"
                  onClick={() =>
                    alert(
                      `Record ID: ${record.id}\nOrgan: ${record.organ}\nDate: ${record.date}\nHospital: ${record.hospital}\nStatus: ${record.status}`
                    )
                  }
                >
                  View Details
                </button>
              </div>
            ))}
          </div>

          <p className="demo-record-note">
            These are fictional demonstration records, not actual donation records.
          </p>
        </section>


        {/* Notifications */}
        <section className="donor-section" id="notifications">
          <div className="notification-heading">
            <div>
              <h2>Notifications</h2>
              <p>You have {
                notifications.filter((item) => !item.isRead).length
              } unread notifications.</p>
            </div>

            <button
              className="clear-notifications-btn"
              onClick={clearAllNotifications}
              disabled={notifications.length === 0}
            >
              Clear All
            </button>
          </div>

          <div className="notification-list">
            {notifications.length === 0 ? (
              <div className="donor-empty-card">
                <span>🔔</span>
                <h3>No Notifications</h3>
                <p>You are all caught up!</p>
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  className={`notification-item ${
                    notification.isRead ? "read" : "unread"
                  }`}
                  key={notification.id}
                >
                  <span className="notification-icon">🔔</span>

                  <div className="notification-content">
                    <h3>{notification.title}</h3>
                    <p>{notification.message}</p>
                    <small>{notification.date}</small>
                  </div>

                  {!notification.isRead && (
                    <button
                      className="mark-read-btn"
                      onClick={() => markAsRead(notification.id)}
                    >
                      Mark as Read
                    </button>
                  )}

                  {notification.isRead && (
                    <span className="read-label">Read</span>
                  )}
                </div>
              ))
            )}
          </div>
        </section>


      </main>
    </div>
  );
}

export default DonorDashboard;
