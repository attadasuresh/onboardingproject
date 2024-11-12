import React from 'react';
import { Link } from 'react-router-dom';

const HrLogin = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-72 bg-gradient-to-b from-blue-700 to-blue-900 text-white p-6">
        <h2 className="text-2xl font-extrabold mb-4">HR Dashboard</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="/employee-overview" className="block hover:bg-blue-600 px-4 py-3 rounded transition">
                Employee Overview
              </Link>
            </li>
            <li>
              <Link to="/progress-tracking" className="block hover:bg-blue-600 px-4 py-3 rounded transition">
                Progress Tracking
              </Link>
            </li>
            <li>
              <Link to="/document-management" className="block hover:bg-blue-600 px-4 py-3 rounded transition">
                Document Management
              </Link>
            </li>
            <li>
              <Link to="/reminder-system" className="block hover:bg-blue-600 px-4 py-3 rounded transition">
                Reminder System
              </Link>
            </li>
            <li>
              <Link to="/reports" className="block hover:bg-blue-600 px-4 py-3 rounded transition">
                Reports
              </Link>
            </li>
            <li>
              <Link to="/onboarding-guide" className="block hover:bg-blue-600 px-4 py-3 rounded transition">
                How to Onboard
              </Link>
            </li>
            <li>
              <Link to="/analytics" className="block hover:bg-blue-600 px-4 py-3 rounded transition">
                Analytics
              </Link>
            </li>
            <li>
              <Link to="/feedback-surveys" className="block hover:bg-blue-600 px-4 py-3 rounded transition">
                Employee Feedback
              </Link>
            </li>
            <li>
              <Link to="/training" className="block hover:bg-blue-600 px-4 py-3 rounded transition">
                Training & Development
              </Link>
            </li>
            <li>
              <Link to="/support-requests" className="block hover:bg-blue-600 px-4 py-3 rounded transition">
                Support Requests
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-8">HR Dashboard Overview</h1>

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
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">John Doe</td>
                <td className="border px-4 py-2">Sales</td>
                <td className="border px-4 py-2">Nov 1, 2024</td>
                <td className="border px-4 py-2 text-green-600">Active</td>
                <td className="border px-4 py-2">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                    View Profile
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Jane Smith</td>
                <td className="border px-4 py-2">Engineering</td>
                <td className="border px-4 py-2">Oct 15, 2024</td>
                <td className="border px-4 py-2 text-red-600">Pending Documents</td>
                <td className="border px-4 py-2">
                  <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                    Follow Up
                  </button>
                </td>
              </tr>
              {/* Additional rows can be added here */}
            </tbody>
          </table>
        </section>

        {/* New Feature Sections */}
        {/* Analytics & Metrics */}
        <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Analytics </h2>
          <p className="text-gray-700">
            Analyze key metrics such as onboarding efficiency, task completion rates, and employee feedback.
          </p>
          <div className="flex space-x-4 mt-4">
            <div className="bg-blue-200 p-4 rounded-lg flex-1 text-center">
              <p className="text-lg font-semibold">80%</p>
              <p className="text-sm">Onboarding Completion</p>
            </div>
            <div className="bg-green-200 p-4 rounded-lg flex-1 text-center">
              <p className="text-lg font-semibold">25</p>
              <p className="text-sm">Pending Documents</p>
            </div>
            <div className="bg-yellow-200 p-4 rounded-lg flex-1 text-center">
              <p className="text-lg font-semibold">15</p>
              <p className="text-sm">Feedback Responses</p>
            </div>
          </div>
        </section>

        {/* Training & Development */}
        <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Training & Development</h2>
          <p className="text-gray-700">
            Manage training schedules and monitor employee development progress.
          </p>
          <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500">
            Assign New Training
          </button>
        </section>

        {/* Feedback and Surveys */}
        <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Employee Feedback & Surveys</h2>
          <p className="text-gray-700">
            Collect feedback from employees to enhance the onboarding process and overall HR experience.
          </p>
          <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-500">
            Launch Survey
          </button>
        </section>

        {/* Support Requests */}
        <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Support Requests</h2>
          <p className="text-gray-700">
            Manage and respond to support requests from new employees.
          </p>
          <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500">
            View Requests
          </button>
        </section>
      </main>
    </div>
  );
}

export default HrLogin;
