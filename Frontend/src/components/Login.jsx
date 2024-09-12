import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const predefinedEmail = 'swarnendumaity633@gmail.com';
    const predefinedPassword = '123';

    if (email === predefinedEmail && password === predefinedPassword) {
      navigate('/tulsi'); 
    } else {
      setError('Incorrect email or password.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-green-800">Welcome to Green Remedy</h2>

        {error && (
          <div className="text-red-600 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600  bg-white text-green-700"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 bg-white text-green-700"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white p-2 rounded-md hover:bg-green-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
