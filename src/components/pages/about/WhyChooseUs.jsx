import React from 'react';
import fruits from "../../../assets/images/fruit2.png"

export default function WhyChooseUs() {
    return (
        <div className='px-[10%] pt-[5%] mb-[8%]'>
            <div className='text-[.8rem] grid md:grid-cols-2 gap-10'>
                <div>
                    <h3 className="md:text-[2rem] text-[1.5rem] text-[var(--primary-color)] font-[600] leading-[3rem] px-8 mb-3">Why Choose Us?</h3>
                    <p className='text-[#2A2A2A]'>Gandaria Integrated Farms is the agricultural arm of Gandaria Ventures Limited, dedicated to advancing sustainable farming and food security in Nigeria. Our work spans crop cultivation, livestock production, and agritech solutions—blending
                        tradition with innovation to nourish communities and empower farmers.</p>
                    <p className='text-[#2A2A2A]'>With deep roots in local expertise and a forward-thinking approach, we’re committed to building a resilient food system, one harvest at a time.;</p>
                </div>
                <div>
                    <img src={fruits} alt="farm products" />
                </div>
            </div>


            <div className='grid md:grid-cols-3 gap-12 pt-16'>
                <div className="flex flex-col items-start gap-2 max-w-md">
                    {/* Number indicator */}
                    <div className="relative">
                        <span className="text-8xl font-semibold text-[#F8F7F0] drop-shadow-[1px_1px_0_black]">01</span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full h-1 border-b-2 relative">
                        {/* Progress dot */}
                        <div className="absolute -top-[2px] left-0 w-2 h-2 rounded-full bg-teal-600"></div>
                    </div>
                    <h5 className='text-[1.5rem] text-[var(--primary-color)] py-1 font-[500]'>Sustainable practices</h5>
                    <p className='text-[.8rem] text-[#2A2A2A]'>Corrupti ut consequatur magni minus!
                        Iusto eos consectetur similique minus
                        culpa odio temporibus.</p>
                </div>

                <div className="flex flex-col items-start gap-2 max-w-md">
                    {/* Number indicator */}
                    <div className="relative">
                        <span className="text-8xl font-semibold text-[#F8F7F0] drop-shadow-[1px_1px_0_black]">02</span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full h-1 border-b-2 relative">
                        {/* Progress dot */}
                        <div className="absolute -top-[2px] left-0 w-2 h-2 rounded-full bg-teal-600"></div>
                    </div>
                    <h5 className='text-[1.5rem] text-[var(--primary-color)] py-1 font-[500]'>Skilled and <br /> passionate team</h5>
                    <p className='text-[.8rem] text-[#2A2A2A]'>Corrupti ut consequatur magni minus!
                        Iusto eos consectetur similique minus culpa odio temporibus.</p>
                </div>

                <div className="flex flex-col items-start gap-2 max-w-md">
                    {/* Number indicator */}
                    <div className="relative">
                        <span className="text-8xl font-semibold text-[#F8F7F0] drop-shadow-[1px_1px_0_black]">03</span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full h-1 border-b-2 relative">
                        {/* Progress dot */}
                        <div className="absolute -top-[2px] left-0 w-2 h-2 rounded-full bg-teal-600"></div>
                    </div>
                    <h5 className='text-[1.5rem] text-[var(--primary-color)] py-1 font-[500]'>Focus on quality and transparency</h5>
                    <p className='text-[.8rem] text-[#2A2A2A]'>Corrupti ut consequatur magni minus! Iusto eos consectetur similique minus culpa odio temporibus.</p>
                </div>
            </div>
        </div>
    )
}
