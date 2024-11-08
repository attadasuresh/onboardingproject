import React from 'react';

const Training = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Training & Development</h1>

      {/* Training Program Overview Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Training Program Overview</h2>
        <p className="text-gray-700 mb-4">
          We offer a range of training programs designed to help you grow and excel in your role. Below is a list of both mandatory and optional programs:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Onboarding Training: A comprehensive introduction to company policies, values, and processes (Mandatory)</li>
          <li>Leadership Training: For employees seeking managerial positions (Optional)</li>
          <li>Technical Skills Training: Programs tailored to your role (Mandatory)</li>
          <li>Soft Skills Workshops: Focus on communication, teamwork, and other essential skills (Optional)</li>
        </ul>
      </section>

      {/* Training Calendar Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Training Calendar</h2>
        <p className="text-gray-700 mb-4">
          Stay informed about upcoming training sessions, workshops, and seminars:
        </p>
        <div className="bg-blue-50 p-4 rounded">
          <p className="text-lg font-medium mb-2">Upcoming Training Events:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Effective Communication Workshop - Nov 15, 2024</li>
            <li>Technical Skills Bootcamp - Dec 5, 2024</li>
            <li>Leadership Seminar - Jan 10, 2024</li>
          </ul>
        </div>
      </section>

      {/* Learning Resources Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Learning Resources</h2>
        <p className="text-gray-700 mb-4">
          Explore a variety of learning materials to enhance your skills:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Online Course Platform
            </a> - Access curated online courses in your field
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Tutorials and Guides
            </a> - Step-by-step resources to improve your skills
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Learning Library
            </a> - Books.., case studies, and more...
          </li>
        </ul>
      </section>

      {/* Progress Tracker Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Progress Tracker</h2>
        <p className="text-gray-700 mb-4">
          Track your training progress and see what courses you have completed or are still pending.
        </p>
        <div className="bg-blue-50 p-4 rounded">
          <p className="text-lg font-medium mb-2">Current Training Progress:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Onboarding Training - Completed</li>
            <li>Technical Skills Bootcamp - In Progress (50%)</li>
            <li>Leadership Training - Pending</li>
          </ul>
        </div>
      </section>

      {/* Feedback/Survey Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Feedback & Survey</h2>
        <p className="text-gray-700 mb-4">
          We value your feedback! Please let us know how we can improve our training programs.
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="feedback" className="block text-gray-700 font-medium mb-2">
              Share Your Feedback
            </label>
            <textarea
              id="feedback"
              rows="4"
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Your feedback here..."
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
            Submit Feedback
          </button>
        </form>
      </section>
    </div>
  );
}

export default Training;
