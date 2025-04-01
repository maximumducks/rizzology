"use client"

import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="w-full min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
          Welcome to CodeGuide Pro
        </h1>
        <p className="text-lg text-center max-w-2xl mb-8">
          yo yo yoerwrewry yo
        </p>
        <div className="flex gap-4">
          <Link 
            href="/sign-in"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            Sign In
          </Link>
          <Link 
            href="/sign-up"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-blue-600 bg-white border-2 border-blue-600 rounded-md shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}
