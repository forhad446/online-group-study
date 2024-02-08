import { Helmet } from "react-helmet-async";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import useAllAssignment from "../../../hooks/useAllAssignment";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";

const MyAssignment = () => {
    const [selectedLevel, setSelectedLevel] = useState('all');
    const { user } = useAuth();
    let result = useAllAssignment()

    let assignment = result.filter(item => item?.assignmentCreatorEmail === user?.email)

    const easy = assignment.filter(item => item.difficultyLevel === 'easy')
    const medium = assignment.filter(item => item.difficultyLevel === 'medium')
    const hard = assignment.filter(item => item.difficultyLevel === 'hard')

    if (selectedLevel === 'easy') {
        assignment = easy;
    } else if (selectedLevel === 'medium') {
        assignment = medium;
    } else if (selectedLevel === 'hard') {
        assignment = hard;
    }

    const handleSelectChange = (event) => {
        setSelectedLevel(event.target.value);
    };

    // handle Delete Assignment
    const handleDeleteAssignment = (id) => {
        if (id) {
            Swal.fire({
                title: "Are you sure?",
                text: "You want to delete it!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`http://localhost:5000/myAssignment/${id}`)
                        .then(res => {
                            console.log(res);
                        })
                        .catch(error => {
                            console.error(error);
                        });
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your assignment has been deleted.",
                        icon: "success"
                    });
                }
            });
        }

    }
    return (
        <>
            <Helmet>
                <title>My Assignment || Group Study</title>
            </Helmet>
            <PageTitle title={'My Assignments'} />
            <div className="w-full text-center md:text-left mx-1">
                <select
                    onChange={handleSelectChange}
                    className="select select-info border-0 w-full max-w-xs"
                >
                    <option disabled selected>Filter Level</option>
                    <option value="all">all</option>
                    <option value="easy">easy</option>
                    <option value="medium">medium</option>
                    <option value="hard">hard</option>
                </select>
            </div>
            <div className="grid px-3 grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                {
                    assignment.map((item, idx) =>
                        <div key={idx} className="px-4 py-8 shadow-lg max-w-[350px] font-sans rounded-xl space-y-6 mx-auto">
                            <div className="flex justify-center w-full h-48 lg:h-[280px] relative">
                                <div className="flex justify-between items-center left-4 right-4 top-4 absolute">
                                    <div className="flex items-center">
                                        <svg width={30} className="hover:fill-red-500 hover:stroke-red-500 stroke-2 fill-transparent stroke-white " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path></g></svg>
                                    </div>
                                    <button className="bg-[#0095FF] hover:bg-[#0095FF]/90 duration-200 text-white font-medium px-3 py-1 rounded-xl">
                                        {item?.difficultyLevel}
                                    </button>
                                </div>
                                <img className="rounded-lg bg-black/40 w-full h-full" src={item?.thumbnailImageUrl} alt={item?.title} />
                            </div>
                            <div className="text-center w-[85%] mx-auto font-semibold space-y-2">
                                <h6 className="text-sm md:text-base lg:text-lg">
                                    {item?.title}
                                </h6>
                                <p className="text-gray-400 text-xs md:text-sm font-semibold">
                                    <span>Total Marks :</span> {item?.marks}
                                </p>
                            </div>
                            <div className="flex items-center justify-center flex-wrap gap-6 text-sm md:text-base">
                                <button className="px-8 py-2 w-full rounded-lg bg-[#49B2FF] hover:bg-sky-600 duration-300 hover:scale-105 text-white font-semibold font-sans">
                                    <Link to={`/assignment_details/${item?._id}`}>View Assignment</Link>
                                </button>
                                <button className="px-8 py-2 w-full rounded-lg bg-[#49B2FF] hover:bg-sky-600 duration-300 hover:scale-105 text-white font-semibold font-sans">Update Assignment</button>
                                <button onClick={() => handleDeleteAssignment(`${item?._id}`)} className="px-8 py-2 w-full rounded-lg bg-[#49B2FF] hover:bg-sky-600 duration-300 hover:scale-105 text-white font-semibold font-sans">
                                    Delete Assignment
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default MyAssignment;