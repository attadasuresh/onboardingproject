import React, { useState } from 'react';

const EmployeeProfile = () => {
    const [emailStep, setEmailStep] = useState(1);
    const [formData, setFormData] = useState({
      email: '',
      password: '',
      twoFactorCode: '',
    });
  
    const handleNextStep = () => setEmailStep(prev => prev + 1);
    const handlePrevStep = () => setEmailStep(prev => (prev > 1 ? prev - 1 : prev));
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  return (
    <>
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10"> Register Now</h1>

      {/* Personal Details Form */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">Personal Details</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 mb-2 font-medium">Name</label>
              <input type="text" className="w-full border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" />
            </div>
            <div>
              <label className="block text-gray-600 mb-2 font-medium">Contact Information</label>
              <input type="text" className="w-full border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" />
            </div>
            <div>
              <label className="block text-gray-600 mb-2 font-medium">Address</label>
              <input type="text" className="w-full border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" />
            </div>
            <div>
              <label className="block text-gray-600 mb-2 font-medium">Date of Birth</label>
              <input type="date" className="w-full border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" />
            </div>
            <div>
              <label className="block text-gray-600 mb-2 font-medium">Marital Status</label>
              <select className="w-full border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200">
                <option value="">Select</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </form>
      </section>

      {/* Profile Photo Upload */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">Profile Photo</h2>
        <input type="file" className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer focus:outline-none transition hover:border-blue-400" />
      </section>
      <section className="bg-white shadow-lg rounded-lg p-8 mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">Employment Details</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 mb-2 font-medium">Job Title</label>
              <input type="text" className="w-full border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" />
            </div>
            <div>
              <label className="block text-gray-600 mb-2 font-medium">Department</label>
              <input type="text" className="w-full border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" />
            </div>
            <div>
              <label className="block text-gray-600 mb-2 font-medium">Supervisor</label>
              <input type="text" className="w-full border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" />
            </div>
            <div>
              <label className="block text-gray-600 mb-2 font-medium">Start Date</label>
              <input type="date" className="w-full border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" />
            </div>
            <div>
              <label className="block text-gray-600 mb-2 font-medium">Salary Details</label>
              <input type="text" className="w-full border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" />
            </div>
          </div>
        </form>
      </section>

      {/* KYC Details */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">KYC Details</h2>
        <input type="file" multiple className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer focus:outline-none transition hover:border-blue-400" />
        <p className="text-sm text-gray-500 mt-2">Upload government-issued IDs, passport, etc.</p>
      </section>

      {/* Education Details */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">Education Details</h2>
        <input type="file" multiple className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer focus:outline-none transition hover:border-blue-400" />
        <p className="text-sm text-gray-500 mt-2">Upload educational documents like degrees and certificates.</p>
      </section>

      {/* Employment History */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">Employment History</h2>
        <form className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-2 font-medium">Previous Company</label>
              <input type="text" className="w-full border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" />
            </div>
            <div>
              <label className="block text-gray-600 mb-2 font-medium">Job Role</label>
              <input type="text" className="w-full border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" />
            </div>
            <div>
              <label className="block text-gray-600 mb-2 font-medium">Dates of Employment</label>
              <input type="text" className="w-full border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" />
            </div>
          </div>
        </form>
      </section>     
    </div>
    

    
    
    
    
    </>
  );
}

export default EmployeeProfile;
