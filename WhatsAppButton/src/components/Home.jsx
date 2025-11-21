import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import CodeBox from "../components/CodeBox";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";


const Home = () => {
  const [data, setData] = useState({
    phone: "",
    message: "Hello! I am contacting you!",
    label: "WhatsApp",
    color: "#16BE45",
    size: "medium",
    shape: "pill",
    position: "inline",
    newTab: false,
  });

  const link = `https://wa.me/${data.phone}?text=${encodeURIComponent(
    data.message
  )}`;

  return (
    <div className="flex flex-col px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="text-center py-12 px-4 sm:px-6 lg:px-8 bg-transparent">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Free WhatsApp Chat Button & WhatsApp Chat Widget
        </h1>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
          Create a beautiful WhatsApp Live Chat Widget and add it to your website for free
          using our simple WhatsApp button generator.
        </p>
      </section>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6 w-full h-full mt-6">
        {/* Sidebar */}
        <div className="w-full md:w-2/3 h-full p-2 md:p-4">
          <Sidebar data={data} setData={setData} />
        </div>

        {/* CodeBox */}
        <div className="w-full md:w-1/3 h-full p-2 md:p-4">
          <CodeBox data={data} link={link} />
        </div>
      </div>
      {/* Footer */}
<footer className="bg-gray-100 text-gray-700 mt-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
    
    <p className="text-sm sm:text-base text-center sm:text-left">
      © {new Date().getFullYear()} WhatsApp Widget Generator. All rights reserved.
    </p>

    <div className="flex flex-col sm:flex-row items-center gap-4">
      
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm sm:text-base">
        <a href="#" className="hover:text-green-600 transition-colors">Privacy Policy</a>
        <span className="hidden sm:inline">|</span>
        <a href="#" className="hover:text-green-600 transition-colors">Terms of Service</a>
        <span className="hidden sm:inline">|</span>
        <a href="#" className="hover:text-green-600 transition-colors">Contact</a>
      </div>

      <div className="flex gap-4 mt-2 sm:mt-0">
        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
          <FaFacebookF />
        </a>
        <a href="#" className="text-gray-700 hover:text-sky-400 transition-colors">
          <FaTwitter />
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-700 transition-colors">
          <FaLinkedinIn />
        </a>
        <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">
          <FaInstagram />
        </a>
      </div>
    </div>
  </div>
</footer>


      
    </div>
  );
};

export default Home;

