import React, { useState, useEffect } from 'react';
import bg1 from "../../../assets/images/bg1.png";
import bg2 from "../../../assets/images/covervideo.png";
import bg3 from "../../../assets/images/fruits.png";
import next from "../../../assets/images/next.png";
import prev from "../../../assets/images/prev.png";
import farming from "../../../assets/images/farming.png";
import livestock from "../../../assets/images/livestock.png";
import research from "../../../assets/images/traningandresearch.png";
import agritech from "../../../assets/images/agritech.png";
import Button from '../../ui/Button';
import { NavLink } from 'react-router-dom';

const backgrounds = [bg1, bg2, bg3];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval); // Cleanup
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? backgrounds.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === backgrounds.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className='flex flex-col'>
      <div
        className="pt-6 h-[94.4vh] bg-no-repeat bg-center bg-cover text-white flex justify-center items-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${backgrounds[currentIndex]})` }}
      >
        <div className='text-center'>
          <h1 className='md:text-[3rem] text-[2rem] font-[700] leading-[3rem] mb-2'>
            Feeding the Future, Sustainably
          </h1>
          <p className='md:text-[.9rem] text-[.7rem] w-md'>
            From seed to harvest, we cultivate quality with a commitment to sustainability <br />
            and innovation in agriculture.
          </p>

          <div className='flex gap-6 justify-center mt-10'>
            <NavLink to="/product"> <Button buttonVariant='transparent' text='Explore Our Farm' /></NavLink>
             <NavLink to="/contact"><Button buttonVariant='white' text='Contact Us' /></NavLink>
          </div>

          <div className='flex gap-6 justify-center pt-20'>
            <img src={prev} alt="prev" onClick={handlePrev} className='cursor-pointer w-6' />
            <img src={next} alt="next" onClick={handleNext} className='cursor-pointer w-6' />
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className='bg-[#E3E3E3] text-[#404A3D] text-[1rem] font-[600] justify-center grid md:grid-cols-4 grid-cols-2 gap-6 px-[10%] py-[3%]'>
        {[{img: farming, label: "Crop Farming"},
          {img: livestock, label: "Livestock"},
          {img: agritech, label: "Agritech"},
          {img: research, label: "Training & Research"}].map((item, idx) => (
          <div key={idx} className='bg-white rounded-lg items-center shadow py-12 px-5 flex flex-row gap-4'>
            <div className='w-[40px]'>
              <img src={item.img} alt={item.label} className='w-full' />
            </div>
            <div>
              <p>{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
