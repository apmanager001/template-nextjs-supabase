import React from 'react'
import { AlertTriangle, Home } from 'lucide-react';

export const runtime = "edge";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <AlertTriangle size={64} className="text-red-600 mb-4" />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
      <p className="text-lg text-gray-600 mb-4 mx-10 text-center">
        Oops! The page you were looking for doesn't exist.
      </p>
      <p className="text-gray-500 mb-6 mx-10 text-center">
        It seems you took a wrong turn somewhere. Let's get you back on track!
      </p>
      <a href="/" className="flex items-center text-blue-500 hover:underline">
        <Home size={20} className="mr-2" />
        Go back to Home
      </a>
    </div>
  );
}

export default NotFound