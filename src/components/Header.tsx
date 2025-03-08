import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
          >
            Rabiya Basri
          </motion.div>
          <nav className="hidden md:flex space-x-8">
            {['About', 'Projects', 'Blog', 'Contact'].map((item) => (
              <motion.a
                key={item}
                whileHover={{ scale: 1.1 }}
                className="text-gray-700 hover:text-purple-600 transition-colors"
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </motion.a>
            ))}
          </nav>
          <div className="flex space-x-4">
            {[
              { Icon: Github, href: 'https://github.com/rabiya-basri' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/rabiya-basri-55b368186/' },
              { Icon: Mail, href: 'mailto:example@gmail.com' }
            ].map(({ Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-600 hover:text-purple-600"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
};