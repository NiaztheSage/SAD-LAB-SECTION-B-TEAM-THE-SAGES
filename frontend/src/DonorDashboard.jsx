

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

          <div className="donor-empty-card">
            <span>📂</span>
            <h3>No Donation Records Yet</h3>
            <p>
              Your donation history will appear here when records are available.
            </p>
          </div>
        </section>

        {/* Notifications */}
        <section className="donor-section" id="notifications">
          <h2>Notifications</h2>

          <div className="donor-notification">
            <span>🔔</span>
            <div>
              <h3>Welcome to NI-ODTCN!</h3>
              <p>
                Thank you for joining our donor community.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default DonorDashboard;
