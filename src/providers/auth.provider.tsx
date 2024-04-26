import React, { PropsWithChildren, useEffect, useState } from "react";
import { AuthResponse } from "../types/auth";
import { AuthContext } from "../contexts/auth.context";

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [userData, setUserData] = useState<{
        username: string;
        email: string;
    } | undefined>({
        username: '',
        email: '',
    });

    const login = (data: AuthResponse) => {
        setUserData({
            username: data.user.username,
            email: data.user.email,
        });
        localStorage.setItem('events-auth', data.jwt);
        localStorage.setItem('events-profile', JSON.stringify(data.user));
    };

    const logout = () => {
        setUserData(undefined);
        localStorage.removeItem('events-auth');
        localStorage.removeItem('events-profile');
    };

    useEffect(() => {
        const savedUser = localStorage.getItem('events-profile');
        if (!savedUser) {
            return;
        }

        const parsed = JSON.parse(savedUser) as AuthResponse['user'];
        setUserData({
            username: parsed.username,
            email: parsed.email,
        });
    }, []);
    return (
        <AuthContext.Provider
            value={{
                username: userData?.username || '',
                email: userData?.email || '',
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};