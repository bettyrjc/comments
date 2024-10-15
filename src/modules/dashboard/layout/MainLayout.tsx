import React from 'react'

const MainLayout = ({ children }: any) => {
  return (
    < >
      {/* header */}
      <header className="flex items-center justify-between px-10 bg-purple-950 h-14">
        <h1 className='font-bold text-white'>Logo</h1>
        <div>
          <button className="px-4 py-2 text-white border border-white rounded-lg"
            onClick={() => {
              localStorage.removeItem('session')
              window.location.href = '/auth/login'
            }}
          >Logout</button>
        </div>
      </header>
      <main className="w-full p-4 overflow-auto bg-purple-100 hide-scrollbar ">
        {children}
      </main>

    </>
  )
}

export default MainLayout