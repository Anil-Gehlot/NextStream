import React from 'react';
import not_found from "../"
const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

    <img src='not_found.png'/>

      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-500 mt-2">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition duration-300"
      >
        Go Back to Home
      </a>
    </div>
  );
};

export default Error;

