import React from 'react'

const AuthLayout = ({ children }: any) => {
  return (
    <div className="flex items-center justify-center w-full h-screen p-4 bg-purple-400">
      {children}
    </div>
  )
}

export default AuthLayout