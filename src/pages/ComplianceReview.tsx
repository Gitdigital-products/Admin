import React from 'react'
import { Shield, FileCheck, Clock, AlertCircle, CheckCircle } from 'lucide-react'
import ReviewQueue from '@/components/compliance/ReviewQueue'
import AuditLog from '@/components/compliance/AuditLog'
import PolicyManager from '@/components/compliance/PolicyManager'

const ComplianceReview: React.FC = () => {
  const complianceStats = [
    { label: 'Pending Reviews', value: '24', icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-50' },
    { label: 'Approved Today', value: '156', icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Policy Violations', value: '3', icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50' },
    { label: 'Audit Logs', value: '1.2k', icon: FileCheck, color: 'text-blue-600', bg: 'bg-blue-50' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Compliance Review</h1>
          <p className="mt-1 text-sm text-gray-600">
            Monitor compliance status, review violations, and manage policies
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Run Audit
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Generate Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {complianceStats.map((stat) => (
          <div key={stat.label} className={`${stat.bg} p-4 rounded-lg`}>
            <div className="flex items-center">
              <div className={`${stat.color} p-2 rounded-md`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ReviewQueue />
        </div>
        <div>
          <PolicyManager />
        </div>
      </div>

      <AuditLog />
    </div>
  )
}

export default ComplianceReview
