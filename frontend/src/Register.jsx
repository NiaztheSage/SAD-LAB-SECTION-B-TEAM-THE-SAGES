
import { useState } from "react";
import "./Register.css";
import "./Login.css";

function Register({
  onBack,
  onLogin,
  initialAccountType,
  onAccountTypeChange,
}) {    
  const [accountType, setAccountType] = useState(initialAccountType || "Donor");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [passwordError, setPasswordError] = useState("");
const [fullName, setFullName] = useState("");

function handleSubmit(e) {
  
  e.preventDefault();
  if (fullName.trim().length < 3) {
  setPasswordError("Full name must be at least 3 characters long!");
  return;
}

  if (password.length < 8) {
  setPasswordError("Password must be at least 8 characters long!");
  return;
}

  if (password !== confirmPassword) {
    setPasswordError("Passwords do not match!");
    return;
  }

  setPasswordError("");
  alert("Registration form submitted successfully!");
}

  return (
    <div className="register-page">
      <div className="register-container">

        <button
          type="button"
          className="register-back"
          onClick={onBack}
        >
          ← Back to Home
        </button>

        <div className="register-header">
          <h1>NI-ODTCN</h1>
          <p>National & International Organ Donation and Transplant Coordination Network</p>
        </div>

        <div className="register-heading">
          <h2>Create Your Account</h2>
          <p>Join our network and help support life-saving coordination.</p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Full Name</label>
           <input
  type="text"
  placeholder="Enter your full name"
  value={fullName}
  onChange={(e) => setFullName(e.target.value)}
  required
/>
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
          <input
  type="tel"
  placeholder="Enter your phone number"
  pattern="[0-9]{11}"
  title="Please enter an 11-digit phone number"
  required
/>
          </div>

          <div className="form-group">
            <label>Account Type</label>

            <select
  value={accountType}
  onChange={(e) => {
    setAccountType(e.target.value);
    onAccountTypeChange(e.target.value);
  }}
>
              <option value="Donor">Donor</option>
              <option value="Recipient">Recipient</option>
            </select>
          </div>

          <div className="form-group">
            <label>Password</label>

            <div className="password-field">
          <input
  type={showPassword ? "text" : "password"}
  placeholder="Create a password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
/>

              <button
                type="button"
                className="register-show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
           <input
  type="password"
  placeholder="Confirm your password"
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
  required
/>
          </div>
          {passwordError && (
  <p className="password-error">{passwordError}</p>
)}

          <label className="terms-checkbox">
            <input type="checkbox" required />
            <span>
              I agree to the Terms & Conditions and Privacy Policy.
            </span>
          </label>

          <button type="submit" className="register-button">
            Create Account
          </button>

        </form>

        <p className="register-login-link">
          Already have an account?{" "}
          <button type="button" onClick={onLogin}>
            Login
          </button>
        </p>

        <p className="register-footer">
          © 2026 NI-ODTCN. All rights reserved.
        </p>

      </div>
    </div>
  );
}

export default Register;
