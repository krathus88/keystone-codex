import { defaultTheme } from "@styles/index"
import { createRouter, RouterProvider } from "@tanstack/react-router"
import { Provider } from "@ui/provider"
import { routeTree } from "./routeTree.gen"

// Create a new router instance
const router = createRouter({ routeTree: routeTree })

// Register the router instance for type safety
declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router
    }
}

export default function App() {
    return (
        <Provider theme={defaultTheme}>
            <RouterProvider router={router} />
        </Provider>
    )
}
