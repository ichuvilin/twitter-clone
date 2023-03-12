import Tweets from "./components/Tweets/Tweets";
import Profile from "./components/Profile/Profile";
import Login from "./components/Auth/Login";
import Registration from "./components/Auth/Registration";

export const authRoutes = [
    {
        path: "*",
        Component: Tweets
    },
    {
        path: "/profile/:id",
        Component: Profile
    }
]

export const publicRoutes = [
    {
        path: "/login",
        Component: Login
    },
    {
        path: "/registration",
        Component: Registration
    }
]