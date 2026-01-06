import React, { useState } from 'react'
import { Users, Server, Activity, Clock, AlertTriangle } from 'lucide-react'
import UserManagement from '@/components/operations/UserManagement'
import SystemLogs from '@/components/operations/SystemLogs'
import DashboardStats from '@/components/operations/DashboardStats'

const InternalOps: React.FC = () => {
  const [activeTab, setActiveTab] = useState('users')

  const tabs = [
    { id: 'users', name: 'User Management', icon: Users },
    { id: 'system', name: 'System Logs', icon: Server },
    { id: 'monitoring', name: 'Monitoring', icon: Activity },
    { id: 'audit', name: 'Audit Trail', icon: Clock },
    { id: 'alerts', name: 'Alerts', icon: AlertTriangle },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Internal Operations</h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage users, monitor system health, and view operational logs
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
            Export Report
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Refresh
          </button>
        </div>
      </div>

      <DashboardStats />

      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                py-2 px-1 border-b-2 font-medium text-sm
                ${activeTab === tab.id
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              <tab.icon className="inline-block w-4 h-4 mr-2" />
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-6">
        {activeTab === 'users' && <UserManagement />}
        {activeTab === 'system' && <SystemLogs />}
        {activeTab === 'monitoring' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">System Monitoring</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-sm text-green-800">CPU Usage</div>
                <div className="text-2xl font-bold text-green-900">24%</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm text-blue-800">Memory</div>
                <div className="text-2xl font-bold text-blue-900">3.2/8 GB</div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="text-sm text-yellow-800">Active Sessions</div>
                <div className="text-2xl font-bold text-yellow-900">142</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default InternalOps
