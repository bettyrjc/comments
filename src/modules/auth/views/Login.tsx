import React from 'react'
import AuthLayout from '../layout/AuthLayout'
import LoginForm from '../components/forms/LoginForm'
import { Link } from 'react-router-dom'
import { USER } from '../../../assets/validation';
import toast from 'react-hot-toast';

import { useNavigate } from 'react-router-dom';
interface FormValues {
  email: string;
  password: string;
}


const Login = () => {
const navigate = useNavigate();
  const onSubmit = (data: FormValues) => {
    if (data.email !== USER.email || data.password !== USER.password) {
      toast.error('Invalid email or password');
      return;
    }
    localStorage.setItem('session', data.email);
    navigate('/');
  };

  return (
    <AuthLayout>
      <div className="bg-white w-[400px] h-[450px] rounded-md px-4 py-5 shadow-lg">
        <h1 className='pt-2 mb-1 text-3xl font-bold text-center'>Welcome back</h1>
        <p className='ml-1 text-xs text-center text-gray-500'>Glad to see you again 🙂‍↔️</p>
        <p className='mb-4 ml-1 text-xs text-center text-gray-500'>Login to your account below</p>


        <LoginForm onSubmit={onSubmit} />
        <div className='mt-5'>
          <span className='mr-2 text-sm text-gray-400'>Don't have an account?</span>
          <Link to="/auth/register" className='text-sm text-purple-500 underline'>Register</Link>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Login