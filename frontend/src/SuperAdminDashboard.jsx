
import { useState } from "react";
import "./SuperAdminDashboard.css";

function SuperAdminDashboard({ onLogout }) {
  const [activeSection, setActiveSection] = useState("Overview");
  const [auditLogs, setAuditLogs] = useState([
  {
    id: "LOG-001",
    action: "Hospital Approved",
    details: "Dhaka Central Hospital approved",
    performedBy: "Super Admin",
    date: "2026-11-20",
    status: "Success",
  },
  {
    id: "LOG-002",
    action: "Donor Status Updated",
    details: "Ayesha Rahman status changed to Approved",
    performedBy: "Super Admin",
    date: "2026-11-21",
    status: "Success",
  },
  {
    id: "LOG-003",
    action: "User Registered",
    details: "New recipient account registered",
    performedBy: "System",
    date: "2026-11-22",
    status: "Success",
  },
]);
  const [showHospitalForm, setShowHospitalForm] = useState(false);
  const [editingHospitalId, setEditingHospitalId] = useState(null);
  const [editHospitalData, setEditHospitalData] = useState({
  name: "",
  location: "",
  type: "National",
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
  "Analytics Dashboard",
  "Audit Logs",
  "Notifications",
];


const [hospitals, setHospitals] = useState([
  {
    id: "HOS-001",
    name: "Dhaka Central Hospital",
    location: "Dhaka, Bangladesh",
    type: "National",
    status: "Active",
  },
  {
    id: "HOS-002",
    name: "National Medical Center",
    location: "Chattogram, Bangladesh",
    type: "National",
    status: "Active",
  },
  {
    id: "HOS-003",
    name: "Green Life Hospital",
    location: "Sylhet, Bangladesh",
    type: "National",
    status: "Pending",
  },
  {
    id: "HOS-004",
    name: "Asia-Pacific Transplant Partner Hospital",
    location: "Singapore",
    type: "International",
    status: "Active",
  },
  {
    id: "HOS-005",
    name: "Global Medical Transplant Centre",
    location: "Kuala Lumpur, Malaysia",
    type: "International",
    status: "Active",
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

const [donors, setDonors] = useState([
  {
    id: "DNR-001",
    name: "Ayesha Rahman",
    organ: "Kidney",
    registrationDate: "2026-10-15",
    status: "Approved",
  },
  {
    id: "DNR-002",
    name: "Nusrat Jahan",
    organ: "Liver",
    registrationDate: "2026-10-20",
    status: "Pending",
  },
  {
    id: "DNR-003",
    name: "Sadia Islam",
    organ: "Kidney",
    registrationDate: "2026-11-05",
    status: "Under Review",
  },
]);

const [recipients, setRecipients] = useState([
  {
    id: "REC-001",
    name: "Mohammad Hasan",
    organ: "Kidney",
    registrationDate: "2026-10-18",
    status: "Under Review",
  },
  {
    id: "REC-002",
    name: "Tanvir Ahmed",
    organ: "Liver",
    registrationDate: "2026-10-25",
    status: "Registration Submitted",
  },
  {
    id: "REC-003",
    name: "Nusrat Jahan",
    organ: "Kidney",
    registrationDate: "2026-11-08",
    status: "Under Review",
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

function updateDonorStatus(id, newStatus) {
  setDonors((previous) =>
    previous.map((donor) =>
      donor.id === id
        ? { ...donor, status: newStatus }
        : donor
    )
  );
}
function updateRecipientStatus(id, newStatus) {
  setRecipients((previous) =>
    previous.map((recipient) =>
      recipient.id === id
        ? { ...recipient, status: newStatus }
        : recipient
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
  <h3>National Hospitals</h3>
  <h2>
    {hospitals.filter(
      (hospital) => hospital.type === "National"
    ).length}
  </h2>
</div>

<div className="admin-stat-card">
  <h3>International Hospitals</h3>
  <h2>
    {hospitals.filter(
      (hospital) => hospital.type === "International"
    ).length}
  </h2>
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
  National Hospitals: {hospitals.filter(
    (hospital) => hospital.type === "National"
  ).length}
</p>

<p>
  International Hospitals: {hospitals.filter(
    (hospital) => hospital.type === "International"
  ).length}
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
    type: newHospital.type,
    status: "Pending",
  },
]);

       setNewHospital({ name: "", location: "", type: "National" });
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
  <label>Hospital Type</label>

  <select
    value={newHospital.type}
    onChange={(e) =>
      setNewHospital({
        ...newHospital,
        type: e.target.value,
      })
    }
  >
    <option value="National">National</option>
    <option value="International">International</option>
  </select>
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
                    <p>Type: {hospital.type}</p>
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
    <select
  value={editHospitalData.type}
  onChange={(e) =>
    setEditHospitalData({
      ...editHospitalData,
      type: e.target.value,
    })
  }
>
  <option value="National">National</option>
  <option value="International">International</option>
</select>

    <button
      onClick={() => {
        setHospitals((previous) =>
          previous.map((item) =>
            item.id === hospital.id
              ? {
                  ...item,
                  name: editHospitalData.name,
                  location: editHospitalData.location,
                  type: editHospitalData.type,
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
    type: hospital.type,
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
  return (
    <>
      <h2>Donor Management</h2>

      <div className="admin-stats">
        <div className="admin-stat-card">
          <h3>Total Registered Donors</h3>
          <h2>{donors.length}</h2>
        </div>

        <div className="admin-stat-card">
          <h3>Approved Donors</h3>
          <h2>
            {donors.filter((donor) => donor.status === "Approved").length}
          </h2>
        </div>

        <div className="admin-stat-card">
          <h3>Pending Review</h3>
          <h2>
            {donors.filter((donor) => donor.status !== "Approved").length}
          </h2>
        </div>
      </div>

      <div className="admin-content-card">
        <h3>Donor Registry</h3>

        {donors.map((donor) => (
          <div className="admin-content-card" key={donor.id}>
            <h3>{donor.name}</h3>

            <p>Donor ID: {donor.id}</p>
            <p>Organ: {donor.organ}</p>
            <p>Registration Date: {donor.registrationDate}</p>
            <p>Status: {donor.status}</p>

            <label>Update Status: </label>

            <select
              value={donor.status}
              onChange={(e) =>
                updateDonorStatus(donor.id, e.target.value)
              }
            >
              <option value="Pending">Pending</option>
              <option value="Under Review">Under Review</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        ))}
      </div>
    </>
  );


        

      
case "Recipient Management":
  return (
    <>
      <h2>Recipient Management</h2>

      <div className="admin-stats">
        <div className="admin-stat-card">
          <h3>Total Registered Recipients</h3>
          <h2>{recipients.length}</h2>
        </div>

        <div className="admin-stat-card">
          <h3>Under Review</h3>
          <h2>
            {recipients.filter(
              (recipient) => recipient.status === "Under Review"
            ).length}
          </h2>
        </div>

        <div className="admin-stat-card">
          <h3>Registration Submitted</h3>
          <h2>
            {recipients.filter(
              (recipient) => recipient.status === "Registration Submitted"
            ).length}
          </h2>
        </div>
      </div>

      <div className="admin-content-card">
        <h3>Recipient Registry</h3>

        {recipients.map((recipient) => (
          <div className="admin-content-card" key={recipient.id}>
            <h3>{recipient.name}</h3>

            <p>Recipient ID: {recipient.id}</p>
            <p>Required Organ: {recipient.organ}</p>
            <p>Registration Date: {recipient.registrationDate}</p>
            <p>Status: {recipient.status}</p>

            <label>Update Status: </label>

            <select
              value={recipient.status}
              onChange={(e) =>
                updateRecipientStatus(recipient.id, e.target.value)
              }
            >
              <option value="Registration Submitted">
                Registration Submitted
              </option>
              <option value="Under Review">Under Review</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        ))}
      </div>
    </>
  );



case "System Statistics":
  return (
    <>
      <h2>System Statistics</h2>

      <div className="admin-stats">
        <div className="admin-stat-card">
          <h3>Total Hospitals</h3>
          <h2>{hospitals.length}</h2>
        </div>

        <div className="admin-stat-card">
          <h3>Total Users</h3>
          <h2>{users.length}</h2>
        </div>

        <div className="admin-stat-card">
          <h3>Total Donors</h3>
          <h2>{donors.length}</h2>
        </div>

        <div className="admin-stat-card">
          <h3>Total Recipients</h3>
          <h2>{recipients.length}</h2>
        </div>
      </div>

      <div className="admin-content-card">
        <h3>Platform Statistics</h3>

        <p>Active Hospitals: {hospitals.filter((hospital) => hospital.status === "Active").length}</p>
        <p>
  National Hospitals: {hospitals.filter(
    (hospital) => hospital.type === "National"
  ).length}
</p>

<p>
  International Hospitals: {hospitals.filter(
    (hospital) => hospital.type === "International"
  ).length}
</p>

        <p>Pending Hospitals: {hospitals.filter((hospital) => hospital.status === "Pending").length}</p>

        <p>Approved Donors: {donors.filter((donor) => donor.status === "Approved").length}</p>

        <p>Donors Under Review: {donors.filter((donor) => donor.status === "Under Review").length}</p>

        <p>Recipients Under Review: {recipients.filter((recipient) => recipient.status === "Under Review").length}</p>

        <p>Total Medical Professionals: 45</p>

        <p>Demo Transplant Records: 12</p>

        <p>All statistics are fictional demo data.</p>
      </div>
    </>
  );


case "Analytics Dashboard":
  return (
    <>
      <h2>Analytics Dashboard</h2>
      <p>Monitor hospital, donor and recipient statistics.</p>

      <div className="admin-stats">
        <div className="admin-stat-card">
          <h3>Total Hospitals</h3>
          <h2>{hospitals.length}</h2>
        </div>

        <div className="admin-stat-card">
          <h3>Total Donors</h3>
          <h2>{donors.length}</h2>
        </div>

        <div className="admin-stat-card">
          <h3>Total Recipients</h3>
          <h2>{recipients.length}</h2>
        </div>

        <div className="admin-stat-card">
          <h3>Demo Transplant Records</h3>
          <h2>12</h2>
        </div>
      </div>

      <div className="admin-content-card">
        <h3>Hospital Distribution</h3>

        <p>National Hospitals: {
          hospitals.filter(h => h.type === "National").length
        }</p>

        <div style={{
          background: "#e5e7eb",
          height: "12px",
          borderRadius: "10px",
          overflow: "hidden"
        }}>
          <div style={{
            width: `${hospitals.length ? hospitals.filter(h => h.type === "National").length / hospitals.length * 100 : 0}%`,
            background: "#2563eb",
            height: "100%"
          }} />
        </div>

        <p>International Hospitals: {
          hospitals.filter(h => h.type === "International").length
        }</p>

        <div style={{
          background: "#e5e7eb",
          height: "12px",
          borderRadius: "10px",
          overflow: "hidden"
        }}>
          <div style={{
            width: `${hospitals.length ? hospitals.filter(h => h.type === "International").length / hospitals.length * 100 : 0}%`,
            background: "#16a34a",
            height: "100%"
          }} />
        </div>
      </div>

      <div className="admin-content-card">
        <h3>Donor Registration Analytics</h3>

        <p>Approved Donors: {
          donors.filter(d => d.status === "Approved").length
        }</p>

        <p>Pending Donors: {
          donors.filter(d => d.status === "Pending").length
        }</p>

        <p>Under Review: {
          donors.filter(d => d.status === "Under Review").length
        }</p>

        <p>Rejected Donors: {
          donors.filter(d => d.status === "Rejected").length
        }</p>
      </div>

      <div className="admin-content-card">
        <h3>Recipient Registration Analytics</h3>

        <p>Approved Recipients: {
          recipients.filter(r => r.status === "Approved").length
        }</p>

        <p>Under Review: {
          recipients.filter(r => r.status === "Under Review").length
        }</p>

        <p>Registration Submitted: {
          recipients.filter(r => r.status === "Registration Submitted").length
        }</p>

        <p>Rejected Recipients: {
          recipients.filter(r => r.status === "Rejected").length
        }</p>
      </div>

      <div className="admin-content-card">
        <h3>Analytics Information</h3> 
                                                                                                                                                                                            
        <p>Hospital data: Dynamic</p>
        <p>Donor data: Dynamic</p>
        <p>Recipient data: Dynamic</p>
        <p>Transplant records: Fictional demo data</p>
      </div>
    </>
  );


case "Audit Logs":
  return (
    <>
      <h2>Audit Logs & Security</h2>
      <p>Monitor system activities and security events.</p>

      <div className="admin-stats">
        <div className="admin-stat-card">
          <h3>Total Activities</h3>
          <h2>{auditLogs.length}</h2>
        </div>

        <div className="admin-stat-card">
          <h3>Successful Activities</h3>
          <h2>
            {auditLogs.filter(log => log.status === "Success").length}
          </h2>
        </div>
      </div>

      <div className="admin-content-card">
        <h3>Activity History</h3>

        {auditLogs.map((log) => (
          <div className="admin-list-item" key={log.id}>
            <div>
              <h3>{log.action}</h3>
              <p>Log ID: {log.id}</p>
              <p>{log.details}</p>
              <p>Performed By: {log.performedBy}</p>
              <p>Date: {log.date}</p>
              <p>Status: {log.status}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="admin-content-card">
        <h3>Security Information</h3>
        <p>Activity Monitoring: Demo</p>
        <p>Audit History: Sample Data</p>
        <p>Real-time Security Monitoring: Not Connected</p>
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
