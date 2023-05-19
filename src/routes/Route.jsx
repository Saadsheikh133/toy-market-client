import {createBrowserRouter,} from "react-router-dom";
import Main from "../layOuts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blog from "../pages/Blogs/Blog";
import AddToy from "../pages/AddToy/AddToy";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import MyToys from "../pages/MyToys/MyToys";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/addToy',
                element: <PrivateRoute>
                    <AddToy></AddToy>
                </PrivateRoute>
            },
            {
                path: '/myToys',
                element: <PrivateRoute>
                    <MyToys></MyToys>
                </PrivateRoute>
            }
        ]
    }
])
export default router;