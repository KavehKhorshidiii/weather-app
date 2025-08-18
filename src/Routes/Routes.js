import Links from "../components/MainSection/Links/Links"
import History from "../components/MainSection/History/History"
import Home from "../components/MainSection/Home/Home"

export const Routes = [
    { path: "/", element: <Home/> },    //Home page
    { path: "/links", element: <Links/> },    //Link page
    { path: "/profile", element: <History/> },    //History page
]
