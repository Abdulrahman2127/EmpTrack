import { Link } from "react-router-dom";
import "../styles/Welcome.css";

export function Welcome() {
  return (
    <div className="welcome">

      <nav className="navbar">
        <h2 className="logo">EmpTrack</h2>

      </nav>

      <section className="hero">

        <h1>Employee Management System</h1>
        <p>
          Organize employee information, create records, update records
        </p>
        <div className="hero-buttons">
          <Link to="/register">
            <button className="btn primary">
              Get Started
            </button>
          </Link>

          <Link to="/login">
            <button className="btn outline">
              Login
            </button>
          </Link>
        </div>

      </section>
      

      <section className="features">

        <div className="feature-card">
          <div className="icon">👥</div>
          <h3>Employee Records</h3>
          <p>
            Store employee information in one organized place.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">✏️</div>
          <h3>Edit Employees</h3>
          <p>
            Update employee details quickly whenever needed.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">🔒</div>
          <h3>Secure Access</h3>
          <p>
            Authentication powered by JWT for secure access.
          </p>
        </div>

      </section>

     
      <footer>
        Designed and developed by Abdulrahman2127 © 2026
      </footer>
     

    </div>
  );
}