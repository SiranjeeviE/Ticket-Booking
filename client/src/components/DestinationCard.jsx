import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon, MapPinIcon } from '@heroicons/react/24/solid';

const DestinationCard = ({ destination }) => {
  const { id, image, title, location, price, rating, reviewCount } = destination;

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white dark:bg-gray-900 text-yellow-500 px-2 py-1 rounded-full text-sm font-semibold flex items-center">
          <StarIcon className="h-4 w-4 mr-1" />
          {rating}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
            <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mt-1">
              <MapPinIcon className="h-4 w-4 mr-1" />
              {location}
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-blue-600 dark:text-blue-400">${price}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">per person</p>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <span>{reviewCount} reviews</span>
          <button className="text-blue-600 dark:text-blue-400 hover:underline">View Details</button>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
