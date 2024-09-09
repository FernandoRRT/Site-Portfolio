import { createBrowserRouter } from "react-router-dom";
import FrontPage from "../pages/frontPage/FrontPage";
import MainPage from "../pages/main/MainPage";
import Profile from "../pages/profile/Profile";
import Portfolio from "../pages/portfolio/Portfolio";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontPage />,
  },
  {
    path: "/resume",
    element: <MainPage />,
    children: [
      { path: "profile", element: <Profile /> },
      { path: "portfolio", element: <Portfolio /> },
    ],
  },
]);

