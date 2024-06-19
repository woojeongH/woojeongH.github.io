import "~/styles/app.css"
import Routers from "~/routers"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

function App() {
  return <QueryClientProvider client={queryClient}>{Routers}</QueryClientProvider>
}

export default App
