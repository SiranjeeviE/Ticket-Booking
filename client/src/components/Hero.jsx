import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, UserIcon, MapPinIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const Hero = () => {
  const [searchInput, setSearchInput] = useState('');
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(new Date().setDate(new Date().getDate() + 7)),
      key: 'selection'
    }
  ]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [guests, setGuests] = useState(2);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const searchButton = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.03,
      boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4), 0 10px 10px -5px rgba(59, 130, 246, 0.1)'
    },
    tap: { scale: 0.98 }
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-700/20"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: { duration: 1.5 }
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center"
        >
          <motion.h1 
            variants={item}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
          >
            Discover Amazing Places
          </motion.h1>
          
          <motion.p 
            variants={item}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12"
          >
            Find and book the best travel experiences around the world
          </motion.p>

          {/* Search Box */}
          <motion.div 
            variants={item}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-4 max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPinIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Where are you going?"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CalendarIcon className="h-5 w-5 text-gray-400" />
                </div>
                <button 
                  onClick={() => setShowDatePicker(!showDatePicker)}
                  className="w-full text-left pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {dateRange[0].startDate.toLocaleDateString()} - {dateRange[0].endDate.toLocaleDateString()}
                </button>
                {showDatePicker && (
                  <div className="absolute z-10 mt-2">
                    <DateRange
                      editableDateInputs={true}
                      onChange={item => setDateRange([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={dateRange}
                      className="border border-gray-200 rounded-lg shadow-lg"
                    />
                  </div>
                )}
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  className="appearance-none w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
              
              <motion.button
                variants={searchButton}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
                <span>Search</span>
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            variants={item}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            {['Beach', 'Mountain', 'City', 'Adventure', 'Luxury'].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: 0.5 + (index * 0.1),
                    type: 'spring',
                    stiffness: 100
                  }
                }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium cursor-pointer hover:bg-white/20 transition-colors"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated wave divider */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full overflow-hidden"
        initial={{ y: 30, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1,
          transition: { 
            delay: 0.8,
            duration: 1
          }
        }}
      >
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-16 md:h-24"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512,50,578,50c54.79,0,112.84-8.19,172-25.29,72.16-20.53,144.41-58.71,224-58.71V120H0Z" 
            fill="#ffffff" 
            opacity="0.25"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,141.56,70.37,25.85,43.41,30.5,97.8,30.5,102.32V120H0Z" 
            fill="#ffffff" 
            opacity="0.5"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,86c57.19-8.08,112.3-36.29,172.28-52.5,72.2-19.58,150.64-26.5,176.52-28.5V120H0Z" 
            fill="#ffffff"
          ></path>
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero;
