import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Form from "../Pages/Shared/Form/Form";
import AllAssignment from "../Pages/Assignments/AllAssignments/AllAssignment";

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
            }
        ]
    },
    {
        path: '/login',
        element: <Form></Form>
    }
]);

export default Route;