
import { useState } from "react";
import "./ForgotPassword.css";

function ForgotPassword({ onBack }) {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    alert("Password reset instructions will be sent to your email.");
  }

  return (
    <div className="forgot-page">
      <div className="forgot-container">

        <button
          type="button"
          className="forgot-back"
          onClick={onBack}
        >
          ← Back to Login
        </button>

        <div className="forgot-header">
          <h1>NI-ODTCN</h1>
          <p>
            National & International Organ Donation
            and Transplant Coordination Network
          </p>
        </div>

        <div className="forgot-content">
          <div className="forgot-icon">🔐</div>

          <h2>Forgot Password?</h2>

          <p>
            Don't worry! Enter your registered email
            address and we will help you reset your password.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your registered email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="reset-button"
            >
              Send Reset Link
            </button>

          </form>
        </div>

        <p className="forgot-footer">
          © 2026 NI-ODTCN. All rights reserved.
        </p>

      </div>
    </div>
  );
}

export default ForgotPassword;
