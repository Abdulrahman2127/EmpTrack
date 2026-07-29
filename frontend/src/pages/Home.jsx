import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Home.css'
export default function Home() {
  const [employees, setEmployees] = useState([])

  const navigate = useNavigate()
  const employee = async () => {
    try {
      const res = await axios.get('http://localhost:3001/api/employees', {
        withCredentials: true,
      })
      console.log(res.data)
      setEmployees(res.data)
    } catch (error) {
      if (error.response?.status === 401) {
        navigate('/login')
      }
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
      employee();
    } catch (error) {
      console.log(error)
    }
  }

  const deleteToken = async () => {
    try {
      await axios.post(
        'http://localhost:3001/api/users/logout',
        {},
        {
          withCredentials: true,
        },
      )

      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    employee()
  }, [])
  
  return (
    <div className="home-container">
      <nav className="navbar">
        <h2>EmpTrack</h2>

        <div className="nav-buttons">
          <Link to="/create">
            <button className="create-btn">+ Add Employee</button>
          </Link>

          <button className="logout-btn" onClick={deleteToken}>
            Logout
          </button>
        </div>
      </nav>
      <div className="hero">
        <h1>Employee Management System</h1>
        <div className="employees-section">
          <table className="employee-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Age</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((employee) => {
                return (
                  <tr key={employee._id}>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.age}</td>
                    <td>{employee.department}</td>
                    <td>${employee.salary}</td>
                    <td>
                      <Link to={`/update/${employee._id}`}>
                        <button className="edit-btn">Edit</button>
                      </Link>
                      <Link to={`/details/${employee._id}`}>
                        <button className="edit-btn">Details</button>
                      </Link>
                      <button
                        onClick={() => {
                          deleteEmp(employee._id)
                        }}
                        className="delete-btn"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
