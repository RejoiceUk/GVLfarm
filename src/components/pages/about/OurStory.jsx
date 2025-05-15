import React from 'react';
import missionicon from "../../../assets/images/missionicon.png";
import visicon from "../../../assets/images/visionicon.png";
import valueicon from "../../../assets/images/valueicon.png";

export default function OurStory() {
    return (
        <div className='px-[10%] py-[3%]'>
            <div className='text-center'>
                <h3 className="md:text-[2rem] text-[1.5rem] text-[var(--primary-color)] font-[600] leading-[3rem] px-8 mb-3">Our Stories</h3>
                <p className='text-[#2A2A2A] '>Gandaria Integrated Farms was founded as part of Gandaria Ventures Limited’s vision
                    to foster agricultural innovation in Nigeria. From humble beginnings to a thriving modern
                    farm, our goal has always been to nurture the land, empower farmers, and feed communities sustainably.
                    Every seed we plant is a step toward a healthier, more food-secure future.</p>
            </div>

            <div className='grid md:grid-cols-3 gap-8 text-center font-[400] text-[var(--primary-color)] font-[3rem] py-[10%] md:py-[7%]'>
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <div className='w-[40px]'>
                        <img src={missionicon} alt="mission" />
                    </div>
                    
                        <h5>Mission</h5>
                        <p className='text-[#2A2A2A] text-[.7rem]'>To produce high-quality agricultural products while promoting sustainable farming practices and empowering rural communities.</p>
                    
                </div>

                <div className='flex flex-col gap-2 items-center justify-center'>
                    <div className='w-[40px]'>
                        <img src={visicon} alt="mission" />
                    </div>
                    
                        <h5>Vision</h5>
                        <p className='text-[#2A2A2A] text-[.7rem]'>To be a leading force in transforming agriculture through innovation,jo environmental stewardship, and community development.</p>
                    
                </div>

                <div className='flex flex-col gap-2 items-center justify-center'>
                    <div className='w-[40px]'>
                        <img src={valueicon} alt="mission" />
                    </div>
                    
                        <h5>Mission.</h5>
                        <ul className='text-[#2A2A2A] text-left list-disc text-[.7rem]'>
                            <li>Sustainability</li>
                            <li>Innovation</li>
                            <li>Community Empowerment</li>
                            <li>Quality and Integrity</li>
                        </ul>
                    
                </div>
            </div>
        </div>
    )
}
