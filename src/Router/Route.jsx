import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";


import Home from "../Pages/Home/Home";
import CreateAssignments from "../Pages/CreateAssignments/CreateAssignments";
import Assignments from "../Pages/Assignments/Assignments";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import AssignmentDetails from "../Pages/AssignmentDetails/AssignmentDetails";
import MyAssignments from "../Pages/myAssignments/MyAssignments";
import UpdateAssignment from "../Pages/UpdateAssignment/UpdateAssignment";
import Errorpage from "../Pages/ErrorPage/Errorpage";
import TakeAssignment from "../Pages/TakeAssignment/TakeAssignment";
import SubmitedAssignment from "../Pages/SubmitedAssignment/SubmitedAssignment";


const Route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement:<Errorpage></Errorpage>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/assignment',
                element:<Assignments></Assignments>,
                loader:()=>fetch('http://localhost:5000/createAssignment')
            },
            {
                path: '/createassignment',
                element: <PrivateRoute><CreateAssignments></CreateAssignments></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/assignmentDetails/:id',
                element:<PrivateRoute><AssignmentDetails></AssignmentDetails></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/createAssignment/${params.id}`)
            },
            {
                path:'/myAssignments',
                element:<PrivateRoute><MyAssignments></MyAssignments></PrivateRoute>
            },
            {
                path:'/updateAssignment/:id',
                element:<PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/createAssignment/${params.id}`)
            },
            {
                path:'/takeAssignment/:id',
                element:<PrivateRoute><TakeAssignment></TakeAssignment></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/createAssignment/${params.id}`)
            },
            {
                path:'/submitedAssingment',
                element:<SubmitedAssignment></SubmitedAssignment>,
                loader:()=>fetch('http://localhost:5000/submitedAssignment')

            }
        ]
    }
])

export default Route;