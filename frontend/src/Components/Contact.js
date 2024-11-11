import React, { useState } from 'react';

const Contact = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl w-full grid gap-8 md:grid-cols-2">
        {/* Nirmaan HR Contact Card */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Nirmaan HR Contact</h2>
          <p className="text-gray-600 mb-2">
            <span className="font-medium">Email:</span> 
            <a href="mailto:hr@nirmaan.com" className="text-blue-500 hover:underline ml-1">hr@nirmaan.com</a>
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-medium">Contact Number:</span> 
            <a href="tel:+1234567890" className="text-blue-500 hover:underline ml-1">+123 456 7890</a>
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Support Hours:</span> 9 AM - 5 PM (Mon - Fri)
          </p>
        </div>

        {/* Support Team Contact Card */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Support Team Contact</h2>
          <p className="text-gray-600 mb-2">
            <span className="font-medium">Email:</span> 
            <a href="mailto:support@nirmaan.com" className="text-blue-500 hover:underline ml-1">support@nirmaan.com</a>
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-medium">Contact Number:</span> 
            <a href="tel:+1234567892" className="text-blue-500 hover:underline ml-1">+123 456 7892</a>
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Availability:</span> 24/7 for urgent issues.
          </p>
        </div>
      </div>

      {/* Chat Bot */}
      <div className="fixed bottom-6 right-6">
        {!isChatOpen && (
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-500 focus:outline-none"
          >
            💬
          </button>
        )}
        {isChatOpen && (
          <div className="bg-white shadow-lg rounded-lg p-4 w-80">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-bold">Chat Bot</h3>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-red-500 hover:text-red-700 font-bold focus:outline-none"
              >
                ✖
              </button>
            </div>
            <div className="h-40 overflow-y-auto bg-gray-100 p-2 rounded mb-2">
              <p className="text-gray-700">Welcome! How can I assist you today?</p>
              {/* Chat messages can be appended here */}
            </div>
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
