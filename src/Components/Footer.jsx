import React from "react";

const Footer = () => {
  return (
    <div className="">
      <footer className="bg-gray-900 text-white pt-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
      
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Translate DailyPulse</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Zapier Integration</a></li>
            <li><a href="#" className="hover:text-white transition-colors">IFTTT Integration</a></li>
          </ul>
        </div>

   
        <div>
          <h3 className="font-semibold mb-3">Social</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
          </ul>
        </div>

    
        <div>
          <h3 className="font-semibold mb-3">Learn More</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Habit Tracking Apps Review</a></li>
            <li><a href="#" className="hover:text-white transition-colors">PolyPlan: Daily Planner</a></li>
          </ul>
        </div>


        <div>
          <h3 className="font-semibold mb-3">More</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Translate DailyPulse</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 py-6 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm space-y-3 md:space-y-0">
        <span>© 2025 DailyPulse</span>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="hover:text-white transition-colors">Japanese</a>
          <a href="#" className="hover:text-white transition-colors">German</a>
          <a href="#" className="hover:text-white transition-colors">Spanish</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;






