
import { useState } from "react";
import "./MedicalProfessionalDashboard.css";

function MedicalProfessionalDashboard({ onLogout }) {
  const [activeMenu, setActiveMenu] = useState("Overview");

  const [profile] = useState({
    name: "Dr. Farhan Ahmed",
    role: "Transplant Surgeon",
    hospital: "Dhaka Central Hospital",
    email: "farhan@dch.com",
  });

  const [cases, setCases] = useState([
    {
      id: "CASE-001",
      patient: "Patient A",
      organ: "Kidney",
      bloodGroup: "O+",
      status: "Under Review",
    },
    {
      id: "CASE-002",
      patient: "Patient B",
      organ: "Liver",
      bloodGroup: "A+",
      status: "Pending",
    },
    {
      id: "CASE-003",
      patient: "Patient C",
      organ: "Kidney",
      bloodGroup: "B+",
      status: "Approved",
    },
  ]);

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Medical Case Assigned",
      message: "A new kidney case has been assigned for review.",
      read: false,
    },
    {
      id: 2,
      title: "Referral Update",
      message: "A hospital referral is waiting for review.",
      read: false,
    },
  ]);

  const [matchingData, setMatchingData] = useState({
    donorBlood: "O+",
    recipientBlood: "O+",
    hla: "Not Evaluated",
    crossmatch: "Not Evaluated",
  });

  const [matchResult, setMatchResult] = useState("");

  const [logistics, setLogistics] = useState([
    {
      id: "ORG-001",
      organ: "Kidney",
      destination: "Dhaka Central Hospital",
      status: "Preparation",
    },
    {
      id: "ORG-002",
      organ: "Liver",
      destination: "National Medical Center",
      status: "In Transit",
    },
  ]);

  const [deceasedDonors, setDeceasedDonors] = useState([
  {
    id: "DD-001",
    donorName: "Demo Donor A",
    hospital: "Dhaka Central Hospital",
    referralDate: "2026-11-20",
    authorization: "Pending",
    evaluation: "Not Started",
    organAssessment: "Pending",
    status: "New Referral",
  },
  {
    id: "DD-002",
    donorName: "Demo Donor B",
    hospital: "National Medical Center",
    referralDate: "2026-11-21",
    authorization: "Reviewed",
    evaluation: "In Progress",
    organAssessment: "Pending",
    status: "Under Review",
  },
]);

  function updateCaseStatus(id, status) {
    setCases(
      cases.map((item) =>
        item.id === id ? { ...item, status } : item
      )
    );
  }

  function updateDeceasedDonor(id, field, value) {
  setDeceasedDonors(
    deceasedDonors.map((donor) =>
      donor.id === id
        ? { ...donor, [field]: value }
        : donor
    )
  );
}

  function checkCompatibility(e) {
    e.preventDefault();

    setMatchResult(
      "Preliminary information recorded. ABO compatibility, HLA typing and crossmatch must be reviewed by authorized specialists. This system does not determine medical eligibility or organ allocation."
    );
  }

  function renderContent() {
    switch (activeMenu) {
      case "My Profile":
        return (
          <>
            <h2>My Professional Profile</h2>
            <div className="medical-pro-card">
              <h3>{profile.name}</h3>
              <p>Professional Role: {profile.role}</p>
              <p>Hospital: {profile.hospital}</p>
              <p>Email: {profile.email}</p>
            </div>
          </>
        );

      case "Assigned Cases":
        return (
          <>
            <h2>Assigned Medical Cases</h2>
            <div className="medical-pro-card">
              <div className="medical-pro-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Case ID</th>
                      <th>Patient</th>
                      <th>Organ</th>
                      <th>Blood Group</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cases.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.patient}</td>
                        <td>{item.organ}</td>
                        <td>{item.bloodGroup}</td>
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
            </div>
          </>
        );

      case "Matching Support":
        return (
          <>
            <h2>Organ Compatibility Support</h2>

            <div className="medical-pro-card">
              <p>
                Enter demo compatibility information for preliminary review.
              </p>

              <form onSubmit={checkCompatibility}>
                <label>Donor Blood Group</label>
                <select
                  value={matchingData.donorBlood}
                  onChange={(e) =>
                    setMatchingData({
                      ...matchingData,
                      donorBlood: e.target.value,
                    })
                  }
                >
                  {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(
                    (group) => (
                      <option key={group}>{group}</option>
                    )
                  )}
                </select>

                <label>Recipient Blood Group</label>
                <select
                  value={matchingData.recipientBlood}
                  onChange={(e) =>
                    setMatchingData({
                      ...matchingData,
                      recipientBlood: e.target.value,
                    })
                  }
                >
                  {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(
                    (group) => (
                      <option key={group}>{group}</option>
                    )
                  )}
                </select>

                <label>HLA Evaluation</label>
                <select
                  value={matchingData.hla}
                  onChange={(e) =>
                    setMatchingData({
                      ...matchingData,
                      hla: e.target.value,
                    })
                  }
                >
                  <option>Not Evaluated</option>
                  <option>Pending</option>
                  <option>Reviewed by Specialist</option>
                </select>

                <label>Crossmatch Result</label>
                <select
                  value={matchingData.crossmatch}
                  onChange={(e) =>
                    setMatchingData({
                      ...matchingData,
                      crossmatch: e.target.value,
                    })
                  }
                >
                  <option>Not Evaluated</option>
                  <option>Pending</option>
                  <option>Reviewed by Specialist</option>
                </select>

                <button type="submit">Submit for Review</button>
              </form>

              {matchResult && (
                <p className="medical-pro-warning">{matchResult}</p>
              )}
            </div>
          </>
        );

      case "PKE":
        return (
          <>
            <h2>Paired Kidney Exchange (PKE)</h2>
            <div className="medical-pro-card">
              <p>
                The PKE module supports the coordination of incompatible
                living kidney donor-recipient pairs.
              </p>
              <div className="medical-pro-info">
                <h3>Demo PKE Cycle</h3>
                <p>Pair A: Donor A → Recipient B</p>
                <p>Pair B: Donor B → Recipient A</p>
                <p>Status: Awaiting Specialist Review</p>
              </div>
              <p className="medical-pro-warning">
                This is a fictional example. No actual matching or allocation
                decision is made by this prototype.
              </p>
            </div>
          </>
        );

      case "Transplant Records":
        case "Deceased Donor Coordination":
  return (
    <>
      <h2>Deceased Donor Coordination Workflow</h2>
      <p>
        Manage deceased donor referrals, authorization and clinical
        coordination records.
      </p>

      <div className="medical-pro-stats">
        <div className="medical-pro-stat">
          <h3>{deceasedDonors.length}</h3>
          <p>Total Referrals</p>
        </div>

        <div className="medical-pro-stat">
          <h3>
            {
              deceasedDonors.filter(
                (donor) => donor.authorization === "Pending"
              ).length
            }
          </h3>
          <p>Pending Authorization</p>
        </div>

        <div className="medical-pro-stat">
          <h3>
            {
              deceasedDonors.filter(
                (donor) => donor.evaluation === "In Progress"
              ).length
            }
          </h3>
          <p>Evaluations in Progress</p>
        </div>
      </div>

      {deceasedDonors.map((donor) => (
        <div className="deceased-donor-card" key={donor.id}>
          <h3>{donor.donorName}</h3>

          <p>Donor ID: {donor.id}</p>
          <p>Hospital: {donor.hospital}</p>
          <p>Referral Date: {donor.referralDate}</p>

          <label>Authorization Status</label>
          <select
            value={donor.authorization}
            onChange={(e) =>
              updateDeceasedDonor(
                donor.id,
                "authorization",
                e.target.value
              )
            }
          >
            <option>Pending</option>
            <option>Reviewed</option>
            <option>Authorized</option>
            <option>Not Authorized</option>
          </select>

          <label>Clinical Evaluation Status</label>
          <select
            value={donor.evaluation}
            onChange={(e) =>
              updateDeceasedDonor(
                donor.id,
                "evaluation",
                e.target.value
              )
            }
          >
            <option>Not Started</option>
            <option>In Progress</option>
            <option>Completed</option>
            <option>Requires Further Review</option>
          </select>

          <label>Organ Assessment Status</label>
          <select
            value={donor.organAssessment}
            onChange={(e) =>
              updateDeceasedDonor(
                donor.id,
                "organAssessment",
                e.target.value
              )
            }
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
            <option>Not Suitable - Requires Specialist Review</option>
          </select>

          <label>Coordination Status</label>
          <select
            value={donor.status}
            onChange={(e) =>
              updateDeceasedDonor(
                donor.id,
                "status",
                e.target.value
              )
            }
          >
            <option>New Referral</option>
            <option>Under Review</option>
            <option>Coordination in Progress</option>
            <option>Completed</option>
            <option>On Hold</option>
          </select>
        </div>
      ))}

      <p className="medical-pro-warning">
        Demo workflow only. Authorization, death determination, clinical
        evaluation, organ suitability and allocation require applicable
        legal procedures and decisions by authorized professionals.
        This system does not make medical decisions.
      </p>
    </>
  );
        return (
          <>
            <h2>Transplant Records</h2>
            <div className="medical-pro-card">
              <p>Demo transplant records</p>
              <div className="medical-pro-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Record ID</th>
                      <th>Organ</th>
                      <th>Hospital</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>TR-001</td>
                      <td>Kidney</td>
                      <td>Dhaka Central Hospital</td>
                      <td>Follow-up</td>
                    </tr>
                    <tr>
                      <td>TR-002</td>
                      <td>Liver</td>
                      <td>National Medical Center</td>
                      <td>Completed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        );

      case "Organ Logistics":
        return (
          <>
            <h2>Organ Logistics Tracking</h2>
            <div className="medical-pro-card">
              <div className="medical-pro-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Organ ID</th>
                      <th>Organ</th>
                      <th>Destination</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {logistics.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.organ}</td>
                        <td>{item.destination}</td>
                        <td>
                          <select
                            value={item.status}
                            onChange={(e) =>
                              setLogistics(
                                logistics.map((organ) =>
                                  organ.id === item.id
                                    ? { ...organ, status: e.target.value }
                                    : organ
                                )
                              )
                            }
                          >
                            <option>Preparation</option>
                            <option>In Transit</option>
                            <option>Delivered</option>
                            <option>On Hold</option>
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

      case "Referrals":
        return (
          <>
            <h2>Hospital Referrals</h2>
            <div className="medical-pro-card">
              <p>REF-001 — National Medical Center</p>
              <p>Referral Type: National</p>
              <p>Status: Under Review</p>
              <hr />
              <p>REF-002 — International Partner Hospital</p>
              <p>Referral Type: International</p>
              <p>Status: Pending</p>
            </div>
          </>
        );

      case "Notifications":
        return (
          <>
            <h2>Notifications</h2>
            {notifications.map((item) => (
              <div className="medical-pro-card" key={item.id}>
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
            <h2>Medical Professional Overview</h2>
            <p>Welcome back, {profile.name}!</p>

            <div className="medical-pro-stats">
              <div className="medical-pro-stat">
                <h3>{cases.length}</h3>
                <p>Assigned Cases</p>
              </div>
              <div className="medical-pro-stat">
                <h3>
                  {cases.filter((item) => item.status === "Pending").length}
                </h3>
                <p>Pending Cases</p>
              </div>
              <div className="medical-pro-stat">
                <h3>{logistics.length}</h3>
                <p>Organ Logistics</p>
              </div>
              <div className="medical-pro-stat">
                <h3>{notifications.filter((item) => !item.read).length}</h3>
                <p>Unread Notifications</p>
              </div>
            </div>

            <div className="medical-pro-card">
              <h3>Professional Information</h3>
              <p>{profile.role}</p>
              <p>{profile.hospital}</p>
            </div>

            <p className="medical-pro-warning">
              Clinical decision-support prototype only. Final medical
              eligibility, compatibility and organ allocation decisions must
              be made by authorized medical professionals.
            </p>
          </>
        );
    }
  }

  const menuItems = [
    "Overview",
    "My Profile",
    "Assigned Cases",
    "Matching Support",
    "PKE",
    "Deceased Donor Coordination",
    "Transplant Records",
    "Organ Logistics",
    "Referrals",
    "Notifications",
  ];

  return (
    <div className="medical-pro-dashboard">
      <aside className="medical-pro-sidebar">
        <h2>NI-ODTCN</h2>
        <p>Medical Professional</p>

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

        <button className="medical-pro-logout" onClick={onLogout}>
          Logout
        </button>
      </aside>

      <main className="medical-pro-main">
        <header className="medical-pro-topbar">
          <div>
            <h2>{activeMenu}</h2>
            <p>{profile.hospital}</p>
          </div>
          <span>{profile.role}</span>
        </header>

        <section className="medical-pro-content">
          {renderContent()}
        </section>
      </main>
    </div>
  );
}

export default MedicalProfessionalDashboard;
