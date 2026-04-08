import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../auth/login"
import { Register } from "../auth/singUp"
import { Paths } from "./paths";
import ProtectedRoute from "./protectedRoute";
import { DashBoard } from "../dashboard";

 function Home(){
    return(
        <>
        <Routes>
            <Route 
            path={Paths.LOGIN}
             element={<Login />} 
             />
        <Route 
        path={Paths.SIGNUP} 
        element={<Register />} 
        />
       <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <DashBoard />
            </ProtectedRoute>
          }
        />
       <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        </>
    )
}

export default Home;
