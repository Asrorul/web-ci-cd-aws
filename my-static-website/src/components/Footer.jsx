import React from 'react';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container mx-auto px-6">
        <div className="footer-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="footer-section">
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">A modern static website built with React and love.</p>
          </div>
          <div className="footer-section">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">Email: info@mywebsite.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
          <div className="footer-section">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
            </div>
          </div>
        </div>
        <div className="copyright border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 MyWebsite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
