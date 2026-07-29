import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Login.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const login = async () => {
    try {
      const res = await axios.post('http://localhost:3001/api/users/login', {
        email,
        password,
      },{withCredentials:true})

      console.log(res.data)

      setEmail('')
      setPassword('')

      navigate('/home')
    } catch (err) {
      console.log(err);
      console.log(err.response);
      console.log(err.response?.data);
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="back-container">
          <Link to="/" className="back-btn">
            ← Back to Home
          </Link>
        </div>

        <h1>Welcome Back 👋</h1>
        <p>Login to continue</p>

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

        <button onClick={login} disabled={!email || !password}>
          Login
        </button>

        <div className="register-link">
          Don't have an account?
          <Link to="/register"> Register</Link>
        </div>
      </div>
    </div>
  )
}
