'use client'

import { Home, Search, ArrowLeft } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="relative mb-4">
          <h1 className="text-[7rem] sm:text-[8rem] lg:text-[9rem] font-bold leading-none">
              404
          </h1>
          <div className="absolute inset-0 blur-3xl opacity-30">
            <div className="w-full h-full bg-gradient-to-r from-gray-500 via-slate-600 to-black/80"></div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Page Not Found
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-md mx-auto">
            Oops! The page you're looking for seems to have wandered off into the digital void.
          </p>
        </div>

        {/* Divider */}
        <div className="mb-10">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto"></div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="group flex items-center gap-2 px-8 py-4 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Home className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="group flex items-center cursor-pointer gap-2 px-8 py-4 bg-slate-800 text-gray-300 font-semibold rounded-lg hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-slate-600 hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </div>

        {/* Search suggestion */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
            <Search className="w-4 h-4" />
            <p>Try searching for what you need from the homepage</p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
      </div>
    </div>
  );
}