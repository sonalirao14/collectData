import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      '.fade-in',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return (
    <>
      <div className={darkMode ? 'dark' : ''}>
        <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-800">
        
          <header className="p-6 bg-gradient-to-r from-blue-400 to-purple-300 dark:from-gray-700 dark:to-gray-900 text-white shadow-lg">
            <div className="flex justify-between items-center">
             
              <button
                className="p-2 border rounded-full bg-gray-800 dark:bg-white text-white dark:text-gray-900 transition-colors duration-300 hover:bg-gray-700 dark:hover:bg-gray-200"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>

            
              <h1 className="text-3xl font-bold text-center flex-1 text-white">
                Kindly fill this form to complete the survey for my assignment
              </h1>

              {/* Empty space to balance header */}
              <div className="w-10"></div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-grow p-4 fade-in bg-transparent">{children}</main>

        
          <footer className="p-6 bg-gradient-to-r from-blue-400 to-purple-300 dark:from-gray-700 dark:to-gray-900 text-white text-center shadow-lg">
            <p className="text-lg font-semibold">© {new Date().getFullYear()} SonaliRao. All rights reserved.</p>
          
          </footer>
        </div>
      </div>
    </>
  );
};

export default Layout;
