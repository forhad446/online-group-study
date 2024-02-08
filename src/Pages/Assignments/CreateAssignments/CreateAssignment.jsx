import { Helmet } from "react-helmet-async";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Swal from "sweetalert2";


const CreateAssignment = () => {
    const [startDate, setStartDate] = useState(new Date());

    const handleAddAssignment = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const thumbnailImageUrl = form.imageLink.value;
        const level = form.level.value;
        const dueDate = form.dueDate.value;
        const assignmentInfo = { title, description, marks, thumbnailImageUrl, level, dueDate }

        console.log(assignmentInfo);
        if (!title) {
            return console.log('title must needed');
        }
        if (!description) {
            return console.log('Description must needed');
        }
        axios.post('http://localhost:5000/assignment', assignmentInfo)
            .then(() => {
                Swal.fire({
                    title: "Good job!",
                    text: "New Assignment Added Done!",
                    icon: "success"
                });
                form.reset();
            })
            .catch((error) => { console.log(error); });
    }
    return (
        <>
            <Helmet>
                <title>Create Assignment || Group Study</title>
            </Helmet>
            <PageTitle title={'Create Assignment'} />
            <div>
                <form onSubmit={handleAddAssignment} className={`p-8 w-full mr-0 ml-auto duration-500 $`}>
                    <h1 className="backdrop-blur-sm text-2xl lg:text-4xl pb-4">Create New Assignment</h1>
                    <div className="space-y-5">
                        <label htmlFor="_title" className="block">Title</label>
                        <input name="title" type="text" placeholder="Enter title" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                        <label htmlFor="description" className="block">Description</label>
                        <textarea className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" name="description" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className=" flex items-center justify-between gap-3">
                        <div className="w-1/2">
                            <label htmlFor="_marks" className="block">Marks</label>
                            <input name="marks" type="text" placeholder="Enter marks" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                        </div>
                        <div className="w-1/2">
                            <label className="block">Thumbnail
                                Image URL</label>
                            <input name="imageLink" type="text" placeholder="Thumbnail Image URL" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
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
                    <button type="submit" className="py-2 px-5 mb-4 mx-auto mt-8 shadow-lg border rounded-md border-black block">Add Assignment</button>
                </form>
            </div>
        </>
    );
};

export default CreateAssignment;