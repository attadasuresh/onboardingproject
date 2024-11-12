import React from 'react';
import { Link } from 'react-router-dom';

const Employeelogin = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white p-4">
        <nav className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
          <ul>
            <li>
              <Link to="/employee-profile" className="block py-2 px-3 hover:bg-blue-700 rounded">Employee Profile</Link>
            </li>
            <li>
              <Link to="/hr-policies" className="block py-2 px-3 hover:bg-blue-700 rounded">HR Policies</Link>
            </li>
            <li>
              <Link to="/benefits" className="block py-2 px-3 hover:bg-blue-700 rounded">Benefits</Link>
            </li>
            <li>
              <Link to="/time-off" className="block py-2 px-3 hover:bg-blue-700 rounded">Time Off</Link>
            </li>
            <li>
              <Link to="/training" className="block py-2 px-3 hover:bg-blue-700 rounded">Training</Link>
            </li>
            <li>
              <Link to="/feedback" className="block py-2 px-3 hover:bg-blue-700 rounded">Feedback</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Welcome Message */}
        <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h1 className="text-3xl font-semibold mb-2">Welcome, [Employee Name]</h1>
          <p className="text-gray-600">Role: [Job Title]</p>
          <button className="mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600">
            Update Personal Information
          </button>
        </section>

        {/* Task and Notifications Center */}
        <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Tasks & Notifications</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Complete profile update</li>
            <li>Submit KYC documents</li>
            <li>Mandatory training on workplace safety</li>
            <li>Upcoming company event: [Event Name]</li>
            <li>Submit feedback for the last project</li>
          </ul>
          <button className="mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600">
            View All Tasks
          </button>
        </section>

        {/* Attendance & Timesheet Summary */}
        <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Attendance & Timesheet</h2>
          <p>Hours logged this month: 120</p>
          <button className="mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600">
            View Timesheet
          </button>
        </section>

        {/* Salary and Payroll Details */}
        <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Salary & Payroll</h2>
          <p>Base Salary: $[Amount]</p>
          <p>Bonuses: $[Amount]</p>
          <p>Deductions: $[Amount]</p>
          <button className="mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600">
            View Payslip
          </button>
        </section>
        {/* Feedback and Performance Review */}
        <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Feedback & Performance Reviews</h2>
          <p>View and provide feedback on your performance reviews.</p>
          <button className="mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600">
            View Reviews
          </button>
        </section>
      </main>
    </div>
  );
};

export default Employeelogin;
