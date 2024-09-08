
import { createBrowserRouter } from "react-router-dom";
import FrontPage from "../pages/frontPage/FrontPage";
import MainPage from "../pages/main/MainPage";
import Profile from "../pages/profile/Profile";


export const router = createBrowserRouter([
    {
    path: "/",
    element: <FrontPage />,
    },
    {
    path: "/about",
    element: <MainPage />,
    children: [
        {path: "profile", element: <Profile />}
    ]
    }
]);
