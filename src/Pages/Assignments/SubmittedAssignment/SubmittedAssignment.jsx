import { Helmet } from "react-helmet-async";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import useUsersPost from "../../../hooks/useUsersPost";
import { Link } from "react-router-dom";

const SubmittedAssignment = () => {
    const post = useUsersPost()
    const isExit = post?.filter(item => item?.status === 'pending');
    return (
        <>
            <Helmet>
                <title>Submitted Assignment || Group Study</title>
            </Helmet>
            <PageTitle title={'Submitted All Assignments'} />

            {
                isExit?.length >= 1 ? <>
                    <div>
                        <h2>Total Submitted : {isExit?.length}</h2>
                        <div className="px-4 py-5 border-b rounded-t sm:px-6">
                            <div className="overflow-hidden bg-white shadow dark:bg-gray-800 sm:rounded-md">
                                <ul className="divide-y divide-gray-200">
                                    {
                                        isExit?.map(item =>
                                            <li key={item?._id}>
                                                <a className="block hover:bg-gray-50 dark:hover:bg-gray-900">
                                                    <div className="px-4 py-4 sm:px-6">
                                                        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
                                                            <div>
                                                                <p className="text-gray-700 text-md dark:text-white md:truncate">
                                                                    {item?.examineeName}
                                                                </p>
                                                                <p className="flex items-center font-light text-gray-500 text-md dark:text-gray-300">
                                                                    {item?.title.slice(0, 40)}
                                                                </p>
                                                            </div>
                                                            <p className="inline-flex px-2 text-xl font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                                                                Total Marks : <span className="text-red-600">{item?.marks}</span>
                                                            </p>
                                                            <div className="flex flex-shrink-0 ml-2">
                                                                <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                                    <Link to={`/check_assignment/${item?._id}`}>
                                                                        Give Mark
                                                                    </Link>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        )
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                </> : <>
                    <div className="text-2xl font-bold h-[calc(100vh-80vh)] flex justify-center items-center">
                        There has no data available
                    </div>
                </>
            }


        </>
    );
};

export default SubmittedAssignment;