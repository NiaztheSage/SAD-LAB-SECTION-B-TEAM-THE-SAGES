
import { useState } from "react";
import "./Login.css";

function Login({ onBack, onRegister, onForgotPassword }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      <div className="login-container">

        <div className="login-header">
            <button
  type="button"
  className="back-home"
  onClick={onBack}
>
  ← Back to Home
</button>
          <h1>NI-ODTCN</h1>
          <p>National & International Organ Donation and Transplant Coordination Network</p>
        </div>

        <div className="login-form">
          <h2>Welcome Back!</h2>
          <p className="login-subtitle">
            Sign in to continue to your account.
          </p>

          <form>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>

              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" />
                Remember me
              </label>

             <button
  type="button"
  className="forgot-password-link"
  onClick={onForgotPassword}
>
  Forgot Password?
</button>
            </div>

            <button type="submit" className="login-button">
              Login
            </button>
          </form>

         <p className="register-link">
  Don't have an account?{" "}
  <button type="button" onClick={onRegister}>
    Register Now
  </button>
</p>
        </div>

        <p className="login-footer">
          © 2026 NI-ODTCN. All rights reserved.
        </p>

      </div>
    </div>
  );
}

export default Login;
