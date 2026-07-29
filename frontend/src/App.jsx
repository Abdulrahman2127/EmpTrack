import { Welcome } from "./pages/Welcome.jsx"
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import Home from "./pages/Home.jsx"
import CreateEmployee from "./pages/CreateEmployee.jsx"
import Details from "./pages/Details.jsx";
import Update from "./pages/Update.jsx";
function App() {
  

  return (
    <>
      <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/create" element={<CreateEmployee />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/update/:id" element={<Update />} />
    </Routes>

    
    </>
  )
}

export default App
