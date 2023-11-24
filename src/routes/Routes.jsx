import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";

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
                path: 'signIn',
                element: <SignIn />
            },
            {
                path: 'signUp',
                element: <SignUp />
            },
        ]
    },
    
]);

export default router;