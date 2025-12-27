import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout />,
        children: [
            {
                path: '/',
                element: <Profile />
            }
        ]
    }
])

export default router;