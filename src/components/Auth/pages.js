import React from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth";
import '../../assets/css/Auth.css'
import HomePage from "../../pages/HomePage";


export function AuthButton() {
    const navigate = useNavigate();
    const auth = useAuth();
    const location = useLocation();

    const handleSignout = () => {
        auth.signout(() => navigate("/"));
    };
    
    const handleLogin = () => {
        auth.signin(() => {
            navigate(location.state?.from || "/protected");
        });
    };

    return auth.user ? (
        <div className="flex flex-row">
            <p className="text-[14px]">
                {auth.user}
            </p>
            <button className="bg-[#717e8b] rounded-[5px] text-[15px] ml-[5px] text-[#000000] w-[50px]  " onClick={handleSignout}>Sign out</button>
        </div>
    ) : (
        <>
            <div className="flex flex-row">
                {/* <p className="text-[12px]">Not login</p> */}
                <button className="bg-[#8794a0] rounded-[5px] text-[10px] ml-[5px] text-[#000000] w-[50px]" onClick={handleLogin}>Log in</button>
            </div>
        </>

    );
}

export function PrivateRoute() {
    const auth = useAuth();

    return auth.user ? <ProtectedPage /> : <Navigate to="/login" replace />;
}

export function ProtectedPage() {
    return(
        <>
            <HomePage/>
        </>
    )
}

export function LoginPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const auth = useAuth();

    const handleLogin = () => {
        auth.signin(() => {
            navigate(location.state?.from || "/protected");
        });
    };

    return (
        <div>
            {/* <button className="bg-[#3A5B22] rounded-[5px] text-[14px] mt-[10px]" onClick={handleLogin}>Log in</button> */}
            <HomePage/>
        </div>
    );
}
