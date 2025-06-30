import { useQuery } from "@tanstack/react-query";
import toast, {Toaster} from "react-hot-toast"
import { Outlet, useNavigate } from "react-router-dom";
// import axios from "axios"
import authService from "./BackendService/Auth.Service";
import { useDispatch } from "react-redux";
import { login, logout } from "./Store/AuthSlice";
function App() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {data, isLoading, error, status}=useQuery({
    queryKey:["user"],
    queryFn:async()=>{
      const res = await authService.getUserDetails();
      if(res.data){
        dispatch(login(res.data))
        return res;
      }else{
        dispatch(logout())
      }
    },
    retry:false
  })
  // console.log("Data: ",data);
  // console.log("IsLoading: ",isLoading);
  // console.log("Error: ",error);
  // console.log("Status: ",status);
  
  return isLoading ? (
      <div className="mx-autu flex w-full h-screen justify-center items-center">
      <h1>loading...</h1>
    </div>
  ) :(
    <h1 className="bg-white text-5xl h-screen ">
      <Outlet/>
    <Toaster/>
    </h1>
  )
}

export default App;
