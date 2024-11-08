import React from 'react';

const Employeelogin = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white p-4">
        <nav className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
          <ul>
            <li>
              <a href="#" className="block py-2 px-3 hover:bg-blue-700 rounded">Employee Profile</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 hover:bg-blue-700 rounded">HR Policies</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 hover:bg-blue-700 rounded">Benefits</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 hover:bg-blue-700 rounded">Time Off</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 hover:bg-blue-700 rounded">Training</a>
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

        {/* Navigation Menu */}
        <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <div className="flex space-x-4">
            <a href="#" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Employee Profile</a>
            <a href="#" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Training</a>
            <a href="#" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Policies</a>
            <a href="#" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Benefits</a>
          </div>
        </section>

        {/* Task and Notifications Center */}
        <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Tasks & Notifications</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Complete profile update</li>
            <li>Submit KYC documents</li>
            <li>Mandatory training on workplace safety</li>
            <li>Upcoming company event: [Event Name]</li>
          </ul>
        </section>

        {/* Attendance & Timesheet Summary */}
        <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Attendance & Timesheet</h2>
          <p>Hours logged this month: 120</p>
          <button className="mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600">View Timesheet</button>
        </section>

        {/* Salary and Payroll Details */}
        <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Salary & Payroll</h2>
          <p>Base Salary: $[Amount]</p>
          <button className="mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600">View Payslip</button>
        </section>

        {/* Company News and Announcements */}
        <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Company News & Announcements</h2>
          <p>New company policies have been announced. Click <a href="#" className="text-blue-700">here</a> to view.</p>
        </section>
      </main>
    </div>
  );
};

export default Employeelogin;
