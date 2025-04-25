import React from "react";
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='w-full min-h-screen flex flex-col lg:flex-row justify-center items-center gap-8 p-4 bg-gradient-to-br from-blue-900 to-purple-800 bg-[url("https://plus.unsplash.com/premium_photo-1728983986076-b3ce2963fc3e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
      <div className='lg:w-1/3 w-full max-w-md text-center lg:text-left'>
        <h2 className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-blue-400 mb-4'>
          Join now for VIP perks!
        </h2>
        <p className='text-lg text-white opacity-90'>
          Limited-time offers await—register in seconds and start saving today!
        </p>
      </div>

      {/* Login Form Section */}
      <form className="bg-white/10 backdrop-blur-sm p-5 rounded-xl shadow-lg w-full max-w-md border border-white/20">
        <h1 className="text-3xl text-center pb-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-emerald-900 mb-6">
          Login
        </h1>

        <div className="mb-4">
          <label className="block text-gray-100 mb-2">Name</label>
          <input
            id="name"
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-100 mb-2">Email ID</label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-100 mb-2">Password</label>
          <input
            id="password"
            type="password"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
            placeholder="Enter your password"
            required
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white py-3 rounded-lg font-medium hover:from-pink-500 hover:to-orange-400 transition-all duration-500 shadow-lg hover:shadow-xl"
        >
          Sign In
        </button>

        <p className="text-center text-sm text-gray-300 mt-6">
          Don't have an account?{' '}
          <Link 
            to={'/Singin'} 
            className="text-blue-300 font-semibold hover:text-blue-100 underline transition-colors"
          >
            Register Now
          </Link>
        </p>
        
        <p className="text-center text-xl text-green-400 mt-4">
          Thank you for visiting 💛
        </p>
      </form>
    </div>
  );
};

export default Login;