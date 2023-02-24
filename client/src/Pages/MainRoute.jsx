import { Route, Routes } from "react-router-dom"
import Navbar from "../component/Navbar"
import Login from "./Login"
import Signup from "./Signup"
const Main = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Signup />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </div>
    )
}

export default Main;