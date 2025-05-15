import React from 'react';
import bgimage from "../../assets/images/bg1.png";


export default function BackgroundImg({ description, heading }) {
    return (
        <div className='flex flex-col'>
            <div
                className="pt-6 h-[50vh] bg-no-repeat bg-center bg-cover text-center text-[white] flex justify-center items-center"
                style={{ backgroundImage: `url(${bgimage})` }}>
                <div className='px-[10%] py-[3%] mb-10'>
                    <h2 className='md:text-[2rem] text-[1.5rem] font-[700] leading-[3rem] px-8 mb-2'>{heading}</h2>
                    <p className='md:text-[.9rem] text-[.7rem] w-md'>{description}</p>
                </div>
            </div>
        </div>
    )
}
