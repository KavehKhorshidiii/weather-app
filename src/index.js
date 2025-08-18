import ReactDOM from "react-dom/client"
import App from "./App"
import React from "react"
// output Tailwind
import "./output.css"
// Routers
import { BrowserRouter } from "react-router-dom"
// TanStack (React Query)
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
const queryClient = new QueryClient({
    defaultOptions: {
        refetchOnWindowFocus: false,
    },
})

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            {/* Routers */}
            <QueryClientProvider client={queryClient}>
                {/* TanStack (React Query) */}
                <App />
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>
)
