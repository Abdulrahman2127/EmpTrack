import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/CreateEmployee.css'

export default function CreateEmployee() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [department, setDepartment] = useState('')
  const [salary, setSalary] = useState('')

  const createEmployee = async () => {
    try {
      const res = await axios.post(
        'http://localhost:3001/api/employees',
        {
          name,
          email,
          phone,
          age,
          gender,
          department,
          salary,
        },
        {
          withCredentials: true,
        },
      )

      console.log(res.data)

      setName('')
      setEmail('')
      setPhone('')
      setAge('')
      setGender('')
      setDepartment('')
      setSalary('')
    } catch (error) {
      console.log(error.response?.data)
    }
  }

  return (
    <div className="create-container">
      <div className="create-card">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <h1>Add Employee</h1>

        <input
          type="text"
          placeholder="Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <select style={{marginBottom: "20px"}} value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <input
          type="number"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />

        <button className="create-btn" onClick={createEmployee}>
          Add Employee
        </button>
      </div>
    </div>
  )
}
