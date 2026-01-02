import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const Testimonial = ({ testimonial }) => {
  const { id, name, avatar, location, rating, comment } = testimonial;
  
  // Create an array of stars based on the rating
  const stars = Array(5).fill(0).map((_, i) => (
    <StarIcon 
      key={i} 
      className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
    />
  ));

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
    >
      <div className="flex items-center mb-4">
        <img 
          src={avatar} 
          alt={name} 
          className="h-12 w-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">{location}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {stars}
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 italic">"{comment}"</p>
    </motion.div>
  );
};

export default Testimonial;
