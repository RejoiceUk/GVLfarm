// BlogLayout.jsx - Main blog page with navigation
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import BackgroundImg from '../../layout/BackgroundImg';
import Footer from '../../layout/Footer';

export default function MediaGalleryLayout() {
    return (
        <>
            <BackgroundImg heading="Media and Gallery" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque laudantium nostrum quasi accusantium illo dolor necessitatibus doloribus recusandae consequatur voluptates." />
            <div className='px-[10%] py-[3%] bg-[#E3E3E3]'>

                <div>
                    <p className='text-[.9rem]'>Through Our Lens: Life on the Farm</p>
                    <h3 className="text-[1.5rem] md:text-[2rem] font-semibold text-[var(--primary-color)]">From Our Gallery</h3>
                </div>
                <nav className='flex md:flex-row flex-col text-[.9rem] text-center gap-4 font-[500] my-6 mb-10 text-[var(--primary-color)]'>
                    <NavLink
                        to='/media'
                        className={({ isActive }) =>
                            `py-1 flex items-center px-6 rounded-[50px] transition-all duration-300 ${isActive ? 'bg-[var(--primary-color)] text-white' : 'hover:underline hover:bg-[var(--primary-color)] hover:text-white'
                            }`
                        }
                        end
                    >
                        All Post
                    </NavLink>
                    <NavLink
                        to='/media/agriculture-tips'
                        className={({ isActive }) =>
                            `py-1 flex items-center px-6 rounded-[50px] transition-all duration-300 ${isActive ? 'bg-[var(--primary-color)] text-white' : 'hover:underline hover:bg-[var(--primary-color)] hover:text-white'
                            }`
                        }
                    >
                        Agriculture tip
                    </NavLink>
                    <NavLink
                        to='/media/sotries'
                        className={({ isActive }) =>
                            `py-1 flex items-center px-6 rounded-[50px] transition-all duration-300 ${isActive ? 'bg-[var(--primary-color)] text-white' : 'hover:underline hover:bg-[var(--primary-color)] hover:text-white'
                            }`
                        }
                    >
                        Community Stories
                    </NavLink>

                    <NavLink
                        to='/media/farmi'
                        className={({ isActive }) =>
                            `py-1 flex items-center px-6 rounded-[50px] transition-all duration-300 ${isActive ? 'bg-[var(--primary-color)] text-white' : 'hover:underline hover:bg-[var(--primary-color)] hover:text-white'
                            }`
                        }
                    >
                        Farm Innovation
                    </NavLink>
                    <NavLink
                        to='/media/news-updates'
                        className={({ isActive }) =>
                            `py-1 flex items-center px-6 rounded-[50px] transition-all duration-300 ${isActive ? 'bg-[var(--primary-color)] text-white' : 'hover:underline hover:bg-[var(--primary-color)] hover:text-white'
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