import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Settings,
  Shield,
  AlertTriangle,
  Users,
  FileCheck,
  Key,
  Menu,
  X
} from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Internal Ops', href: '/internal-ops', icon: Settings },
  { name: 'Compliance Review', href: '/compliance-review', icon: FileCheck },
  { name: 'Overrides', href: '/overrides', icon: Key },
  { name: 'User Management', href: '/internal-ops/users', icon: Users },
  { name: 'Security', href: '/internal-ops/security', icon: Shield },
  { name: 'Alerts', href: '/internal-ops/alerts', icon: AlertTriangle },
]

const Sidebar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div className="lg:hidden">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-900 text-white"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`fixed inset-y-0 left-0 z-40 w-64 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition duration-200 ease-in-out bg-gray-900`}>
        <div className="flex items-center justify-center h-16 px-4 bg-gray-800">
          <h1 className="text-xl font-bold text-white">GitDigital Admin</h1>
        </div>
        <nav className="mt-6 px-2">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `group flex items-center px-2 py-2 text-base font-medium rounded-md mb-1 ${
                  isActive
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`
              }
              onClick={() => setSidebarOpen(false)}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center">
                <span className="text-sm font-medium text-white">AD</span>
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">Admin User</p>
              <p className="text-xs text-gray-400">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
