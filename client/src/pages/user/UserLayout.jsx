import React from 'react'
import { Outlet } from 'react-router-dom'
import UserMenu from '../../components/Layout/UserMenu'

function UserLayout() {
  return (
    <div className='min-h-screen flex bg-gray-50'>
        <UserMenu />
        {/* Page content  */}
        <main className='flex-1 p-6'>
            <Outlet />
        </main>
    </div>
  )
}

export default UserLayout