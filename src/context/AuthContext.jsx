import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    const login = (email, password) => {
        if (email === "admin@example.com" && password === "password") {
            setIsAuthenticated(true);
            navigate("/");
        } else {
            alert("Invalid credentials!");
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
