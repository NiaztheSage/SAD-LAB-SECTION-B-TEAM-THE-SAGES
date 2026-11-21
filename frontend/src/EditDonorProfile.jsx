
import { useState } from "react";
import "./EditDonorProfile.css";

function EditDonorProfile({ donor, onSave, onCancel }) {
  const [fullName, setFullName] = useState(donor.fullName);
  const [email, setEmail] = useState(donor.email);
  const [phone, setPhone] = useState(donor.phone);
  const [location, setLocation] = useState(donor.location);

  function handleSubmit(e) {
    e.preventDefault();

    if (fullName.trim().length < 3) {
      alert("Name must be at least 3 characters.");
      return;
    }

    if (!/^01[3-9]\d{8}$/.test(phone)) {
      alert("Enter a valid 11-digit Bangladesh phone number.");
      return;
    }

    onSave({
      fullName: fullName.trim(),
      email,
      phone,
      location: location.trim(),
    });
  }

  return (
    <div className="edit-profile-container">
      <div className="edit-profile-card">
        <h2>Edit My Profile</h2>
        <p>Update your personal information below.</p>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            value={email}
            disabled
          />

          <label>Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          <div className="edit-profile-actions">
            <button type="submit" className="save-profile-btn">
              Save Changes
            </button>

            <button
              type="button"
              className="cancel-profile-btn"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditDonorProfile;
