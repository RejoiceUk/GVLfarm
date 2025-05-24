import React from 'react'
import Button from '../../ui/Button';
import email from "../../../assets/images/email.png";

export default function Contact() {
    return (
        <div className='px-[10%] py-[3%]'>
             <h3 className='text-[1.5rem] text-[var(--primary)] py-8 font-[700]'>Have any Question?  <br /> Get in Touch!</h3>
            <div className='grid md:grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 gap-6 p-4 text-[1.2rem] font-[500] text-[var(--primary-color)]'>
                    <div className='flex flex-col gap-2'>
                        <div className='w-[30px]'>
                            <img src={email} alt="email" />
                        </div>
                        <h3>Email</h3>
                        <p className='text-[#525560] text-[.8rem] font-[400]'> hello@gandaria.biz</p>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <div className='w-[30px]'>
                            <img src={email} alt="email" />
                        </div>
                        <h3>Phone</h3>
                        <p className='text-[#525560] text-[.8rem] font-[400]'>+256 200 955 930</p>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <div className='w-[30px]'>
                            <img src={email} alt="email" />
                        </div>
                        <h3>Office</h3>
                        <p className='text-[#525560] text-[.8rem] font-[400]'>Seven Hills Complex <br /> No. 90 George Akume Way,<br /> Makurdi, Nigeria</p>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <div className='w-[30px]'>
                            <img src={email} alt="email" />
                        </div>
                        <h3>Socials</h3>
                        
                            <div className="flex space-x-4 text-2xl text-[var(--primary-color)] text-[.8rem]">
                                <i className="fab fa-facebook hover:text-blue-800"></i>
                                <i className="fab fa-twitter hover:text-blue-500"></i>
                                <i className="fab fa-instagram hover:text-pink-500"></i>
                                <i className="fab fa-linkedin hover:text-red-600"></i>
                            </div>

                    </div>
                </div>
                {/* form section */}
                <form onSubmit={(e) => { e.preventDefault() }}>
                    <div className="w-full p-4 bg-white">
                        <div className="space-y-4 px-8 py-6">
                            <div>
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="Email"
                                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="6"
                                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
                                    placeholder="your message..."
                                ></textarea>
                            </div>

                            <Button buttonVariant='dark' text='send' className='w-full' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
