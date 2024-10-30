// src/components/Header.tsx
import React from "react";
import { auth } from "../firebaseconfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/login");
    };

    return (
        <header>
            <h1>Todo App</h1>
            <button onClick={handleLogout}>Logout</button>
        </header>
    );
};

export default Header;
