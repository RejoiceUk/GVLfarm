import React from 'react';
import latestpostimg1 from "../../../assets/images/lastestpost1.png";
import latestpostimg2 from "../../../assets/images/lastestpost2.png";
import calendarimg from "../../../assets/images/calender.png";
import profile from "../../../assets/images/profile.png";
import ButtonPreviousslide from "../../../assets/images/ButtonPreviousslide.png";
import ButtonNextslide from "../../../assets/images/ButtonNextslide.png";

export default function LatestPosts() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-[10%]">
        {/* heading */}
        <h2 className="text-xl md:text-2xl lg:text-3xl text-center font-bold text-[var(--primary-color)] mb-8">
          Latest posts & articles
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-8">
          {/* First Post */}
          <div className="flex flex-col h-full">
            <div className="overflow-hidden rounded-lg">
              <img 
                src={latestpostimg1} 
                alt="Building Resilient Farms" 
                className="object-cover transition duration-300 hover:scale-105"
              />
            </div>
            <div className="flex items-center gap-4 md:gap-6 mt-4">
              <div className="flex items-center gap-2">
                <img src={calendarimg} alt="Calendar" className="w-4 h-4" />
                <span className="text-[.7rem] text-gray-600">March 28, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={profile} alt="Profile" className="w-4 h-4" />
                <span className="text-[.7rem] text-gray-600">ADMIN</span>
              </div>
            </div>
            <h3 className="mt-3 text-[1.2rem] font-semibold text-[var(--primary-color)]">
              Building Resilient Farms in Changing Climates
            </h3>
          </div>

          {/* Second Post */}
          <div className="flex flex-col h-full">
            <div className="overflow-hidden rounded-lg">
              <img 
                src={latestpostimg2} 
                alt="Empowering Young Farmers" 
                className="w-full h-auto object-cover transition duration-300 hover:scale-105"
              />
            </div>
            <div className="flex items-center gap-4 md:gap-6 mt-4">
              <div className="flex items-center gap-2">
                <img src={calendarimg} alt="Calendar" className="w-4 h-4" />
                <span className="text-[.7rem] text-gray-600">March 28, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={profile} alt="Profile" className="w-4 h-4" />
                <span className="text-[.7rem] text-gray-600">ADMIN</span>
              </div>
            </div>
            <h3 className="mt-3 text-base md:text-lg font-semibold text-[var(--primary-color)]">
              Empowering Young Farmers Through Training & Mentorship
            </h3>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <button className="p-2 rounded-full hover:bg-gray-100 transition duration-200">
            <img src={ButtonPreviousslide} alt="Previous" className="w-8 h-8" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition duration-200">
            <img src={ButtonNextslide} alt="Next" className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}