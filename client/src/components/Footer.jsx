import React from 'react';
import { motion } from 'framer-motion';
import { 
  FacebookIcon, 
  TwitterIcon, 
  InstagramIcon, 
  LinkedinIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Explore',
      links: [
        { name: 'Destinations', href: '/destinations' },
        { name: 'Tours', href: '/tours' },
        { name: 'Packages', href: '/packages' },
        { name: 'Special Offers', href: '/offers' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'FAQs', href: '/faqs' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: FacebookIcon, href: '#' },
    { name: 'Twitter', icon: TwitterIcon, href: '#' },
    { name: 'Instagram', icon: InstagramIcon, href: '#' },
    { name: 'LinkedIn', icon: LinkedinIcon, href: '#' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand Info */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-2xl font-bold text-white">ExploreEase</h3>
            <p className="text-gray-400">
              Your trusted travel companion for unforgettable journeys and experiences around the globe.
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ y: -3 }}
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <motion.div key={section.title} variants={item} className="space-y-4">
              <h4 className="text-white font-semibold text-lg">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div variants={item} className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                <span>123 Travel Street, Wanderlust City, 12345</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <span>info@exploreease.com</span>
              </li>
              <li className="flex items-center">
                <ClockIcon className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <span>Mon - Fri: 9:00 - 18:00</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm"
        >
          <p>© {currentYear} ExploreEase. All rights reserved.</p>
          <p className="mt-2">
            Made with ❤️ by the ExploreEase Team
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
