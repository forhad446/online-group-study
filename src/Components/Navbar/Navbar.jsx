import { useState } from "react";
import logo from './../../assets/logo.png'
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { MdLogout, MdOutlineSettings, MdDashboard } from "react-icons/md";

const Navbar = () => {

    const { user, logOut } = useAuth();
    console.log(user);

    const handleLogOut = () => {
        logOut()
    }

    const svgs = [
        { svg: (<MdLogout title="Log Out" onClick={handleLogOut} />) },
        { svg: (<MdOutlineSettings />) },
        { svg: (<MdDashboard />) }
    ];

    const navItems = <>
        <li>
            <Link
                to="/all_assignment"
                title="All Assignments"
                className="font-medium tracking-wide text-[#000] transition-colors duration-200 hover:text-teal-accent-400"
            >
                Assignments
            </Link>
        </li>
        <li>
            <Link
                to="/create_assignment"
                title="Create Assignments"
                className="font-medium tracking-wide text-[#000] transition-colors duration-200 hover:text-teal-accent-400"
            >
                Create Assignments
            </Link>
        </li>
        <li>
            <Link
                to="/my_assignments"
                title="My Assignments"
                className="font-medium tracking-wide text-[#000] transition-colors duration-200 hover:text-teal-accent-400"
            >
                My Assignments
            </Link>
        </li>
        <li>
            <Link
                to="/submitted_assignments"
                title="Submitted Assignments"
                className="font-medium tracking-wide text-[#000] transition-colors duration-200 hover:text-teal-accent-400"
            >
                Submitted Assignments
            </Link>
        </li>
        {
            user?.email ?
                <>
                    <div className="hidden lg:flex items-center flex-wrap justify-around">
                        <div className="relative group">
                            <img className="w-[40px] h-[40px] bg-slate-500 object-cover rounded-full border-2 border-white shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]" src={user?.photoURL ? user?.photoURL : "https://source.unsplash.com/300x300/?profile"} alt="" />
                            <span className="h-5 w-5 bg-white p-[2px] shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  group-hover:-rotate-180 duration-500 absolute rounded-full -bottom-2 left-[50%] -translate-x-1/2">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#60A5FA"> <g id="SVGRepo_bgCarrier" strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"><g data-name="add" id="add-2"><g> <line fill="none" stroke="#60A5FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="19" y2="5"></line><line fill="none" stroke="#60A5FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="5" x2="19" y1="12" y2="12"></line></g></g></g></g>
                                </svg>
                            </span>
                            <div className="group flex flex-col items-center justify-center w-max mx-auto absolute top-10 left-[-50%] translate-x-1/2">
                                {/* icon container  */}
                                <div className="space-y-4 duration-500 h-0 group-hover:my-4 group-hover:h-full ">
                                    {/* Icon Map */}
                                    {svgs?.map((svg, idx) => (
                                        <div key={idx} className={`flex justify-center items-center w-10 h-10 hover:bg-slate-200 bg-slate-50 rounded-full scale-0 group-hover:scale-100 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] opacity-0 group-hover:opacity-100 ${idx === 0 ? 'delay-[400ms] group-hover:delay-100' : idx === 1 ? 'delay-300 group-hover:delay-200' : idx === 2 ? 'delay-200 group-hover:delay-300' : idx === 3 ? 'delay-100 group-hover:delay-[400ms]' : 'delay-[400ms] group-hover:delay-100'}`}>
                                            {svg?.svg}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                : <>
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
        }

    </>

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="bg-[#ACC8E5]">
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <Link
                        href="/"
                        aria-label="Group Study"
                        title="Group Study"
                        className="inline-flex items-center"
                    >
                        <img src={logo} alt="" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-[#000] uppercase">
                            Group Study
                        </span>
                    </Link>
                    <ul className=" items-center hidden space-x-8 lg:flex">
                        {navItems}
                    </ul>
                </div>
                <div className="absolute lg:hidden top-0 left-0 w-full">
                    <div className="p-5 bg-[#ACC8E5] border rounded shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <Link
                                    to="/"
                                    aria-label="Group Study"
                                    title="Group Study"
                                    className="inline-flex items-center"
                                >
                                    <img src={logo} alt="" />
                                    <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                        Group Study
                                    </span>
                                </Link>
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