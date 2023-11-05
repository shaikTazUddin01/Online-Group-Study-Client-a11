import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";


import Home from "../Pages/Home/Home";
import CreateAssignments from "../Pages/CreateAssignments/CreateAssignments";
import Assignments from "../Pages/Assignments/Assignments";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";


const Route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'assignment',
                element:<Assignments></Assignments>
            },
            {
                path: 'createassignment',
                element: <CreateAssignments></CreateAssignments>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'signup',
                element:<SignUp></SignUp>
            }
        ]
    }
])

export default Route;