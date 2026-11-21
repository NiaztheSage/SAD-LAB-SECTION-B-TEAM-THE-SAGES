
import { useState } from "react";
import "./SuperAdminDashboard.css";

function SuperAdminDashboard({ onLogout }) {
  const [activeSection, setActiveSection] = useState("Overview");
  const [showHospitalForm, setShowHospitalForm] = useState(false);
  const [editingHospitalId, setEditingHospitalId] = useState(null);
  const [editHospitalData, setEditHospitalData] = useState({
  name: "",
  location: "",
});


  const [newHospital, setNewHospital] = useState({
    name: "",
    location: "",
  });

  const menuItems = [
    "Overview",
    "Hospital Management",
    "User Management",
    "Donor Management",
    "Recipient Management",
    "System Statistics",
    "Notifications",
  ];

const [hospitals, setHospitals] = useState([
    {
      id: "HOS-001",
      name: "Dhaka Central Hospital",
      location: "Dhaka, Bangladesh",
      status: "Active",
    },
    {
      id: "HOS-002",
      name: "National Medical Center",
      location: "Chattogram, Bangladesh",
      status: "Active",
    },
    {
      id: "HOS-003",
      name: "Green Life Hospital",
      location: "Sylhet, Bangladesh",
      status: "Pending",
    },
  ]);

  const [users, setUsers] = useState([
  {
    id: "USR-001",
    name: "Ayesha Rahman",
    role: "Donor",
    status: "Active",
  },
  {
    id: "USR-002",
    name: "Mohammad Hasan",
    role: "Recipient",
    status: "Active",
  },
  {
    id: "USR-003",
    name: "Dr. Farhan Ahmed",
    role: "Medical Professional",
    status: "Pending",
  },
]);

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Hospital Registration",
      message: "Green Life Hospital requested registration.",
      unread: true,
    },
    {
      id: 2,
      title: "New Recipient Registered",
      message: "A new recipient registration is available for review.",
      unread: true,
    },
    {
      id: 3,
      title: "System Update",
      message: "NI-ODTCN demo system is running successfully.",
      unread: false,
    },
  ]);

  function markAsRead(id) {
    setNotifications((previous) =>
      previous.map((item) =>
        item.id === id ? { ...item, unread: false } : item
      )
    );
  }

  function updateUserRole(id, newRole) {
  setUsers((previous) =>
    previous.map((user) =>
      user.id === id ? { ...user, role: newRole } : user
    )
  );
}

function updateUserStatus(id, newStatus) {
  setUsers((previous) =>
    previous.map((user) =>
      user.id === id ? { ...user, status: newStatus } : user
    )
  );
}

function deleteUser(id) {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this user?"
  );

  if (confirmDelete) {
    setUsers((previous) =>
      previous.filter((user) => user.id !== id)
    );

    alert("User deleted successfully!");
  }
}

  function renderContent() {
    switch (activeSection) {
      case "Overview":
        return (
          <>
            <h2>Dashboard Overview</h2>
            <p>Welcome back, Super Admin!</p>

            <div className="admin-stats">
              <div className="admin-stat-card">
                <h3>Total Hospitals</h3>
                <h2>{hospitals.length}</h2>
              </div>

              <div className="admin-stat-card">
                <h3>Total Donors</h3>
                <h2>120</h2>
              </div>

              <div className="admin-stat-card">
                <h3>Total Recipients</h3>
                <h2>85</h2>
              </div>

              <div className="admin-stat-card">
                <h3>Total Users</h3>
                <h2>250</h2>
              </div>
            </div>

            <div className="admin-content-card">
              <h3>System Summary</h3>
              <p>
  Active Hospitals: {hospitals.filter((hospital) => hospital.status === "Active").length}
</p>
              <p>
  Pending Hospital Requests: {hospitals.filter((hospital) => hospital.status === "Pending").length}
</p>
              <p>Registered Medical Professionals: 45</p>
              <p>System Status: Operational</p>
            </div>
          </>
        );

      case "Hospital Management":
        return (
          <>
            <h2>Hospital Management</h2>
            
<button
  className="admin-action-button"
  onClick={() => setShowHospitalForm(!showHospitalForm)}
>
  + Add Hospital
</button>


{showHospitalForm && (
  <div className="admin-content-card">
    <h3>Add New Hospital</h3>

    <form
      onSubmit={(e) => {
        e.preventDefault();

        setHospitals((previous) => [
          ...previous,
          {
            id: `HOS-${String(previous.length + 1).padStart(3, "0")}`,
            name: newHospital.name,
            location: newHospital.location,
            status: "Pending",
          },
        ]);

        setNewHospital({ name: "", location: "" });
        setShowHospitalForm(false);

        alert("Hospital added successfully!");
      }}
    >
      <div className="form-group">
        <label>Hospital Name</label>
        <input
          type="text"
          placeholder="Enter hospital name"
          value={newHospital.name}
          onChange={(e) =>
            setNewHospital({
              ...newHospital,
              name: e.target.value,
            })
          }
          required
        />
      </div>

      <div className="form-group">
        <label>Hospital Location</label>
        <input
          type="text"
          placeholder="Enter hospital location"
          value={newHospital.location}
          onChange={(e) =>
            setNewHospital({
              ...newHospital,
              location: e.target.value,
            })
          }
          required
        />
      </div>

      <button type="submit" className="admin-action-button">
        Save Hospital
      </button>

      <button
        type="button"
        className="admin-action-button"
        onClick={() => setShowHospitalForm(false)}
      >
        Cancel
      </button>
    </form>
  </div>
)}

            <div className="admin-content-card">
              {hospitals.map((hospital) => (
                <div className="admin-list-item" key={hospital.id}>
                  <div>
                    <h3>{hospital.name}</h3>
                    <p>{hospital.id}</p>
                    <p>{hospital.location}</p>
                    <p>Status: {hospital.status}</p>
                  </div>

                  <button
                    onClick={() =>
                      alert(`Demo Hospital: ${hospital.name}`)
                    }
                  >
                    View Details
                  </button>
                  <button
  onClick={() => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${hospital.name}?`
    );

    if (confirmDelete) {
      setHospitals((previous) =>
        previous.filter((item) => item.id !== hospital.id)
      );

      alert("Hospital deleted successfully!");
    }
  }}
>
  Delete
</button>
                  {editingHospitalId === hospital.id && (
  <div className="admin-content-card">
    <h3>Edit Hospital</h3>

    <input
      type="text"
      value={editHospitalData.name}
      onChange={(e) =>
        setEditHospitalData({
          ...editHospitalData,
          name: e.target.value,
        })
      }
      placeholder="Hospital Name"
    />

    <input
      type="text"
      value={editHospitalData.location}
      onChange={(e) =>
        setEditHospitalData({
          ...editHospitalData,
          location: e.target.value,
        })
      }
      placeholder="Hospital Location"
    />

    <button
      onClick={() => {
        setHospitals((previous) =>
          previous.map((item) =>
            item.id === hospital.id
              ? {
                  ...item,
                  name: editHospitalData.name,
                  location: editHospitalData.location,
                }
              : item
          )
        );

        setEditingHospitalId(null);
        alert("Hospital updated successfully!");
      }}
    >
      Save Changes
    </button>

    <button onClick={() => setEditingHospitalId(null)}>
      Cancel
    </button>
  </div>
)}
                  <button
  onClick={() => {
    setEditingHospitalId(hospital.id);
    setEditHospitalData({
      name: hospital.name,
      location: hospital.location,
    });
  }}
>
  Edit
</button>
                  {hospital.status === "Pending" && (
  <button
    onClick={() => {
      setHospitals((previous) =>
        previous.map((item) =>
          item.id === hospital.id
            ? { ...item, status: "Active" }
            : item
        )
      );

      alert("Hospital approved successfully!");
    }}
  >
    Approve
  </button>
)}
                </div>
              ))}
            </div>
          </>
        );

      
case "User Management":
  return (
    <>
      <h2>User Management</h2>
      <p>Manage all registered users of NI-ODTCN.</p>

      <div className="admin-stats">
        <div className="admin-stat-card">
          <h3>Total Users</h3>
          <h2>{users.length}</h2>
        </div>

        <div className="admin-stat-card">
          <h3>Active Users</h3>
          <h2>
            {users.filter((user) => user.status === "Active").length}
          </h2>
        </div>

        <div className="admin-stat-card">
          <h3>Pending Users</h3>
          <h2>
            {users.filter((user) => user.status === "Pending").length}
          </h2>
        </div>
      </div>

      <div className="admin-content-card">
        <h3>Registered Users</h3>

        {users.map((user) => (
          <div className="admin-list-item" key={user.id}>
            <div>
              <h3>{user.name}</h3>
              <p>{user.id}</p>
              <p>Role: {user.role}</p>
              <p>Status: {user.status}</p>
            </div>

            <button
              onClick={() =>
                alert(
                  `Name: ${user.name}\nRole: ${user.role}\nStatus: ${user.status}`
                )
              }
            >
              View Details
            </button>

            <select
              value={user.role}
              onChange={(e) =>
                updateUserRole(user.id, e.target.value)
              }
            >
              <option value="Donor">Donor</option>
              <option value="Recipient">Recipient</option>
              <option value="Medical Professional">
                Medical Professional
              </option>
              <option value="Hospital Admin">Hospital Admin</option>
              <option value="Super Admin">Super Admin</option>
            </select>

            <select
              value={user.status}
              onChange={(e) =>
                updateUserStatus(user.id, e.target.value)
              }
            >
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
            </select>

            <button onClick={() => deleteUser(user.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );

      case "Donor Management":
        case "User Management":
  return (
    <>
      <h2>User Management</h2>
      <p>Manage all registered users of NI-ODTCN.</p>

      <div className="admin-stats">
        <div className="admin-stat-card">
          <h3>Total Users</h3>
          <h2>{users.length}</h2>
        </div>

        <div className="admin-stat-card">
          <h3>Active Users</h3>
          <h2>
            {users.filter((user) => user.status === "Active").length}
          </h2>
        </div>

        <div className="admin-stat-card">
          <h3>Pending Users</h3>
          <h2>
            {users.filter((user) => user.status === "Pending").length}
          </h2>
        </div>
      </div>

      <div className="admin-content-card">
        <h3>Registered Users</h3>

        {users.map((user) => (
          <div className="admin-list-item" key={user.id}>
            <div>
              <h3>{user.name}</h3>
              <p>{user.id}</p>
              <p>Role: {user.role}</p>
              <p>Status: {user.status}</p>
            </div>

            <button
              onClick={() =>
                alert(
                  `Name: ${user.name}\nRole: ${user.role}\nStatus: ${user.status}`
                )
              }
            >
              View Details
            </button>

            <select
              value={user.role}
              onChange={(e) =>
                updateUserRole(user.id, e.target.value)
              }
            >
              <option value="Donor">Donor</option>
              <option value="Recipient">Recipient</option>
              <option value="Medical Professional">
                Medical Professional
              </option>
              <option value="Hospital Admin">Hospital Admin</option>
              <option value="Super Admin">Super Admin</option>
            </select>

            <select
              value={user.status}
              onChange={(e) =>
                updateUserStatus(user.id, e.target.value)
              }
            >
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
            </select>

            <button
              onClick={() => deleteUser(user.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
        return (
          <>
            <h2>Donor Management</h2>
            <div className="admin-content-card">
              <h3>Donor Registry</h3>
              <p>Total Registered Donors: 120</p>
              <p>Active Donors: 95</p>
              <p>Pending Review: 25</p>
            </div>
          </>
        );

      case "Recipient Management":
        return (
          <>
            <h2>Recipient Management</h2>
            <div className="admin-content-card">
              <h3>Recipient Registry</h3>
              <p>Total Registered Recipients: 85</p>
              <p>Under Review: 40</p>
              <p>Registration Submitted: 45</p>
            </div>
          </>
        );

      case "System Statistics":
        return (
          <>
            <h2>System Statistics</h2>
            <div className="admin-content-card">
              <h3>Platform Statistics</h3>
              <p>Total Hospitals: {hospitals.length}</p>
              <p>Total Donors: 120</p>
              <p>Total Recipients: 85</p>
              <p>Total Medical Professionals: 45</p>
              <p>Demo Transplant Records: 12</p>
              <p>All statistics are fictional demo data.</p>
            </div>
          </>
        );

      case "Notifications":
        return (
          <>
            <h2>Notifications</h2>

            {notifications.length === 0 ? (
              <div className="admin-content-card">
                <p>No notifications available.</p>
              </div>
            ) : (
              <div className="admin-content-card">
                {notifications.map((item) => (
                  <div className="admin-list-item" key={item.id}>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.message}</p>
                      <p>{item.unread ? "Unread" : "Read"}</p>
                    </div>

                    {item.unread && (
                      <button onClick={() => markAsRead(item.id)}>
                        Mark as Read
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        );

      default:
        return <h2>Dashboard Overview</h2>;
    }
  }

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <h2>NI-ODTCN</h2>
        <p>Super Admin Portal</p>

        <nav>
          {menuItems.map((item) => (
            <button
              key={item}
              className={
                activeSection === item ? "active" : ""
              }
              onClick={() => setActiveSection(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <button className="admin-logout" onClick={onLogout}>
          Logout
        </button>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <h2>Super Admin Dashboard</h2>
          <span>Administrator</span>
        </header>

        <section className="admin-page-content">
          {renderContent()}
        </section>

        <footer className="admin-footer">
          NI-ODTCN | Super Admin Portal | Demo Version
        </footer>
      </main>
    </div>
  );
}

export default SuperAdminDashboard;
