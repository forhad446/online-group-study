import { useState } from "react";
import logo from './../../assets/logo.png'
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
    const navItems = <>
        <li>
            <Link
                to="/"
                title="All Assignments"
                className="font-medium tracking-wide text-[#000] transition-colors duration-200 hover:text-teal-accent-400"
            >
                Assignments
            </Link>
        </li>
        <li>
            <Link
                to="/"
                title="Create Assignments"
                className="font-medium tracking-wide text-[#000] transition-colors duration-200 hover:text-teal-accent-400"
            >
                Create Assignments
            </Link>
        </li>
        <li>
            <Link
                to="/"
                title="My Assignments"
                className="font-medium tracking-wide text-[#000] transition-colors duration-200 hover:text-teal-accent-400"
            >
                My Assignments
            </Link>
        </li>
        <li>
            <Link
                to="/"
                title="Submitted Assignments"
                className="font-medium tracking-wide text-[#000] transition-colors duration-200 hover:text-teal-accent-400"
            >
                Submitted Assignments
            </Link>
        </li>
        <li>
            <Link
                to="/login"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-[#000] transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                aria-label="Login"
                title="Login"
            >
                Login
            </Link>
        </li>
    </>
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="bg-[#ACC8E5]">
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                    >
                        <img src={logo} alt="" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-[#000] uppercase">
                            Group Study
                        </span>
                    </a>
                    <ul className=" items-center hidden space-x-8 lg:flex">
                        {navItems}
                    </ul>
                </div>
                <div className="absolute lg:hidden top-0 left-0 w-full">
                    <div className="p-5 bg-[#ACC8E5] border rounded shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <a
                                    href="/"
                                    aria-label="Company"
                                    title="Company"
                                    className="inline-flex items-center"
                                >
                                    <img src={logo} alt="" />
                                    <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                        Group Study
                                    </span>
                                </a>
                            </div>
                            {/* menu button */}
                            <div>
                                <button
                                    aria-label="Close Menu"
                                    title="Close Menu"
                                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                >
                                    {
                                        isMenuOpen ?
                                            <MdClose size={32} /> :
                                            <MdOutlineMenu size={32} />
                                    }

                                </button>
                            </div>
                        </div>
                        {/* menu for small device  */}
                        {
                            isMenuOpen &&
                            <nav>
                                <ul className="space-y-4">
                                    {navItems}
                                </ul>
                            </nav>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;