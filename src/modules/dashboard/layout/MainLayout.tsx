import React from 'react'
import { HiArrowRightStartOnRectangle } from "react-icons/hi2";
const MainLayout = ({ children }: any) => {
  return (
    < >
      {/* header */}
      <header className="flex items-center justify-between px-10 bg-purple-950 h-14">
        <h1 className='font-bold text-white'>Logo</h1>
        <div>

          <button className="flex items-center gap-1 px-4 py-1 text-white border border-white rounded-lg"
            onClick={() => {
              localStorage.removeItem('session')
              window.location.href = '/auth/login'
            }}
          >
            <HiArrowRightStartOnRectangle />
            <span>Logout</span>
            </button>
        </div>
      </header>
      <main className="w-full p-4 overflow-auto bg-purple-100 hide-scrollbar ">
        {children}
      </main>

    </>
  )
}

export default MainLayout