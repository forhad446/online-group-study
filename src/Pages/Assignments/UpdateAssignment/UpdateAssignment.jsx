import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import { useParams } from "react-router-dom";
import useAllAssignment from "../../../hooks/useAllAssignment";

const UpdateAssignment = () => {
    const [startDate, setStartDate] = useState(new Date());
    // const { user } = useAuth();
    const { id } = useParams();
    const assignment = useAllAssignment();

    const isExit = assignment.find(item => item?._id === id)

    const handleDeleteAssignment = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value || isExit?.title;
        const description = form.description.value || isExit?.description;
        const marks = form.marks.value || isExit?.marks;
        const thumbnailImageUrl = form.imageLink.value || isExit?.thumbnailImageUrl;
        const difficultyLevel = form.level.value || isExit?.difficultyLevel;
        const dueDate = form.dueDate.value || isExit?.dueDate;
        // const assignmentCreatorEmail = user?.email;
        const assignmentInfo = { title, description, marks, thumbnailImageUrl, difficultyLevel, dueDate }

        console.log(assignmentInfo);
        if (!title) {
            return console.log('title must needed');
        }
        if (!description) {
            return console.log('Description must needed');
        }
        axios
            .put(`http://localhost:5000/assignment/${id}`, assignmentInfo, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(() => {
                form.reset();
                Swal.fire({
                    title: "Good job!",
                    text: "Assignment Updated Done!",
                    icon: "success"
                });
            })
            .catch((error) => { console.log(error); });
    }
    return (
        <>
            <Helmet>
                <title>Update Assignment || Group Study</title>
            </Helmet>
            <PageTitle title={'Update Assignment'} />
            <div>
                <form onSubmit={handleDeleteAssignment} className={`p-8 w-full mr-0 ml-auto duration-500 $`}>
                    <h1 className="backdrop-blur-sm text-2xl lg:text-4xl pb-4">Update Assignment</h1>
                    <div className="space-y-5">
                        <label htmlFor="_title" className="block">Title</label>
                        <input name="title" type="text" placeholder={`${isExit?.title}`} className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                        <label htmlFor="description" className="block">Description</label>
                        <textarea placeholder={`${isExit?.description}`} className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" name="description" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className=" flex items-center justify-between gap-3">
                        <div className="w-1/2">
                            <label htmlFor="_marks" className="block">Marks</label>
                            <input placeholder={`${isExit?.marks}`} name="marks" type="text" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                        </div>
                        <div className="w-1/2">
                            <label className="block">Thumbnail
                                Image URL</label>
                            <input name="imageLink" type="text" placeholder={`${isExit?.thumbnailImageUrl}`} className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                        </div>
                    </div>
                    <div className=" flex items-center justify-between gap-3">
                        <div className="w-1/2">
                            <label htmlFor="_level" className="block">Select Level</label>
                            <select name="level" id="" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black">
                                <option value="easy">easy</option>
                                <option value="medium">medium</option>
                                <option value="hard">hard</option>
                            </select>
                        </div>
                        <div className="w-1/2">
                            <label className="block">Due Date</label>
                            <DatePicker name="dueDate" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                    </div>
                    {/* button type will be submit for handling form submission*/}
                    <button type="submit" className="py-2 px-5 mb-4 mx-auto mt-8 shadow-lg border rounded-md border-black block">Update Assignment</button>
                </form>
            </div>
        </>
    );
};

export default UpdateAssignment;