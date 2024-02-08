import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import { Helmet } from "react-helmet-async";
import { FaTwitter, FaInstagramSquare, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import useAllAssignment from "../../../hooks/useAllAssignment";

const AssignmentDetails = () => {

    const { id } = useParams()
    // const [assignment, setAssignment] = useState([])
    const [openModal, setOpenModal] = useState(false);
    const assignment = useAllAssignment()

    const isExit = assignment.find(item => item?._id === id);

    return (
        <>
            <Helmet>
                <title>Assignment Details || Group Study</title>
            </Helmet>
            <PageTitle title={'Assignments Details'} />

            <div className="">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div className="lg:pr-10">
                            <h5 className="mb-4 text-4xl font-extrabold leading-none">
                                {isExit?.title}
                            </h5>
                            <p className="mb-6 text-gray-900">
                                {isExit?.description}
                            </p>
                            <p className="mb-6 text-gray-900">
                                Published Date : {isExit?.dueDate}
                            </p>
                            <div className="flex items-center justify-center flex-wrap gap-6 text-sm md:text-base">
                                <button onClick={() => setOpenModal(true)} className="px-8 py-2 w-full rounded-lg bg-[#49B2FF] hover:bg-sky-600 duration-300 hover:scale-105 text-white font-semibold font-sans">
                                    Take assignment
                                </button>
                            </div>
                            <hr className="mb-5 border-gray-300" />
                            <div className="flex items-center space-x-4">
                                <Link
                                    to="https://www.twitter.com"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    <FaTwitter size={24} />
                                </Link>
                                <Link
                                    to="https://www.instagram.com"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    <FaInstagramSquare size={24} />
                                </Link>
                                <Link
                                    to="https://www.facebook.com"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    <FaFacebook size={24} />
                                </Link>
                                <Link
                                    to="https://www.youtube.com"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    <FaYoutube size={24} />
                                </Link>
                            </div>
                        </div>
                        <div>
                            <img
                                className="w-full h-56 rounded shadow-lg sm:h-96"
                                src={isExit?.thumbnailImageUrl}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* this is modal area */}
            <div onClick={() => setOpenModal(false)} className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 w-full h-full backdrop-blur-sm bg-black/20 duration-100`}>
                <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-full lg:w-[500px] bg-white drop-shadow-2xl rounded-lg ${openModal ? 'opacity-1 duration-300 translate-y-0' : '-translate-y-20 opacity-0 duration-150'}`}>
                    <form className="p-1 md:p-12">
                        <svg onClick={() => setOpenModal(false)} className="w-10 mx-auto mr-0 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#000000"></path></g></svg>
                        <h1 className="backdrop-blur-sm text-xl md:text-4xl pb-8">
                            Assignment submission form
                        </h1>
                        <div className="space-y-5">
                            <label htmlFor="pdfLink" className="block">Assignment Pdf Link</label>
                            <div className="relative">
                                <input id="email" type="text" name="pdfLink" placeholder="assignment pdf link" className="p-3 block w-full pl-10 drop-shadow-lg rounded-lg outline-none" />
                                <span className="absolute top-1/4 left-2">
                                    <FaFilePdf />
                                </span>
                            </div>
                            <label htmlFor="userComment" className="block">User Comment</label>
                            <div className="relative">
                                <textarea className="p-3 block w-full pl-10 drop-shadow-lg rounded-lg outline-none" name="userComment" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                        {/* button type will be submit for handling form submission*/}
                        <button type="button" className="w-full py-2 px-5 mb-4 mt-6 shadow-lg rounded-lg before:block before:-left-1 before:-top-1 before:bg-black before:rounded-lg before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:rounded-lg after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AssignmentDetails;