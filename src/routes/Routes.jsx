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
import AdminRutes from "./adminRoutes/AdminRutes";
import TeacherRoutes from "./teacherRoutes/TeacherRoutes";
import ErrorPage from "../pages/errorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement:<ErrorPage/>,
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
        element: <PrivateRoutes><Dashboard /></PrivateRoutes>,
        errorElement:<ErrorPage/>,
        children: [
            // admin routes here
            {
                path:'admin',
                element: <PrivateRoutes><AdminDashboard/></PrivateRoutes>
            },
            {
                path: 'teacherRequest',
                element: <AdminRutes><TeacherRequest/></AdminRutes>
            },
            {
                path: 'allclasses',
                element: <AdminRutes><Allclasses/></AdminRutes>
            },
            {
                path: 'users',
                element: <AdminRutes><Users/></AdminRutes>
            },
            {
                path: 'profile',
                element: <PrivateRoutes><Profile/></PrivateRoutes>
            },
            // teacher admin
            {
                path: 'addClass',
                element: <TeacherRoutes><AddClass/></TeacherRoutes>
            },
            {
                path: 'myClass',
                element: <TeacherRoutes><MyClass/></TeacherRoutes>
            },
            // student admin
            {
                path: 'myEnrollClass',
                element: <PrivateRoutes><MyClass/></PrivateRoutes>
            },
        ]
    }
    
]);

export default router;