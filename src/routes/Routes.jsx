import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";
import TeacherToByteskill from "../pages/teacherToByteskill/TeacherToByteskill";
import AllClasses from "../pages/allClasses/AllClasses";
import Dashboard from "../layouts/Dashboard";
import Users from "../pages/Dashboard/admin/Users";
import AdminDashboard from "../pages/Dashboard/admin/AdminDashboard";
import TeacherRequest from "../pages/Dashboard/admin/TeacherRequest";
import Allclasses from "../pages/Dashboard/admin/Allclasses";
import Profile from "../pages/Dashboard/admin/Profile";
import PrivateRoutes from "./privateRoutes/PrivateRoutes";
import AddClass from "../pages/Dashboard/teacherDashboard/AddClass";
import MyClass from "../pages/Dashboard/teacherDashboard/MyClass";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'allClasses',
                element:<AllClasses/>
            },
            {
                path: 'teachnByteskill',
                element: <PrivateRoutes><TeacherToByteskill/></PrivateRoutes>
            },
            {
                path: 'signIn',
                element: <SignIn />
            },
            {
                path: 'signUp',
                element: <SignUp />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            // admin routes here
            {
                path:'admin',
                element: <AdminDashboard/>
            },
            {
                path: 'teacherRequest',
                element: <TeacherRequest/>
            },
            {
                path: 'allclasses',
                element: <Allclasses/>
            },
            {
                path: 'users',
                element:<Users/>
            },
            {
                path: 'profile',
                element:<Profile/>
            },
            // teacher admin
            {
                path: 'addClass',
                element:<AddClass/>
            },
            {
                path: 'myClass',
                element:<MyClass/>
            },
            // student admin
            {
                path: 'myEnrollClass',
                element:<MyClass/>
            },
        ]
    }
    
]);

export default router;