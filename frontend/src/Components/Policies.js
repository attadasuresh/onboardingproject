import React from 'react';

const Policies = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Benefits & Policies</h1>

      {/* Salary Structure Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Salary Structure</h2>
        <p className="text-gray-700 mb-4">
          Get a detailed breakdown of your salary, including your base salary, bonuses, and any allowances. 
          Here is a typical salary structure:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Base Salary: The core amount paid monthly</li>
          <li>Bonuses: Performance-based rewards for outstanding contributions</li>
          <li>Allowances: Special allowances for travel, meals, and housing</li>
        </ul>
      </section>

      {/* Leave Policies Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Leave Policies</h2>
        <p className="text-gray-700 mb-4">
          Our leave policies are designed to provide employees with flexibility and a healthy work-life balance. Here are some key leave benefits:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Vacation Leave: 20 days of paid annual leave</li>
          <li>Sick Leave: Up to 10 days of paid sick leave per year</li>
          <li>Public Holidays: Observance of national holidays</li>
          <li>Parental Leave: Paid maternity and paternity leave</li>
        </ul>
      </section>

      {/* Health Insurance & Retirement Plans Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Health Insurance & Retirement Plans</h2>
        <p className="text-gray-700 mb-4">
          We offer comprehensive health insurance coverage and retirement savings plans to ensure our employees' well-being and future financial security.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Health Insurance Plans: Access to a range of health plans for you and your family</li>
          <li>Retirement Savings Options: Contributory pension and retirement funds</li>
          <li>Other Benefits: Dental coverage, mental health support, and wellness programs</li>
        </ul>
      </section>

      {/* Additional Content Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Other Company Policies</h2>
        <p className="text-gray-700 mb-4">
          In addition to our core benefits, we have several policies aimed at promoting a positive and inclusive work culture:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Work-from-Home Policy: Flexible remote work options</li>
          <li>Professional Development: Support for skill training and education</li>
          <li>Code of Conduct: Commitment to ethical behavior and respect for all employees</li>
        </ul>
      </section>
    </div>
  );
}

export default Policies;
