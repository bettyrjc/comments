import React from 'react'
import RegisterForm from '../components/forms/RegisterForm'
import { Link } from 'react-router-dom'
import AuthLayout from '../layout/AuthLayout'

const Register = () => {
  return (
    <AuthLayout>
      <div className="bg-white w-[400px] h-[600px] rounded-md px-4 py-5 shadow-lg">
        <h1 className='pt-2 mb-1 text-3xl font-bold text-center'>Sign up</h1>
        <p className='mt-1 ml-1 text-xs text-center text-gray-500'>Enter your details below to create your account  <br />and get started 🤩.</p>


        <RegisterForm />
        <div className='mt-5'>
          <span className='mr-2 text-sm text-gray-400'>Already have an account?</span>
          <Link to="/auth/login" className='text-sm text-purple-500 underline'>Login</Link>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Register