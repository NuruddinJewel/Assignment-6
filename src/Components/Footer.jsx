import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-gray-400 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Section - 5 columns total */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8 mb-12">
          
          {/* Brand and Description  */}
          <div className="lg:col-span-2">
            <h2 className="text-white text-3xl font-bold mb-4 tracking-tight">
              DigiTools
            </h2>
            <p className="max-w-md leading-relaxed text-gray-400 text-base">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-white text-base font-semibold mb-4 tracking-wide">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Templates</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Integrations</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white text-base font-semibold mb-4 tracking-wide">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Press</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white text-base font-semibold mb-4 tracking-wide">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Social Links Column  */}
          <div>
            <h3 className="text-white text-base font-semibold mb-4 tracking-wide">Social Links</h3>
            <div className="flex gap-2">
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center"
                aria-label="Instagram"
              >
                <FaInstagram size={16} className="text-[#0B1120]" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center"
                aria-label="Facebook"
              >
                <FaFacebookF size={14} className="text-[#0B1120]" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center"
                aria-label="X (Twitter)"
              >
                <FaXTwitter size={14} className="text-[#0B1120]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;