import { useState } from "react";
import axios from "axios";
import { Link , useNavigate  } from "react-router-dom";
import "../styles/Register.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const register = async () => {
   
    try {
        console.log("Before request");
      const res = await axios.post("http://localhost:3001/api/users", {
        name,
        email,
        password,
      });
      

      console.log(res.data);

      setName("");
      setEmail("");
      setPassword("");
      console.log("After request");
      navigate("/login");
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">

        <div className="back-container">
          <Link to="/" className="back-btn">
            ← Back to Home
          </Link>
        </div>

        <h1>Create Account</h1>
        <p>Create your account to continue</p>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={register}
          disabled={!name || !email || !password}
        >
          Create Account
        </button>

        <div className="login-link">
          Already have an account?
          <Link to="/login"> Login</Link>
        </div>

      </div>
    </div>
  );
}