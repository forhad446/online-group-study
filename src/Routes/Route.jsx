import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Form from "../Pages/Shared/Form/Form";
import AllAssignment from "../Pages/Assignments/AllAssignments/AllAssignment";
import AssignmentDetails from "../Pages/Assignments/AssignmentDetails/AssignmentDetails";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/all_assignment',
                element: <AllAssignment></AllAssignment>
            },
            {
                path: '/assignment_details/:id',
                element: <AssignmentDetails></AssignmentDetails>
            }
        ]
    },
    {
        path: '/login',
        element: <Form></Form>
    }
]);

export default Route;