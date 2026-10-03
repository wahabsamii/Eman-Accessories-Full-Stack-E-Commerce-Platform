import React from 'react'
import AdminMenu from '../../components/Layout/AdminMenu'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <div className='min-h-screen flex bg-gray-50'>
        <AdminMenu />
        {/* Page content  */}
        <main className='flex-1 p-6'>
            <Outlet />
        </main>
    </div>
  )
}

export default AdminLayout