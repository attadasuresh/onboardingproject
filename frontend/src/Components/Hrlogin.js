import React from 'react';
import { Link } from 'react-router-dom';

const HrLogin = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white p-6">
        <h2 className="text-2xl font-bold mb-4">HR Dashboard</h2>
        <nav>
          <ul className="space-y-3">
            <li>
              <Link to="/employee-overview" className="block hover:bg-blue-600 px-3 py-2 rounded">
                Employee Overview
              </Link>
            </li>
            <li>
              <Link to="/progress-tracking" className="block hover:bg-blue-600 px-3 py-2 rounded">
                Progress Tracking
              </Link>
            </li>
            <li>
              <Link to="/document-management" className="block hover:bg-blue-600 px-3 py-2 rounded">
                Document Management
              </Link>
            </li>
            <li>
              <Link to="/reminder-system" className="block hover:bg-blue-600 px-3 py-2 rounded">
                Reminder System
              </Link>
            </li>
            <li>
              <Link to="/reports" className="block hover:bg-blue-600 px-3 py-2 rounded">
                Reports
              </Link>
            </li>
            <li>
              <Link to="/onboarding-guide" className="block hover:bg-blue-600 px-3 py-2 rounded">
                How to Onboard
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">HR Dashboard</h1>

        {/* Employee Overview Section */}
        <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Employee Overview</h2>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-blue-50">
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Department</th>
                <th className="border px-4 py-2">Joining Date</th>
                <th className="border px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">John Doe</td>
                <td className="border px-4 py-2">Sales</td>
                <td className="border px-4 py-2">Nov 1, 2024</td>
                <td className="border px-4 py-2 text-green-600">Active</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Jane Smith</td>
                <td className="border px-4 py-2">Engineering</td>
                <td className="border px-4 py-2">Oct 15, 2024</td>
                <td className="border px-4 py-2 text-red-600">Pending Documents</td>
              </tr>
              {/* Additional rows can be added here */}
            </tbody>
          </table>
        </section>

        {/* Progress Tracking Section */}
        <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Progress Tracking</h2>
          <p className="text-gray-700">
            Track the progress of each employee’s onboarding, including completed and pending tasks.
          </p>
          <div className="mt-4 bg-gray-200 rounded-full h-4">
            <div className="bg-blue-500 h-4 rounded-full" style={{ width: '70%' }}></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">70% Onboarding Complete</p>
        </section>

        {/* Document Management Section */}
        <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Document Management</h2>
          <p className="text-gray-700">
            Access and manage all employee-submitted documents including KYC, educational qualifications, and signed contracts.
          </p>
        </section>

        {/* Reminder System */}
        <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Reminder System</h2>
          <p className="text-gray-700">
            Get notified about incomplete tasks or missing documents for new hires.
          </p>
          <div className="mt-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">
            <p className="font-bold">Reminder:</p>
            <p>Follow up with Jane Smith regarding pending KYC documents.</p>
          </div>
        </section>

        {/* Reports Section */}
        <section className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Reports</h2>
          <p className="text-gray-700">
            Generate and download reports about employee progress, training completion, and compliance with company policies.
          </p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
            Download Reports
          </button>
        </section>
      </main>
    </div>
  );
}

export default HrLogin;
