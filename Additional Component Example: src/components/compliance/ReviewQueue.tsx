import React from 'react'
import { Clock, User, AlertTriangle } from 'lucide-react'

const ReviewQueue: React.FC = () => {
  const reviews = [
    { id: 1, user: 'John Doe', type: 'Access Request', status: 'pending', date: '2024-01-15' },
    { id: 2, user: 'Jane Smith', type: 'Policy Exception', status: 'pending', date: '2024-01-15' },
    { id: 3, user: 'Bob Johnson', type: 'Security Review', status: 'pending', date: '2024-01-14' },
    { id: 4, user: 'Alice Brown', type: 'Compliance Check', status: 'pending', date: '2024-01-14' },
  ]

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Review Queue</h2>
          <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
            {reviews.length} pending
          </span>
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {reviews.map((review) => (
          <div key={review.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <User className="h-5 w-5 text-gray-500" />
                </div>
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">{review.user}</div>
                <div className="text-sm text-gray-500">{review.type}</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">{review.date}</span>
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-yellow-500 mr-1" />
                <span className="text-sm text-yellow-600">Pending</span>
              </div>
              <button className="px-3 py-1 text-sm bg-primary-50 text-primary-700 rounded hover:bg-primary-100">
                Review
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReviewQueue
