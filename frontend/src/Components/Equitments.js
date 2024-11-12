import React from 'react';

const Equitments = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Employee Onboarding Kit</h1>
      <p className="text-gray-600 mb-8">
        Welcome to the company! As part of your onboarding, we are providing essential tools and resources to help you get started smoothly in your new role. Here’s what you can expect in your onboarding kit:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Equipment Cards */}
        <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">Laptop/Workstation</h3>
          <p className="text-gray-700">
            A high-performance laptop or desktop tailored to your work requirements. Comes with all necessary software pre-installed.
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">Office Supplies</h3>
          <p className="text-gray-700">
            Basic office supplies including notebooks, pens, sticky notes, and other materials needed for daily tasks.
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">Access Cards & ID Badge</h3>
          <p className="text-gray-700">
            A company access card for building entry and an ID badge for identification.
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">Software Tools & Licenses</h3>
          <p className="text-gray-700">
            Access to essential software tools like email clients, communication platforms (e.g., Slack, Teams), and project management tools.
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">Company Handbook</h3>
          <p className="text-gray-700">
            A comprehensive guide that includes the company’s policies, values, code of conduct, and procedures.
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">Welcome Guide</h3>
          <p className="text-gray-700">
            A guide to help you understand the company culture, teams, key contacts, and FAQs for new employees.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Equitments;
