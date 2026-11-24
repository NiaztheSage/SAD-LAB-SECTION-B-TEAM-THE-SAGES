
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
    category: "Medical Case",
    priority: "High",
    date: "2026-11-24",
    read: false,
  },
  {
    id: 2,
    title: "Referral Update",
    message: "A hospital referral is waiting for review.",
    category: "Referral",
    priority: "Medium",
    date: "2026-11-23",
    read: false,
  },
  {
    id: 3,
    title: "PKE Review Reminder",
    message: "A paired kidney exchange case requires specialist review.",
    category: "PKE",
    priority: "High",
    date: "2026-11-22",
    read: true,
  },
  {
    id: 4,
    title: "Organ Logistics Update",
    message: "An organ transportation record has been updated.",
    category: "Organ Logistics",
    priority: "Low",
    date: "2026-11-21",
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
    source: "Dhaka Central Hospital",
    destination: "National Medical Center",
    transportMethod: "Medical Ambulance",
    status: "Preparation",
  },
  {
    id: "ORG-002",
    organ: "Liver",
    source: "National Medical Center",
    destination: "International Partner Hospital",
    transportMethod: "Air Transport",
    status: "In Transit",
  },
  {
    id: "ORG-003",
    organ: "Kidney",
    source: "International Partner Hospital",
    destination: "Dhaka Central Hospital",
    transportMethod: "Medical Ambulance",
    status: "Delivered",
  },
]);

const [researchDatasets, setResearchDatasets] = useState([
  {
    id: "DS-001",
    organ: "Kidney",
    description: "Synthetic kidney transplant outcome dataset",
    deIdentificationStatus: "De-identified",
    approvalStatus: "Approved",
    accessLevel: "Authorized Researchers",
  },
  {
    id: "DS-002",
    organ: "Liver",
    description: "Synthetic liver transplant study dataset",
    deIdentificationStatus: "Under Review",
    approvalStatus: "Pending",
    accessLevel: "Restricted",
  },
  {
    id: "DS-003",
    organ: "Kidney",
    description: "Synthetic kidney compatibility research dataset",
    deIdentificationStatus: "De-identified",
    approvalStatus: "Pending",
    accessLevel: "Research Team Only",
  },
]);

function updateResearchDataset(id, field, value) {
  setResearchDatasets((previous) =>
    previous.map((dataset) =>
      dataset.id === id
        ? { ...dataset, [field]: value }
        : dataset
    )
  );
}


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

const [pkePairs, setPkePairs] = useState([
  {
    id: "PKE-001",
    donor: "Demo Donor A",
    recipient: "Demo Recipient A",
    bloodGroup: "O+",
    status: "Under Review",
    compatibility: "Pending Specialist Review",
  },
  {
    id: "PKE-002",
    donor: "Demo Donor B",
    recipient: "Demo Recipient B",
    bloodGroup: "A+",
    status: "Under Review",
    compatibility: "Pending Specialist Review",
  },
  {
    id: "PKE-003",
    donor: "Demo Donor C",
    recipient: "Demo Recipient C",
    bloodGroup: "B+",
    status: "Registered",
    compatibility: "Not Evaluated",
  },


]);

const [referrals, setReferrals] = useState([
  {
    id: "REF-001",
    hospital: "National Medical Center",
    type: "National",
    organ: "Kidney",
    recipient: "Demo Recipient A",
    reason: "Specialized transplant evaluation",
    status: "Under Review",
  },
  {
    id: "REF-002",
    hospital: "International Partner Hospital",
    type: "International",
    organ: "Liver",
    recipient: "Demo Recipient B",
    reason: "Advanced specialist consultation",
    status: "Pending",
  },
]);

function updateReferralStatus(id, status) {
  setReferrals((previous) =>
    previous.map((referral) =>
      referral.id === id
        ? { ...referral, status }
        : referral
    )
  );
}

function updatePKEStatus(id, field, value) {
  setPkePairs((previous) =>
    previous.map((pair) =>
      pair.id === id
        ? { ...pair, [field]: value }
        : pair
    )
  );
}
const [transplantRecords, setTransplantRecords] = useState([
  {
    id: "TR-001",
    recipient: "Demo Recipient A",
    organ: "Kidney",
    hospital: "Dhaka Central Hospital",
    transplantDate: "2026-10-15",
    status: "Follow-up Required",
  },
  {
    id: "TR-002",
    recipient: "Demo Recipient B",
    organ: "Liver",
    hospital: "National Medical Center",
    transplantDate: "2026-09-20",
    status: "Completed",
  },
  {
    id: "TR-003",
    recipient: "Demo Recipient C",
    organ: "Kidney",
    hospital: "International Partner Hospital",
    transplantDate: "2026-11-10",
    status: "Under Review",
  },
]);

function updateTransplantStatus(id, status) {
  setTransplantRecords((previous) =>
    previous.map((record) =>
      record.id === id
        ? { ...record, status }
        : record
    )
  );
}


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
      <p>
        Manage registered donor-recipient pairs and track
        exchange cycle review progress.
      </p>

      <div className="medical-pro-stats">
        <div className="medical-pro-stat">
          <h3>{pkePairs.length}</h3>
          <p>Registered Pairs</p>
        </div>

        <div className="medical-pro-stat">
          <h3>
            {
              pkePairs.filter(
                (pair) => pair.status === "Under Review"
              ).length
            }
          </h3>
          <p>Under Review</p>
        </div>

        <div className="medical-pro-stat">
          <h3>
            {
              pkePairs.filter(
                (pair) => pair.compatibility === "Pending Specialist Review"
              ).length
            }
          </h3>
          <p>Pending Review</p>
        </div>
      </div>

      {pkePairs.map((pair) => (
        <div className="medical-pro-card" key={pair.id}>
          <h3>{pair.id}</h3>

          <p><strong>Donor:</strong> {pair.donor}</p>
          <p><strong>Recipient:</strong> {pair.recipient}</p>
          <p><strong>Donor Blood Group:</strong> {pair.bloodGroup}</p>

          <label>Pair Registration Status</label>
          <select
            value={pair.status}
            onChange={(e) =>
              updatePKEStatus(pair.id, "status", e.target.value)
            }
          >
            <option>Registered</option>
            <option>Under Review</option>
            <option>Approved for Further Assessment</option>
            <option>On Hold</option>
          </select>

          <label>Specialist Review Status</label>
          <select
            value={pair.compatibility}
            onChange={(e) =>
              updatePKEStatus(
                pair.id,
                "compatibility",
                e.target.value
              )
            }
          >
            <option>Not Evaluated</option>
            <option>Pending Specialist Review</option>
            <option>Further Testing Required</option>
            <option>Review Completed</option>
          </select>
        </div>
      ))}

      <p className="medical-pro-warning">
        PKE exchange requires detailed clinical evaluation,
        immunological testing and authorized specialist approval.
        This demo does not calculate compatibility or approve
        actual organ exchanges.
      </p>
    </>
  );
      
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
 
case "Transplant Records":
  return (
    <>
      <h2>Transplant Records</h2>
      <p>
        View and manage demo transplant records and
        post-transplant follow-up progress.
      </p>

      <div className="medical-pro-stats">
        <div className="medical-pro-stat">
          <h3>{transplantRecords.length}</h3>
          <p>Total Records</p>
        </div>

        <div className="medical-pro-stat">
          <h3>
            {transplantRecords.filter(
              (record) => record.status === "Completed"
            ).length}
          </h3>
          <p>Completed</p>
        </div>

        <div className="medical-pro-stat">
          <h3>
            {transplantRecords.filter(
              (record) => record.status !== "Completed"
            ).length}
          </h3>
          <p>Pending Follow-up / Review</p>
        </div>
      </div>

      {transplantRecords.map((record) => (
        <div className="medical-pro-card" key={record.id}>
          <h3>{record.id}</h3>

          <p><strong>Recipient:</strong> {record.recipient}</p>
          <p><strong>Organ:</strong> {record.organ}</p>
          <p><strong>Hospital:</strong> {record.hospital}</p>
          <p><strong>Transplant Date:</strong> {record.transplantDate}</p>

          <label>Record Status</label>
          <select
            value={record.status}
            onChange={(e) =>
              updateTransplantStatus(record.id, e.target.value)
            }
          >
            <option>Under Review</option>
            <option>Follow-up Required</option>
            <option>Follow-up in Progress</option>
            <option>Completed</option>
            <option>On Hold</option>
          </select>
        </div>
      ))}

      <p className="medical-pro-warning">
        These are fictional demonstration records.
        Actual transplant records and follow-up decisions
        must be maintained and reviewed by authorized
        healthcare professionals.
      </p>
    </>
  );


      
case "Organ Logistics":
  return (
    <>
      <h2>Organ Logistics Tracking</h2>
      <p>
        Track organ transportation from source hospitals
        to destination hospitals.
      </p>

      <div className="medical-pro-stats">
        <div className="medical-pro-stat">
          <h3>{logistics.length}</h3>
          <p>Total Organs</p>
        </div>

        <div className="medical-pro-stat">
          <h3>
            {logistics.filter(
              (item) => item.status === "In Transit"
            ).length}
          </h3>
          <p>In Transit</p>
        </div>

        <div className="medical-pro-stat">
          <h3>
            {logistics.filter(
              (item) => item.status === "Delivered"
            ).length}
          </h3>
          <p>Delivered</p>
        </div>
      </div>

      {logistics.map((item) => (
        <div className="medical-pro-card" key={item.id}>
          <h3>{item.id}</h3>

          <p><strong>Organ:</strong> {item.organ}</p>
          <p><strong>Source Hospital:</strong> {item.source}</p>
          <p><strong>Destination Hospital:</strong> {item.destination}</p>
          <p><strong>Transport Method:</strong> {item.transportMethod}</p>

          <label>Transportation Status</label>
          <select
            value={item.status}
            onChange={(e) =>
              setLogistics((previous) =>
                previous.map((organ) =>
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
        </div>
      ))}

      <p className="medical-pro-warning">
        This is a fictional logistics demonstration.
        Actual organ transportation requires authorized
        coordination, medical preservation protocols and
        appropriate transport arrangements.
      </p>
    </>
  );

  case "Research Repository":
  return (
    <>
      <h2>De-identified Research Repository</h2>
      <p>
        Manage synthetic, de-identified research datasets
        for authorized research purposes.
      </p>

      <div className="medical-pro-stats">
        <div className="medical-pro-stat">
          <h3>{researchDatasets.length}</h3>
          <p>Total Datasets</p>
        </div>

        <div className="medical-pro-stat">
          <h3>
            {researchDatasets.filter(
              (item) => item.deIdentificationStatus === "De-identified"
            ).length}
          </h3>
          <p>De-identified</p>
        </div>

        <div className="medical-pro-stat">
          <h3>
            {researchDatasets.filter(
              (item) => item.approvalStatus === "Approved"
            ).length}
          </h3>
          <p>Approved Datasets</p>
        </div>
      </div>

      {researchDatasets.map((dataset) => (
        <div className="medical-pro-card" key={dataset.id}>
          <h3>{dataset.id}</h3>

          <p><strong>Organ:</strong> {dataset.organ}</p>
          <p><strong>Description:</strong> {dataset.description}</p>

          <label>De-identification Status</label>
          <select
            value={dataset.deIdentificationStatus}
            onChange={(e) =>
              updateResearchDataset(
                dataset.id,
                "deIdentificationStatus",
                e.target.value
              )
            }
          >
            <option>Under Review</option>
            <option>De-identified</option>
            <option>Rejected</option>
          </select>

          <label>Research Approval Status</label>
          <select
            value={dataset.approvalStatus}
            onChange={(e) =>
              updateResearchDataset(
                dataset.id,
                "approvalStatus",
                e.target.value
              )
            }
          >
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>

          <label>Dataset Access Level</label>
          <select
            value={dataset.accessLevel}
            onChange={(e) =>
              updateResearchDataset(
                dataset.id,
                "accessLevel",
                e.target.value
              )
            }
          >
            <option>Restricted</option>
            <option>Research Team Only</option>
            <option>Authorized Researchers</option>
          </select>
        </div>
      ))}

      <p className="medical-pro-warning">
        All records are fictional demonstration data.
        Real research datasets require proper de-identification,
        institutional approval, privacy safeguards and
        authorized access. This prototype does not perform
        actual anonymization or grant real access permissions.
      </p>
    </>
  );

      
case "Referrals":
  return (
    <>
      <h2>National & International Referrals</h2>
      <p>
        Monitor referral requests between national and
        international transplant hospitals.
      </p>

      <div className="medical-pro-stats">
        <div className="medical-pro-stat">
          <h3>{referrals.length}</h3>
          <p>Total Referrals</p>
        </div>

        <div className="medical-pro-stat">
          <h3>
            {referrals.filter(
              (r) => r.type === "National"
            ).length}
          </h3>
          <p>National Referrals</p>
        </div>

        <div className="medical-pro-stat">
          <h3>
            {referrals.filter(
              (r) => r.type === "International"
            ).length}
          </h3>
          <p>International Referrals</p>
        </div>
      </div>

      {referrals.map((referral) => (
        <div className="medical-pro-card" key={referral.id}>
          <h3>{referral.id}</h3>

          <p><strong>Receiving Hospital:</strong> {referral.hospital}</p>
          <p><strong>Referral Type:</strong> {referral.type}</p>
          <p><strong>Organ:</strong> {referral.organ}</p>
          <p><strong>Recipient:</strong> {referral.recipient}</p>
          <p><strong>Referral Reason:</strong> {referral.reason}</p>

          <label>Referral Status</label>
          <select
            value={referral.status}
            onChange={(e) =>
              updateReferralStatus(
                referral.id,
                e.target.value
              )
            }
          >
            <option>Pending</option>
            <option>Under Review</option>
            <option>Additional Information Required</option>
            <option>Approved for Referral</option>
            <option>On Hold</option>
            <option>Completed</option>
          </select>
        </div>
      ))}

      <p className="medical-pro-warning">
        Referral approval and cross-border transplant decisions
        require authorized hospital and clinical specialist review.
        This prototype does not perform actual patient transfers
        or medical approvals.
      </p>
    </>
  );


      case "Notifications":
  return (
    <>
      <h2>Automated Notifications</h2>
      <p>
        Monitor and manage medical workflow notifications.
      </p>

      <div className="medical-pro-stats">
        <div className="medical-pro-stat">
          <h3>{notifications.length}</h3>
          <p>Total Notifications</p>
        </div>

        <div className="medical-pro-stat">
          <h3>
            {notifications.filter((item) => !item.read).length}
          </h3>
          <p>Unread</p>
        </div>

        <div className="medical-pro-stat">
          <h3>
            {notifications.filter(
              (item) => item.priority === "High"
            ).length}
          </h3>
          <p>High Priority</p>
        </div>

        <div className="medical-pro-stat">
          <h3>
            {notifications.filter((item) => item.read).length}
          </h3>
          <p>Read</p>
        </div>
      </div>

      <div className="medical-pro-card">
        <h3>Filter Notifications</h3>

        <select
          value={notificationFilter}
          onChange={(e) => setNotificationFilter(e.target.value)}
        >
          <option value="All">All Notifications</option>
          <option value="Unread">Unread Only</option>
          <option value="Read">Read Only</option>
          <option value="High">High Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="Low">Low Priority</option>
        </select>
      </div>

      {notifications
        .filter((item) => {
          if (notificationFilter === "Unread") return !item.read;
          if (notificationFilter === "Read") return item.read;
          if (["High", "Medium", "Low"].includes(notificationFilter)) {
            return item.priority === notificationFilter;
          }
          return true;
        })
        .map((item) => (
          <div className="medical-pro-card" key={item.id}>
            <h3>{item.title}</h3>

            <p>{item.message}</p>
            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>Priority:</strong> {item.priority}</p>
            <p><strong>Date:</strong> {item.date}</p>
            <p><strong>Status:</strong> {item.read ? "Read" : "Unread"}</p>

            {!item.read && (
              <button
                onClick={() =>
                  setNotifications((previous) =>
                    previous.map((notification) =>
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

      <p className="medical-pro-warning">
        These are fictional demonstration notifications.
        Real-time automated alerts require backend event
        processing and notification services.
      </p>
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
    "Research Repository",
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
