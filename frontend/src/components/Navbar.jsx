import React from 'react'

const Navbar = () => {
  return (
      <div>
          <nav className="p-4 mb-8 bg-gray-700 shadow-lg shadow-black">
        <div className="container flex items-center justify-between mx-auto">
            <div className="text-lg font-bold text-white">User Management System</div>
            <div className="space-x-4">
                <a href="/" className="text-gray-300 hover:text-white">User Details</a>
                <a href="/adduser" className="text-gray-300 hover:text-white">Add User</a>
                <a href="/userdetails" className="text-gray-300 hover:text-white">Edit user</a>
                {/* <a href="/update/:id" className="text-gray-300 hover:text-white">User Update</a> */}
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar