import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../auth/login"
import { Register } from "../auth/singUp"
import { Paths } from "./paths";

 function Home(){
    return(
        <>
        <Routes>
            <Route path={Paths.LOGIN} element={<Login />} />
        <Route path={Paths.SIGNUP} element={<Register />} />
        <Route path={Paths.CHAT} element={<div>Chat</div>} />
       <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        </>
    )
}

export default Home;
