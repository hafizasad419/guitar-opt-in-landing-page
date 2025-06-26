import { BrowserRouter } from "react-router-dom"
import BaseRoutes from "./routes/Routes"

function App() {
  return (
    <>
      <BrowserRouter>
        <BaseRoutes />
      </BrowserRouter>
    </>
  )
}

export default App