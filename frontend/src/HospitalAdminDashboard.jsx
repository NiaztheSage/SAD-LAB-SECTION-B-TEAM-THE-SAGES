
import { useState } from "react";
import "./HospitalAdminDashboard.css";

function HospitalAdminDashboard({ onLogout }) {
  const [activeMenu, setActiveMenu] = useState("Overview");

  const [hospital, setHospital] = useState({
    name: "Dhaka Central Hospital",
    location: "Dhaka, Bangladesh",
    email: "admin@dch.com",
    phone: "01700000000",
    status: "Active",
  });

  const [staff, setStaff] = useState([
    {
      id: 1,
      name: "Dr. Farhan Ahmed",
      role: "Doctor",
      status: "Active",
    },
    {
      id: 2,
      name: "Dr. Nusrat Jahan",
      role: "Surgeon",
      status: "Active",
    },
    {
      id: 3,
      name: "Dr. Tanvir Hasan",
      role: "Transplant Coordinator",
      status: "Pending",
    },
  ]);

  const [cases, setCases] = useState([
    {
      id: "CASE-001",
      patient: "Mohammad Hasan",
      organ: "Kidney",
      status: "Under Review",
    },
    {
      id: "CASE-002",
      patient: "Nusrat Jahan",
      organ: "Liver",
      status: "Approved",
    },
    {
      id: "CASE-003",
      patient: "Tanvir Ahmed",
      organ: "Kidney",
      status: "Pending",
    },
  ]);

  const [referrals, setReferrals] = useState([
    {
      id: "REF-001",
      hospital: "National Medical Center",
      type: "National",
      status: "Pending",
    },
    {
      id: "REF-002",
      hospital: "International Partner Hospital",
      type: "International",
      status: "Under Review",
    },
  ]);

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Medical Case",
      message: "A new recipient case has been submitted.",
      read: false,
    },
    {
      id: 2,
      title: "Referral Request",
      message: "A new hospital referral request is waiting.",
      read: false,
    },
  ]);

  const [newStaff, setNewStaff] = useState({
    name: "",
    role: "Doctor",
  });

  const [editingHospital, setEditingHospital] = useState(false);

  function addStaff(e) {
    e.preventDefault();

    setStaff([
      ...staff,
      {
        id: Date.now(),
        name: newStaff.name,
        role: newStaff.role,
        status: "Pending",
      },
    ]);

    setNewStaff({ name: "", role: "Doctor" });
    alert("Medical staff added successfully!");
  }

  function updateCaseStatus(id, status) {
    setCases(
      cases.map((item) =>
        item.id === id ? { ...item, status } : item
      )
    );
  }

  function updateReferralStatus(id, status) {
    setReferrals(
      referrals.map((item) =>
        item.id === id ? { ...item, status } : item
      )
    );
  }

  function updateStaffStatus(id, status) {
    setStaff(
      staff.map((item) =>
        item.id === id ? { ...item, status } : item
      )
    );
  }

  function renderContent() {
    switch (activeMenu) {
      case "Hospital Profile":
        return (
          <>
            <h2>Hospital Profile</h2>
            <div className="hospital-admin-card">
              {editingHospital ? (
                <>
                  <label>Hospital Name</label>
                  <input
                    value={hospital.name}
                    onChange={(e) =>
                      setHospital({ ...hospital, name: e.target.value })
                    }
                  />

                  <label>Location</label>
                  <input
                    value={hospital.location}
                    onChange={(e) =>
                      setHospital({ ...hospital, location: e.target.value })
                    }
                  />

                  <label>Email</label>
                  <input
                    value={hospital.email}
                    onChange={(e) =>
                      setHospital({ ...hospital, email: e.target.value })
                    }
                  />

                  <label>Phone</label>
                  <input
                    value={hospital.phone}
                    onChange={(e) =>
                      setHospital({ ...hospital, phone: e.target.value })
                    }
                  />

                  <button
                    onClick={() => {
                      setEditingHospital(false);
                      alert("Hospital profile updated!");
                    }}
                  >
                    Save Changes
                  </button>
                </>
              ) : (
                <>
                  <h3>{hospital.name}</h3>
                  <p>Location: {hospital.location}</p>
                  <p>Email: {hospital.email}</p>
                  <p>Phone: {hospital.phone}</p>
                  <p>Status: {hospital.status}</p>

                  <button onClick={() => setEditingHospital(true)}>
                    Edit Profile
                  </button>
                </>
              )}
            </div>
          </>
        );

      case "Medical Staff":
        return (
          <>
            <h2>Medical Staff Management</h2>

            <div className="hospital-admin-card">
              <h3>Add Medical Staff</h3>

              <form onSubmit={addStaff}>
                <label>Staff Name</label>
                <input
                  value={newStaff.name}
                  onChange={(e) =>
                    setNewStaff({ ...newStaff, name: e.target.value })
                  }
                  placeholder="Enter staff name"
                  required
                />

                <label>Professional Role</label>
                <select
                  value={newStaff.role}
                  onChange={(e) =>
                    setNewStaff({ ...newStaff, role: e.target.value })
                  }
                >
                  <option>Doctor</option>
                  <option>Surgeon</option>
                  <option>ICU Specialist</option>
                  <option>Lab Specialist</option>
                  <option>Transplant Coordinator</option>
                </select>

                <button type="submit">Add Staff</button>
              </form>
            </div>

            <div className="hospital-admin-card">
              <h3>Registered Medical Staff</h3>

              <div className="hospital-admin-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Role</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {staff.map((person) => (
                      <tr key={person.id}>
                        <td>{person.name}</td>
                        <td>{person.role}</td>
                        <td>
                          <select
                            value={person.status}
                            onChange={(e) =>
                              updateStaffStatus(person.id, e.target.value)
                            }
                          >
                            <option>Pending</option>
                            <option>Active</option>
                            <option>Inactive</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        );

      case "Medical Cases":
        return (
          <>
            <h2>Medical Case Management</h2>

            <div className="hospital-admin-card">
              <h3>Patient Cases</h3>

              <div className="hospital-admin-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Case ID</th>
                      <th>Patient</th>
                      <th>Organ</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cases.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.patient}</td>
                        <td>{item.organ}</td>
                        <td>
                          <select
                            value={item.status}
                            onChange={(e) =>
                              updateCaseStatus(item.id, e.target.value)
                            }
                          >
                            <option>Pending</option>
                            <option>Under Review</option>
                            <option>Approved</option>
                            <option>Rejected</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="hospital-admin-note">
                Demo data only. Medical decisions must be made by authorized
                medical professionals.
              </p>
            </div>
          </>
        );

      case "Referrals":
        return (
          <>
            <h2>Referral Management</h2>

            <div className="hospital-admin-card">
              <h3>Hospital Referral Requests</h3>

              <div className="hospital-admin-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Referral ID</th>
                      <th>Hospital</th>
                      <th>Type</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {referrals.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.hospital}</td>
                        <td>{item.type}</td>
                        <td>
                          <select
                            value={item.status}
                            onChange={(e) =>
                              updateReferralStatus(item.id, e.target.value)
                            }
                          >
                            <option>Pending</option>
                            <option>Under Review</option>
                            <option>Approved</option>
                            <option>Rejected</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        );

      case "Notifications":
        return (
          <>
            <h2>Notifications</h2>

            {notifications.map((item) => (
              <div className="hospital-admin-card" key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.message}</p>
                <p>{item.read ? "Read" : "Unread"}</p>

                {!item.read && (
                  <button
                    onClick={() =>
                      setNotifications(
                        notifications.map((notification) =>
                          notification.id === item.id
                            ? { ...notification, read: true }
                            : notification
                        )
                      )
                    }
                  >
                    Mark as Read
                  </button>
                )}
              </div>
            ))}
          </>
        );

      default:
        return (
          <>
            <h2>Hospital Dashboard Overview</h2>

            <p>
              Welcome back, Hospital Administrator!
            </p>

            <div className="hospital-admin-stats">
              <div className="hospital-admin-stat">
                <h3>{staff.length}</h3>
                <p>Medical Staff</p>
              </div>

              <div className="hospital-admin-stat">
                <h3>{cases.length}</h3>
                <p>Medical Cases</p>
              </div>

              <div className="hospital-admin-stat">
                <h3>{referrals.length}</h3>
                <p>Total Referrals</p>
              </div>

              <div className="hospital-admin-stat">
                <h3>
                  {referrals.filter((item) => item.status === "Pending").length}
                </h3>
                <p>Pending Referrals</p>
              </div>
            </div>

            <div className="hospital-admin-card">
              <h3>Hospital Information</h3>
              <p>{hospital.name}</p>
              <p>{hospital.location}</p>
              <p>Status: {hospital.status}</p>
            </div>
          </>
        );
    }
  }

  const menuItems = [
    "Overview",
    "Hospital Profile",
    "Medical Staff",
    "Medical Cases",
    "Referrals",
    "Notifications",
  ];

  return (
    <div className="hospital-admin-dashboard">
      <aside className="hospital-admin-sidebar">
        <h2>NI-ODTCN</h2>
        <p>Hospital Admin</p>

        <nav>
          {menuItems.map((item) => (
            <button
              key={item}
              className={activeMenu === item ? "active" : ""}
              onClick={() => setActiveMenu(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <button className="hospital-admin-logout" onClick={onLogout}>
          Logout
        </button>
      </aside>

      <main className="hospital-admin-main">
        <header className="hospital-admin-topbar">
          <div>
            <h2>{activeMenu}</h2>
            <p>{hospital.name}</p>
          </div>
          <span>Administrator</span>
        </header>

        <section className="hospital-admin-content">
          {renderContent()}
        </section>
      </main>
    </div>
  );
}

export default HospitalAdminDashboard;
