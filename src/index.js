import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./output.css"
import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
// import { myContext } from "./myContext/myContext"
const queryClient = new QueryClient()



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                {/* <myContext value={}> */}
                    <App />
                {/* </myContext> */}
            </QueryClientProvider>  
        </BrowserRouter>
    </React.StrictMode>
)
