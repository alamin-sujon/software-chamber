import React from 'react';
import { Code, MessageCircle, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <header className="relative z-10 flex items-center justify-between p-6 md:px-12">
      <div className="flex items-center space-x-2">
        <div className="bg-gradient-to-r from-teal-500 to-teal-400 p-2.5 rounded-lg shadow-lg">
          <Code className="w-5 h-5 text-white" />
        </div>
        <span className="text-white text-xl font-bold tracking-wide">Software Chamber</span>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-2 bg-gray-800/80 hover:bg-gray-700/80 border border-gray-600/30 text-white px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm">
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">Contact Us</span>
        </button>
        <button className="md:hidden p-2 text-white hover:bg-gray-800/50 rounded-lg transition-colors">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;