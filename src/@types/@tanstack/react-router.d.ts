import routers from "~/routers"

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof routers
  }
}
