import { Route, Routes } from 'react-router-dom'
import NotFound from '../modules/shared/views/NotFound'
import Dashboard from '../modules/dashboard/views/Dashboard'
import Login from '../modules/auth/views/Login'
import Register from '../modules/auth/views/Register'

const Routers = () => {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />

      
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Routers