import { useRoutes } from "react-router-dom"
import { Routes } from "../../Routes/Routes"

export default function MenuSection() {
    const myRoutes = useRoutes(Routes)
    return  myRoutes
}
