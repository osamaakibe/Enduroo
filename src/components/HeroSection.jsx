// src/components/HeroSection.jsx

// CHANGE #1: We import the Link component from our router library, not from 'next/link'.
import { Link } from "react-router-dom";

// CHANGE #2: We rename the function to match our file name for better organization.
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* CHANGE #3: Replaced the Next.js <Image> component with a standard HTML <img> tag. */}
      {/* It's placed inside a div to make styling easier. */}
      <div className="absolute inset-0 z-0">
        <img
          src="public\Images\fitsum-admasu-oGv9xIl7DkY-unsplash.jpg"
          alt="Runners in scenic landscape"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Find Your Next Race, <span className="block">Join Your Next Run</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
          Discover local running events and communities across Morocco.
        </p>

        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Primary button - The <Link> tag now comes from react-router-dom */}
          <Link
            to="/races" // In react-router-dom, the prop is 'to' instead of 'href'
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-500/50"
          >
            Explore All Races
          </Link>

          {/* Secondary button - The <Link> tag now comes from react-router-dom */}
          <Link
            to="/clubs" // In react-router-dom, the prop is 'to' instead of 'href'
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg shadow-lg hover:bg-gray-50 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-white/50"
          >
            Discover Running Clubs
          </Link>
        </div>
      </div>

      {/* Scroll indicator - This part works perfectly as is! */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}