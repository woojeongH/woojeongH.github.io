import { createRoute } from "@tanstack/react-router"
import Main from "~/components/pages/Home"
import { Root } from "~/routers"

export const HomeRoute = createRoute({
  getParentRoute: () => Root,
  path: "/",
  component: Main,
})

const routes = [HomeRoute]

export default routes
