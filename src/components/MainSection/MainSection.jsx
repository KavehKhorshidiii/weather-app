import { useRoutes } from "react-router-dom"
import { Routes } from "../../Routes/Routes"

export default function MainSection() {
    // Using useRoutes to generate app routes
    const myRoutes = useRoutes(Routes)
    // Return the generated routes as the main section
    return  myRoutes
}
