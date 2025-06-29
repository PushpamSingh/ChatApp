import toast, {Toaster} from "react-hot-toast"
import { Outlet } from "react-router-dom";
function App() {
  return (
    <h1 className="bg-white text-5xl h-screen ">
      <Outlet/>
    <Toaster/>
    </h1>
  )
}

export default App;
