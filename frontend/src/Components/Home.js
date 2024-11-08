import React from 'react';

const Home = () => {
  return (
    <>
      <div className="p-6 bg-gray-50 min-h-screen">
        {/* Welcome Message */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-8 text-center">
          <h1 className="text-2xl font-bold mb-2">Welcome to Our Company</h1>
          <p className="text-gray-600">
            We are thrilled to have you on board! Learn more about our values and the process to make your joining journey smooth and successful.
          </p>
        </section>

        {/* Progress Overview */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Onboarding Progress</h2>
          <div className="w-full bg-gray-300 rounded-full h-4 mb-4">
            <div className="bg-blue-500 h-4 rounded-full" style={{ width: '60%' }}></div>
          </div>
          <ul className="list-disc pl-5 space-y-2">
            <li>KYC Completed</li>
            <li>Profile Setup</li>
            <li>Training Session Scheduled</li>
            <li>IT Setup Pending</li>
          </ul>
        </section>

        {/* Induction Page */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Induction Program</h2>
          
          {/* About Nirmaan */}
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">About Nirmaan</h3>
            <p className="text-gray-600">
              Learn about our mission, values, and goals. We are committed to fostering a culture of excellence and inclusivity.
            </p>
          </div>
          
          {/* Company Policies */}
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">Company Policies</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-blue-500 hover:underline">HR Manual</a></li>
              <li><a href="#" className="text-blue-500 hover:underline">Code of Conduct</a></li>
              <li><a href="#" className="text-blue-500 hover:underline">Working Hours</a></li>
              <li><a href="#" className="text-blue-500 hover:underline">Leave Policies</a></li>
            </ul>
          </div>
          
          {/* POSH Policy */}
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">POSH Policy</h3>
            <p className="text-gray-600">
              Our Prevention of Sexual Harassment (POSH) policy ensures a safe workplace, outlining employee rights and safety protocols.
            </p>
          </div>
          
          {/* Induction Video */}
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">Induction Video</h3>
            <div className="w-full aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">[Video Placeholder]</p>
            </div>
          </div>
          
          {/* Important Documents */}
          <div>
            <h3 className="text-lg font-medium mb-2">Important Documents</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="#" className="text-blue-500 hover:underline">Company Manuals</a></li>
              <li><a href="#" className="text-blue-500 hover:underline">Employee Benefits Guide</a></li>
              <li><a href="#" className="text-blue-500 hover:underline">POSH Training Documents</a></li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
