import React from 'react';
import logo from "../../assets/images/logo.png";
import { NavLink } from 'react-router-dom';


export default function Footer() {
    return (
        <footer className='px-[10%] pt-[8%] md:pt-[3%] pb-[3%] border border-t-1 bg-white'>
            <div>
                <div className='grid md:grid-cols-12 gap-4 text-[#70798D] text-[.7rem]'>

                    <div className="md:col-span-3">
                        <div>
                            <img src={logo} alt="fasteslogo" className='w-[80px] pb-2' />
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <p className="hover:text-[var(--primary-color)]">
                                        Gandaria Integrated Farms is committed <br /> to sustainable agriculture, food security, <br /> and community empowerment.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="md:text-left md:col-span-2">
                        <ul className="flex flex-col md:pr-10 md:gap-[1vw]">
                            <h5 className='font-[600] text-[var(--primary-color)]'>Quick links</h5>
                            <li>
                                <NavLink to="/" className="hover:text-[var(--primary-color)]">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className="hover:text-[var(--primary-color)]">
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="hover:text-[var(--primary-color)]">
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/product" className="hover:text-[var(--primary-color)]">
                                    Our Product and Services
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink to="/blog" className="hover:text-[var(--primary-color)]">
                                    Blog and Article
                                </NavLink>
                            </li> */}
                            <li>
                                <NavLink to="/media" className="hover:text-[var(--primary-color)]">
                                    Media/Gallery
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="md:text-left md:col-span-2">
                        <ul className="flex flex-col md:pr-10 md:gap-[1vw]">
                            <h5 className='font-[600] text-[var(--primary-color)]'>Legal</h5>
                            <li>
                                <NavLink to="/privacy-policy" className="hover:text-[var(--primary-color)]">
                                    Privacy Policy
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/terms-of-use" className="hover:text-[var(--primary-color)]">
                                    Terms of Use
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="md:text-left md:col-span-3">
                        <ul className="flex flex-col md:pr-10 md:gap-[1vw]">
                            <h5 className='font-[600] text-[var(--primary-color)]'>ConTact Us</h5>
                            <li>
                                <NavLink to="/" className="hover:text-[var(--primary-color)]">
                                   Business inquiry: +256 200 955 930
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="" className="hover:text-[var(--primary-color)]">
                                    Customer care: +256 200 955 930
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* icons */}
                    <div className='md:text-left md:col-span-2'>
                        <h5 className='font-[600] text-[var(--primary-color)] mb-4'>Socials</h5>
                        <div className="flex space-x-4 text-2xl text-[var(--primary-color)] text-[.8rem]">
                            <i className="fab fa-facebook hover:text-blue-800"></i>
                            <i className="fab fa-twitter hover:text-blue-500"></i>
                            <i className="fab fa-instagram hover:text-pink-500"></i>
                            <i className="fab fa-linkedin hover:text-red-600"></i>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
