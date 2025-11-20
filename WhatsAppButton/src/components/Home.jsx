import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import CodeBox from "../components/CodeBox";

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
    </div>
  );
};

export default Home;
