import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import { FaFilePdf } from "react-icons/fa";
import { IoMdBookmarks } from "react-icons/io";
import useUsersPost from "../../../hooks/useUsersPost";
import axios from "axios";
import Swal from "sweetalert2";

const CheckAssignment = () => {
    const { id } = useParams();
    const post = useUsersPost();

    const isExit = post?.find(item => item?._id === id);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const marks = form.marks.value;
        const feedback = form.feedback.value;
        const result = { marks, feedback };
        if (result) {
            axios
                .put(`http://localhost:5000/userPost/${id}`, result, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then(() => {
                    Swal.fire({
                        title: "Good job!",
                        text: "Assignment Updated Done!",
                        icon: "success"
                    });
                })
                .catch((error) => { console.log(error); });
        }
    }

    return (
        <>
            <Helmet>
                <title>Check Assignment || Group Study</title>
            </Helmet>
            <PageTitle title={'Check Assignment'} />
            <div>
                <form onSubmit={handleSubmit} className="p-1 md:p-12">
                    <h1 className="backdrop-blur-sm text-xl md:text-4xl pb-8">
                        Assignment submission form
                    </h1>
                    <div className="space-y-5">
                        <div className="relative">
                            <a className="p-3 block w-full pl-10 drop-shadow-lg rounded-lg outline-none py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 " href={`${isExit?.pdfLink}`} target="_blank" rel="noopener noreferrer">
                                <button type="button">
                                    View Assignment
                                </button>
                                <span className="absolute top-1/4 left-2">
                                    <FaFilePdf />
                                </span>
                            </a>
                        </div>
                        <div className="relative">
                            <p >Examinee Note :</p>
                            <p className="p-3 block w-full pl-10 drop-shadow-lg rounded-lg outline-none">
                                {isExit?.userComment}
                            </p>
                        </div>
                        <div className="relative">
                            <input type="text" name="marks" placeholder="Enter marks" className="p-3 block w-full pl-10 drop-shadow-lg rounded-lg outline-none" />
                            <span className="absolute top-1/4 left-2">
                                <IoMdBookmarks />
                            </span>
                        </div>
                        <label htmlFor="userComment" className="block">Give Feedback </label>
                        <div className="relative">
                            <textarea className="p-3 block w-full pl-10 drop-shadow-lg rounded-lg outline-none" name="feedback" id="" cols="1" rows="4"></textarea>
                        </div>
                    </div>
                    {/* button type will be submit for handling form submission*/}
                    <button type="submit" className="w-full py-2 px-5 mb-4 mt-6 shadow-lg rounded-lg before:block before:-left-1 before:-top-1 before:bg-black before:rounded-lg before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:rounded-lg after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block">Submit</button>
                </form>
            </div>
        </>
    );
};

export default CheckAssignment;