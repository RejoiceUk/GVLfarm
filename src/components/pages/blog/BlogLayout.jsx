// BlogLayout.jsx - Main blog page with navigation
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import BackgroundImg from '../../layout/BackgroundImg';
import Footer from '../../layout/Footer';

export default function BlogLayout() {
    return (
        <>
        <BackgroundImg heading="Blog" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque laudantium nostrum quasi accusantium illo dolor necessitatibus doloribus recusandae consequatur voluptates."/>
        <div className='px-[10%] py-[3%]'>
            <nav className='flex md:flex-row flex-col text-[.9rem] text-center gap-4 font-[500] my-6 mb-10 text-[var(--primary-color)]'>
                <NavLink 
                    to='/blog' 
                    className={({ isActive }) => 
                        `py-1 flex items-center px-6 rounded-[50px] transition-all duration-300 ${
                            isActive ? 'bg-[var(--primary-color)] text-white' : 'hover:underline hover:bg-[var(--primary-color)] hover:text-white'
                        }`
                    }
                    end
                >
                    All Post 
                </NavLink>
                <NavLink 
                    to='/blog/agriculture-tips' 
                    className={({ isActive }) => 
                        `py-1 flex items-center px-6 rounded-[50px] transition-all duration-300 ${
                            isActive ? 'bg-[var(--primary-color)] text-white' : 'hover:underline hover:bg-[var(--primary-color)] hover:text-white'
                        }`
                    }
                >
                    Agriculture tip
                </NavLink>
                <NavLink 
                    to='/blog/sotries' 
                    className={({ isActive }) => 
                        `py-1 flex items-center px-6 rounded-[50px] transition-all duration-300 ${
                            isActive ? 'bg-[var(--primary-color)] text-white' : 'hover:underline hover:bg-[var(--primary-color)] hover:text-white'
                        }`
                    }
                >
                    Community Stories
                </NavLink>

                <NavLink 
                    to='/blog/farmi' 
                    className={({ isActive }) => 
                        `py-1 flex items-center px-6 rounded-[50px] transition-all duration-300 ${
                            isActive ? 'bg-[var(--primary-color)] text-white' : 'hover:underline hover:bg-[var(--primary-color)] hover:text-white'
                        }`
                    }
                >
                    Farm Innovation
                </NavLink>
                <NavLink 
                    to='/blog/news-updates' 
                    className={({ isActive }) => 
                        `py-1 flex items-center px-6 rounded-[50px] transition-all duration-300 ${
                            isActive ? 'bg-[var(--primary-color)] text-white' : 'hover:underline hover:bg-[var(--primary-color)] hover:text-white'
                        }`
                    }
                >
                    News and Update
                </NavLink>
            </nav>
            
            {/* This is where the different post categories will render */}
            <Outlet />
        </div>
        <Footer />
        </>
    )
}