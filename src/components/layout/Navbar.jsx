import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { menuOutline, closeOutline } from "ionicons/icons";
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.jpg';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        // Close the menu when a link is clicked on small screens
        if (menuOpen) {
            toggleMenu();
        }
    };

    return (
        <header className="bg-white overflow-x-hidden mb-8">
            <nav className="flex justify-between bg-white shadow-md items-center py-1 px-[10%] w-full mx-0 px-[10%] z-[9999] fixed top-0 left-0">
                <div className="cursor-pointer hover:scale-[1.1] duration-300 ease-in-out">
                    <NavLink to="/">
                        <div className="w-[90px]">
                        <img src={logo} alt="gvl logo" className="" />
                        </div>
                    </NavLink>
                </div>

                <div className={`nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 ${menuOpen ? "top-[80%] min-h-[30vh] text-[var(--primary)] backdrop-blur- bg-gray-100 gz-10 py-2" : "top-[-900%]"} md:w-auto w-full flex items-center`}>
                    <div className="pl-12 flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-6 w-full justify-between">
                        <ul className="flex md:flex-row flex-col md:pr-16 md:items-center gap-4">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => 
                                        `group relative inline-block py-2 md:px-2 px-5 ${
                                            isActive ? 'text-[#0d438d]' : 'hover:text-[#0d438d]'
                                        }`
                                    }
                                    onClick={handleLinkClick}
                                >
                                    {({ isActive }) => (
                                        <>
                                            Home
                                            <span className={`absolute bottom-0 left-0 h-[3px] bg-[var(--primary-color)] rounded-full transition-all duration-300 ${
                                                isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}></span>
                                        </>
                                    )}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink 
                                    to="/about" 
                                    className={({ isActive }) => 
                                        `group relative inline-block py-2 md:px-2 px-5 ${
                                            isActive ? 'text-[#0d438d]' : 'hover:text-[#0d438d]'
                                        }`
                                    }
                                    onClick={handleLinkClick}
                                >
                                    {({ isActive }) => (
                                        <>
                                            About
                                            <span className={`absolute bottom-0 left-0 h-[3px] bg-[var(--primary-color)] rounded-full transition-all duration-300 ${
                                                isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}></span>
                                        </>
                                    )}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink 
                                    to="/product" 
                                    className={({ isActive }) => 
                                        `group relative inline-block py-2 md:px-2 px-5 ${
                                            isActive ? 'text-[#0d438d]' : 'hover:text-[#0d438d]'
                                        }`
                                    }
                                    onClick={handleLinkClick}
                                >
                                    {({ isActive }) => (
                                        <>
                                            Product
                                            <span className={`absolute bottom-0 left-0 h-[3px] bg-[var(--primary-color)] rounded-full transition-all duration-300 ${
                                                isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}></span>
                                        </>
                                    )}
                                </NavLink>
                            </li>

                             {/* <li>
                                <NavLink 
                                    to="/blog" 
                                    className={({ isActive }) => 
                                        `group relative inline-block py-2 md:px-2 px-5 ${
                                            isActive ? 'text-[#0d438d]' : 'hover:text-[#0d438d]'
                                        }`
                                    }
                                    onClick={handleLinkClick}
                                >
                                    {({ isActive }) => (
                                        <>
                                            Blog
                                            <span className={`absolute bottom-0 left-0 h-[3px] bg-[var(--primary-color)] rounded-full transition-all duration-300 ${
                                                isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}></span>
                                        </>
                                    )}
                                </NavLink>
                            </li> */}

                            <li>
                                <NavLink 
                                    to="/media" 
                                    className={({ isActive }) => 
                                        `group relative inline-block py-2 md:px-2 px-5 ${
                                            isActive ? 'text-[#0d438d]' : 'hover:text-[#0d438d]'
                                        }`
                                    }
                                    onClick={handleLinkClick}
                                >
                                    {({ isActive }) => (
                                        <>
                                            Media Gallery
                                            <span className={`absolute bottom-0 left-0 h-[3px] bg-[var(--primary-color)] rounded-full transition-all duration-300 ${
                                                isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}></span>
                                        </>
                                    )}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink 
                                    to="/contact" 
                                    className={({ isActive }) => 
                                        `group relative bg-[var(--primary-color)] text-white rounded inline-block py-1 md:px-6 px-5 hover:shadow-lg hover:shadow-gray-400 ${
                                            isActive ? 'text-green-600' : ''
                                        }`
                                    }
                                    onClick={handleLinkClick}
                                >
                                    Contact
                                    <span className="absolute bottom-0 left-0 w-0 rounded-full transition-all duration-300 group-hover:w-full"></span>
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>

                <div className="flex items-center gap-6 md:hidden">
                    <IonIcon
                        icon={menuOpen ? closeOutline : menuOutline}
                        className="text-3xl cursor-pointer text-gray-800"
                        onClick={toggleMenu}
                    />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;