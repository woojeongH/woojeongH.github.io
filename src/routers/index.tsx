import { createRootRoute, Outlet, createRouter, RouterProvider } from "@tanstack/react-router"
import Other from "./Other"

export const Root = createRootRoute({
  component: () => (
    <>
      <Outlet />
    </>
  ),
})

Root.addChildren([...Other])

export const routers = createRouter({ routeTree: Root })

export default <RouterProvider router={routers} />
