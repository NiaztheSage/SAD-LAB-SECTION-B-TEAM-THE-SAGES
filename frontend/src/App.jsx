
import './App.css'

function App() {
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

        <button className="login-btn">Login</button>
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
            <button className="primary-btn">Register as Donor</button>
            <button className="secondary-btn">Register as Recipient</button>
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

      <footer id="contact">
        <p>© 2026 NI-ODTCN | Organ Donation & Transplant Coordination Network</p>
      </footer>
    </div>
  )
}

export default App
