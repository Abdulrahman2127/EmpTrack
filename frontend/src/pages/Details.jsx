import { Link, useNavigate } from 'react-router-dom'
import '../styles/Details.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Details() {
  const navigate = useNavigate()
  const { id } = useParams()

  const [employee, setEmployee] = useState(null)

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
    } catch (error) {
      console.log(error)
    }
  }

  const deleteEmp = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:3001/api/employees/${id}`,
        {
          withCredentials: true,
        },
      )

      console.log(res.data)
      navigate('/home')
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
    <div className="details-container">
      <div className="details-card">
        <div className="details-header">
          <h1>Employee Details</h1>

          <Link to="/home">
            <button className="back-btn">← Back</button>
          </Link>
        </div>

        <div className="profile"></div>

        <div className="info-grid">
          <div className="info-box">
            <span>Name</span>
            <h3>{employee.name}</h3>
          </div>

          <div className="info-box">
            <span>Email</span>
            <h3>{employee.email}</h3>
          </div>

          <div className="info-box">
            <span>Phone</span>
            <h3>{employee.phone}</h3>
          </div>

          <div className="info-box">
            <span>Age</span>
            <h3>{employee.age} Years</h3>
          </div>

          <div className="info-box">
            <span>Gender</span>
            <h3>{employee.gender}</h3>
          </div>

          <div className="info-box">
            <span>Department</span>
            <h3>{employee.department}</h3>
          </div>

          <div className="info-box">
            <span>Salary</span>
            <h3>${employee.salary}</h3>
          </div>

          
        </div>

        <div className="actions">
          <Link to={`/update/${employee._id}`}>
            <button className="edit-btn">Edit</button>
          </Link>
          <button
            onClick={() => {
              deleteEmp(employee._id)
            }}
            className="delete-btn"
          >
            Delete Employee
          </button>
        </div>
      </div>
    </div>
  )
}
