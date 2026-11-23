
import './App.css'
import { useState } from 'react'
import Login from './Login'
import Register from './Register'
import ForgotPassword from './ForgotPassword'
import DonorDashboard from './DonorDashboard'
import RecipientDashboard from './RecipientDashboard'
import SuperAdminDashboard from './SuperAdminDashboard'
import HospitalAdminDashboard from './HospitalAdminDashboard'
import MedicalProfessionalDashboard from './MedicalProfessionalDashboard'


function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [accountType, setAccountType] = useState("Donor")
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [showDonorDashboard, setShowDonorDashboard] = useState(false)
  const [showRecipientDashboard, setShowRecipientDashboard] = useState(false)
  const [showSuperAdminDashboard, setShowSuperAdminDashboard] = useState(false)
  const [showHospitalAdminDashboard, setShowHospitalAdminDashboard] = useState(false)
  const [showMedicalProfessionalDashboard, setShowMedicalProfessionalDashboard] = useState(false)

if (showSuperAdminDashboard) {
  return (
    <SuperAdminDashboard
      onLogout={() => setShowSuperAdminDashboard(false)}
    />
  )
}
if (showHospitalAdminDashboard) {
  return (
    <HospitalAdminDashboard
      onLogout={() => setShowHospitalAdminDashboard(false)}
    />
  )
}
if (showMedicalProfessionalDashboard) {
  return (
    <MedicalProfessionalDashboard
      onLogout={() => setShowMedicalProfessionalDashboard(false)}
    />
  )
}
 if (showDonorDashboard) {
  return (
    <DonorDashboard
      onLogout={() => setShowDonorDashboard(false)}
    />
  )
}


if (showRecipientDashboard) {
  return (
    <RecipientDashboard
      onLogout={() => setShowRecipientDashboard(false)}
    />
  )
}
if (showForgotPassword) {
  return (
    <ForgotPassword
      onBack={() => {
        setShowForgotPassword(false)
        setShowLogin(true)
      }}
    />
  )
}
  if (showLogin) {
  return (
    <Login
      accountType={accountType}
      onAccountTypeChange={setAccountType}
      onBack={() => setShowLogin(false)}
      onRegister={() => {
        setShowLogin(false)
        setShowRegister(true)
      }}

onLogin={(email, password) => {
  if (accountType === "Super Admin") {
    if (
      email === "admin@niodtcn.com" &&
      password === "Admin@12345"
    ) {
      setShowLogin(false)
      setShowSuperAdminDashboard(true)
    } else {
      alert("Invalid Super Admin email or password!")
    }

  } else if (accountType === "Hospital Admin") {
    setShowLogin(false)
    setShowHospitalAdminDashboard(true)

  } else if (accountType === "Medical Professional") {
    setShowLogin(false)
    setShowMedicalProfessionalDashboard(true)

  } else if (accountType === "Recipient") {
    setShowLogin(false)
    setShowRecipientDashboard(true)

  } else {
    setShowLogin(false)
    setShowDonorDashboard(true)
  }
}}

      onForgotPassword={() => {
  setShowLogin(false)
  setShowForgotPassword(true)
}}
    />

  )
}

if (showRegister) {
  return (
    <Register
      initialAccountType={accountType}
      onAccountTypeChange={(type) => setAccountType(type)}
      onBack={() => setShowRegister(false)}
onLogin={() => {
  setShowRegister(false)
  setShowLogin(true)
}}
    />
  )
}

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">+</span>
          <span>NI-ODTCN</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <button
  className="login-btn"
  onClick={() => setShowLogin(true)}
>
  Login
</button>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="tagline">NATIONAL & INTERNATIONAL NETWORK</p>

          <h1>
            Connecting Lives,
            <br />
            <span>Saving Lives.</span>
          </h1>

          <p className="hero-description">
            A coordinated network connecting hospitals, donors,
            recipients and medical professionals to support
            organ donation and transplantation.
          </p>

          <div className="hero-buttons">
            <button
  className="primary-btn"
  onClick={() => {
    setAccountType("Donor")
    setShowRegister(true)
  }}
>
  Register as Donor
</button>
            <button
  className="secondary-btn"
  onClick={() => {
    setAccountType("Recipient")
    setShowRegister(true)
  }}
>
  Register as Recipient
</button>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <p className="section-label">ABOUT OUR NETWORK</p>
        <h2>Working Together to Save Lives</h2>
        <p>
          NI-ODTCN supports secure coordination between hospitals,
          donors, recipients and medical professionals.
        </p>
      </section>

      <section className="services" id="services">
        <div className="services-heading">
          <p className="section-label">OUR SERVICES</p>
          <h2>Supporting Every Step of Transplant Coordination</h2>
          <p>
            Our network helps connect people and healthcare institutions
            through a coordinated organ donation and transplant process.
          </p>
        </div>

        <div className="service-grid">
          <div className="service-card">
            <div className="service-icon">♡</div>
            <h3>Donor Registry</h3>
            <p>
              A dedicated portal for donors to register and manage
              their donation information.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">+</div>
            <h3>Recipient Registry</h3>
            <p>
              Helps recipients register and connect with authorized
              healthcare professionals.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">✚</div>
            <h3>Hospital Network</h3>
            <p>
              Connects participating hospitals and their medical
              professionals for case coordination.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">⇄</div>
            <h3>Matching Support</h3>
            <p>
              Provides compatibility suggestions to support
              medical professionals in their decisions.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">↗</div>
            <h3>Referral Coordination</h3>
            <p>
              Supports coordination between national and
              international transplant centers.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">▤</div>
            <h3>Follow-up Tracking</h3>
            <p>
              Helps authorized professionals maintain transplant
              records and follow-up information.
            </p>
          </div>
        </div>
      </section>


      <footer id="contact">
        <p>© 2026 NI-ODTCN | Organ Donation & Transplant Coordination Network</p>
      </footer>
    </div>
  )
}

export default App
