import React from 'react';
import Featured from '../components/Featured';
import PropertyType from '../components/PropertyType';
import Search from '../components/Search';
import bg5 from '../assets/bg5.jpg';

const Home = () => {
  return (
    <div className="flex flex-col gap-12 bg-white dark:bg-gray-900 pb-12 transition-colors">
      {/* Hero Section */}
      <div className="relative">
        <div className="h-[500px] w-full relative">
          <img
            src={bg5}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="text-xl text-white mb-8 drop-shadow-md max-w-2xl">
              Get rewarded for your travels – unlock instant savings of 10% or more with a free ExploreEase account
            </p>
            {/* Search Bar overlaps the bottom of hero */}
          </div>
        </div>

        {/* Search Component container - positioned to overlap */}
        <div className="relative">
          <div className="max-w-5xl mx-auto px-4 relative -mt-8">
            <Search />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-12 flex flex-col gap-16">
        <Featured />
        <PropertyType />

        {/* Email Subscription / Newsletter */}
        <div className="bg-primary-700 text-white py-12 text-center mt-8">
          <h1 className="text-3xl font-bold mb-2">Save time, save money!</h1>
          <span className="block mb-6 text-gray-200">Sign up and we'll send the best deals to you</span>
          <div className="flex justify-center gap-3 max-w-xl mx-auto px-4">
            <input
              type="text"
              placeholder="Your Email"
              className="p-3 w-3/4 rounded-md text-gray-800 focus:outline-none"
            />
            <button className="bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-2 px-6 rounded-md transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;