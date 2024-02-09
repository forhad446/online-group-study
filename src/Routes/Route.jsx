import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Form from "../Pages/Shared/Form/Form";
import AllAssignment from "../Pages/Assignments/AllAssignments/AllAssignment";
import AssignmentDetails from "../Pages/Assignments/AssignmentDetails/AssignmentDetails";
import PrivateRoute from "./PrivateRoute";
import CreateAssignment from "../Pages/Assignments/CreateAssignments/CreateAssignment";
import MyAssignment from "../Pages/Assignments/MyAssignment/MyAssignment";
import UpdateAssignment from "../Pages/Assignments/UpdateAssignment/UpdateAssignment";
import SubmittedAssignment from "../Pages/Assignments/SubmittedAssignment/SubmittedAssignment";
import CheckAssignment from "../Pages/Assignments/CheckAssignment/CheckAssignment";

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
                path: '/assignment_update/:id',
                element: <PrivateRoute><UpdateAssignment /></PrivateRoute> 
            },
            {
                path: '/assignment_details/:id',
                element: <PrivateRoute><AssignmentDetails /></PrivateRoute> 
            },
            {
                path: '/check_assignment/:id',
                element: <PrivateRoute><CheckAssignment /></PrivateRoute> 
            },
            {
                path: '/submitted_assignments',
                element: <SubmittedAssignment></SubmittedAssignment>
            },
            {
                path: '/create_assignment',
                element: <CreateAssignment></CreateAssignment>
            },
            {
                path: '/my_assignments',
                element: <MyAssignment></MyAssignment>
            }
        ]
    },
    {
        path: '/login',
        element: <Form></Form>
    }
]);

export default Route;