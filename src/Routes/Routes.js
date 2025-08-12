import Links from "../components/Menu/Links/links"
import Profile from "../components/Menu/profile/profile"
import Home from "../components/Menu/home/home"

export const Routes = [
    { path: "/", element: <Home></Home> },
    { path: "/links", element: <Links></Links> },
    { path: "/profile", element: <Profile></Profile> },
]
