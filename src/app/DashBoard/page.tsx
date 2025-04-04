'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { PieChart, DatabaseIcon, Users, CreditCard, AlertCircle, Settings, LogOut, FileText, Bell } from 'lucide-react'

interface Notification {
  id: number;
  message: string;
  time: string;
  priority: 'high' | 'medium' | 'low';
}

const Dashboard: React.FC = () => {
  const router = useRouter()
  const [activeLoans] = useState<number>(124)
  const [pendingApprovals] = useState<number>(18)
  const [totalUsers] = useState<number>(1562)
  const [fraudAlerts] = useState<number>(3)
  const [notifications] = useState<Notification[]>([
    { id: 1, message: "New loan application #4582 requires review", time: "10 min ago", priority: "high" },
    { id: 2, message: "User verification pending for 7 accounts", time: "25 min ago", priority: "medium" },
    { id: 3, message: "System maintenance scheduled for 02:00 AM", time: "1 hour ago", priority: "low" }
  ])

  const navigateTo = (path: string): void => {
    router.push(path)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="flex justify-between items-center px-6 py-3">
          <div className="flex items-center">
            <PieChart className="h-8 w-8 text-blue-600" />
            <h1 className="font-bold text-2xl ml-2 text-gray-800">Accute Banking Admin Portal</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative">
              <Bell className="h-6 w-6 text-gray-600" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {notifications.length}
              </span>
            </button>
            <div className="flex items-center">
              <div className="bg-blue-600 rounded-full h-8 w-8 flex items-center justify-center text-white font-medium">
                JD
              </div>
              <span className="ml-2 text-gray-700 font-medium">John Doe</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white">
          <nav className="mt-5">
            <div className="px-4 py-3 text-gray-400 text-sm font-medium">MAIN MENU</div>
            <button 
              className="w-full flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => navigateTo('/dashboard')}
            >
              <DatabaseIcon className="h-5 w-5 mr-3" />
              <span>Dashboard</span>
            </button>
            <button 
              className="w-full flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => navigateTo('/components/ViewLoan')}
            >
              <CreditCard className="h-5 w-5 mr-3" />
              <span>Loans Management</span>
            </button>
            <button 
              className="w-full flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => navigateTo('/components/ViewUsers')}
            >
              <Users className="h-5 w-5 mr-3" />
              <span>User Accounts</span>
            </button>
            <button 
              className="w-full flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => navigateTo('/components/FraudAlerts')}
            >
              <AlertCircle className="h-5 w-5 mr-3" />
              <span>Fraud Detection</span>
            </button>
            <button 
              className="w-full flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => navigateTo('/components/Reports')}
            >
              <FileText className="h-5 w-5 mr-3" />
              <span>Reports</span>
            </button>
            <div className="px-4 py-3 text-gray-400 text-sm font-medium mt-4">SETTINGS</div>
            <button 
              className="w-full flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => navigateTo('/components/Settings')}
            >
              <Settings className="h-5 w-5 mr-3" />
              <span>System Settings</span>
            </button>
            <button 
              className="w-full flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => router.push('/login')}
            >
              <LogOut className="h-5 w-5 mr-3" />
              <span>Logout</span>
            </button>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Overview</h2>
            <p className="text-gray-600">Welcome back, Admin. Here&apos;s what&apos;s happening today.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 text-sm">Active Loans</p>
                  <h3 className="text-2xl font-bold text-gray-800">{activeLoans}</h3>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <CreditCard className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="mt-4 text-sm text-green-600">
                +2.5% from last month
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 text-sm">Pending Approvals</p>
                  <h3 className="text-2xl font-bold text-gray-800">{pendingApprovals}</h3>
                </div>
                <div className="bg-yellow-100 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
              <div className="mt-4 text-sm text-yellow-600">
                Requires attention
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 text-sm">Total Users</p>
                  <h3 className="text-2xl font-bold text-gray-800">{totalUsers}</h3>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="mt-4 text-sm text-green-600">
                +12 new today
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 text-sm">Fraud Alerts</p>
                  <h3 className="text-2xl font-bold text-gray-800">{fraudAlerts}</h3>
                </div>
                <div className="bg-red-100 p-3 rounded-full">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
              </div>
              <div className="mt-4 text-sm text-red-600">
                Immediate action needed
              </div>
            </div>
          </div>

          {/* Recent Notifications */}
          <div className="bg-white rounded-lg shadow mb-6">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-800">Recent Notifications</h3>
            </div>
            <div className="p-6">
              <ul className="divide-y divide-gray-200">
                {notifications.map(notification => (
                  <li key={notification.id} className="py-4 flex">
                    <div className={`flex-shrink-0 h-3 w-3 rounded-full mt-1 mr-3 ${
                      notification.priority === 'high' ? 'bg-red-500' : 
                      notification.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800">{notification.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                    <button className="text-sm text-blue-600 hover:text-blue-800">View</button>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-center">
                <button className="text-sm text-blue-600 hover:text-blue-800">View all notifications</button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-800">Quick Actions</h3>
            </div>
            <div className="p-6 flex flex-wrap gap-4">
              <button onClick={() => navigateTo('/components/NewLoan')} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                New Loan Application
              </button>
              <button onClick={() => navigateTo('/components/ViewLoan')} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                View All Loans
              </button>
              <button onClick={() => navigateTo('/components/ViewUsers')} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Manage Users
              </button>
              <button onClick={() => navigateTo('/components/Reports/Generate')} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Generate Reports
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard