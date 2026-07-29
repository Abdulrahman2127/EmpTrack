import '../styles/Update.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function Update() {
  const navigate = useNavigate()
  const [employee, setEmployee] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [department, setDepartment] = useState('')
  const [salary, setSalary] = useState('')

  const { id } = useParams()
  const emp = async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:3001/api/employees/details/${id}`,
        {
          withCredentials: true,
        },
      )

      console.log(res.data)
      setEmployee(res.data)
      setName(res.data.name)
      setEmail(res.data.email)
      setPhone(res.data.phone)
      setAge(res.data.age)
      setGender(res.data.gender)
      setDepartment(res.data.department)
      setSalary(res.data.salary)
    } catch (error) {
      console.log(error)
    }
  }

  const updateEmployee  = async (id) => {
    try {
      const res = await axios.put(
        `http://localhost:3001/api/employees/${id}`,
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
      navigate('/home')
      console.log(res.data)
      
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    emp(id)
  }, [id])
  if (!employee) {
    return <h2>Loading...</h2>
  }
  return (
    <div className="edit-container">
      <div className="edit-card">
        <h1>Edit Employee</h1>

        <form className="edit-form">
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />

          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />

          <input
            type="text"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value)
            }}
          />

          <input
            type="number"
            value={age}
            onChange={(e) => {
              setAge(e.target.value)
            }}
          />

          <select
            value={gender}
            onChange={(e) => {
              setGender(e.target.value)
            }}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <input
            type="text"
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value)
            }}
          />

          <input
            type="number"
            value={salary}
            onChange={(e) => {
              setSalary(e.target.value)
            }}
          />

          <div className="buttons">
            <button onClick={() => updateEmployee(id)} type="button" className="save-btn">
              Save Changes
            </button>

            <Link to="/home">
              <button type="button" className="cancel-btn">
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
