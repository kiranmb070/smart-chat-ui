import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../auth/login"
import { Register } from "../auth/singUp"
import { Paths } from "./paths";
import ProtectedRoute from "./protectedRoute";

 function Home(){
    return(
        <>
        <Routes>
            <Route path={Paths.LOGIN} element={<Login />} />
        <Route path={Paths.SIGNUP} element={<Register />} />
        <Route path={Paths.CHAT} element={<ProtectedRoute><div>Chat</div></ProtectedRoute>} />
       <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        </>
    )
}

export default Home;
